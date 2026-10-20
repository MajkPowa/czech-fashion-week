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
  const reflectPlayback = () => {
    const playing = !video.paused && !video.ended;
    button.setAttribute('aria-pressed', String(playing));
    if (label) label.textContent = playing ? 'Pozastavit film' : 'Přehrát film';
  };
  video.addEventListener('play', reflectPlayback);
  video.addEventListener('pause', reflectPlayback);
  video.addEventListener('ended', reflectPlayback);
  button.addEventListener('click', async () => {
    if (video.paused) { try { await video.play(); } catch { reflectPlayback(); } }
    else video.pause();
  });
  new IntersectionObserver(entries => { if (!entries[0].isIntersecting) video.pause(); }, { threshold: .1 }).observe(video);
  reflectPlayback();
});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialiseSite, { once: true });
else initialiseSite();
