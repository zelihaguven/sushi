export function KitchenHood() {
  return (
    <svg viewBox="0 0 1200 200" className="w-full" aria-hidden="true">
      <path
        d="M90 188 C 180 36, 1020 36, 1110 188 Z"
        fill="#8E1C24"
        stroke="#141A17"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path d="M210 70 H990" fill="none" stroke="#FCF8F2" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
      {[430, 530, 630, 730].map((x) => (
        <g key={x}>
          <circle cx={x} cy="108" r="16" fill="#CADB66" stroke="#141A17" strokeWidth="4" />
          <circle cx={x - 4} cy="104" r="3" fill="#FCF8F2" />
        </g>
      ))}
    </svg>
  )
}

function CutePan() {
  return (
    <g>
      <rect x="28" y="18" width="164" height="14" rx="7" fill="#CADB66" stroke="#141A17" strokeWidth="4" />
      <path d="M56 32 C 24 70, 24 140, 70 168" fill="none" stroke="#141A17" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="70" cy="118" rx="38" ry="26" fill="#8E1C24" stroke="#141A17" strokeWidth="5" />
      <circle cx="58" cy="112" r="4" fill="#141A17" />
      <circle cx="80" cy="112" r="4" fill="#141A17" />
      <path d="M62 124 C 68 130, 76 130, 82 124" fill="none" stroke="#141A17" strokeWidth="3" strokeLinecap="round" />
      <rect x="128" y="48" width="22" height="88" rx="11" fill="#FCF8F2" stroke="#141A17" strokeWidth="4" />
      <ellipse cx="139" cy="148" rx="20" ry="10" fill="#CADB66" stroke="#141A17" strokeWidth="4" />
    </g>
  )
}

export function UtensilRack() {
  return (
    <svg viewBox="0 0 220 340" className="h-full w-full" aria-hidden="true">
      <CutePan />
    </svg>
  )
}

export function KnifeStrip() {
  return (
    <svg viewBox="0 0 90 280" className="h-full w-full" aria-hidden="true">
      <rect x="36" y="12" width="14" height="250" rx="7" fill="#CADB66" stroke="#141A17" strokeWidth="4" />
      <ellipse cx="44" cy="70" rx="28" ry="22" fill="#FCF8F2" stroke="#141A17" strokeWidth="4" />
      <circle cx="36" cy="68" r="3.5" fill="#141A17" />
      <circle cx="52" cy="68" r="3.5" fill="#141A17" />
      <path d="M38 78 C 42 84, 46 84, 50 78" fill="none" stroke="#141A17" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="44" cy="150" rx="26" ry="20" fill="#FF6F59" stroke="#141A17" strokeWidth="4" />
      <path d="M32 146 C 36 140, 40 140, 44 146" fill="none" stroke="#141A17" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M46 146 C 50 140, 54 140, 58 146" fill="none" stroke="#141A17" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="44" cy="222" rx="24" ry="18" fill="#8E1C24" stroke="#141A17" strokeWidth="4" />
      <circle cx="36" cy="220" r="3" fill="#FCF8F2" />
      <circle cx="50" cy="220" r="3" fill="#FCF8F2" />
    </svg>
  )
}

export function StoveRange() {
  return (
    <svg viewBox="0 0 1100 150" className="w-full" aria-hidden="true">
      <rect x="28" y="28" width="1044" height="104" rx="36" fill="#141A17" stroke="#0C100E" strokeWidth="6" />
      {[180, 390, 600, 810].map((x, i) => (
        <g key={x} transform={`translate(${x} 80)`}>
          <circle r="42" fill="#1A221E" stroke="#CADB66" strokeWidth="5" />
          <circle r="18" fill={i === 1 ? '#FF6F59' : '#2A332C'} />
          {i === 1 && (
            <>
              <circle cx="-8" cy="-4" r="3" fill="#141A17" />
              <circle cx="8" cy="-4" r="3" fill="#141A17" />
              <path d="M-6 8 C -1 14, 1 14, 6 8" fill="none" stroke="#141A17" strokeWidth="2.4" strokeLinecap="round" />
            </>
          )}
        </g>
      ))}
    </svg>
  )
}
