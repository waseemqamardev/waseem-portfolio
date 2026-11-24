import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'

export function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const redX = useTransform(scrollYProgress, [0, 1], [30, -20])

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-ink py-[clamp(5rem,14vw,9rem)]">
      <div className="container-editorial relative">
        <Reveal>
          <p className="mb-8 text-[11px] font-semibold tracking-[0.3em] text-blood uppercase">
            | 01 — The Approach
          </p>
        </Reveal>

        <div className="relative">
          <motion.h2
            style={{ x }}
            className="font-display text-[clamp(3.2rem,10vw,8rem)] leading-[0.9] text-white uppercase"
          >
            Flutter
            <br />
            isn&apos;t about
          </motion.h2>
          <motion.p
            style={{ x: redX }}
            className="font-display mt-2 text-[clamp(3.8rem,12vw,9.5rem)] leading-[0.85] text-blood text-shadow-red uppercase"
          >
            Code.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="max-w-xs text-sm leading-relaxed tracking-[0.08em] text-white uppercase">
              It&apos;s about what they{' '}
              <span className="text-blood">ship</span> — apps people keep opening.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-right text-[11px] leading-relaxed tracking-[0.14em] text-white/55 uppercase md:text-left">
              Clean architecture. Sharp performance.
              <br />
              Products that hold up under real use.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
