import { useEffect, useRef } from 'react'
import SushiArt, { GingerBuddy, WasabiBuddy } from './SushiArt'
import { liftPlate, resetPlate } from '../lib/sushiPlate'

function MockWindow({ project }) {
  if (project.id === 'mentiguide') {
    return (
      <div className="space-y-1.5 p-2">
        {['Bircan · mentor loop', 'Pusula · matches'].map((row) => (
          <div key={row} className="flex items-center gap-1.5 rounded-md bg-cream/10 px-2 py-1">
            <span className="h-4 w-4 rounded-full bg-lime" />
            <span className="font-type text-[9px] text-cream/90">{row}</span>
          </div>
        ))}
      </div>
    )
  }

  if (project.id === 'airgap') {
    return (
      <svg viewBox="0 0 160 70" className="h-16 w-full p-2">
        <path d="M16 54 L52 28 L96 40 L144 14" fill="none" stroke="#8E1C24" strokeWidth="2.2" />
        {[[16, 54, '#CADB66'], [52, 28, '#FCF8F2'], [96, 40, '#8E1C24'], [144, 14, '#8E1C24']].map(([x, y, fill]) => (
          <circle key={x} cx={x} cy={y} r="7" fill={fill} />
        ))}
      </svg>
    )
  }

  return (
    <div className="relative h-16 p-2">
      {[
        [22, 18],
        [54, 28],
        [90, 16],
        [122, 30],
      ].map(([x, y]) => (
        <span
          key={x}
          className="absolute h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_0_3px_rgba(212,225,87,0.25)]"
          style={{ left: x, top: y }}
        />
      ))}
    </div>
  )
}

export default function SushiPiece({ project, interactive = true, selected = false, onSelect }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    if (selected) {
      card.classList.add('is-lifted')
      liftPlate(card)
    } else {
      card.classList.remove('is-lifted')
      resetPlate(card)
    }
  }, [selected])

  return (
    <div
      ref={cardRef}
      className={`sushi-card${interactive ? '' : ' pointer-events-none'}`}
      role="button"
      tabIndex={interactive ? 0 : -1}
      aria-pressed={selected}
      aria-hidden={!interactive}
      onMouseEnter={(event) => {
        event.currentTarget.classList.add('is-lifted')
        liftPlate(event.currentTarget)
      }}
      onMouseLeave={(event) => {
        if (!selected) {
          event.currentTarget.classList.remove('is-lifted')
          resetPlate(event.currentTarget)
        }
      }}
      onFocus={(event) => {
        event.currentTarget.classList.add('is-lifted')
        liftPlate(event.currentTarget)
      }}
      onBlur={(event) => {
        if (!selected) {
          event.currentTarget.classList.remove('is-lifted')
          resetPlate(event.currentTarget)
        }
      }}
      onClick={() => onSelect?.(project.id)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect?.(project.id)
        }
      }}
    >
      <div className="sushi-plate">
        <SushiArt cut={project.cut} />
        <p className="plate-cut">{project.cutLabel}</p>
        <h3 className="plate-title">{project.title}</h3>
      </div>

      <div className="layer-ui">
        <div className="ui-chrome">
          <span className="dot ember" />
          <span className="dot lime" />
          <span className="ui-title">{project.layers.windowTitle}</span>
        </div>
        <MockWindow project={project} />
      </div>

      <div className="layer-garnish">
        <WasabiBuddy />
        <GingerBuddy />
        <span className="garnish-pill">{project.layers.pill}</span>
      </div>

      <div className="layer-stamp">
        <span className="hanko">{project.layers.badge}</span>
        <div className="stamp-terminal">
          {project.layers.terminal.map((line) => (
            <p key={line}>
              <span>❯</span> {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
