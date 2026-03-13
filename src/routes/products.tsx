import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { products } from '#/data/products'
import { btnSecondaryClass, cardClass, kickerClass, displayTitleClass, gradientTextClass } from '#/lib/styles'
import type { Product } from '#/types'

export const Route = createFileRoute('/products')({ component: ProductsPage })

function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Our Products</span>
            <h1
              className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')}
              style={{ animationDelay: '80ms' }}
            >
              SaaS Platforms That{' '}
              <span className={gradientTextClass('orange')}>Transform Industries</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              Enterprise-grade white-label solutions for education, media, and content distribution.
              Launch under your brand — scale with our infrastructure.
            </p>

            {/* Product quick nav */}
            <div className="rise-in mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '240ms' }}>
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl border border-(--line) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--ink-soft)',
                    'transition-all duration-200 hover:-translate-y-px hover:border-(--color-primary) hover:text-(--color-primary) hover:shadow-sm',
                  )}
                >
                  <p.icon size={16} strokeWidth={2} />
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl" style={{ minHeight: '320px' }}>
            <CTABackground />
            {/* Content */}
            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-8 py-16 text-center sm:px-14 md:px-20">
              <h2 className={cn(displayTitleClass, 'mb-4 max-w-2xl text-[1.65rem] font-bold leading-[1.2] text-white sm:text-[2rem] md:text-[2.4rem]')}>
                Ready to launch your next digital platform?
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/70">
                Whether you need an LMS, OTT streaming, or content aggregation — our white-label platforms are ready to deploy under your brand.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://edushade.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-all hover:-translate-y-px hover:shadow-lg"
                >
                  Get Started Free
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg border border-white/30 px-6 py-2.5 text-[13px] font-semibold text-white! transition-all hover:-translate-y-px hover:border-white/60 hover:bg-white/10"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Product Section ── */

function ProductSection({ product, index }: { product: Product; index: number }) {
  return (
    <section
      id={product.id}
      className={cn('scroll-mt-20', index % 2 === 0 ? 'bg-gradient-to-b from-(--bg-base) to-(--bg-subtle)' : '')}
    >
      {/* Product Hero */}
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider"
              style={{ background: `${product.accentColor}12`, color: product.accentColor }}
            >
              <product.icon size={14} strokeWidth={2.5} />
              {product.name}
            </div>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold leading-tight text-(--ink) sm:text-[2.5rem]')}>
              {product.headline}
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-(--ink-soft)">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white! transition-all hover:brightness-110"
                style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}dd)` }}
              >
                Explore {product.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
              <Link to="/contact" className={btnSecondaryClass('py-3 text-sm')}>
                Talk to Sales
              </Link>
            </div>
          </div>

          {/* Product Screenshot */}
          <div className="flex items-center justify-center">
            <img
              src={product.id === 'edushade' ? '/edushade/image1.png' : product.id === 'playmist' ? '/Playmist/image1.png' : '/aggregaor/image1.png'}
              alt={`${product.name} screenshot`}
              className="w-full rounded-2xl"
              loading="lazy"
              style={{ boxShadow: '0 25px 60px -15px rgba(0,0,0,0.2)' }}
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>
              Everything You Need to Launch
            </h3>
            <p className="text-sm text-(--ink-soft)">
              A complete platform with all the tools and features built-in from day one.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div key={feature.title} className={cardClass('group p-5')}>
                {feature.icon && (
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                    style={{ background: `${product.accentColor}12`, color: product.accentColor }}
                  >
                    <feature.icon size={20} strokeWidth={2} />
                  </div>
                )}
                <h4 className="mb-1.5 text-sm font-bold text-(--ink)">{feature.title}</h4>
                <p className="m-0 text-[13px] leading-relaxed text-(--ink-muted)">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>
              Built For
            </h3>
            <p className="text-sm text-(--ink-soft)">
              {product.name} serves a wide range of industries and use cases.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.useCases.map((uc) => (
              <div
                key={uc.title}
                className={cn(
                  'group rounded-2xl border border-(--line) bg-(--surface) p-5 transition-all duration-300',
                  'hover:-translate-y-0.5 hover:border-(--line-strong) hover:shadow-md',
                )}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors group-hover:text-white"
                  style={{
                    background: `${product.accentColor}12`,
                    color: product.accentColor,
                  }}
                >
                  <uc.icon size={20} strokeWidth={2} />
                </div>
                <h4 className="mb-1 text-sm font-bold text-(--ink)">{uc.title}</h4>
                <p className="m-0 text-[13px] leading-relaxed text-(--ink-muted)">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA Background — vertical band effect (same technique as saas-frontend) ── */

function CTABackground() {
  return (
    <>
      {/* Base gradient: black to brand orange (#F97316) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(100deg, #000 0%, #1a0800 12%, #331200 24%, #4d1e02 36%, #662a04 48%, #803606 58%, #994308 62%, #b3500a 72%, #cc5d0c 82%, #e56a0e 92%, #F97316 100%)',
        }}
      />
      {/* Vertical band overlay — same repeating-linear-gradient + backdrop-blur technique */}
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[80px]"
        style={{
          background: 'repeating-linear-gradient(270deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0) 40px, rgba(255,255,255,0.12) 80px)',
        }}
      />
      {/* Left fade into solid black */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #000 0%, #000 5%, transparent 28%)',
        }}
      />
    </>
  )
}
