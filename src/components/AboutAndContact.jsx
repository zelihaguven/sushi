import { Github, Linkedin, Mail, Newspaper } from 'lucide-react'
import { SOCIALS } from '../data/content'

const LINKS = [
  {
    id: 'email',
    label: 'Email',
    handle: SOCIALS.email,
    href: `mailto:${SOCIALS.email}`,
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'zelihaguven',
    href: SOCIALS.linkedin,
    icon: Linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'zelihaguven',
    href: SOCIALS.github,
    icon: Github,
  },
  {
    id: 'medium',
    label: 'Medium',
    handle: '@zelihaguven',
    href: SOCIALS.medium,
    icon: Newspaper,
  },
]

export default function AboutAndContact() {
  return (
    <section id="contact" className="relative z-20 mx-auto mt-8 w-full max-w-6xl scroll-mt-24 px-4 pb-28 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[32px] bg-[#FCF8F2] p-8 text-[#141A17] shadow-paper">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-wine">manifesto</p>
          <h2 className="font-display mt-2 text-4xl font-light italic sm:text-5xl">
            Computer engineering <span className="swash text-wine">×</span> product
          </h2>
          <div className="mt-5 space-y-4 font-serif text-lg leading-8 text-mahogany/80">
            <p>
              I trained as a computer engineer because I wanted to know how systems actually work. I stayed in product
              because knowing is not the same as shipping something a person can use on a messy Tuesday.
            </p>
            <p>
              That seam is the job: research internships, mentorship operations, local-first data governance, crisis
              coordination. I like problems that have both a graph and a human on the other end of it.
            </p>
            <p>
              If you are building something at that intersection — AI, community, or infrastructure that has to stay
              honest — write to me.
            </p>
          </div>
        </article>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {LINKS.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.id === 'email' ? undefined : '_blank'}
                rel={link.id === 'email' ? undefined : 'noreferrer'}
                className="group flex items-center gap-4 rounded-[22px] border border-cream/10 bg-cherry/50 px-4 py-4 shadow-sm backdrop-blur transition duration-300 ease-burst hover:-translate-y-1 hover:border-lime hover:bg-wine"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-mahogany transition-transform duration-300 ease-burst group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-lime">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block font-serif text-lg italic text-cream">{link.label}</span>
                  <span className="block font-type text-xs text-cream/60">{link.handle}</span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
