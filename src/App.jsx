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
    <header className="fixed top-0 z-30 w-full border-b border-cream/10 bg-[#141A17]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="pressable flex items-baseline gap-1.5 whitespace-nowrap text-cream">
          <span className="jp text-sm">鮨</span>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em]">sushi world</span>
        </a>
        <ul className="flex items-center gap-0.5 sm:gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link inline-block rounded-full px-2 py-1.5 font-sans text-xs font-medium text-cream/70 sm:px-3 sm:text-sm">
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
      <Nav />

      <main className="relative z-20">
        <PortalHero />
        <SushiShop />
        <SushiKitchen />
        <ChefPhilosophy />
        <OrderFooter />
      </main>

      <footer className="relative z-20 px-4 pb-10 text-center font-type text-xs uppercase tracking-[0.18em] text-cream/40">
        © {new Date().getFullYear()} Zeliha Ilgın Güven · sushi world
      </footer>
    </div>
  )
}
