import { PremiumCard } from '../components/PremiumCard'
import { Reveal, RevealGroup } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/site'
import { fadeUp } from '../lib/motion'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected product work"
          description="Apps spanning e-commerce, fintech, healthcare, workforce, and more — descriptions taken from my CV."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title} variants={fadeUp}>
              <PremiumCard className="h-full rounded-2xl">
                <div className="group relative overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.subtitle} app mockup`}
                      className="size-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="p-5">
                    <p className="bg-gradient-to-r from-champagne to-ice bg-clip-text text-[11px] font-semibold tracking-[0.22em] text-transparent uppercase">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-pearl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-pearl/10 bg-ink/40 px-2.5 py-1 text-[11px] text-mist"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </PremiumCard>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
