import { useEffect, useMemo, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { TYPEWRITER_TEXT } from '../data/content'

function playClick(ctx) {
  const t = ctx.currentTime
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  const filter = ctx.createBiquadFilter()
  osc.type = 'square'
  osc.frequency.value = 1400 + Math.random() * 900
  filter.type = 'bandpass'
  filter.frequency.value = 1800
  filter.Q.value = 0.7
  gain.gain.setValueAtTime(0.035, t)
  gain.gain.exponentialRampToValueAtTime(0.0008, t + 0.045)
  osc.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  osc.start(t)
  osc.stop(t + 0.05)
}

export default function TypewriterDesk({ active = true, embedded = false }) {
  const [typed, setTyped] = useState('')
  const [index, setIndex] = useState(0)
  const [soundOn, setSoundOn] = useState(false)
  const audioRef = useRef(null)
  const reduced = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    if (reduced) {
      setTyped(TYPEWRITER_TEXT)
      setIndex(TYPEWRITER_TEXT.length)
    }
  }, [reduced])

  useEffect(() => {
    if (!active || reduced || index >= TYPEWRITER_TEXT.length) return undefined
    const char = TYPEWRITER_TEXT[index]
    const delay = char === '\n' ? 260 : 32 + Math.random() * 48
    const id = window.setTimeout(() => {
      setTyped((prev) => prev + char)
      setIndex((i) => i + 1)
      if (soundOn) {
        if (!audioRef.current) {
          audioRef.current = new window.AudioContext()
        }
        if (audioRef.current.state === 'suspended') {
          audioRef.current.resume()
        }
        playClick(audioRef.current)
      }
    }, delay)
    return () => window.clearTimeout(id)
  }, [index, reduced, soundOn, active])

  const done = index >= TYPEWRITER_TEXT.length

  return (
    <section
      id={embedded ? undefined : 'note'}
      className={`relative mx-auto w-full max-w-5xl ${embedded ? '' : 'mt-4 scroll-mt-24 px-4 pb-16 sm:px-6'}`}
    >
      <div className={`flex items-end justify-between gap-4 ${embedded ? 'mb-3' : 'mb-8'}`}>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-[#CADB66]">
            {embedded ? 'the omakase counter' : 'counter note'}
          </p>
          {!embedded && (
            <h2 className="font-display mt-3 text-4xl font-medium italic text-cream sm:text-5xl">
              Take a <span className="swash text-[#CADB66]">seat</span>
            </h2>
          )}
        </div>
        <button
          type="button"
          onClick={() => setSoundOn((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-[#8E1C24]/80 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[#FCF8F2]/80 transition hover:text-[#CADB66]"
          aria-pressed={soundOn}
        >
          {soundOn ? <Volume2 size={12} /> : <VolumeX size={12} />}
          {soundOn ? 'clicks on' : 'clicks off'}
        </button>
      </div>

      <div className="relative mx-auto max-w-lg">
        <article className="relative overflow-hidden rounded-[22px] bg-[#FCF8F2] text-[#141A17] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between bg-[#8E1C24] px-5 py-2.5">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#CADB66]">
              Table 01 · seating
            </p>
            <span className="font-display text-sm italic text-[#CADB66]">鮨</span>
          </div>

          <div className="relative px-7 py-8 sm:px-10 sm:py-9">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(142,28,36,0.08) 28px)',
              }}
            />
            <pre className="relative z-10 min-h-[200px] whitespace-pre-wrap font-type text-[14px] leading-7 text-[#141A17] sm:text-[15px] sm:leading-8">
              {typed}
              {!done && <span className="cursor-blink ml-0.5 inline-block w-[0.55ch] bg-[#8E1C24] align-baseline">▌</span>}
            </pre>
            <div
              className="pointer-events-none absolute bottom-5 right-6 flex h-14 w-14 rotate-[-12deg] items-center justify-center rounded-full border-[3px] border-[#8E1C24]/80"
              aria-hidden="true"
            >
              <span className="font-display text-xl italic text-[#8E1C24]">鮨</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
