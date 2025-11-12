import fs from "fs";
import path from "path";

const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");
const SITE_URL = "https://bizgrowthconsultancy.com";

type BlogRow = {
  id: string;
  slug?: string | null;
  title?: string | null;
  updatedAt?: string | null;
};

export async function updateSitemap(blogs: BlogRow[]) {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.error("Sitemap not found at", SITEMAP_PATH);
      return;
    }

    let sitemap = fs.readFileSync(SITEMAP_PATH, "utf8");

    // ensure markers exist once
    if (!sitemap.includes("<!-- BLOG_URLS_START -->")) {
      sitemap = sitemap.replace(
        /<\/urlset>\s*$/,
        "\n  <!-- BLOG_URLS_START -->\n  <!-- BLOG_URLS_END -->\n</urlset>"
      );
      fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");
    }

    // Deduplicate by id (just in case) — keep the first (most recent) occurrence
    const byId = new Map<string, BlogRow>();
    for (const b of blogs) {
      if (!b.id) continue;
      if (!byId.has(b.id)) {
        byId.set(b.id, b);
      }
    }
    const uniqueBlogs = Array.from(byId.values());

    // Build <url> entries but keep the *correct public URL* as <loc>.
    // Use stored slug if present, otherwise slugify the title.
    const blogUrls = uniqueBlogs
      .map((b) => {
        const slug = (b.slug && String(b.slug).trim()) || slugify(String(b.title || ""));
        const loc = `${SITE_URL}/blogs/${slug}`; // <-- KEEP YOUR CORRECT PUBLIC URL FORMAT HERE
        const lastmod = b.updatedAt ? `<lastmod>${isoDate(b.updatedAt)}</lastmod>` : "";
        return `
  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    ${lastmod}
    <priority>0.7</priority>
  </url>`;
      })
      .join("");

    // Replace the blog block safely
    const updated = sitemap.replace(
      /<!-- BLOG_URLS_START -->[\s\S]*?<!-- BLOG_URLS_END -->/,
      `<!-- BLOG_URLS_START -->${blogUrls}\n  <!-- BLOG_URLS_END -->`
    );

    fs.writeFileSync(SITEMAP_PATH, updated, "utf8");
    console.log("✅ Sitemap updated —", uniqueBlogs.length, "blogs written.");
  } catch (err) {
    console.error("Failed to update sitemap:", err);
  }
}

function slugify(input: string) {
  return String(input || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function isoDate(input: string) {
  try {
    return new Date(input).toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}
