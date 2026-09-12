import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'

function Curls({ sitting }) {
  const y = sitting ? -6 : 0
  return (
    <g aria-hidden="true">
      <ellipse cx="110" cy={54 + y} rx="48" ry="28" fill="#3a2218" />
      <ellipse cx="68" cy={78 + y} rx="22" ry="26" fill="#2c1810" />
      <ellipse cx="152" cy={78 + y} rx="22" ry="26" fill="#2c1810" />
      <ellipse cx="58" cy={98 + y} rx="14" ry="16" fill="#4a2c22" />
      <ellipse cx="162" cy={98 + y} rx="14" ry="16" fill="#4a2c22" />
      {[
        [78, 46],
        [96, 38],
        [110, 34],
        [124, 38],
        [142, 46],
        [70, 62],
        [150, 62],
        [86, 52],
        [134, 52],
        [102, 44],
        [118, 44],
        [62, 84],
        [158, 84],
        [74, 108],
        [146, 108],
      ].map(([x, cy]) => (
        <g key={`${x}-${cy}`}>
          <circle cx={x} cy={cy + y} r="11" fill="#3a2218" />
          <circle cx={x - 3} cy={cy + y - 3} r="4.2" fill="#6b4030" opacity="0.55" />
        </g>
      ))}
      <ellipse cx="92" cy={72 + y} rx="10" ry="8" fill="#4a2c22" />
      <ellipse cx="110" cy={68 + y} rx="11" ry="8" fill="#3a2218" />
      <ellipse cx="128" cy={72 + y} rx="10" ry="8" fill="#4a2c22" />
      <ellipse cx="84" cy={80 + y} rx="8" ry="7" fill="#2c1810" />
      <ellipse cx="136" cy={80 + y} rx="8" ry="7" fill="#2c1810" />
    </g>
  )
}

