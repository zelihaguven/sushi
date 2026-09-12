function clamp01(value) {
  return Math.max(0, Math.min(1, value))
}

const SPORE_DOTS = Array.from({ length: 36 }, (_, i) => ({
  left: `${(i * 29) % 94}%`,
  top: `${(i * 47) % 90}%`,
  size: 3 + (i % 5),
  delay: `${(i % 8) * 0.35}s`,
}))

const SPORE_TRACES = [
  'M 12 78 L 28 62 L 44 70 L 61 40 L 78 48',
  'M 18 30 L 36 22 L 52 36 L 70 18',
  'M 8 50 L 22 44 L 40 52',
]

function VineArt() {
  return (
    <>
      <path d="M36 900 C 18 680, 86 520, 22 340 S 78 120, 40 -20" fill="none" stroke="#8E1C24" strokeWidth="7" />
      <path d="M92 910 C 140 700, 48 510, 128 320 S 70 110, 110 0" fill="none" stroke="#8E1C24" strokeWidth="5.5" />
      <path d="M154 900 C 190 640, 120 470, 176 280 S 130 90, 168 10" fill="none" stroke="#4a1014" strokeWidth="4" />
      <path d="M64 900 C 40 740, 96 610, 58 470" fill="none" stroke="#CADB66" strokeWidth="2.2" opacity="0.7" />

      <path d="M28 620 C 8 560, -10 500, 24 448 C 48 500, 44 560, 28 620Z" fill="#8E1C24" />
      <path d="M118 540 C 86 490, 74 430, 122 390 C 150 450, 146 510, 118 540Z" fill="#8E1C24" />
      <path d="M168 430 C 148 390, 136 340, 176 310 C 196 360, 190 410, 168 430Z" fill="#8E1C24" />
      <path d="M46 300 C 18 250, 8 190, 52 150 C 78 210, 72 270, 46 300Z" fill="#8E1C24" />
      <path d="M132 210 C 110 170, 104 120, 146 88 C 168 140, 160 190, 132 210Z" fill="#8E1C24" />
      <path d="M14 780 C -8 730, -16 680, 22 640 C 42 700, 36 750, 14 780Z" fill="#8E1C24" />

      <g transform="translate(72 368)">
        <ellipse cy="-30" rx="8" ry="18" fill="#FCF8F2" />
        <ellipse cy="-30" rx="8" ry="18" fill="#FCF8F2" transform="rotate(45)" />
        <ellipse cy="-30" rx="8" ry="18" fill="#FCF8F2" transform="rotate(90)" />
        <ellipse cy="-30" rx="8" ry="18" fill="#FCF8F2" transform="rotate(135)" />
        <circle r="7" fill="#CADB66" />
      </g>
      <g transform="translate(48 248)">
        <ellipse cy="-26" rx="7" ry="16" fill="#FCF8F2" />
        <ellipse cy="-26" rx="7" ry="16" fill="#FCF8F2" transform="rotate(40)" />
        <ellipse cy="-26" rx="7" ry="16" fill="#FCF8F2" transform="rotate(80)" />
        <ellipse cy="-26" rx="7" ry="16" fill="#FCF8F2" transform="rotate(120)" />
        <circle r="6" fill="#CADB66" />
      </g>
      <g transform="translate(160 300)">
        <path d="M0 12 C-14 2 -12 -22 0 -34 C12 -22 14 2 0 12Z" fill="#8E1C24" />
        <path d="M0 12 C-5 -2 0 -26 0 -34 C0 -26 5 -2 0 12Z" fill="#8E1C24" />
      </g>
      <g transform="translate(24 150)">
        <path d="M0 10 C-12 0 -10 -20 0 -30 C10 -20 12 0 0 10Z" fill="#8E1C24" />
      </g>
      <g transform="translate(220 520)">
        <ellipse cy="-28" rx="7" ry="16" fill="#FCF8F2" />
        <ellipse cy="-28" rx="7" ry="16" fill="#FCF8F2" transform="rotate(45)" />
        <ellipse cy="-28" rx="7" ry="16" fill="#FCF8F2" transform="rotate(90)" />
        <ellipse cy="-28" rx="7" ry="16" fill="#FCF8F2" transform="rotate(135)" />
        <circle r="6" fill="#CADB66" />
      </g>
      <g transform="translate(250 240)">
        <path d="M0 10 C-12 0 -10 -20 0 -30 C10 -20 12 0 0 10Z" fill="#8E1C24" />
      </g>
      <path d="M86 470 C 120 430, 150 410, 168 360" fill="none" stroke="#CADB66" strokeWidth="2" />
      <circle cx="170" cy="356" r="5" fill="#CADB66" />
    </>
  )
}

