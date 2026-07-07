/** Single source of truth for public-facing brand and support details. */
export const BRAND = {
  name: "LAAAN Group",
  legalName: "LAAAN GROUP LLC",
  domain: "laaanconsulting.com",
  siteUrl: "https://laaanconsulting.com",
  email: "info@laaanconsulting.com",
  phone: "(872) 233-8382",
  phoneTel: "+1-872-233-8382",
  address: {
    line1: "4025 S. Western Blvd #108",
    city: "Chicago",
    state: "IL",
    zip: "60609",
    country: "US",
    formatted: "4025 S. Western Blvd #108, Chicago, IL 60609",
  },
  hours: "Mon–Fri: 7:00 AM – 7:00 PM CST",
  operations: "Operations support: 24/7",
  /** Add company LinkedIn URL here when available; footer hides the icon until set. */
  linkedinUrl: null as string | null,
} as const;

export const BILLING = {
  diagnosticCreditDays: 30,
  optimizeMinimumMonths: 3,
  supportResponseHours: 24,
} as const;
