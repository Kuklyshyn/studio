import type { MetadataRoute } from "next";
import { getLocale } from "next-intl/server";
import { sitemapFor } from "@/lib/sitemap";
import { isLocale } from "@/lib/site";

// Per-language sitemap, kept at /en/sitemap.xml and /sk/sitemap.xml for existing references.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locale = await getLocale();
  return isLocale(locale) ? sitemapFor([locale]) : [];
}
