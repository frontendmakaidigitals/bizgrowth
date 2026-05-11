

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
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return (
    <>
      {/*
        FIX #10 — Hero + filter controls are in BlogsFilter (client).
        BlogsFilter receives all blogs but only manages state (selected topic, date, visibleCount).
        It renders BlogsGrid which outputs real HTML that crawlers can read.
      */}
      <BlogsFilter initialBlogs={blogs} />
    </>
  );
}