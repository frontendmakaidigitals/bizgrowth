// components/Blogs.tsx  ← Server Component (no "use client")
import { dbAll } from "@/lib/db";
import BlogsCarousel from "./blogs-carousel";
import zlib from "zlib";
function lexicalToPlainText(content: any): string {
  if (!content) return "";

  try {
    let raw = content;

    // 🔥 HANDLE GZIP (your case)
    if (typeof raw === "string" && raw.startsWith("gz:")) {
      const base64 = raw.replace("gz:", "");

      const buffer = Buffer.from(base64, "base64");
      const decompressed = zlib.gunzipSync(buffer).toString("utf-8");

      raw = JSON.parse(decompressed);
    }

    // normal JSON string
    else if (typeof raw === "string") {
      raw = JSON.parse(raw);
    }

    // handle double-string JSON
    if (typeof raw === "string") {
      raw = JSON.parse(raw);
    }

    const root = raw?.root || raw;

    const extract = (node: any): string => {
      if (!node) return "";

      let text = "";

      if (node.text) text += node.text + " ";

      if (Array.isArray(node.children)) {
        text += node.children.map(extract).join(" ");
      }

      return text;
    };

    return extract(root).replace(/\s+/g, " ").trim();
  } catch (e) {
    console.log("❌ FINAL ERROR:", e);
    return "";
  }
}
export default async function Blogs() {
  let blogs = [];

  try {
    const data = await dbAll(
      "SELECT id, title, image, author, createdAt, slugTitle, content FROM blogs ORDER BY createdAt DESC LIMIT 12",
      [],
    );

    blogs = data.map((blog: any) => ({
      ...blog,
      previewText: lexicalToPlainText(blog.content), // 👈 THIS WAS MISSING
    }));
  } catch (e) {
    console.error("Blogs fetch failed:", e);
  }

  if (!blogs.length) return null;

  return <BlogsCarousel blogs={blogs} />;
}
