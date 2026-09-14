import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import {
  displayTitleClass,
  gradientTextClass,
  kickerClass,
  sectionWrapClass,
  tocItemClass,
  tocItemStyle,
} from '#/lib/styles'
import type { LegalDocument } from '#/types'

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function LegalPage({ doc }: { doc: LegalDocument }) {
  const [activeId, setActiveId] = useState<string>(doc.sections[0]?.id ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = doc.sections
        .map((section) => ({ id: section.id, el: document.getElementById(section.id) }))
        .filter((s): s is { id: string; el: HTMLElement } => s.el !== null)

      let current = sectionEls[0]?.id || ''
      for (const { id, el } of sectionEls) {
        if (el.getBoundingClientRect().top <= 120) current = id
        else break
      }
      setActiveId(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [doc])

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-20 sm:pb-14 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-100 w-175 rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className={cn(sectionWrapClass, 'relative z-10 px-4')}>
          <div className="max-w-3xl">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>{doc.kicker}</span>
            <h1
              className={cn(displayTitleClass, 'rise-in mb-4 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')}
              style={{ animationDelay: '80ms' }}
            >
              <span className={gradientTextClass('orange')}>{doc.title}</span>
            </h1>
            <p className="rise-in mb-4 text-[15px] leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              {doc.description}
            </p>
            <p className="text-xs font-medium text-(--ink-muted)">
              Last updated{' '}
              <time dateTime={doc.lastUpdated}>{formatDate(doc.lastUpdated)}</time>
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-t border-(--line)">
        <div className={cn(sectionWrapClass, 'px-4 py-12 sm:py-16')}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
            <div>
              {doc.intro.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-[15px] leading-relaxed text-(--ink-soft)">
                  {paragraph}
                </p>
              ))}

              <div className="mt-10 space-y-10">
                {doc.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className={cn(displayTitleClass, 'mb-3 text-xl font-bold text-(--ink) sm:text-2xl')}>
                      {section.title}
                    </h2>
                    {section.body?.map((paragraph) => (
                      <p key={paragraph} className="mb-3 text-[15px] leading-relaxed text-(--ink-soft)">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="my-3 list-none space-y-2.5 p-0">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="relative pl-5 text-[15px] leading-relaxed text-(--ink-soft)">
                            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-(--color-primary)" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.outro?.map((paragraph) => (
                      <p key={paragraph} className="mb-3 text-[15px] leading-relaxed text-(--ink-soft)">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-(--line) bg-(--surface) p-6 sm:p-8">
                <h3 className={cn(displayTitleClass, 'mb-2 text-lg font-bold text-(--ink)')}>
                  Still have questions?
                </h3>
                <p className="mb-5 text-[15px] leading-relaxed text-(--ink-soft)">
                  Our team is happy to walk you through anything in this document.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg bg-(--color-primary) px-5 py-2.5 text-[13px] font-semibold text-white! transition-all hover:-translate-y-px hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* On this page */}
            <aside className="order-first lg:order-none">
              <nav className="lg:sticky lg:top-28" aria-label="On this page">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-(--ink-muted)">
                  On this page
                </p>
                <div className="max-h-[60vh] overflow-y-auto">
                  {doc.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={tocItemClass(2)}
                      style={tocItemStyle(activeId === section.id, 2)}
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
