declare module 'astro-i18next' {
  import type { AstroIntegration } from 'astro';

  interface AstroI18nextOptions {
    defaultLocale: string;
    locales: readonly string[];
  }

  export default function astroI18next(options: AstroI18nextOptions): AstroIntegration;
}
