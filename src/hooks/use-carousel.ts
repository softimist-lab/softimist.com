import { useState, useCallback, useEffect, useRef } from 'react'
import type { SlidePosition } from '#/types'

const AUTO_SLIDE_MS = 5000
const PAUSE_AFTER_INTERACTION_MS = 10000
const SWIPE_THRESHOLD = 50

export function getSlidePosition(index: number, active: number, total: number): SlidePosition {
  if (index === active) return 'center'
  const prev = (active - 1 + total) % total
  const next = (active + 1) % total
  if (index === prev) return 'left'
  if (index === next) return 'right'
  return 'hidden'
}

export const slidePositionStyles: Record<SlidePosition, React.CSSProperties> = {
  center: {
    transform: 'translateX(0%) scale(1) rotate(0deg)',
    zIndex: 10,
    opacity: 1,
  },
  left: {
    transform: 'translateX(-38%) scale(0.78) rotate(-2.5deg)',
    zIndex: 5,
    opacity: 1,
  },
  right: {
    transform: 'translateX(38%) scale(0.78) rotate(2.5deg)',
    zIndex: 5,
    opacity: 1,
  },
  hidden: {
    transform: 'translateX(0%) scale(0.65) rotate(0deg)',
    zIndex: 1,
    opacity: 0,
    pointerEvents: 'none' as const,
  },
}

export function useCarousel(totalSlides: number) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const progressRef = useRef(0)
  const lastTickRef = useRef(0)
  const rafRef = useRef<number>(0)

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const resetProgress = useCallback(() => {
    progressRef.current = 0
    setProgress(0)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index)
    resetProgress()
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), PAUSE_AFTER_INTERACTION_MS)
  }, [resetProgress])

  const interactAndNavigate = useCallback(
    (direction: 'next' | 'prev') => {
      if (direction === 'next') nextSlide()
      else prevSlide()
      resetProgress()
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), PAUSE_AFTER_INTERACTION_MS)
    },
    [nextSlide, prevSlide, resetProgress],
  )

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  // Progress animation + auto-slide via rAF
  useEffect(() => {
    if (isPaused) {
      lastTickRef.current = 0
      return
    }

    lastTickRef.current = 0

    const tick = (timestamp: number) => {
      if (lastTickRef.current === 0) {
        lastTickRef.current = timestamp
      }

      const delta = timestamp - lastTickRef.current
      lastTickRef.current = timestamp

      progressRef.current += delta / AUTO_SLIDE_MS
      if (progressRef.current >= 1) {
        progressRef.current = 0
        setProgress(0)
        setActiveSlide((prev) => (prev + 1) % totalSlides)
      } else {
        setProgress(progressRef.current)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isPaused, totalSlides])

  // Reset progress when active slide changes (from manual navigation)
  useEffect(() => {
    progressRef.current = 0
    setProgress(0)
  }, [activeSlide])

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      interactAndNavigate(diff > 0 ? 'next' : 'prev')
    }
  }, [interactAndNavigate])

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    touchStartX.current = e.clientX
  }, [])

  const handleMouseUp = useCallback(
    (e: React.MouseEvent) => {
      const diff = touchStartX.current - e.clientX
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        interactAndNavigate(diff > 0 ? 'next' : 'prev')
      }
    },
    [interactAndNavigate],
  )

  return {
    activeSlide,
    isPaused,
    progress,
    nextSlide: () => interactAndNavigate('next'),
    prevSlide: () => interactAndNavigate('prev'),
    goToSlide,
    pause,
    resume,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    },
  } as const
}
