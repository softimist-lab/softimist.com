import { Link } from '@tanstack/react-router'
import { footerColumns, socialLinks, policyLinks } from '#/data/footer'
import type { FooterColumn } from '#/types'

function isLinkColumn(col: FooterColumn): col is { title: string; links: { label: string; to?: string; href?: string }[] } {
  return 'links' in col
}

function isContactColumn(col: FooterColumn): col is { title: string; contact: string[] } {
  return 'contact' in col
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#0C0E12] text-[#D1D5DB] [&_a]:text-[#D1D5DB] [&_a:hover]:text-white">
      {/* Watermark logo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-center overflow-hidden pt-6">
        <img
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          className="h-auto w-4/5 max-w-[900px] opacity-[0.04]"
        />
      </div>

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4 pb-8 pt-48 sm:pt-56">
        {/* Divider */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-sm font-bold text-white">{col.title}</h4>
              {isLinkColumn(col) && (
                <ul className="m-0 list-none space-y-3.5 p-0">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className="text-sm transition-colors duration-200">
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {isContactColumn(col) && (
                <ul className="m-0 list-none space-y-3.5 p-0">
                  {col.contact.map((item) => (
                    <li key={item} className="text-sm">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap gap-5">
            {policyLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-xs text-[#9CA3AF] transition-colors hover:text-[#9CA3AF]">
                {link.label}
              </a>
            ))}
          </div>

          <p className="m-0 text-xs text-[#9CA3AF]">
            Copyright &copy; {year} Softimist Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] transition-colors duration-200 hover:text-white"
                aria-label={social.label}
              >
                <svg width="20" height="20" viewBox={social.viewBox} fill="currentColor">
                  <path d={social.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
