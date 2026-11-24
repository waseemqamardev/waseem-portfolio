import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { portraits, services, site } from '../data/site'
import { useMouseParallax } from '../hooks/useMouseParallax'

export function Services() {
  const ref = useRef<HTMLElement>(null)
  const parallax = useMouseParallax(10)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} id="services" className="relative overflow-hidden bg-void py-[clamp(4rem,10vw,7rem)]">
      <div className="container-editorial relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.95] text-white uppercase">
                I don&apos;t just write apps.
              </h2>
              <p className="mt-2 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[0.95] text-blood uppercase">
                I build products.
              </p>
              <p className="mt-5 text-[11px] tracking-[0.16em] text-white/45 uppercase">
                / Flutter / Dart / Firebase / Clean Arch
              </p>
            </Reveal>

            {/* Large portrait — video style, repeated image */}
            <motion.div
              style={{ y: imgY, x: parallax.x * 0.4 }}
              className="relative mt-10 hidden max-w-md lg:block"
            >
              <img
                src={portraits.services}
                alt={site.name}
                className="w-full object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%),linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
              />
            </motion.div>
          </div>

          <div className="relative z-10">
            {/* Mobile portrait */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:hidden"
            >
              <img
                src={portraits.services}
                alt=""
                className="mx-auto max-h-[320px] w-auto object-cover [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
              />
            </motion.div>

            <ul className="divide-y divide-white/10 border-y border-white/10">
              {services.map((item, i) => (
                <motion.li
                  key={item.num}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-8%' }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="group flex gap-5 py-6"
                >
                  <span className="font-display text-2xl text-blood">{item.num}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-bold tracking-[0.16em] text-white uppercase">
                        {item.title}
                      </h3>
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-blood opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 font-serif text-xl italic text-blood">{site.name}</p>
            <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">{site.shortRole}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
