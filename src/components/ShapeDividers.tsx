type Props = {
  flip?: boolean
  variant?: 'wave' | 'zigzag' | 'curve'
  className?: string
  fill?: string
}

export function ShapeDivider({
  flip = false,
  variant = 'wave',
  className = '',
  fill = '#10191c',
}: Props) {
  const paths = {
    wave: 'M0,64 C160,120 320,0 480,48 C640,96 800,32 960,64 L960,120 L0,120 Z',
    zigzag:
      'M0,40 L40,10 L80,40 L120,10 L160,40 L200,10 L240,40 L280,10 L320,40 L360,10 L400,40 L440,10 L480,40 L520,10 L560,40 L600,10 L640,40 L680,10 L720,40 L760,10 L800,40 L840,10 L880,40 L920,10 L960,40 L960,120 L0,120 Z',
    curve: 'M0,80 Q240,0 480,55 T960,40 L960,120 L0,120 Z',
  }

  return (
    <div
      className={`pointer-events-none relative z-[3] -mb-px h-16 w-full overflow-hidden md:h-24 ${
        flip ? 'rotate-180' : ''
      } ${className}`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 120"
        preserveAspectRatio="none"
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  )
}
