import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Check, Lock } from 'lucide-react'
import { cn } from '#/lib/utils'
import { edushadePlans, findPlan, formatPrice, planHighlights, planPrice, planSlug, EDUSHADE_REGISTER_URL } from '#/data/pricing'
import { loadPricingRegion, validateCountrySearch } from '#/lib/region'
import RegionSwitcher from '#/components/RegionSwitcher'
import { legalContact } from '#/data/legal'
import { btnPrimaryClass, cardClass, kickerClass, displayTitleClass } from '#/lib/styles'

export const Route = createFileRoute('/checkout')({
  validateSearch: (search: Record<string, unknown>): { plan?: string; country?: string } => ({
    plan: typeof search.plan === 'string' ? search.plan : undefined,
    country: validateCountrySearch(search),
  }),
  loaderDeps: ({ search }) => ({ country: search.country }),
  loader: ({ deps }) => loadPricingRegion(deps.country),
  head: () => ({
    meta: [
      { title: 'Checkout | Softimist Limited' },
      { name: 'description', content: 'Review your Edushade plan and continue to secure payment.' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: CheckoutPage,
})

const purchasablePlans = edushadePlans.filter((plan) => !plan.quoted)

function CheckoutPage() {
  const { plan: planId } = Route.useSearch()
  const { region } = Route.useLoaderData()
  const plan = findPlan(planId) ?? purchasablePlans[1]
  const price = planPrice(plan, region) ?? 0
  const [agreed, setAgreed] = useState(false)

  const continueUrl = `${EDUSHADE_REGISTER_URL}?${new URLSearchParams({
    plan: planSlug(plan, region),
    country: region.code,
    currency: region.currency,
  })}`

  return (
    <main>
      <section className="pb-20 pt-16 sm:pt-24">
        <div className="mx-auto w-[min(1100px,calc(100%-2rem))] px-4">
          <span className={cn(kickerClass, 'mb-3 inline-block')}>Checkout</span>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h1 className={cn(displayTitleClass, 'm-0 text-3xl font-extrabold text-(--ink) sm:text-4xl')}>
              Review your order
            </h1>
            <RegionSwitcher region={region} />
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            {/* Plan selection + details */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-base font-semibold text-(--ink)">1. Choose your plan</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {purchasablePlans.map((option) => {
                    const selected = option.id === plan.id
                    return (
                      <Link
                        key={option.id}
                        to="/checkout"
                        search={{ plan: option.id, country: region.code }}
                        replace
                        className={cn(
                          'rounded-xl border p-4 transition-colors',
                          selected
                            ? 'border-(--color-primary) bg-(--bg-subtle) ring-1 ring-(--color-primary)'
                            : 'border-(--line) hover:border-(--line-strong)',
                        )}
                      >
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-semibold text-(--ink)">{option.name}</span>
                          {selected && <Check size={16} className="text-(--color-primary)" />}
                        </div>
                        <div className="text-sm text-(--ink-soft)">
                          {formatPrice(planPrice(option, region) ?? 0, region)} / month
                        </div>
                        <div className="text-xs text-(--ink-muted)">{option.audience}</div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-base font-semibold text-(--ink)">2. What's included in {plan.name}</h2>
                <ul className="m-0 grid list-none gap-2.5 p-0 sm:grid-cols-2">
                  {planHighlights(plan, region).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-(--ink-soft)">
                      <Check size={14} strokeWidth={2.5} className="mt-1 shrink-0 text-(--color-primary)" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-base font-semibold text-(--ink)">3. What happens next</h2>
                <ol className="m-0 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-(--ink-soft)">
                  <li>Create your Edushade account with your name, email, phone number, and academy name.</li>
                  <li>Your academy is set up instantly and your {plan.trialDays}-day free trial starts.</li>
                  <li>Add your payment method on the secure payment page. You are charged {formatPrice(price, region)} when the trial ends, then every month until you cancel.</li>
                  <li>An order confirmation and invoice are emailed to you after every payment.</li>
                </ol>
              </div>

              <div className="rounded-xl border border-(--line) bg-(--surface) p-5 text-sm leading-relaxed text-(--ink-soft)">
                <p className="mb-1 font-semibold text-(--ink)">Sold by {legalContact.company}</p>
                <p className="m-0">{legalContact.address}</p>
                <p className="m-0">
                  {legalContact.phone} · {legalContact.supportEmail}
                </p>
                <p className="m-0 mt-2 text-xs text-(--ink-muted)">
                  Certificate of Incorporation No. {legalContact.incorporationNumber} · Trade License No. {legalContact.tradeLicenseNumber}
                </p>
              </div>
            </div>

            {/* Order summary */}
            <aside>
              <div className={cardClass('p-6 hover:translate-y-0 lg:sticky lg:top-28')}>
                <h2 className="mb-5 text-base font-semibold text-(--ink)">Order summary</h2>
                <dl className="m-0 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-(--ink-soft)">Edushade {plan.name} (monthly)</dt>
                    <dd className="m-0 font-medium text-(--ink)">{formatPrice(price, region)}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-(--ink-soft)">{plan.trialDays}-day free trial</dt>
                    <dd className="m-0 font-medium text-(--ink)">−{formatPrice(price, region)}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-(--ink-soft)">Taxes</dt>
                    <dd className="m-0 text-(--ink-muted)">Calculated at payment</dd>
                  </div>
                </dl>
                <div className="my-5 h-px bg-(--line)" />
                <div className="mb-1 flex justify-between text-base font-bold text-(--ink)">
                  <span>Due today</span>
                  <span>{formatPrice(0, region)}</span>
                </div>
                <p className="mb-1 text-xs text-(--ink-muted)">
                  Billed in {region.currency} ({region.name}).
                </p>
                <p className="mb-6 text-xs text-(--ink-muted)">
                  Then {formatPrice(price, region)} / month after your trial. Cancel anytime.
                </p>

                <label className="mb-5 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-(--ink-soft)">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-(--color-primary)"
                  />
                  <span>
                    I agree to the{' '}
                    <Link to="/terms-of-service" className="text-(--color-primary) underline">Terms of Service</Link>,{' '}
                    <Link to="/refund-policy" className="text-(--color-primary) underline">Refund & Cancellation Policy</Link>,{' '}
                    <Link to="/delivery-policy" className="text-(--color-primary) underline">Service Delivery Policy</Link>, and{' '}
                    <Link to="/privacy-policy" className="text-(--color-primary) underline">Privacy Policy</Link>.
                  </span>
                </label>

                <a
                  href={agreed ? continueUrl : undefined}
                  aria-disabled={!agreed}
                  className={btnPrimaryClass(cn('w-full justify-center', !agreed && 'pointer-events-none opacity-50'))}
                >
                  <Lock size={15} />
                  Continue to secure payment
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
