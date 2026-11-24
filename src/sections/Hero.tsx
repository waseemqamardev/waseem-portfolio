import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { MagneticButton } from '../components/MagneticButton'
import { RedSceneLazy } from '../components/RedSceneLazy'
import { portraits, site } from '../data/site'
import { useMouseParallax } from '../hooks/useMouseParallax'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const parallax = useMouseParallax(16)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] overflow-hidden bg-ink">
      <RedSceneLazy />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[20%] right-[6%] z-0 h-[42vmin] w-[42vmin] rounded-full bg-blood/15 blur-[110px]"
      />

      {/* Giant name behind portrait — magazine cover */}
      <motion.div
        aria-hidden
        style={{ y: nameY, opacity: fade, x: parallax.x * 0.55 }}
        className="pointer-events-none absolute inset-x-0 top-[12%] z-[1] flex justify-center md:top-[9%]"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif m-0 text-[clamp(5.5rem,19vw,16rem)] leading-[0.78] font-semibold tracking-[-0.05em] text-blood select-none"
        >
          {site.firstName}
        </motion.h1>
      </motion.div>

      {/* Portrait rising from bottom */}
      <div className="absolute bottom-0 left-1/2 z-[2] h-[80vh] w-[min(100vw,540px)] -translate-x-1/2 sm:h-[84vh] md:w-[min(46vw,560px)]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: portraitY, x: parallax.x * -0.3 }}
          className="h-full w-full"
        >
          <img
            src={portraits.hero}
            alt={site.name}
            className="hero-portrait h-full w-full object-cover object-[center_8%]"
          />
        </motion.div>
      </div>

      {/* Left niche tags + signature */}
      <div className="absolute inset-x-0 top-[52%] z-[3] hidden md:block">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2.5rem))] grid-cols-[230px_1fr_250px] items-start gap-4">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            style={{ x: parallax.x * 0.35, y: parallax.y * 0.25 }}
            className="flex flex-col gap-1.5"
          >
            {site.heroTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="text-[11px] font-semibold tracking-[0.34em] text-white uppercase"
              >
                {tag}.
              </motion.span>
            ))}
            <span className="mt-6 font-serif text-[1.75rem] leading-none italic text-blood">
              {site.name.split(' ')[0]}
            </span>
          </motion.div>

          <div aria-hidden />

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
            style={{ x: parallax.x * -0.35, y: parallax.y * 0.2 }}
            className="flex flex-col items-end text-right"
          >
            <MagneticButton href="#contact">
              Let&apos;s Talk
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </MagneticButton>
            <p className="mt-5 text-[13px] font-medium text-white">
              <span className="text-blood">3+</span> Years of Experience
            </p>
            <p className="mt-1.5 text-[11px] font-bold tracking-[0.24em] text-blood uppercase">
              {site.shortRole}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="absolute inset-x-0 bottom-5 z-[3] flex flex-col items-center gap-3 px-5 md:hidden"
      >
        <MagneticButton href="#contact" className="text-[11px]">
          Let&apos;s Talk
          <ArrowRight className="size-3.5" />
        </MagneticButton>
      </motion.div>
    </section>
  )
}
