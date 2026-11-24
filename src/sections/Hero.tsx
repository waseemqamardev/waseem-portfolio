import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { useEffect } from 'react'
import { AiOrbLazy } from '../components/AiOrbLazy'
import { HudFrame } from '../components/HudFrame'
import { MagneticButton } from '../components/MagneticButton'
import { profileImage, site } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { easeOut } from '../lib/motion'

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const photoX = useTransform(sx, [-0.5, 0.5], [18, -18])
  const photoY = useTransform(sy, [-0.5, 0.5], [12, -12])
  const orbX = useTransform(sx, [-0.5, 0.5], [-28, 28])
  const orbY = useTransform(sy, [-0.5, 0.5], [-18, 18])
  const glowX = useTransform(sx, [-0.5, 0.5], [-40, 40])
  const glowY = useTransform(sy, [-0.5, 0.5], [-30, 30])
  const glowX2 = useTransform(glowX, (v) => v * -0.6)
  const glowY2 = useTransform(glowY, (v) => v * -0.5)

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [mx, my, reduced])

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-70" aria-hidden />
      <motion.div
        className="pointer-events-none absolute top-10 right-[-8%] h-[520px] w-[520px] rounded-full bg-champagne/30 blur-[110px]"
        style={{ x: glowX, y: glowY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute top-40 right-[10%] h-[280px] w-[280px] rounded-full bg-orchid/25 blur-[90px]"
        style={{ x: glowX2, y: glowY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-[-10%] h-[400px] w-[400px] rounded-full bg-ice/25 blur-[100px]"
        style={{ x: glowX2, y: glowY2 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-24 left-[20%] h-[220px] w-[220px] rounded-full bg-ember/15 blur-[80px]"
        style={{ x: glowX, y: glowY2 }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8 lg:gap-16">
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mb-5 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 border border-pearl/12 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-mist">
              <MapPin size={13} className="text-champagne" aria-hidden />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-2 border border-ice/25 bg-ice/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-ice uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-ice" aria-hidden />
              AI systems online
            </span>
          </motion.div>

          <motion.p
            className="mb-4 font-mono text-[11px] font-semibold tracking-[0.34em] text-ice uppercase"
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
          >
            {site.shortRole} // robotic craft
          </motion.p>

          <motion.h1
            className="font-display text-[3.2rem] leading-[0.92] sm:text-6xl lg:text-[5.2rem]"
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: easeOut }}
          >
            <span className="text-luxury">{site.name}</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-mist"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
          >
            {site.heroIntro}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: easeOut }}
          >
            <MagneticButton href="#projects">
              View Projects
              <ArrowUpRight size={16} aria-hidden />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.p
            className="mt-9 text-sm tracking-wide text-mist/80"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Open to remote work · Android · iOS · Web
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md md:max-w-none"
          initial={reduced ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: easeOut }}
        >
          <motion.div
            className="pointer-events-none absolute -top-16 -right-10 z-0 h-[120%] w-[120%] opacity-90 md:-top-20 md:-right-16"
            style={{ x: orbX, y: orbY }}
          >
            <AiOrbLazy />
          </motion.div>

          <motion.div style={{ x: photoX, y: photoY }} className="relative z-10">
            <HudFrame label="ID // PROFILE.SCAN" className="p-1">
              <div
                data-cursor="hover"
                className="relative overflow-hidden border border-pearl/15 bg-panel shadow-[0_40px_120px_-36px_rgba(255,122,184,0.35)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink via-orchid/10 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-champagne via-orchid to-ice"
                  aria-hidden
                />
                <div className="scan-beam z-10" aria-hidden />
                <img
                  src={profileImage}
                  alt={`${site.name}, Flutter Developer`}
                  className="aspect-[4/5] w-full object-cover object-[center_12%]"
                  width={640}
                  height={800}
                />
                <div className="absolute top-3 right-3 z-20 border border-ice/30 bg-ink/70 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-ice uppercase backdrop-blur-md">
                  cam 01 · live
                </div>
                <div className="absolute right-4 bottom-4 left-4 z-20 border border-pearl/12 bg-ink/75 px-4 py-3 backdrop-blur-xl md:right-5 md:bottom-5 md:left-5">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-orchid uppercase">
                      subject verified
                    </p>
                    <span className="size-1.5 rounded-full bg-ice shadow-[0_0_10px_rgba(87,226,255,0.9)]" />
                  </div>
                  <p className="font-display text-lg text-pearl">{site.name}</p>
                  <p className="mt-0.5 text-xs tracking-wide text-mist">
                    {site.shortRole}
                  </p>
                </div>
              </div>
            </HudFrame>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
