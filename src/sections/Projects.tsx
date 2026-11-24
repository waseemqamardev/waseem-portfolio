import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal, RevealGroup } from '../components/Reveal'
import { TiltCard } from '../components/TiltCard'
import { projects, type Project } from '../data/site'
import { cardIn } from '../lib/motion'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const featured = projects.slice(0, 4)
  const rest = projects.slice(4)

  return (
    <section id="projects" className="relative overflow-hidden bg-ink py-[clamp(4.5rem,11vw,8rem)]">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.95] text-white uppercase">
              Don&apos;t take my word
            </h2>
            <p className="font-display mt-1 text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.95] text-blood uppercase">
              for it.
            </p>
            <p className="font-serif mt-5 text-lg text-white/70 italic">
              The work speaks — tap a project for highlights.
            </p>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2 [perspective:1400px]">
            {featured.map((project) => (
              <motion.div key={project.title} variants={cardIn}>
                <TiltCard className="h-full">
                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className="group flex h-full w-full flex-col border border-white/12 bg-void p-5 text-left transition hover:border-blood/60"
                  >
                    <div className="mb-4 aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="font-serif text-3xl leading-none text-blood">&ldquo;</p>
                    <h3 className="mt-1 text-sm font-bold tracking-[0.14em] text-white uppercase">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
                      {project.description}
                    </p>
                    <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-blood uppercase">
                      {project.subtitle} · View
                    </p>
                  </button>
                </TiltCard>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        {rest.length > 0 ? (
          <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px]">
            {rest.map((project) => (
              <motion.div key={project.title} variants={cardIn}>
                <TiltCard className="h-full">
                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className="group h-full w-full overflow-hidden border border-white/10 bg-void text-left transition hover:border-blood/50"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
                        {project.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-mist">{project.description}</p>
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            ))}
          </RevealGroup>
        ) : null}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
