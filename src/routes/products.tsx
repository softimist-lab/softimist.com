import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { products } from '#/data/products'
import { btnPrimaryClass, cardClass, glassCardClass, kickerClass, displayTitleClass, gradientTextClass } from '#/lib/styles'

export const Route = createFileRoute('/products')({ component: ProductsPage })

function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(59,130,246,0.04),transparent)] pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Our Products</span>
            <h1 className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')} style={{ animationDelay: '80ms' }}>
              SaaS Platforms That{' '}
              <span className={gradientTextClass('orange')}>Transform Industries</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              Enterprise-grade solutions for education, media, and entertainment.
              Each product is designed for scale, security, and seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.map((product, index) => (
        <section
          key={product.id}
          className={cn('py-20', index % 2 === 0 && 'bg-gradient-to-b from-(--bg-base) to-(--bg-subtle)')}
          id={product.id}
        >
          <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
            {/* Product Header */}
            <div className="mb-12 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white`}>
                <product.icon size={32} strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <h2 className={cn(displayTitleClass, 'mb-1 text-3xl font-bold text-(--ink) sm:text-4xl')}>
                  {product.name}
                </h2>
                <p className="text-lg font-medium" style={{ color: product.accentColor }}>
                  {product.tagline}
                </p>
              </div>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimaryClass('shrink-0')}
              >
                Visit Platform
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <div className="mb-12 grid gap-6 lg:grid-cols-2">
              <p className="text-base leading-relaxed text-(--ink-soft)">{product.description}</p>
              <p className="text-base leading-relaxed text-(--ink-soft)">{product.longDescription}</p>
            </div>

            {/* Stats */}
            <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {product.stats.map((stat) => (
                <div key={stat.label} className={glassCardClass('rounded-xl px-4 py-5 text-center')}>
                  <div className={cn(displayTitleClass, 'text-2xl font-bold')} style={{ color: product.accentColor }}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-(--ink-muted)">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <div key={feature.title} className={cardClass('p-5')}>
                  <h4 className="mb-2 text-sm font-semibold text-(--ink)">{feature.title}</h4>
                  <p className="m-0 text-sm leading-relaxed text-(--ink-soft)">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className={cardClass('relative overflow-hidden p-10 text-center sm:p-16')}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,var(--glow-orange),transparent)]" />
            <div className="relative z-10">
              <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>
                Need a Custom Solution?
              </h2>
              <p className="mb-8 text-(--ink-soft)">
                Our products can be customized and white-labeled for your specific needs.
                Let's discuss how we can help your business grow.
              </p>
              <Link to="/contact" className={btnPrimaryClass('px-8 py-3.5 text-base')}>
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
