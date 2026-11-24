import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { portraits, site } from '../data/site'

const tags = ['FLUTTER', 'STRATEGY', 'ARCHITECTURE', 'DELIVERY']

export function Pitch() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const goodScale = useTransform(scrollYProgress, [0.1, 0.5], [0.92, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/10 bg-ink py-[clamp(4.5rem,12vw,8rem)]">
      <div className="container-editorial">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] text-white uppercase">
                You have a developer.
              </h2>
              <motion.p
                style={{ scale: goodScale }}
                className="font-serif origin-left text-[clamp(4.5rem,14vw,10rem)] leading-[0.85] font-semibold text-white"
              >
                Good.
              </motion.p>
              <p className="mt-2 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] text-blood uppercase">
                Now get a partner.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {site.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-display text-4xl text-blood md:text-5xl">{stat.value}</p>
                  <p className="mt-2 max-w-[140px] text-[10px] font-semibold tracking-[0.16em] text-white/50 uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-white md:text-3xl">
                I don&apos;t just ship screens.{' '}
                <span className="italic text-blood">I ship products that hold up.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/20 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white/70 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <motion.div
              style={{ y: imgY }}
              className="mt-10 flex items-end gap-5"
            >
              <div className="size-28 overflow-hidden rounded-full border border-white/15 md:size-36">
                <img
                  src={portraits.circle}
                  alt={site.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif text-xl italic text-blood">{site.name}</p>
                <p className="mt-1 text-[11px] tracking-[0.18em] text-white/50 uppercase">
                  {site.shortRole}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
