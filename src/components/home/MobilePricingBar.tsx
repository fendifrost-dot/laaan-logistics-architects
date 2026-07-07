import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MobilePricingBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-card/95 backdrop-blur-md border-t border-border shadow-elevated">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <Link to="/pricing">View Packages & Pricing <ArrowRight className="w-5 h-5" /></Link>
      </Button>
    </div>
  );
}
