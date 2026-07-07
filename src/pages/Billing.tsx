import { Link } from "react-router-dom";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND, BILLING } from "@/config/brand";
import { STRIPE_PAYMENT_LINKS } from "@/config/stripe";

const faqs = [
  {
    q: "What happens after I pay for the Logistics Intelligence Diagnostic?",
    a: `You receive a confirmation email and our team schedules your audit intake within ${BILLING.supportResponseHours} business hours. Deliverables include a findings report and a 60-minute review call.`,
  },
  {
    q: "How does the diagnostic credit work?",
    a: `If you start an eligible Optimize or Scale retainer within ${BILLING.diagnosticCreditDays} days of completing your diagnostic, the $1,950 diagnostic fee is credited toward your engagement as stated on the pricing page.`,
  },
  {
    q: "What is the Optimize 3-month minimum?",
    a: `The Optimize retainer is designed as a quarterly engagement. When you subscribe, you authorize recurring monthly billing for at least ${BILLING.optimizeMinimumMonths} months unless otherwise agreed in writing.`,
  },
  {
    q: "How do I cancel a subscription?",
    a: "Email us at info@laaanconsulting.com with your account email and company name. For subscriptions billed through Stripe, cancellation takes effect at the end of the current billing period unless your signed engagement letter states otherwise.",
  },
  {
    q: "Can I upgrade from Optimize to Scale?",
    a: "Yes. Contact our team before changing plans so we can align scope, billing, and onboarding. We will help you move to the right tier without disrupting active work.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Stripe checkout supports major cards, US bank account (ACH), and select wallets where enabled. All payments are processed securely by Stripe; we do not store full card numbers on our servers.",
  },
  {
    q: "Do you offer refunds?",
    a: "Diagnostic and retainer fees are generally non-refundable once work has begun. See our Refund & Cancellation Policy for full details.",
  },
  {
    q: "How are project add-ons billed?",
    a: "Add-ons such as route analysis or RFP support are scoped and quoted separately. Use the contact form or call us to receive a written quote before work begins.",
  },
];

const Billing = () => (
  <LegalPageLayout
    title="Billing & FAQ"
    subtitle="Clear answers on packages, payments, subscriptions, and what to expect after checkout."
  >
    <section>
      <h2>Package summary</h2>
      <ul>
        <li>
          <strong className="text-foreground">Logistics Intelligence Diagnostic</strong> — $1,950
          one-time.{" "}
          <a href={STRIPE_PAYMENT_LINKS.diagnostic} target="_blank" rel="noopener noreferrer">
            Pay via Stripe
          </a>
        </li>
        <li>
          <strong className="text-foreground">Optimize retainer</strong> — $2,500/month (
          {BILLING.optimizeMinimumMonths}-month minimum).{" "}
          <a href={STRIPE_PAYMENT_LINKS.optimize} target="_blank" rel="noopener noreferrer">
            Subscribe via Stripe
          </a>
        </li>
        <li>
          <strong className="text-foreground">Scale retainer</strong> — $6,000/month.{" "}
          <a href={STRIPE_PAYMENT_LINKS.scale} target="_blank" rel="noopener noreferrer">
            Subscribe via Stripe
          </a>
        </li>
        <li>
          <strong className="text-foreground">Dominate</strong> — custom enterprise engagement.
          <Link to="/contact"> Contact us</Link> for scoping and a signed proposal.
        </li>
      </ul>
    </section>

    <section>
      <h2>Frequently asked questions</h2>
      {faqs.map((item) => (
        <div key={item.q}>
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </section>

    <section>
      <h2>Support & billing contact</h2>
      <p>
        Questions before or after checkout? Reach {BRAND.name} at{" "}
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or{" "}
        <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>. We respond to billing
        inquiries within {BILLING.supportResponseHours} business hours.
      </p>
      <p>
        For legal terms, see our <Link to="/terms">Terms of Service</Link> and{" "}
        <Link to="/refunds">Refund & Cancellation Policy</Link>.
      </p>
    </section>
  </LegalPageLayout>
);

export default Billing;
