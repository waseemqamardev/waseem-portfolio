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
  const sx = useSpring(x, { stiffness: 240, damping: 18 })
  const sy = useSpring(y, { stiffness: 240, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.22)
    y.set(dy * 0.3)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const styles =
    variant === 'primary'
      ? 'bg-blood text-white hover:bg-blood-dim'
      : 'border border-white/30 text-pearl hover:border-blood hover:bg-blood/10'

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="hover"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 px-6 py-3.5 text-[12px] font-bold tracking-[0.2em] uppercase transition ${styles} ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}
