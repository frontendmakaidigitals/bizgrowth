/**
 * Seeds BlogPost rows from blogpost_seed.json (produced by migrate.py).
 *
 * Usage:
 *   npx tsx seed.ts
 * or add to package.json:
 *   "prisma": { "seed": "tsx migration/seed.ts" }
 *   npx prisma db seed
 */


import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prisma from "@/lib/prisma";
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

async function main() {
  const filePath = path.join(__dirname, "blogpost_seed.json");
  const posts: SeedPost[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  console.log(`Seeding ${posts.length} blog posts...`);

  let created = 0;
  let updated = 0;

  for (const p of posts) {
    const data = {
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      body: p.body,
      author: p.author,
      category: p.category,
      tags: p.tags,
      status: p.status,
      publishedAt: p.publishedAt ? new Date(p.publishedAt) : null,
      createdAt: new Date(p.createdAt),
      updatedAt: new Date(p.updatedAt),
      coverImage: p.coverImage,
      ogImage: p.ogImage,
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      metaKeywords: p.metaKeywords,
      canonicalUrl: p.canonicalUrl,
      noIndex: p.noIndex,
      focusKeyword: p.focusKeyword,
      ogTitle: p.ogTitle,
      ogDescription: p.ogDescription,
      schemaType: p.schemaType,
    };

    const existing = await prisma.blogPost.findUnique({ where: { slug: p.slug } });

    await prisma.blogPost.upsert({
      where: { slug: p.slug },
      create: data,
      update: data,
    });

    if (existing) updated++;
    else created++;
  }

  console.log(`Done. Created: ${created}, Updated: ${updated}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });