export const ZONES = [
  { id: 'portal', label: 'Entrance' },
  { id: 'plates', label: 'Plates' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'recipe', label: 'Recipe' },
  { id: 'contact', label: 'Hello' },
]

export const KAITEN = { radius: 5.2, y: 0.86, z: 1.15 }

export const PROJECT_ANGLES = {
  mentiguide: -0.52,
  airgap: 1.18,
  aidmap: 2.88,
}

export const KITCHEN_STATION_IDS = ['maguro', 'salmon', 'tamago', 'wasabi']

export function projectPosition(id) {
  const angle = PROJECT_ANGLES[id] ?? 0
  return [
    Math.cos(angle) * KAITEN.radius,
    KAITEN.y,
    KAITEN.z + Math.sin(angle) * KAITEN.radius,
  ]
}

export function stackPosition(index) {
  return [-13.55 + index * 1.38, 0.92, -3.05]
}

export function experiencePosition(index) {
  const col = index % 3
  const row = Math.floor(index / 3)
  return [10.35 + col * 1.42, 1.58, -2.05 - row * 1.55]
}

const VIEWS = {
  portal: {
    eye: [0, 3.6, 21.5],
    target: [0, 1.55, 14.6],
  },
  plates: {
    eye: [0.4, 9.2, 11.4],
    target: [0, 0.2, 1.1],
  },
  kitchen: {
    eye: [-6.8, 6.4, 4.2],
    target: [-12.1, 0.85, -3.05],
  },
  recipe: {
    eye: [6.9, 6.5, 4.4],
    target: [11.8, 0.9, -2.8],
  },
  contact: {
    eye: [0, 5.4, -7.2],
    target: [0, 1.05, -13.6],
  },
}

export function getView(zoneId, selection) {
  if (selection?.type === 'project' && PROJECT_ANGLES[selection.id] != null) {
    const [x, y, z] = projectPosition(selection.id)
    return {
      eye: [x * 0.28, 3.6, z + 4.4],
      target: [x, y + 0.25, z],
    }
  }

  if (selection?.type === 'stack') {
    const index = Math.max(0, KITCHEN_STATION_IDS.indexOf(selection.id))
    const [x, y, z] = stackPosition(index)
    return {
      eye: [x + 3.6, 3.4, z + 4.2],
      target: [x, y, z],
    }
  }

  if (selection?.type === 'experience') {
    const [x, y, z] = experiencePosition(selection.index ?? 0)
    return {
      eye: [x - 0.2, 3.2, z + 3.8],
      target: [x, y, z],
    }
  }

  return VIEWS[zoneId] ?? VIEWS.portal
}
