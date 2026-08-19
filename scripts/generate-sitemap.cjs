// scripts/generate-sitemap.js
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()
const BASE_URL = 'https://www.bizgrowthconsultancy.com'

const staticRoutes = [
  { route: '', priority: 1, changefreq: 'weekly', lastmod: '2026-08-01' },
  { route: '/about', priority: 0.7, changefreq: 'yearly', lastmod: '2026-08-01' },
  { route: '/contact', priority: 0.7, changefreq: 'yearly', lastmod: '2026-08-01' },
  { route: '/blogs', priority: 0.7, changefreq: 'daily', lastmod: '2026-08-01' },
  { route: '/cost-calculator', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/mortgage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/privacy-policy', priority: 0.5, changefreq: 'yearly', lastmod: '2026-08-01' },

  // Banking assistance
  { route: '/banking-assistance/private-bank-account', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/banking-assistance/corporate-bank-account', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business formation - Freezone
  { route: '/business-formation/freezone/ifza', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/dmcc', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/adgm', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/difc', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/meydan', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/spc', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/jafza', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/rakez', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/ajman', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/srti', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/freezone/dafza', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business formation - Mainland
  { route: '/business-formation/mainland/dubai-mainland', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/mainland/sharjah-mainland', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/mainland/abu-dhabi-mainland', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/mainland/ajman-mainland', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/mainland/fujairah-mainland', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business formation - Offshore
  { route: '/business-formation/offshore/jafza-offshore', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/offshore/rak-icc-offshore', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/offshore/ajman-offshore', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-formation/offshore/dubai-offshore', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business solutions - Accounting
  { route: '/business-solutions/accounting/vat-consultancy', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/accounting/auditing', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/accounting/corporate-tax', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/accounting/accounting-and-bookkeeping', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business solutions - misc
  { route: '/business-solutions/menus', priority: 0.5, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/eliteservices', priority: 0.6, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business solutions - Elite services
  { route: '/business-solutions/elite-services/golden-visa', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/elite-services/will-formation', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/elite-services/wealth-management', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/elite-services/nominee-director-services', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/elite-services/real-estate', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },

  // Business solutions - Corporate services
  { route: '/business-solutions/corporate-services/pro-and-visa-services', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/corporate-services/attestation-and-legalisation', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/corporate-services/office-space-solution', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/corporate-services/product-registration', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/corporate-services/corporate-structuring', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/corporate-services/hr-solution', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
  { route: '/business-solutions/corporate-services/design-and-marketing-services', priority: 0.7, changefreq: 'monthly', lastmod: '2026-08-01' },
]

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

async function generate() {
  let posts = []
  try {
    posts = await prisma.blogPost.findMany({
      select: { slug: true, publishedAt: true, updatedAt: true, createdAt: true },
      where: {
        status: 'published',
        noIndex: false,
        canonicalUrl: null,
      },
    })
  } catch (err) {
    console.error('generate-sitemap: failed to fetch blog posts, continuing with static routes only', err)
  }

  const staticUrls = staticRoutes.map((r) => ({
    loc: `${BASE_URL}${r.route}`,
    lastmod: r.lastmod,
    changefreq: r.changefreq,
    priority: r.priority,
  }))

  const blogUrls = posts.map((post) => {
    const date = post.publishedAt ?? post.updatedAt ?? post.createdAt
    return {
      loc: `${BASE_URL}/blogs/${post.slug}`,
      lastmod: new Date(date).toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.6,
    }
  })

  const urls = [...staticUrls, ...blogUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

  const outPath = path.join(__dirname, '../public/sitemap.xml')
  fs.writeFileSync(outPath, xml)
  console.log(`✅ Sitemap generated: ${urls.length} URLs (${staticUrls.length} static, ${blogUrls.length} blog) → ${outPath}`)
}

generate()
  .catch((err) => {
    console.error('generate-sitemap: fatal error', err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())