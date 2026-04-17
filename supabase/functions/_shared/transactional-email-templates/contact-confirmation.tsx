import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'LAAAN Group'

interface ContactConfirmationProps {
  name?: string
  inquiryType?: string
}

const ContactConfirmationEmail = ({
  name,
  inquiryType,
}: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      {SITE_NAME} received your inquiry — our team will respond within 24 hours.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}>
          <Text style={brandText}>LAAAN GROUP</Text>
          <Text style={brandTagline}>Logistics Architects</Text>
        </Section>

        <Section style={content}>
          <Heading style={h1}>
            {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
          </Heading>
          <Text style={text}>
            We&apos;ve received your inquiry
            {inquiryType ? ` regarding ${inquiryType.toLowerCase()}` : ''} and a
            member of our team will respond within one business day.
          </Text>
          <Text style={text}>
            For urgent operational matters, our team is reachable directly at{' '}
            <a href="tel:+18722338382" style={link}>
              (872) 233-8382
            </a>
            .
          </Text>

          <Hr style={hr} />

          <Text style={subtle}>
            LAAAN Group, Inc.
            <br />
            180 North Stetson Avenue, Suite 3500
            <br />
            Chicago, IL 60601
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We received your inquiry — LAAAN Group',
  displayName: 'Contact form confirmation',
  previewData: { name: 'Jane Smith', inquiryType: 'Logistics Consulting' },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
}
const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '0',
}
const brandBar: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  padding: '28px 32px',
  textAlign: 'left' as const,
}
const brandText: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '0.18em',
  margin: 0,
}
const brandTagline: React.CSSProperties = {
  color: '#9ca3af',
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  margin: '4px 0 0',
}
const content: React.CSSProperties = {
  padding: '36px 32px 32px',
}
const h1: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 600,
  color: '#0a0a0a',
  margin: '0 0 18px',
  lineHeight: 1.3,
}
const text: React.CSSProperties = {
  fontSize: '15px',
  color: '#3f3f46',
  lineHeight: 1.65,
  margin: '0 0 16px',
}
const link: React.CSSProperties = {
  color: '#0a0a0a',
  textDecoration: 'underline',
  fontWeight: 500,
}
const hr: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '28px 0 20px',
}
const subtle: React.CSSProperties = {
  fontSize: '12px',
  color: '#71717a',
  lineHeight: 1.6,
  margin: 0,
}
