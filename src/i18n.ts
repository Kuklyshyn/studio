import {getRequestConfig} from 'next-intl/server';
import {
    createLocalizedPathnamesNavigation,
    locales
  } from './navigation';

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
  
  export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({locales, localePrefix: 'always', pathnames});
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
      console.error(`Invalid locale: ${locale}`);
      // Handle invalid locale, e.g., by redirecting to a default locale
      // or showing a 404 page. For now, we'll just log an error.
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
