function Lantern({ x, delay, scale = 1 }) {
  return (
    <g transform={`translate(${x} 0) scale(${scale})`} style={{ animationDelay: delay }}>
      <line x1="28" y1="0" x2="28" y2="36" stroke="#CADB66" strokeWidth="2" />
      <rect x="8" y="36" width="40" height="52" rx="6" fill="#8E1C24" />
      <rect x="12" y="42" width="32" height="40" rx="4" fill="#CADB66" opacity="0.22" />
      <rect x="8" y="36" width="40" height="8" fill="#CADB66" />
      <rect x="8" y="80" width="40" height="6" fill="#8E1C24" />
      <circle cx="28" cy="62" r="6" fill="#FCF8F2" opacity="0.35" />
    </g>
  )
}

export default function ShopLanterns() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      <svg className="absolute left-0 top-16 h-[46vh] w-[min(160px,22vw)]" viewBox="0 0 80 320">
        <Lantern x={8} delay="0s" />
        <g transform="translate(0 130)">
          <Lantern x={22} delay="0.4s" scale={0.82} />
        </g>
      </svg>
      <svg className="absolute right-0 top-24 h-[46vh] w-[min(160px,22vw)]" viewBox="0 0 80 320">
        <Lantern x={18} delay="0.2s" />
        <g transform="translate(0 140)">
          <Lantern x={4} delay="0.7s" scale={0.78} />
        </g>
      </svg>
      <span className="steam absolute bottom-[28%] left-[12%] h-16 w-8" />
      <span className="steam absolute bottom-[32%] right-[14%] h-20 w-10" style={{ animationDelay: '1.2s' }} />
    </div>
  )
}
