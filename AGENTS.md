# AGENTS.md

## Purpose
This file defines how human contributors and coding agents should work in the `Flow` repository during build-out, polish, and production hardening.

`Flow` is a premium Indonesian footwear/sneaker showcase for the TRAE x PixVerse hackathon. The core experience is a cinematic single-page storefront with a scroll-driven hero powered by PixVerse-generated product videos, followed by standard ecommerce-inspired sections and a dedicated support page with video-led templated answers.

## Product Summary
- Brand: `Flow`
- Brand colors: black, graphite, red
- Wordmark rule: the `Flow` wordmark should always render in red
- Tone: premium, cinematic, sharp, fashion-editorial, modern Indonesian
- Core surfaces: `/` for showcase, `/support` for video-led customer support

## Source Of Truth
Always read these files before making substantial changes:
- `.trae/documents/flow-prd.md`
- `.trae/documents/flow-technical-architecture.md`
- `.trae/documents/flow-page-design.md`
- `DECISIONS.md`
- `PROGRESS.md`
- `features.json`

If any of these conflict, resolve them in this order:
1. `DECISIONS.md`
2. `.trae/documents/flow-page-design.md`
3. `.trae/documents/flow-technical-architecture.md`
4. `.trae/documents/flow-prd.md`
5. `features.json`
6. `PROGRESS.md`

## Working Rules
- Preserve the black/red luxury brand system.
- Do not dilute the cinematic hero into a generic ecommerce hero.
- Keep the experience desktop-first, then adapt downward for tablet and mobile.
- Prefer modular, reusable React components and typed data structures.
- Keep text and UI direction consistent with the existing premium/editorial voice.
- Avoid placeholder visuals in final production work; use real or intentionally generated assets.
- Treat PixVerse video assets as first-class product content, not decorative background media.
- Do not introduce backend dependencies unless documented in `DECISIONS.md` and `ARCHITECTURE.md`.

## Implementation Priorities
1. Hero scroll choreography
2. Product storytelling and variant interaction
3. Cart intent and header cart popup
4. Support page with templated video answers
5. Performance, accessibility, and production polish

## UX Rules
- The first impression must be the hero sequence, not the product grid.
- Every section after the hero should feel curated, not marketplace-generic.
- Motion should feel controlled and premium, never noisy.
- Red is an accent color, not a full-screen wash.
- Support interactions should feel reassuring and composed, with calmer motion than the home page.

## Data And State Expectations
- Use local typed data first for products, reviews, and support templates.
- Use a lightweight client-side store for cart state, active hero state, and support question state.
- Keep pricing, labels, and section copy configurable from data modules where practical.

## Production Considerations
- Optimize all videos with poster fallbacks and progressive loading.
- Design for graceful degradation when autoplay or heavy video playback is limited.
- Preserve essential content even if motion is reduced or disabled.
- Keep bundle growth under control; avoid unnecessary libraries for motion or media if native browser capabilities are enough.

## Agent Change Protocol
Before making significant updates:
1. Read `PROGRESS.md` to understand what is already done.
2. Read `DECISIONS.md` to avoid reversing prior decisions.
3. Check `features.json` to confirm expected behavior.
4. Update affected docs if scope or behavior changes.

After making significant updates:
1. Update `PROGRESS.md`
2. Add or revise entries in `DECISIONS.md` if decisions changed
3. Update `features.json` if feature behavior changed
4. Update `ARCHITECTURE.md` if routing, state, assets, or structure changed

## Non-Goals
- Do not turn `Flow` into a generic marketplace with hundreds of SKUs.
- Do not add fake checkout completion flows unless the scope is explicitly expanded.
- Do not replace the support-video concept with a plain FAQ unless the product direction changes.
