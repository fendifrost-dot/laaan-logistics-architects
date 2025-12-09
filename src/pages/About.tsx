import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Rocket, Building2, Handshake } from "lucide-react";

const milestones = [
  {
    year: "2019",
    title: "Foundation",
    description: "Launched as a regional last-mile delivery operator in the Chicago metropolitan area."
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Expanded operations to cover the broader Midwest region with dedicated fleet capacity."
  },
  {
    year: "2023",
    title: "Consulting Launch",
    description: "Introduced logistics consulting services, leveraging operational expertise to advise enterprise clients."
  },
  {
    year: "2024",
    title: "Corporate Restructuring",
    description: "Transitioned from LLC to C-Corporation structure to support institutional capital and national expansion."
  },
  {
    year: "2025",
    title: "National Platform",
    description: "Building a coast-to-coast logistics consulting and execution network."
  }
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every delivery, every route, every decision is optimized for maximum efficiency and reliability."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We continuously invest in technology and process improvements to stay ahead of industry evolution."
  },
  {
    icon: Building2,
    title: "Institutional Excellence",
    description: "Our operations, governance, and reporting meet the standards of institutional partners and investors."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We succeed when our clients succeed. True partnership drives every engagement."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  About LAAAN Group
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                From Regional Operator to
                <span className="block text-gradient">National Logistics Authority</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                LAAAN Group is transforming from a Midwest delivery operation into a 
                premier logistics consulting and execution platform, serving enterprises 
                across America with institutional-grade capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  To architect and operate logistics systems that enable businesses to 
                  achieve operational excellence, cost efficiency, and competitive advantage 
                  in their markets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine deep operational expertise with strategic consulting capabilities, 
                  offering a unique value proposition: we don't just advise—we execute. This 
                  integrated approach ensures that our recommendations translate into measurable 
                  results.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div 
                    key={value.title}
                    className="p-6 rounded-xl bg-background border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl text-foreground mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                From startup to institutional-grade logistics platform
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-8 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading text-lg shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-4" />
                    )}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capital Ready */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Structured for Growth
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Our transition to a C-Corporation structure positions LAAAN Group for 
                institutional capital, strategic partnerships, and national expansion. 
                We're building infrastructure designed for scale.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/investors">
                    Investor Information
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
