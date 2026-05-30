# DECISIONS.md

## Active Decisions

### D-001: Desktop-First Experience
- Status: accepted
- Decision: design and build `Flow` desktop-first, then adapt for tablet and mobile
- Why: the hero sequence and editorial composition rely on large-format cinematic presentation

### D-002: Black And Red Brand System
- Status: accepted
- Decision: use a black/graphite base with red as the primary accent; the `Flow` wordmark remains red in all core brand contexts
- Why: this supports the premium, aggressive, fashion-editorial identity requested for the product

### D-003: Scroll-Driven Video Hero
- Status: accepted
- Decision: the homepage hero is driven by scroll progression through multiple PixVerse-generated product shots
- Why: this is the defining mechanic of the site and the main differentiator from a standard ecommerce landing page

### D-004: Single-Page Storefront Plus Dedicated Support Route
- Status: accepted
- Decision: keep the main commerce experience on `/` and place customer support on `/support`
- Why: this preserves the focus of the cinematic storefront while giving support content room to breathe

### D-005: Frontend-Only Hackathon Architecture
- Status: accepted
- Decision: use a frontend-only architecture with local mock data and no backend during the initial build
- Why: this reduces scope and keeps the team focused on experience quality and interaction polish

### D-006: Local Typed Data As Initial CMS
- Status: accepted
- Decision: store product, review, related-item, and support-answer content in typed frontend data modules
- Why: the content set is curated and small, so static typed data is faster and less error-prone for the first release

### D-007: Support As Video-Led Templated Q&A
- Status: accepted
- Decision: the support page uses a PixVerse-generated support host and pre-authored templated answers instead of live chat
- Why: this matches the hackathon concept and keeps the support experience aligned with the cinematic brand

### D-008: Cart Is Intent-Focused, Not Transactional
- Status: accepted
- Decision: the cart captures selection state and summarizes purchase intent without requiring a full checkout stack
- Why: this provides ecommerce structure without overextending the implementation scope

### D-009: Premium Editorial Direction Over Marketplace Patterns
- Status: accepted
- Decision: sections such as reviews and related products should feel curated and fashion-led, not generic marketplace UI
- Why: a standard commodity ecommerce layout would weaken the distinctiveness of the brand

### D-010: Native Scroll Logic Before Heavy Animation Libraries
- Status: accepted
- Decision: prefer browser-native scroll handling and lightweight React logic before adding heavier animation dependencies
- Why: the experience is media-heavy already, so keeping the interaction layer lean improves performance headroom

### D-011: Plus Jakarta Sans As Primary Typography
- Status: accepted
- Decision: use `Plus Jakarta Sans` as the primary typeface across hero copy, navigation, section titles, metadata, and supporting commerce UI
- Why: it preserves a clean modern premium feel while staying sharp, readable, and versatile enough for both large cinematic headlines and small utility text

## Pending Decisions

### P-001: Video Asset Packaging
- Status: pending
- Question: whether final PixVerse assets should ship as local static files, CDN assets, or mixed delivery

### P-002: Cart CTA Destination
- Status: pending
- Question: should the primary cart CTA open a modal, a summary drawer, or a separate checkout-intent route?

## Change Log
- 2026-05-30: initial decision set created from the planning phase
- 2026-05-30: locked `Plus Jakarta Sans` as the primary brand typography
