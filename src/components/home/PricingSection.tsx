import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const STRIPE_DIAGNOSTIC_URL = "https://buy.stripe.com/14kdRdaTNbK382AcMM";
const STRIPE_OPTIMIZE_URL = "https://buy.stripe.com/28odRdaTNbK30A8001";
const STRIPE_SCALE_URL = "https://buy.stripe.com/fZe3cD3vlbK33Mkg02";

const tiers = [
  {
    name: "Optimize",
    price: "$2,500",
    cadence: "/ month",
    note: "3-month minimum",
    tagline: "Ongoing expert guidance and cost control.",
    features: [
      "Monthly logistics & cost review",
      "Carrier rate benchmarking",
      "Route spot-checks",
      "Async advisory access",
      "Monthly KPI snapshot",
    ],
    cta: "Get Started",
    href: STRIPE_OPTIMIZE_URL,
    external: true,
    badge: null as string | null,
    featured: false,
  },
  {
    name: "Scale",
    price: "$6,000",
    cadence: "/ month",
    note: null,
    tagline: "Engineer and scale your delivery network.",
    features: [
      "Everything in Optimize, plus:",
      "Route engineering & network design",
      "Fulfillment strategy",
      "Carrier sourcing & RFP management",
      "Implementation support",
      "Bi-weekly working sessions",
      "Live KPI dashboard",
    ],
    cta: "Scale Now",
    href: STRIPE_SCALE_URL,
    external: true,
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Dominate",
    price: "$12,000",
    cadence: "/ month",
    note: "or custom",
    tagline: "Consulting plus hands-on execution leadership.",
    features: [
      "Everything in Scale, plus:",
      "Dedicated logistics strategist",
      "Execution oversight across last-mile, freight & medical",
      "Custom analytics & reporting",
      "Fleet & capacity expansion planning",
      "Priority response",
      "Quarterly executive + lender-ready reporting",
    ],
    cta: "Talk to Us",
    href: "/contact",
    external: false,
    badge: "Enterprise",
    featured: false,
  },
];

const addons = [
  { name: "Supply Chain Assessment", price: "$2,500 / project" },
  { name: "Route Optimization Analysis", price: "$1,200" },
  { name: "Carrier Sourcing / RFP Management", price: "$1,500" },
  { name: "Logistics Consulting", price: "$175 / hour" },
  {
    name: "Last-mile, expedited freight & medical courier execution",
    price: "Custom quote",
  },
];

function CtaButton({
  href,
  external,
  featured,
  children,
}: {
  href: string;
  external: boolean;
  featured: boolean;
  children: React.ReactNode;
}) {
  const variant = featured ? "hero" : "outline";
  if (external) {
    return (
      <Button variant={variant} className="w-full" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    );
  }
  return (
    <Button variant={variant} className="w-full" asChild>
      <Link to={href}>{children}</Link>
    </Button>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-card relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Packages & Pricing
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Engagement Models
          </h2>
          <p className="text-xl text-muted-foreground">
            From a fixed-scope diagnostic to full execution leadership — choose how
            we work together.
          </p>
        </div>

        {/* Featured Diagnostic */}
        <div className="mb-10 rounded-2xl bg-gradient-card border border-primary/40 shadow-elevated p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium tracking-wide uppercase border border-primary/30">
              <Sparkles className="w-3.5 h-3.5" /> Start Here
            </span>
          </div>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <div>
              <h3 className="font-heading text-3xl text-foreground mb-3">
                Logistics Intelligence Diagnostic
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Find exactly where you're losing time and money.
              </p>
              <ul className="space-y-3">
                {[
                  "Full audit of carrier spend, routes, fulfillment flow, and delivery performance",
                  "Quantified savings report with prioritized roadmap",
                  "60-minute findings review call",
                  "Fee credited toward any retainer started within 30 days",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-border lg:pl-8">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                Investment
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-heading text-5xl text-foreground">$1,950</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">one-time</p>
              <CtaButton href={STRIPE_DIAGNOSTIC_URL} external featured>
                Book Diagnostic
              </CtaButton>
            </div>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border transition-all flex flex-col ${
                tier.featured
                  ? "bg-gradient-card border-primary shadow-glow"
                  : "bg-gradient-card border-border hover:border-primary/40"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase border ${
                      tier.featured
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-foreground border-border"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              <h3 className="font-heading text-2xl text-foreground mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 min-h-[2.5rem]">
                {tier.tagline}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {tier.cadence}
                  </span>
                </div>
                {tier.note && (
                  <p className="text-xs text-muted-foreground mt-1">{tier.note}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <CtaButton
                href={tier.href}
                external={tier.external}
                featured={tier.featured}
              >
                {tier.cta}
              </CtaButton>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 rounded-2xl bg-background/40 border border-border p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading text-2xl text-foreground mb-2">
                Project-based add-ons
              </h3>
              <p className="text-muted-foreground text-sm">
                Targeted engagements for specific challenges. Contact us to scope.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
          <ul className="divide-y divide-border">
            {addons.map((a) => (
              <li
                key={a.name}
                className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <span className="text-foreground">{a.name}</span>
                <span className="text-primary font-medium text-sm">{a.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
