import { cn } from '#/lib/utils'

interface MegaMenuPanelProps {
  open: boolean
  onEnter: () => void
  onLeave: () => void
  variant: 'default' | 'edushade'
  children: React.ReactNode
}

export function MegaMenuPanel({
  open,
  onEnter,
  onLeave,
  variant,
  children,
}: MegaMenuPanelProps) {
  return (
    <div
      className={cn(
        'absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2',
        variant === 'edushade'
          ? 'w-[max(920px,62vw)] max-w-[1080px]'
          : 'w-[max(780px,56vw)] max-w-[900px]',
        'rounded-2xl border border-(--line) bg-(--bg-base)',
        'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)]',
        'origin-top z-100',
        'transition-[opacity,translate,scale] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'before:absolute before:-top-4 before:left-0 before:right-0 before:h-4',
        open
          ? 'pointer-events-auto opacity-100 translate-y-0 scale-100'
          : 'pointer-events-none opacity-0 translate-y-4 scale-95',
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      role="menu"
    >
      {children}
    </div>
  )
}
