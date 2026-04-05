import {
  Heart,
  TrendingUp,
  Plane,
  Coffee,
  GraduationCap,
  Clock,
  Users,
  Rocket,
} from 'lucide-react'
import type { CareerBenefit, CareerFAQ } from '#/types'

export const careerBenefits: CareerBenefit[] = [
  {
    title: 'Competitive Compensation',
    description: 'Performance-based salary with annual increments, festival bonuses, and incentives that reward your impact.',
    icon: TrendingUp,
  },
  {
    title: 'Work-Life Balance',
    description: 'Two weekly days off, flexible schedules, and paid maternity/paternity leave to keep you at your best.',
    icon: Clock,
  },
  {
    title: 'Learning & Growth',
    description: 'Dedicated learning budget, conference sponsorships, and mentorship to accelerate your career.',
    icon: GraduationCap,
  },
  {
    title: 'Team Culture',
    description: 'Collaborative, supportive environment where every voice matters. No bureaucracy, just building great products.',
    icon: Users,
  },
  {
    title: 'Annual Refresh Tour',
    description: 'Yearly company-sponsored trips to recharge, bond with the team, and explore new places together.',
    icon: Plane,
  },
  {
    title: 'Meals & Refreshments',
    description: 'Subsidized meals and fully stocked pantry so you can focus on what you do best.',
    icon: Coffee,
  },
  {
    title: 'Health & Wellbeing',
    description: 'We care about your health — regular wellness initiatives and a supportive, stress-free environment.',
    icon: Heart,
  },
  {
    title: 'High-Impact Work',
    description: 'Work on products used by thousands across South Asia. Your code ships to production and makes a real difference.',
    icon: Rocket,
  },
]

export const careerFAQs: CareerFAQ[] = [
  {
    question: 'How do I apply for a position?',
    answer: 'Click on the job opening you\'re interested in, review the details, and submit your application through the form at the bottom of the page. Make sure to attach your CV/resume as a PDF.',
  },
  {
    question: 'What does the interview process look like?',
    answer: 'Our process typically includes an initial screening call, a technical assessment (take-home or live coding depending on the role), a system design discussion, and a final culture-fit conversation with the team. The entire process usually takes 2-3 weeks.',
  },
  {
    question: 'How long does it take to hear back after applying?',
    answer: 'We review every application carefully. You can expect to hear back from us within 1-2 weeks of submitting your application. If your profile matches our requirements, we\'ll reach out to schedule the first round.',
  },
  {
    question: 'Do you offer remote work options?',
    answer: 'Currently, our positions are on-site at our Dhaka office. We believe in the power of in-person collaboration, especially for engineering teams. However, we offer flexible working hours and occasional work-from-home arrangements.',
  },
  {
    question: 'What tech stack does Softimist use?',
    answer: 'Our primary stack includes Go for backend microservices, React/Next.js with TypeScript for frontends, PostgreSQL for databases, and Kubernetes on cloud infrastructure. We also work with gRPC, Redis, Kafka, and modern observability tools.',
  },
]
