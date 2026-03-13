import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { values, teamStats } from '#/data/about'
import { cardClass, kickerClass, displayTitleClass, gradientTextClass } from '#/lib/styles'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>About Softimist</span>
            <h1
              className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')}
              style={{ animationDelay: '80ms' }}
            >
              Your Platform, Your Brand.{' '}
              <span className={gradientTextClass('orange')}>We Build the Engine.</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              You focus on your audience and your brand. We give you the enterprise-grade
              platform — for education, streaming, or content — ready to launch in weeks, not years.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className={cn(kickerClass, 'mb-3 inline-block')}>Who We Are</span>
              <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>
                Launch Faster. Scale Bigger. Own Everything.
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-(--ink-soft)">
                Imagine launching your own learning platform, streaming service, or content hub — fully branded,
                fully yours — without spending years building it from scratch. That's what we do. Edushade
                for education, PlayMist for OTT, and PlayMist Aggregator for content distribution.
              </p>
              <p className="text-[15px] leading-relaxed text-(--ink-soft)">
                We handle the hard parts — DRM, payments, multi-tenancy, AI recommendations — so you
                can focus on what actually matters: your content, your audience, and your growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3', label: 'SaaS Platforms' },
                { value: '6+', label: 'Device Platforms' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '12+', label: 'Languages' },
              ].map((stat) => (
                <div key={stat.label} className={cardClass('p-5 text-center')}>
                  <div className={cn(displayTitleClass, 'text-2xl font-bold text-(--color-primary) sm:text-3xl')}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-(--ink-muted)">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>What We Stand For</span>
            <h2 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>
              Mission & Vision
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group rounded-2xl border border-(--line) bg-(--surface) p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-primary)/30 hover:shadow-lg sm:p-10">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3 className={cn(displayTitleClass, 'mb-3 text-xl font-bold text-(--ink) sm:text-2xl')}>
                Our Mission
              </h3>
              <p className="text-[15px] leading-relaxed text-(--ink-soft)">
                Building a digital platform shouldn't require a 50-person engineering team and two years of runway.
                We exist to change that — by giving businesses ready-to-deploy platforms that look, feel, and
                perform like they were built in-house. Your brand on the front, our infrastructure in the back.
              </p>
            </div>
            <div className="group rounded-2xl border border-(--line) bg-(--surface) p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg sm:p-10">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className={cn(displayTitleClass, 'mb-3 text-xl font-bold text-(--ink) sm:text-2xl')}>
                Our Vision
              </h3>
              <p className="text-[15px] leading-relaxed text-(--ink-soft)">
                We're building toward a future where launching a world-class digital platform is as simple
                as signing up. No technical barriers. No year-long development cycles. Just your idea,
                your audience, and a platform that's ready from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Values</span>
            <h2 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>What Drives Us Forward</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className={cardClass('group p-5')}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-(--line) bg-(--bg-subtle) text-(--color-primary) transition-colors group-hover:bg-(--color-primary) group-hover:text-white">
                  <value.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-(--ink)">{value.title}</h3>
                <p className="m-0 text-[13px] leading-relaxed text-(--ink-muted)">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Our Team</span>
            <h2 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>The People Behind the Platforms</h2>
            <p className="mb-10 text-sm text-(--ink-soft)">
              Engineers who've scaled systems to millions. Designers obsessed with every pixel.
              Domain experts who understand education and media inside out. That's who builds your platform.
            </p>
            <div className="grid grid-cols-3 gap-5">
              {teamStats.map((t) => (
                <div key={t.role} className={cardClass('p-5 text-center')}>
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
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl" style={{ minHeight: '320px' }}>
            <CTABackground />
            <div className="relative z-10 flex min-h-80 flex-col items-center justify-center px-8 py-16 text-center sm:px-14 md:px-20">
              <h2 className={cn(displayTitleClass, 'mb-4 max-w-2xl text-[1.65rem] font-bold leading-[1.2] text-white sm:text-[2rem] md:text-[2.4rem]')}>
                Ready to build something together?
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/70">
                Have a platform idea? Looking for a white-label solution? Or just want to explore what's possible? We'd love to hear from you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-all hover:-translate-y-px hover:shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-lg border border-white/30 px-6 py-2.5 text-[13px] font-semibold text-white! transition-all hover:-translate-y-px hover:border-white/60 hover:bg-white/10"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CTABackground() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(100deg, #000 0%, #1a0800 12%, #331200 24%, #4d1e02 36%, #662a04 48%, #803606 58%, #994308 62%, #b3500a 72%, #cc5d0c 82%, #e56a0e 92%, #F97316 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[80px]"
        style={{
          background: 'repeating-linear-gradient(270deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0) 40px, rgba(255,255,255,0.12) 80px)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #000 0%, #000 5%, transparent 28%)',
        }}
      />
    </>
  )
}
