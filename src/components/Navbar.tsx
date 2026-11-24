import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-pearl/8 bg-ink/75 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          data-cursor="hover"
          className="font-display text-2xl tracking-tight text-pearl"
          onClick={close}
        >
          {site.name.split(' ')[0]}
          <span className="text-ice">.</span>
          <span className="ml-1 hidden font-mono text-[9px] tracking-[0.18em] text-mist/60 uppercase sm:inline">
            ai-core
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="hover"
                className="px-3 py-2 text-[12px] font-medium tracking-wide text-mist transition-colors hover:text-pearl"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="ml-3 inline-flex bg-gradient-to-r from-champagne via-orchid to-ice px-4 py-2 text-[12px] font-semibold text-ink transition hover:brightness-110"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          type="button"
          data-cursor="hover"
          className="inline-flex border border-pearl/15 p-2 text-pearl md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-pearl/8 bg-ink/95 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-3 text-base text-mist hover:bg-white/5 hover:text-pearl"
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block bg-gradient-to-r from-champagne via-orchid to-ice px-4 py-3 text-center text-sm font-semibold text-ink"
                  onClick={close}
                >
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
