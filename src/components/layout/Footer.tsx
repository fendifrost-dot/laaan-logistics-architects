import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, ArrowUpRight } from "lucide-react";

const services = [
  { name: "Logistics Consulting", href: "/services/logistics-consulting" },
  { name: "Last-Mile Delivery", href: "/services/last-mile" },
  { name: "Medical Courier", href: "/services/medical-courier" },
  { name: "E-commerce Fulfillment", href: "/services/ecommerce" },
  { name: "Fleet Scaling", href: "/services/fleet-scaling" },
];

const company = [
  { name: "About Us", href: "/about" },
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
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="font-heading text-xl text-primary-foreground font-bold">L</span>
              </div>
              <span className="font-heading text-2xl text-foreground">LAAAN</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Enterprise logistics consulting and operations platform. 
              Architecting scalable supply chain solutions from the Midwest.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
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

          {/* Company */}
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

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  180 North Stetson Avenue<br />
                  Suite 3500<br />
                  Chicago, IL 60601
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+1-872-233-8382" className="hover:text-primary transition-colors">
                  (872) 233-8382
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@laaangroup.com" className="hover:text-primary transition-colors">
                  info@laaangroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LAAAN Group, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
