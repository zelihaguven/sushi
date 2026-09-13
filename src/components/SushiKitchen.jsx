import { TECH_STACKS } from '../data/content'
import TechStackFridge from './TechStackFridge'

export default function SushiKitchen() {
  return (
    <section id="kitchen" className="relative z-20 mt-2 scroll-mt-24 overflow-hidden pb-20">
      <div className="kitchen-nook absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(252,248,242,0.18),transparent_46%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-[#8E1C24]">back of house</p>
        <h2 className="font-display mt-2 text-4xl font-medium italic text-[#3b2414] sm:text-5xl">
          The <span className="swash text-[#8E1C24]">kitchen</span>
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-7 text-[#3b2414]/75">
          The fridge is stocked. Maguro for models, salmon for data, tamago for product UI, wasabi for the tools that
          finish the plate.
        </p>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-6xl px-3 pb-8 sm:px-6">
        <TechStackFridge stacks={TECH_STACKS} />
        <div className="mt-6 flex justify-center lg:hidden">
          <svg viewBox="0 0 160 130" className="h-24 w-32" aria-hidden="true">
            <rect x="28" y="96" width="104" height="18" rx="4" fill="#2c241c" />
            <ellipse cx="80" cy="92" rx="52" ry="22" fill="#FCF8F2" />
            <path d="M32 78 C 40 48, 120 46, 128 78 C 118 96, 42 98, 32 78Z" fill="#FF6F59" />
            <circle cx="62" cy="86" r="5" fill="#141A17" />
            <circle cx="98" cy="86" r="5" fill="#141A17" />
            <path d="M70 98 C 76 104, 84 104, 90 98" fill="none" stroke="#141A17" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
