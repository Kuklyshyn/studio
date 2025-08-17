import createMiddleware from 'next-intl/middleware';
import {locales, pathnames} from './navigation';

export default createMiddleware({
  // A default locale is required
  defaultLocale: 'sk',
  locales,
  pathnames,
  localePrefix: 'always',
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
    // (e.g. `/about` -> `/en/about`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
