import fs from "fs";
import path from "path";

const SITE_URL = "https://bizgrowthconsultancy.com"; // ⬅️ Replace with your actual domain

// Folder where your component data files are stored
const componentsDir = path.join(
  process.cwd(),
  "app/(user)/App_Chunks/Components"
);

// Route mapping for pages that fetch from the DB
const ROUTE_MAP = {
  "banking-assistance": "banking",
  "business-formation/freezone": "freezone",
  "business-formation/mainland": "mainland",
  "business-formation/offshore": "offshore",
  "business-solutions/accounting": "Accounting",
};

// Static Elite Services (non-DB pages)
const STATIC_CORPORATE_SERVICES = [
  "pro-and-visa-services",
  "attestation-and-legalisation",
  "office-space-solution",
  "product-registration",
  "corporate-structuring",
  "hr-solution",
  "design-and-marketing-services",
];
const STATIC_ELITE_SERVICES = [
  "golden-visa",
  "will-formation",
  "wealth-management",
  "nominee-director-services",
  "real-estate",
];

// Helper: Slugify names
function slugify(str:string) {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");
}

async function generateSitemap() {
  const urls = [];

  console.log("🔍 Reading component files from:", componentsDir);

  // ✅ 1. DB-based pages using ROUTE_MAP
  for (const [route, fileName] of Object.entries(ROUTE_MAP)) {
    const filePath = path.join(componentsDir, `${fileName}.js`);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Missing: ${filePath}`);
      continue;
    }

    const content = fs.readFileSync(filePath, "utf8");
    const matches = [...content.matchAll(/name:\s*["'`](.*?)["'`]/g)];
    const slugs = matches.map((m) => slugify(m[1]));

    if (slugs.length === 0) {
      console.warn(`⚠️ No names found in ${fileName}.js`);
      continue;
    }

    for (const slug of slugs) {
      const fullUrl = `${SITE_URL}/${route}/${slug}`
        .replace("/(user)", "")
        .replace(/\/{2,}/g, "/")
        .replace("https:/", "https://");

      urls.push(fullUrl);
    }
  }

  const staticFiles = fs
    .readdirSync(componentsDir)
    .filter(
      (file) =>
        (file.endsWith(".js") || file.endsWith(".jsx")) &&
        !Object.values(ROUTE_MAP).some(
          (name) => file.toLowerCase() === `${name.toLowerCase()}.js`
        )
    );

  for (const file of staticFiles) {
    const baseName = path.basename(file, path.extname(file));
    const slug = slugify(baseName);

    // Skip helper/utility components
    if (
      [
        "button",
        "footer",
        "form",
        "menu",
        "navbar",
        "loading",
        "heading",
        "logo",
        "popupform",
        "breadcrumb",
        "thirdsection",
        "fourthsection",
        "tabularsection",
        "lenisscroll",
        "floatingwhatsicon",
      ].includes(slug)
    )
      continue;

    const fullUrl = `${SITE_URL}/business-solutions/${slug}`
      .replace("/(user)", "")
      .replace(/\/{2,}/g, "/")
      .replace("https:/", "https://");

    urls.push(fullUrl);
  }

  // ✅ 3. Add Elite Services routes BEFORE deduplication
  STATIC_ELITE_SERVICES.forEach((slug) => {
    const fullUrl = `${SITE_URL}/business-solutions/elite-services/${slug}`;
    urls.push(fullUrl);
  });
  STATIC_CORPORATE_SERVICES.forEach((slug) => {
    const fullUrl = `${SITE_URL}/business-solutions/corporate-services/${slug}`;
    urls.push(fullUrl);
  });

  // ✅ 4. Deduplicate all URLs
  const uniqueUrls = [...new Set(urls)];

  // ✅ 5. Build sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  // ✅ 6. Ensure /public exists
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

  // ✅ 7. Write sitemap.xml
  const outputPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(outputPath, xml);

  console.log(`✅ Sitemap generated successfully with ${uniqueUrls.length} URLs`);
}

generateSitemap();
