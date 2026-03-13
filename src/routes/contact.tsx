import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { contactInfo } from '#/data/contact'
import { useContactForm } from '#/hooks/use-contact-form'
import { cardClass, kickerClass, displayTitleClass, gradientTextClass } from '#/lib/styles'
import { CheckCircle, X, Loader2 } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  const { formData, handleChange, handleSubmit, status, errorMessage, resetStatus } = useContactForm()

  return (
    <main>
      {/* Success Popup */}
      {status === 'success' && <SuccessPopup onClose={resetStatus} />}

      {/* Hero — two-column: left text + right form */}
      <section className="relative overflow-hidden pb-14 pt-20 sm:pb-20 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-100 w-175 rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left — headline & description */}
            <div className="pt-4 lg:pt-10">
              <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Contact Us</span>
              <h1
                className={cn(displayTitleClass, 'rise-in mb-6 text-3xl font-extrabold leading-tight text-(--ink) sm:text-4xl lg:text-[2.6rem]')}
                style={{ animationDelay: '80ms' }}
              >
                Let's Build Something{' '}
                <span className={gradientTextClass('orange')}>Great Together</span>
              </h1>
              <p
                className="rise-in mb-8 max-w-md text-[15px] leading-relaxed text-(--ink-soft)"
                style={{ animationDelay: '160ms' }}
              >
                Speak with our experts about EdTech, OTT, and content distribution solutions.
                Get personalized recommendations, technical support, and pricing tailored to
                your business requirements.
              </p>
            </div>

            {/* Right — contact form */}
            <div className="rise-in" style={{ animationDelay: '160ms' }}>
              <div className="rounded-2xl border border-(--line) bg-(--surface) p-6 shadow-lg sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                  <FormField
                    label="Phone Number"
                    name="company"
                    type="tel"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="+880"
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-(--ink)">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full resize-none rounded-lg border border-(--line-strong) bg-(--bg-base) px-4 py-2.5 text-sm text-(--ink) outline-none transition-colors focus:border-(--color-primary) focus:ring-2 focus:ring-(--glow-orange)"
                      placeholder="Tell us about your project..."
                    />
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
                          Sending...
                        </>
                      ) : (
                        'Submit Info'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-(--line)">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-14 sm:py-20">
          <div className="mb-10">
            <span className={cn(kickerClass, 'mb-3 inline-block')}>Contact Us</span>
            <h2 className={cn(displayTitleClass, 'mb-3 text-2xl font-bold text-(--ink) sm:text-3xl')}>
              We'd Love to Hear from You
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-(--ink-soft)">
              We're here to help with any questions about Softimist's products or services.
              Reach out to our team for support, partnership opportunities, or general inquiries,
              we'd love to connect with you.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {contactInfo.map((info) => (
              <div key={info.title} className={cardClass('p-5')}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-(--line) bg-(--bg-subtle) text-(--color-primary)">
                  <info.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-(--ink)">{info.title}</h3>
                <p className="text-xs text-(--ink-muted)">{info.description}</p>
                <p className="mt-1.5 text-sm font-medium text-(--color-primary)">{info.value}</p>
              </div>
            ))}
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
                Ready to launch your next digital platform?
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/70">
                Whether you need an LMS, OTT streaming, or content aggregation — our white-label
                platforms are ready to deploy under your brand.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition-all hover:-translate-y-px hover:shadow-lg"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-lg border border-white/30 px-6 py-2.5 text-[13px] font-semibold text-white! transition-all hover:-translate-y-px hover:border-white/60 hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
            Message Sent!
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-(--ink-soft)">
            Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
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
