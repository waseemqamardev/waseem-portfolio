import { fadeUp } from '../lib/motion'
import { Reveal } from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <Reveal
      className={`mb-10 md:mb-14 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
      variants={fadeUp}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-violet-soft">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight font-bold text-pearl sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-mist ${center ? 'mx-auto max-w-xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
