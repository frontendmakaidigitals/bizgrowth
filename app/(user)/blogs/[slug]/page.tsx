import { Metadata } from "next";
import BlogClient from "./BlogClient";

type Blog = {
  id: string;
  title: string;
  author?: string;
  category?: string;
  content?: string;
  metaTitle?: string;
  metaDesc?: string;
  imageURL?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  slugTitle?: string;
};

const serverUrl = "https://www.bizgrowthconsultancy.com";

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${serverUrl}/api/blogs/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.blog ?? null; // assume API returns { blog: Blog }
  } catch (err) {
    console.error("Failed to fetch blog:", err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return {
    title: blog?.metaTitle || blog?.title || "Blog",
    description: blog?.metaDesc || "",
    openGraph: {
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: blog?.imageURL ? [blog.imageURL] : [],
      url: `${serverUrl}/blogs/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: blog?.imageURL ? [blog.imageURL] : [],
    },
    alternates: { canonical: `${serverUrl}/blogs/${slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="p-8 text-center text-gray-500">Blog not found</div>;
  }

  return <BlogClient blog={blog} />;
}
