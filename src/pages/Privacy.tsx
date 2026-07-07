import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl prose prose-invert">
        <h1 className="font-heading text-4xl text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground leading-relaxed mb-4">
          LAAAN Group respects your privacy. Information submitted through our
          website contact forms is used to respond to inquiries and provide
          logistics consulting services. We do not sell personal information to
          third parties.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Payment processing for packages and diagnostics is handled securely by
          Stripe. We do not store full payment card details on our servers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For privacy-related questions, contact{" "}
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

export default Privacy;
