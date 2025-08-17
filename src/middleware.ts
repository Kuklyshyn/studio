import createMiddleware from 'next-intl/middleware';
import {locales, pathnames, localePrefix} from '../i18n';
 
export default createMiddleware({
  defaultLocale: 'sk',
  locales,
  localePrefix,
  pathnames
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(sk|en)/:path*',

    // Enable redirects that add a locale prefix
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};