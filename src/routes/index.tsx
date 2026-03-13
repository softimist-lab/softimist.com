import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { useCarousel, getSlidePosition, slidePositionStyles } from '#/hooks/use-carousel'
import { heroSlides, trustedBy, productShowcases, homeServices, productImages } from '#/data/home'
import { btnPrimaryClass, btnSecondaryClass, cardClass, kickerClass, displayTitleClass, gradientTextClass } from '#/lib/styles'
import { getAllPosts } from '../lib/blog'
import type { HeroSlide, SlidePosition } from '#/types'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const carousel = useCarousel(heroSlides.length)

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pb-10 pt-16 sm:pb-16 sm:pt-24">
        <HeroBubbles />
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className={cn(displayTitleClass, 'rise-in mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-(--ink) sm:text-5xl md:text-[3.5rem]')}>
              AI-Powered EdTech & Media{' '}
              <br className="hidden sm:block" />
              Infrastructure, Limitless Possibilities
            </h1>
            <p className="rise-in mx-auto mb-8 max-w-xl text-base leading-relaxed text-(--ink-soft)" style={{ animationDelay: '100ms' }}>
              From LMS to OTT to Content Aggregation, Softimist empowers businesses to
              build and scale with enterprise performance and transparent pricing.
            </p>
            <div className="rise-in flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '200ms' }}>
              <a href="https://edushade.com" target="_blank" rel="noopener noreferrer" className={btnPrimaryClass('px-7 py-3 text-sm')}>
                Sign up with email
              </a>
              <Link to="/contact" className={btnSecondaryClass('px-7 py-3 text-sm')}>
                Talk to an expert
              </Link>
            </div>
          </div>

          {/* Product Tab Switcher + Carousel */}
          <div className="rise-in mx-auto mt-14 max-w-6xl sm:mt-20" style={{ animationDelay: '300ms' }}>
            <div className="mb-10 flex items-center justify-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-(--line) bg-(--surface) p-1">
                {heroSlides.map((slide, i) => {
                  const isActive = i === carousel.activeSlide
                  return (
                    <button
                      key={slide.id}
                      onClick={() => carousel.goToSlide(i)}
                      className={cn(
                        'relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-[13px] font-medium transition-colors duration-300',
                        isActive
                          ? 'text-(--ink)'
                          : 'text-(--ink-muted) hover:text-(--ink)',
                      )}
                    >
                      {isActive && (
                        <span
                          className="absolute inset-0 rounded-full bg-(--color-primary)/12"
                          style={{ transform: `scaleX(${carousel.progress})`, transformOrigin: 'left' }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <slide.icon size={16} strokeWidth={2} className={cn(isActive && 'text-(--color-primary)')} />
                        <span className="hidden sm:inline">{slide.tab}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Stacked Carousel */}
            <div
              className="relative mx-auto select-none"
              style={{ height: 'clamp(220px, 50vw, 540px)' }}
              onMouseEnter={carousel.pause}
              onMouseLeave={carousel.resume}
              {...carousel.touchHandlers}
            >
              {heroSlides.map((slide, i) => (
                <DashboardMockup
                  key={slide.id}
                  slide={slide}
                  position={getSlidePosition(i, carousel.activeSlide, heroSlides.length)}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <CarouselArrow direction="prev" onClick={carousel.prevSlide} />
              <div className="flex items-center gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => carousel.goToSlide(i)}
                    className={cn(
                      'rounded-full transition-all duration-500',
                      i === carousel.activeSlide
                        ? 'h-2 w-7 bg-(--color-primary)'
                        : 'h-2 w-2 bg-(--ink-muted) opacity-25 hover:opacity-50',
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <CarouselArrow direction="next" onClick={carousel.nextSlide} />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative z-10 border-b border-(--line) py-10">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
            <p className="m-0 shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-(--ink-muted)">
              Trusted by 1000+<br />organizations globally
            </p>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="logo-scroll flex w-max items-center gap-12">
                {[...trustedBy, ...trustedBy].map((client, i) => (
                  <img
                    key={`${client.name}-${i}`}
                    src={client.logo}
                    alt={client.name}
                    className="h-5 max-w-24 shrink-0 object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcases */}
      {productShowcases.map((product, idx) => (
        <section key={product.id} className="relative z-10" id={product.id}>
          {idx > 0 && (
            <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
              <div className="h-px w-full bg-(--line)" />
            </div>
          )}
          <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
            <div className={cn(
              'grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16',
              idx % 2 !== 0 && '[&>*:first-child]:md:order-2 [&>*:last-child]:md:order-1',
            )}>
              <div>
                <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold leading-tight text-(--ink) sm:text-[2.5rem]')}>
                  {product.headline}
                </h2>
                <p className="mb-3 text-[15px] leading-relaxed text-(--ink-soft)">{product.description}</p>
                <p className="mb-8 text-sm text-(--ink-muted)">
                  {product.name} lets you focus on what matters — delivering exceptional experiences with reliable performance and easy control.
                </p>
                <a
                  href={product.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white! transition-all hover:brightness-110"
                  style={{ background: product.accent }}
                >
                  {product.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
              <div className="w-full">
                <img
                  src={productImages[product.id]}
                  alt={`${product.name} screenshot`}
                  className="w-full rounded-2xl"
                  loading="lazy"
                  style={{ boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)' }}
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.features.map((feat) => (
                <div key={feat.title} className="group">
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                    style={{ background: `${product.accent}12`, color: product.accent }}
                  >
                    <feat.icon size={20} strokeWidth={2} />
                  </div>
                  <h4 className="mb-1 text-[13px] font-bold text-(--ink)">{feat.title}</h4>
                  <p className="m-0 text-[13px] leading-relaxed text-(--ink-muted)">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Services Section */}
      <section className="relative z-10 py-14 sm:py-20" id="services">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>What We Do</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl')}>
              End-to-End Digital Solutions
            </h2>
            <p className="text-(--ink-soft)">
              From concept to deployment, we provide comprehensive technology services for the digital age.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, i) => (
              <div key={service.title} className={cardClass('group p-6')} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-(--line) bg-(--bg-subtle) text-(--color-primary) transition-colors group-hover:bg-(--color-primary) group-hover:text-white">
                  <service.icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-(--ink)">{service.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-(--ink-soft)">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative z-10 py-14 sm:py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className={cn(displayTitleClass, 'mb-2 text-3xl font-bold text-(--ink) sm:text-4xl')}>
                Latest Insights & Updates
              </h2>
              <p className="max-w-xl text-[15px] text-(--ink-soft)">
                Explore how EdTech, video, and platform innovations can enhance your operations with guidance from our Softimist team.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden items-center gap-1.5 text-[13px] font-semibold text-(--color-primary) transition-colors hover:brightness-110 sm:flex"
            >
              View all posts
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {getAllPosts().slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-(--color-primary)">
              View all posts
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-14 sm:py-20">
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Ready to Start?</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-3xl font-bold text-(--ink) sm:text-4xl md:text-5xl')}>
              Let's Build Something{' '}
              <span className={gradientTextClass('orange')}>Extraordinary</span>
            </h2>
            <p className="mb-8 text-(--ink-soft) sm:text-lg">
              Whether you need an LMS platform, OTT streaming service, or custom SaaS solution —
              we have the expertise and products to make it happen.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className={btnPrimaryClass('pulse-glow px-8 py-3.5 text-base')}>
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/products" className={btnSecondaryClass('px-8 py-3.5 text-base')}>
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Sub-components ── */

function DashboardMockup({ slide, position }: { slide: HeroSlide; position: SlidePosition }) {
  return (
    <div
      className="carousel-slide absolute inset-x-0 inset-y-0 sm:inset-x-[8%]"
      data-position={position}
      style={{
        ...slidePositionStyles[position],
        transition: 'transform 0.8s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.6s ease, box-shadow 0.8s ease',
      }}
    >
      <img
        src={productImages[slide.id]}
        alt={`${slide.mockup.title} screenshot`}
        className="h-full w-full rounded-2xl object-cover object-top"
        style={{
          boxShadow: position === 'center'
            ? '0 25px 50px -12px rgba(0,0,0,0.5)'
            : '0 15px 30px -10px rgba(0,0,0,0.35)',
        }}
      />
    </div>
  )
}

function CarouselArrow({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-(--line) bg-(--surface) text-(--ink-muted) transition-colors hover:border-(--color-primary) hover:text-(--color-primary)"
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d={direction === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  )
}

function BlogCard({ post }: { post: ReturnType<typeof getAllPosts>[number] }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block overflow-hidden rounded-2xl border border-transparent bg-(--surface) shadow-sm transition-all hover:shadow-lg"
    >
      <div className="aspect-[16/10] overflow-hidden bg-(--bg-subtle)">
        <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-(--color-primary)/8 px-2.5 py-0.5 text-[11px] font-semibold text-(--color-primary)">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-[15px] font-bold leading-snug text-(--ink) transition-colors group-hover:text-(--color-primary)">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-(--ink-muted)">{post.description}</p>
        <div className="flex items-center gap-2 text-[12px] text-(--ink-muted)">
          <span>{post.readTime}</span>
          <span className="opacity-30">|</span>
          <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
        </div>
      </div>
    </Link>
  )
}

function HeroBubbles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-bubble absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-orange-400/10" style={{ animationDelay: '0s', animationDuration: '7s' }} />
      <div className="hero-bubble absolute right-[8%] top-[10%] h-48 w-48 rounded-full bg-blue-400/10" style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div className="hero-bubble absolute left-[25%] bottom-[10%] h-36 w-36 rounded-full bg-purple-400/10" style={{ animationDelay: '4s', animationDuration: '9s' }} />
      <div className="hero-bubble absolute right-[20%] bottom-[20%] h-56 w-56 rounded-full bg-cyan-400/8" style={{ animationDelay: '1s', animationDuration: '7.5s' }} />
      <div className="hero-bubble absolute left-[50%] top-[5%] h-40 w-40 rounded-full bg-orange-300/8" style={{ animationDelay: '3s', animationDuration: '8.5s' }} />
    </div>
  )
}
