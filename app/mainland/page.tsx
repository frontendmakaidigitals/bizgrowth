// Add this line at the top to mark this as a client component
"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import MainPage from "./MainPage";
import Head from "next/head";

export default function Page() {
  const searchParams = useSearchParams();
   const query = searchParams.get("name");

  const title = `Custom Title for ${query}`;
  const description = `A page about ${query}`;

  return (
    <div>
      {/* Set dynamic metadata using <Head> */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <MainPage />
    </div>
  );
}
