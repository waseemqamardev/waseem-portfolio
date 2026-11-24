import { motion } from 'framer-motion'
import { skillGroups } from '../data/site'
import { Reveal } from '../components/Reveal'

export function Skills() {
  return (
    <section id="skills" className="bg-ink py-[clamp(4rem,9vw,6.5rem)]">
      <div className="container-editorial">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] text-white uppercase">
            Technical <span className="text-blood">stack.</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border-b border-white/10 pb-8"
            >
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-blood uppercase">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                {group.items.join('  ·  ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
