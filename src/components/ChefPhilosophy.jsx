import { EXPERIENCES, TRAINING } from '../data/content'
import Reveal from './Reveal'

export default function ChefPhilosophy() {
  return (
    <section id="philosophy" className="relative z-20 scroll-mt-24 px-4 pb-6 pt-16 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mx-auto inline-flex rounded-full bg-[#8E1C24] px-5 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-lime">
          The recipe · experience
        </p>
        <h2 className="font-display mt-6 text-4xl text-cream sm:text-6xl">
          The Chef&apos;s <span className="swash text-[#CADB66]">recipe</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-serif text-lg leading-7 text-cream/70">
          How the work was prepped — roles, stations, and the training behind the plate.
        </p>
      </div>

      <Reveal className="relative mx-auto mt-10 max-w-3xl">
        <article className="overflow-hidden rounded-[28px] bg-[#FCF8F2] text-[#141A17] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]">
          <div className="h-2 bg-[#8E1C24]" />
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-start justify-between gap-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a1c22]">
              <div>
                <p>Table 01 · Special omakase</p>
                <p className="mt-2 font-medium tracking-[0.12em] text-[#141A17]/70">Chef: Zeliha Ilgın Güven</p>
              </div>
              <div className="text-left sm:text-right">
                <p>Dispatch #2026</p>
                <p className="mt-2 text-[#8E1C24]">Open for roles</p>
              </div>
            </div>

            <div className="my-6 border-t border-dashed border-[#141A17]/20" />

            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#141A17]">
              Recipe for a product engineer:
            </p>
            <p className="mt-3 max-w-2xl font-serif text-lg leading-8 text-[#141A17]/80">
              Computer engineering student with Erasmus in Germany — data science, AI/ML, and technical product. End-to-end
              pipelines, production apps, and community leadership that actually reaches people.
            </p>

            <ol className="mt-8 space-y-6">
              {EXPERIENCES.map((item) => (
                <li key={item.course} className="grid gap-1 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
                  <p className="font-type text-xs uppercase tracking-[0.18em] text-[#8E1C24]">
                    {item.course}
                    <span className="mt-1 block text-[10px] text-[#141A17]/45">{item.station}</span>
                  </p>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl leading-tight">{item.role}</h3>
                      <p className="font-type text-[11px] uppercase tracking-[0.12em] text-[#141A17]/50">{item.dates}</p>
                    </div>
                    <p className="mt-1 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-[#8a1c22]">
                      {item.org}
                    </p>
                    <p className="mt-2 font-serif text-base leading-7 text-[#141A17]/75">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="my-8 border-t border-dashed border-[#141A17]/20" />

            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#141A17]">Training</p>
            <ul className="mt-3 space-y-2 font-serif text-base leading-7 text-[#141A17]/75">
              {TRAINING.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </section>
  )
}

export function OrderFooter() {
  const links = [
    { href: 'mailto:ilgin.guven0@gmail.com', label: 'ilgin.guven0@gmail.com', primary: true },
    { href: 'https://www.linkedin.com/in/zelihaguven', label: 'LinkedIn' },
    { href: 'https://github.com/zelihaguven', label: 'GitHub' },
    { href: 'https://medium.com/@zelihaguven', label: 'Medium' },
  ]

  return (
    <section id="contact" className="relative z-20 scroll-mt-24 px-4 pb-16 pt-10 text-center sm:px-6">
      <p className="jp text-4xl text-[#CADB66]">鮨</p>
      <h2 className="font-display mt-4 text-4xl text-cream sm:text-5xl">Ready to place an order?</h2>
      <p className="mx-auto mt-4 max-w-xl font-serif text-lg leading-8 text-cream/70">
        Available for Product Engineering internships & full-time roles.
        <br />
        Let&apos;s craft great products together.
      </p>
      <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
            className={
              link.primary
                ? 'pressable rounded-full bg-cream px-6 py-3 font-type text-sm text-mahogany'
                : 'pressable link-quiet rounded-full border border-cream/20 bg-[#8E1C24] px-6 py-3 font-serif text-lg italic text-cream'
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
