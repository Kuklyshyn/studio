import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localeDetection: true,
});

export const config = {
  // Виключаємо api, _next, static файли
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/", "/(en|sk)/:path*"],
};
