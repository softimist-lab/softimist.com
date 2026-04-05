export interface CareerPost {
  title: string
  slug: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  date: string
  status: 'active' | 'inactive'
  salary?: string
}

// Static career index — import frontmatter from each MDX file
import { frontmatter as job1 } from '../content/careers/senior-fullstack-engineer.mdx'
import { frontmatter as job2 } from '../content/careers/devops-engineer.mdx'
import { frontmatter as job3 } from '../content/careers/junior-flutter-developer.mdx'

const allJobs = [job1, job2, job3] as unknown as CareerPost[]

export function getActiveJobs(): CareerPost[] {
  return allJobs
    .filter((j) => j.status === 'active')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getJobBySlug(slug: string): CareerPost | undefined {
  return allJobs.find((j) => j.slug === slug)
}
