import { Eye, EyeClosed } from "lucide-react";

export const StatusBadge = ({ status }: { status: string }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium
      ${
        status === "published"
          ? "bg-green-500/10 text-green-600"
          : "bg-yellow-500/10 text-yellow-600"
      }`}
  >
    {status === "published" ? (
      <Eye size={11} />
    ) : (
      <EyeClosed size={11} />
    )}
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);
