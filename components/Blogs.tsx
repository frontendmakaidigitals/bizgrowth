import prisma from "@/lib/prisma";
import BlogsCarousel from "./blogs-carousel";

export const revalidate = 0;

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  author?: string;
  category?: string;
  createdAt: Date;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
  excerpt?: string;
  coverImage: string;
  slug: string;
}

interface MappedBlog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
  excerpt: string;
}

interface BlogPostRow {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  author: string | null;
  category: string | null;
  createdAt: Date;
}

export default async function Page() {
  let blogs: Blog[] = [];
  try {
    const rows = (await prisma.blogPost.findMany({
      where: { status: "published" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        author: true,
        category: true,
        createdAt: true,
      },
    })) as BlogPostRow[];

    blogs = rows.map(
      (blog): Blog => ({
        id: String(blog.id),
        title: blog.title,
        content: "",
        image: blog.coverImage ?? "",
        author: blog.author ?? "",
        category: blog.category ?? "",
        createdAt: blog.createdAt.toISOString(),
        slugTitle: blog.slug,
        excerpt: blog.excerpt ?? "",
        coverImage: blog.coverImage ?? "",
        slug: blog.slug,
      }),
    );
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return <BlogsCarousel blogs={blogs} />;
}
