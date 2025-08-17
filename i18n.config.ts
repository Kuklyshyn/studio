// тут тільки список мов і тип
export const locales = ['en', 'sk'] as const;

export type Locale = (typeof locales)[number];
