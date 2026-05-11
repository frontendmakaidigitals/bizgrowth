// app/blogs/BlogsGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Blog } from "./page";

interface BlogsGridProps {
  blogs: Blog[];
  loadMoreRef?: React.RefObject<HTMLDivElement | null>;
  hasMore?: boolean;
}

export default function BlogsGrid({
  blogs,
  loadMoreRef,
  hasMore,
}: BlogsGridProps) {
  if (blogs.length === 0) return null;

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {hasMore && loadMoreRef && (
        <div
          ref={loadMoreRef as React.RefObject<HTMLDivElement>}
          className="h-10 mt-10 flex justify-center"
        >
          <p className="text-muted-foreground text-sm">Loading more…</p>
        </div>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Extract plain text from Lexical JSON — no Editor component needed on cards.
// Editor is heavy, requires hydration, and crashes the grid if state is malformed.
// A card only needs a 2-line text excerpt, which we can get from the JSON directly.
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// BlogCard
// ---------------------------------------------------------------------------
function BlogCard({ blog }: { blog: Blog }) {
  const href = blog.slugTitle
    ? `/blogs/${blog.slugTitle}`
    : `/blogs/${blog.id}`;

  return (
    <Link href={href}>
      <Card className="w-full rounded-lg hover:shadow-md transition-shadow">
        <CardContent className="w-full !px-0 !pt-0 pb-5">
          <div className="h-[250px] relative lg:h-[220px] w-full overflow-hidden">
            <p className="absolute top-0 right-0 bg-gradient-to-tr p-2 text-sm from-lime-400 to-green-300 z-10">
              {blog.category}
            </p>
            <Image
              fill
              src={`/api/uploads/${blog.image}`}
              alt={blog.title}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          <div className="mt-3 px-3">
            <h3 className="font-bold line-clamp-2">{blog.title}</h3>
            {/* Use server-extracted excerpt directly */}
            {blog.excerpt && (
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {blog.excerpt}
              </p>
            )}
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
  );
}
