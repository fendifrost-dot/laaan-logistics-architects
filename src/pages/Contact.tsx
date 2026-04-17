import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const inquiryTypes = [
  { id: "consulting", label: "Logistics Consulting" },
  { id: "partnership", label: "Partnership Opportunity" },
  { id: "investor", label: "Investor/Lender Inquiry" },
  { id: "carrier", label: "Carrier Partnership" },
  { id: "careers", label: "Career Opportunities" },
  { id: "other", label: "General Inquiry" }
];

export default function Contact() {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const inquiryLabel =
      inquiryTypes.find((t) => t.id === selectedType)?.label ?? "General Inquiry";

    try {
      const id = crypto.randomUUID();

      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert({
          id,
          name,
          email,
          phone: phone || null,
          company: company || null,
          inquiry_type: inquiryLabel,
          message,
        });

      if (insertError) throw insertError;

      // Confirmation email to the sender
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name, inquiryType: inquiryLabel },
        },
      });

      // Internal notification to the LAAAN team
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-internal-notification",
          recipientEmail: "info@laaanconsulting.com",
          idempotencyKey: `contact-internal-${id}`,
          templateData: {
            name,
            email,
            phone,
            company,
            inquiryType: inquiryLabel,
            message,
            submittedAt: new Date().toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            }),
          },
        },
      });

      toast({
        title: "Message Sent",
        description:
          "Thank you for your inquiry. Our team will respond within 24 hours.",
      });

      form.reset();
      setSelectedType("");
    } catch (err: any) {
      console.error("Contact form error:", err);
      toast({
        title: "Submission failed",
        description:
          err?.message ??
          "We couldn't send your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  Contact Us
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
                Let's Build Your
                <span className="block text-gradient">Logistics Solution</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Whether you're exploring consulting options, investment opportunities, 
                or strategic partnerships, we're ready to connect.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-6">
                    Headquarters
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Address</p>
                        <p className="text-muted-foreground text-sm">
                          180 North Stetson Avenue<br />
                          Suite 3500<br />
                          Chicago, IL 60601
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Phone</p>
                        <a href="tel:+1-872-233-8382" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          (872) 233-8382
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Email</p>
                        <a href="mailto:info@laaangroup.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          info@laaangroup.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Business Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Mon-Fri: 7:00 AM - 7:00 PM CST<br />
                          Operations: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <p className="text-foreground font-medium">Quick Response</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our team responds to all inquiries within 24 business hours. 
                    For urgent operational matters, call our operations line directly.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="p-8 rounded-2xl bg-background border border-border">
                  <h2 className="font-heading text-2xl text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Inquiry Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelectedType(type.id)}
                            className={`p-3 rounded-lg border text-sm transition-all ${
                              selectedType === type.id
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border text-muted-foreground hover:border-primary/50'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Company */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="bg-card"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Corporation"
                          className="bg-card"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="bg-card"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(872) 233-8382"
                          className="bg-card"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your logistics challenges or how we can help..."
                        className="bg-card resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
