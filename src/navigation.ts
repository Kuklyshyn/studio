import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'sk'] as const;
export const localePrefix = 'always'; // Default

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
    sk: '/blog/[slug]'
  },
  '/portfolio/[slug]': {
    en: '/portfolio/[slug]',
    sk: '/portfolio/[slug]'
  }
} satisfies Record<string, any>;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
