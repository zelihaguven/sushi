import { Mail, Linkedin, Github, BookOpen, X } from 'lucide-react'
import {
  EXPERIENCES,
  PROJECTS,
  SOCIALS,
  TECH_STACKS,
  TRAINING,
  TYPEWRITER_TEXT,
} from '../data/content'
import { ZONES } from '../world/zones'

const SOCIAL_LINKS = [
  { label: 'Email', href: `mailto:${SOCIALS.email}`, Icon: Mail },
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: SOCIALS.github, Icon: Github },
  { label: 'Medium', href: SOCIALS.medium, Icon: BookOpen },
]

function DetailCard({ selection, onClose }) {
  if (!selection) return null

  let body = null

  if (selection.type === 'project') {
    const project = PROJECTS.find((item) => item.id === selection.id)
    if (!project) return null
    body = (
      <>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">{project.cutLabel}</p>
        <h2 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-stone-800">{project.title}</h2>
        <p className="mt-1 text-sm text-stone-500">{project.role}</p>
        <p className="mt-3 text-[15px] leading-6 text-stone-700">{project.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-stone-200/80 px-2.5 py-1 text-xs text-stone-700">
              {tag}
            </span>
          ))}
        </div>
        {project.layers?.terminal && (
          <ul className="mt-3 space-y-1 font-mono text-xs text-stone-500">
            {project.layers.terminal.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-stone-800 px-4 py-2 text-sm font-medium text-stone-50"
          >
            Open project
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
            >
              Repo
            </a>
          )}
        </div>
      </>
    )
  }

  if (selection.type === 'stack') {
    const stack = TECH_STACKS.find((item) => item.id === selection.id)
    if (!stack) return null
    body = (
      <>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">kitchen station</p>
        <h2 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-stone-800">{stack.name}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.skills.map((skill) => (
            <span
              key={skill.label}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-800"
              style={{ background: `${skill.color}33` }}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </>
    )
  }

  if (selection.type === 'experience') {
    const experience = EXPERIENCES[selection.index]
    if (!experience) return null
    body = (
      <>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
          course {experience.course} · {experience.station}
        </p>
        <h2 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-stone-800">{experience.role}</h2>
        <p className="mt-1 text-sm text-stone-500">
          {experience.org} · {experience.dates}
        </p>
        <p className="mt-3 text-[15px] leading-6 text-stone-700">{experience.body}</p>
      </>
    )
  }

  if (selection.type === 'training') {
    body = (
      <>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">training</p>
        <ul className="mt-3 space-y-2 text-[15px] leading-6 text-stone-700">
          {TRAINING.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </>
    )
  }

  if (selection.type === 'social') {
    body = (
      <>
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">hello</p>
        <h2 className="mt-1 font-sans text-2xl font-semibold tracking-tight text-stone-800">{selection.label}</h2>
        <a
          href={selection.href}
          target={selection.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={selection.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          className="mt-4 inline-flex rounded-full bg-stone-800 px-4 py-2 text-sm font-medium text-stone-50"
        >
          {selection.label === 'Email' ? SOCIALS.email : `Open ${selection.label}`}
        </a>
      </>
    )
  }

  if (!body) return null

  return (
    <aside
      className="pointer-events-auto absolute bottom-24 left-4 right-4 z-20 mx-auto max-w-lg rounded-3xl border border-stone-200/80 bg-[#fbf6ef]/95 p-5 shadow-xl shadow-stone-900/10 backdrop-blur-md sm:bottom-24 sm:left-6 sm:right-auto"
      role="dialog"
      aria-modal="false"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 rounded-full p-1.5 text-stone-500 hover:bg-stone-200/70"
        aria-label="Close"
      >
        <X size={16} />
      </button>
      {body}
    </aside>
  )
}

export default function Hud({
  entered,
  zone,
  selection,
  reducedMotion,
  onEnter,
  onZone,
  onClose,
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 text-stone-800">
      <a
        href="#world-nav"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to world navigation
      </a>

      <header className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">sushi universe</p>
        <h1 className="mt-1 font-sans text-lg font-semibold tracking-tight sm:text-xl">Zeliha Ilgın Güven</h1>
        <p className="text-xs text-stone-500 sm:text-sm">Product Engineer</p>
      </header>

      {!entered && (
        <div className="pointer-events-auto absolute inset-0 flex items-end justify-center bg-[#f3e4d4]/55 p-4 backdrop-blur-[2px] sm:items-center">
          <div className="mb-8 w-full max-w-md rounded-3xl bg-[#fbf6ef]/95 p-6 shadow-xl shadow-stone-900/10 sm:mb-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">entrance</p>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-[15px] leading-6 text-stone-700">{TYPEWRITER_TEXT}</pre>
            <button
              type="button"
              onClick={onEnter}
              className="mt-5 w-full rounded-full bg-stone-800 px-5 py-3 text-sm font-semibold text-stone-50"
            >
              Enter the world
            </button>
            <p className="mt-3 text-center text-xs text-stone-500">
              {reducedMotion
                ? 'Reduced motion on. Camera will snap between zones.'
                : 'Then tap a zone or a plate. Drag to look around.'}
            </p>
          </div>
        </div>
      )}

      {entered && (
        <>
          <p className="absolute left-4 top-[4.6rem] max-w-[14rem] text-xs text-stone-500 sm:left-6 sm:top-[5.1rem] sm:max-w-none">
            {reducedMotion ? 'Tap a zone or object.' : 'Tap a zone or object · drag to look · scroll to zoom'}
          </p>

          <nav
            id="world-nav"
            aria-label="World zones"
            className="pointer-events-auto absolute bottom-4 left-1/2 flex w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-stone-200/80 bg-[#fbf6ef]/90 p-1 shadow-lg shadow-stone-900/10 backdrop-blur-md"
          >
            {ZONES.map((item) => {
              const current = zone === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onZone(item.id)}
                  aria-current={current ? 'true' : undefined}
                  className={`min-w-0 flex-1 rounded-full px-2 py-2.5 text-xs font-medium sm:text-sm ${
                    current ? 'bg-stone-800 text-stone-50' : 'text-stone-600 hover:bg-stone-200/70'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="pointer-events-auto absolute right-4 top-4 hidden items-center gap-3 sm:flex">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={label}
                className="rounded-full p-2 text-stone-600 hover:bg-stone-200/70 hover:text-stone-900"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="pointer-events-auto absolute bottom-[4.6rem] left-1/2 flex -translate-x-1/2 gap-3 text-[11px] text-stone-500 sm:hidden">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {label}
              </a>
            ))}
          </div>
        </>
      )}

      <DetailCard selection={selection} onClose={onClose} />
    </div>
  )
}
