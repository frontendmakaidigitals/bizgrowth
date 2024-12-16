// app/mainland/layout.tsx

import { Metadata } from "next";
import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export async function generateMetadata({
  searchParams = {}, // Default searchParams to an empty object
}: {
  searchParams?: { name?: string }; // Allow name to be optional in searchParams
}): Promise<Metadata> {
  // Use searchParams.name or fallback to 'Mainland' if not available
  const query = searchParams.name || "Mainland";

  const title = `Business Setup in UAE - ${query}`;
  const description = `Learn about the business setup process in the UAE Mainland for ${query}. Find out the best solutions for establishing your company.`;

  return {
    title,
    description,
  };
}

export default function Layout({ title, description, children }: LayoutProps) {
  return <main>{children}</main>;
}
