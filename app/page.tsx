import HeroSection from "./App_Chunks/Components/HeroSection";
import TabularSection from "./App_Chunks/Components/TabularSection";
import ThirdSection from "./App_Chunks/Components/ThirdSection";
import FourthSection from "./App_Chunks/Components/FourthSection";
import LogoMarquee from "./App_Chunks/Components/LogoMarquee";
import Form from "./App_Chunks/Components/Form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: " Business Setup and Management Consultants in UAE",
  description:
    " Get expert guidance on UAE business setup and management services. We provide top-notch solutions for company formation, licensing, visas, and more. Start your business journey with confidence today!",
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <TabularSection />
      <ThirdSection />
      <FourthSection />
      <LogoMarquee />
      <Form />
    </div>
  );
}
