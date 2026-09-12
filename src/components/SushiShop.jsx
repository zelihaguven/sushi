import { useEffect, useMemo, useState } from 'react'
import { PROJECTS } from '../data/content'
import SushiArt from './SushiArt'
import SushiPiece from './SushiPiece'

const LOOPS = 3

function Noren() {
  return (
    <div className="relative mx-auto mb-10 h-40 w-full max-w-5xl" aria-hidden="true">
      <div className="absolute inset-x-8 top-0 h-2 rounded-full bg-gradient-to-r from-[#8E1C24] via-[#FCF8F2] to-[#8E1C24]" />
      <div className="flex h-full justify-center gap-1 px-10 pt-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="noren-sway h-full flex-1 rounded-b-[28px] bg-gradient-to-b from-[#8E1C24] to-[#8E1C24] shadow-[inset_-8px_0_12px_rgba(0,0,0,0.25)]"
            style={{ animationDelay: `${i * 0.18}s` }}
          >
            {i === 3 && (
              <p className="jp pt-8 text-center text-3xl text-[#CADB66]/85">鮨</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

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
    <section id="work" className="relative z-20 scroll-mt-24 overflow-hidden pb-8 pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,225,87,0.07),transparent_46%)]" />

      <Noren />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-lime">kaiten · live belt</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display max-w-xl text-4xl font-medium italic text-cream sm:text-5xl">
            Tonight’s <span className="swash text-[#CADB66]">omakase</span>
          </h2>
          <button
            type="button"
            onClick={() => setManualPause((value) => !value)}
            className="rounded-full border border-cream/15 bg-cherry/60 px-4 py-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-cream hover:border-lime hover:text-lime"
            aria-pressed={manualPause}
          >
            {manualPause ? 'resume belt' : 'pause belt'}
          </button>
        </div>
        <p className="mt-4 max-w-2xl font-display text-lg italic text-cream/70">
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
        <div className="mx-auto h-2 max-w-6xl rounded-full bg-gradient-to-r from-transparent via-[#CADB66] to-transparent opacity-70" />
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
        <div className="counter-wood mx-auto h-10 max-w-none shadow-[0_-12px_40px_rgba(0,0,0,0.45)]" />
        <div className="h-2 bg-gradient-to-b from-[#CADB66]/50 to-transparent" />
      </div>

      {selected && (
        <div className="relative mx-auto mt-8 w-full max-w-4xl px-4 sm:px-6">
          <article id="plating" className="grid items-center gap-8 rounded-[32px] border border-lime/20 bg-[#141A17]/90 p-6 shadow-desk sm:grid-cols-[0.9fr_1.1fr] sm:p-8">
            <div className="mx-auto w-full max-w-[360px] sm:max-w-none">
              <SushiArt cut={selected.cut} />
            </div>
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-lime">{selected.cutLabel}</p>
              <h3 className="font-display mt-2 text-4xl italic text-cream">{selected.title}</h3>
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
                  className="rounded-full bg-lime px-5 py-2 font-sans text-sm font-semibold text-mahogany hover:brightness-110"
                >
                  plate this piece
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="rounded-full border border-cream/20 px-5 py-2 font-sans text-sm text-cream hover:border-lime hover:text-lime"
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
