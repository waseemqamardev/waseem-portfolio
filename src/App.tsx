import { CursorSpotlight } from './components/CursorSpotlight'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageLoader } from './components/PageLoader'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Pitch } from './sections/Pitch'
import { Process } from './sections/Process'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <div className="mesh-bg relative min-h-screen">
      <PageLoader />
      <CustomCursor />
      <CursorSpotlight />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-blood focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-[2]">
        <Hero />
        <About />
        <Services />
        <Pitch />
        <Process />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
