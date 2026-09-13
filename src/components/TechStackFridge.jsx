function MaguroPiece() {
  return (
    <svg viewBox="0 0 180 90" className="h-24 w-[200px]" aria-hidden="true">
      <ellipse cx="90" cy="70" rx="68" ry="18" fill="#FCF8F2" stroke="#c9b89a" strokeWidth="2.2" />
      {[34, 52, 70, 88, 106, 124, 142].map((x) => (
        <circle key={x} cx={x} cy="70" r="2.4" fill="#e8dfcc" />
      ))}
      <path
        d="M22 54 C 30 16, 150 14, 158 54 C 148 70, 32 72, 22 54Z"
        fill="#c41e3a"
        stroke="#8E1C24"
        strokeWidth="2.4"
      />
      <path d="M42 36 C 80 26, 118 26, 144 40" fill="none" stroke="#e07a5f" strokeWidth="3" strokeLinecap="round" />
      <path d="M46 48 C 88 40, 124 40, 146 54" fill="none" stroke="#8E1C24" strokeWidth="1.6" opacity="0.4" />
    </svg>
  )
}

function SalmonPiece() {
  return (
    <svg viewBox="0 0 180 90" className="h-24 w-[200px]" aria-hidden="true">
      <ellipse cx="90" cy="70" rx="68" ry="18" fill="#FCF8F2" stroke="#c9b89a" strokeWidth="2.2" />
      {[34, 52, 70, 88, 106, 124, 142].map((x) => (
        <circle key={x} cx={x} cy="70" r="2.4" fill="#e8dfcc" />
      ))}
      <path
        d="M22 54 C 32 14, 148 14, 158 54 C 148 70, 32 72, 22 54Z"
        fill="#FF6F59"
        stroke="#e45a46"
        strokeWidth="2.4"
      />
      <path d="M44 34 C 84 24, 120 24, 144 38" fill="none" stroke="#ffd0c4" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M42 46 C 86 38, 122 38, 146 50" fill="none" stroke="#ffd0c4" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function TamagoPiece() {
  return (
    <svg viewBox="0 0 180 90" className="h-24 w-[200px]" aria-hidden="true">
      <ellipse cx="90" cy="70" rx="68" ry="18" fill="#FCF8F2" stroke="#c9b89a" strokeWidth="2.2" />
      {[34, 52, 70, 88, 106, 124, 142].map((x) => (
        <circle key={x} cx={x} cy="70" r="2.4" fill="#e8dfcc" />
      ))}
      <path
        d="M26 56 C 34 16, 146 16, 154 56 C 144 70, 36 72, 26 56Z"
        fill="#f2d15a"
        stroke="#d4a017"
        strokeWidth="2.4"
      />
      <path d="M50 34 C 90 26, 122 26, 140 40" fill="none" stroke="#fff3b0" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  )
}

function WasabiMound() {
  return (
    <svg viewBox="0 0 150 100" className="h-[92px] w-[140px]" aria-hidden="true">
      <path
        d="M75 6 C 38 16, 14 52, 26 80 C 40 98, 110 98, 124 80 C 136 52, 112 14, 75 6Z"
        fill="#8fb44a"
        stroke="#5c7340"
        strokeWidth="2.6"
      />
      <path d="M75 18 C 58 40, 52 60, 66 80" fill="none" stroke="#c5d97a" strokeWidth="5" strokeLinecap="round" />
      <path d="M84 22 C 98 44, 102 62, 88 80" fill="none" stroke="#6f8f3a" strokeWidth="2.4" opacity="0.45" />
    </svg>
  )
}

const PIECES = {
  maguro: MaguroPiece,
  salmon: SalmonPiece,
  tamago: TamagoPiece,
  wasabi: WasabiMound,
}

function StackCard({ stack }) {
  return (
    <article className="relative min-w-[148px] rounded-xl bg-[#F6E9C8] px-3 py-2.5 shadow-[2px_3px_0_rgba(90,60,30,0.18)] ring-1 ring-[#d4b896]">
      <span className="absolute -top-1.5 left-4 h-3 w-6 rounded-sm bg-[#c9a36a] shadow-sm" aria-hidden="true" />
      <h3 className="font-display text-lg italic leading-none" style={{ color: stack.accent }}>
        {stack.name}
      </h3>
      <ul className="mt-2 space-y-1">
        {stack.skills.map((skill) => (
          <li key={skill.label} className="flex items-center gap-2 font-sans text-[12px] font-medium text-[#4a3420]">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: skill.color }} />
            {skill.label}
          </li>
        ))}
      </ul>
    </article>
  )
}

function FridgeShelf({ stack }) {
  const Piece = PIECES[stack.id]
  return (
    <div className="relative grid grid-cols-1 items-end gap-2 px-2 pb-4 pt-2 sm:grid-cols-[1fr_auto] sm:gap-6">
      <div className="flex justify-center sm:justify-start sm:pl-2">
        <Piece />
      </div>
      <StackCard stack={stack} />
      <div className="absolute inset-x-0 bottom-0 h-2.5 rounded-sm bg-gradient-to-b from-[#d7b07a] to-[#b8894c] shadow-[0_4px_0_#8a6230]" />
    </div>
  )
}

