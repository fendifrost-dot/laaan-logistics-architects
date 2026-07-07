import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/config/brand";

const services = [
  { name: "Logistics Consulting", href: "/services/logistics-consulting" },
  { name: "Last-Mile Delivery", href: "/services/last-mile" },
  { name: "Medical Courier", href: "/services/medical-courier" },
  { name: "E-commerce Fulfillment", href: "/services/ecommerce" },
  { name: "Fleet Scaling", href: "/services/fleet-scaling" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Markets", href: "/markets" },
  { name: "Investors", href: "/investors" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="font-heading text-xl text-primary-foreground font-bold">L</span>
              </div>
              <span className="font-heading text-2xl text-foreground">{BRAND.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Enterprise logistics consulting and operations. Architecting scalable
              supply chain solutions from the Midwest.
            </p>
            <p className="text-muted-foreground text-xs mb-6">
              {BRAND.legalName}
            </p>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              <span className="block text-foreground font-medium">{BRAND.name}</span>
              {BRAND.address.line1}
              <br />
              {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
              <br />
              <a href={`tel:${BRAND.phoneTel}`} className="hover:text-primary transition-colors">
                {BRAND.phone}
              </a>
            </address>
            {BRAND.linkedinUrl && (
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={BRAND.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label="LAAAN Group on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="block text-foreground font-medium">{BRAND.name}</span>
                  {BRAND.address.line1}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${BRAND.phoneTel}`} className="hover:text-primary transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-primary transition-colors">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/billing" className="hover:text-primary transition-colors">
              Billing & FAQ
            </Link>
            <Link to="/refunds" className="hover:text-primary transition-colors">
              Refunds
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
