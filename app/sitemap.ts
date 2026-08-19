// app/sitemap.ts
import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma' // adjust to your prisma client path

const BASE_URL = 'https://www.bizgrowthconsultancy.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/blogs',
    '/cost-calculator',
    '/mortgage',
    '/privacy-policy',
    '/business-formation/freezone/adgm',
    '/business-formation/freezone/dmcc',
    '/business-formation/freezone/dafza',
    '/business-formation/freezone/jafza',
    '/business-formation/freezone/rakez',
    '/business-formation/freezone/meydan',
    '/business-formation/freezone/spc',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))

  // 2. Dynamic blog routes from DB
  const posts = await prisma.blogPost.findMany({
    select: { slug: true, updatedAt: true },
    where: {
      status: 'published',
      noIndex: false,
      canonicalUrl: null, // skip posts that canonicalize elsewhere
    },
  })

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}