import TypewriterDesk from './TypewriterDesk'
import { SOCIALS } from '../data/content'

export default function PortalHero() {
  return (
    <>
      <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-8 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_#8E1C24_0%,_#141A17_44%,_#0C100E_100%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          <p className="hero-line font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-lime sm:text-[11px]">
            a product engineer’s sushi world
          </p>
          <h1 className="hero-line font-display mt-3 text-[clamp(2.2rem,8.4vw,5.2rem)] font-semibold leading-[0.96] text-cream [text-shadow:0_2px_28px_rgba(12,16,14,0.55)]">
            Zeliha Ilgın Güven
          </h1>
          <p className="hero-line mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-cream/75 sm:mt-3 sm:text-[12px]">
            Product Engineer
          </p>
          <p className="hero-line mt-3 max-w-lg font-serif text-[15px] italic leading-6 text-cream/80 sm:mt-4 sm:text-xl sm:leading-8">
            Omakase is a tasting menu the chef chooses. Mine is products — plated one piece at a time.
          </p>

          <div className="hero-line mt-3 sm:mt-5">
            <img
              src="/sushi/itamae-chef.png"
              alt="Sushi master plating a cute salmon nigiri"
              draggable={false}
              className="sushi-sticker mx-auto h-auto w-[108px] max-h-[26svh] object-contain sm:w-[200px] sm:max-h-[36svh]"
            />
          </div>

          <div className="hero-line mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-5">
            <a
              href="#work"
              className="pressable rounded-full bg-lime px-5 py-2.5 font-sans text-sm font-semibold text-nori"
            >
              see the work
            </a>
            <a
              href="#note"
              className="pressable rounded-full border border-cream/20 px-5 py-2.5 font-sans text-sm text-cream"
            >
              the note
            </a>
          </div>

          <div className="hero-line mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 font-sans text-xs tracking-wide text-cream/45 sm:mt-6">
            <a href={`mailto:${SOCIALS.email}`} className="nav-link">
              Email
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="nav-link">
              LinkedIn
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="nav-link">
              GitHub
            </a>
            <a href={SOCIALS.medium} target="_blank" rel="noreferrer" className="nav-link">
              Medium
            </a>
          </div>
        </div>
      </section>

      <TypewriterDesk active />
    </>
  )
}
