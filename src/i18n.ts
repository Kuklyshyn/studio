import {Pathnames, createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales, pathnames as pathnamesConfig} from './navigation';

export const pathnames: Pathnames<typeof locales> = pathnamesConfig;

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    const {notFound} = await import('next/navigation');
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix: 'always',
  });
