import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl prose prose-invert">
        <h1 className="font-heading text-4xl text-foreground mb-6">Terms of Service</h1>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By using the LAAAN Group website and purchasing consulting packages,
          you agree to engage our services under the scope, pricing, and terms
          presented at checkout or in your signed engagement letter.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Consulting deliverables, retainers, and project-based add-ons are
          subject to the specific package descriptions on our pricing page.
          Diagnostic fees may be credited toward eligible retainers as stated
          on the site.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Questions about these terms? Email{" "}
          <a href="mailto:info@laaangroup.com" className="text-primary hover:underline">
            info@laaangroup.com
          </a>
          .
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
