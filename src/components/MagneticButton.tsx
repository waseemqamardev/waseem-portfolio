import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  external?: boolean
}

export function MagneticButton({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: Props) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.25)
    y.set(dy * 0.35)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-champagne via-orchid to-ice text-ink shadow-[0_10px_40px_-12px_rgba(255,122,184,0.65)] hover:brightness-110'
      : 'border border-pearl/25 text-pearl hover:border-ice/50 hover:bg-ice/10'

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="hover"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide transition ${styles} ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.a>
  )
}
