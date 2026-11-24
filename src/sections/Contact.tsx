import { Mail, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { MagneticButton } from '../components/MagneticButton'
import { PremiumCard } from '../components/PremiumCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { site } from '../data/site'
import { fadeUp } from '../lib/motion'

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Z" />
    </svg>
  )
}

const links: {
  label: string
  value: string
  href: string
  icon: (props: { size?: number }) => ReactNode
}[] = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: ({ size }) => <Mail size={size} aria-hidden />,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: site.phoneHref,
    icon: ({ size }) => <Phone size={size} aria-hidden />,
  },
  {
    label: 'GitHub',
    value: 'waseemqamardev',
    href: site.social.github,
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'waseem-qamar',
    href: site.social.linkedin,
    icon: LinkedInIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something solid"
          description="Reach out by email or connect on GitHub, LinkedIn, or Fiverr."
        />

        <Reveal variants={fadeUp}>
          <PremiumCard className="rounded-2xl">
            <div className="relative p-6 md:p-10">
              <div className="grid gap-3 sm:grid-cols-2">
                {links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    data-cursor="hover"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-center gap-4 border border-pearl/10 bg-ink/35 p-4 transition hover:border-ice/40 hover:bg-gradient-to-r hover:from-champagne/10 hover:to-ice/10"
                  >
                    <span className="flex size-11 items-center justify-center border border-pearl/10 bg-white/5 text-ice transition group-hover:border-champagne/50 group-hover:text-champagne">
                      <item.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold tracking-[0.18em] text-mist uppercase">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-pearl">
                        {item.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton
                  href={`mailto:${site.email}?subject=Project%20inquiry%20—%20${encodeURIComponent(site.name)}`}
                >
                  Email me
                </MagneticButton>
                <MagneticButton href={site.social.fiverr} variant="ghost" external>
                  Fiverr profile
                </MagneticButton>
              </div>
            </div>
          </PremiumCard>
        </Reveal>
      </div>
    </section>
  )
}
