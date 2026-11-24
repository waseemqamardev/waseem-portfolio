import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function CursorSpotlight() {
  const reduced = usePrefersReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.8 })
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.8 })
  const background = useMotionTemplate`
    radial-gradient(680px circle at ${sx}px ${sy}px, rgba(255,122,184,0.18), rgba(167,139,250,0.12) 26%, rgba(87,226,255,0.08) 42%, transparent 62%)
  `

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced, x, y])

  if (reduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{ background }}
    />
  )
}
