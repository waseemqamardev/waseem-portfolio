import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-[2] border-t border-pearl/8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-mist md:flex-row md:px-8">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="text-xs tracking-[0.18em] text-mist/70 uppercase">
          Flutter · Dart · Cross-platform
        </p>
      </div>
    </footer>
  )
}
