export function HeroNoren() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-14 z-[12]" aria-hidden="true">
      <div className="mx-auto h-1.5 max-w-5xl bg-gradient-to-r from-transparent via-[#8E1C24] to-transparent" />
      <div className="mx-auto flex h-16 max-w-5xl gap-[2px] px-8 sm:h-20">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className="noren-sway h-full flex-1 rounded-b-[18px] bg-[#8E1C24] shadow-[inset_-8px_0_12px_rgba(0,0,0,0.28)]"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
    </div>
  )
}
