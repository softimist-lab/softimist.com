import {
  GraduationCap,
  Play,
  Monitor,
  Cloud,
  Brain,
  Shield,
} from 'lucide-react'
import type { ServiceCategory, ProcessStep } from '#/types'

export const services: ServiceCategory[] = [
  {
    category: 'EdTech Solutions',
    description: 'Comprehensive education technology platforms that leverage AI to create personalized, scalable learning experiences.',
    icon: GraduationCap,
    items: [
      'Custom LMS Development',
      'AI-Driven Adaptive Learning',
      'Course Authoring Tools',
      'Student Analytics & Reporting',
      'Virtual Classroom Integration',
      'Assessment & Certification Systems',
    ],
  },
  {
    category: 'Media & Streaming',
    description: 'End-to-end video streaming infrastructure with enterprise-grade security, content management, and distribution.',
    icon: Play,
    items: [
      'OTT Platform Development',
      'DRM & Content Protection',
      'Adaptive Bitrate Streaming',
      'Live Streaming Infrastructure',
      'CDN Integration & Optimization',
      'Multi-device App Development',
    ],
  },
  {
    category: 'Content Aggregation',
    description: 'Unified content pipelines that normalize, curate, and distribute media across platforms and regions.',
    icon: Monitor,
    items: [
      'Multi-source Content Ingestion',
      'Metadata Normalization',
      'Rights & License Management',
      'AI-Powered Recommendations',
      'Cross-platform Distribution',
      'Analytics & Performance Tracking',
    ],
  },
  {
    category: 'SaaS Development',
    description: 'Scalable, multi-tenant SaaS architecture with API-first design and cloud-native deployment strategies.',
    icon: Cloud,
    items: [
      'Multi-tenant Architecture',
      'API-first Design',
      'Cloud-native Deployment',
      'Microservices Architecture',
      'CI/CD Pipeline Setup',
      'Performance Optimization',
    ],
  },
  {
    category: 'AI & Machine Learning',
    description: 'Intelligent systems that learn, adapt, and provide actionable insights through advanced machine learning models.',
    icon: Brain,
    items: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Recommendation Engines',
      'Computer Vision Solutions',
      'Data Pipeline Architecture',
      'Model Training & Deployment',
    ],
  },
  {
    category: 'Enterprise Security',
    description: 'Comprehensive security solutions including encryption, compliance frameworks, and access management.',
    icon: Shield,
    items: [
      'End-to-end Encryption',
      'DRM Implementation',
      'Compliance Frameworks (GDPR, SOC2)',
      'Identity & Access Management',
      'Security Auditing',
      'Penetration Testing',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We understand your business goals, target audience, and technical requirements through thorough research and stakeholder interviews.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'Our team designs scalable system architecture, API contracts, and data models tailored to your unique needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile sprints with continuous integration, automated testing, and regular demos to keep you in the loop.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'Production deployment with monitoring, performance optimization, and ongoing support as your platform grows.',
  },
]
