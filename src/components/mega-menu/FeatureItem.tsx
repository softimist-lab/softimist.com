import { Link } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  desc: string
  hash: string
  onNavigate: () => void
}

export function FeatureItem({ icon: Icon, title, desc, hash, onNavigate }: FeatureItemProps) {
  return (
    <Link
      to="/products"
      hash={hash}
      className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors duration-150 hover:bg-[var(--bg-subtle)]"
      onClick={onNavigate}
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--bg-muted)] text-[var(--ink-soft)] transition-colors group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--color-primary)]">
          {title}
        </span>
        <span className="block text-xs leading-relaxed text-[var(--ink-muted)]">
          {desc}
        </span>
      </span>
    </Link>
  )
}
