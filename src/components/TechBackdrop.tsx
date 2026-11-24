export function TechBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 circuit-grid opacity-[0.35]" />
      <div className="absolute inset-0 hex-fade opacity-[0.2]" />
      <div className="scanlines absolute inset-0 opacity-[0.07]" />
      <div className="absolute top-[12%] left-[4%] hidden h-28 w-28 border border-ice/20 lg:block">
        <span className="absolute -top-px -left-px size-2 bg-ice/70" />
        <span className="absolute -top-px -right-px size-2 bg-champagne/70" />
        <span className="absolute -bottom-px -left-px size-2 bg-orchid/70" />
        <span className="absolute -right-px -bottom-px size-2 bg-ice/70" />
      </div>
      <div className="absolute right-[5%] bottom-[18%] hidden h-20 w-36 border border-champagne/15 lg:block">
        <span className="absolute top-2 left-2 font-mono text-[9px] tracking-[0.2em] text-ice/50 uppercase">
          node // 0xAF
        </span>
      </div>
    </div>
  )
}
