import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function CustomCursor() {
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 380, damping: 28, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 380, damping: 28, mass: 0.5 })
  const rx = useSpring(x, { stiffness: 180, damping: 24, mass: 0.7 })
  const ry = useSpring(y, { stiffness: 180, damping: 24, mass: 0.7 })

  useEffect(() => {
    if (reduced) return
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return

    document.body.classList.add('has-custom-cursor')

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, [data-cursor="hover"], input, textarea',
      )
      setHovering(Boolean(interactive))
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [reduced, x, y])

  if (!enabled || reduced) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      <motion.div
        className="absolute top-0 left-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice shadow-[0_0_12px_rgba(87,226,255,0.8)]"
        style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/80"
        style={{
          x: rx,
          y: ry,
          opacity: visible ? 1 : 0,
          width: hovering ? 58 : 38,
          height: hovering ? 58 : 38,
          backgroundColor: hovering ? 'rgba(255,122,184,0.12)' : 'transparent',
          boxShadow: hovering
            ? '0 0 24px rgba(167,139,250,0.35)'
            : '0 0 0 transparent',
        }}
      />
    </div>
  )
}
