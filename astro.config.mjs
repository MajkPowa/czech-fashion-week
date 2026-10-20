import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://majkpowa.github.io',
  base: '/czech-fashion-week',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: page => !page.includes('/design-system/') })],
  devToolbar: { enabled: false },
});
