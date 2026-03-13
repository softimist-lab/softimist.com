import { BookOpen, Play, Monitor } from 'lucide-react'
import type { Product } from '#/types'

export const products: Product[] = [
  {
    id: 'edushade',
    name: 'Edushade',
    tagline: 'AI-Powered Learning Management System',
    description:
      'Edushade is a next-generation LMS that uses artificial intelligence to personalize educational experiences. Built for institutions, academies, and e-learning platforms, it adapts to each student\'s learning style and pace.',
    longDescription:
      'With 42+ courses, 65,000+ registered students, and 50+ qualified instructors, Edushade has already proven its ability to deliver structured, accessible education at scale. The platform supports live and recorded classes, self-paced learning, assignments, assessments, and certification — all powered by intelligent analytics.',
    features: [
      { title: 'AI-Adaptive Learning', desc: 'Personalized learning paths that adapt to individual student progress and learning styles.' },
      { title: 'Live & Recorded Classes', desc: 'Flexible scheduling with both real-time instruction and on-demand content access.' },
      { title: 'Assessment Engine', desc: 'Regular tests, assignments, and practical tasks with automated grading and feedback.' },
      { title: 'Multi-language Support', desc: 'Platform available in English, Spanish, Bengali and more languages.' },
      { title: 'Analytics Dashboard', desc: 'Comprehensive analytics for instructors and administrators to track performance.' },
      { title: 'Certification System', desc: 'Official certificates upon course completion, shareable across professional profiles.' },
    ],
    stats: [
      { value: '42+', label: 'Courses' },
      { value: '65K+', label: 'Students' },
      { value: '50+', label: 'Instructors' },
      { value: '180K+', label: 'Materials' },
    ],
    color: 'from-blue-500 to-cyan-400',
    accentColor: '#3B82F6',
    href: 'https://edushade.com',
    icon: BookOpen,
  },
  {
    id: 'playmist',
    name: 'PlayMist',
    tagline: 'Enterprise OTT Streaming Platform',
    description:
      'PlayMist is a full-featured OTT streaming platform that lets you launch your own Netflix-like service. Built with enterprise-grade DRM, adaptive streaming, and comprehensive content management.',
    longDescription:
      'Founded in 2022, PlayMist supports Movies, Series, Documentaries, Live TV, and Short-form content with multiple DRM options (Widevine & FairPlay), DASH and HLS streaming formats, multi-profile support, and parental controls. It integrates with bKash, SSLCommerz, PayPal, Stripe, and app stores for global monetization.',
    features: [
      { title: 'DRM Protection', desc: 'Widevine and FairPlay DRM for secure content delivery across all devices.' },
      { title: 'Live TV & VOD', desc: 'Support for live television channels alongside video-on-demand content library.' },
      { title: 'Multi-device Streaming', desc: 'Seamless viewing experience across web, mobile, smart TV, and set-top boxes.' },
      { title: 'Payment Integration', desc: 'Global payment support including bKash, SSLCommerz, PayPal, and Stripe.' },
      { title: 'Content Monetization', desc: 'Flexible models: subscription, rental, purchase, and free ad-supported tiers.' },
      { title: 'Parental Controls', desc: 'PIN-protected profiles with content maturity ratings (G, 7+, 13+, 16+, 18+).' },
    ],
    stats: [
      { value: '5+', label: 'Content Types' },
      { value: '2', label: 'DRM Systems' },
      { value: '6+', label: 'Payment Gates' },
      { value: '2', label: 'Languages' },
    ],
    color: 'from-purple-500 to-pink-400',
    accentColor: '#A855F7',
    href: 'https://playmist.softimist.com',
    icon: Play,
  },
  {
    id: 'playmist-aggregator',
    name: 'PlayMist Aggregator',
    tagline: 'Content Aggregation & Distribution Engine',
    description:
      'PlayMist Aggregator unifies content from multiple sources into a seamless streaming experience. It provides smart content curation, metadata normalization, and cross-platform distribution capabilities.',
    longDescription:
      'Designed for content distributors and platform operators, the Aggregator handles the complexity of multi-source content ingestion, rights management, and intelligent recommendation. It powers the content pipeline behind PlayMist and can be deployed independently for any OTT operation.',
    features: [
      { title: 'Multi-source Ingestion', desc: 'Ingest content from multiple providers with automated metadata extraction.' },
      { title: 'Smart Curation', desc: 'AI-powered content curation and recommendation engine for personalized feeds.' },
      { title: 'Rights Management', desc: 'Track content licensing, geo-restrictions, and availability windows.' },
      { title: 'API Integration', desc: 'RESTful and GraphQL APIs for seamless integration with any frontend or service.' },
      { title: 'Metadata Normalization', desc: 'Standardize content metadata across providers for unified search and discovery.' },
      { title: 'Distribution Network', desc: 'Push content across platforms, regions, and devices from a single dashboard.' },
    ],
    stats: [
      { value: 'REST', label: '& GraphQL APIs' },
      { value: 'AI', label: 'Powered Curation' },
      { value: 'Multi', label: 'Region Support' },
      { value: 'Real-time', label: 'Analytics' },
    ],
    color: 'from-orange-500 to-amber-400',
    accentColor: '#F97316',
    href: 'https://playmist-aggr.softimist.com',
    icon: Monitor,
  },
]
