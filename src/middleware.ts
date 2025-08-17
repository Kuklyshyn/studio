import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './i18n';
 
export default createMiddleware({
  defaultLocale: 'sk',
  locales,
  pathnames,
  localePrefix
});
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};