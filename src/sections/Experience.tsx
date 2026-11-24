import { PremiumCard } from '../components/PremiumCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/site'
import { fadeUp } from '../lib/motion'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built and shipped"
        />

        <ol className="relative space-y-5 border-l border-pearl/10 pl-6 md:pl-8">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              as="li"
              className="relative"
              variants={fadeUp}
              delay={i * 0.05}
            >
              <span
                className="absolute top-5 -left-[1.9rem] size-2.5 rounded-full bg-gradient-to-br from-champagne to-ice shadow-[0_0_12px_rgba(255,122,184,0.7)] md:-left-[2.2rem]"
                aria-hidden
              />
              <PremiumCard className="rounded-2xl">
                <article className="p-5 md:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-2xl text-pearl">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-champagne">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-ice">
                    {job.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-mist"
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-champagne/70"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </PremiumCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
