import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n.config';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: true, // або false, за потреби
});

export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)',
};
