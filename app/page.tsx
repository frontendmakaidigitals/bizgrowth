import HeroSection from "./App_Chunks/Components/HeroSection";
import TabularSection from "./App_Chunks/Components/TabularSection";
import ThirdSection from "./App_Chunks/Components/ThirdSection";
import FourthSection from "./App_Chunks/Components/FourthSection";
import LogoMarquee from "./App_Chunks/Components/LogoMarquee";
import BusinessSteps from "./App_Chunks/Components/BusinessSteps";
import Form from "./App_Chunks/Components/Form";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <TabularSection />
      <ThirdSection />
      <FourthSection />
      <BusinessSteps />
      <LogoMarquee />
      <Form />
    </div>
  );
}
