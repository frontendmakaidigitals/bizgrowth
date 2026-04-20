"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Editor } from "@/components/blocks/editor-00/editor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { slugify } from "@/components/Blogs";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
}
interface BlogsResponse {
  blogs: Blog[];
}

type DateFilter = "all" | "today" | "this_week" | "this_month" | "this_year";

const dateOptions: { label: string; value: DateFilter }[] = [
  { label: "All Time", value: "all" },
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
  { label: "This Year", value: "this_year" },
];

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<DateFilter>("all");
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

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

  const categories = useMemo(() => {
    return Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)));
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const now = new Date();
    return blogs.filter((blog) => {
      if (selectedTopic !== "all" && blog.category !== selectedTopic)
        return false;
      if (selectedDate !== "all") {
        const created = new Date(blog.createdAt);
        if (selectedDate === "today") {
          if (
            created.getDate() !== now.getDate() ||
            created.getMonth() !== now.getMonth() ||
            created.getFullYear() !== now.getFullYear()
          )
            return false;
        } else if (selectedDate === "this_week") {
          const weekAgo = new Date(now);
          weekAgo.setDate(now.getDate() - 7);
          if (created < weekAgo) return false;
        } else if (selectedDate === "this_month") {
          if (
            created.getMonth() !== now.getMonth() ||
            created.getFullYear() !== now.getFullYear()
          )
            return false;
        } else if (selectedDate === "this_year") {
          if (created.getFullYear() !== now.getFullYear()) return false;
        }
      }
      return true;
    });
  }, [blogs, selectedTopic, selectedDate]);

  useEffect(() => {
    setVisibleCount(9);
  }, [selectedTopic, selectedDate]);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisibleCount((prev) => prev + 6);
      },
      { threshold: 1 },
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [filteredBlogs]);

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="mx-auto mb-10 h-[180px] lg:h-[280px] w-full flex flex-col relative justify-center overflow-hidden items-center gap-4">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Blogs bg"
        />
        <h1 className="relative z-10 font-semibold text-2xl lg:text-4xl">
          Latest News & Article
        </h1>
        <h2 className="relative z-10 font-semibold">Blogs</h2>
      </div>

      {/* Filters */}
      <div className=" container mb-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          {/* Topic ToggleGroup */}
          <div className="flex items-center gap-2 flex-wrap">
            <ToggleGroup
              type="single"
              value={selectedTopic}
              onValueChange={(val) => setSelectedTopic(val || "all")}
              className="flex flex-wrap gap-1.5"
            >
              <ToggleGroupItem
                value="all"
                variant="outline"
                className="rounded-full px-3 h-8 text-sm data-[state=on]:bg-green-500 data-[state=on]:text-white data-[state=on]:border-green-500"
              >
                All
              </ToggleGroupItem>
              {categories.map((cat) => (
                <ToggleGroupItem
                  key={cat}
                  value={cat}
                  variant="outline"
                  className="rounded-full px-3 h-8 text-sm data-[state=on]:bg-green-500 data-[state=on]:text-white data-[state=on]:border-green-500"
                >
                  {cat}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Date Select */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Date
            </span>
            <Select
              value={selectedDate}
              onValueChange={(val) => setSelectedDate(val as DateFilter)}
            >
              <SelectTrigger className="w-36 rounded-full h-8 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dateOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Result count + clear */}
      </div>
      <div className="container mb-6">
        <h4 className="text-lg font-Satoshi">
          <span className="font-[600]">{filteredBlogs.length}</span> article
          {filteredBlogs.length !== 1 ? "s" : ""} found
        </h4>
      </div>

      {/* Blog List */}
      {filteredBlogs.length > 0 ? (
        <>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <BlogCard blogs={filteredBlogs.slice(0, visibleCount)} />
          </div>
          {visibleCount < filteredBlogs.length && (
            <div ref={loadMoreRef} className="h-10 mt-10 flex justify-center">
              <p className="text-muted-foreground text-sm">Loading more…</p>
            </div>
          )}
        </>
      ) : (
        <div className="w-full flex flex-col justify-center items-center h-[40vh] gap-3">
          <p className="text-4xl">🔍</p>
          <p className="text-muted-foreground text-lg">
            No blogs match your filters
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedTopic("all");
              setSelectedDate("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;

/* 🔹 BlogCard Component */
const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
  return blogs.map((blog) => (
    <Link key={blog.id} href={`/blogs/${blog.slugTitle}`}>
      <Card className="w-full rounded-lg hover:shadow-md transition-shadow">
        <CardContent className="w-full !px-0 !pt-0 pb-5">
          <div className="h-[250px] relative lg:h-[220px] w-full overflow-hidden">
            <p className="absolute top-0 right-0 bg-gradient-to-tr p-2 text-sm from-lime-400 to-green-300 z-10">
              {blog.category}
            </p>
            <img
              className="w-full h-full object-cover"
              src={`/api/uploads/${blog.image}`}
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
            <p className="text-muted-foreground">
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-muted-foreground">{blog.author}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  ));
};
