import createMiddleware from 'next-intl/middleware';
import { locales, pathnames, localePrefix } from './i18n';
 
export default createMiddleware({
  defaultLocale: 'sk',
  locales,
  pathnames,
  localePrefix
});
 
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(sk|en)/:path*',

    // Enable redirects that add a locale prefix
    // (e.g. `/about` -> `/en/about`)
    '/((?!_next|.*\\..*).*)'
  ]
};