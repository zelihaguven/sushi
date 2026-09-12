import { KITCHEN_TICKETS } from '../data/content'
import { KitchenHood, KnifeStrip, StoveRange, UtensilRack } from './KitchenSet'

export default function SushiKitchen() {
  return (
    <section id="kitchen" className="relative z-20 mt-2 scroll-mt-24 overflow-hidden pb-24">
      <div className="kitchen-tiles absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,225,87,0.08),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-lime">back of house</p>
        <h2 className="font-display mt-2 text-4xl font-medium italic text-cream sm:text-5xl">
          The <span className="swash text-[#CADB66]">kitchen</span>
        </h2>
        <p className="mt-4 max-w-2xl font-display text-lg italic text-cream/70">
          Pass under the hood. Tickets clip the rail. The range is live. This is where the work is prepped before it
          hits the belt.
        </p>
      </div>

      <div className="relative mx-auto mt-2 w-full max-w-6xl px-2 sm:px-4">
        <KitchenHood />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-[72px_1fr_56px] items-start gap-2 px-2 sm:grid-cols-[140px_1fr_80px] sm:px-4">
        <div className="hidden h-72 sm:block">
          <UtensilRack />
        </div>

        <div className="relative">
          <div className="ticket-rail mx-auto h-2.5 w-[92%] rounded-full" />
          <div className="mt-0 grid grid-cols-2 gap-x-3 sm:grid-cols-3 lg:grid-cols-5">
            {KITCHEN_TICKETS.map((ticket) => (
              <div key={ticket.no} className="flex flex-col items-center">
                <span className="h-7 w-px bg-[#CADB66]" />
                <span className="ticket-clip -mb-1 h-2.5 w-5 rounded-sm bg-[#CADB66]" />
                <article className="ticket-slip w-full rounded-2xl bg-[#FCF8F2] px-3 py-3 text-[#141A17] shadow-[4px_10px_0_rgba(20,26,23,0.22)]">
                  <div className="flex items-center justify-between font-type text-[10px] uppercase tracking-[0.22em] text-wine">
                    <span>#{ticket.no}</span>
                    <span>{ticket.station}</span>
                  </div>
                  <h3 className="font-display mt-2 text-xl italic leading-tight sm:text-2xl">{ticket.title}</h3>
                  <p className="mt-2 font-serif text-sm leading-5 text-mahogany/75">{ticket.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden h-64 sm:block">
          <KnifeStrip />
        </div>
      </div>

      <div className="relative mx-auto mt-6 w-full max-w-6xl px-2 sm:px-4">
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-16 w-24 -translate-x-1/2">
          <span className="steam absolute left-6 top-0 h-14 w-8" />
          <span className="steam absolute left-12 top-2 h-12 w-7" style={{ animationDelay: '0.8s' }} />
        </div>
        <StoveRange />
      </div>

      <div className="counter-wood relative mx-auto h-8 w-full max-w-none shadow-[0_-18px_40px_rgba(0,0,0,0.45)]" />
    </section>
  )
}
