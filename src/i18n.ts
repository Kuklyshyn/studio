import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { createNavigation } from "next-intl/navigation";
import { hasLocale } from "next-intl";
import type { Pathnames } from "next-intl/routing";
import { routing } from "../routing";

export const locales = ["en", "sk"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    sk: "/about",
  },
  "/blog": "/blog",
  "/contact": {
    en: "/contact",
    sk: "/contact",
  },
  "/custom-programming": {
    en: "/custom-programming",
    sk: "/custom-programming",
  },
  "/portfolio": {
    en: "/portfolio",
    sk: "/portfolio",
  },
  "/imprint": {
    en: "/imprint",
    sk: "/imprint",
  },
  "/privacy-policy": {
    en: "/privacy-policy",
    sk: "/privacy-policy",
  },
  "/services": {
    en: "/services",
    sk: "/services",
  },
  // Landing pages written for search queries; each language gets its own readable address.
  "/web-development": {
    en: "/web-development-bratislava",
    sk: "/tvorba-webov-bratislava",
  },
  "/eshop-development": {
    en: "/eshop-development",
    sk: "/tvorba-eshopu",
  },
  "/booking-system": {
    en: "/custom-booking-system",
    sk: "/rezervacny-system-na-mieru",
  },
  "/custom-crm": {
    en: "/custom-crm-system",
    sk: "/crm-na-mieru",
  },
  "/blog/[slug]": {
    en: "/blog/[slug]",
    sk: "/blog/[slug]",
  },
  "/portfolio/[slug]": {
    en: "/portfolio/[slug]",
    sk: "/portfolio/[slug]",
  },
} satisfies Pathnames<typeof locales>;

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    locale,
  };
});


export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  pathnames,
  localePrefix,
});
