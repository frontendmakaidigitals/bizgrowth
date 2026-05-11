import { dbAll } from "@/lib/db";
import BlogsFilter from "./Blogsfilter";

export const revalidate = 3600; // ISR: revalidate every hour

export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
}

export default async function Page() {
  let blogs: Blog[] = [];
  try {
    blogs =
      (await dbAll(
        "SELECT id, title, content, image, author, category, createdAt, slugTitle FROM blogs ORDER BY createdAt DESC",
        [],
      )) ?? [];
    console.log("Blogs fetched:", blogs.length);
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return (
    <>
      <BlogsFilter initialBlogs={blogs} />
    </>
  );
}
