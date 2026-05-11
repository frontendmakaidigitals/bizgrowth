

import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "UAE Business Setup Blog – Guides, Tips & Insights | Biz Growth Consultancy",
  description:
    "Expert guides on UAE company formation, freezone vs mainland, visa processing, banking, and more. Stay informed with Biz Growth Consultancy's business setup blog.",
  // FIX #9 — canonical prevents duplicate-content penalties if filters ever appear in the URL
  alternates: {
    canonical: "https://www.bizgrowthconsultancy.com/blogs",
  },
};

interface BlogsLayoutProps {
  children: ReactNode;
}

// FIX #7 — Renamed from ContactLayout to BlogsLayout
export default function BlogsLayout({ children }: BlogsLayoutProps) {
  return <>{children}</>;
}