import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Ready to Transform Your
            <span className="block text-gradient">Logistics Operations?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're optimizing existing operations, scaling your delivery network, 
            or exploring strategic partnerships, our team is ready to architect your solution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <Link to="/#pricing">
                View Packages & Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Talk to Our Team
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-muted-foreground">
            <a 
              href="tel:+1-872-233-8382" 
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              (872) 233-8382
            </a>
            <a 
              href="mailto:info@laaangroup.com" 
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              info@laaangroup.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
