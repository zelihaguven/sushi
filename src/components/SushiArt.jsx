function Face({ x, y, mood = 'happy', scale = 1 }) {
  const s = scale
  if (mood === 'wink') {
    return (
      <g transform={`translate(${x} ${y}) scale(${s})`}>
        <circle cx="-18" cy="10" r="7" fill="#FF6F59" opacity="0.45" />
        <circle cx="18" cy="10" r="7" fill="#FF6F59" opacity="0.45" />
        <path
          d="M-24 -8 L-8 0 L-24 8"
          fill="none"
          stroke="#141A17"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 -8 L8 0 L24 8"
          fill="none"
          stroke="#141A17"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M-8 14 C -2 22, 2 22, 8 14" fill="none" stroke="#141A17" strokeWidth="3.2" strokeLinecap="round" />
      </g>
    )
  }

  if (mood === 'closed') {
    return (
      <g transform={`translate(${x} ${y}) scale(${s})`}>
        <circle cx="-18" cy="8" r="7" fill="#FF6F59" opacity="0.4" />
        <circle cx="18" cy="8" r="7" fill="#FF6F59" opacity="0.4" />
        <path d="M-24 -2 C -18 -10, -10 -10, -6 -2" fill="none" stroke="#141A17" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M6 -2 C 10 -10, 18 -10, 24 -2" fill="none" stroke="#141A17" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M-6 12 C -1 18, 1 18, 6 12" fill="none" stroke="#141A17" strokeWidth="3.2" strokeLinecap="round" />
      </g>
    )
  }

  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="-18" cy="8" r="7" fill="#FF6F59" opacity="0.45" />
      <circle cx="18" cy="8" r="7" fill="#FF6F59" opacity="0.45" />
      <circle cx="-12" cy="-4" r="6.5" fill="#141A17" />
      <circle cx="12" cy="-4" r="6.5" fill="#141A17" />
      <circle cx="-14" cy="-6" r="2.2" fill="#FCF8F2" />
      <circle cx="10" cy="-6" r="2.2" fill="#FCF8F2" />
      <path d="M-8 10 C -2 18, 2 18, 8 10" fill="none" stroke="#141A17" strokeWidth="3.2" strokeLinecap="round" />
    </g>
  )
}

function Plate({ children }) {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" aria-hidden="true">
      <ellipse cx="120" cy="186" rx="88" ry="10" fill="#141A17" opacity="0.28" />
      <ellipse cx="120" cy="176" rx="96" ry="16" fill="#FCF8F2" stroke="#141A17" strokeWidth="4" />
      <ellipse cx="120" cy="172" rx="70" ry="8" fill="#fff" opacity="0.35" />
      {children}
    </svg>
  )
}

function SalmonNigiri() {
  return (
    <Plate>
      <ellipse cx="120" cy="128" rx="72" ry="40" fill="#FCF8F2" stroke="#141A17" strokeWidth="5" />
      <ellipse cx="98" cy="118" rx="10" ry="7" fill="#fff" opacity="0.55" />
      <path
        d="M52 118 C 62 72, 178 68, 188 118 C 176 148, 64 152, 52 118Z"
        fill="#FF6F59"
        stroke="#141A17"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M70 108 C 110 92, 150 92, 170 110" fill="none" stroke="#ffb3a6" strokeWidth="4" strokeLinecap="round" />
      <path d="M76 122 C 112 110, 148 110, 166 122" fill="none" stroke="#e45a46" strokeWidth="2.4" opacity="0.55" />
      <Face x={120} y={108} mood="wink" scale={0.95} />
    </Plate>
  )
}

function IkuraGunkan() {
  return (
    <Plate>
      <rect x="64" y="78" width="112" height="86" rx="28" fill="#141A17" stroke="#0C100E" strokeWidth="5" />
      <rect x="74" y="86" width="92" height="52" rx="18" fill="#FCF8F2" />
      {[
        [96, 102],
        [120, 94],
        [144, 104],
        [108, 116],
        [132, 118],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="11" fill="#FF6F59" stroke="#141A17" strokeWidth="2.4" />
          <circle cx={x - 3} cy={y - 3} r="3.2" fill="#ffd2a8" />
        </g>
      ))}
      <Face x={120} y={148} mood="happy" scale={0.78} />
    </Plate>
  )
}

function SpicyTemaki() {
  return (
    <Plate>
      <path
        d="M120 38 L196 150 Q120 178 44 150 Z"
        fill="#141A17"
        stroke="#0C100E"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M120 58 L172 140 Q120 158 68 140 Z" fill="#FCF8F2" />
      <path d="M108 86 L148 132 L96 132 Z" fill="#FF6F59" />
      <ellipse cx="118" cy="108" rx="12" ry="9" fill="#CADB66" stroke="#141A17" strokeWidth="2" />
      <ellipse cx="132" cy="120" rx="8" ry="6" fill="#8E1C24" />
      <Face x={120} y={142} mood="closed" scale={0.82} />
    </Plate>
  )
}

export function WasabiBuddy() {
  return (
    <svg viewBox="0 0 72 72" className="h-11 w-11" aria-hidden="true">
      <ellipse cx="36" cy="66" rx="16" ry="4" fill="#141A17" opacity="0.2" />
      <path
        d="M36 8 C 18 10, 8 28, 12 46 C 16 62, 56 62, 60 46 C 64 28, 54 8, 36 8Z"
        fill="#CADB66"
        stroke="#141A17"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M28 6 C 30 -2, 34 -4, 36 4" fill="none" stroke="#141A17" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="40" r="5" fill="#FF6F59" opacity="0.4" />
      <circle cx="48" cy="40" r="5" fill="#FF6F59" opacity="0.4" />
      <circle cx="28" cy="34" r="4.5" fill="#141A17" />
      <circle cx="44" cy="34" r="4.5" fill="#141A17" />
      <circle cx="27" cy="32.5" r="1.5" fill="#FCF8F2" />
      <circle cx="43" cy="32.5" r="1.5" fill="#FCF8F2" />
      <path d="M32 44 C 35 48, 39 48, 42 44" fill="none" stroke="#141A17" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

export function GingerBuddy() {
  return (
    <svg viewBox="0 0 72 36" className="mt-1 h-6 w-12" aria-hidden="true">
      <ellipse cx="36" cy="18" rx="30" ry="14" fill="#FF6F59" stroke="#141A17" strokeWidth="3.5" />
      <path d="M24 16 C 27 12, 31 12, 34 16" fill="none" stroke="#141A17" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M40 16 C 43 12, 47 12, 50 16" fill="none" stroke="#141A17" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M32 22 C 35 25, 39 25, 42 22" fill="none" stroke="#141A17" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export default function SushiArt({ cut = 'nigiri' }) {
  if (cut === 'gunkan') return <IkuraGunkan />
  if (cut === 'temaki') return <SpicyTemaki />
  return <SalmonNigiri />
}
