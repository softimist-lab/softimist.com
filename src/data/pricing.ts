import type { PricingPlan, PricingRegion, QuotedProduct } from '#/types'

export const EDUSHADE_REGISTER_URL = 'https://www.edushade.com/register'

/** Placeholder in plan highlights, replaced with the region's payment methods. */
export const PAYMENT_METHODS = '{paymentMethods}'

/** Plan structure mirrors edushade.com/api/v1/public/saas-billing/plans. Prices live on each region. */
export const edushadePlans: PricingPlan[] = [
  {
    id: 'spark',
    name: 'Spark',
    audience: 'Up to 10,000 students',
    description: 'Every core feature unlimited, 0% commission — up to 10,000 students.',
    trialDays: 14,
    highlights: [
      'Every core feature, unlimited',
      PAYMENT_METHODS,
      '0% commission and transaction fees',
      'Student mobile app',
      'Email support',
    ],
  },
  {
    id: 'grow',
    name: 'Grow',
    audience: 'Up to 20,000 students',
    description: 'Everything in Spark plus your own branded app — up to 20,000 students.',
    trialDays: 14,
    badge: 'Most Popular',
    highlights: [
      'Everything in Spark',
      'Your own branded mobile app',
      'AI tutor integration',
      'Migration assistance',
      '24/7 priority support',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    audience: 'Up to 30,000 students',
    description: 'Everything in Grow plus full white-label — up to 30,000 students.',
    trialDays: 14,
    highlights: [
      'Everything in Grow',
      'Full white-label',
      'Advanced analytics and audit logs',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'More than 30,000 students',
    description: 'Everything in Scale, sized beyond 30,000 students with SSO and a dedicated environment.',
    trialDays: 0,
    quoted: true,
    highlights: [
      'Everything in Scale',
      'Capacity sized to your institution',
      'Single Sign-On (SSO) & SAML',
      'Dedicated infrastructure',
      'Onboarding, migration & SLA',
    ],
  },
]

/**
 * Monthly prices per region, in whole units of the local currency.
 * Non-BD regions are anchored to USD 49 / 129 / 199 and rounded to local price points.
 * `planPrefix` builds the Edushade plan slug, e.g. `bd` + `spark` → `bd-spark`.
 */
export const pricingRegions: PricingRegion[] = [
  {
    code: 'BD',
    name: 'Bangladesh',
    currency: 'BDT',
    symbol: '৳',
    planPrefix: 'bd',
    prices: { spark: 5000, grow: 12500, scale: 20000 },
    paymentMethods: 'bKash · Nagad · Rocket · Card · SSLCommerz',
  },
  {
    code: 'SG',
    name: 'Singapore',
    currency: 'SGD',
    symbol: 'S$',
    planPrefix: 'sg',
    prices: { spark: 65, grow: 169, scale: 259 },
    paymentMethods: 'PayNow · Cards · GrabPay',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    currency: 'MYR',
    symbol: 'RM',
    planPrefix: 'my',
    prices: { spark: 219, grow: 569, scale: 879 },
    paymentMethods: 'FPX · DuitNow · Touch ’n Go · Cards',
  },
  {
    code: 'TH',
    name: 'Thailand',
    currency: 'THB',
    symbol: '฿',
    planPrefix: 'th',
    prices: { spark: 1690, grow: 4490, scale: 6890 },
    paymentMethods: 'PromptPay · TrueMoney · Cards',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    currency: 'VND',
    symbol: '₫',
    symbolAfter: true,
    planPrefix: 'vn',
    prices: { spark: 1190000, grow: 3190000, scale: 4890000 },
    paymentMethods: 'VietQR · MoMo · ZaloPay · Cards',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    currency: 'IDR',
    symbol: 'Rp',
    planPrefix: 'id',
    prices: { spark: 790000, grow: 2090000, scale: 3190000 },
    paymentMethods: 'QRIS · Virtual Accounts · OVO · DANA · Cards',
  },
  {
    code: 'PH',
    name: 'Philippines',
    currency: 'PHP',
    symbol: '₱',
    planPrefix: 'ph',
    prices: { spark: 2790, grow: 7390, scale: 11390 },
    paymentMethods: 'GCash · Maya · QR Ph · Cards',
  },
  {
    code: 'INTL',
    name: 'Other countries',
    currency: 'USD',
    symbol: 'US$',
    planPrefix: 'intl',
    prices: { spark: 49, grow: 129, scale: 199 },
    paymentMethods: 'Cards · PayPal · Stripe',
  },
]

export const DEFAULT_REGION_CODE = 'INTL'

export function resolveRegion(country: string | undefined): PricingRegion {
  const code = country?.toUpperCase()
  return (
    pricingRegions.find((region) => region.code === code) ??
    pricingRegions.find((region) => region.code === DEFAULT_REGION_CODE)!
  )
}

export function planPrice(plan: PricingPlan, region: PricingRegion): number | null {
  return plan.quoted ? null : region.prices[plan.id] ?? null
}

export function planSlug(plan: PricingPlan, region: PricingRegion) {
  return `${region.planPrefix}-${plan.id}`
}

export function planHighlights(plan: PricingPlan, region: PricingRegion) {
  return plan.highlights.map((item) => (item === PAYMENT_METHODS ? region.paymentMethods : item))
}

export function formatPrice(amount: number, region: PricingRegion) {
  const value = amount.toLocaleString('en-US')
  return region.symbolAfter ? `${value}${region.symbol}` : `${region.symbol}${value}`
}

export function findPlan(id: string | undefined) {
  return edushadePlans.find((plan) => plan.id === id && !plan.quoted)
}

export const quotedProducts: QuotedProduct[] = [
  {
    name: 'Playmist',
    description: 'White-label OTT streaming platform with DRM, live TV, VOD, and native apps for every screen.',
    pricing: 'Licence + monthly platform fee, quoted per deployment',
    includes: ['Web, iOS, Android & TV apps', 'Widevine & FairPlay DRM', 'SVOD, TVOD & AVOD monetization', 'Managed hosting & CDN'],
  },
  {
    name: 'Playmist Aggregator',
    description: 'Content ingestion, curation, rights management, and multi-platform distribution.',
    pricing: 'Monthly platform fee, quoted by catalogue size and providers',
    includes: ['Multi-source ingestion', 'Rights & geo-restriction management', 'REST & GraphQL APIs', 'Managed hosting'],
  },
  {
    name: 'Custom Development',
    description: 'Bespoke platforms, integrations, and AI features built by our engineering team.',
    pricing: 'Fixed-price milestones per statement of work',
    includes: ['Discovery & architecture', 'Milestone-based delivery', 'Source code handover', 'Post-launch support'],
  },
]
