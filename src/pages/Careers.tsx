import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-8">
          <Briefcase className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
          Careers at LAAAN Group
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          We&apos;re building enterprise logistics intelligence from Chicago.
          For career opportunities, reach out and tell us about your background in
          operations, consulting, or supply chain.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default Careers;
