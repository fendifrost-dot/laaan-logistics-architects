import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Truck, Network } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Enterprise Logistics Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Architecting Scalable
            <span className="block text-gradient">Supply Chain Systems</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Strategic logistics consulting and execution for enterprises ready to optimize, 
            scale, and dominate their delivery infrastructure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/#pricing">
                View Packages & Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Request Consulting
              </Link>
            </Button>
          </div>
          <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <Link to="/investors" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              Investor & lender inquiries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-heading text-foreground">35%</p>
                <p className="text-sm text-muted-foreground">Avg. Cost Reduction</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-heading text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Operations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-heading text-foreground">Midwest</p>
                <p className="text-sm text-muted-foreground">Hub Advantage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20 hidden lg:block">
        <div className="absolute inset-0 border border-border/50 rounded-l-3xl" />
        <div className="absolute inset-4 border border-border/30 rounded-l-2xl" />
        <div className="absolute inset-8 border border-border/20 rounded-l-xl" />
      </div>
    </section>
  );
}
