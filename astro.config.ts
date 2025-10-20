import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import astroI18next from 'astro-i18next';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

import { defaultLocale, locales } from './src/lib/i18n/config';

export default defineConfig({
  site: 'https://hasuguesoft.com',
  trailingSlash: 'never',
  output: 'server',

  integrations: [
    react(),
    astroI18next({
      defaultLocale,
      locales
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    edgeMiddleware: true
  })
});
