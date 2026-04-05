export interface BlogPost {
  title: string
  description: string
  date: string
  author: string
  authorRole: string
  coverImage: string
  tags: string[]
  slug: string
  readTime: string
}

// Static blog index — import frontmatter from each MDX file
import { frontmatter as post1 } from '../content/blog/how-edushade-transforms-online-learning.mdx'
import { frontmatter as post2 } from '../content/blog/what-is-ott-streaming.mdx'
import { frontmatter as post3 } from '../content/blog/content-aggregation-at-scale.mdx'

const allPosts = [post1, post2, post3] as unknown as BlogPost[]

export function getAllPosts(): BlogPost[] {
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug)
}
