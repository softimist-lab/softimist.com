import { useState, useCallback } from 'react'
import type { ContactFormData } from '#/types'
import { defaultFormData } from '#/data/contact'
import { sendContactEmail } from '#/server/send-email'

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ ...defaultFormData })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setStatus('sending')
      setErrorMessage('')

      try {
        await sendContactEmail({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.company,
            message: formData.message,
          },
        })
        setStatus('success')
        setFormData({ ...defaultFormData })
      } catch {
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again or email us directly.')
      }
    },
    [formData],
  )

  const resetStatus = useCallback(() => {
    setStatus('idle')
    setErrorMessage('')
  }, [])

  return { formData, handleChange, handleSubmit, status, errorMessage, resetStatus } as const
}
