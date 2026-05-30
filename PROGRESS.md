# PROGRESS.md

## Current Status
Project phase: scaffolded + initial implementation

## Completed
- Established the core concept for `Flow` as a premium Indonesian footwear showcase site for the TRAE x PixVerse hackathon
- Defined the main experience as a single-page storefront with a scroll-driven PixVerse video hero
- Defined downstream commerce sections: story, variants, reviews, related, and cart
- Defined the dedicated `/support` page with a PixVerse-generated support host and templated Q&A behavior
- Created the planning documents in `.trae/documents/`
- Added repository-level operational docs: `AGENTS.md`, `PROGRESS.md`, `DECISIONS.md`, `features.json`, and `ARCHITECTURE.md`
- Scaffolded the frontend with React + TypeScript + Vite
- Added Tailwind CSS (v4 PostCSS integration) with Flow brand tokens (black/graphite + brand red)
- Added routing for `/` (showcase) and `/support` (support)
- Added Zustand stores for cart, showcase hero progress, and support selection
- Added typed local mock data modules for products, reviews, and support Q&A
- Added Vitest + React Testing Library and a smoke test for the app shell
- Support page demo assistant: plays `how can i help` once on load, then loops `idle`; support prompts play their mapped videos once then return to idle
- Support prompt chips are horizontally draggable (no wrapping) and the chat area stays constrained/scrollable

## In Progress
- Replacing placeholder “video stages” with real PixVerse video + poster assets (hero + support host)
- Iterating the scroll-driven hero choreography into the planned multi-shot sequence

## Next
- Refine global shell (header behavior, section nav, responsive adaptation)
- Implement real hero media loading + scroll/video synchronization (with graceful fallback + reduced motion)
- Upgrade variants (angle selector, hover previews) and cart intent UI (sticky summary behavior)
- Implement support host video cues per question (calmer motion than home page)
- Expand tests for cart and support interactions
- Optimize video performance (poster fallbacks, progressive loading, lazy below-the-fold)

## Open Risks
- Final PixVerse asset availability may affect how realistic the hero choreography can be in the first implementation pass
- Scroll-video synchronization may need performance tuning on lower-powered devices
- The support-host experience needs careful UX design so it feels premium rather than gimmicky

## Notes
- The product is still intentionally frontend-only for the hackathon phase
- Cart behavior is currently planned as intent-focused rather than full transactional checkout
