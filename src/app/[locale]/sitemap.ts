import { MetadataRoute } from 'next'
import { blogPosts } from './blog/posts'
import { portfolioProjects } from './portfolio/projects'
import { getLocale } from 'next-intl/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {
  const locale = await getLocale()
  const siteUrl = `https://omnichannel.com/${locale}` // Replace with your actual domain

  const staticPages = [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/services`, lastModified: new Date() },
    { url: `${siteUrl}/custom-programming`, lastModified: new Date() },
    { url: `${siteUrl}/portfolio`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
  ]

  const blogPostPages = blogPosts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  const portfolioProjectPages = portfolioProjects.map(project => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages,
    ...blogPostPages,
    ...portfolioProjectPages
  ]
}
