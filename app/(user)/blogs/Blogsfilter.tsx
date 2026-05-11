// app/blogs/BlogsFilter.tsx
"use client";


import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import BlogsGrid from "./blogsgrid";
import type { Blog } from "./page";

type DateFilter = "all" | "today" | "this_week" | "this_month" | "this_year";

const dateOptions: { label: string; value: DateFilter }[] = [
  { label: "All Time", value: "all" },
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
  { label: "This Year", value: "this_year" },
];

export default function BlogsFilter({
  initialBlogs,
}: {
  initialBlogs: Blog[];
}) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<DateFilter>("all");

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Keep a ref to visibleCount so the IntersectionObserver callback never goes stale
  // FIX #1 — avoids re-registering the observer on every render
  const visibleCountRef = useRef(visibleCount);
  visibleCountRef.current = visibleCount;

  const filteredBlogsLengthRef = useRef(0);

  // FIX #6 — trim + deduplicate categories so no duplicate ToggleGroupItem keys
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        initialBlogs
          .map((b) => b.category?.trim())
          .filter((c): c is string => Boolean(c)),
      ),
    );
  }, [initialBlogs]);

  const filteredBlogs = useMemo(() => {
    const now = new Date();
    return initialBlogs.filter((blog) => {
      if (selectedTopic !== "all" && blog.category?.trim() !== selectedTopic)
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
  }, [initialBlogs, selectedTopic, selectedDate]);

  // Keep filteredBlogs.length accessible inside the observer without re-registering
  filteredBlogsLengthRef.current = filteredBlogs.length;

  // Reset visible count whenever filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [selectedTopic, selectedDate]);

  // FIX #1 — register observer ONCE; reads latest counts via refs, not closure values
  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCountRef.current < filteredBlogsLengthRef.current
        ) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      { threshold: 1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []); // ← empty: attach once, never re-register

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="mx-auto mb-10 h-[180px] lg:h-[280px] w-full flex flex-col relative justify-center overflow-hidden items-center gap-4">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt=""
          role="presentation"
        />
        <h1 className="relative z-10 font-semibold text-2xl lg:text-4xl">
          Latest News & Articles
        </h1>
        <p className="relative z-10 font-semibold text-white/80">Blogs</p>
      </div>

      {/* Filters */}
      <div className="container mb-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
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

              {/* FIX #6 — categories are already trimmed + deduplicated above */}
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
      </div>

      {/* Article count */}
      <div className="container mb-6">
        <p className="text-lg font-Satoshi">
          <span className="font-[600]">{filteredBlogs.length}</span> article
          {filteredBlogs.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Blog grid or empty state */}
      {filteredBlogs.length > 0 ? (
        // FIX #2 — BlogsGrid handles the grid + BlogCard rendering properly
        <BlogsGrid
          blogs={visibleBlogs}
          loadMoreRef={loadMoreRef}
          hasMore={hasMore}
        />
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
}