/**
 * Live Stripe Payment Links for LAAAN Group packages.
 * Update here only — PricingSection and any CTAs should import from this file.
 *
 * Stripe Dashboard: rename products to match site language for checkout clarity:
 *   - "Logistics Intelligence Diagnostic" ($1,950 one-time)
 *   - "Optimize Retainer" ($2,500/mo)
 *   - "Scale Retainer" ($6,000/mo)
 */
export const STRIPE_PAYMENT_LINKS = {
  diagnostic: "https://buy.stripe.com/8x2cN47jO0GY06G7kyaIM00",
  optimize: "https://buy.stripe.com/7sY00i7jO4Xe7z834iaIM01",
  scale: "https://buy.stripe.com/6oUcN4cE8cpG8DcbAOaIM02",
  consultingCall: "https://buy.stripe.com/00w5kC9rW3Tag5EfR4aIM03",
} as const;
