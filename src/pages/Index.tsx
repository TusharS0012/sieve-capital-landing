import SieveNav from "@/components/SieveNav";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import FeatureSections from "@/components/FeatureSections";
import PipelineSection from "@/components/PipelineSection";
import LiveSignalFeed from "@/components/LiveSignalFeed";
import PerformanceSection from "@/components/PerformanceSection";
import BentoTechStack from "@/components/BentoTechStack";
import CtaSection from "@/components/CtaSection";
import SieveFooter from "@/components/SieveFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SieveNav />
      <HeroSection />
      <TrustIndicators />
      <PipelineSection />
      <FeatureSections />
      <LiveSignalFeed />
      <PerformanceSection />
      <BentoTechStack />
      <CtaSection />
      <SieveFooter />
    </div>
  );
};

export default Index;
