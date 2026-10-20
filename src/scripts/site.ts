import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function initialiseSite() {
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const menu = document.querySelector<HTMLElement>('#mobile-menu');
function closeMenu() { if (menu && menuButton) { menu.hidden = true; menuButton.setAttribute('aria-expanded','false'); } }
menuButton?.addEventListener('click', () => { if (!menu) return; const open = menu.hidden; menu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); });
menu?.addEventListener('click', (event) => { if ((event.target as HTMLElement).closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu && !menu.hidden) { closeMenu(); menuButton?.focus(); } });
matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

gsap.registerPlugin(ScrollTrigger);
const motion = gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)', () => {
  document.querySelectorAll<HTMLElement>('.reveal').forEach(element => {
    gsap.from(element, { y: 22, opacity: 0, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 93%', once: true } });
  });
  const heroImage = document.querySelector('.home-hero-image');
  if (heroImage && matchMedia('(min-width: 900px)').matches) {
    gsap.to(heroImage, { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '.home-hero', start: 'top top', end: 'bottom top', scrub: true } });
  }
});

document.querySelectorAll<HTMLButtonElement>('[data-video-toggle]').forEach(button => {
  const video = document.getElementById(button.dataset.videoToggle || '') as HTMLVideoElement | null;
  if (!video) return;
  const label = button.querySelector<HTMLElement>('[data-video-label]');
  const autoplay = video.hasAttribute('data-video-autoplay');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  let inView = false;
  const play = async () => { try { await video.play(); } catch { reflectPlayback(); } };
  const reflectPlayback = () => {
    const playing = !video.paused && !video.ended;
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? 'Pozastavit film' : 'Přehrát film');
    if (label) label.textContent = playing ? 'Pozastavit film' : 'Přehrát film';
  };
  video.addEventListener('play', reflectPlayback);
  video.addEventListener('pause', reflectPlayback);
  video.addEventListener('ended', reflectPlayback);
  video.addEventListener('playing', () => video.classList.add('is-ready'));
  video.addEventListener('error', () => video.classList.remove('is-ready'));
  button.addEventListener('click', async () => {
    userPaused = !video.paused;
    if (video.paused) await play();
    else video.pause();
  });
  const resumeAutoplay = () => { if (autoplay && inView && !userPaused && !reducedMotion.matches && !document.hidden) void play(); };
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    if (!inView) video.pause();
    else resumeAutoplay();
  }, { threshold: .1 }).observe(video);
  if (autoplay) {
    document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); else resumeAutoplay(); });
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) video.pause(); else resumeAutoplay(); });
  }
  reflectPlayback();
});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialiseSite, { once: true });
else initialiseSite();
