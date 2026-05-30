# Flow

## Project Title
Flow

## Project Summary
Flow is a premium Indonesian footwear and sneaker showcase site built for the TRAE x PixVerse hackathon. The experience is designed as a cinematic single-page storefront with a scroll-driven hero, editorial storytelling, curated variants, reviews, a header cart popup, and a dedicated `/support` route for video-led customer support.

The product direction is intentionally frontend-first and media-led. PixVerse-generated videos are treated as first-class product content, especially in the hero and story sections.

## Target Audience
- Style-conscious shoppers who want footwear with a premium, fashion-editorial feel
- Users who respond to cinematic product storytelling rather than generic ecommerce layouts
- Hackathon judges, creative technologists, and product/design reviewers evaluating the Flow experience
- Early brand viewers who want a sharper, more curated Indonesian footwear identity

## Problem Being Solved
Most ecommerce footwear experiences feel static, interchangeable, and overly transactional. Flow aims to solve that by presenting shoes through a more immersive, cinematic, and brand-led experience.

Instead of leading with a commodity product grid, Flow leads with:
- scroll-driven product storytelling
- premium editorial presentation
- curated product variants
- lightweight cart intent
- calm, templated support answers on a dedicated route

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
