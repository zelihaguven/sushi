import { useEffect, useMemo, useRef, useState } from 'react'

const WORDS = [
  ['Z', 'e', 'l', 'i', 'h', 'a'],
  ['I', 'l', 'g', 'ı', 'n'],
  ['G', 'ü', 'v', 'e', 'n'],
]
const LETTERS = WORDS.flat()

const CANDY = [
  { face: 'from-[#fff7f0] via-[#ffb4a2] to-[#ff7a6e]', extrude: '#c45c52', mid: '#e8897c' },
  { face: 'from-[#fff5f8] via-[#ff8fab] to-[#ff5c82]', extrude: '#c44569', mid: '#e85a7a' },
  { face: 'from-[#fff8e8] via-[#ffc857] to-[#f0a202]', extrude: '#c48412', mid: '#e0b03a' },
  { face: 'from-[#f4efff] via-[#c9a0ff] to-[#9b6dff]', extrude: '#6f4cb8', mid: '#a07ae6' },
  { face: 'from-[#effaf6] via-[#7ed9b8] to-[#3cb98d]', extrude: '#2a8a68', mid: '#5ecfa8' },
]

export default function BubblyName() {
  const letterRefs = useRef([])
  const [physics, setPhysics] = useState(() => LETTERS.map(() => ({ y: 0, r: 0, s: 1 })))
  const reduced = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    if (reduced) return undefined

    const onMove = (event) => {
      const next = LETTERS.map((_, index) => {
        const node = letterRefs.current[index]
        if (!node) return { y: 0, r: 0, s: 1 }
        const rect = node.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = event.clientX - cx
        const dy = event.clientY - cy
        const dist = Math.hypot(dx, dy)
        const influence = Math.max(0, 1 - dist / 170)
        return {
          y: influence * -16,
          r: influence * (dx > 0 ? 7 : -7),
          s: 1 + influence * 0.14,
        }
      })
      setPhysics(next)
    }

    const reset = () => setPhysics(LETTERS.map(() => ({ y: 0, r: 0, s: 1 })))

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', reset)
    }
  }, [reduced])

  return (
    <h1
      className="flex flex-wrap items-end justify-center gap-y-3 font-display text-[clamp(2.35rem,5.8vw,5.2rem)] leading-none tracking-tight lg:justify-start"
      aria-label="Zeliha Ilgın Güven"
    >
      {WORDS.map((word, wordIndex) => (
        <span key={word.join('')} className="inline-flex flex-nowrap items-end">
          {wordIndex > 0 && <span className="inline-block w-[0.28em]" aria-hidden="true" />}
          {word.map((char, letterIndex) => {
            const index = WORDS.slice(0, wordIndex).reduce((sum, item) => sum + item.length, 0) + letterIndex
            const candy = CANDY[index % CANDY.length]
            const p = physics[index]
            return (
              <span
                key={`${char}-${index}`}
                ref={(node) => {
                  letterRefs.current[index] = node
                }}
                className="group relative mx-[0.03em] inline-block cursor-default will-change-transform"
                style={{
                  transform: `translateY(${p.y}px) rotate(${p.r}deg) scale(${p.s})`,
                  transition: 'transform 280ms cubic-bezier(0.34, 1.7, 0.64, 1)',
                }}
                aria-hidden="true"
              >
                <span
                  className="absolute inset-0 translate-y-[0.09em] rounded-[0.28em]"
                  style={{ background: candy.extrude }}
                />
                <span
                  className="absolute inset-0 translate-y-[0.045em] rounded-[0.28em]"
                  style={{ background: candy.mid }}
                />
                <span
                  className={`relative z-10 inline-flex min-w-[0.78em] items-center justify-center rounded-[0.28em] bg-gradient-to-b ${candy.face} px-[0.08em] pb-[0.06em] pt-[0.04em] font-bold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.55)] transition-transform duration-300 ease-bounce group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:scale-110`}
                >
                  {char}
                  <span className="pointer-events-none absolute left-[16%] top-[12%] h-[28%] w-[48%] rounded-full bg-white/65 blur-[0.5px]" />
                </span>
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
