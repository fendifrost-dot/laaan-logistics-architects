import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  FileCheck, 
  Truck, 
  Cpu, 
  ArrowUpRight, 
  Building 
} from "lucide-react";

const highlights = [
  {
    icon: DollarSign,
    title: "Capital Efficiency",
    description: "Asset-light model with strategic asset deployment for optimal returns"
  },
  {
    icon: FileCheck,
    title: "Recurring Enterprise Contracts",
    description: "Long-term agreements with enterprise and mid-market clients"
  },
  {
    icon: Truck,
    title: "Asset-Backed Fleet Model",
    description: "Tangible assets providing stability and collateral for growth financing"
  },
  {
    icon: Cpu,
    title: "Technology-Driven Operations",
    description: "Proprietary dispatch optimization and real-time visibility platform"
  },
  {
    icon: ArrowUpRight,
    title: "Freight Expansion Strategy",
    description: "Planned expansion into semi-truck freight and regional LTL operations"
  },
  {
    icon: Building,
    title: "Institutional Restructuring",
    description: "Capital structure optimized for institutional partners and governance"
  }
];

export function InvestorSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Investor Relations
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Capital-Ready Logistics Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              LAAAN Group is structured for institutional investment, combining 
              operational excellence with scalable growth potential.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/investors">
                  Investor Information
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Lender Inquiries
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
