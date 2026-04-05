import { useState, useCallback } from 'react'

interface CareerFormData {
  name: string
  email: string
  phone: string
  coverLetter: string
}

const defaultFormData: CareerFormData = {
  name: '',
  email: '',
  phone: '',
  coverLetter: '',
}

export function useCareerForm(position: string) {
  const [formData, setFormData] = useState<CareerFormData>({ ...defaultFormData })
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null
    if (selected && selected.size > 5 * 1024 * 1024) {
      setErrorMessage('File size must be under 5MB.')
      setFile(null)
      return
    }
    setErrorMessage('')
    setFile(selected)
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!file) {
        setErrorMessage('Please attach your CV/Resume.')
        return
      }
      setStatus('sending')
      setErrorMessage('')

      try {
        const body = new FormData()
        body.append('name', formData.name)
        body.append('email', formData.email)
        body.append('phone', formData.phone)
        body.append('coverLetter', formData.coverLetter)
        body.append('position', position)
        body.append('resume', file)

        const res = await fetch('/api/career-apply', { method: 'POST', body })

        if (!res.ok) {
          const text = await res.text()
          throw new Error(text || 'Server error')
        }

        setStatus('success')
        setFormData({ ...defaultFormData })
        setFile(null)
      } catch {
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again or email us directly at info@softimist.com.')
      }
    },
    [formData, file, position],
  )

  const resetStatus = useCallback(() => {
    setStatus('idle')
    setErrorMessage('')
  }, [])

  return { formData, file, handleChange, handleFileChange, handleSubmit, status, errorMessage, resetStatus } as const
}
