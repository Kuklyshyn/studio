import type { MetadataRoute } from "next";
import { sitemapFor } from "@/lib/sitemap";

// Combined sitemap for both languages, referenced from robots.txt.
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapFor();
}
