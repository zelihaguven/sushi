import { useEffect, useRef, useState } from 'react'
import LegoChefAvatar from './LegoChefAvatar'
import TypewriterDesk from './TypewriterDesk'
import { OpeningNoren, SteamSpores } from './NorenEntrance'

function clamp01(value) {
  return Math.max(0, Math.min(1, value))
}

function PortalStage({ progress }) {
  const ease = progress * progress * (3 - 2 * progress)
  const portalScale = 1 + ease * 2.5
  const portalOpacity = 1 - clamp01(ease / 0.52)
  const workshopIn = clamp01((ease - 0.48) / 0.36)
  const workshopScale = 0.72 + 0.28 * workshopIn
  const arrived = ease > 0.64

  return (
    <div className="relative h-screen overflow-hidden bg-[#141A17]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#8E1C24_0%,_#141A17_62%,_#0C100E_100%)]" />
      <SteamSpores progress={ease} />

      <div
        className="absolute inset-0 z-10 flex origin-center items-center justify-center will-change-transform"
        style={{
          transform: `scale(${portalScale})`,
          opacity: portalOpacity,
          pointerEvents: portalOpacity < 0.08 ? 'none' : 'auto',
          visibility: portalOpacity < 0.02 ? 'hidden' : 'visible',
        }}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center px-4 pt-16 text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.36em] text-[#CADB66]">irasshaimase</p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,7vw,4.8rem)] leading-[0.95] text-cream">
            the product engineer&apos;s
            <br />
            <span className="swash text-[1.06em] text-[#CADB66]">omakase.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-serif text-lg leading-8 text-cream/75 sm:text-xl">
            Freshly engineered digital systems, prepared to order.
          </p>
          <div className="relative z-10 mt-6">
            <LegoChefAvatar greeting />
          </div>
        </div>
      </div>

      <OpeningNoren progress={ease} />

      <div
        className="absolute inset-0 z-20 flex origin-center items-center justify-center will-change-transform"
        style={{
          opacity: workshopIn,
          transform: `scale(${workshopScale})`,
          pointerEvents: arrived ? 'auto' : 'none',
          visibility: workshopIn < 0.02 ? 'hidden' : 'visible',
        }}
        aria-hidden={!arrived}
        {...(!arrived ? { inert: '' } : {})}
      >
        <div className="relative w-full max-w-5xl px-4">
          <TypewriterDesk active={arrived} embedded />
        </div>
      </div>
    </div>
  )
}

export default function PortalHero() {
  const wrapRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    const onMedia = () => setReduced(media.matches)
    media.addEventListener('change', onMedia)

    let raf = 0
    const update = () => {
      const node = wrapRef.current
      if (!node) return
      const total = node.offsetHeight - window.innerHeight
      const top = -node.getBoundingClientRect().top
      setProgress(clamp01(total <= 0 ? 1 : top / total))
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      media.removeEventListener('change', onMedia)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (reduced) {
    return (
      <>
        <section id="top" className="relative">
          <PortalStage progress={0} />
        </section>
        <TypewriterDesk active embedded={false} />
      </>
    )
  }

  return (
    <section ref={wrapRef} id="top" className="relative h-[250vh]">
      <div className="sticky top-0">
        <PortalStage progress={progress} />
      </div>
      <div id="note" className="absolute bottom-0 h-screen w-px" />
    </section>
  )
}
