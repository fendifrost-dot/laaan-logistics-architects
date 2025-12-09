import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  HeartPulse, 
  Car, 
  Factory, 
  Store, 
  Warehouse,
  ArrowRight 
} from "lucide-react";

const markets = [
  {
    icon: ShoppingBag,
    name: "E-commerce",
    tagline: "Scaling D2C & Marketplace Delivery",
    description: "From startup brands to enterprise marketplaces, we design fulfillment networks that scale with demand while maintaining delivery excellence and cost efficiency.",
    challenges: [
      "Peak season capacity management",
      "Multi-carrier optimization",
      "Returns logistics complexity",
      "Customer experience consistency"
    ],
    solutions: [
      "Dynamic carrier allocation",
      "Distributed inventory strategy",
      "Real-time visibility platforms",
      "Same-day delivery networks"
    ]
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Medical",
    tagline: "Time-Critical Medical Logistics",
    description: "HIPAA-compliant courier services and logistics consulting for hospital systems, laboratories, pharmaceutical distributors, and medical device companies.",
    challenges: [
      "Regulatory compliance requirements",
      "Temperature-sensitive shipments",
      "Stat delivery timing",
      "Chain of custody documentation"
    ],
    solutions: [
      "Dedicated medical courier networks",
      "Temperature-controlled transport",
      "Real-time tracking with alerts",
      "Compliance documentation systems"
    ]
  },
  {
    icon: Car,
    name: "Automotive",
    tagline: "Parts & Vehicle Logistics",
    description: "Supporting dealerships, aftermarket distributors, OEM suppliers, and auction houses with specialized automotive logistics solutions.",
    challenges: [
      "Parts obsolescence risk",
      "Dealer network complexity",
      "Damage-free vehicle transport",
      "Just-in-time delivery requirements"
    ],
    solutions: [
      "Hub-and-spoke parts distribution",
      "Dedicated dealer delivery routes",
      "Specialized vehicle transport",
      "Inventory optimization consulting"
    ]
  },
  {
    icon: Factory,
    name: "Manufacturing",
    tagline: "Production Support Logistics",
    description: "Just-in-time delivery and production line support for manufacturers requiring precision timing and reliable component delivery.",
    challenges: [
      "Production line stoppages",
      "Supplier coordination",
      "Inventory carrying costs",
      "Quality control in transit"
    ],
    solutions: [
      "Supplier milk-run optimization",
      "Kitting and sequencing services",
      "Emergency expedite capabilities",
      "Inbound logistics management"
    ]
  },
  {
    icon: Store,
    name: "Retail",
    tagline: "Store Replenishment & Distribution",
    description: "Efficient store replenishment and regional distribution strategies for retail chains of all sizes.",
    challenges: [
      "Inventory allocation accuracy",
      "Store receiving windows",
      "Seasonal demand fluctuations",
      "Multi-format store support"
    ],
    solutions: [
      "Cross-dock distribution",
      "Route optimization by store type",
      "Demand-driven replenishment",
      "Fixture and display logistics"
    ]
  },
  {
    icon: Warehouse,
    name: "Industrial Suppliers",
    tagline: "B2B Distribution Excellence",
    description: "Supporting industrial distributors and equipment suppliers with specialized transport and delivery capabilities.",
    challenges: [
      "Heavy/oversized shipments",
      "Job site delivery requirements",
      "Customer time sensitivity",
      "Product handling expertise"
    ],
    solutions: [
      "Liftgate and specialized equipment",
      "Inside delivery services",
      "Will-call and job site support",
      "Dedicated account management"
    ]
  }
];

export default function Markets() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-glow opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  Industries We Serve
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                Deep Vertical Expertise
                <span className="block text-gradient">Across Key Industries</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Our industry-specific expertise enables us to understand your unique 
                challenges and deliver tailored logistics solutions that drive results.
              </p>
            </div>
          </div>
        </section>

        {/* Markets Detail */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {markets.map((market, index) => (
                <div
                  key={market.name}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                        <market.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl text-foreground">
                          {market.name}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {market.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg mb-8">
                      {market.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Discuss Your Needs
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="p-6 rounded-xl bg-background border border-border">
                      <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
                        Common Challenges
                      </h4>
                      <ul className="space-y-3">
                        {market.challenges.map((item) => (
                          <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-background border border-primary/30">
                      <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
                        Our Solutions
                      </h4>
                      <ul className="space-y-3">
                        {market.solutions.map((item) => (
                          <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                Not Sure Where to Start?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team can assess your current operations and recommend the 
                most impactful optimization opportunities.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
