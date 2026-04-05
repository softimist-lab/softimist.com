import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { cn } from '#/lib/utils'
import {
  cardClass,
  kickerClass,
  displayTitleClass,
  gradientTextClass,
  sectionWrapClass,
} from '#/lib/styles'
import { getJobBySlug } from '#/lib/careers'
import { useCareerForm } from '#/hooks/use-career-form'
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowLeft,
  Upload,
  CheckCircle,
  X,
  Loader2,
  FileText,
} from 'lucide-react'

const mdxModules = import.meta.glob('../content/careers/*.mdx', { eager: false })

function slugToPath(slug: string): string | undefined {
  for (const path of Object.keys(mdxModules)) {
    const fileName = path.split('/').pop()?.replace('.mdx', '') || ''
    if (fileName === slug) return path
  }
  return undefined
}

export const Route = createFileRoute('/careers/$slug')({ component: CareerDetailPage })

function CareerDetailPage() {
  const { slug } = Route.useParams()
  const job = getJobBySlug(slug)
  const [MdxContent, setMdxContent] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    const path = slugToPath(slug)
    if (!path || !mdxModules[path]) return
    ;(mdxModules[path]() as Promise<{ default: React.ComponentType }>).then((mod) => {
      setMdxContent(() => mod.default)
    })
  }, [slug])

  if (!job) throw notFound()

  return (
    <main>
      {/* Success Popup rendered via form */}
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-20 sm:pb-14 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-100 w-175 rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-30" />
        </div>
        <div className={cn(sectionWrapClass, 'relative z-10 px-4')}>
          <Link
            to="/careers"
            className="rise-in mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-(--ink-muted) transition-colors hover:text-(--color-primary)"
          >
            <ArrowLeft size={15} />
            Back to all positions
          </Link>

          <div className="rise-in mb-4 flex flex-wrap items-center gap-2" style={{ animationDelay: '40ms' }}>
            <span className="inline-flex items-center gap-1 rounded-full bg-(--color-primary)/10 px-3 py-1 text-[12px] font-semibold text-(--color-primary)">
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-(--line) px-3 py-1 text-[12px] font-medium text-(--ink-muted)">
              <MapPin size={12} /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-(--line) px-3 py-1 text-[12px] font-medium text-(--ink-muted)">
              <Clock size={12} /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-(--line) px-3 py-1 text-[12px] font-medium text-(--ink-muted)">
              <Briefcase size={12} /> {job.experience}
            </span>
          </div>

          <h1
            className={cn(
              displayTitleClass,
              'rise-in mb-4 max-w-3xl text-2xl font-extrabold leading-tight text-(--ink) sm:text-3xl lg:text-[2.4rem]',
            )}
            style={{ animationDelay: '80ms' }}
          >
            {job.title}
          </h1>
          <p
            className="rise-in max-w-2xl text-[15px] leading-relaxed text-(--ink-soft)"
            style={{ animationDelay: '120ms' }}
          >
            {job.description}
          </p>

          <div className="rise-in mt-8" style={{ animationDelay: '160ms' }}>
            <a
              href="#apply"
              className={cn(
                'inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-primary-dark) px-7 py-3 text-sm font-semibold text-white! shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all duration-200',
                'hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]',
              )}
            >
              Apply for this Position
            </a>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="border-t border-(--line) py-12 sm:py-16">
        <div className={cn(sectionWrapClass, 'px-4')}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
            {/* MDX Content */}
            <div
              data-career-content
              className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-(--ink) prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-(--ink-soft) prose-strong:text-(--ink) prose-a:text-(--color-primary) prose-a:no-underline hover:prose-a:underline prose-li:text-(--ink-soft) prose-li:marker:text-(--color-primary)"
            >
              {MdxContent ? (
                <MdxContent />
              ) : (
                <div className="flex items-center gap-3 py-20 text-(--ink-muted)">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Loading job details...
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Job Summary Card */}
                <div className={cardClass('p-6')}>
                  <h3 className="mb-4 text-sm font-bold text-(--ink)">Job Summary</h3>
                  <div className="space-y-4">
                    <SummaryRow label="Department" value={job.department} />
                    <SummaryRow label="Location" value={job.location} />
                    <SummaryRow label="Job Type" value={job.type} />
                    <SummaryRow label="Experience" value={job.experience} />
                    {job.salary && <SummaryRow label="Salary" value={job.salary} />}
                    <SummaryRow label="Posted" value={new Date(job.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} />
                  </div>
                  <div className="mt-6">
                    <a
                      href="#apply"
                      className={cn(
                        'flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-primary-dark) px-6 py-2.5 text-sm font-semibold text-white! shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all duration-200',
                        'hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]',
                      )}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                {/* Share / Contact */}
                <div className={cardClass('p-6')}>
                  <h3 className="mb-2 text-sm font-bold text-(--ink)">Have Questions?</h3>
                  <p className="mb-3 text-[13px] text-(--ink-muted)">
                    Reach out to our HR team for any queries about this position.
                  </p>
                  <a
                    href="mailto:info@softimist.com"
                    className="text-[13px] font-medium text-(--color-primary) hover:underline"
                  >
                    info@softimist.com
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="scroll-mt-20 border-t border-(--line) py-14 sm:py-20">
        <div className={cn(sectionWrapClass, 'px-4')}>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <span className={cn(kickerClass, 'mb-3 inline-block')}>Apply Now</span>
              <h2 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>
                Submit Your{' '}
                <span className={gradientTextClass('orange')}>Application</span>
              </h2>
              <p className="text-[15px] text-(--ink-soft)">
                Fill out the form below and attach your resume. We'll review your application and get back to you.
              </p>
            </div>
            <ApplicationForm position={job.title} />
          </div>
        </div>
      </section>
    </main>
  )
}

/* ── Summary Row ── */

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-[13px] text-(--ink-muted)">{label}</span>
      <span className="text-right text-[13px] font-medium text-(--ink)">{value}</span>
    </div>
  )
}

