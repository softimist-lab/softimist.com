declare module '*.mdx' {
  export const frontmatter: {
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

  const MDXComponent: React.ComponentType
  export default MDXComponent
}
