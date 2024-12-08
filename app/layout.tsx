import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./App_Chunks/Components/Navbar";
import Footer from "./App_Chunks/Components/Footer";
import { Providers } from "./App_Chunks/Components/ParallaxProvider";
import LenisScroll from "./App_Chunks/Components/LenisScroll";
import Loading from "./App_Chunks/Components/Loading";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Biz Growth",
  description: "Enter into the world of business growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=synonym@200,300,400,500,600,700&f[]=spline-sans@300,400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Loading />
        <LenisScroll />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