/* ── Application Form ── */

function ApplicationForm({ position }: { position: string }) {
  const {
    formData,
    file,
    handleChange,
    handleFileChange,
    handleSubmit,
    status,
    errorMessage,
    resetStatus,
  } = useCareerForm(position)

  return (
    <>
      {status === 'success' && <SuccessPopup onClose={resetStatus} />}

      <div className="rounded-2xl border border-(--line) bg-(--surface) p-6 shadow-lg sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <FormField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+880"
          />

          <div>
            <label htmlFor="coverLetter" className="mb-1.5 block text-sm font-medium text-(--ink)">
              Cover Letter <span className="text-(--color-primary)">*</span>
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-(--line-strong) bg-(--bg-base) px-4 py-2.5 text-sm text-(--ink) outline-none transition-colors focus:border-(--color-primary) focus:ring-2 focus:ring-(--glow-orange)"
              placeholder="Tell us why you're a great fit for this role, highlight relevant experience and shipped products..."
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-(--ink)">
              CV / Resume <span className="text-(--color-primary)">*</span>
            </label>
            <label
              htmlFor="resume"
              className={cn(
                'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-8 transition-colors',
                file
                  ? 'border-(--color-primary)/40 bg-(--color-primary)/5'
                  : 'border-(--line-strong) hover:border-(--color-primary)/30 hover:bg-(--bg-subtle)',
              )}
            >
              {file ? (
                <>
                  <FileText size={24} className="text-(--color-primary)" />
                  <span className="text-sm font-medium text-(--ink)">{file.name}</span>
                  <span className="text-[12px] text-(--ink-muted)">
                    {(file.size / 1024).toFixed(0)} KB — Click to change
                  </span>
                </>
              ) : (
                <>
                  <Upload size={24} className="text-(--ink-muted)" />
                  <span className="text-sm font-medium text-(--ink)">Click to upload your resume</span>
                  <span className="text-[12px] text-(--ink-muted)">PDF, DOC, or DOCX (max 3MB)</span>
                </>
              )}
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <p className="text-xs text-(--ink-muted)">
            By submitting this form, you agree to our{' '}
            <Link to="/" className="font-medium text-(--color-primary) underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
          </p>

          {status === 'error' && (
            <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
              {errorMessage}
            </p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={cn(
                'inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-primary-dark) px-7 py-2.5 text-sm font-semibold text-white! shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all duration-200',
                status === 'sending'
                  ? 'cursor-not-allowed opacity-70'
                  : 'hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]',
              )}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

/* ── Form Field ── */

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-(--ink)">
        {label}
        {required && <span className="text-(--color-primary)"> *</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-(--line-strong) bg-(--bg-base) px-4 py-2.5 text-sm text-(--ink) outline-none transition-colors focus:border-(--color-primary) focus:ring-2 focus:ring-(--glow-orange)"
        placeholder={placeholder}
      />
    </div>
  )
}

/* ── Success Popup ── */

function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="animate-in fade-in zoom-in-95 relative mx-4 w-full max-w-md rounded-2xl border border-(--line) bg-(--bg-base) p-8 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-(--ink-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--ink)"
        >
          <X size={18} />
        </button>
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400">
            <CheckCircle size={32} strokeWidth={1.8} />
          </div>
          <h3 className={cn(displayTitleClass, 'mb-2 text-xl font-bold text-(--ink) sm:text-2xl')}>
            Application Submitted!
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-(--ink-soft)">
            Thank you for applying. Our team will review your application and get back to you within 1-2 weeks.
          </p>
          <button
            onClick={onClose}
            className="inline-flex items-center rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-primary-dark) px-7 py-2.5 text-sm font-semibold text-white! shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
