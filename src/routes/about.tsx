import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { values, milestones, teamStats } from '#/data/about'
import { btnPrimaryClass, cardClass, glassCardClass, kickerClass, displayTitleClass, gradientTextClass, sectionGradientMutedClass, sectionGradientSubtleClass } from '#/lib/styles'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(59,130,246,0.04),transparent)] pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>About Softimist</span>
            <h1 className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')} style={{ animationDelay: '80ms' }}>
              We Build the Future of{' '}
              <span className={gradientTextClass('orange')}>Digital Learning & Media</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              Softimist Limited is an AI-powered SaaS company dedicated to transforming education technology,
              media distribution, and OTT entertainment through intelligent, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className={cardClass('relative overflow-hidden p-8 sm:p-10')}>
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-(--color-primary) to-(--color-primary-light)" />
              <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Mission</span>
              <h3 className={cn(displayTitleClass, 'mb-4 text-2xl font-bold text-(--ink)')}>Democratize Quality Education</h3>
              <p className="leading-relaxed text-(--ink-soft)">
                To democratize quality education through intelligent, scalable learning solutions that
                adapt to student needs and empower educators. We believe that every learner deserves
                personalized, accessible, and transformative educational experiences powered by cutting-edge AI.
              </p>
            </div>
            <div className={cardClass('relative overflow-hidden p-8 sm:p-10')}>
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-(--color-accent) to-(--color-accent-light)" />
              <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Vision</span>
              <h3 className={cn(displayTitleClass, 'mb-4 text-2xl font-bold text-(--ink)')}>Global Leader in AI-Powered EdTech</h3>
              <p className="leading-relaxed text-(--ink-soft)">
                To become the global leader in AI-powered educational technology and media distribution,
                creating platforms that are personalized, accessible, and transformative. We envision a
                world where technology bridges every gap in learning and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={cn(sectionGradientMutedClass, 'py-20')}>
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Values</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>What Drives Us Forward</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className={cardClass('group p-6')}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-(--line) bg-(--bg-subtle) text-(--color-primary) transition-colors group-hover:bg-(--color-primary) group-hover:text-white">
                  <value.icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-(--ink)">{value.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-(--ink-soft)">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Journey</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>Milestones Along the Way</h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="relative border-l-2 border-(--line) pl-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-(--color-primary) bg-(--bg-base)">
                    <div className="h-2 w-2 rounded-full bg-(--color-primary)" />
                  </div>
                  <span className="mb-1 inline-block rounded-full bg-(--color-primary-50) px-3 py-0.5 text-xs font-bold text-(--color-primary)">{m.year}</span>
                  <h4 className="mb-1 text-base font-semibold text-(--ink)">{m.title}</h4>
                  <p className="m-0 text-sm text-(--ink-soft)">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={cn(sectionGradientSubtleClass, 'py-20')}>
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Team</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>Built by Experts</h2>
            <p className="mb-10 text-(--ink-soft)">
              Our team brings together education experts, AI researchers, and world-class software
              engineers united by a shared passion for transforming how people learn and consume content.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {teamStats.map((t) => (
                <div key={t.role} className={glassCardClass('rounded-xl p-5 text-center')}>
                  <div className={cn(displayTitleClass, 'text-2xl font-bold text-(--color-primary)')}>{t.count}</div>
                  <div className="mt-1 text-sm font-semibold text-(--ink)">{t.role}</div>
                  <div className="mt-0.5 text-xs text-(--ink-muted)">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className={cardClass('relative overflow-hidden p-10 text-center sm:p-16')}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,var(--glow-orange),transparent)]" />
            <div className="relative z-10">
              <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>Want to Work With Us?</h2>
              <p className="mb-8 text-(--ink-soft)">Join our growing team or partner with us to build the next generation of digital solutions.</p>
              <Link to="/contact" className={btnPrimaryClass('px-8 py-3.5 text-base')}>
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
