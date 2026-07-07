import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/home/PricingSection";

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24">
      <PricingSection />
    </main>
    <Footer />
  </div>
);

export default Pricing;
