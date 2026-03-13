import { useState, useCallback } from 'react'
import type { ContactFormData } from '#/types'
import { defaultFormData } from '#/data/contact'

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ ...defaultFormData })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ ...defaultFormData })
    },
    [],
  )

  return { formData, handleChange, handleSubmit } as const
}
