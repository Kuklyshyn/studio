import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'sk'] as const;
export const localePrefix = 'always';

export default getRequestConfig(async ({ locale }) => {
  // Якщо прийшов неправильний locale → 404
  if (!locales.includes(locale as any)) {
    const { notFound } = await import('next/navigation');
    notFound();
  }

  return {
    locale, // ✅ обов’язково тепер треба повертати
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
