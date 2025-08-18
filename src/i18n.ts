import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'sk'] as const;
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    sk: '/o-nas'
  },
  '/blog': '/blog',
  '/contact': {
    en: '/contact',
    sk: '/kontakt'
  },
  '/custom-programming': {
    en: '/custom-programming',
    sk: '/programovanie-na-mieru'
  },
  '/portfolio': {
    en: '/portfolio',
    sk: '/portfolio'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    sk: '/ochrana-osobnych-udajov'
  },
  '/services': {
    en: '/services',
    sk: '/sluzby'
  },
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
