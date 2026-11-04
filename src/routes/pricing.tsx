import { createFileRoute, Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { cn } from '#/lib/utils'
import { pricingMarkets, quotedProducts, formatPrice } from '#/data/pricing'
import type { PricingMarket } from '#/types'
import { btnPrimaryClass, btnSecondaryClass, cardClass, kickerClass, displayTitleClass, gradientTextClass, sectionGradientMutedClass } from '#/lib/styles'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing | Softimist Limited' },
      { name: 'description', content: 'Plans and pricing for Edushade, Playmist, Playmist Aggregator, and custom development from Softimist Limited.' },
    ],
  }),
  component: PricingPage,
})

const MARKET_COPY = {
  BD: { title: 'Pricing in BDT', note: 'For customers in Bangladesh. Prices in Bangladeshi Taka (BDT), billed monthly.' },
  GLOBAL: { title: 'Pricing in USD', note: 'For customers outside Bangladesh. Prices in US Dollars (USD), billed monthly or yearly.' },
}

/** Every visitor sees both price lists. */
function MarketPlans({ market }: { market: PricingMarket }) {
  return (
    <div>
      <div className="mb-10 text-center">
        <h2 className={cn(displayTitleClass, 'mb-2 text-2xl font-bold text-(--ink) sm:text-3xl')}>Edushade LMS: {MARKET_COPY[market.code].title}</h2>
        <p className="text-sm text-(--ink-soft)">
          {MARKET_COPY[market.code].note} Applicable taxes may be added at payment.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {market.plans.map((plan) => {
              const price = plan.monthlyPrice
              return (
              <div
                key={plan.id}
                className={cardClass(cn('relative flex flex-col p-6', plan.badge && 'border-(--color-primary)! ring-1 ring-(--color-primary)'))}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-(--color-primary) px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                )}
                <h3 className={cn(displayTitleClass, 'mb-1 text-xl font-bold text-(--ink)')}>{plan.name}</h3>
                <p className="mb-4 text-sm text-(--ink-muted)">{plan.audience}</p>
                <div className="mb-4">
                  {price !== null ? (
                    <>
                      <span className={cn(displayTitleClass, 'text-3xl font-extrabold text-(--ink)')}>
                        {formatPrice(price, market)}
                      </span>
                      <span className="text-sm text-(--ink-muted)"> / month</span>
                      {plan.annualPrice !== null && (
                        <div className="mt-1 text-xs text-(--ink-muted)">or {formatPrice(plan.annualPrice, market)} billed yearly</div>
                      )}
                    </>
                  ) : (
                    <span className={cn(displayTitleClass, 'text-3xl font-extrabold text-(--ink)')}>Custom</span>
                  )}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-(--ink-soft)">{plan.description}</p>
                <ul className="m-0 mb-6 flex-1 list-none space-y-2.5 p-0">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-(--ink-soft)">
                      <Check size={14} strokeWidth={2.5} className="mt-1 shrink-0 text-(--color-primary)" />
                      {item}
                    </li>
                  ))}
                </ul>
                {price !== null ? (
                  <Link
                    to="/checkout"
                    search={{ plan: plan.id, market: market.code }}
                    className={plan.badge ? btnPrimaryClass('w-full justify-center') : btnSecondaryClass('w-full justify-center')}
                  >
                    Buy {plan.name}
                  </Link>
                ) : (
                  <Link to="/contact" className={btnSecondaryClass('w-full justify-center')}>
                    Contact Sales
                  </Link>
                )}
              </div>
              )
            })}
      </div>
    </div>
  )
}

function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(59,130,246,0.04),transparent)] pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Pricing</span>
            <h1 className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')} style={{ animationDelay: '80ms' }}>
              Simple, <span className={gradientTextClass('orange')}>Transparent Pricing</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              Start Edushade Spark, Grow or Scale with a 14-day free trial. No commission on your sales, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Edushade plans */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] space-y-20 px-4">
          <MarketPlans market={pricingMarkets.BD} />
          <MarketPlans market={pricingMarkets.GLOBAL} />
        </div>
      </section>

      {/* Quoted products */}
      <section className={cn(sectionGradientMutedClass, 'py-20 sm:py-28')}>
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>Streaming Platforms & Custom Work</h2>
            <p className="text-(--ink-soft)">
              These are sized to each deployment. Tell us what you need and we'll send a fixed quotation and order form.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {quotedProducts.map((product) => (
              <div key={product.name} className={cardClass('flex flex-col p-6')}>
                <h3 className={cn(displayTitleClass, 'mb-2 text-xl font-bold text-(--ink)')}>{product.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-(--ink-soft)">{product.description}</p>
                <p className="mb-5 text-sm font-semibold text-(--ink)">{product.pricing}</p>
                <ul className="m-0 mb-6 flex-1 list-none space-y-2.5 p-0">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-(--ink-soft)">
                      <Check size={14} strokeWidth={2.5} className="mt-1 shrink-0 text-(--color-primary)" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={btnSecondaryClass('w-full justify-center')}>
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing notes */}
      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-(--ink-muted)">
            USD subscriptions renew automatically until cancelled. BDT plans are paid per invoice through a payment link, and nothing is charged automatically.{' '}
            See our{' '}
            <Link to="/refund-policy" className="text-(--color-primary) underline">Refund & Cancellation Policy</Link>,{' '}
            <Link to="/delivery-policy" className="text-(--color-primary) underline">Service Delivery Policy</Link>, and{' '}
            <Link to="/terms-of-service" className="text-(--color-primary) underline">Terms of Service</Link> for details.
          </p>
        </div>
      </section>
    </main>
  )
}
