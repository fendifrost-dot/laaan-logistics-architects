import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhySection } from "@/components/home/WhySection";
import { MarketsSection } from "@/components/home/MarketsSection";
import { InvestorSection } from "@/components/home/InvestorSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhySection />
        <MarketsSection />
        <InvestorSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
