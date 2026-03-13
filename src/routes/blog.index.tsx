import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from '#/lib/utils'
import { displayTitleClass } from '#/lib/styles'
import { getAllPosts } from '../lib/blog'

export const Route = createFileRoute('/blog/')({ component: BlogListPage })

function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main className="relative overflow-hidden">
      <section className="relative pb-12 pt-16 sm:pt-24">
        <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className={cn(displayTitleClass, 'mb-4 text-4xl font-extrabold leading-tight tracking-tight text-(--ink) sm:text-5xl')}>
              Latest Insights & Updates
            </h1>
            <p className="text-lg leading-relaxed text-(--ink-soft)">
              Explore how EdTech, video, and platform innovations can enhance your operations with guidance from our Softimist team.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-20">
        <div className="mx-auto w-[min(1200px,calc(100%-2rem))] px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group block overflow-hidden rounded-2xl border border-transparent bg-(--surface) shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="aspect-16/10 overflow-hidden bg-(--bg-subtle)">
                    <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="rounded-full bg-(--color-primary)/8 px-2.5 py-0.5 text-[11px] font-semibold text-(--color-primary)">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mb-2 text-[15px] font-bold leading-snug text-(--ink) transition-colors group-hover:text-(--color-primary)">
                      {post.title}
                    </h2>
                    <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-(--ink-muted)">{post.description}</p>
                    <div className="flex items-center gap-2 text-[12px] text-(--ink-muted)">
                      <span>{post.readTime}</span>
                      <span className="opacity-30">|</span>
                      <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
