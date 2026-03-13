import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface FeaturedCardProps {
  icon: LucideIcon
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  gradient: string
  onClose: () => void
}

export function FeaturedCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
  ctaHref,
  gradient,
  onClose,
}: FeaturedCardProps) {
  return (
    <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-xl p-5">
      <div className={`absolute inset-0 opacity-90 ${gradient}`} />
      <div className="relative z-10">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          <Icon size={20} strokeWidth={1.8} className="text-white" />
        </div>
        <h4 className="mb-1.5 text-base font-bold text-white">{title}</h4>
        <p className="mb-4 text-xs leading-relaxed text-white/70">{description}</p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
          onClick={onClose}
        >
          {ctaLabel}
          <ArrowRight size={13} className="transition-transform group-hover/cta:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}
