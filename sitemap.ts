// app/sitemap.ts
import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma' // adjust to your prisma client path

const BASE_URL = 'https://www.bizgrowthconsultancy.com'

export const dynamic = 'force-dynamic' // don't prerender at build time
export const revalidate = 86400 // regenerate at most once a day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { route: '', priority: 1 },
    { route: '/about', priority: 0.7 },
    { route: '/contact', priority: 0.7 },
    { route: '/blogs', priority: 0.7 },
    { route: '/cost-calculator', priority: 0.7 },
    { route: '/mortgage', priority: 0.7 },
    { route: '/privacy-policy', priority: 0.5 },

    // Banking assistance
    { route: '/banking-assistance/private-bank-account', priority: 0.7 },
    { route: '/banking-assistance/corporate-bank-account', priority: 0.7 },

    // Business formation - Freezone
    { route: '/business-formation/freezone/ifza', priority: 0.7 },
    { route: '/business-formation/freezone/dmcc', priority: 0.7 },
    { route: '/business-formation/freezone/adgm', priority: 0.7 },
    { route: '/business-formation/freezone/difc', priority: 0.7 },
    { route: '/business-formation/freezone/meydan', priority: 0.7 },
    { route: '/business-formation/freezone/spc', priority: 0.7 },
    { route: '/business-formation/freezone/jafza', priority: 0.7 },
    { route: '/business-formation/freezone/rakez', priority: 0.7 },
    { route: '/business-formation/freezone/ajman', priority: 0.7 },
    { route: '/business-formation/freezone/srti', priority: 0.7 },
    { route: '/business-formation/freezone/dafza', priority: 0.7 },

    // Business formation - Mainland
    { route: '/business-formation/mainland/dubai-mainland', priority: 0.7 },
    { route: '/business-formation/mainland/sharjah-mainland', priority: 0.7 },
    { route: '/business-formation/mainland/abu-dhabi-mainland', priority: 0.7 },
    { route: '/business-formation/mainland/ajman-mainland', priority: 0.7 },
    { route: '/business-formation/mainland/fujairah-mainland', priority: 0.7 },

    // Business formation - Offshore
    { route: '/business-formation/offshore/jafza-offshore', priority: 0.7 },
    { route: '/business-formation/offshore/rak-icc-offshore', priority: 0.7 },
    { route: '/business-formation/offshore/ajman-offshore', priority: 0.7 },
    { route: '/business-formation/offshore/dubai-offshore', priority: 0.7 },

    // Business solutions - Accounting
    { route: '/business-solutions/accounting/vat-consultancy', priority: 0.7 },
    { route: '/business-solutions/accounting/auditing', priority: 0.7 },
    { route: '/business-solutions/accounting/corporate-tax', priority: 0.7 },
    { route: '/business-solutions/accounting/accounting-and-bookkeeping', priority: 0.7 },

    // Business solutions - misc
    { route: '/business-solutions/menus', priority: 0.5 },
    { route: '/business-solutions/eliteservices', priority: 0.6 },

    // Business solutions - Elite services
    { route: '/business-solutions/elite-services/golden-visa', priority: 0.7 },
    { route: '/business-solutions/elite-services/will-formation', priority: 0.7 },
    { route: '/business-solutions/elite-services/wealth-management', priority: 0.7 },
    { route: '/business-solutions/elite-services/nominee-director-services', priority: 0.7 },
    { route: '/business-solutions/elite-services/real-estate', priority: 0.7 },

    // Business solutions - Corporate services
    { route: '/business-solutions/corporate-services/pro-and-visa-services', priority: 0.7 },
    { route: '/business-solutions/corporate-services/attestation-and-legalisation', priority: 0.7 },
    { route: '/business-solutions/corporate-services/office-space-solution', priority: 0.7 },
    { route: '/business-solutions/corporate-services/product-registration', priority: 0.7 },
    { route: '/business-solutions/corporate-services/corporate-structuring', priority: 0.7 },
    { route: '/business-solutions/corporate-services/hr-solution', priority: 0.7 },
    { route: '/business-solutions/corporate-services/design-and-marketing-services', priority: 0.7 },
  ].map(({ route, priority }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: '2026-08-01', // bump this only when you edit the page
    changeFrequency: 'weekly',
    priority,
  }))

  // 2. Dynamic blog routes from DB — wrapped so a DB hiccup never kills the whole sitemap
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await prisma.blogPost.findMany({
      select: { slug: true, publishedAt: true, updatedAt: true, createdAt: true },
      where: {
        status: 'published',
        noIndex: false,
        canonicalUrl: null,
      },
    })

    blogRoutes = posts.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}`,
      lastModified: post.publishedAt ?? post.updatedAt ?? post.createdAt,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (err) {
    console.error('sitemap: failed to fetch blog posts', err)
    // fall back to static routes only rather than failing the whole build
  }

  return [...staticRoutes, ...blogRoutes]
}