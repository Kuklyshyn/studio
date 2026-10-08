// Site-wide constants for canonical URLs, hreflang, sitemap and structured data.
export const SITE_URL = "https://omnicode.sk";
export const SITE_NAME = "Omnicode";
export const LOCALES = ["en", "sk"] as const;
export const DEFAULT_LOCALE = "sk";
export const LOGO_PATH = "/img/logo-white.png";
export const DEFAULT_OG_IMAGE = "/og-default.png";
export const CONTACT_EMAIL = "info@omnicode.sk";
export const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/105907699/",
  "https://www.facebook.com/profile.php?id=61573524654723",
];

export const isLocale = (value: string): value is (typeof LOCALES)[number] =>
  (LOCALES as readonly string[]).includes(value);
