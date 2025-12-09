import { Link } from "react-router-dom";
import { 
  LineChart, 
  Route, 
  Zap, 
  HeartPulse, 
  ShoppingCart, 
  Car, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Logistics Consulting & Optimization",
    description: "Data-driven analysis and strategic recommendations to streamline your supply chain operations.",
    href: "/services/logistics-consulting"
  },
  {
    icon: Route,
    title: "Supply Chain Strategy & Route Engineering",
    description: "Intelligent route optimization and network design for maximum efficiency.",
    href: "/services/supply-chain"
  },
  {
    icon: Zap,
    title: "Last-Mile & Expedited Operations",
    description: "Rapid delivery execution with precision timing for time-sensitive shipments.",
    href: "/services/last-mile"
  },
  {
    icon: HeartPulse,
    title: "Medical & Time-Critical Transport",
    description: "HIPAA-compliant medical courier services for healthcare systems and laboratories.",
    href: "/services/medical-courier"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail Fulfillment",
    description: "Scalable fulfillment strategy for direct-to-consumer and retail distribution.",
    href: "/services/ecommerce"
  },
  {
    icon: Car,
    title: "Auto & Industrial Logistics",
    description: "Specialized transport solutions for automotive and industrial supply chains.",
    href: "/services/auto-industrial"
  },
  {
    icon: TrendingUp,
    title: "Fleet Scaling & Freight Advisory",
    description: "Strategic guidance for fleet expansion and semi-truck freight operations.",
    href: "/services/fleet-scaling"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Our Capabilities
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Enterprise Logistics Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            From consulting to execution, we architect and operate logistics systems 
            that scale with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
