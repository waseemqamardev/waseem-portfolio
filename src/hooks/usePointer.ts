import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export type PointerState = {
  x: number
  y: number
  nx: number
  ny: number
  active: boolean
}

export function usePointer() {
  const reduced = usePrefersReducedMotion()
  const [pointer, setPointer] = useState<PointerState>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
    active: false,
  })

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: PointerEvent) => {
      setPointer({
        x: e.clientX,
        y: e.clientY,
        nx: e.clientX / window.innerWidth - 0.5,
        ny: e.clientY / window.innerHeight - 0.5,
        active: true,
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced])

  return { pointer, reduced }
}
