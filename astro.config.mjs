// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are injected by the GitHub Pages workflow
// (actions/configure-pages). Locally they default to the production user-site URL.
const site = process.env.SITE_URL || 'https://alla-malaga.github.io';
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru', es: 'es', uk: 'uk', en: 'en' },
      },
    }),
  ],
});
