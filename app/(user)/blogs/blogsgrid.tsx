"use client"; // needs Link + Image; safe because data is passed as props from server

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Editor } from "@/components/blocks/editor-00/editor";
import type { Blog } from "./page"; // shared type

interface BlogsGridProps {
  blogs: Blog[];
  /** sentinel div ref for IntersectionObserver — only needed in paginated view */
  loadMoreRef?: React.RefObject<HTMLDivElement>;
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
      {/* FIX #5 — grid stays here, adjacent to item rendering, not in a parent
                   that doesn't know how many children there are */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {blogs.map((blog) => (
          // FIX #2 — proper component per item, not a flat-array pseudo-component
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Sentinel for IntersectionObserver — only rendered when there are more items */}
      {hasMore && loadMoreRef && (
        <div ref={loadMoreRef} className="h-10 mt-10 flex justify-center">
          <p className="text-muted-foreground text-sm">Loading more…</p>
        </div>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// BlogCard — single card; now a proper named component, not a list-returning fn
// ---------------------------------------------------------------------------
function BlogCard({ blog }: { blog: Blog }) {
  // FIX #3 — safe JSON parse; malformed editor state silently renders nothing
  const parsedContent = (() => {
    if (!blog.content) return null;
    if (typeof blog.content !== "string") return blog.content;
    try {
      return JSON.parse(blog.content);
    } catch {
      return null;
    }
  })();

  // FIX #4 — never produce /blogs/undefined or /blogs/null
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
            {/* Next.js Image — lazy-load, WebP, responsive srcset */}
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
            <div className="mt-1">
              {parsedContent && (
                <Editor
                  editorSerializedState={parsedContent}
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
  );
}
