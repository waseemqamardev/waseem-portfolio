import { motion } from 'framer-motion'
import { experience } from '../data/site'
import { Reveal } from '../components/Reveal'

export function Experience() {
  return (
    <section id="experience" className="bg-void py-[clamp(4rem,10vw,7rem)]">
      <div className="container-editorial">
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[0.95] text-white uppercase">
            Where I&apos;ve <span className="text-blood">shipped.</span>
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-4 py-8 md:grid-cols-[210px_1fr]"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-blood uppercase">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-mist">{job.company}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-wide text-white uppercase">
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="mt-2 size-1.5 shrink-0 bg-blood" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
