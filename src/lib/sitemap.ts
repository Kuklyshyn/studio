import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/[locale]/blog/posts";
import { portfolioProjects } from "@/app/[locale]/portfolio/projects";
import { LOCALES } from "./site";
import { absoluteUrl, languageAlternates, type Locale } from "./seo";

const STATIC_PATHS = ["", "/about", "/services", "/custom-programming", "/portfolio", "/blog", "/contact", "/privacy-policy", "/imprint"];

// Every page appears once per locale, and each entry lists its hreflang alternates.
export function sitemapFor(locales: readonly Locale[] = LOCALES): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) => {
    const pages = [
      ...STATIC_PATHS.map((path) => ({ path, lastModified: now })),
      ...blogPosts[locale].map((post) => ({ path: `/blog/${post.slug}`, lastModified: new Date(post.isoDate) })),
      ...portfolioProjects.map((project) => ({ path: `/portfolio/${project.slug}`, lastModified: now })),
    ];

    return pages.map(({ path, lastModified }) => ({
      url: absoluteUrl(`/${locale}${path}`),
      lastModified,
      alternates: { languages: languageAlternates(path) },
    }));
  });
}
