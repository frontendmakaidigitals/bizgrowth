import Navbar from "./App_Chunks/Components/Navbar";
import Footer from "./App_Chunks/Components/Footer";
import Loading from "./App_Chunks/Components/Loading";
import FloatingWhatsIcon from "./App_Chunks/Components/floatingWhatsIcon";
import { Providers } from "./App_Chunks/Components/ParallaxProvider";
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