export function GreenhouseArch() {
  return (
    <svg viewBox="0 0 720 860" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="brass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e2a8" />
          <stop offset="45%" stopColor="#CADB66" />
          <stop offset="100%" stopColor="#7a5a22" />
        </linearGradient>
        <radialGradient id="glass" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#4a1810" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#2a0a0c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#141A17" stopOpacity="0.15" />
        </radialGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCF8F2" stopOpacity="0.16" />
          <stop offset="38%" stopColor="#CADB66" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#141A17" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d="M78 828 L78 384 Q78 56 360 56 Q642 56 642 384 L642 828Z" fill="url(#glass)" />
      <path d="M78 828 L78 384 Q78 56 360 56 Q642 56 642 384 L642 828Z" fill="url(#sheen)" />

      <g opacity="0.55">
        <path d="M140 828 C 160 640, 110 520, 190 430 S 150 300, 210 828" fill="#1a0708" />
        <path d="M520 828 C 500 620, 560 500, 470 390 S 540 280, 500 828" fill="#141A17" />
        <ellipse cx="250" cy="760" rx="40" ry="70" fill="#1e0a0c" />
        <ellipse cx="470" cy="770" rx="36" ry="62" fill="#1e0a0c" />
      </g>

      <path
        d="M90 820 L90 390 Q90 70 360 70 Q630 70 630 390 L630 820"
        fill="none"
        stroke="url(#brass)"
        strokeWidth="14"
      />
      <path
        d="M118 808 L118 390 Q118 102 360 102 Q602 102 602 390 L602 808"
        fill="none"
        stroke="#CADB66"
        strokeOpacity="0.38"
        strokeWidth="2"
      />

      <line x1="360" y1="102" x2="360" y2="808" stroke="#CADB66" strokeOpacity="0.28" strokeWidth="2.4" />
      <line x1="118" y1="390" x2="602" y2="390" stroke="#CADB66" strokeOpacity="0.28" strokeWidth="2.4" />
      <line x1="200" y1="128" x2="200" y2="808" stroke="#CADB66" strokeOpacity="0.14" strokeWidth="1.5" />
      <line x1="520" y1="128" x2="520" y2="808" stroke="#CADB66" strokeOpacity="0.14" strokeWidth="1.5" />
      <line x1="118" y1="560" x2="602" y2="560" stroke="#CADB66" strokeOpacity="0.14" strokeWidth="1.5" />
      <line x1="118" y1="230" x2="602" y2="230" stroke="#CADB66" strokeOpacity="0.1" strokeWidth="1.2" />

      <g fill="#8E1C24" opacity="0.9">
        <ellipse cx="118" cy="210" rx="11" ry="18" transform="rotate(-28 118 210)" />
        <ellipse cx="150" cy="140" rx="10" ry="16" transform="rotate(-10 150 140)" />
        <ellipse cx="230" cy="92" rx="9" ry="15" transform="rotate(18 230 92)" />
        <ellipse cx="490" cy="92" rx="9" ry="15" transform="rotate(-18 490 92)" />
        <ellipse cx="570" cy="140" rx="10" ry="16" transform="rotate(12 570 140)" />
        <ellipse cx="602" cy="210" rx="11" ry="18" transform="rotate(28 602 210)" />
      </g>
      <circle cx="200" cy="118" r="4" fill="#CADB66" />
      <circle cx="520" cy="118" r="4" fill="#CADB66" />

      <rect x="52" y="808" width="616" height="36" rx="5" fill="#4a1014" />
      <rect x="52" y="808" width="616" height="9" fill="#CADB66" opacity="0.62" />
      <rect x="52" y="832" width="616" height="8" fill="#CADB66" opacity="0.45" />
    </svg>
  )
}

export function OpeningVines({ progress }) {
  const open = clamp01(progress)
  const shift = 8 - open * 78
  const opacity = 1 - open * 0.88

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute bottom-0 left-0 h-full w-[min(42vw,520px)]"
        viewBox="0 0 320 900"
        style={{ opacity, transform: `translate3d(${shift}%, 0, 0)` }}
      >
        <VineArt />
      </svg>
      <svg
        className="absolute bottom-0 right-0 h-full w-[min(42vw,520px)]"
        viewBox="0 0 320 900"
        style={{ opacity, transform: `translate3d(${-shift}%, 0, 0) scaleX(-1)` }}
      >
        <VineArt />
      </svg>
    </div>
  )
}

