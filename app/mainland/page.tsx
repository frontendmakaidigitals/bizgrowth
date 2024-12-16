// app/mainland/page.tsx

"use client"; // This marks the component as client-side, allowing you to use `useSearchParams`

import { useSearchParams } from "next/navigation";
import Layout from "./Layout";
import MainPage from "./MainPage";

// The metadata logic will be handled separately, as we can't use generateMetadata in a client component
export default function MainlandPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("name") || "Mainland"; // Default to "Mainland" if no query is provided

  // Dynamically set the title and description based on the query
  const title = `Business Setup in UAE - ${query}`;
  const description = `Learn about the business setup process in the UAE Mainland for ${query}. Find out the best solutions for establishing your company.`;

  return (
    <Layout title={title} description={description}>
      <MainPage />
    </Layout>
  );
}
