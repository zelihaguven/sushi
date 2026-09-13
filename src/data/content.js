export const SOCIALS = {
  email: 'ilgin.guven0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zelihaguven',
  github: 'https://github.com/zelihaguven',
  medium: 'https://medium.com/@zelihaguven',
}

export const TYPEWRITER_TEXT = `Zeliha Ilgın Güven —
Computer Engineering Student × Aspiring Product Engineer.

Dear guest,

Tonight’s omakase: Mentiguide, Airgap, AidMap.

If it has to work for a real human, I want to be the person who plates it.`

export const PROJECTS = [
  {
    id: 'mentiguide',
    title: 'Mentiguide',
    role: 'Program & Community Lead',
    blurb:
      'Mentee turned Program & Community Lead — matching, rituals, and a loop so nobody walks alone.',
    href: 'https://mentiguide.com',
    tags: ['Mentorship Ops', 'Community', 'Programs'],
    theme: 'wine',
    cut: 'nigiri',
    cutLabel: 'salmon nigiri',
    layers: {
      windowTitle: 'mentiguide · ops',
      pill: '33 mentees · 13 mentors',
      badge: 'Tech Istanbul',
      terminal: ['match --cohort 2', 'rituals: weekly live', 'nobody walks alone'],
    },
  },
  {
    id: 'airgap',
    title: 'Airgap',
    role: 'Offline PII lineage auditor',
    blurb: 'Local-first DataHub auditor. Detection is code; a local Ollama model only explains.',
    href: 'https://github.com/zelihaguven/airgap',
    tags: ['DataHub', 'Ollama', 'Local-first'],
    theme: 'cherry',
    cut: 'gunkan',
    cutLabel: 'ikura gunkan',
    layers: {
      windowTitle: 'airgap audit',
      pill: 'DataHub graph + Ollama',
      badge: 'air-gapped',
      terminal: ['R1 untagged PII leak', 'blast radius: CRITICAL', 'explain via localhost'],
    },
  },
  {
    id: 'aidmap',
    title: 'AidMap',
    role: 'Emergency aid coordination',
    blurb: 'NGO crisis mapping for OHack — live requests, pins, and inventory without double-aid.',
    href: 'https://aidmap-helper.vercel.app',
    repo: 'https://github.com/zelihaguven/AidMap',
    tags: ['OHack', 'NGOs', 'Maps'],
    theme: 'ember',
    cut: 'temaki',
    cutLabel: 'spicy temaki',
    layers: {
      windowTitle: 'aidmap · live',
      pill: 'crisis coordination',
      badge: 'OHack',
      terminal: ['pin: shelter / water', 'dedupe overlapping aid', 'mobile-first field UI'],
    },
  },
]

export const TECH_STACKS = [
  {
    id: 'maguro',
    name: 'Maguro',
    accent: '#8E1C24',
    skills: [
      { label: 'Python', color: '#c45c4a' },
      { label: 'pandas', color: '#e07a5f' },
      { label: 'scikit-learn', color: '#c23b3b' },
      { label: 'PyTorch', color: '#8E1C24' },
    ],
  },
  {
    id: 'salmon',
    name: 'Salmon',
    accent: '#FF6F59',
    skills: [
      { label: 'Ollama', color: '#FF6F59' },
      { label: 'DataHub', color: '#d4a574' },
      { label: 'SQL', color: '#8E1C24' },
      { label: 'RAG / LLMs', color: '#5b8def' },
    ],
  },
  {
    id: 'tamago',
    name: 'Tamago',
    accent: '#e2b84a',
    skills: [
      { label: 'React', color: '#e2b84a' },
      { label: 'TypeScript', color: '#f4a261' },
      { label: 'Next.js', color: '#8a6a3a' },
      { label: 'Tailwind CSS', color: '#7a8f3d' },
    ],
  },
  {
    id: 'wasabi',
    name: 'Wasabi',
    accent: '#7d9b4e',
    skills: [
      { label: 'Figma', color: '#8fb44a' },
      { label: 'Git', color: '#6f8f3a' },
      { label: 'REST API', color: '#5c7340' },
      { label: 'Vite', color: '#CADB66' },
    ],
  },
]

export const KITCHEN_TICKETS = [
  {
    no: '01',
    station: 'omakase',
    title: 'MentiGuide',
    body: 'Program & Community Lead — matching, onboarding, NPS.',
  },
  {
    no: '02',
    station: 'growth',
    title: '100sClub',
    body: 'Campus Growth Ambassador — cohort, events, leadership.',
  },
  {
    no: '03',
    station: 'research',
    title: 'HOPn',
    body: 'AI/ML research intern — Germany, product-facing models.',
  },
  {
    no: '04',
    station: 'lab',
    title: 'TÜBİTAK',
    body: 'ML pipelines on 10K+ cellular records; IEEE-targeted paper.',
  },
  {
    no: '05',
    station: 'edge',
    title: 'OTAGG',
    body: 'YOLO + LiDAR / Jetson eval for TEKNOFEST autonomy.',
  },
]

export const EXPERIENCES = [
  {
    course: '01',
    station: 'omakase',
    role: 'Program & Community Lead',
    org: 'MentiGuide',
    dates: 'Jul 2026 – Present',
    body: 'Own end-to-end program ops, mentor/mentee matching, onboarding, and community comms. Cross-functional with Growth, Product, and Content; track session completion, retention, and NPS.',
  },
  {
    course: '02',
    station: 'service',
    role: 'Campus Growth Ambassador',
    org: '100sClub',
    dates: 'Aug 2026 – Present',
    body: 'Selected for the cohort to drive campus engagement, brand awareness, peer networking, and events. Six-month leadership, project management, and strategic communication training.',
  },
  {
    course: '03',
    station: 'research',
    role: 'AI & Machine Learning Research Intern',
    org: 'HOPn · Germany',
    dates: 'Mar 2026 – Apr 2026',
    body: 'Literature reviews, experimental model evaluation, and exploratory data analysis for research-driven AI product features.',
  },
  {
    course: '04',
    station: 'lab',
    role: 'Research Intern — Data Science & Applied ML',
    org: 'TÜBİTAK 2247-C / BUÜ',
    dates: 'Aug 2025 – Feb 2026',
    body: 'Automated ML pipelines (Python, scikit-learn, pandas) on 10K+ cellular network records. Unsupervised clustering (K-Means, DBSCAN) with ~10% quality lift. Co-authoring an IEEE-targeted paper.',
  },
  {
    course: '05',
    station: 'edge',
    role: 'AI & Technical Strategy Contributor',
    org: 'OTAGG Autonomous Team · TEKNOFEST',
    dates: 'May 2025 – Dec 2025',
    body: 'Benchmarked YOLOv8/v9 and structured hardware–software evaluation for LiDAR and Jetson edge accelerators.',
  },
  {
    course: '06',
    station: 'front of house',
    role: 'Frontend Developer & UI/UX Contributor',
    org: 'Feelize & Curiosity Technology',
    dates: 'Jan 2025 – Sep 2025',
    body: 'Responsive React/TypeScript SaaS interfaces and open-source platform features — user engagement up 59%.',
  },
]

export const TRAINING = [
  'B.Sc. Computer Engineering · Bursa Uludağ University · 2023–2027 · GPA 3.16/4.00',
  'Erasmus · Software Engineering · Hochschule Heilbronn · Best EdGame & Best Design, SEMCON26',
  'Aspire Leaders Program · founded by Harvard faculty · 2025',
]