export function Spores({ progress }) {
  const lift = progress * 80
  const opacity = 0.12 + progress * 0.7

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: opacity * 0.45, transform: `translate3d(0, ${-lift * 0.35}px, 0)` }}
      >
        {SPORE_TRACES.map((d) => (
          <path key={d} d={d} fill="none" stroke="#CADB66" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {SPORE_DOTS.map((dot) => (
        <span
          key={`${dot.left}-${dot.top}`}
          className="absolute"
          style={{
            left: dot.left,
            top: dot.top,
            opacity,
            transform: `translate3d(0, ${-lift}px, 0)`,
          }}
        >
          <span
            className="spore block rounded-full bg-[#CADB66] shadow-[0_0_10px_rgba(212,225,87,0.8)]"
            style={{
              width: dot.size,
              height: dot.size,
              animationDelay: dot.delay,
            }}
          />
        </span>
      ))}
    </div>
  )
}

export function DeskBlooms({ progress }) {
  const t = clamp01((progress - 0.62) / 0.32)
  if (t <= 0.01) return null
  const s = 0.35 + t * 0.65

  return (
    <svg
      className="pointer-events-none absolute -bottom-4 left-1/2 z-20 h-52 w-[min(860px,96%)] -translate-x-1/2"
      viewBox="0 0 860 200"
      aria-hidden="true"
    >
      <g transform={`translate(70 188) scale(${s})`}>
        <path d="M0 0 C -8 -52, 14 -92, 0 -124" fill="none" stroke="#8E1C24" strokeWidth="4" />
        <path d="M0 -124 C -18 -108, -16 -80, 0 -66 C 16 -80, 18 -108, 0 -124" fill="#8E1C24" />
      </g>
      <g transform={`translate(150 196) scale(${s})`}>
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" />
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" transform="rotate(45)" />
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" transform="rotate(90)" />
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" transform="rotate(135)" />
        <circle r="7" fill="#CADB66" />
      </g>
      <g transform={`translate(230 198) scale(${s})`}>
        <path d="M0 0 C 18 -22, 36 -10, 8 12" fill="#CADB66" />
      </g>
      <g transform={`translate(430 200) scale(${s})`}>
        <ellipse cy="-30" rx="7" ry="16" fill="#FCF8F2" />
        <ellipse cy="-30" rx="7" ry="16" fill="#FCF8F2" transform="rotate(45)" />
        <ellipse cy="-30" rx="7" ry="16" fill="#FCF8F2" transform="rotate(90)" />
        <ellipse cy="-30" rx="7" ry="16" fill="#FCF8F2" transform="rotate(135)" />
        <circle r="6" fill="#CADB66" />
      </g>
      <g transform={`translate(630 198) scale(${s})`}>
        <path d="M0 0 C -20 -18, -38 -6, -6 12" fill="#CADB66" />
      </g>
      <g transform={`translate(710 196) scale(${s})`}>
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" />
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" transform="rotate(45)" />
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" transform="rotate(90)" />
        <ellipse cy="-34" rx="8" ry="18" fill="#FCF8F2" transform="rotate(135)" />
        <circle r="7" fill="#CADB66" />
      </g>
      <g transform={`translate(790 188) scale(${s})`}>
        <path d="M0 0 C 10 -56, -12 -96, 0 -128" fill="none" stroke="#8E1C24" strokeWidth="4" />
        <path d="M0 -128 C -20 -110, -14 -82, 0 -68 C 14 -82, 20 -110, 0 -128" fill="#8E1C24" />
      </g>
    </svg>
  )
}

export function BrassLamp() {
  return (
    <div className="pointer-events-none absolute -top-6 left-[9%] z-20 hidden sm:block" aria-hidden="true">
      <div className="lamp-glow absolute -left-10 -top-8 h-48 w-48 rounded-full" />
      <svg width="110" height="132" viewBox="0 0 110 132">
        <ellipse cx="55" cy="122" rx="28" ry="7" fill="#6b4a1e" />
        <rect x="51" y="64" width="8" height="58" rx="1.5" fill="#CADB66" />
        <rect x="48" y="60" width="14" height="8" rx="2" fill="#FCF8F2" />
        <path d="M18 62 C 18 28, 92 28, 92 62 L 84 62 C 84 40, 26 40, 26 62Z" fill="#FCF8F2" />
        <path d="M26 62 C 26 44, 84 44, 84 62" fill="#CADB66" opacity="0.22" />
        <path d="M34 62 C 40 78, 70 78, 76 62" fill="#f0e2a8" opacity="0.35" />
        <circle cx="55" cy="58" r="3" fill="#8E1C24" />
      </svg>
    </div>
  )
}
