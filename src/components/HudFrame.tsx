import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  label?: string
}

export function HudFrame({ children, className = '', label }: Props) {
  return (
    <div className={`relative ${className}`}>
      <span className="hud-corner hud-corner-tl" aria-hidden />
      <span className="hud-corner hud-corner-tr" aria-hidden />
      <span className="hud-corner hud-corner-bl" aria-hidden />
      <span className="hud-corner hud-corner-br" aria-hidden />
      {label ? (
        <span className="absolute -top-3 left-4 z-20 border border-ice/30 bg-ink/80 px-2 py-0.5 font-mono text-[9px] tracking-[0.22em] text-ice uppercase backdrop-blur-sm">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  )
}
