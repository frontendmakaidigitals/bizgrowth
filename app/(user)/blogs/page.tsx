import { dbAll } from "@/lib/db";
import BlogsFilter from "./Blogsfilter";
import zlib from "zlib";

export const revalidate = 0;

export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
  excerpt?: string; // ← add this
}

function extractExcerpt(content: string, maxLength = 160): string {
  if (!content) return "";
  try {
    let raw = content;

    if (raw.startsWith("gz:")) {
      const buffer = Buffer.from(raw.slice(3), "base64");
      raw = zlib.gunzipSync(buffer).toString("utf-8");
    }

    const parsed = JSON.parse(raw);
    const texts: string[] = [];

    function walk(node: any) {
      if (!node) return;
      if (node.type === "text" && typeof node.text === "string") {
        texts.push(node.text);
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    }

    walk(parsed?.root ?? parsed);

    const full = texts.join(" ").trim();
    if (!full) return "";
    if (full.length <= maxLength) return full;

    // Prefer cutting at a sentence boundary first
    const sentenceEnd = full.search(/[.!?]/);
    if (sentenceEnd > 0 && sentenceEnd <= maxLength) {
      return full.slice(0, sentenceEnd + 1).trim();
    }

    // Fall back to last word boundary before maxLength
    const cut = full.lastIndexOf(" ", maxLength);
    return (
      (cut > 0 ? full.slice(0, cut) : full.slice(0, maxLength)).trim() + "…"
    );
  } catch {
    return "";
  }
}

export default async function Page() {
  let blogs: Blog[] = [];
  try {
    const rows =
      (await dbAll(
        "SELECT id, title, content, image, author, category, createdAt, slugTitle FROM blogs ORDER BY createdAt DESC",
        [],
      )) ?? [];

    blogs = rows.map((blog: any) => ({
      ...blog,
      excerpt: extractExcerpt(blog.content),
      content: "", // don't send full content to client
    }));

    console.log("Blogs fetched:", blogs);
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return <BlogsFilter initialBlogs={blogs} />;
}
