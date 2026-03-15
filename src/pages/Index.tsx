import SieveNav from "@/components/SieveNav";
import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSections";
import LiveSignalFeed from "@/components/LiveSignalFeed";
import BentoTechStack from "@/components/BentoTechStack";
import SieveFooter from "@/components/SieveFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <HeroSection />
      <FeatureSections />
      <LiveSignalFeed />
      <BentoTechStack />
      <SieveFooter />
    </div>
  );
};

export default Index;
