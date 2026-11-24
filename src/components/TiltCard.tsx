import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function TiltCard({ children, className = '', style }: Props) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
  )
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 })

  const reset = useCallback(() => {
    setTransform(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
    )
    setGlow((g) => ({ ...g, opacity: 0 }))
  }, [])

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotateY = (px - 0.5) * 7
      const rotateX = (0.5 - py) * 7
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
      )
      setGlow({ x: px * 100, y: py * 100, opacity: 1 })
    },
    [reduced],
  )

  return (
    <div
      ref={ref}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ ...style, transform }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glow.opacity * 0.7,
          background: `radial-gradient(380px circle at ${glow.x}% ${glow.y}%, rgba(234,179,8,0.12), transparent 50%)`,
        }}
      />
      {children}
    </div>
  )
}
