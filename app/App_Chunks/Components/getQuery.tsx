// app/[slug]/page.tsx

import { Metadata } from "next";
import { ReactNode } from "react";

// Define the structure of the function that generates metadata
export async function generateMetadata(
  {
    params, // For route parameters like `id`
    searchParams, // For query parameters like `?name=value`
  }: {
    params: { id: string }; // `id` can be a route parameter
    searchParams?: { name?: string }; // Optional query parameter
  },
  parent: Metadata
): Promise<Metadata> {
  const queryName = searchParams?.name || "Default Name"; // Fallback to 'Default Name' if `name` is not provided in the query
  console.log(queryName);

  const title = `Product Page - ${queryName}`;

  return {
    title, // Dynamic title
    description: `Learn more about the product with ID  and the name ${queryName}.`,
  };
}

// Layout component that receives metadata like title and description
interface PageProps {
  params: { id: string };
  searchParams: { name?: string };
}

export default function Page({ params, searchParams }: PageProps) {
  return (
    <div>
      <h1>Product Page for ID {params.id}</h1>
      <p>Product Name: {searchParams?.name || "Default Name"}</p>
    </div>
  );
}
