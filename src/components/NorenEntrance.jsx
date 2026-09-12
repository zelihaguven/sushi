export function NorenEntrance() {
  return (
    <svg viewBox="0 0 720 860" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="noren-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCF8F2" />
          <stop offset="45%" stopColor="#CADB66" />
          <stop offset="100%" stopColor="#6b4a1e" />
        </linearGradient>
        <linearGradient id="noren-cloth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8E1C24" />
          <stop offset="55%" stopColor="#8E1C24" />
          <stop offset="100%" stopColor="#8E1C24" />
        </linearGradient>
      </defs>

      <rect x="48" y="72" width="624" height="28" rx="4" fill="url(#noren-wood)" />
      <rect x="56" y="96" width="608" height="10" fill="#8E1C24" />

      {Array.from({ length: 8 }).map((_, i) => {
        const x = 64 + i * 74
        return (
          <g key={i}>
            <rect x={x} y="108" width="68" height="620" rx="0" ry="28" fill="url(#noren-cloth)" />
            <rect x={x} y="108" width="68" height="620" rx="0" ry="28" fill="#141A17" opacity={i % 2 ? 0.12 : 0.04} />
            <rect x={x + 60} y="108" width="8" height="620" fill="#141A17" opacity="0.28" />
            {i === 3 && (
              <text x={x + 34} y="520" textAnchor="middle" fill="#CADB66" fontSize="42" fontFamily="Noto Serif JP, serif">
                鮨
              </text>
            )}
          </g>
        )
      })}

      <rect x="40" y="728" width="640" height="22" fill="#4a2418" />
      <rect x="40" y="748" width="640" height="72" fill="#3a160e" />
      {Array.from({ length: 18 }).map((_, i) => (
        <rect key={i} x={48 + i * 35} y="748" width="10" height="72" fill="#5a2c1c" opacity="0.55" />
      ))}
      <rect x="40" y="742" width="640" height="6" fill="#CADB66" opacity="0.7" />
    </svg>
  )
}

export function OpeningNoren({ progress }) {
  const open = Math.max(0, Math.min(1, progress))
  const shift = open * 58
  const opacity = 1 - open * 0.92

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#141A17] via-[#141A17]/80 to-transparent"
        style={{ opacity, transform: `translate3d(${-shift}%, 0, 0)` }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#141A17] via-[#141A17]/80 to-transparent"
        style={{ opacity, transform: `translate3d(${shift}%, 0, 0)` }}
      />
    </div>
  )
}

export function SteamSpores({ progress }) {
  const lift = progress * 70
  const opacity = 0.18 + progress * 0.45

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="steam absolute"
          style={{
            left: `${8 + ((i * 17) % 84)}%`,
            bottom: `${10 + ((i * 11) % 40)}%`,
            width: 10 + (i % 5) * 4,
            height: 28 + (i % 4) * 8,
            opacity,
            transform: `translate3d(0, ${-lift}px, 0)`,
            animationDelay: `${(i % 6) * 0.4}s`,
          }}
        />
      ))}
    </div>
  )
}
