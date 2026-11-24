/** White wireframe doodles — Enver-style geometric accents */
export function GeoDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* zigzag */}
      <svg className="absolute top-[18%] left-[42%] w-24 opacity-70 md:w-32" viewBox="0 0 120 28" fill="none">
        <path
          d="M2 20 L18 6 L34 20 L50 6 L66 20 L82 6 L98 20 L114 6"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* triangle outline */}
      <svg className="absolute top-[12%] right-[8%] w-10 opacity-50 md:w-14" viewBox="0 0 40 40" fill="none">
        <path d="M20 4 L36 34 H4 Z" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* concentric circles */}
      <svg className="absolute bottom-[22%] left-[6%] w-16 opacity-40 md:w-24" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="1.2" />
        <circle cx="40" cy="40" r="18" stroke="white" strokeWidth="1.2" />
        <circle cx="40" cy="40" r="8" stroke="white" strokeWidth="1.2" />
      </svg>

      {/* plus */}
      <svg className="absolute top-[55%] right-[18%] w-8 opacity-60" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v18M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* small dots */}
      <span className="absolute top-[30%] left-[12%] size-1.5 rounded-full bg-white/70" />
      <span className="absolute top-[70%] right-[30%] size-1 rounded-full bg-white/50" />
      <span className="absolute bottom-[18%] right-[10%] size-2 rounded-full bg-white/40" />
    </div>
  )
}
