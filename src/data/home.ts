import {
  BookOpen,
  Play,
  Monitor,
  Zap,
  BarChart3,
  Shield,
  Globe,
  Lock,
  Tv,
  DollarSign,
  Layers,
  RefreshCw,
  Code,
  TrendingUp,
  GraduationCap,
  Cloud,
  PieChart,
  Activity,
} from 'lucide-react'
import type { HeroSlide, ProductShowcase, HomeService } from '#/types'

export const heroSlides: HeroSlide[] = [
  {
    id: 'edushade',
    tab: 'Edushade',
    icon: BookOpen,
    mockup: {
      title: 'Edushade LMS Dashboard',
      sidebar: ['Dashboard', 'Courses', 'Students', 'Assignments', 'Analytics', 'Settings'],
      stats: [
        { label: 'Active Students', value: '12,847', change: '+18%' },
        { label: 'Courses', value: '42', change: '+5' },
        { label: 'Completion Rate', value: '87%', change: '+3%' },
        { label: 'Revenue', value: '$48.2K', change: '+22%' },
      ],
      rows: [
        { name: 'Intro to AI & Machine Learning', students: 2340, progress: 78 },
        { name: 'Advanced Web Development', students: 1890, progress: 65 },
        { name: 'Data Science Fundamentals', students: 1560, progress: 82 },
        { name: 'UX Design Masterclass', students: 1230, progress: 71 },
      ],
    },
  },
  {
    id: 'playmist',
    tab: 'PlayMist',
    icon: Play,
    mockup: {
      title: 'PlayMist Content Manager',
      sidebar: ['Dashboard', 'Movies', 'Series', 'Live TV', 'Analytics', 'Settings'],
      stats: [
        { label: 'Total Views', value: '2.4M', change: '+34%' },
        { label: 'Subscribers', value: '18.5K', change: '+12%' },
        { label: 'Live Channels', value: '24', change: '+3' },
        { label: 'Revenue', value: '$92.1K', change: '+28%' },
      ],
      rows: [
        { name: 'The Last Frontier — S02E05', students: 45200, progress: 92 },
        { name: 'City of Shadows (2024)', students: 38100, progress: 88 },
        { name: 'Nature: Untold Stories', students: 29400, progress: 76 },
        { name: 'Live: Premier League Match', students: 22800, progress: 100 },
      ],
    },
  },
  {
    id: 'aggregator',
    tab: 'Aggregator',
    icon: Monitor,
    mockup: {
      title: 'PlayMist Aggregator Pipeline',
      sidebar: ['Dashboard', 'Sources', 'Content', 'Distribution', 'Rights', 'API'],
      stats: [
        { label: 'Content Sources', value: '156', change: '+8' },
        { label: 'Total Assets', value: '34.2K', change: '+1.2K' },
        { label: 'Distributions', value: '89', change: '+14' },
        { label: 'API Calls', value: '4.8M', change: '+45%' },
      ],
      rows: [
        { name: 'Netflix Originals Feed', students: 8400, progress: 95 },
        { name: 'BBC Content Pipeline', students: 6200, progress: 88 },
        { name: 'Local News Aggregation', students: 4100, progress: 72 },
        { name: 'Sports Live Feed Sync', students: 3800, progress: 100 },
      ],
    },
  },
]

export const trustedBy = [
  { name: 'ESL', logo: '/clients/ESL.png' },
  { name: 'Global Brand', logo: '/clients/global-brand.png' },
  { name: 'Impact', logo: '/clients/impact.png' },
  { name: 'Ostad', logo: '/clients/ostad.png' },
  { name: 'Shikho', logo: '/clients/shikho.png' },
  { name: 'Synapse', logo: '/clients/Synapse.webp' },
  { name: 'Taibah', logo: '/clients/taibah.svg' },
]

