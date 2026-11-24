import { GraduationCap } from 'lucide-react'
import { PremiumCard } from '../components/PremiumCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { education, site } from '../data/site'
import { fadeUp } from '../lib/motion'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <Reveal variants={fadeUp}>
          <PremiumCard className="rounded-2xl">
            <article className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center border border-champagne/30 bg-champagne/10 text-champagne">
                  <GraduationCap size={22} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-pearl">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-mist">{education.school}</p>
                  <p className="mt-3 text-sm text-mist">
                    Languages: {site.languages.join(' · ')}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-champagne sm:text-right">
                {education.period}
              </p>
            </article>
          </PremiumCard>
        </Reveal>
      </div>
    </section>
  )
}
