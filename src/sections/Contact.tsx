import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, RevealGroup } from '../components/Reveal'
import { TiltCard } from '../components/TiltCard'
import { site } from '../data/site'
import { cardIn } from '../lib/motion'

export function Contact() {
  const links = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Phone', value: site.phone, href: site.phoneHref },
    { label: 'GitHub', value: 'waseemqamardev', href: site.social.github },
    { label: 'LinkedIn', value: 'waseem-qamar', href: site.social.linkedin },
    { label: 'Fiverr', value: 'pro_qamar', href: site.social.fiverr },
  ]

  return (
    <section id="contact" className="bg-ink">
      <div className="container-editorial py-[clamp(4rem,10vw,7rem)]">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] text-white uppercase">
            Ready when <span className="text-blood">you are.</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
          {links.map((item) => (
            <motion.div key={item.label} variants={cardIn}>
              <TiltCard className="h-full">
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex h-full items-start justify-between gap-4 border border-white/10 bg-void p-5 transition hover:border-blood"
                >
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-blood uppercase">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-white">{item.value}</p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-white/30 group-hover:text-blood" />
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
