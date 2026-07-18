import { StatusBadge } from "./status-badge";
import {
  Pencil,
  Calendar,
  Tag,
  User,
  Trash2,
  Loader2,
  SplineIcon,
} from "lucide-react";
import type { BlogPost } from "../page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";

interface Props {
  post: BlogPost;
  setConfirmPost: (post: BlogPost | null) => void;
  deletingId: number | null;
}

const BlogCards = ({ post, setConfirmPost, deletingId }: Props) => {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-surface overflow-hidden hover:border-foreground/20 hover:shadow-2xs transition-all">
      {/* Cover image */}
      <div className="w-full h-60 bg-background border-b border-border overflow-hidden ">
        {post.coverImage ? (
          <img
           src={`/${encodeURIComponent(post.coverImage)}`}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-foreground/10">
            <Pencil size={32} />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Title + badges */}
        <div className="space-y-1.5">
          <h2 className="text-xl font-semibold text-foreground line-clamp-2 leading-snug">
            {post.title}
          </h2>
          <div className="flex items-center gap-1.5 flex-wrap">
            <StatusBadge status={post.status} />
            {post.category && (
              <span className="text-xs text-foreground-muted bg-foreground/5 rounded-full px-2 py-0.5">
                {post.category}
              </span>
            )}
          </div>
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xs text-foreground-muted line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-muted border-t border-border pt-3">
          {post.author && (
            <span className="flex items-center gap-1">
              <User size={11} />
              {post.author}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          {post.tags && (
            <span className="flex items-center gap-1 truncate">
              <Tag size={11} className="shrink-0" />
              <span className="truncate">
                {post.tags
                  .split(",")
                  .slice(0, 2)
                  .map((t) => t.trim())
                  .join(", ")}
              </span>
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1">
          <Link href={`/dashboard/blogs/edit/${post.id}`} className="flex-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full"
            >
              <Pencil size={13} />
              Edit
            </Button>
          </Link>
          <Button
            type="button"
            size="sm"
            variant="destructive"
            onClick={() => setConfirmPost(post)}
            disabled={deletingId === post.id}
            className="flex-1"
          >
            {deletingId === post.id ? (
              <SplineIcon size={13} className="animate-spin" />
            ) : (
              <>
                <Trash2 size={13} />
                Delete
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
