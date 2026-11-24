import { PremiumCard } from '../components/PremiumCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'
import { fadeUp } from '../lib/motion'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="Clean architecture. Shipped products."
          description="A concise look at how I work and what I bring to product teams."
        />

        <Reveal variants={fadeUp}>
          <PremiumCard className="rounded-2xl">
            <div className="relative p-6 md:p-10">
              <p className="max-w-3xl text-base leading-relaxed text-mist md:text-lg">
                {site.summary}
              </p>
              <div className="mt-10 grid gap-px overflow-hidden border border-pearl/10 bg-pearl/10 sm:grid-cols-3">
                {[
                  { label: 'Experience', value: '3+ years' },
                  { label: 'Apps shipped', value: '10+' },
                  { label: 'Focus', value: 'Flutter & Dart' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-void px-5 py-6">
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-mist uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-3xl text-pearl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </PremiumCard>
        </Reveal>
      </div>
    </section>
  )
}
