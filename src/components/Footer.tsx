import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-8">
      <div className="container-editorial flex flex-col gap-3 text-[11px] tracking-[0.14em] text-white/40 uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Flutter · Dart · Cross-platform</p>
      </div>
    </footer>
  )
}
