import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  FileCheck, 
  Truck, 
  Cpu, 
  ArrowUpRight, 
  Building,
  Target,
  Shield,
  BarChart3
} from "lucide-react";

const investmentHighlights = [
  {
    icon: TrendingUp,
    metric: "Multi-Market",
    label: "Operations Footprint",
    description: "Last-mile, freight, and consulting capabilities across Midwest markets"
  },
  {
    icon: DollarSign,
    metric: "Value-Focused",
    label: "Client Outcomes",
    description: "Engagements structured around measurable cost and service improvements"
  },
  {
    icon: FileCheck,
    metric: "Recurring",
    label: "Advisory Revenue",
    description: "Retainer and project models designed for predictable consulting cash flow"
  },
  {
    icon: Truck,
    metric: "Asset-Backed",
    label: "Fleet Operations",
    description: "Operational fleet assets supporting execution and growth financing discussions"
  }
];

const structureAdvantages = [
  {
    icon: Building,
    title: "Institutional Structure",
    description: "Optimized for institutional capital, preferred equity issuance, and long-term growth pathways."
  },
  {
    icon: Shield,
    title: "Governance Framework",
    description: "Board-ready governance structure with clear reporting lines and institutional-grade controls."
  },
  {
    icon: Cpu,
    title: "Technology Platform",
    description: "Proprietary dispatch and optimization systems creating competitive moat and operational leverage."
  },
  {
    icon: Target,
    title: "Focused Growth Strategy",
    description: "Clear expansion roadmap from Midwest regional to national platform with defined milestones."
  }
];

const useCases = [
  {
    title: "Fleet Expansion Capital",
    description: "Fund dedicated fleet vehicle acquisitions to support growing enterprise contracts and route density.",
    amount: "$2-5M"
  },
  {
    title: "Technology Investment",
    description: "Accelerate development of proprietary dispatch optimization and customer visibility platforms.",
    amount: "$1-3M"
  },
  {
    title: "Geographic Expansion",
    description: "Establish operations in new metropolitan markets across the Midwest and beyond.",
    amount: "$3-7M"
  },
  {
    title: "Semi-Truck Division Launch",
    description: "Enter regional LTL and freight markets with dedicated semi-truck capacity.",
    amount: "$5-10M"
  }
];

export default function Investors() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-glow opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  Investor Relations
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                Invest in the Future of
                <span className="block text-gradient">Logistics Infrastructure</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                LAAAN Group offers institutional investors access to a scalable logistics 
                platform with proven operations, enterprise relationships, and clear 
                growth trajectory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request Investment Materials
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">
                Investment Highlights
              </h2>
              <p className="text-muted-foreground">
                Key metrics demonstrating operational excellence and growth potential
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentHighlights.map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl bg-background border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-3xl font-heading text-primary mb-1">{item.metric}</p>
                  <p className="text-foreground font-medium mb-2">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl text-foreground mb-6">
                  Institutional-Grade Structure
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our governance and capital structure positions LAAAN Group 
                  for institutional capital, strategic acquisitions, and long-term value creation. 
                  We've built infrastructure designed for scale and governance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <BarChart3 className="w-6 h-6 text-primary mb-2" />
                    <p className="text-foreground font-medium">Financial Reporting</p>
                    <p className="text-muted-foreground text-sm">Institutional-grade financials</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <p className="text-foreground font-medium">Risk Management</p>
                    <p className="text-muted-foreground text-sm">Comprehensive insurance & controls</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {structureAdvantages.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use of Capital */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-4">
                Capital Deployment Strategy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clear investment priorities aligned with strategic growth objectives
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-background border border-border"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-primary font-medium">{item.amount}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Interested in Learning More?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Request our investor presentation and financial overview to evaluate 
                LAAAN Group as a potential portfolio addition.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Materials
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">
                    Lender Inquiries
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card border-t border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              <strong className="text-foreground">Important notice:</strong> Information on
              this page is for general informational purposes only and does not constitute
              an offer to sell or a solicitation to buy securities. Financial metrics,
              projections, and operational statements are illustrative unless provided in a
              signed data room or offering document. Past client outcomes do not guarantee
              future results. Request official materials for diligence review.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
