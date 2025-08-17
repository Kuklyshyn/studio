import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './i18n';

export default createMiddleware({
  defaultLocale: 'sk',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sk|en)/:path*']
};
