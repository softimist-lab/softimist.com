import type { PricingMarket, PricingPlan, QuotedProduct } from '#/types'

export const EDUSHADE_REGISTER_URL = 'https://www.edushade.com/register'

/**
 * Mirrors Edushade's two catalogues (saas-billing-service, `plans` table). They
 * are separate offers rather than conversions of each other: Bangladesh is sized
 * by student capacity and paid per invoice, everywhere else is sold in USD by
 * feature set and renews on a stored card. Update here when the catalogue changes.
 */
export const pricingMarkets: Record<'BD' | 'GLOBAL', PricingMarket> = {
  BD: {
    code: 'BD',
    currency: 'BDT',
    billing: 'invoice_link',
    plans: [
      {
        id: 'spark',
        slug: 'bd-spark',
        name: 'Spark',
        audience: 'Up to 10,000 students',
        description: 'Every core feature unlimited, 0% commission — up to 10,000 students.',
        monthlyPrice: 5000,
        annualPrice: null,
        trialDays: 14,
        highlights: [
          'Every core feature, unlimited',
          'bKash · Nagad · Rocket · Card · SSLCommerz',
          '0% commission and transaction fees',
          'Student mobile app',
          'Email support',
        ],
      },
      {
        id: 'grow',
        slug: 'bd-grow',
        name: 'Grow',
        audience: 'Up to 20,000 students',
        description: 'Everything in Spark plus your own branded app — up to 20,000 students.',
        monthlyPrice: 12500,
        annualPrice: null,
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
        slug: 'bd-scale',
        name: 'Scale',
        audience: 'Up to 30,000 students',
        description: 'Everything in Grow plus full white-label — up to 30,000 students.',
        monthlyPrice: 20000,
        annualPrice: null,
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
        slug: 'bd-enterprise',
        name: 'Enterprise',
        audience: 'More than 30,000 students',
        description: 'Everything in Scale, sized beyond 30,000 students with SSO and a dedicated environment.',
        monthlyPrice: null,
        annualPrice: null,
        trialDays: 0,
        highlights: [
          'Everything in Scale',
          'Capacity sized to your institution',
          'Single Sign-On (SSO) & SAML',
          'Dedicated infrastructure',
          'Onboarding, migration & SLA',
        ],
      },
    ],
  },
  GLOBAL: {
    code: 'GLOBAL',
    currency: 'USD',
    billing: 'card_on_file',
    plans: [
      {
        id: 'spark',
        slug: 'spark',
        name: 'Spark',
        audience: 'Perfect for solo educators',
        description: 'Everything an independent creator needs to launch their first courses and programs.',
        monthlyPrice: 69,
        annualPrice: 660,
        trialDays: 14,
        highlights: [
          '1,000 active students',
          '5 courses · 10 digital products',
          '5 instructors · 1 admin',
          'Course certificates',
          'Unlimited forms & contacts',
          'No commission / transaction fee',
        ],
      },
      {
        id: 'grow',
        slug: 'grow',
        name: 'Grow',
        audience: 'For expanding academies',
        description: 'Built to scale programs, manage cohorts, and keep learning consistent.',
        monthlyPrice: 99,
        annualPrice: 948,
        trialDays: 14,
        badge: 'Most Popular',
        highlights: [
          '10,000 active students',
          '15 instructors · 5 admins',
          'Learning Paths & verifiable transcripts',
          'Open Badges & UGC / ECTS grading',
          'Branded mobile app',
          'Unlimited meetings / counselling',
          'Migration help & 24/7 live chat',
        ],
      },
      {
        id: 'scale',
        slug: 'scale',
        name: 'Scale',
        audience: 'For coaching centers',
        description: 'Advanced delivery, white-label web, and developer tools for academies.',
        monthlyPrice: 249,
        annualPrice: 2388,
        trialDays: 14,
        highlights: [
          '25,000 active students',
          'Unlimited courses & instructors',
          'Audit logs & webhooks',
          'CLR, xAPI & accreditation tools',
          'Remove Edushade branding · custom roles',
          'Priority support & migration',
        ],
      },
      {
        id: 'enterprise',
        slug: 'enterprise',
        name: 'Enterprise',
        audience: 'Built for institutional scale',
        description: 'Governance, compliance, and dedicated support for universities and large institutions.',
        monthlyPrice: null,
        annualPrice: null,
        trialDays: 0,
        highlights: [
          'Unlimited students, courses & staff',
          'Dedicated account manager',
          'White-glove migration & onboarding',
          'Single Sign-On & audit logs',
          'Custom AI credits & usage limits',
          'Custom integrations & SLA',
        ],
      },
    ],
  },
}

/** An unknown country gets the global catalogue, as it does on Edushade. */
export function marketForCountry(country: string | null | undefined): PricingMarket {
  return country?.toUpperCase() === 'BD' ? pricingMarkets.BD : pricingMarkets.GLOBAL
}

export function formatPrice(amount: number, market: PricingMarket) {
  return `${market.currency} ${amount.toLocaleString('en-US')}`
}

export function purchasablePlans(market: PricingMarket): PricingPlan[] {
  return market.plans.filter((plan) => plan.monthlyPrice !== null)
}

export function findPlan(market: PricingMarket, id: string | undefined) {
  return purchasablePlans(market).find((plan) => plan.id === id)
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
