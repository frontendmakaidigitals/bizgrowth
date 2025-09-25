"use client";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Editor } from "@/components/blocks/editor-00/editor";

const Blogs = () => {
  interface Blog {
    id: string | number;
    title: string;
    content: string;
    image?: string;
    author?: string;
    [key: string]: any;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);

    return () => {
      api.off?.("select", update);
    };
  }, [api]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className=" py-1 lg:py-10 text-gray-900 relative">
      {blogs.length !== 0 ? (
        <div className="container ">
          <motion.h1 className="text-4xl text-center lg:text-5xl font-bold  mb-6">
            Latest from the <span className="text-blue-500">Blog</span>
          </motion.h1>

          <Carousel
            opts={{ align: "start" }}
            setApi={setApi}
            className="w-full mt-12"
          >
            <CarouselContent className="-ml-4">
              {blogs.map((blog, index) => (
                <CarouselItem
                  key={blog.id || index}
                  className="basis-1/1 pb-10 relative lg:basis-1/4"
                >
                  <div className="bg-blue-50 p-1 relative shadow-sm rounded-lg overflow-hidden">
                    <div className="h-[230px] lg:h-[200px] overflow-hidden rounded-lg w-full relative">
                      <div className="absolute inset-0 bg-black/20 z-10" />
                      {blog.image && (
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Blog Info */}
                    <div className="p-4 relative z-20">
                      <h3 className="font-bold text-lg line-clamp-2">
                        {blog.title}
                      </h3>

                      <div className="mt-1 text-sm text-gray-600">
                        {blog.content ? (
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
                        ) : null}
                      </div>

                      <div className="flex text-slate-500 mt-2 text-xs items-center justify-between">
                        <span>{blog.author ?? "Unknown"}</span>
                        <span>
                          {blog.id
                            ? new Date(blog.id).toLocaleDateString()
                            : "Unknown"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/blogs/${encodeURIComponent(
                      blog.title.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                  >
                    <button className="absolute right-4 bottom-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2">
                      <MoveUpRight />
                    </button>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-7 lg:mt-0 flex justify-end gap-2">
            <button
              disabled={!canScrollPrev}
              onClick={() => api?.scrollPrev()}
              className="bg-blue-500 disabled:bg-slate-400 text-white p-2 rounded-full"
            >
              <ArrowLeft />
            </button>
            <button
              disabled={!canScrollNext}
              onClick={() => api?.scrollNext()}
              className="bg-blue-500 disabled:bg-slate-400 text-white p-2 rounded-full"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <p>Blogs not found</p>
      )}
    </section>
  );
};

export default Blogs;
