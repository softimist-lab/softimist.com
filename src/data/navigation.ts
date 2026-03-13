import {
  BookOpen,
  Play,
  Monitor,
  Lock,
  Tv,
  Smartphone,
  DollarSign,
  Layers,
  Sparkles,
  Scale,
  Code2,
  Tags,
  Network,
  Brush,
  Store,
  Handshake,
  BookMarked,
  Video,
  Users,
  Presentation,
  ClipboardCheck,
  FileEdit,
  Award,
  PlayCircle,
  Route,
  MessageCircle,
  MessagesSquare,
  Megaphone,
  Star,
  CalendarCheck,
} from 'lucide-react'
import type { MegaMenuConfig, NavSimpleLink } from '#/types'

export const edushadeMenu: MegaMenuConfig = {
  trigger: 'Edushade',
  sections: [
    {
      label: 'INDUSTRY COVERAGE',
      items: [
        { icon: Brush, title: 'Content Creators', desc: 'Build & monetize your courses' },
        { icon: Store, title: 'Marketplace', desc: 'Discover & sell learning content' },
        { icon: Handshake, title: 'Agency', desc: 'Resell Edushade as your own platform' },
      ],
      hash: '#edushade',
      variant: 'boxed',
    },
    {
      label: 'BUILD LEARNING',
      items: [
        { icon: BookMarked, title: 'Courses', desc: 'Create structured lessons' },
        { icon: Video, title: 'Live Classes', desc: 'Teach in real time' },
        { icon: Users, title: 'Cohorts', desc: 'Run guided programs' },
        { icon: Presentation, title: 'Workshops', desc: 'Host focused sessions' },
        { icon: ClipboardCheck, title: 'Assessments & Exams', desc: 'Evaluate learner understanding' },
        { icon: FileEdit, title: 'Assignments & Quizzes', desc: 'Reinforce learning outcomes' },
        { icon: Award, title: 'Certificates', desc: 'Recognize course completion' },
      ],
      hash: '#edushade',
      variant: 'compact',
    },
    {
      label: 'DELIVER & ENGAGE',
      items: [
        { icon: PlayCircle, title: 'Recorded Lessons', desc: 'Offer self-paced learning' },
        { icon: Route, title: 'Learning Paths', desc: 'Guide learner progression' },
        { icon: MessageCircle, title: 'Community', desc: 'Build learner interaction' },
        { icon: MessagesSquare, title: 'Discussions', desc: 'Encourage peer conversation' },
        { icon: Megaphone, title: 'Announcements', desc: 'Share important updates' },
        { icon: Star, title: 'Feedback & Reviews', desc: 'Collect learner input' },
        { icon: CalendarCheck, title: 'Attendance Tracking', desc: 'Monitor session participation' },
      ],
      hash: '#edushade',
      variant: 'compact',
    },
  ],
  featured: {
    icon: BookOpen,
    title: 'All-in-One EdTech SaaS',
    description: 'Launch and scale your own learning platform — courses, live classes, community, and more under your brand.',
    ctaLabel: 'Explore Edushade',
    ctaHref: 'https://edushade.com',
  },
  gradient: 'bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-500',
}

export const playmistMenu: MegaMenuConfig = {
  trigger: 'PlayMist',
  sections: [
    {
      label: 'PLAYMIST OTT',
      labelIcon: Play,
      labelIconColor: 'text-[var(--color-primary)]',
      items: [
        { icon: Lock, title: 'DRM Protection', desc: 'Widevine & FairPlay security' },
        { icon: Tv, title: 'Live TV & VOD', desc: 'Live channels + on-demand library' },
        { icon: Smartphone, title: 'Multi-device', desc: 'Web, mobile, smart TV & set-top' },
        { icon: DollarSign, title: 'Monetization', desc: 'Subscription, rental & ad-supported' },
      ],
      hash: '#playmist',
      variant: 'boxed',
    },
    {
      label: 'AGGREGATOR',
      labelIcon: Monitor,
      labelIconColor: 'text-purple-500',
      items: [
        { icon: Layers, title: 'Multi-source Ingestion', desc: 'Automated metadata extraction' },
        { icon: Sparkles, title: 'Smart Curation', desc: 'AI-powered recommendations' },
        { icon: Scale, title: 'Rights Management', desc: 'Licensing & geo-restrictions' },
        { icon: Code2, title: 'API Integration', desc: 'RESTful & GraphQL endpoints' },
        { icon: Tags, title: 'Metadata Normalization', desc: 'Unified search & discovery' },
        { icon: Network, title: 'Distribution Network', desc: 'Multi-platform content delivery' },
      ],
      hash: '#playmist-aggregator',
      variant: 'boxed',
    },
  ],
  featured: {
    icon: Play,
    title: 'Enterprise Streaming',
    description: 'Launch your own Netflix-like OTT service with DRM, live TV, and global payment support.',
    ctaLabel: 'Explore PlayMist',
    ctaHref: 'https://playmist.softimist.com',
  },
  gradient: 'bg-gradient-to-br from-purple-500 via-violet-600 to-pink-500',
}

export const simpleLinks: NavSimpleLink[] = [
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export const headerActions = {
  getStarted: { label: 'Get Started', href: 'https://edushade.com' },
}
