import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  LineChart, 
  Route, 
  Zap, 
  HeartPulse, 
  ShoppingCart, 
  Car, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Logistics Consulting & Optimization",
    description: "Comprehensive analysis of your supply chain operations to identify inefficiencies, reduce costs, and improve delivery performance.",
    features: [
      "Supply chain network analysis",
      "Cost reduction strategies",
      "Performance benchmarking",
      "Technology assessment & recommendations"
    ],
    href: "/services/logistics-consulting"
  },
  {
    icon: Route,
    title: "Supply Chain Strategy & Route Engineering",
    description: "Intelligent route optimization and network design leveraging advanced algorithms and industry expertise.",
    features: [
      "Route optimization modeling",
      "Distribution network design",
      "Capacity planning",
      "Geographic expansion strategy"
    ],
    href: "/services/supply-chain"
  },
  {
    icon: Zap,
    title: "Last-Mile & Expedited Operations",
    description: "Rapid delivery execution with precision timing for time-sensitive shipments and same-day requirements.",
    features: [
      "Same-day delivery operations",
      "Hot shot services",
      "Dedicated driver networks",
      "Real-time tracking & visibility"
    ],
    href: "/services/last-mile"
  },
  {
    icon: HeartPulse,
    title: "Medical & Time-Critical Transport",
    description: "HIPAA-compliant courier services designed for healthcare systems, laboratories, and pharmaceutical distributors.",
    features: [
      "Lab specimen transport",
      "Pharmaceutical delivery",
      "Medical equipment logistics",
      "Temperature-controlled transport"
    ],
    href: "/services/medical-courier"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail Fulfillment",
    description: "Scalable fulfillment strategy for direct-to-consumer brands and retail distribution networks.",
    features: [
      "Fulfillment network design",
      "Carrier mix optimization",
      "Returns management strategy",
      "Peak season capacity planning"
    ],
    href: "/services/ecommerce"
  },
  {
    icon: Car,
    title: "Auto & Industrial Logistics",
    description: "Specialized transport solutions for automotive dealerships, parts distributors, and industrial manufacturers.",
    features: [
      "Dealer parts delivery",
      "Just-in-time manufacturing support",
      "Heavy equipment transport",
      "Supplier network management"
    ],
    href: "/services/auto-industrial"
  },
  {
    icon: TrendingUp,
    title: "Fleet Scaling & Freight Advisory",
    description: "Strategic guidance for fleet expansion, capacity development, and semi-truck freight operations.",
    features: [
      "Fleet acquisition strategy",
      "Driver recruitment & retention",
      "Freight lane development",
      "Asset utilization optimization"
    ],
    href: "/services/fleet-scaling"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-glow opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  Our Services
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                Enterprise Logistics
                <span className="block text-gradient">Consulting & Execution</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                From strategic advisory to operational execution, we provide end-to-end 
                logistics solutions that drive efficiency, reduce costs, and scale with 
                your business.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-5 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-muted-foreground text-sm">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            {feature}
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
                Ready to Optimize Your Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a consultation with our team to discuss your logistics 
                challenges and discover how LAAAN Group can help.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Consulting
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
