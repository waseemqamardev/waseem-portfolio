import { education, site } from '../data/site'
import { Reveal } from '../components/Reveal'

export function Education() {
  return (
    <section id="education" className="bg-void py-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="container-editorial">
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.8rem)] text-white uppercase">
            {education.degree}
          </h2>
          <p className="mt-3 text-lg text-mist">{education.school}</p>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.2em] text-blood uppercase">
            {education.period}
          </p>
          <p className="mt-5 text-sm text-mist">Languages: {site.languages.join(' · ')}</p>
        </Reveal>
      </div>
    </section>
  )
}
