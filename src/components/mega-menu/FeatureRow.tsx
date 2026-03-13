import { Link } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'

interface FeatureRowProps {
  icon: LucideIcon
  title: string
  desc: string
  hash: string
  onNavigate: () => void
}

export function FeatureRow({ icon: Icon, title, desc, hash, onNavigate }: FeatureRowProps) {
  return (
    <Link
      to="/products"
      hash={hash}
      className="group flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors duration-150 hover:bg-[var(--bg-subtle)]"
      onClick={onNavigate}
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[var(--ink-muted)] transition-colors group-hover:text-[var(--color-primary)]">
        <Icon size={20} strokeWidth={1.6} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.8125rem] font-semibold leading-tight text-[var(--ink)] transition-colors group-hover:text-[var(--color-primary)]">
          {title}
        </span>
        <span className="block text-[0.6875rem] leading-relaxed text-[var(--ink-muted)]">
          {desc}
        </span>
      </span>
    </Link>
  )
}
