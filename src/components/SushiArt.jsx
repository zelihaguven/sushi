const CUTS = {
  nigiri: '/sushi/salmon-nigiri.png',
  gunkan: '/sushi/ikura-gunkan.png',
  temaki: '/sushi/spicy-temaki.png',
}

const FRIDGE = {
  maguro: '/sushi/maguro-nigiri.png',
  salmon: '/sushi/salmon-nigiri.png',
  tamago: '/sushi/tamago-nigiri.png',
  wasabi: '/sushi/wasabi-buddy.png',
}

function Sticker({ src, className }) {
  return <img src={src} alt="" draggable={false} className={className} />
}

export function FridgeSushi({ kind = 'salmon' }) {
  return <Sticker src={FRIDGE[kind] ?? FRIDGE.salmon} className="sushi-sticker sushi-sticker--fridge" />
}

export function WasabiBuddy() {
  return <Sticker src="/sushi/wasabi-buddy.png" className="sushi-sticker sushi-sticker--buddy" />
}

export function GingerBuddy() {
  return <Sticker src="/sushi/ginger-buddy.png" className="sushi-sticker sushi-sticker--ginger" />
}

export default function SushiArt({ cut = 'nigiri' }) {
  return <Sticker src={CUTS[cut] ?? CUTS.nigiri} className="sushi-sticker" />
}
