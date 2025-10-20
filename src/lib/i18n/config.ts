export const defaultLocale = 'es' as const;

export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English'
};

export function isSupportedLocale(value: string | null | undefined): value is Locale {
  return value ? (locales as readonly string[]).includes(value) : false;
}

export function getFallbackLocale(): Locale {
  return defaultLocale;
}

export function otherLocales(current: Locale): Locale[] {
  return (locales as readonly Locale[]).filter((locale) => locale !== current);
}
