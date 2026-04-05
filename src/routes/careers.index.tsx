import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { cn } from '#/lib/utils'
import { getActiveJobs } from '#/lib/careers'
import { careerBenefits, careerFAQs } from '#/data/careers'
import {
  cardClass,
  kickerClass,
  displayTitleClass,
  gradientTextClass,
  btnPrimaryClass,
  sectionWrapClass,
} from '#/lib/styles'
import { MapPin, Clock, Briefcase, ChevronRight, ChevronDown, Search, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/careers/')({ component: CareersPage })

function CareersPage() {
  const jobs = getActiveJobs()
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [filter, setFilter] = useState({ department: 'All', location: 'All', type: 'All' })

  const departments = ['All', ...new Set(jobs.map((j) => j.department))]
  const locations = ['All', ...new Set(jobs.map((j) => j.location))]
  const types = ['All', ...new Set(jobs.map((j) => j.type))]

  const filtered = jobs.filter((j) => {
    if (filter.department !== 'All' && j.department !== filter.department) return false
    if (filter.location !== 'All' && j.location !== filter.location) return false
    if (filter.type !== 'All' && j.type !== filter.type) return false
    return true
  })

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-100 w-175 rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className={cn(sectionWrapClass, 'relative z-10 px-4 text-center')}>
          <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Careers</span>
          <h1
            className={cn(
              displayTitleClass,
              'rise-in mx-auto mb-6 max-w-3xl text-3xl font-extrabold leading-tight text-(--ink) sm:text-4xl lg:text-[2.8rem]',
            )}
            style={{ animationDelay: '80ms' }}
          >
            Fueled by Innovation.{' '}
            <span className={gradientTextClass('orange')}>Join Our Team</span>
          </h1>
          <p
            className="rise-in mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-(--ink-soft)"
            style={{ animationDelay: '160ms' }}
          >
            Join us in shaping the future of cloud, EdTech, and media technology.
            We're building products that impact thousands of users across South Asia — and we want
            passionate people who love solving hard problems.
          </p>
          <a
            href="#openings"
            className={cn(btnPrimaryClass(), 'rise-in')}
            style={{ animationDelay: '240ms' }}
          >
            <Search size={16} />
            See Open Positions
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="border-t border-(--line) py-16 sm:py-24">
        <div className={cn(sectionWrapClass, 'px-4')}>
          <div className="mb-12 text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Why Softimist</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-2xl font-bold text-(--ink) sm:text-3xl')}>
              More Than Just a Job
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-(--ink-soft)">
              We believe great work comes from great people in a great environment. Here's what makes
              Softimist a place you'll love working at.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerBenefits.map((benefit) => (
              <div key={benefit.title} className={cardClass('p-6')}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-(--line) bg-(--bg-subtle) text-(--color-primary)">
                  <benefit.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-(--ink)">{benefit.title}</h3>
                <p className="text-[13px] leading-relaxed text-(--ink-muted)">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="scroll-mt-20 border-t border-(--line) py-16 sm:py-24">
        <div className={cn(sectionWrapClass, 'px-4')}>
          <div className="mb-10 text-center">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Open Positions</span>
            <h2 className={cn(displayTitleClass, 'mb-4 text-2xl font-bold text-(--ink) sm:text-3xl')}>
              Find Your Next Role
            </h2>
            <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-(--ink-soft)">
              We're always looking for talented individuals. See what's currently open.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <FilterSelect label="Department" value={filter.department} options={departments} onChange={(v) => setFilter((p) => ({ ...p, department: v }))} />
            <FilterSelect label="Location" value={filter.location} options={locations} onChange={(v) => setFilter((p) => ({ ...p, location: v }))} />
            <FilterSelect label="Type" value={filter.type} options={types} onChange={(v) => setFilter((p) => ({ ...p, type: v }))} />
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-sm text-(--ink-muted)">No positions match your filters. Try adjusting your search.</p>
              </div>
            )}
            {filtered.map((job) => (
              <Link
                key={job.slug}
                to="/careers/$slug"
                params={{ slug: job.slug }}
                className={cn(
                  cardClass('group flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between'),
                  'no-underline!',
                )}
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-(--color-primary)/10 px-2.5 py-0.5 text-[11px] font-semibold text-(--color-primary)">
                      <Sparkles size={12} />
                      {job.department}
                    </span>
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-(--ink) group-hover:text-(--color-primary) transition-colors duration-200">
                    {job.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-(--ink-muted)">{job.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap sm:gap-6">
                  <JobMeta icon={MapPin} text={job.location} />
                  <JobMeta icon={Clock} text={job.type} />
                  <JobMeta icon={Briefcase} text={job.experience} />
                  <div className="flex items-center gap-1 text-sm font-semibold text-(--color-primary) transition-transform duration-200 group-hover:translate-x-0.5">
                    Details <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-(--line) py-16 sm:py-24">
        <div className={cn(sectionWrapClass, 'px-4')}>
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <span className={cn(kickerClass, 'mb-3 inline-block')}>FAQ</span>
              <h2 className={cn(displayTitleClass, 'mb-4 text-2xl font-bold text-(--ink) sm:text-3xl')}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {careerFAQs.map((faq, i) => (
                <div key={i} className={cardClass('overflow-hidden')}>
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold text-(--ink)">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'shrink-0 text-(--ink-muted) transition-transform duration-200',
                        openFAQ === i && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      openFAQ === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[13px] leading-relaxed text-(--ink-soft)">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-24">
        <div className={cn(sectionWrapClass, 'px-4')}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl" style={{ minHeight: '280px' }}>
            <CTABackground />
            <div className="relative z-10 flex min-h-70 flex-col items-center justify-center px-8 py-14 text-center sm:px-14 md:px-20">
              <h2 className={cn(displayTitleClass, 'mb-4 max-w-2xl text-[1.5rem] font-bold leading-[1.2] text-white sm:text-[1.8rem] md:text-[2.2rem]')}>
                Don't see the right role? We still want to hear from you.
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/70">
                Send your resume to our team and we'll reach out when a matching position opens up.
              </p>
              <a
                href="mailto:info@softimist.com"
                className="inline-flex items-center rounded-lg bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-all hover:-translate-y-px hover:shadow-lg"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Filter Select ── */

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-lg border border-(--line-strong) bg-(--bg-base) py-2 pl-3 pr-8 text-[13px] font-medium text-(--ink) outline-none transition-colors focus:border-(--color-primary) focus:ring-2 focus:ring-(--glow-orange)"
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === 'All' ? `${label}: All` : opt}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-(--ink-muted)" />
    </div>
  )
}

/* ── Job Meta ── */

function JobMeta({ icon: Icon, text }: { icon: typeof MapPin; text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[13px] text-(--ink-muted) whitespace-nowrap">
      <Icon size={14} strokeWidth={1.8} />
      {text}
    </span>
  )
}

/* ── CTA Background ── */

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
