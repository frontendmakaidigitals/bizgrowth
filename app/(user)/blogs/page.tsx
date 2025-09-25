"use client";

import React, { useState, useEffect, useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import BgLayer from "@/components/BgLayer";
import { Calendar, MoveUpRight, User } from "lucide-react";
import { Editor } from "@/components/blocks/editor-00/editor";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
}
interface BlogsResponse {
  blogs: Blog[];
}
const Page = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogsResponse = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="pb-24">
      <div className=" mx-auto mb-10 h-[180px] lg:h-[280px] w-full flex flex-col relative justify-center overflow-hidden items-center gap-4">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          src={
            "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"Blogs bg"}
        />
        
        <h1 className="relative z-10 font-[600] text-2xl lg:text-4xl">
          Latest News & Article
        </h1>
        <h2 className="relative z-10 font-[600]">Blogs</h2>
      </div>
      {blogs.length > 0 ? (
        <>
          <div className="max-w-6xl container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <BlogCard blogs={blogs} />
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center h-[80vh]">
          <p className="text-slate-500 text-xl">No Blogs Found</p>
        </div>
      )}
    </div>
  );
};

export default Page;

/* 🔹 BlogTopic Component */
const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="mt-2">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          href={`/blogs/${encodeURIComponent(
            blog.title.toLowerCase().replace(/\s+/g, "-")
          )}`}
        >
          <Card className="w-full rounded-lg">
            <CardContent className="w-full !px-0 !pt-0 pb-5">
              <div className="h-[250px] relative lg:h-[220px] w-full overflow-hidden">
                <p className="absolute top-0 right-0 bg-gradient-to-tr p-2 text-sm from-lime-400 to-green-300">
                  {blog.category}
                </p>
                <img
                  className="w-full h-full object-cover"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              <div className="mt-3 px-3">
                <h3 className="font-bold line-clamp-2">{blog.title}</h3>
                <div className="mt-1">
                  {blog.content && (
                    <Editor
                      editorSerializedState={
                        typeof blog.content === "string"
                          ? JSON.parse(blog.content)
                          : blog.content
                      }
                      readOnly
                      clampLines={2}
                      blogPage={false}
                    />
                  )}
                </div>
              </div>
            </CardContent>
            <hr className="w-[92%] mx-auto" />
            <CardFooter className="px-3 mt-2 pb-3">
              <div className="flex w-full justify-between items-center text-sm">
                <p className="text-slate-600">{new Date(blog.id).toDateString()}</p>
                <p className="text-slate-600">{blog.author}</p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
