import { Link } from "react-router-dom";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND } from "@/config/brand";

const Privacy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    subtitle="How we collect, use, and protect information when you visit our site or engage our services."
  >
    <section>
      <h2>Who we are</h2>
      <p>
        {BRAND.legalName} (&quot;{BRAND.name},&quot; &quot;we,&quot; &quot;us&quot;) operates{" "}
        <a href={BRAND.siteUrl}>{BRAND.domain}</a>. Our headquarters is located at{" "}
        {BRAND.address.formatted}.
      </p>
      <p>
        Privacy questions: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> ·{" "}
        <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
      </p>
    </section>

    <section>
      <h2>Information we collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>Contact form submissions (name, email, phone, company, message, inquiry type)</li>
        <li>Communications you send us by email or phone</li>
        <li>Billing contact details provided during Stripe checkout (processed by Stripe)</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Device and browser type, pages visited, and referring URLs</li>
        <li>IP address and general location (city/region level)</li>
        <li>Cookies and similar technologies used for site functionality and analytics</li>
      </ul>
    </section>

    <section>
      <h2>How we use information</h2>
      <ul>
        <li>Respond to inquiries and deliver consulting services you request</li>
        <li>Process payments and manage subscriptions through Stripe</li>
        <li>Send transactional emails (confirmations, service updates, billing notices)</li>
        <li>Improve our website, services, and client experience</li>
        <li>Comply with legal obligations and protect against fraud or abuse</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>
    </section>

    <section>
      <h2>Payment processing (Stripe)</h2>
      <p>
        Payments are processed by Stripe, Inc. When you checkout, Stripe collects payment
        and billing information according to{" "}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
          Stripe&apos;s Privacy Policy
        </a>
        . We do not store full payment card numbers on our servers. We receive limited
        transaction data from Stripe (such as payment status, customer email, and amount)
        to fulfill your engagement.
      </p>
    </section>

    <section>
      <h2>Service providers</h2>
      <p>We use trusted providers to operate our business, including:</p>
      <ul>
        <li>Stripe — payment processing</li>
        <li>Supabase — form data storage and transactional email delivery</li>
        <li>Hosting and infrastructure providers for website delivery</li>
      </ul>
      <p>
        These providers process data only as needed to perform services on our behalf and
        are contractually required to protect it.
      </p>
    </section>

    <section>
      <h2>Email communications & unsubscribe</h2>
      <p>
        We may send service-related and marketing communications where permitted. You may
        unsubscribe from non-essential emails using the link in any message or via our{" "}
        <Link to="/unsubscribe">unsubscribe page</Link>.
      </p>
    </section>

    <section>
      <h2>Data retention</h2>
      <p>
        We retain contact and engagement records as long as needed to provide services,
        meet legal requirements, and resolve disputes. You may request deletion of
        personal data that is not required to be retained by law or active contracts.
      </p>
    </section>

    <section>
      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or
        restrict processing of your personal information. To exercise these rights, contact{" "}
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
      </p>
    </section>

    <section>
      <h2>Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational safeguards to
        protect personal information. No method of transmission over the internet is 100%
        secure.
      </p>
    </section>

    <section>
      <h2>Children&apos;s privacy</h2>
      <p>
        Our services are directed to businesses and are not intended for individuals
        under 18. We do not knowingly collect information from children.
      </p>
    </section>

    <section>
      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be
        posted on this page with an updated &quot;Last updated&quot; date.
      </p>
    </section>

    <section>
      <h2>Related policies</h2>
      <p>
        <Link to="/terms">Terms of Service</Link> ·{" "}
        <Link to="/refunds">Refund & Cancellation Policy</Link> ·{" "}
        <Link to="/billing">Billing & FAQ</Link>
      </p>
    </section>
  </LegalPageLayout>
);

export default Privacy;
