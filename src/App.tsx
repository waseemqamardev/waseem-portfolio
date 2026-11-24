import { CursorSpotlight } from './components/CursorSpotlight'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { TechBackdrop } from './components/TechBackdrop'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <div className="mesh-bg relative min-h-screen">
      <CustomCursor />
      <CursorSpotlight />
      <TechBackdrop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-gradient-to-r focus:from-champagne focus:to-ice focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
