import HeroSection from "@/components/HeroSection";
import ConvergenceSection from "@/components/ConvergenceSection";
import PotentialSection from "@/components/PotentialSection";
import RealitySection from "@/components/RealitySection";
import MarketSection from "@/components/MarketSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ConvergenceSection />
      <PotentialSection />
      <RealitySection />
      <MarketSection />
      <FooterSection />
    </main>
  );
};

export default Index;
