import { FridgeSushi } from './SushiArt'

export default function TechStackFridge({ stacks }) {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-cream/10 bg-[#0C100E]">
      <div className="flex items-center justify-between border-b border-cream/10 px-5 py-3">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#CADB66]">
          tonight’s supplies
        </p>
        <p className="jp text-lg text-[#CADB66]">鮨</p>
      </div>
      <ul>
        {stacks.map((stack, index) => (
          <li
            key={stack.id}
            className="grid items-center gap-4 border-b border-cream/10 px-4 py-5 last:border-b-0 sm:grid-cols-[7.5rem_1fr] sm:px-6"
          >
            <div className="flex justify-center sm:justify-start">
              <FridgeSushi kind={stack.id} />
            </div>
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: stack.accent }}>
                {String(index + 1).padStart(2, '0')} · {stack.name}
              </p>
              <p className="mt-2 font-serif text-xl leading-7 text-cream">
                {stack.skills.map((skill) => skill.label).join(' · ')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
