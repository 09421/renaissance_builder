# Renaissance Builder 🏰

A small Next.js + TypeScript app for designing and managing armies for a renaissance-inspired tabletop builder.

## Quick Start

**Prerequisites**
- Node.js (18+ recommended)
- npm

**Install**
```bash
npm install
```

**Run (development)**
```bash
npm run dev
```

**Build & Start (production)**
```bash
npm run build
npm run start
```

**Lint**
```bash
npm run lint
```

---

## Tech Stack
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (state management)

## Project Structure (important files)
- `src/app/` - Next.js app routes and global layout
  - `builder/` - The army builder UI
- `src/components/builder/` - UI components for building armies (`UnitList`, `UnitEditor`, `ArmyList`)
- `src/data/` - Faction and unit data
- `src/store/` - Zustand store (`armyStore.ts`)
- `src/utils/` - Helper functions (`armyMath.ts`, `getFactionData.ts`)
- `package.json` - Scripts: `dev`, `build`, `start`, `lint`

---
