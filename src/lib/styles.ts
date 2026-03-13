import { cn } from './utils'

/* ── Mega Menu ── */

export function megaMenuPanelClass(open: boolean, variant: 'default' | 'edushade' = 'default') {
  const widthClass = variant === 'edushade'
    ? 'w-[max(920px,62vw)] max-w-[1080px]'
    : 'w-[max(780px,56vw)] max-w-[900px]'

  return cn(
    'absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2',
    widthClass,
    'rounded-2xl border border-[var(--line)] bg-[var(--bg-base)]',
    'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)]',
    'origin-top z-[100]',
    // Bridge for hover continuity
    'before:absolute before:top-[-14px] before:left-0 before:right-0 before:h-4',
    open
      ? 'animate-in fade-in slide-in-from-bottom-2 pointer-events-auto opacity-100'
      : 'animate-out fade-out slide-out-to-bottom-1 pointer-events-none opacity-0',
  )
}

export function chevronClass(open: boolean) {
  return cn(
    'text-[var(--ink-muted)] transition-transform duration-200',
    open && 'rotate-180',
  )
}

export function navLinkClass(isActive: boolean = false) {
  return cn(
    'relative inline-flex items-center text-sm font-medium text-[var(--ink-soft)] py-1 transition-colors duration-200',
    'after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-0.5 after:rounded-sm',
    'after:bg-gradient-to-r after:from-[var(--color-primary)] after:to-[var(--color-primary-light)]',
    'after:scale-x-0 after:origin-left after:transition-transform after:duration-200',
    'hover:text-[var(--ink)] hover:after:scale-x-100',
    isActive && 'text-[var(--ink)] after:scale-x-100',
  )
}

/* ── Buttons ── */

export function btnPrimaryClass(className?: string) {
  return cn(
    'inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white',
    'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]',
    'shadow-[0_4px_14px_rgba(249,115,22,0.3)]',
    'transition-all duration-200 cursor-pointer border-none',
    'hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] hover:text-white',
    className,
  )
}

export function btnSecondaryClass(className?: string) {
  return cn(
    'inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm',
    'bg-[var(--surface-strong)] text-[var(--ink)]',
    'border border-[var(--line-strong)]',
    'transition-all duration-200 cursor-pointer',
    'hover:-translate-y-px hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]',
    className,
  )
}

/* ── Cards ── */

export function cardClass(className?: string) {
  return cn(
    'border border-[var(--line)] bg-[var(--surface-strong)] rounded-2xl',
    'shadow-[var(--card-shadow)]',
    'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
    'hover:shadow-[var(--card-shadow-hover)] hover:border-[var(--line-strong)] hover:-translate-y-0.5',
    className,
  )
}

export function glassCardClass(className?: string) {
  return cn(
    'bg-[var(--surface)] backdrop-blur-md border border-[var(--line)] rounded-2xl',
    className,
  )
}

/* ── Layout ── */

export const sectionWrapClass = 'mx-auto w-[min(1200px,calc(100%-2rem))]'

export const displayTitleClass = 'font-display'

export const kickerClass = 'tracking-[0.1em] uppercase font-bold text-xs text-[var(--color-primary)]'

export function gradientTextClass(variant: 'orange' | 'mixed' = 'orange') {
  const gradients = {
    orange: 'from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)]',
    mixed: 'from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)]',
  }
  return cn(
    'bg-gradient-to-br bg-clip-text text-transparent',
    gradients[variant],
  )
}

export const heroGradientClass = cn(
  'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent),',
  'radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(59,130,246,0.04),transparent),',
  'radial-gradient(ellipse_50%_30%_at_0%_100%,rgba(249,115,22,0.03),transparent)]',
)

export const sectionGradientSubtleClass = 'bg-gradient-to-b from-[var(--bg-base)] to-[var(--bg-subtle)]'

export const sectionGradientMutedClass = 'bg-gradient-to-b from-[var(--bg-subtle)] via-[var(--bg-muted)] to-[var(--bg-subtle)]'

/* ── Carousel ── */

export function slideTabClass(isActive: boolean) {
  return cn(
    'flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-medium transition-all duration-300',
    isActive
      ? 'bg-[var(--color-primary)] text-white shadow-sm'
      : 'text-[var(--ink-muted)] hover:text-[var(--ink)]',
  )
}

export function slideDotClass(isActive: boolean) {
  return cn(
    'rounded-full transition-all duration-500',
    isActive
      ? 'h-2 w-7 bg-[var(--color-primary)]'
      : 'h-2 w-2 bg-[var(--ink-muted)] opacity-25 hover:opacity-50',
  )
}

/* ── TOC (Blog) ── */

export function tocItemStyle(isActive: boolean, level: number): React.CSSProperties {
  const basePadding = level === 3 ? '1.75rem' : '1rem'
  if (isActive) {
    return {
      borderLeft: '3px solid var(--color-primary)',
      color: 'var(--ink)',
      fontWeight: 600,
      paddingLeft: `calc(${basePadding} - 1px)`,
    }
  }
  return {
    borderLeft: '3px solid transparent',
    color: 'var(--ink-muted)',
  }
}

export function tocItemClass(level: number) {
  return cn(
    'block py-1.5 text-[13px] leading-snug transition-all duration-200',
    level === 3 ? 'pl-7' : 'pl-4',
  )
}
