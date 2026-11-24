import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { fadeUp, stagger } from '../lib/motion'

type Props = {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li'
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = 'div',
}: Props) {
  const reduced = usePrefersReducedMotion()
  const shared = {
    className,
    variants,
    initial: reduced ? false : ('hidden' as const),
    whileInView: 'show' as const,
    viewport: { once: true, margin: '-10% 0px' },
    transition: delay ? { delay } : undefined,
    children,
  }

  if (as === 'li') return <motion.li {...shared} />
  if (as === 'article') return <motion.article {...shared} />
  if (as === 'section') return <motion.section {...shared} />
  return <motion.div {...shared} />
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      variants={stagger}
      initial={reduced ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
    >
      {children}
    </motion.div>
  )
}
