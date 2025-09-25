import Navbar from "./App_Chunks/Components/Navbar";
import Footer from "./App_Chunks/Components/Footer";
import Loading from "./App_Chunks/Components/Loading";
import FloatingWhatsIcon from "./App_Chunks/Components/floatingWhatsIcon";
import { Providers } from "./App_Chunks/Components/ParallaxProvider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: " Business Setup and Management Consultants in UAE",
  description:
    " Get expert guidance on UAE business setup and management services. We provide top-notch solutions for company formation, licensing, visas, and more. Start your business journey with confidence today!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Loading />
      <FloatingWhatsIcon />
      <Providers>{children}</Providers>
      <Footer />
    </>
  );
}
