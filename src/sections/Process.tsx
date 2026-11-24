import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { portraits, processSteps, site } from '../data/site'

export function Process() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -80])

  return (
    <section ref={ref} id="process" className="relative overflow-hidden bg-void py-[clamp(4.5rem,11vw,8rem)]">
      <div className="container-editorial">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-white/40 uppercase">
                03 — Process
              </p>
              <p className="max-w-md font-serif text-2xl leading-snug text-white md:text-3xl">
                You bring the idea.{' '}
                <span className="italic text-blood">I&apos;ll bring the build.</span>
              </p>
            </Reveal>

            <ol className="relative mt-12">
              <div
                aria-hidden
                className="absolute top-4 bottom-4 left-[15px] w-px bg-white/15"
              />
              {processSteps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-5 py-3.5"
                >
                  <span className="relative z-10 mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-void text-[10px] font-bold text-blood">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 border border-white/12 bg-ink/40 px-5 py-4 backdrop-blur-sm">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-blood uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.div style={{ y: imgY }} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src={portraits.process}
              alt={site.name}
              className="w-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%),linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
