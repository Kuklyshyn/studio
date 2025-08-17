import { Pathnames, createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'sk'] as const;
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/blog': '/blog',
  '/contact': '/contact',
  '/custom-programming': '/custom-programming',
  '/portfolio': '/portfolio',
  '/privacy-policy': '/privacy-policy',
  '/services': '/services',
  '/blog/[slug]': {
    en: '/blog/[slug]',
    sk: '/blog/[slug]',
  },
  '/portfolio/[slug]': {
    en: '/portfolio/[slug]',
    sk: '/portfolio/[slug]',
  },
} satisfies Pathnames<typeof locales>;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    const { notFound } = await import('next/navigation');
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
