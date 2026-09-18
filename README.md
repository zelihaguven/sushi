# sushi universe

Explorable 3D portfolio for [Zeliha Ilgın Güven](https://github.com/zelihaguven). Visitors walk a clay sushi world: entrance, project plates, kitchen (tech), chef recipe (experience), and a hello table.

This is a personal product-engineer universe, not a restaurant brand site.

## Try locally

```bash
npm install
npm run dev
```

React is pinned to 19.2.3 (`@react-three/fiber` does not accept 19.3 yet). If install already failed, delete `node_modules` and run `npm install` again.

Open [http://localhost:5173](http://localhost:5173).

## Controls

- **Enter the world** from the portal note, then move between zones
- Tap **Entrance / Plates / Kitchen / Recipe / Hello** to fly the camera
- Tap a plate, station, or recipe tablet to read the real copy
- Drag to look around, scroll or pinch to zoom
- Esc closes the reading card
- Socials stay in the corner (and on the hello table)
- `prefers-reduced-motion`: camera snaps, floating plates stay still

## Build

```bash
npm run build
npm run preview
```

Static output is Vite `dist/`, fine for Vercel.

## Content

Copy and links live in `src/data/content.js`. The 3D scene does not invent projects.
