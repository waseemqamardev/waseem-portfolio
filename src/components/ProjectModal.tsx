import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../data/site'

type Props = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-white/12 bg-void"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-elevated">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 flex size-9 items-center justify-center bg-ink/80 text-white"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-blood uppercase">
                {project.subtitle}
              </p>
              <h3
                id="project-modal-title"
                className="mt-2 font-display text-3xl text-white uppercase md:text-4xl"
              >
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">
                {project.description}
              </p>

              <h4 className="mt-8 text-[11px] font-bold tracking-[0.18em] text-white uppercase">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-mist">
                    <span className="mt-2 size-1.5 shrink-0 bg-blood" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/15 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link.href}
                  className="mt-8 inline-flex items-center gap-2 bg-blood px-5 py-3 text-[11px] font-bold tracking-[0.18em] text-white uppercase transition hover:bg-blood-dim"
                >
                  {project.link.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
