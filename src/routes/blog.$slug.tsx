import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useState, useEffect, useMemo } from 'react'
import { cn } from '#/lib/utils'
import { displayTitleClass } from '#/lib/styles'
import { tocItemStyle, tocItemClass } from '#/lib/styles'
import { getPostBySlug } from '../lib/blog'
import type { TocItem } from '#/types'

const mdxModules = import.meta.glob('../content/blog/*.mdx', { eager: false })

function slugToPath(slug: string): string | undefined {
  for (const path of Object.keys(mdxModules)) {
    const fileName = path.split('/').pop()?.replace('.mdx', '') || ''
    if (fileName === slug) return path
  }
  return undefined
}

export const Route = createFileRoute('/blog/$slug')({ component: BlogPostPage })

function BlogPostPage() {
  const { slug } = Route.useParams()
  const post = getPostBySlug(slug)
  const [MdxContent, setMdxContent] = useState<React.ComponentType | null>(null)
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const path = slugToPath(slug)
    if (!path || !mdxModules[path]) return
    ;(mdxModules[path]() as Promise<{ default: React.ComponentType }>).then((mod) => {
      setMdxContent(() => mod.default)
    })
  }, [slug])

  useEffect(() => {
    if (!MdxContent) return
    const timer = setTimeout(() => {
      const article = document.querySelector('[data-blog-content]')
      if (!article) return
      const headings = article.querySelectorAll('h2, h3')
      const items: TocItem[] = []
      headings.forEach((h) => {
        const text = h.textContent || ''
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        h.id = id
        items.push({ id, text, level: h.tagName === 'H2' ? 2 : 3 })
      })
      setToc(items)
    }, 300)
    return () => clearTimeout(timer)
  }, [MdxContent])

  useEffect(() => {
    if (toc.length === 0) return
    const handleScroll = () => {
      const headingEls = toc
        .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
        .filter((h): h is { id: string; el: HTMLElement } => h.el !== null)

      let current = headingEls[0]?.id || ''
      for (const { id, el } of headingEls) {
        if (el.getBoundingClientRect().top <= 100) current = id
        else break
      }
      setActiveId(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  if (!post) throw notFound()

  const formattedDate = useMemo(
    () => new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    [post.date],
  )

  const authorInitials = post.author.split(' ').map((n) => n[0]).join('')

  return (
    <main className="relative">
      {/* Cover Image */}
      <div className="relative mx-auto max-w-4xl px-4 pt-12 sm:pt-20">
        <div className="overflow-hidden rounded-2xl">
          <img src={post.coverImage} alt={post.title} className="w-full object-cover" style={{ maxHeight: '420px' }} />
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4 py-10 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
          <article>
            <nav className="mb-6 flex items-center gap-2 text-[13px] text-(--ink-muted)">
              <Link to="/" className="hover:text-(--color-primary)">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-(--color-primary)">Blog</Link>
              <span>/</span>
              <span className="truncate text-(--ink-soft)">{post.title}</span>
            </nav>

            <h1 className={cn(displayTitleClass, 'mb-4 text-3xl font-extrabold leading-tight tracking-tight text-(--ink) sm:text-4xl')}>
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-[13px] text-(--ink-muted)">
              <time>{formattedDate}</time>
              <span className="opacity-30">|</span>
              <span>{post.readTime}</span>
              <span className="opacity-30">|</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-(--color-primary)/8 px-2.5 py-0.5 text-[11px] font-semibold text-(--color-primary)">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              data-blog-content
              className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-(--ink) prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-(--ink-soft) prose-strong:text-(--ink) prose-a:text-(--color-primary) prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-(--bg-subtle) prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[13px] prose-code:font-medium prose-code:text-(--ink) prose-pre:rounded-xl prose-pre:border prose-pre:border-(--line) prose-pre:bg-[#0D1117] prose-pre:text-[13px] prose-li:text-(--ink-soft) prose-table:text-[13px] prose-th:border-(--line) prose-th:bg-(--bg-subtle) prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-(--ink) prose-td:border-(--line) prose-td:px-4 prose-td:py-2 prose-td:text-(--ink-soft)"
            >
              {MdxContent ? <MdxContent /> : (
                <div className="flex items-center gap-3 py-20 text-(--ink-muted)">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Loading article...
                </div>
              )}
            </div>

            {/* Author Card (mobile) */}
            <div className="mt-12 rounded-2xl border border-(--line) bg-(--surface) p-6 lg:hidden">
              <AuthorInfo initials={authorInitials} name={post.author} role={post.authorRole} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <AuthorInfo initials={authorInitials} name={post.author} role={post.authorRole} />

              {toc.length > 0 && (
                <div>
                  <div className="mb-3 flex items-center gap-2 text-(--ink-muted)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="15" y2="12" /><line x1="3" y1="18" x2="18" y2="18" />
                    </svg>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">On this page</span>
                  </div>
                  <nav className="space-y-0.5">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={tocItemClass(item.level)}
                        style={tocItemStyle(activeId === item.id, item.level)}
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

function AuthorInfo({ initials, name, role }: { initials: string; name: string; role: string }) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-(--ink-muted)">Written by</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) text-sm font-bold text-white">
          {initials}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-(--ink)">{name}</p>
          <p className="text-[12px] text-(--ink-muted)">{role}</p>
        </div>
      </div>
    </div>
  )
}
