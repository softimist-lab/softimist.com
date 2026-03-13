import { createFileRoute } from '@tanstack/react-router'
import { Send } from 'lucide-react'
import { cn } from '#/lib/utils'
import { contactInfo, contactSubjects } from '#/data/contact'
import { useContactForm } from '#/hooks/use-contact-form'
import { btnPrimaryClass, cardClass, kickerClass, displayTitleClass, gradientTextClass } from '#/lib/styles'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  const { formData, handleChange, handleSubmit } = useContactForm()

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(59,130,246,0.04),transparent)] pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[400px] w-[700px] rounded-full bg-[radial-gradient(ellipse,var(--glow-orange),transparent_70%)] opacity-40" />
        </div>
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className={cn(kickerClass, 'rise-in mb-3 inline-block')}>Contact Us</span>
            <h1 className={cn(displayTitleClass, 'rise-in mb-6 text-4xl font-extrabold leading-tight text-(--ink) sm:text-5xl')} style={{ animationDelay: '80ms' }}>
              Let's Start a{' '}
              <span className={gradientTextClass('orange')}>Conversation</span>
            </h1>
            <p className="rise-in text-lg leading-relaxed text-(--ink-soft)" style={{ animationDelay: '160ms' }}>
              Have a project in mind? Looking for a technology partner? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="grid gap-5 sm:grid-cols-3">
            {contactInfo.map((info) => (
              <div key={info.title} className={cardClass('p-6 text-center')}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-(--line) bg-(--bg-subtle) text-(--color-primary)">
                  <info.icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-(--ink)">{info.title}</h3>
                <p className="mb-1 text-base font-medium text-(--color-primary)">{info.value}</p>
                <p className="m-0 text-xs text-(--ink-muted)">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-2xl">
            <div className={cardClass('overflow-hidden')}>
              <div className="bg-gradient-to-r from-(--color-primary) to-(--color-primary-dark) p-6 text-white sm:p-8">
                <h2 className={cn(displayTitleClass, 'mb-2 text-2xl font-bold')}>Send Us a Message</h2>
                <p className="text-sm opacity-90">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Your company" />
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-(--ink)">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-(--line-strong) bg-(--bg-base) px-4 py-2.5 text-sm text-(--ink) outline-none transition-colors focus:border-(--color-primary) focus:ring-2 focus:ring-(--glow-orange)"
                    >
                      {contactSubjects.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-(--ink)">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-(--line-strong) bg-(--bg-base) px-4 py-2.5 text-sm text-(--ink) outline-none transition-colors focus:border-(--color-primary) focus:ring-2 focus:ring-(--glow-orange)"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button type="submit" className={btnPrimaryClass('w-full justify-center py-3 text-base')}>
                  Send Message
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-(--ink)">{label}</label>
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
