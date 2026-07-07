import { Link } from "react-router-dom";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND, BILLING } from "@/config/brand";

const Refunds = () => (
  <LegalPageLayout
    title="Refund & Cancellation Policy"
    subtitle="How cancellations, credits, and refunds work for diagnostics and retainers."
  >
    <section>
      <h2>Overview</h2>
      <p>
        {BRAND.legalName} (&quot;{BRAND.name}&quot;) provides professional logistics
        consulting services. Because our work is time-based and capacity-reserved,
        fees are handled as described below. This policy supplements our{" "}
        <Link to="/terms">Terms of Service</Link> and any signed engagement letter,
        which control in the event of a conflict.
      </p>
    </section>

    <section>
      <h2>Logistics Intelligence Diagnostic ($1,950)</h2>
      <ul>
        <li>
          You may cancel and receive a full refund if you cancel in writing at least
          48 hours before your scheduled audit kickoff and no substantive work has
          begun.
        </li>
        <li>
          Once intake materials are reviewed or interviews are scheduled, the
          diagnostic fee becomes non-refundable.
        </li>
        <li>
          If you start an eligible retainer within {BILLING.diagnosticCreditDays} days
          of diagnostic completion, the diagnostic fee is credited toward that
          retainer as stated on our pricing page.
        </li>
      </ul>
    </section>

    <section>
      <h2>Monthly retainers (Optimize & Scale)</h2>
      <ul>
        <li>
          Subscriptions are billed monthly through Stripe until canceled. By
          subscribing, you authorize recurring charges according to the plan selected
          at checkout.
        </li>
        <li>
          <strong className="text-foreground">Optimize</strong> includes a{" "}
          {BILLING.optimizeMinimumMonths}-month minimum commitment. Early cancellation
          requests before the minimum term may be subject to the remaining minimum
          period unless waived in writing by {BRAND.name}.
        </li>
        <li>
          Cancellation requests must be sent to{" "}
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. When processed,
          access to advisory services ends at the close of the current paid billing
          period unless your engagement letter specifies otherwise.
        </li>
        <li>
          Fees for months in which deliverables were actively provided are generally
          non-refundable.
        </li>
      </ul>
    </section>

    <section>
      <h2>Project-based add-ons</h2>
      <p>
        Scoped projects (assessments, RFP support, hourly consulting) are quoted in
        writing before work begins. Deposits and milestone payments are non-refundable
        once the related milestone work has started.
      </p>
    </section>

    <section>
      <h2>Chargebacks & disputes</h2>
      <p>
        If you believe a charge is incorrect, contact us first at{" "}
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> so we can resolve the
        issue promptly. Initiating a chargeback without contacting us may delay service
        and affect future engagements.
      </p>
    </section>

    <section>
      <h2>How to request a cancellation or refund review</h2>
      <p>
        Email <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> with your company
        name, the email used at checkout, plan purchased, and reason for the request.
        We will confirm receipt within {BILLING.supportResponseHours} business hours.
      </p>
    </section>
  </LegalPageLayout>
);

export default Refunds;
