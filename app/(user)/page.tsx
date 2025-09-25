import HeroSection from "./App_Chunks/Components/HeroSection";
import TabularSection from "./App_Chunks/Components/TabularSection";
import ThirdSection from "./App_Chunks/Components/ThirdSection";
import FourthSection from "./App_Chunks/Components/FourthSection";
import LogoMarquee from "./App_Chunks/Components/LogoMarquee";
import Form from "./App_Chunks/Components/Form";
import { Metadata } from "next";

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
