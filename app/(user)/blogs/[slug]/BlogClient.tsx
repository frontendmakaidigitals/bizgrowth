// app/blogs/[slug]/BlogClient.tsx
//
// FIXES APPLIED:
// FIX #1  — blog: any → Blog type (imported from page.tsx)
// FIX #2  — calculateReadTime now receives staticHtml (stripped of tags), not raw Lexical JSON
// FIX #3  — <Link><button> nesting removed on Facebook + LinkedIn; all share links use <Link> directly
// FIX #9  — usePathname removed; blogURL now arrives as a prop from the server (slug is known there)
// FIX #10 — priority added to hero <Image> (above the fold = LCP element)
// EXTRA   — slug reference bug fixed (was `slug` which was undefined in scope)

"use client";

import { User, Facebook, Twitter, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../../App_Chunks/Components/Banner";
import type { Blog } from "./page"; // FIX #1 — shared type, no more `any`

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

// FIX #2 — accepts pre-converted HTML string (not raw Lexical JSON).
// Strips tags first so word count reflects actual readable words.
function calculateReadTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = text.split(" ").filter(Boolean).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface BlogClientProps {
  blog: Blog;           // FIX #1
  staticHtml: string;
  blogURL: string;      // FIX #9 — passed from server; no usePathname needed
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BlogClient({ blog, staticHtml, blogURL }: BlogClientProps) {
  // FIX #9 — blogURL comes from props; usePathname import removed entirely
  const blogTitle = blog?.title || "";

  // Precompute share URLs
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogURL)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogURL)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogURL)}`;

  // Shared className for all share link buttons
  const shareLinkClass =
    "w-full justify-center p-2 flex text-slate-50 items-center gap-2 border border-slate-200 rounded-lg";

  return (
    <main className="pt-14 relative container">

      {/* ------------------------------------------------------------------ */}
      {/* Title + Category                                                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col items-center">
        <p className="p-2 text-xs bg-teal-100 text-teal-700 rounded-lg font-bold font-quicksand text-center mb-2">
          {blog?.category}
        </p>
        <h1 className="text-4xl lg:text-5xl tracking-tighter font-[600] text-center">
          {blog?.title}
        </h1>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Meta — author / date / read time                                    */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col items-center mt-8">
        <ul className="flex flex-row justify-between lg:justify-center items-center text-sm sm:divide-y-0 sm:divide-x divide-slate-300 w-full lg:px-0">
          <li className="flex items-center gap-3 py-2 sm:py-0 px-3">
            <User size={16} />
            <p>{blog?.author}</p>
          </li>

          <li className="flex items-center gap-3 py-2 sm:py-0 px-3">
            <Calendar size={16} />
            <time dateTime={blog?.createdAt ?? undefined}>
              {formatDate(blog?.createdAt)}
            </time>
          </li>

          {/* FIX #2 — pass staticHtml, not blog.content (raw Lexical JSON) */}
          <li className="hidden lg:flex items-center py-2 sm:py-0 px-3">
            {staticHtml ? calculateReadTime(staticHtml) : null}
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        {/* Share Buttons                                                     */}
        {/* FIX #3 — <Link><button> nesting removed on all three.            */}
        {/*           <Link> IS an <a>; nesting a <button> inside is invalid  */}
        {/*           HTML and causes React hydration warnings.               */}
        {/* ---------------------------------------------------------------- */}
        <ul className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:items-center mt-5 gap-3 w-full">
          <li className="w-full lg:w-auto">
            <Link
              href={twitterHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${shareLinkClass} bg-[#1DA1F2]`}
            >
              <Twitter />
            </Link>
          </li>

          {/* FIX #3 — was <Link><button>…</button></Link> */}
          <li className="w-full lg:w-auto">
            <Link
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${shareLinkClass} bg-[#1877F2]`}
            >
              <Facebook />
            </Link>
          </li>

          {/* FIX #3 — was <Link><button>…</button></Link> */}
          <li className="w-full lg:w-auto">
            <Link
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${shareLinkClass} bg-[#0A66C2]`}
            >
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Hero Image                                                           */}
      {/* FIX #10 — priority added; this is the LCP element (above the fold) */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full relative h-[300px] lg:h-[580px] mt-12 rounded-xl overflow-hidden">
        <Image
          fill
          priority                              // FIX #10
          src={`/api/uploads/${blog.image}`}
          alt={blog?.title || "Blog image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Blog Content                                                         */}
      {/* staticHtml is sanitized server-side (DOMPurify in page.tsx)         */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-5xl mx-auto">
        <div
          className="blog-content mt-8"
          dangerouslySetInnerHTML={{ __html: staticHtml }}
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CTA Banner                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="mt-14">
        <Banner
          title="Get Expert Help to Build, Scale, and Launch Your Next Project"
          desc="Whether you're starting from scratch or improving an existing product, our experts are ready to guide you with clear strategy, clean execution, and real results. Share your details and let's move your project forward—faster and smarter."
        />
      </section>
    </main>
  );
}