import { useEffect, useRef, useState } from 'react'

const QUOTES = [
  'いらっしゃいませ! (Welcome!)',
  'Tonight’s omakase is plating.',
  'Take a seat at the counter.',
  'Fresh systems, prepared to order.',
  'Irasshaimase — pull up a stool.',
  'The first course is curiosity.',
]

const YELLOW = '#F5CD2F'
const YELLOW_DEEP = '#E4B21C'
const HAIR = '#3A2418'
const HAIR_DEEP = '#24150E'

export default function LegoChefAvatar({ greeting = true, compact = false }) {
  const eyesRef = useRef(null)
  const [look, setLook] = useState({ x: 0, y: 0 })
  const [bowing, setBowing] = useState(false)
  const [quote, setQuote] = useState(QUOTES[0])

  useEffect(() => {
    const onMove = (event) => {
      const node = eyesRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const angle = Math.atan2(event.clientY - cy, event.clientX - cx)
      setLook({
        x: Math.cos(angle) * 3.4,
        y: Math.sin(angle) * 3.4,
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const bow = () => {
    if (bowing) return
    setBowing(true)
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])
    window.setTimeout(() => setBowing(false), 1200)
  }

  return (
    <div className={`relative flex flex-col items-center ${compact ? 'w-[168px]' : 'w-[min(300px,52vw)]'}`}>
      {greeting && (
        <div className="relative z-10 mb-3 max-w-[18rem] rounded-full border border-[#CADB66]/80 bg-[#FCF8F2] px-4 py-2 text-center font-serif text-sm text-[#141A17] shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
          {quote}
          <span
            className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-[#CADB66]/80 bg-[#FCF8F2]"
            aria-hidden="true"
          />
        </div>
      )}

      <button
        type="button"
        onClick={bow}
        aria-label="Lego sushi chef. Click to bow and say hello."
        className="group relative mt-1 block w-full cursor-pointer border-0 bg-transparent p-0 outline-none transition-transform duration-500 ease-bounce hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-[#CADB66]/70"
      >
        <svg viewBox="0 0 220 280" className="relative z-10 w-full drop-shadow-2xl" role="img">
          <title>Lego itamae minifigure</title>
          <defs>
            <linearGradient id="legoSkin" x1="0.2" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#FFE57A" />
              <stop offset="55%" stopColor={YELLOW} />
              <stop offset="100%" stopColor={YELLOW_DEEP} />
            </linearGradient>
            <linearGradient id="legoHappi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FCF8F2" />
              <stop offset="100%" stopColor="#E8DFCC" />
            </linearGradient>
            <radialGradient id="legoHairShine" cx="0.38" cy="0.32" r="0.7">
              <stop offset="0%" stopColor="#5A3A28" />
              <stop offset="55%" stopColor={HAIR} />
              <stop offset="100%" stopColor={HAIR_DEEP} />
            </radialGradient>
          </defs>

          <ellipse cx="110" cy="268" rx="46" ry="7" fill="#141A17" opacity="0.42" />
          <rect x="58" y="252" width="104" height="10" rx="3" fill="#8E1C24" />
          <rect x="58" y="252" width="104" height="3" rx="1.5" fill="#CADB66" opacity="0.35" />

          <g
            style={{
              transform: bowing ? 'rotate(7deg)' : 'rotate(0deg)',
              transformOrigin: '110px 248px',
              transformBox: 'view-box',
              transition: 'transform 0.85s cubic-bezier(0.34, 1.3, 0.64, 1)',
            }}
          >
            <g transform="translate(87 196)">
              <rect x="0" y="0" width="21" height="50" rx="4" fill="#141A17" />
              <rect x="23" y="0" width="21" height="50" rx="4" fill="#0C100E" />
              <rect x="-2" y="44" width="25" height="8" rx="2" fill="#1A221E" />
              <rect x="21" y="44" width="25" height="8" rx="2" fill="#141A17" />
            </g>
            <rect x="85" y="184" width="50" height="16" rx="3" fill="#141A17" />

            <g transform="translate(38 122) rotate(-28)">
              <rect x="0" y="0" width="22" height="26" rx="9" fill="url(#legoHappi)" stroke="#E8DFCC" strokeWidth="1" />
              <rect x="2" y="20" width="18" height="32" rx="9" fill="url(#legoSkin)" stroke={YELLOW_DEEP} strokeWidth="1" />
              <circle cx="11" cy="54" r="9.5" fill={YELLOW} stroke={YELLOW_DEEP} strokeWidth="1" />
              <g transform="translate(-18 46) rotate(-8)">
                <ellipse cx="20" cy="18" rx="18" ry="8.5" fill="#FCF8F2" stroke="#E8DFCC" strokeWidth="1" />
                <path d="M3 14 C 12 4, 28 4, 37 14 L 35 20 C 26 12, 14 12, 5 20 Z" fill="#FF6F59" />
                <path d="M9 11 C 16 8, 26 8, 32 12" fill="none" stroke="#ff8f7d" strokeWidth="1.2" />
                <path d="M11 15 C 18 12, 26 12, 33 16" fill="none" stroke="#e45a46" strokeWidth="0.8" opacity="0.75" />
                <ellipse cx="8" cy="9" rx="5" ry="3" fill="#CADB66" />
              </g>
            </g>

            <path d="M80 118 L140 118 L133 188 L87 188 Z" fill="url(#legoHappi)" stroke="#E8DFCC" strokeWidth="1.2" />
            <path d="M92 118 L110 152 L128 118 Z" fill="#8E1C24" />
            <path d="M94 118 L110 148 L126 118" fill="none" stroke="#6A151C" strokeWidth="0.6" opacity="0.5" />
            <rect x="87" y="172" width="46" height="14" rx="2" fill="#141A17" />
            <rect x="87" y="172" width="46" height="3" fill="#CADB66" opacity="0.25" />
            <path d="M91 130 L94 166" fill="none" stroke="#141A17" strokeWidth="0.6" opacity="0.12" />
            <path d="M129 130 L126 166" fill="none" stroke="#141A17" strokeWidth="0.6" opacity="0.12" />

            <g
              style={{
                transform: bowing ? 'rotate(-58deg)' : 'rotate(14deg)',
                transformOrigin: '142px 128px',
                transformBox: 'view-box',
                transition: 'transform 0.85s cubic-bezier(0.34, 1.3, 0.64, 1)',
              }}
            >
              <g transform="translate(132 126)">
                <rect x="0" y="0" width="22" height="26" rx="9" fill="url(#legoHappi)" stroke="#E8DFCC" strokeWidth="1" />
                <rect x="2" y="20" width="18" height="30" rx="9" fill="url(#legoSkin)" stroke={YELLOW_DEEP} strokeWidth="1" />
                <circle cx="11" cy="52" r="9" fill={YELLOW} stroke={YELLOW_DEEP} strokeWidth="1" />
                <g transform="translate(8 46) rotate(32)">
                  <path d="M0 2 L38 10" stroke="#C4A574" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M1 -2 L40 6" stroke="#D4B896" strokeWidth="2.6" strokeLinecap="round" />
                </g>
              </g>
            </g>

            <g transform="translate(110 86)">
              <path
                fill="url(#legoHairShine)"
                d="M0 -52
                   C -18 -54, -34 -44, -42 -28
                   C -54 -26, -58 -10, -50 4
                   C -56 16, -48 28, -34 30
                   C -24 40, -10 42, 0 40
                   C 10 42, 24 40, 34 30
                   C 48 28, 56 16, 50 4
                   C 58 -10, 54 -26, 42 -28
                   C 34 -44, 18 -54, 0 -52 Z"
              />
              <path
                fill={HAIR_DEEP}
                opacity="0.45"
                d="M-28 -30 C -36 -18, -34 -4, -24 2 C -18 -10, -16 -22, -28 -30 Z"
              />
              <path
                fill={HAIR_DEEP}
                opacity="0.45"
                d="M28 -30 C 36 -18, 34 -4, 24 2 C 18 -10, 16 -22, 28 -30 Z"
              />

              <rect x="-16" y="-62" width="32" height="14" rx="6" fill="url(#legoSkin)" stroke={YELLOW_DEEP} strokeWidth="1.3" />
              <ellipse cx="-7" y="-57" rx="4" ry="2" fill="#fff" opacity="0.45" />

              <rect x="-32" y="-38" width="64" height="62" rx="20" fill="url(#legoSkin)" stroke={YELLOW_DEEP} strokeWidth="1.6" />
              <path d="M-24 -28 C -12 -38, 12 -38, 24 -28" fill="none" stroke="#FFF6C8" strokeWidth="3.2" strokeLinecap="round" opacity="0.55" />

              <path fill={HAIR} d="M-40 -6 C -48 6, -44 22, -32 26 C -36 12, -34 2, -40 -6 Z" />
              <path fill={HAIR} d="M40 -6 C 48 6, 44 22, 32 26 C 36 12, 34 2, 40 -6 Z" />

              <rect x="-36" y="-22" width="72" height="13" rx="3" fill="#FCF8F2" />
              <rect x="-36" y="-22" width="72" height="4" fill="#fff" opacity="0.55" />
              <rect x="-36" y="-11" width="72" height="2" fill="#E8DFCC" />
              <circle cx="0" cy="-15.5" r="4.6" fill="#8E1C24" />
              <circle cx="0" cy="-16.6" r="1.4" fill="#FCF8F2" opacity="0.35" />

              <g ref={eyesRef}>
                <g transform={`translate(${look.x} ${look.y})`}>
                  <ellipse cx="-14" cy="2" rx="7.2" ry="8" fill="#fff" />
                  <ellipse cx="14" cy="2" rx="7.2" ry="8" fill="#fff" />
                  <circle cx="-13.2" cy="2.6" r="3.1" fill="#141A17" />
                  <circle cx="14.8" cy="2.6" r="3.1" fill="#141A17" />
                  <circle cx="-15" cy="0.6" r="1.1" fill="#fff" />
                  <circle cx="13" cy="0.6" r="1.1" fill="#fff" />
                </g>
              </g>

              <circle cx="-20" cy="12" r="5" fill="#FF6F59" opacity="0.22" />
              <circle cx="20" cy="12" r="5" fill="#FF6F59" opacity="0.22" />
              <path d="M-10 16 C -4 24, 4 24, 10 16" fill="none" stroke="#8E1C24" strokeWidth="2.4" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  )
}