export default function LegoAvatar({ greeting = false, compact = false, pose = 'stand' }) {
  const rootRef = useRef(null)
  const [look, setLook] = useState({ x: 0, y: 0, head: 0 })
  const [waving, setWaving] = useState(false)
  const [armAngle, setArmAngle] = useState(8)
  const sitting = pose === 'sill'

  useEffect(() => {
    if (!greeting) return undefined
    const start = window.setTimeout(() => setWaving(true), 700)
    const loop = pose === 'sill' ? window.setInterval(() => setWaving(true), 4200) : 0
    return () => {
      window.clearTimeout(start)
      window.clearInterval(loop)
    }
  }, [greeting, pose])

  useEffect(() => {
    if (!waving) {
      setArmAngle(8)
      return undefined
    }
    const frames = [8, -38, 22, -30, 12, 8]
    let i = 0
    setArmAngle(frames[0])
    const id = window.setInterval(() => {
      i += 1
      setArmAngle(frames[Math.min(i, frames.length - 1)])
      if (i >= frames.length - 1) window.clearInterval(id)
    }, 110)
    return () => window.clearInterval(id)
  }, [waving])

  useEffect(() => {
    const onMove = (event) => {
      const node = rootRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const nx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const ny = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      setLook({
        x: Math.max(-1, Math.min(1, nx)) * 4.2,
        y: Math.max(-1, Math.min(1, ny)) * 3.2,
        head: Math.max(-1, Math.min(1, nx)) * 8,
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const wave = (event) => {
    if (waving) return
    setWaving(true)
    const rect = rootRef.current?.getBoundingClientRect()
    const origin = rect
      ? {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        }
      : { x: 0.5, y: 0.7 }

    confetti({
      particleCount: 70,
      spread: 64,
      startVelocity: 28,
      origin,
      zIndex: 300,
      colors: ['#CADB66', '#FCF8F2', '#8E1C24', '#CADB66'],
    })

    window.setTimeout(() => setWaving(false), 950)
    event.currentTarget.blur()
  }

  const torsoY = sitting ? 118 : 128

  return (
    <button
      ref={rootRef}
      type="button"
      onClick={wave}
      aria-label="Kıvırcık saçlı sushi şefi Lego. Tıklayınca el sallar."
      className={`group relative block shrink-0 cursor-pointer border-0 bg-transparent p-0 outline-none transition-transform duration-500 ease-bounce hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-lime/70 ${
        compact ? 'w-[168px]' : 'w-[min(280px,42vw)]'
      }`}
    >
      <svg viewBox="0 0 220 268" className="relative z-10 w-full drop-shadow-2xl" role="img">
        <title>Zeliha Ilgın Güven — curly-haired itamae minifig</title>
        <ellipse cx="110" cy={sitting ? 250 : 256} rx="48" ry="7" fill="#141A17" opacity="0.45" />

        <g transform={`rotate(${armAngle} 62 ${torsoY + 8})`}>
          <rect x="48" y={torsoY} width="24" height="40" rx="12" fill="#F5CD2F" />
          <rect x="42" y={torsoY + 32} width="22" height="16" rx="8" fill="#F5CD2F" />
          <g transform={`translate(36 ${torsoY + 42})`}>
            <ellipse cx="12" cy="10" rx="11" ry="5" fill="#f4efe4" />
            <path d="M2 11h20c2 8-2 16-10 16S0 20 2 11z" fill="#d45a3c" />
            <path d="M6 14c4-2 10-2 14 1" fill="none" stroke="#f3b09a" strokeWidth="1.2" />
          </g>
        </g>

        <g>
          <rect x="148" y={torsoY + 2} width="22" height="38" rx="11" fill="#F5CD2F" />
          <rect x="152" y={torsoY + 34} width="20" height="14" rx="7" fill="#F5CD2F" />
          <g transform={`translate(168 ${torsoY + 38})`}>
            <path d="M4 2 l28 10" stroke="#FCF8F2" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M8 0 l26 14" stroke="#FCF8F2" strokeWidth="2.4" strokeLinecap="round" />
          </g>
        </g>

        {sitting ? (
          <>
            <rect x="70" y="198" width="80" height="22" rx="10" fill="#2a1410" />
            <rect x="66" y="214" width="36" height="22" rx="8" fill="#1e0e0c" />
            <rect x="118" y="214" width="36" height="22" rx="8" fill="#1e0e0c" />
          </>
        ) : (
          <>
            <rect x="74" y="204" width="30" height="48" rx="6" fill="#2a1410" />
            <rect x="116" y="204" width="30" height="48" rx="6" fill="#1e0e0c" />
          </>
        )}

        <path
          d={`M72 ${torsoY - 12}h76c12 0 20 10 20 22v${sitting ? 52 : 58}c0 10-10 16-24 16H76c-14 0-22-6-22-16v-${sitting ? 52 : 58}c0-12 8-22 18-22z`}
          fill="#FCF8F2"
        />
        <path d={`M90 ${torsoY - 8} L110 ${torsoY + 36} L130 ${torsoY - 8}`} fill="none" stroke="#8E1C24" strokeWidth="10" strokeLinejoin="round" />
        <path d={`M94 ${torsoY - 8} L110 ${torsoY + 32} L126 ${torsoY - 8}`} fill="#8E1C24" />

        <g
          style={{
            transform: `translate(${look.x * 0.55}px, ${look.y * 0.3}px) rotate(${look.head}deg)`,
            transformOrigin: sitting ? '110px 92px' : '110px 98px',
            transition: 'transform 90ms linear',
          }}
        >
          <Curls sitting={sitting} />
          <rect x="98" y={sitting ? 40 : 46} width="24" height="10" rx="5" fill="#F5CD2F" />
          <rect x="76" y={sitting ? 68 : 74} width="68" height="58" rx="22" fill="#F5CD2F" />
          <ellipse cx="90" cy={sitting ? 104 : 110} rx="9" ry="5" fill="#f4a698" opacity="0.55" />
          <ellipse cx="130" cy={sitting ? 104 : 110} rx="9" ry="5" fill="#f4a698" opacity="0.55" />
          <g transform={`translate(${look.x} ${look.y})`}>
            <ellipse cx="96" cy={sitting ? 96 : 102} rx="9" ry="10.5" fill="#fff" />
            <ellipse cx="124" cy={sitting ? 96 : 102} rx="9" ry="10.5" fill="#fff" />
            <circle cx={96 + look.x * 0.2} cy={(sitting ? 97 : 103) + look.y * 0.2} r="4.4" fill="#1a1a1a" />
            <circle cx={124 + look.x * 0.2} cy={(sitting ? 97 : 103) + look.y * 0.2} r="4.4" fill="#1a1a1a" />
            <circle cx={94 + look.x * 0.2} cy={(sitting ? 94 : 100) + look.y * 0.2} r="1.4" fill="#fff" />
            <circle cx={122 + look.x * 0.2} cy={(sitting ? 94 : 100) + look.y * 0.2} r="1.4" fill="#fff" />
          </g>
          <path
            d={`M102 ${sitting ? 116 : 122}c5 7 13 7 16 0`}
            fill="none"
            stroke="#8E1C24"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </button>
  )
}
