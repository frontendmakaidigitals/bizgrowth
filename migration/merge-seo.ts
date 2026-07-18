/**
 * merge-seo.ts
 *
 * Overlays SEO fields (ogImage, metaTitle, metaDescription, metaKeywords,
 * canonicalUrl, focusKeyword, ogTitle, ogDescription) onto an existing
 * blogpost_seed.json, matching by `slug`. Everything else in each post
 * (title, body, excerpt, category, dates, etc.) is left untouched.
 *
 * Run this BEFORE `npx tsx seed.ts`, in the same migration/ folder:
 *
 *   1. Make sure blogpost_seed.json (from migrate.py) is up to date.
 *   2. Put seo_overlay.json next to it (the metadata I generated).
 *   3. npx tsx merge-seo.ts
 *   4. npx tsx seed.ts   (or npx prisma db seed)
 *
 * merge-seo.ts overwrites blogpost_seed.json in place. It writes a
 * timestamped .bak copy first, so nothing is lost if something looks wrong.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type SeedPost = {
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  author: string | null;
  category: string | null;
  tags: string | null;
  status: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  coverImage: string | null;
  ogImage: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalUrl: string | null;
  noIndex: boolean;
  focusKeyword: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  schemaType: string;
};

type SeoOverlay = {
  ogImage?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  canonicalUrl?: string | null;
  focusKeyword?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
};


function main() {
  const seedPath = path.join(__dirname, "blogpost_seed.json");
  const overlayPath = path.join(__dirname, "seo_overlay.json");

  if (!fs.existsSync(seedPath)) {
    throw new Error(`Not found: ${seedPath}. Run migrate.py first.`);
  }
  if (!fs.existsSync(overlayPath)) {
    throw new Error(`Not found: ${overlayPath}. Place the SEO metadata file here.`);
  }

  const posts: SeedPost[] = JSON.parse(fs.readFileSync(seedPath, "utf-8"));
  const overlay: Record<string, SeoOverlay> = JSON.parse(
    fs.readFileSync(overlayPath, "utf-8")
  );

  // backup before touching anything
  const backupPath = seedPath.replace(
    ".json",
    `.bak.${Date.now()}.json`
  );
  fs.copyFileSync(seedPath, backupPath);

  let matched = 0;
  const unmatchedOverlaySlugs = new Set(Object.keys(overlay));

  const merged = posts.map((post) => {
    const seo = overlay[post.slug];
    if (!seo) return post;

    matched++;
    unmatchedOverlaySlugs.delete(post.slug);

    return {
      ...post,
      ogImage: seo.ogImage ?? post.ogImage,
      metaTitle: seo.metaTitle || post.metaTitle,
      metaDescription: seo.metaDescription || post.metaDescription,
      metaKeywords: seo.metaKeywords ?? post.metaKeywords,
      canonicalUrl: seo.canonicalUrl ?? post.canonicalUrl,
      focusKeyword: seo.focusKeyword ?? post.focusKeyword,
      ogTitle: seo.ogTitle ?? post.ogTitle,
      ogDescription: seo.ogDescription ?? post.ogDescription,
    };
  });

  fs.writeFileSync(seedPath, JSON.stringify(merged, null, 2), "utf-8");

  console.log(`Backed up original to: ${path.basename(backupPath)}`);
  console.log(`Merged SEO fields into ${matched}/${posts.length} posts.`);
  if (unmatchedOverlaySlugs.size) {
    console.log(
      `\nOverlay entries with no matching post in blogpost_seed.json (${unmatchedOverlaySlugs.size}):`
    );
    unmatchedOverlaySlugs.forEach((s) => console.log(`  - ${s}`));
  }
  console.log(`\nDone. Now run: npx tsx seed.ts`);
}

main();