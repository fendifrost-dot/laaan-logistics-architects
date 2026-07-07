import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";

type LegalPageLayoutProps = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated = "July 7, 2026",
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {BRAND.legalName}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
          )}
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: {lastUpdated}
          </p>
          <div className="space-y-8 text-muted-foreground leading-relaxed [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:hover:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
