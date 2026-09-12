import { useEffect, useState } from 'react'

function Stem({ d, progress, delay = 0, color = '#8E1C24' }) {
  const grown = Math.max(0, Math.min(1, (progress - delay) / Math.max(0.01, 1 - delay)))
  if (grown < 0.02) return null
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
      pathLength="1"
      strokeDasharray="1"
      strokeDashoffset={1 - grown}
    />
  )
}

function Bloom({ cx, cy, progress, start, kind = 'tulip', rotate = 0 }) {
  const t = Math.max(0, Math.min(1, (progress - start) / 0.18))
  const scale = t * t * (3 - 2 * t)
  if (scale <= 0.01) return null

  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
      {kind === 'tulip' && (
        <>
          <path d="M0 8 C-10 2 -8 -12 0 -16 C8 -12 10 2 0 8Z" fill="#8E1C24" />
          <path d="M0 8 C-4 0 0 -14 0 -16 C0 -14 4 0 0 8Z" fill="#8E1C24" />
          <ellipse cx="0" cy="10" rx="3" ry="6" fill="#CADB66" />
        </>
      )}
      {kind === 'daisy' && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-10"
              rx="4"
              ry="9"
              fill="#FCF8F2"
              stroke="#CADB66"
              transform={`rotate(${i * 45})`}
            />
          ))}
          <circle r="6" fill="#CADB66" />
        </>
      )}
      {kind === 'leaf' && (
        <path d="M0 0 C8 -14 22 -8 0 18 C-18 -6 -6 -16 0 0Z" fill="#CADB66" />
      )}
    </g>
  )
}

export default function GardenScroll() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const dive = window.innerHeight * 1.5
      const y = Math.max(0, window.scrollY - dive)
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight - dive)
      setProgress(Math.min(1, y / max))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      <svg className="absolute bottom-0 left-0 h-[92vh] w-[min(220px,28vw)]" viewBox="0 0 180 720" fill="none">
        <Stem d="M48 710 C 40 540, 78 430, 36 310 S 70 140, 52 24" progress={progress} color="#8E1C24" />
        <Stem d="M92 720 C 110 560, 70 420, 118 300 S 80 150, 104 60" progress={progress} delay={0.08} color="#8E1C24" />
        <Stem d="M22 700 C 8 560, 40 430, 14 280" progress={progress} delay={0.16} color="#8E1C24" />
        <Bloom cx={52} cy={40} progress={progress} start={0.22} kind="tulip" rotate={-12} />
        <Bloom cx={104} cy={70} progress={progress} start={0.38} kind="daisy" rotate={8} />
        <Bloom cx={18} cy={270} progress={progress} start={0.48} kind="leaf" rotate={-20} />
        <Bloom cx={36} cy={310} progress={progress} start={0.55} kind="tulip" rotate={14} />
        <Bloom cx={118} cy={300} progress={progress} start={0.62} kind="daisy" />
        <Bloom cx={70} cy={430} progress={progress} start={0.72} kind="leaf" rotate={30} />
        <Bloom cx={40} cy={540} progress={progress} start={0.82} kind="tulip" rotate={-8} />
      </svg>

      <svg className="absolute bottom-0 right-0 h-[92vh] w-[min(220px,28vw)]" viewBox="0 0 180 720" fill="none">
        <g transform="translate(180 0) scale(-1 1)">
          <Stem d="M48 710 C 40 540, 78 430, 36 310 S 70 140, 52 24" progress={progress} delay={0.05} color="#8E1C24" />
          <Stem d="M92 720 C 110 560, 70 420, 118 300 S 80 150, 104 60" progress={progress} delay={0.14} color="#8E1C24" />
          <Stem d="M22 700 C 8 560, 40 430, 14 280" progress={progress} delay={0.22} color="#8E1C24" />
          <Bloom cx={52} cy={40} progress={progress} start={0.28} kind="daisy" rotate={10} />
          <Bloom cx={104} cy={70} progress={progress} start={0.42} kind="tulip" rotate={-6} />
          <Bloom cx={18} cy={270} progress={progress} start={0.52} kind="leaf" rotate={16} />
          <Bloom cx={36} cy={310} progress={progress} start={0.6} kind="daisy" />
          <Bloom cx={118} cy={300} progress={progress} start={0.68} kind="tulip" rotate={12} />
          <Bloom cx={70} cy={430} progress={progress} start={0.78} kind="leaf" rotate={-24} />
          <Bloom cx={40} cy={540} progress={progress} start={0.88} kind="daisy" />
        </g>
      </svg>
    </div>
  )
}
