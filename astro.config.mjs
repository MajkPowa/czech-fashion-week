import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const legacyRedirects = {
  '/praha': '/program/praha-glamour-2026/',
  '/brno': '/program/brno-2026/',
  '/marianske_lazne': '/program/marianske-lazne-2026/',
  '/KV2025': '/program/karlovy-vary-2026/',
  '/historie': '/archiv/',
  '/czech-fashion-week': '/',
};

export default defineConfig({
  site: 'https://cfw.cz',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  redirects: legacyRedirects,
  integrations: [sitemap({ filter: page => {
    const path = new URL(page).pathname.replace(/\/$/, '');
    return path !== '/design-system' && !(path in legacyRedirects);
  } })],
  devToolbar: { enabled: false },
});
