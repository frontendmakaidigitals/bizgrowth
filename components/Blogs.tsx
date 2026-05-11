// components/Blogs.tsx  ← Server Component (no "use client")
import { dbAll } from "@/lib/db";
import BlogsCarousel from "./blogs-carousel";
import zlib from "zlib";

function lexicalToPlainText(content: any): string {
  if (!content) return "";

  try {
    let raw = content;

    if (typeof raw === "string" && raw.startsWith("gz:")) {
      const buffer = Buffer.from(raw.slice(3), "base64");
      raw = JSON.parse(zlib.gunzipSync(buffer).toString("utf-8"));
    } else if (typeof raw === "string") {
      raw = JSON.parse(raw);
    }

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
    console.error("❌ lexicalToPlainText error:", e);
    return "";
  }
}

export default async function Blogs() {
  let blogs: any[] = [];

  try {
    const data = await dbAll(
      "SELECT id, title, image, author, createdAt, slugTitle, content FROM blogs ORDER BY createdAt DESC LIMIT 12",
      [],
    );

    console.log("🔵 Blogs carousel - count:", data?.length);

    if (!data?.length) {
      console.log("🔴 Blogs carousel - no data returned from DB");
      return null;
    }

    blogs = data.map((blog: any) => ({
      ...blog,
      previewText: lexicalToPlainText(blog.content),
      content: "", // strip gz content — don't send to client
    }));
  } catch (e) {
    console.error("🔴 Blogs fetch failed:", e);
    return null;
  }

  if (!blogs.length) {
    console.log("🔴 Blogs carousel - returning null after map");
    return null;
  }

  return <BlogsCarousel blogs={blogs} />;
}