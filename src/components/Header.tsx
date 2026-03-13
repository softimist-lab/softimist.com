import { Link } from '@tanstack/react-router'
import { useState, useCallback, useEffect, useRef } from 'react'
import { ChevronDown, ArrowRight, Play, Monitor, Menu, X } from 'lucide-react'
import { cn } from '#/lib/utils'
import { useMegaMenu } from '#/hooks/use-mega-menu'
import { edushadeMenu, playmistMenu, simpleLinks, headerActions } from '#/data/navigation'
import { btnPrimaryClass } from '#/lib/styles'
import { MegaMenuPanel } from './mega-menu/MegaMenuPanel'
import { FeatureItem } from './mega-menu/FeatureItem'
import { FeatureRow } from './mega-menu/FeatureRow'
import { FeaturedCard } from './mega-menu/FeaturedCard'
import type { MegaMenuConfig } from '#/types'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileEdushadeOpen, setMobileEdushadeOpen] = useState(false)
  const [mobilePlaymistOpen, setMobilePlaymistOpen] = useState(false)

  const edushadeRef = useRef<{ close: () => void }>({ close: () => {} })
  const playmistRef = useRef<{ close: () => void }>({ close: () => {} })

  const edushade = useMegaMenu([playmistRef.current])
  const playmist = useMegaMenu([edushadeRef.current])

  edushadeRef.current = edushade
  playmistRef.current = playmist

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        edushade.close()
        playmist.close()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [edushade.close, playmist.close])

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false)
    setMobileEdushadeOpen(false)
    setMobilePlaymistOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) backdrop-blur-xl">
      <nav className="mx-auto flex w-[min(1200px,calc(100%-2rem))] items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center no-underline">
          <img src="/logo-black.svg" alt="Softimist" className="h-7 w-auto sm:h-8 dark:hidden" />
          <img src="/logo-white.png" alt="Softimist" className="hidden h-7 w-auto sm:h-8 dark:block" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {/* Edushade Mega Menu */}
          <div className="relative" onMouseEnter={edushade.enter} onMouseLeave={edushade.leave}>
            <NavTrigger label="Edushade" open={edushade.open} onToggle={edushade.toggle} />
            <MegaMenuPanel open={edushade.open} onEnter={edushade.enter} onLeave={edushade.leave} variant="edushade">
              <div className="grid grid-cols-[220px_1fr_240px] gap-0">
                {/* Industry Covers */}
                <div className="border-r border-(--line) p-5">
                  <ColumnLabel text={edushadeMenu.sections[0].label} />
                  <div className="flex flex-col gap-0.5">
                    {edushadeMenu.sections[0].items.map((f) => (
                      <FeatureItem key={f.title} {...f} hash="#edushade" onNavigate={edushade.close} />
                    ))}
                  </div>
                </div>

                {/* Build Learning + Deliver & Engage */}
                <div className="border-r border-(--line) px-6 py-5">
                  <div className="grid grid-cols-2 gap-x-6">
                    <div>
                      <ColumnLabel text={edushadeMenu.sections[1].label} />
                      <div className="flex flex-col">
                        {edushadeMenu.sections[1].items.map((f) => (
                          <FeatureRow key={f.title} {...f} hash="#edushade" onNavigate={edushade.close} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <ColumnLabel text={edushadeMenu.sections[2].label} />
                      <div className="flex flex-col">
                        {edushadeMenu.sections[2].items.map((f) => (
                          <FeatureRow key={f.title} {...f} hash="#edushade" onNavigate={edushade.close} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Card */}
                <div className="p-4">
                  <FeaturedCard {...edushadeMenu.featured} gradient={edushadeMenu.gradient} onClose={edushade.close} />
                </div>
              </div>
            </MegaMenuPanel>
          </div>

          {/* PlayMist Mega Menu */}
          <div className="relative" onMouseEnter={playmist.enter} onMouseLeave={playmist.leave}>
            <NavTrigger label="PlayMist" open={playmist.open} onToggle={playmist.toggle} />
            <MegaMenuPanel open={playmist.open} onEnter={playmist.enter} onLeave={playmist.leave} variant="default">
              <div className="grid grid-cols-[220px_1fr_240px] gap-0">
                {/* OTT */}
                <div className="border-r border-(--line) p-5">
                  <ColumnLabel text={playmistMenu.sections[0].label} icon={Play} iconColor="text-(--color-primary)" />
                  <div className="flex flex-col gap-0.5">
                    {playmistMenu.sections[0].items.map((f) => (
                      <FeatureItem key={f.title} {...f} hash="#playmist" onNavigate={playmist.close} />
                    ))}
                  </div>
                </div>

                {/* Aggregator */}
                <div className="border-r border-(--line) p-5">
                  <ColumnLabel text={playmistMenu.sections[1].label} icon={Monitor} iconColor="text-purple-500" />
                  <div className="flex flex-col gap-0.5">
                    {playmistMenu.sections[1].items.map((f) => (
                      <FeatureItem key={f.title} {...f} hash="#playmist-aggregator" onNavigate={playmist.close} />
                    ))}
                  </div>
                </div>

                {/* Featured Card */}
                <div className="p-4">
                  <FeaturedCard {...playmistMenu.featured} gradient={playmistMenu.gradient} onClose={playmist.close} />
                </div>
              </div>
            </MegaMenuPanel>
          </div>

          {/* Simple Links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Get Started */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/contact"
            className={btnPrimaryClass('hidden py-2 text-sm sm:inline-flex')}
          >
            {headerActions.getStarted.label}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--line) bg-(--surface) text-(--ink-soft) md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-(--line) bg-(--surface-strong) px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            <MobileAccordion
              label="Edushade"
              open={mobileEdushadeOpen}
              onToggle={() => setMobileEdushadeOpen((v) => !v)}
            >
              <MobileMegaMenuContent config={edushadeMenu} onClose={closeMobile} />
            </MobileAccordion>

            <MobileAccordion
              label="PlayMist"
              open={mobilePlaymistOpen}
              onToggle={() => setMobilePlaymistOpen((v) => !v)}
            >
              <MobileMegaMenuContent config={playmistMenu} onClose={closeMobile} />
            </MobileAccordion>

            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="nav-link text-base"
                activeProps={{ className: 'nav-link is-active' }}
                activeOptions={{ exact: true }}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3">
              <a
                href={headerActions.getStarted.href}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimaryClass('w-full justify-center py-2.5 text-sm')}
              >
                {headerActions.getStarted.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ── Sub-components ── */

function NavTrigger({ label, open, onToggle }: { label: string; open: boolean; onToggle: () => void }) {
  return (
    <button
      className="nav-link group flex items-center gap-1"
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onToggle}
    >
      {label}
      <ChevronDown
        size={14}
        strokeWidth={2}
        className={cn('text-(--ink-muted) transition-transform duration-200', open && 'rotate-180')}
      />
    </button>
  )
}

function ColumnLabel({
  text,
  icon: Icon,
  iconColor,
}: {
  text: string
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  iconColor?: string
}) {
  return (
    <h3 className="mb-3 ml-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-(--ink-muted)">
      {Icon ? (
        <span className="inline-flex items-center gap-1.5">
          <Icon size={11} strokeWidth={2.5} className={iconColor} />
          {text}
        </span>
      ) : (
        text
      )}
    </h3>
  )
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <>
      <button className="nav-link flex w-full items-center justify-between text-base" onClick={onToggle}>
        {label}
        <ChevronDown
          size={16}
          className={cn('text-(--ink-muted) transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      {open && children}
    </>
  )
}

function MobileMegaMenuContent({ config, onClose }: { config: MegaMenuConfig; onClose: () => void }) {
  return (
    <div className="mb-2 ml-1 flex flex-col border-l-2 border-(--line) pl-3">
      {config.sections.map((section) => (
        <div key={section.label}>
          <span className="mt-1.5 block px-2 pb-0.5 pt-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-(--ink-muted)">
            {section.label}
          </span>
          {section.items.map((f) => (
            <Link
              key={f.title}
              to="/products"
              hash={section.hash}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-(--ink-soft) transition-colors hover:bg-(--bg-subtle) hover:text-(--ink)"
              onClick={onClose}
            >
              <f.icon size={14} strokeWidth={1.8} />
              {f.title}
            </Link>
          ))}
        </div>
      ))}
      <a
        href={config.featured.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-(--color-primary)"
      >
        {config.featured.ctaLabel}
        <ArrowRight size={14} />
      </a>
    </div>
  )
}
