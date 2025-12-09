import { 
  ShoppingBag, 
  HeartPulse, 
  Car, 
  Factory, 
  Store, 
  Warehouse 
} from "lucide-react";

const markets = [
  {
    icon: ShoppingBag,
    name: "E-commerce",
    description: "D2C brands, marketplaces, and omnichannel retailers"
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Medical",
    description: "Hospital systems, laboratories, and pharmaceutical distributors"
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Dealerships, parts distributors, and OEM suppliers"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Just-in-time delivery and production line support"
  },
  {
    icon: Store,
    name: "Retail",
    description: "Store replenishment and regional distribution"
  },
  {
    icon: Warehouse,
    name: "Industrial Suppliers",
    description: "B2B distribution and specialized equipment transport"
  }
];

export function MarketsSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Industries We Serve
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Markets We Operate In
          </h2>
          <p className="text-xl text-muted-foreground">
            Deep expertise across diverse verticals enables us to deliver 
            tailored solutions for complex logistics challenges.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {markets.map((market) => (
            <div
              key={market.name}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all text-center hover:shadow-elevated"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <market.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">
                {market.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
