import { PROJECTS } from '../data/content'
import BurstProjectCard from './BurstProjectCard'

export default function ProjectShowcase() {
  return (
    <section id="work" className="relative z-20 mx-auto mt-8 w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-lime">from the workshop</p>
      <h2 className="font-display mt-2 max-w-2xl text-4xl font-medium italic text-cream sm:text-5xl">
        Pieces that <span className="swash text-[#CADB66]">bloomed</span> here
      </h2>
      <p className="mt-4 max-w-2xl font-display text-lg italic text-cream/70">
        Hover a card — mockups, architecture pills, badges, and terminal scraps burst past the plate.
      </p>
      <div className="mt-14 grid gap-28 overflow-visible px-2 pb-20 pt-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
        {PROJECTS.map((project) => (
          <BurstProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
