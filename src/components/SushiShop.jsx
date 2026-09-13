import { useEffect, useMemo, useState } from 'react'
import { PROJECTS } from '../data/content'
import SushiArt from './SushiArt'
import SushiPiece from './SushiPiece'

const LOOPS = 3

export default function SushiShop() {
  const [selectedId, setSelectedId] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [manualPause, setManualPause] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    const onMedia = () => setReduced(media.matches)
    media.addEventListener('change', onMedia)
    return () => media.removeEventListener('change', onMedia)
  }, [])

  useEffect(() => {
    if (!selectedId) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setSelectedId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedId])

  useEffect(() => {
    if (!selectedId) return undefined
    const node = document.getElementById('plating')
    node?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return undefined
  }, [selectedId])

  const belt = useMemo(
    () => Array.from({ length: LOOPS }, (_, loop) => PROJECTS.map((project) => ({ loop, project }))).flat(),
    [],
  )

  const selected = PROJECTS.find((project) => project.id === selectedId)
  const paused = reduced || hovered || manualPause || Boolean(selectedId)

  return (
    <section id="work" className="relative z-20 scroll-mt-24 overflow-hidden pb-8 pt-16">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-lime">kaiten · live belt</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display max-w-xl text-4xl text-cream sm:text-5xl">
            Tonight’s <span className="swash text-[#CADB66]">omakase</span>
          </h2>
          <button
            type="button"
            onClick={() => setManualPause((value) => !value)}
            className="pressable link-quiet rounded-full border border-cream/15 bg-[#8E1C24]/70 px-4 py-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-cream"
            aria-pressed={manualPause}
          >
            {manualPause ? 'resume belt' : 'pause belt'}
          </button>
        </div>
        <p className="mt-4 max-w-2xl font-serif text-lg italic text-cream/70">
          Plates drift sideways like sushi on the rail. Hover — garnishes jump. Click — pull a piece off the belt.
        </p>
      </div>

      <div
        className="relative mt-12"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false)
        }}
      >
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-[#CADB66]/70 to-transparent" />
        <div className="overflow-x-auto py-24">
          <div className={`kaiten-track flex w-max gap-10 px-10 ${paused ? 'is-paused' : ''}`}>
            {belt.map(({ loop, project }) => (
              <SushiPiece
                key={`${loop}-${project.id}`}
                project={project}
                selected={selectedId === project.id}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </div>
        <div className="counter-wood mx-auto h-8 max-w-none" />
      </div>

      {selected && (
        <div className="relative mx-auto mt-8 w-full max-w-4xl px-4 sm:px-6">
          <article
            id="plating"
            className="plating-panel grid items-center gap-8 rounded-[28px] border border-lime/20 bg-[#141A17] p-6 shadow-desk sm:grid-cols-[0.9fr_1.1fr] sm:p-8"
          >
            <div className="mx-auto w-full max-w-[360px] sm:max-w-none">
              <SushiArt cut={selected.cut} />
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-lime">{selected.cutLabel}</p>
              <h3 className="font-display mt-2 text-4xl text-cream">{selected.title}</h3>
              <p className="mt-1 font-serif text-cream/55">{selected.role}</p>
              <p className="mt-4 font-serif text-lg leading-8 text-cream/85">{selected.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cream/10 px-2.5 py-1 font-type text-[11px] text-cream">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selected.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable rounded-full bg-lime px-5 py-2 font-sans text-sm font-semibold text-mahogany"
                >
                  plate this piece
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="pressable link-quiet rounded-full border border-cream/20 px-5 py-2 font-sans text-sm text-cream"
                >
                  return to belt
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  )
}
