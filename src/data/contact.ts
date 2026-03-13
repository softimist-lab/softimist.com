import { Phone, Mail, MapPin } from 'lucide-react'
import type { ContactInfo, ContactSubject, ContactFormData } from '#/types'

export const contactInfo: ContactInfo[] = [
  {
    title: 'Call Us',
    value: '+880 1635-465676',
    description: 'Talk to Us Anytime, 24/7',
    icon: Phone,
  },
  {
    title: 'Email Us',
    value: 'info@softimist.com',
    description: 'Chat with Our Experts',
    icon: Mail,
  },
  {
    title: 'Bangladesh Operations',
    value: 'Softimist Limited',
    description: 'Dhaka, Bangladesh',
    icon: MapPin,
  },
]

export const contactSubjects: ContactSubject[] = [
  { value: '', label: 'Select a topic' },
  { value: 'edushade', label: 'Edushade LMS' },
  { value: 'playmist', label: 'PlayMist OTT' },
  { value: 'aggregator', label: 'PlayMist Aggregator' },
  { value: 'custom', label: 'Custom Development' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
]

export const defaultFormData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
}
