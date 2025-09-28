import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { createNavigation } from "next-intl/navigation";
import { hasLocale } from "next-intl";
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
  "/privacy-policy": {
    en: "/privacy-policy",
    sk: "/privacy-policy",
  },
  "/services": {
    en: "/services",
    sk: "/services",
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
  console.log("locale", locale);
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
