import { initialiseMotion } from './motion';
import { initialiseAutoplay } from './video';

function initialiseSite() {
  const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const menu = document.querySelector<HTMLElement>('#mobile-menu');
  function closeMenu() {
    if (menu && menuButton) { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
  }
  menuButton?.addEventListener('click', () => {
    if (!menu) return;
    const open = menu.hidden;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
  });
  menu?.addEventListener('click', event => { if ((event.target as HTMLElement).closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu && !menu.hidden) { closeMenu(); menuButton?.focus(); }
  });
  matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  initialiseAutoplay();
  initialiseMotion();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialiseSite, { once: true });
else initialiseSite();
