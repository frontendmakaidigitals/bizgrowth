import { dbAll } from "@/lib/db";
import BlogsCarousel from "./blogs-carousel";

export default async function Blogs() {
  let blogs = [];
  try {
    blogs = await dbAll(
      "SELECT id, title, image, author, createdAt, slugTitle, content FROM blogs ORDER BY createdAt DESC LIMIT 12",
      [],
    );
  } catch (e) {
    console.error("Blogs fetch failed:", e);
  }

  if (!blogs.length) return null; // don't render anything if no blogs

  return <BlogsCarousel blogs={blogs} />;
}
