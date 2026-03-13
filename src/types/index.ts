import type { LucideIcon } from 'lucide-react'

/* ── Navigation ── */

export interface NavFeatureItem {
  icon: LucideIcon
  title: string
  desc: string
}

export interface NavSimpleLink {
  to: string
  label: string
}

export interface MegaMenuFeaturedCard {
  icon: LucideIcon
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export interface MegaMenuSection {
  label: string
  labelIcon?: LucideIcon
  labelIconColor?: string
  items: NavFeatureItem[]
  hash: string
  variant: 'boxed' | 'compact'
}

export interface MegaMenuConfig {
  trigger: string
  sections: MegaMenuSection[]
  featured: MegaMenuFeaturedCard
  gradient: string
}

/* ── Home ── */

export interface HeroSlideStats {
  label: string
  value: string
  change: string
}

export interface HeroSlideRow {
  name: string
  students: number
  progress: number
}

export interface HeroSlideMockup {
  title: string
  sidebar: string[]
  stats: HeroSlideStats[]
  rows: HeroSlideRow[]
}

export interface HeroSlide {
  id: string
  tab: string
  icon: LucideIcon
  mockup: HeroSlideMockup
}

export interface ProductShowcaseFeature {
  icon: LucideIcon
  title: string
  desc: string
}

export interface ProductShowcase {
  id: string
  name: string
  headline: string
  description: string
  cta: { label: string; href: string }
  accent: string
  features: ProductShowcaseFeature[]
}

export interface HomeService {
  title: string
  description: string
  icon: LucideIcon
}

/* ── Products ── */

export interface ProductFeature {
  title: string
  desc: string
}

export interface ProductStat {
  value: string
  label: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  longDescription: string
  features: ProductFeature[]
  stats: ProductStat[]
  color: string
  accentColor: string
  href: string
  icon: LucideIcon
}

/* ── About ── */

export interface Value {
  title: string
  description: string
  icon: LucideIcon
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface TeamStat {
  role: string
  count: string
  desc: string
}

/* ── Services ── */

export interface ServiceCategory {
  category: string
  description: string
  icon: LucideIcon
  items: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

/* ── Contact ── */

export interface ContactInfo {
  title: string
  value: string
  description: string
  icon: LucideIcon
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

export interface ContactSubject {
  value: string
  label: string
}

/* ── Footer ── */

export interface FooterLink {
  label: string
  to?: string
  href?: string
}

export interface FooterLinkColumn {
  title: string
  links: FooterLink[]
}

export interface FooterContactColumn {
  title: string
  contact: string[]
}

export type FooterColumn = FooterLinkColumn | FooterContactColumn

export interface SocialLink {
  label: string
  href: string
  svgPath: string
  viewBox: string
}

/* ── Blog ── */

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

export interface TocItem {
  id: string
  text: string
  level: number
}

/* ── Shared ── */

export type SlidePosition = 'center' | 'left' | 'right' | 'hidden'
