

import { Metadata } from "next";
import BlogClient from "./BlogClient";
import { dbGet, dbAll } from "@/lib/db";
import zlib from "zlib";
import DOMPurify from "isomorphic-dompurify"; // FIX #4 — npm i isomorphic-dompurify @types/dompurify
import Blogs from "@/components/Blogs";

// ---------------------------------------------------------------------------
// Shared type — also imported by BlogClient (fixes blog: any)
// ---------------------------------------------------------------------------
export type Blog = {
  id: string;
  title: string;
  author?: string;
  category?: string;
  content?: string;
  metaTitle?: string;
  metaDesc?: string;
  image?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  slugTitle?: string;
};

// ---------------------------------------------------------------------------
// Lexical node type
// ---------------------------------------------------------------------------
type LexicalNode = {
  type: string;
  text?: string;
  format?: number;
  tag?: string;
  listType?: string;
  children?: LexicalNode[];
  url?: string;
  src?: string;
  altText?: string;
  level?: number;
};

const serverUrl = "https://www.bizgrowthconsultancy.com";

// ---------------------------------------------------------------------------
// DB helper
// ---------------------------------------------------------------------------
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const blog = await dbGet("SELECT * FROM blogs WHERE slugTitle = ?", [slug]);
    if (!blog) return null;

    if (blog.content?.startsWith("gz:")) {
      try {
        const compressed = Buffer.from(blog.content.slice(3), "base64");
        blog.content = zlib.gunzipSync(compressed).toString("utf-8");
      } catch (err) {
        console.warn("⚠️ Failed to decompress content for blog:", slug, err);
      }
    }

    return blog as Blog;
  } catch (err) {
    console.error("Failed to fetch blog from DB:", err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Lexical → HTML
// ---------------------------------------------------------------------------
function lexicalNodeToHtml(node: LexicalNode): string {
  const children = node.children
    ? node.children.map(lexicalNodeToHtml).join("")
    : "";

  switch (node.type) {
    case "root":
      return children;

    case "paragraph":
      return `<p>${children}</p>`;

    case "heading": {
      const tag = node.tag || `h${node.level || 2}`;
      return `<${tag}>${children}</${tag}>`;
    }

    case "list":
      return node.listType === "bullet"
        ? `<ul>${children}</ul>`
        : `<ol>${children}</ol>`;

    case "listitem":
      return `<li>${children}</li>`;

    case "quote":
      return `<blockquote>${children}</blockquote>`;

    // FIX #6 — external links open safely in new tab; internal links untouched
    case "link": {
      const href = node.url || "#";
      const isExternal = href.startsWith("http");
      const target = isExternal ? ' target="_blank"' : "";
      const rel    = isExternal ? ' rel="noopener noreferrer"' : "";
      return `<a href="${href}"${target}${rel}>${children}</a>`;
    }

    // FIX #5 — lazy load + constrained dimensions prevent layout shift (CLS)
    case "image":
      return `<img src="${node.src || ""}" alt="${
        node.altText || ""
      }" loading="lazy" style="max-width:100%;height:auto;" />`;

    case "text": {
      let text = node.text || "";
      if (node.format) {
        if (node.format & 16) text = `<code>${text}</code>`;
        if (node.format & 4)  text = `<s>${text}</s>`;
        if (node.format & 8)  text = `<u>${text}</u>`;
        if (node.format & 2)  text = `<em>${text}</em>`;
        if (node.format & 1)  text = `<strong>${text}</strong>`;
      }
      return text;
    }

    case "linebreak":
      return "<br />";

    default:
      return children;
  }
}

function lexicalToHtml(serializedState: { root: LexicalNode } | null): string {
  if (!serializedState?.root) return "";
  try {
    return lexicalNodeToHtml(serializedState.root);
  } catch {
    return "";
  }
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  // FIX #8 — .trim() guard: empty string would produce ".../api/uploads/"
  const imageUrl = blog?.image?.trim()
    ? `${serverUrl}/api/uploads/${blog.image.trim()}`
    : undefined;

  return {
    title: blog?.metaTitle || blog?.title || "Blog",
    description: blog?.metaDesc || "",
    openGraph: {
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: imageUrl ? [imageUrl] : [],
      url: `${serverUrl}/blogs/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: { canonical: `${serverUrl}/blogs/${slug}` },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="p-8 text-center text-gray-500">Blog not found</div>
    );
  }

  // Safe JSON parse of Lexical content
  const parsedContent = (() => {
    if (typeof blog.content !== "string") return null;
    try {
      return JSON.parse(blog.content);
    } catch {
      return null;
    }
  })();

  // Convert Lexical → raw HTML
  const rawHtml = lexicalToHtml(parsedContent);

  // FIX #4 — sanitize on the server before it reaches dangerouslySetInnerHTML
  const staticHtml = DOMPurify.sanitize(rawHtml, {
    USE_PROFILES: { html: true }, // keeps standard formatting, strips <script> + event handlers
  });

  // FIX #8 — same trim guard as generateMetadata
  const imageUrl = blog.image?.trim()
    ? `${serverUrl}/api/uploads/${blog.image.trim()}`
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.metaTitle || blog.title,
    description: blog.metaDesc || "",
    image: imageUrl, // FIX #8 — never an empty-string URL
    author: {
      "@type": "Person",
      name: blog.author || "Biz Growth Consultancy",
      url: `${serverUrl}/about-us`,
    },
    publisher: {
      "@type": "Organization",
      name: "Biz Growth Consultancy",
      logo: {
        "@type": "ImageObject",
        url: `${serverUrl}/logo.png`,
      },
    },
    datePublished: blog.createdAt ?? undefined,
    dateModified: blog.updatedAt ?? blog.createdAt ?? undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${serverUrl}/blogs/${slug}`,
    },
  };

  // FIX #9 — pass blogURL as prop so BlogClient drops usePathname entirely
  const blogURL = `${serverUrl}/blogs/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient blog={blog} staticHtml={staticHtml} blogURL={blogURL} />
      <Blogs />
    </>
  );
}

// ---------------------------------------------------------------------------
// generateStaticParams
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  try {
    // FIX #7 — COALESCE handles rows where updatedAt IS NULL
    const blogs = await dbAll(
      "SELECT slugTitle FROM blogs ORDER BY COALESCE(updatedAt, createdAt) DESC",
      [],
    );
    return (blogs ?? [])
      .filter((b: { slugTitle: string }) => Boolean(b.slugTitle)) // skip null/empty slugs
      .map((b: { slugTitle: string }) => ({ slug: b.slugTitle }));
  } catch (err) {
    console.error("Failed to fetch slugs for static params:", err);
    return [];
  }
}