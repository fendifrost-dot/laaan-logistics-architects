import { MapPin, Layers, BarChart3, Building2, Expand } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Midwest Logistics Hub Advantage",
    description: "Strategic positioning in America's transportation heartland provides optimal reach to major markets within 24 hours."
  },
  {
    icon: Layers,
    title: "Consulting + Execution Under One Roof",
    description: "Seamless integration of strategic advisory with operational excellence—we don't just plan, we deliver."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Operations",
    description: "Advanced analytics and real-time visibility power every decision, from route optimization to capacity planning."
  },
  {
    icon: Building2,
    title: "Capital-Ready Infrastructure",
    description: "Institutional-grade systems and processes designed for scale, transparency, and investor confidence."
  },
  {
    icon: Expand,
    title: "Scalable Fleet Expansion Model",
    description: "Modular growth strategy enabling rapid capacity increases while maintaining operational efficiency."
  }
];

export function WhySection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                The LAAAN Difference
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Built for Scale,<br />
              <span className="text-gradient">Designed for Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We combine deep logistics expertise with enterprise-grade infrastructure, 
              positioning LAAAN as the preferred partner for organizations demanding 
              reliability, scalability, and results.
            </p>

            {/* Key Metric */}
            <div className="p-6 rounded-2xl bg-gradient-card border border-border inline-block">
              <p className="text-4xl font-heading text-primary mb-2">$50M+</p>
              <p className="text-muted-foreground text-sm">Freight Volume Managed Annually</p>
            </div>
          </div>

          {/* Right - Advantages List */}
          <div className="space-y-6">
            {advantages.map((item, index) => (
              <div 
                key={item.title}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