function CuteCounterNigiri() {
  return (
    <svg viewBox="0 0 160 130" className="h-28 w-36 drop-shadow-lg" role="img">
      <title>Happy salmon nigiri</title>
      <rect x="28" y="96" width="104" height="18" rx="4" fill="#2c241c" />
      <ellipse cx="80" cy="92" rx="52" ry="22" fill="#FCF8F2" stroke="#c9b89a" strokeWidth="2.4" />
      <path
        d="M32 78 C 40 48, 120 46, 128 78 C 118 96, 42 98, 32 78Z"
        fill="#FF6F59"
        stroke="#e45a46"
        strokeWidth="2.4"
      />
      <path d="M48 64 C 72 56, 96 56, 114 66" fill="none" stroke="#ffd0c4" strokeWidth="3" strokeLinecap="round" />
      <circle cx="62" cy="86" r="5" fill="#141A17" />
      <circle cx="98" cy="86" r="5" fill="#141A17" />
      <circle cx="60.5" cy="84.5" r="1.6" fill="#fff" />
      <circle cx="96.5" cy="84.5" r="1.6" fill="#fff" />
      <circle cx="54" cy="94" r="4.5" fill="#FF6F59" opacity="0.45" />
      <circle cx="106" cy="94" r="4.5" fill="#FF6F59" opacity="0.45" />
      <path d="M70 98 C 76 104, 84 104, 90 98" fill="none" stroke="#141A17" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function LeftNook() {
  return (
    <div className="hidden w-28 flex-col items-center justify-end gap-6 lg:flex">
      <svg viewBox="0 0 120 150" className="w-24" aria-hidden="true">
        <rect x="8" y="78" width="104" height="10" rx="2" fill="#c9a36a" />
        <rect x="18" y="48" width="38" height="32" rx="8" fill="#d9c4a0" />
        <ellipse cx="37" cy="48" rx="18" ry="8" fill="#cbb896" />
        <rect x="68" y="58" width="32" height="22" rx="10" fill="#e8b4a2" />
        <ellipse cx="84" cy="58" rx="16" ry="7" fill="#f0c9ba" />
        <path d="M28 48 C 20 28, 36 12, 44 28 C 52 10, 70 24, 58 44" fill="#5c8a4a" />
        <circle cx="36" cy="22" r="8" fill="#6f9b54" />
        <circle cx="52" cy="18" r="7" fill="#7d9b4e" />
      </svg>
      <svg viewBox="0 0 90 110" className="w-20" aria-hidden="true">
        <rect x="18" y="8" width="54" height="86" rx="6" fill="#d4b07a" />
        <rect x="24" y="14" width="42" height="74" rx="4" fill="#e6c48a" />
        <rect x="8" y="70" width="18" height="8" rx="2" fill="#c9a36a" />
      </svg>
    </div>
  )
}

export default function TechStackFridge({ stacks }) {
  return (
    <div className="flex items-end justify-center gap-4 lg:gap-8">
      <LeftNook />

      <div className="relative w-full max-w-[620px]">
        <div className="rounded-[28px] bg-[#8FCBB8] p-3 shadow-[0_28px_50px_-24px_rgba(20,26,23,0.55)] ring-[6px] ring-[#6FA894] sm:rounded-[34px] sm:p-4">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-[#e6c48a] to-[#c9a36a] px-3 py-2.5 shadow-inner">
            <span className="text-[#FF6F59]" aria-hidden="true">
              ♥
            </span>
            <p className="font-sans text-[13px] font-black uppercase tracking-[0.12em] text-[#3b2414] sm:text-base">
              Tech Stack Supplies
            </p>
            <span className="text-[#FF6F59]" aria-hidden="true">
              ♥
            </span>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-[22px] bg-[#F4E6C8] px-2 pb-3 pt-1 shadow-inner">
            <div className="pointer-events-none absolute inset-y-3 left-2 w-2 rounded-full bg-white/35" />
            {stacks.map((stack) => (
              <FridgeShelf key={stack.id} stack={stack} />
            ))}
          </div>
        </div>
        <div className="absolute -right-2 top-24 hidden h-20 w-3 rounded-l-full bg-[#5e9a88] sm:block" aria-hidden="true" />
      </div>

      <div className="hidden w-36 flex-col items-center justify-end gap-4 pb-6 lg:flex">
        <svg viewBox="0 0 80 90" className="w-16" aria-hidden="true">
          <rect x="22" y="38" width="36" height="48" rx="8" fill="#c9a36a" />
          <rect x="28" y="18" width="8" height="28" rx="2" fill="#7a5a22" />
          <rect x="38" y="12" width="8" height="34" rx="2" fill="#8a6a32" />
          <rect x="48" y="20" width="8" height="26" rx="2" fill="#7a5a22" />
          <path d="M58 58 C 78 48, 78 22, 54 18" fill="#6f9b54" />
        </svg>
        <CuteCounterNigiri />
      </div>
    </div>
  )
}
