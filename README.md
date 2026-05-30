# Flow

## Project Title
Flow

## Project Summary
Flow is a premium Indonesian footwear and sneaker showcase site built for the TRAE x PixVerse hackathon. The experience is designed as a cinematic single-page storefront with a scroll-driven hero, editorial storytelling, curated variants, reviews, a header cart popup, and a dedicated `/support` route for video-led customer support.

The product direction is intentionally frontend-first and media-led. PixVerse-generated videos are treated as first-class product content, especially in the hero and story sections.

## Target Audience
Flow is a storefront for a premium, design-led footwear brand. It is built for:
- Style-conscious shoppers who want footwear with a premium, fashion-editorial feel
- Customers who respond to cinematic product storytelling rather than generic ecommerce layouts
- Buyers who need reassurance before purchase — sizing, authenticity, returns, shipping — but prefer guided, on-demand answers over live chat
- Brand-led and early-adopter customers drawn to a sharper, more curated Indonesian footwear identity

## Problem Being Solved
Most ecommerce footwear experiences feel static, interchangeable, and overly transactional. They lead with a commodity product grid that does little to build desire or brand trust, and they push pre-purchase questions into generic FAQs or slow live chat.

Flow exists to give a premium footwear brand a storefront that sells through experience, not just listing. It does this by leading with:
- scroll-driven product storytelling
- premium editorial presentation
- curated product variants
- lightweight cart intent
- calm, video-led support answers on a dedicated route

## TRAE Workflow
Flow is built with TRAE as the primary coding agent, following a documentation-driven workflow so the agent and human contributors share a single source of truth. The high-level workflow implemented:

1. **Plan** — product and design intent is captured up front in `.trae/documents/` (`flow-prd.md`, `flow-technical-architecture.md`, `flow-page-design.md`).
2. **Contract** — the planning set is distilled into an operating layer the agent reads on every task: `AGENTS.md` (how agents work and what not to break), `DECISIONS.md` (locked decisions / ADRs), `features.json` (machine-readable feature spec), `ARCHITECTURE.md` (structure), and `PROGRESS.md` (status).
3. **Source-of-truth precedence** — on conflict, docs resolve in order: `DECISIONS.md` → `flow-page-design.md` → `flow-technical-architecture.md` → `flow-prd.md` → `features.json` → `PROGRESS.md`.
4. **Implement in scoped passes** — TRAE builds one surface at a time (app shell + routing → scroll-driven hero → commerce sections → support), favoring modular React components and typed local data over backend dependencies.
5. **Change protocol** — before significant work the agent reads `PROGRESS.md`, `DECISIONS.md`, and `features.json`; after a change it updates `PROGRESS.md`, and revises `DECISIONS.md` / `features.json` / `ARCHITECTURE.md` when scope, decisions, or structure shift.
6. **Review & verify** — each pass is reviewed for brand fidelity and correctness, then validated with `npm run check` (lint + build + test) before moving on.

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router
- Vitest + React Testing Library

## Setup
### Requirements
- Node.js
- npm

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build For Production
```bash
npm run build
```

### Run Tests
```bash
npm run test
```

### Run Full Project Checks
```bash
npm run check
```

## Project Structure
```text
src/
  assets/
  components/
  data/
  pages/
  store/
  utils/
```

## PixVerse Video Assets
PixVerse-generated videos are currently stored in:

```text
src/assets/
```

Current examples include:
- `src/assets/flow-hero-01.mp4`
- `src/assets/flow-hero-02.mp4`
- `src/assets/flow-hero-03.mp4`
- `src/assets/flow-hero-04.mp4`
- `src/assets/flow-hero-05.mp4`
- `src/assets/flow-hero-06.mp4`
- `src/assets/flow-hero-07.mp4`
- `src/assets/story.mp4`

If you were expecting `/assets/`, the current codebase uses `src/assets/` so the files can be imported directly into the React app.

## Routes
- `/` — single-page cinematic showcase
- `/support` — customer support page with templated video-answer interactions

## Notes
- The current build is frontend-only
- Cart behavior is intent-focused, not transactional checkout
- The visual identity is anchored by black, graphite, and red, with the `Flow` wordmark always in red
