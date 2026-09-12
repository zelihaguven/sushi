import { useState } from 'react'

const THEMES = {
  wine: {
    plate: 'from-[#8E1C24] via-[#8E1C24] to-[#8E1C24]',
    glow: 'shadow-[0_24px_50px_-20px_rgba(100,13,20,0.7)]',
    window: 'bg-[#141A17]',
    accent: '#CADB66',
  },
  cherry: {
    plate: 'from-[#141A17] via-[#8E1C24] to-[#8E1C24]',
    glow: 'shadow-[0_24px_50px_-20px_rgba(56,4,14,0.75)]',
    window: 'bg-[#1a0504]',
    accent: '#CADB66',
  },
  ember: {
    plate: 'from-[#8E1C24] via-[#8E1C24] to-[#8E1C24]',
    glow: 'shadow-[0_24px_50px_-20px_rgba(173,40,49,0.55)]',
    window: 'bg-[#2a0a0e]',
    accent: '#CADB66',
  },
}

function MockWindow({ project }) {
  if (project.id === 'mentiguide') {
    return (
      <div className="space-y-2 p-3">
        {['Bircan · mentor loop', 'Pusula · high-school matches', 'Weekly live · cohort 2'].map((row) => (
          <div key={row} className="flex items-center gap-2 rounded-lg bg-cream/10 px-2 py-1.5">
            <span className="h-6 w-6 rounded-full bg-lime" />
            <span className="font-type text-[11px] text-cream/90">{row}</span>
          </div>
        ))}
      </div>
    )
  }

  if (project.id === 'airgap') {
    return (
      <div className="relative h-full p-3">
        <svg viewBox="0 0 180 90" className="h-24 w-full">
          <path d="M20 70 L60 40 L110 52 L160 18" fill="none" stroke="#8E1C24" strokeWidth="2.4" />
          {[[20, 70, '#CADB66'], [60, 40, '#FCF8F2'], [110, 52, '#8E1C24'], [160, 18, '#8E1C24']].map(([x, y, fill]) => (
            <g key={x}>
              <circle cx={x} cy={y} r="8" fill={fill} />
            </g>
          ))}
        </svg>
        <p className="font-type text-[10px] text-lime">lineage leak · blast radius</p>
      </div>
    )
  }

  return (
    <div className="relative h-28 overflow-hidden p-3">
      <div className="absolute inset-3 rounded-xl bg-[#141A17]" />
      <div className="absolute inset-x-6 top-8 h-16 rounded-full bg-wine/70" />
      {[
        [28, 36],
        [70, 48],
        [112, 32],
        [148, 52],
      ].map(([x, y]) => (
        <span
          key={x}
          className="absolute h-3 w-3 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_0_4px_rgba(212,225,87,0.25)]"
          style={{ left: x, top: y }}
        />
      ))}
    </div>
  )
}

export default function BurstProjectCard({ project }) {
  const theme = THEMES[project.theme]
  const [burst, setBurst] = useState(false)

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      data-burst={burst ? 'true' : 'false'}
      onMouseEnter={() => setBurst(true)}
      onMouseLeave={() => setBurst(false)}
      onFocus={() => setBurst(true)}
      onBlur={() => setBurst(false)}
      className="group relative block h-[400px] outline-none"
    >
      <div
        className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${theme.plate} ${theme.glow} ring-1 ring-cream/10 transition-transform duration-500 ease-burst group-hover:-translate-y-1 ${burst ? '-translate-y-1' : ''}`}
      />

      <div className="relative z-20 p-6 text-cream">
        <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-lime/80">{project.role}</p>
        <h3 className="font-display mt-2 text-3xl font-light italic">{project.title}</h3>
        <p className="mt-3 max-w-[36ch] font-serif text-[17px] leading-7 text-cream/85">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-cream/10 px-2.5 py-1 font-type text-[11px] text-cream">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`absolute right-5 top-[13.25rem] w-[168px] overflow-hidden rounded-2xl ${theme.window} shadow-2xl ring-1 ring-lime/20 transition-transform duration-500 ease-burst group-hover:-translate-y-14 group-hover:translate-x-10 group-hover:rotate-[8deg] ${burst ? '-translate-y-14 translate-x-10 rotate-[8deg]' : ''}`}
      >
        <div className="flex items-center gap-1.5 border-b border-cream/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-ember" />
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="h-2 w-2 rounded-full bg-cream" />
          <span className="ml-2 font-type text-[10px] text-cream/60">{project.layers.windowTitle}</span>
        </div>
        <MockWindow project={project} />
      </div>

      <div
        className={`absolute bottom-24 left-5 rounded-full bg-cream px-3 py-1.5 font-sans text-xs font-semibold text-mahogany shadow-lg transition-transform duration-500 ease-burst group-hover:-translate-x-8 group-hover:-translate-y-12 group-hover:rotate-[-8deg] ${burst ? '-translate-x-8 -translate-y-12 rotate-[-8deg]' : ''}`}
      >
        {project.layers.pill}
      </div>

      <div
        className={`absolute bottom-20 right-[11.5rem] rounded-2xl px-3 py-2 font-type text-xs font-bold uppercase tracking-wide text-mahogany shadow-lg transition-transform duration-500 ease-burst group-hover:translate-x-12 group-hover:translate-y-8 group-hover:rotate-[12deg] ${burst ? 'translate-x-12 translate-y-8 rotate-[12deg]' : ''}`}
        style={{ background: theme.accent }}
      >
        {project.layers.badge}
      </div>

      <div
        className={`absolute -bottom-5 left-8 w-[210px] rounded-xl bg-[#141A17] p-3 font-type text-[10px] leading-5 text-cream shadow-2xl ring-1 ring-lime/15 transition-transform duration-500 ease-burst group-hover:-translate-x-5 group-hover:translate-y-10 group-hover:rotate-[-4deg] ${burst ? '-translate-x-5 translate-y-10 rotate-[-4deg]' : ''}`}
      >
        {project.layers.terminal.map((line) => (
          <p key={line}>
            <span className="text-lime">❯</span> {line}
          </p>
        ))}
      </div>
    </a>
  )
}
