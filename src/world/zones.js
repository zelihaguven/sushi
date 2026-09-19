export const ZONES = [
  { id: 'portal', label: 'Entrance' },
  { id: 'plates', label: 'Plates' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'recipe', label: 'Recipe' },
  { id: 'contact', label: 'Hello' },
]

export const KAITEN = { radius: 5.2, y: 0.78, z: 1.15 }

export const PROJECT_ANGLES = {
  mentiguide: -0.45,
  airgap: 1.35,
  aidmap: 2.95,
}

export const KITCHEN = { x: -16.4, z: -3.4 }
export const RECIPE = { x: 16.4, z: -3.4 }
export const CONTACT = { x: 0, z: -16.6 }
export const PORTAL = { x: 0, z: 15.6 }

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
  return [KITCHEN.x - 2.45 + index * 1.64, 0.98, KITCHEN.z + 0.15]
}

export function experiencePosition(index) {
  const col = index % 3
  const row = Math.floor(index / 3)
  return [RECIPE.x - 1.7 + col * 1.7, 1.55, RECIPE.z + 0.35 - row * 1.55]
}

const VIEWS = {
  portal: {
    eye: [0, 4.4, 24.5],
    target: [0, 1.5, 14.2],
  },
  plates: {
    eye: [8.2, 6.8, 11.6],
    target: [0.2, 0.35, 1.2],
  },
  kitchen: {
    eye: [-10.4, 5.6, 3.8],
    target: [KITCHEN.x, 1.05, KITCHEN.z],
  },
  recipe: {
    eye: [10.2, 5.8, 4.2],
    target: [RECIPE.x, 1.15, RECIPE.z],
  },
  contact: {
    eye: [0, 5.2, -10.4],
    target: [CONTACT.x, 1.1, CONTACT.z],
  },
}

export function getView(zoneId, selection) {
  if (selection?.type === 'project' && PROJECT_ANGLES[selection.id] != null) {
    const [x, y, z] = projectPosition(selection.id)
    return {
      eye: [x + 2.8, 3.2, z + 3.6],
      target: [x, y + 0.35, z],
    }
  }

  if (selection?.type === 'stack') {
    const index = Math.max(0, KITCHEN_STATION_IDS.indexOf(selection.id))
    const [x, y, z] = stackPosition(index)
    return {
      eye: [x + 2.8, 3.1, z + 3.6],
      target: [x, y + 0.05, z],
    }
  }

  if (selection?.type === 'experience') {
    const [x, y, z] = experiencePosition(selection.index ?? 0)
    return {
      eye: [x - 0.4, 3.0, z + 3.4],
      target: [x, y, z],
    }
  }

  return VIEWS[zoneId] ?? VIEWS.portal
}
