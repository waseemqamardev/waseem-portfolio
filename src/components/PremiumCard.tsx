import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import {
  useCallback,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function PremiumCard({ children, className = '', style }: Props) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const rx = useSpring(0, { stiffness: 180, damping: 18 })
  const ry = useSpring(0, { stiffness: 180, damping: 18 })
  const lift = useSpring(0, { stiffness: 220, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(84,84,212,0.22), transparent 55%)`
  const border = useMotionTemplate`radial-gradient(480px circle at ${mx}% ${my}%, rgba(84,84,212,0.7), transparent 60%)`

  const reset = useCallback(() => {
    rx.set(0)
    ry.set(0)
    lift.set(0)
    mx.set(50)
    my.set(50)
  }, [lift, mx, my, rx, ry])

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      mx.set(px * 100)
      my.set(py * 100)
      ry.set((px - 0.5) * 6)
      rx.set((0.5 - py) * 6)
      lift.set(-5)
    },
    [mx, my, reduced, rx, ry, lift],
  )

  return (
    <motion.div
      ref={ref}
      data-cursor="hover"
      className={`group relative ${className}`}
      style={{
        ...style,
        rotateX: rx,
        rotateY: ry,
        y: lift,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: border, borderRadius: 'inherit' }}
      />
      <div className="premium-surface relative h-full overflow-hidden rounded-[inherit]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </motion.div>
  )
}
