import {
  Lightbulb,
  Globe,
  Shield,
  CheckCircle,
  TrendingUp,
  Brain,
} from 'lucide-react'
import type { Value, Milestone, TeamStat } from '#/types'

export const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what is possible with AI and modern technology to create solutions that redefine industries.',
    icon: Lightbulb,
  },
  {
    title: 'Accessibility',
    description: 'Quality education and digital content should be accessible to everyone regardless of location or background.',
    icon: Globe,
  },
  {
    title: 'Integrity',
    description: 'We build trust through transparent practices, ethical AI, and honest partnerships with our clients.',
    icon: Shield,
  },
  {
    title: 'Student Success',
    description: 'Every product we build is measured by the real outcomes it creates for learners and content consumers.',
    icon: CheckCircle,
  },
  {
    title: 'Continuous Learning',
    description: 'Our team constantly evolves, learning new technologies and methodologies to stay ahead of the curve.',
    icon: TrendingUp,
  },
  {
    title: 'Ethical AI',
    description: 'We develop AI systems responsibly, ensuring fairness, privacy, and transparency in every algorithm.',
    icon: Brain,
  },
]

export const milestones: Milestone[] = [
  { year: '2019', title: 'Company Founded', description: 'Softimist Limited established with a vision to transform EdTech.' },
  { year: '2020', title: 'Edushade Beta', description: 'Launched the first beta of our AI-powered LMS platform.' },
  { year: '2022', title: 'PlayMist Launch', description: 'Released PlayMist OTT platform with DRM and multi-device support.' },
  { year: '2023', title: 'Aggregator Platform', description: 'Launched PlayMist Aggregator for content distribution at scale.' },
  { year: '2024', title: '50+ Institutions', description: 'Reached milestone of serving 50+ educational institutions.' },
  { year: '2025', title: 'AI Integration', description: 'Deep AI personalization rolled out across all platforms.' },
]

export const teamStats: TeamStat[] = [
  { role: 'Education Experts', count: '10+', desc: 'Curriculum designers & pedagogists' },
  { role: 'AI Researchers', count: '8+', desc: 'ML engineers & data scientists' },
  { role: 'Engineers', count: '25+', desc: 'Full-stack & infrastructure' },
]
