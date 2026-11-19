import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jamesthelivingplanet.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
