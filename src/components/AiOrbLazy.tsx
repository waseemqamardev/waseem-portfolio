import { lazy, Suspense } from 'react'

const AiOrb = lazy(() =>
  import('./AiOrb').then((m) => ({ default: m.AiOrb })),
)

function OrbPlaceholder() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-champagne/35 via-orchid/20 to-ice/20 blur-3xl" />
      <div className="absolute inset-[22%] animate-pulse rounded-full border border-orchid/30 bg-gradient-to-br from-elevated via-panel to-ink" />
    </div>
  )
}

export function AiOrbLazy() {
  return (
    <Suspense fallback={<OrbPlaceholder />}>
      <AiOrb />
    </Suspense>
  )
}
