import { EXPERIENCES, PROJECTS, SOCIALS, TECH_STACKS, TRAINING, TYPEWRITER_TEXT } from '../data/content'

export default function WebGLFallback() {
  return (
    <main className="min-h-screen bg-[#f3e4d4] px-5 py-10 text-stone-800">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">sushi universe</p>
      <h1 className="mt-2 font-sans text-3xl font-semibold tracking-tight">Zeliha Ilgın Güven</h1>
      <p className="mt-1 text-sm text-stone-500">Product Engineer · 3D view needs WebGL</p>
      <pre className="mt-6 max-w-xl whitespace-pre-wrap font-sans text-[15px] leading-6 text-stone-700">{TYPEWRITER_TEXT}</pre>

      <section className="mt-10 max-w-xl">
        <h2 className="text-lg font-semibold">Plates</h2>
        <ul className="mt-3 space-y-4">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <a href={project.href} className="font-medium underline" target="_blank" rel="noreferrer">
                {project.title}
              </a>
              <p className="text-sm text-stone-500">{project.role}</p>
              <p className="mt-1 text-sm leading-6">{project.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-xl">
        <h2 className="text-lg font-semibold">Kitchen</h2>
        {TECH_STACKS.map((stack) => (
          <p key={stack.id} className="mt-2 text-sm">
            <span className="font-medium">{stack.name}:</span> {stack.skills.map((skill) => skill.label).join(', ')}
          </p>
        ))}
      </section>

      <section className="mt-10 max-w-xl">
        <h2 className="text-lg font-semibold">Recipe</h2>
        <ul className="mt-3 space-y-3">
          {EXPERIENCES.map((experience) => (
            <li key={experience.course} className="text-sm leading-6">
              <span className="font-medium">{experience.role}</span> · {experience.org}
              <p className="text-stone-500">{experience.dates}</p>
              <p>{experience.body}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-1 text-sm text-stone-600">
          {TRAINING.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 flex flex-wrap gap-4 text-sm">
        <a href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={SOCIALS.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={SOCIALS.medium} target="_blank" rel="noreferrer">
          Medium
        </a>
      </section>
    </main>
  )
}
