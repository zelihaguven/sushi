import ShopLanterns from './components/ShopLanterns'
import PortalHero from './components/PortalHero'
import SushiShop from './components/SushiShop'
import SushiKitchen from './components/SushiKitchen'
import ChefPhilosophy, { OrderFooter } from './components/ChefPhilosophy'

function Nav() {
  const links = [
    { href: '#note', label: 'Note' },
    { href: '#work', label: 'Kaiten' },
    { href: '#kitchen', label: 'Kitchen' },
    { href: '#philosophy', label: 'Chef' },
    { href: '#contact', label: 'Order' },
  ]

  return (
    <header className="fixed top-0 z-30 w-full border-b border-cream/10 bg-[#141A17]/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-sm italic tracking-wide text-cream">
          鮨 omakase
        </a>
        <ul className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 font-sans text-sm font-medium text-cream/70 transition hover:bg-wine hover:text-lime"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#141A17]">
      <div className="paper-grain" />
      <ShopLanterns />
      <Nav />

      <main className="relative z-20">
        <PortalHero />
        <SushiShop />
        <SushiKitchen />
        <ChefPhilosophy />
        <OrderFooter />
      </main>

      <footer className="relative z-20 px-4 pb-10 text-center font-type text-xs uppercase tracking-[0.18em] text-cream/40">
        © {new Date().getFullYear()} Zeliha Ilgın Güven · Sushi Omakase Studio · Built with Precision & Care
      </footer>
    </div>
  )
}
