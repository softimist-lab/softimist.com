import { createFileRoute, Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { cn } from '#/lib/utils'
import { services, processSteps } from '#/data/services'
import { btnPrimaryClass, cardClass, kickerClass, displayTitleClass, gradientTextClass, sectionGradientMutedClass } from '#/lib/styles'

export const Route = createFileRoute('/services')({ component: ServicesPage })

function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(59,130,246,0.04),transparent)] pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Our Services</span>
            <h1 className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')} style={{ animationDelay: '80ms' }}>
              Full-Spectrum{' '}
              <span className={gradientTextClass('orange')}>Digital Services</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              From AI-powered education platforms to enterprise streaming infrastructure,
              we deliver end-to-end technology solutions that drive real business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((s) => (
              <div key={s.category} className={cardClass('group overflow-hidden')}>
                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-(--line) bg-(--bg-subtle) text-(--color-primary) transition-colors group-hover:bg-(--color-primary) group-hover:text-white">
                    <s.icon size={28} strokeWidth={1.8} />
                  </div>
                  <h3 className={cn(displayTitleClass, 'mb-2 text-xl font-bold text-(--ink)')}>{s.category}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-(--ink-soft)">{s.description}</p>
                  <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-(--ink-soft)">
                        <Check size={14} strokeWidth={2.5} className="shrink-0 text-(--color-primary)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={cn(sectionGradientMutedClass, 'py-20 sm:py-28')}>
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Process</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>How We Work</h2>
            <p className="text-(--ink-soft)">A proven methodology that delivers results, on time and on budget.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className={cardClass('relative p-6')}>
                <div className={cn(displayTitleClass, 'mb-3 text-3xl font-extrabold text-(--color-primary) opacity-30')}>{step.step}</div>
                <h3 className="mb-2 text-base font-semibold text-(--ink)">{step.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-(--ink-soft)">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className={cardClass('relative overflow-hidden p-10 text-center sm:p-16')}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,var(--glow-orange),transparent)]" />
            <div className="relative z-10">
              <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>Ready to Build Your Next Platform?</h2>
              <p className="mb-8 text-(--ink-soft)">Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.</p>
              <Link to="/contact" className={btnPrimaryClass('px-8 py-3.5 text-base')}>
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
