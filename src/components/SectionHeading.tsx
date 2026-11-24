import { fadeUp } from '../lib/motion'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16" variants={fadeUp}>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-6 bg-gradient-to-r from-ice to-transparent" aria-hidden />
        <p className="font-mono text-[11px] font-semibold tracking-[0.32em] text-ice uppercase">
          {`// ${eyebrow}`}
        </p>
      </div>
      <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-pearl sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
