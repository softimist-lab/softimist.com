import {
  Lightbulb,
  Globe,
  Shield,
  TrendingUp,
  Layers,
  Users,
} from 'lucide-react'
import type { Value, TeamStat } from '#/types'

export const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We push boundaries with AI and modern technology to create platforms that redefine how businesses operate.',
    icon: Lightbulb,
  },
  {
    title: 'Global Reach',
    description: 'Our platforms serve businesses worldwide — from local startups to enterprise clients across multiple regions.',
    icon: Globe,
  },
  {
    title: 'Trust & Integrity',
    description: 'We build trust through transparent practices, enterprise-grade security, and honest partnerships.',
    icon: Shield,
  },
  {
    title: 'Client Success',
    description: 'Every product we build is measured by the real outcomes it creates for our clients and their end users.',
    icon: TrendingUp,
  },
  {
    title: 'Platform Thinking',
    description: 'We design modular, white-label solutions that adapt to any brand, market, or use case — not one-size-fits-all.',
    icon: Layers,
  },
  {
    title: 'People-Centered',
    description: 'Behind every platform is a team of engineers, designers, and strategists who care deeply about the product.',
    icon: Users,
  },
]

export const teamStats: TeamStat[] = [
  { role: 'Engineers', count: '25+', desc: 'Full-stack, mobile & infrastructure' },
  { role: 'Product & Design', count: '8+', desc: 'UX, UI & product strategy' },
  { role: 'Domain Experts', count: '10+', desc: 'EdTech, media & streaming' },
]
