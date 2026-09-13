import { TECH_STACKS } from '../data/content'
import TechStackFridge from './TechStackFridge'
import Reveal from './Reveal'

export default function SushiKitchen() {
  return (
    <section id="kitchen" className="relative z-20 scroll-mt-24 bg-[#141A17] pb-20 pt-16">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-[#CADB66]">back of house</p>
        <h2 className="font-display mt-2 text-4xl text-cream sm:text-5xl">
          The <span className="swash text-[#CADB66]">kitchen</span>
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-7 text-cream/70">
          Maguro for models, salmon for data, tamago for product UI, wasabi for the tools that finish the plate.
        </p>
      </div>

      <Reveal className="relative mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6">
        <TechStackFridge stacks={TECH_STACKS} />
      </Reveal>
    </section>
  )
}
