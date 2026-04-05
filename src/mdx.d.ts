declare module '*.mdx' {
  export const frontmatter: Record<string, unknown>

  const MDXComponent: React.ComponentType
  export default MDXComponent
}
