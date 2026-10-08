import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  LOCALES,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "./site";

export type Locale = (typeof LOCALES)[number];

const OG_LOCALE: Record<Locale, string> = { en: "en_US", sk: "sk_SK" };
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

// Search engines show about 160 characters of a meta description; cut at a word boundary.
export function truncate(text: string, max = 160) {
  if (text.length <= max) return text;

  const cut = text.slice(0, max - 1);
  const wordEnd = cut.lastIndexOf(" ");
  return `${wordEnd > 0 ? cut.slice(0, wordEnd) : cut}…`;
}

// `path` is the page path without the locale prefix ("" for the home page).
export function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = absoluteUrl(`/${locale}${path}`);
  }
  languages["x-default"] = absoluteUrl(`/${DEFAULT_LOCALE}${path}`);
  return languages;
}

type PageMetadataOptions = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  publishedTime?: string;
};

export function pageMetadata({
  locale,
  path,
  title,
  description: rawDescription,
  image,
  publishedTime,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(`/${locale}${path}`);
  const description = truncate(rawDescription);
  const imageUrl = image?.startsWith("http") ? image : absoluteUrl(image ?? DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: publishedTime ? "article" : "website",
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((other) => other !== locale).map((other) => OG_LOCALE[other]),
      images: [imageUrl],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: "Mykola Kuklyshyn",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Doležalova 3424/15C",
      postalCode: "821 04",
      addressLocality: "Bratislava",
      addressCountry: "SK",
    },
    sameAs: SOCIAL_LINKS,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: [...LOCALES],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

type BlogPostingOptions = {
  locale: Locale;
  url: string;
  headline: string;
  description: string;
  image: string;
  publishedAt: string;
};

export function blogPostingJsonLd({ locale, url, headline, description, image, publishedAt }: BlogPostingOptions) {
  const organization = { "@type": "Organization", name: SITE_NAME, url: SITE_URL };

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: [image.startsWith("http") ? image : absoluteUrl(image)],
    datePublished: publishedAt,
    dateModified: publishedAt,
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: organization,
    publisher: organization,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
