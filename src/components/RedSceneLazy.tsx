import { lazy, Suspense } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const RedScene = lazy(() =>
  import('./RedScene').then((m) => ({ default: m.RedScene })),
)

export function RedSceneLazy() {
  const reduced = usePrefersReducedMotion()
  if (reduced) return null

  return (
    <Suspense fallback={null}>
      <RedScene />
    </Suspense>
  )
}
