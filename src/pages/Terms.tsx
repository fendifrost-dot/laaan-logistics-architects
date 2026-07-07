import { Link } from "react-router-dom";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BRAND, BILLING } from "@/config/brand";

const Terms = () => (
  <LegalPageLayout
    title="Terms of Service"
    subtitle="Terms governing use of our website and purchase of consulting services."
  >
    <section>
      <h2>Agreement</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) are a legal agreement between you and{" "}
        {BRAND.legalName} (&quot;{BRAND.name},&quot; &quot;we,&quot; &quot;us&quot;)
        for use of <a href={BRAND.siteUrl}>{BRAND.domain}</a> and purchase of our
        consulting services. By using the site or completing checkout, you agree to these
        Terms.
      </p>
      <p>
        If you sign a separate engagement letter, statement of work, or master services
        agreement, that document controls for the specific engagement where it conflicts
        with these Terms.
      </p>
    </section>

    <section>
      <h2>Services</h2>
      <p>
        {BRAND.name} provides logistics consulting, advisory, and related professional
        services as described on our pricing and services pages. Deliverables, timelines,
        and scope depend on the package or custom agreement you select.
      </p>
      <ul>
        <li>
          <strong className="text-foreground">Diagnostic</strong> — fixed-scope audit and
          findings review
        </li>
        <li>
          <strong className="text-foreground">Optimize / Scale retainers</strong> — ongoing
          advisory and defined deliverables per tier
        </li>
        <li>
          <strong className="text-foreground">Dominate & add-ons</strong> — custom-scoped
          engagements per written quote
        </li>
      </ul>
    </section>

    <section>
      <h2>Purchases & billing</h2>
      <p>
        Online purchases are processed through Stripe. You authorize us and Stripe to
        charge your selected payment method for one-time or recurring fees displayed at
        checkout. Subscription renewals continue until canceled as described in our{" "}
        <Link to="/refunds">Refund & Cancellation Policy</Link>.
      </p>
      <p>
        The Optimize plan includes a {BILLING.optimizeMinimumMonths}-month minimum term
        unless otherwise stated in writing. Diagnostic fees may be credited toward
        eligible retainers started within {BILLING.diagnosticCreditDays} days, as stated on
        the pricing page.
      </p>
      <p>
        See <Link to="/billing">Billing & FAQ</Link> for package details and common
        questions.
      </p>
    </section>

    <section>
      <h2>Client responsibilities</h2>
      <ul>
        <li>Provide accurate information and timely access to data needed for our work</li>
        <li>Designate a primary point of contact for engagements</li>
        <li>Review deliverables and raise questions within agreed review windows</li>
        <li>Use our advice and materials only for your internal business purposes unless otherwise agreed</li>
      </ul>
    </section>

    <section>
      <h2>Professional advice disclaimer</h2>
      <p>
        Our services are professional consulting. Results depend on your operations,
        carriers, markets, and implementation. We do not guarantee specific cost savings,
        revenue outcomes, or operational results unless expressly stated in a signed
        agreement.
      </p>
      <p>
        Website metrics, case examples, and marketing statements are illustrative. Past
        client outcomes do not guarantee future results.
      </p>
    </section>

    <section>
      <h2>Intellectual property</h2>
      <p>
        We retain ownership of our methodologies, templates, tools, and pre-existing
        materials. Upon full payment, you receive a license to use deliverables created
        specifically for your engagement for your internal business purposes, unless a
        signed agreement states otherwise.
      </p>
    </section>

    <section>
      <h2>Confidentiality</h2>
      <p>
        Each party agrees to protect the other&apos;s confidential business information
        shared during an engagement and to use it only to perform or receive services.
        Additional confidentiality terms may be included in a signed NDA or engagement
        letter.
      </p>
    </section>

    <section>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {BRAND.name} is not liable for indirect,
        incidental, special, consequential, or punitive damages. Our total liability for
        any claim arising from services purchased through the site is limited to the fees
        you paid to us for the specific engagement giving rise to the claim during the
        twelve (12) months before the claim.
      </p>
    </section>

    <section>
      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {BRAND.name} from claims arising from
        your misuse of the site, violation of these Terms, or infringement arising from
        materials you provide to us.
      </p>
    </section>

    <section>
      <h2>Third-party services</h2>
      <p>
        Our site links to third-party services such as Stripe. Your use of those services
        is subject to their terms and privacy policies. We are not responsible for
        third-party platforms outside our control.
      </p>
    </section>

    <section>
      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Illinois, without regard to
        conflict-of-law principles. Disputes shall be brought in courts located in Cook
        County, Illinois, unless otherwise required by applicable law.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        {BRAND.legalName}
        <br />
        {BRAND.address.formatted}
        <br />
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> ·{" "}
        <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a>
      </p>
      <p>
        <Link to="/privacy">Privacy Policy</Link> ·{" "}
        <Link to="/refunds">Refund & Cancellation Policy</Link>
      </p>
    </section>
  </LegalPageLayout>
);

export default Terms;
