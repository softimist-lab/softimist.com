import { useState, useRef, useCallback } from 'react'

const CLOSE_DELAY_MS = 200

export function useMegaMenu() {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const enter = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
    setOpen(true)
  }, [])

  const leave = useCallback(() => {
    timer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  const toggle = useCallback(() => setOpen((v) => !v), [])

  return { open, enter, leave, close, toggle } as const
}
