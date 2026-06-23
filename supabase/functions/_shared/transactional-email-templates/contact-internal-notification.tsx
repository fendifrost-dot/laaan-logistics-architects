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

interface ContactInternalProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  inquiryType?: string
  message?: string
  submittedAt?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  ) : null

const ContactInternalEmail = ({
  name,
  email,
  phone,
  company,
  inquiryType,
  message,
  submittedAt,
}: ContactInternalProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact inquiry from {name || 'the website'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}>
          <Text style={brandText}>LAAAN GROUP — NEW INQUIRY</Text>
        </Section>

        <Section style={content}>
          <Heading style={h1}>New contact form submission</Heading>
          <Text style={textMuted}>
            Submitted{submittedAt ? ` on ${submittedAt}` : ''} via
            laaanconsulting.com
          </Text>

          <Hr style={hr} />

          <Row label="Inquiry Type" value={inquiryType} />
          <Row label="Name" value={name} />
          <Row label="Company" value={company} />
          <Row label="Email" value={email} />
          <Row label="Phone" value={phone} />

          {message ? (
            <Section style={messageBlock}>
              <Text style={rowLabel}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          ) : null}

          <Hr style={hr} />
          <Text style={subtle}>
            Reply directly to this email to respond to the sender.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactInternalEmail,
  subject: (data: Record<string, any>) =>
    `New inquiry: ${data?.inquiryType || 'General'} — ${data?.name || 'Website visitor'}`,
  displayName: 'Internal contact notification',
  previewData: {
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(312) 555-0142',
    company: 'Acme Logistics',
    inquiryType: 'Logistics Consulting',
    message:
      'Looking to optimize last-mile operations across three Midwest DCs. When can we schedule a discovery call?',
    submittedAt: 'April 17, 2026 at 3:42 PM CST',
  },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
}
const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
}
const brandBar: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  padding: '20px 32px',
}
const brandText: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: '0.2em',
  margin: 0,
}
const content: React.CSSProperties = {
  padding: '32px',
}
const h1: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 600,
  color: '#0a0a0a',
  margin: '0 0 6px',
}
const textMuted: React.CSSProperties = {
  fontSize: '13px',
  color: '#71717a',
  margin: 0,
}
const hr: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '20px 0',
}
const row: React.CSSProperties = {
  margin: '0 0 14px',
}
const rowLabel: React.CSSProperties = {
  fontSize: '11px',
  color: '#71717a',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '0 0 4px',
  fontWeight: 600,
}
const rowValue: React.CSSProperties = {
  fontSize: '15px',
  color: '#0a0a0a',
  margin: 0,
  lineHeight: 1.5,
}
const messageBlock: React.CSSProperties = {
  backgroundColor: '#f9fafb',
  padding: '16px 18px',
  borderRadius: '6px',
  margin: '8px 0 0',
}
const messageText: React.CSSProperties = {
  fontSize: '15px',
  color: '#27272a',
  margin: '6px 0 0',
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap' as const,
}
const subtle: React.CSSProperties = {
  fontSize: '12px',
  color: '#71717a',
  margin: 0,
}
