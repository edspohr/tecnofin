import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import Cartera365Spotlight from "@/components/sections/Cartera365Spotlight";
import CustomDevSection from "@/components/sections/CustomDevSection";
import FounderSection from "@/components/sections/FounderSection";
import ResultsSection from "@/components/sections/ResultsSection";
import AISection from "@/components/sections/AISection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <Cartera365Spotlight />
      <CustomDevSection />
      <FounderSection />
      <ResultsSection />
      <AISection />
      <FinalCTASection />
    </>
  );
}
