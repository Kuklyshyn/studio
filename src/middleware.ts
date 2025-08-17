import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';

export default createMiddleware({
  defaultLocale: 'sk',
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(sk|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ],
};
