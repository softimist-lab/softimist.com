import { Mail, Phone, MapPin } from 'lucide-react'
import type { ContactInfo, ContactSubject, ContactFormData } from '#/types'

export const contactInfo: ContactInfo[] = [
  {
    title: 'Email Us',
    value: 'info@softimist.com',
    description: 'Send us an email anytime. We usually respond within 24 hours.',
    icon: Mail,
  },
  {
    title: 'Call Us',
    value: '+880 1635-465676',
    description: 'Available Monday to Friday, 9am to 6pm BST.',
    icon: Phone,
  },
  {
    title: 'Visit Us',
    value: 'Dhaka, Bangladesh',
    description: 'Our office is located in the heart of Dhaka.',
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
