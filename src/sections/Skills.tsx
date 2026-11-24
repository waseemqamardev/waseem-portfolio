import { PremiumCard } from '../components/PremiumCard'
import { Reveal, RevealGroup } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/site'
import { fadeUp } from '../lib/motion'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Grouped by how I use them day to day — from Flutter cores to delivery workflow."
        />

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.title} variants={fadeUp}>
              <PremiumCard className="h-full rounded-2xl">
                <div className="p-5 md:p-6">
                  <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-champagne via-orchid to-ice" />
                  <h3 className="font-display text-2xl text-pearl">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-pearl/10 bg-ink/40 px-2.5 py-1.5 text-xs text-mist"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
