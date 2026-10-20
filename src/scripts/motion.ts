import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let initialised = false;
let activeMedia: ReturnType<typeof gsap.matchMedia> | undefined;
const revealed = new WeakSet<HTMLElement>();

/** Scroll reveals follow the native scroll position; content is visible without JS. */
export function initialiseMotion() {
  if (initialised) return;
  initialised = true;
  gsap.registerPlugin(ScrollTrigger);
  let revealArchiveCards: (() => void) | undefined;

  const rebuild = () => {
    activeMedia?.revert();
    activeMedia = undefined;
    if (document.documentElement.dataset.motionPaused === 'true') return;

    activeMedia = gsap.matchMedia();
    activeMedia.add({
      allow: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 900px)',
    }, context => {
      if (!context.conditions?.allow) return;
      const desktop = Boolean(context.conditions.desktop);
      const handled = new Set<HTMLElement>();
      const marked = new Set<HTMLElement>();
      const animations = new Map<HTMLElement, gsap.core.Tween>();
      const distance = desktop ? 42 : 22;

      const mark = (element: HTMLElement, kind: 'text' | 'image' | 'card') => {
        handled.add(element);
        marked.add(element);
        element.classList.add('motion-unfold');
        element.dataset.motionReveal = kind;
      };
      const alreadyVisible = (element: HTMLElement) => {
        if (revealed.has(element)) return true;
        const rect = element.getBoundingClientRect();
        // Never hide the content the reader is already looking at after a preference change.
        if (rect.top < window.innerHeight * .88) {
          revealed.add(element);
          return true;
        }
        return false;
      };
      const finish = (element: HTMLElement) => {
        revealed.add(element);
        gsap.set(element, { clearProps: 'transform,opacity,clipPath,willChange' });
      };
      const reveal = (element: HTMLElement, kind: 'text' | 'image' | 'card', delay = 0) => {
        if (handled.has(element) || element.closest('[hidden]')) return;
        mark(element, kind);
        if (alreadyVisible(element)) return;
        const image = kind === 'image';
        const animation = gsap.fromTo(element, {
          opacity: image ? .65 : 0,
          y: image ? distance * .6 : distance,
          clipPath: image ? 'inset(0% 0% 22% 0%)' : 'inset(0% 0% 100% 0%)',
        }, {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: image ? 1.05 : .78,
          delay,
          ease: 'power3.out',
          onStart: () => { element.style.willChange = 'transform,opacity,clip-path'; },
          onComplete: () => finish(element),
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: 'bottom top',
            once: true,
            fastScrollEnd: true,
            onLeave: self => { self.animation?.progress(1); },
          },
        });
        animations.set(element, animation);
      };

      // Headings open first, then supporting copy; the section itself never moves twice.
      document.querySelectorAll<HTMLElement>([
        '.section-heading', '.partners-heading', '.intro-statement > div',
        '.archive-feature-copy', '.editorial-copy', '.motion-layout > div:first-child',
        '.program-feature-copy', '.partner-invitation', '.contact-panel',
      ].join(',')).forEach(group => {
        handled.add(group);
        const children = group.querySelectorAll<HTMLElement>([
          ':scope > .eyebrow', ':scope > h1', ':scope > h2', ':scope > h3', ':scope > p',
          ':scope > div > .eyebrow', ':scope > div > h2', ':scope > .intro-sub',
          ':scope > .home-proof', ':scope > .text-link', ':scope > .button',
        ].join(','));
        children.forEach((element, index) => reveal(element, 'text', Math.min(index * .07, .21)));
      });

      // Large visual panels unfold as a single plane, keeping their captions and framing intact.
      document.querySelectorAll<HTMLElement>([
        '.impact-image', '.home-video', '.program-feature-image', '.about-lead > figure',
        '.designer-profile .image-frame', '.partnership-image', '.event-cover',
        '.archive-strip > a',
      ].join(',')).forEach((element, index) => reveal(element, 'image', (index % 3) * .06));

      // Each card has its own viewport trigger. Long partner grids do not reveal unseen rows early.
      document.querySelectorAll<HTMLElement>([
        '.designer-editorial > article', '.designer-index > article', '.designer-tile',
        '.places-grid > a', '.partner-grid > figure', '.charity-grid > article',
        '.profile-gallery > a', '.history-list > a', '.event-list > a',
        '.benefits > article', '.partner-group-heading', '.partners-more',
      ].join(',')).forEach((element, index) => reveal(element, 'card', (index % (desktop ? 3 : 2)) * .055));

      document.querySelectorAll<HTMLElement>('.reveal').forEach(element => {
        if (handled.has(element)) return;
        // A visual or text group inside this wrapper already owns its reveal.
        if ([...handled].some(child => element.contains(child))) return;
        reveal(element, 'card');
      });

      document.querySelectorAll<HTMLElement>('.footer-top, .footer-grid > div').forEach(element => {
        reveal(element, 'text');
      });

      revealArchiveCards = () => {
        context.add(() => {
          animations.forEach((animation, element) => {
            if (element.isConnected && !element.hidden) return;
            animation.scrollTrigger?.kill();
            animation.kill();
            gsap.set(element, { clearProps: 'transform,opacity,clipPath,willChange' });
            element.classList.remove('motion-unfold');
            delete element.dataset.motionReveal;
            animations.delete(element);
            handled.delete(element);
            marked.delete(element);
          });
          document.querySelectorAll<HTMLElement>('.archive-grid > .media-card').forEach((element, index) => {
            if (element.hidden) return;
            reveal(element, 'card', (index % (desktop ? 4 : 2)) * .035);
          });
        });
      };
      revealArchiveCards();

      // A very small camera move on the hero; links and text stay fixed and readable.
      const heroMedia = document.querySelector<HTMLElement>('.home-hero-video')
        || document.querySelector<HTMLElement>('.home-hero-image');
      if (desktop && heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.035, yPercent: 0 }, {
          scale: 1.09,
          yPercent: 2,
          ease: 'none',
          scrollTrigger: { trigger: '.home-hero', start: 'top top', end: 'bottom top', scrub: .65 },
        });
      }
      if (desktop) {
        document.querySelectorAll<HTMLElement>('.archive-feature-year').forEach(element => {
          gsap.fromTo(element, { x: -30 }, {
            x: 0, ease: 'none',
            scrollTrigger: { trigger: '.archive-feature', start: 'top 90%', end: 'center 55%', scrub: .6 },
          });
        });
      }

      const progress = document.createElement('div');
      progress.className = 'cfw-scroll-progress';
      progress.setAttribute('aria-hidden', 'true');
      document.body.append(progress);
      gsap.to(progress, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: .2 },
      });

      const onFocus = (event: FocusEvent) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        animations.forEach((animation, element) => {
          if (element.contains(target)) animation.progress(1);
        });
      };
      document.addEventListener('focusin', onFocus);
      return () => {
        revealArchiveCards = undefined;
        document.removeEventListener('focusin', onFocus);
        progress.remove();
        marked.forEach(element => {
          element.classList.remove('motion-unfold');
          delete element.dataset.motionReveal;
        });
      };
    });
    ScrollTrigger.refresh();
  };

  document.addEventListener('cfw:motion-change', rebuild);
  let refreshFrame = 0;
  document.addEventListener('cfw:gallery-render', () => {
    if (refreshFrame) return;
    refreshFrame = requestAnimationFrame(() => {
      refreshFrame = 0;
      revealArchiveCards?.();
      ScrollTrigger.refresh();
    });
  });
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  rebuild();
}