export const productShowcases: ProductShowcase[] = [
  {
    id: 'edushade',
    name: 'Edushade',
    headline: 'The AI-Powered LMS That Scales With You',
    description:
      'Build, manage, and deliver world-class learning experiences with an intelligent platform designed for modern institutions. Edushade handles course authoring, student analytics, assessments, and certification — all in one place.',
    cta: { label: 'Learn more', href: 'https://edushade.com' },
    accent: '#FD5B20',
    features: [
      { icon: Zap, title: 'AI-Driven Personalization', desc: "Adaptive learning paths that respond to each student's pace, strengths, and gaps in real time." },
      { icon: BarChart3, title: 'Deep Analytics', desc: 'Granular dashboards for enrollment, completion, engagement, and revenue — updated live.' },
      { icon: Shield, title: 'Enterprise-Grade Security', desc: 'SOC 2 compliant infrastructure with role-based access, SSO, and end-to-end encryption.' },
      { icon: Globe, title: 'White-Label Ready', desc: 'Full branding control with custom domains, themes, and API-first multi-tenant architecture.' },
    ],
  },
  {
    id: 'playmist',
    name: 'PlayMist',
    headline: 'Stream Everything. Beautifully.',
    description:
      'A next-generation OTT platform for live TV, movies, and series. PlayMist delivers adaptive bitrate streaming, DRM protection, and a stunning viewer experience across every device and screen size.',
    cta: { label: 'Learn more', href: '#' }, //https://playmist.softimist.com
    accent: '#8B5CF6',
    features: [
      { icon: Play, title: 'Adaptive Streaming', desc: 'HLS & DASH with intelligent bitrate switching for buffer-free playback on any connection.' },
      { icon: Lock, title: 'Content Protection', desc: 'Multi-DRM support with Widevine, FairPlay, and watermarking to secure your premium content.' },
      { icon: Tv, title: 'Multi-Device Experience', desc: 'Native apps for iOS, Android, Smart TV, and web with seamless cross-device resume.' },
      { icon: DollarSign, title: 'Predictable Pricing', desc: 'Unlimited CDN and storage with transparent costs. Grow your viewership, not your bill.' },
    ],
  },
  {
    id: 'aggregator',
    name: 'PlayMist Aggregator',
    headline: 'Unify Your Content Pipeline',
    description:
      'Aggregate, normalize, and distribute content across platforms with a single powerful API. From metadata enrichment to rights management, the Aggregator is the backbone of your content operations.',
    cta: { label: 'Learn more', href: '#' }, //https://playmist-aggr.softimist.com
    accent: '#3B82F6',
    features: [
      { icon: Layers, title: 'Source Agnostic Ingestion', desc: 'Connect 150+ content sources with pre-built adapters and custom pipeline configuration.' },
      { icon: RefreshCw, title: 'Real-Time Sync', desc: 'Bidirectional metadata sync with conflict resolution and automated quality validation.' },
      { icon: Code, title: 'Developer-First API', desc: 'RESTful and GraphQL endpoints with comprehensive SDKs, webhooks, and sandbox environments.' },
      { icon: TrendingUp, title: 'Distribution Intelligence', desc: 'Smart routing based on rights windows, geo-restrictions, and platform-specific formatting.' },
    ],
  },
]

export const homeServices: HomeService[] = [
  {
    title: 'EdTech Solutions',
    description: 'Custom learning platforms, course management, student analytics, and AI-driven personalization.',
    icon: GraduationCap,
  },
  {
    title: 'Media & Streaming',
    description: 'End-to-end video streaming infrastructure with DRM, CDN integration, and adaptive bitrate.',
    icon: Play,
  },
  {
    title: 'SaaS Development',
    description: 'Scalable, multi-tenant SaaS architecture with API-first design and cloud-native deployment.',
    icon: Cloud,
  },
  {
    title: 'AI & Analytics',
    description: 'Machine learning integration, predictive analytics, personalized recommendations, and data insights.',
    icon: PieChart,
  },
  {
    title: 'Content Aggregation',
    description: 'Unified content pipelines, metadata normalization, rights management, and cross-platform distribution.',
    icon: Activity,
  },
  {
    title: 'Enterprise Security',
    description: 'End-to-end encryption, DRM integration, compliance frameworks, and enterprise-grade access controls.',
    icon: Shield,
  },
]

export const productImages: Record<string, string> = {
  edushade: '/edushade/image1.png',
  playmist: '/placeholder/playmist.svg',
  aggregator: '/placeholder/aggregator.svg',
}
