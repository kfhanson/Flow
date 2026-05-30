# AGENTS.md

## Purpose
This file defines how human contributors and coding agents should work in the `Flow` repository during build-out, polish, and production hardening.

`Flow` is an ecommerce shoes application with a conversational shopping assistant. The initial implementation is intentionally simple: mock data, deterministic predefined responses, and no live LLM calls, database, auth provider, MCP server, or cloud infrastructure.

## Very Important
- Be simple. Approach tasks in a simple, incremental way.
- Work incrementally always. Take small, simple steps. Validate and check each increment before moving on.
- Use the latest stable APIs available at the time of work.

## Product Summary
- Brand: `Flow`
- Domain: ecommerce shoes and sneakers
- Brand colors: black, graphite, red
- Wordmark rule: the `Flow` wordmark should always render in red
- Tone: premium, direct, helpful, modern Indonesian, commerce-focused
- Core surface: assistant-first storefront with product discovery, product details, cart intent, store lookup, delivery options, and mock order status

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

## Mandatory Code Style
- Identify root cause before fixing issues. Prove it with evidence, then fix.
- Work incrementally with small steps. Validate each increment.
- Use the latest stable library APIs.
- Favor clear, concise docstring comments. Be sparing with comments outside docstrings. Add a docstring to each function when it improves documentation.
- Favor short modules, short methods, and short functions. Name things clearly.
- Never use emojis in code, print statements, or logging.
- Keep `README.md` concise. Include file structure, a short explanation, and initialization steps for collaborators.

## Working Rules
- Preserve the black/red premium brand system.
- Keep the user journey assistant-first, not a generic product grid.
- Use local typed mock data before adding any external service.
- Do not introduce real LLM calls, database dependencies, auth providers, cloud services, or payment processing unless the decision is documented in `DECISIONS.md` and `ARCHITECTURE.md`.
- Prefer modular React components, typed data structures, and focused mock service functions.
- Keep pricing, labels, product data, store data, delivery data, and assistant response copy configurable from data modules where practical.
- Keep the assistant deterministic for the initial demo: the same supported user input should produce the same response.

## Implementation Priorities
1. Assistant modal or panel with suggested prompts and text input
2. Mock assistant router that maps user input to predefined ecommerce responses
3. Product recommendations and product detail cards
4. Cart or shopping bag intent state
5. Store locator and delivery option responses
6. Mock order placement and order-status responses
7. Responsive polish, accessibility, and test coverage for mock services

## UX Rules
- The first impression should make it clear that Flow helps users shop for shoes through conversation.
- Product results should be rendered as cards, not raw assistant text when structured data is available.
- The assistant should ask one clarifying question when a product, size, color, store, or delivery method is missing.
- Red is an accent color for wordmark, active states, and primary CTAs, not a full-screen wash.
- The experience should feel premium and composed, but the shopping workflow must remain simple and obvious.

## Data And State Expectations
- Use local typed data for products, variants, inventory, stores, delivery methods, users, cart items, orders, and predefined assistant responses.
- Use a lightweight client-side store for chat state, selected products, cart items, and mock orders.
- Treat the mock backend/API as a contract. It may be implemented as local functions first and exposed as HTTP endpoints later.
- In-memory state can reset on refresh during the hackathon/demo phase.

## Important - Debugging And Fixing
- When troubleshooting problems, always identify root cause before fixing.
- Reproduce consistently.
- Prove the problem first. Do not guess.
- Try one test at a time. Be methodical.
- Do not jump to conclusions. Do not apply workarounds.

## Production Considerations
- Mock data must be easy to replace with real services later.
- Keep response shapes stable so UI renderers do not depend on fragile string parsing.
- Preserve essential functionality without network access.
- Keep bundle growth under control; avoid unnecessary libraries for the mock phase.

## Agent Change Protocol
Before making significant updates:
1. Read `PROGRESS.md` to understand what is already done.
2. Read `DECISIONS.md` to avoid reversing prior decisions.
3. Check `features.json` to confirm expected behavior.
4. Update affected docs if scope or behavior changes.

After making significant updates:
1. Update `PROGRESS.md`.
2. Add or revise entries in `DECISIONS.md` if decisions changed.
3. Update `features.json` if feature behavior changed.
4. Update `ARCHITECTURE.md` if routing, state, assets, or structure changed.

## Non-Goals
- Do not build a real LLM assistant in the initial phase.
- Do not add a production database in the initial phase.
- Do not require Google sign-in, cloud storage, MCP, or deployed services for the initial demo.
- Do not add real payment processing.
- Do not fake a completed checkout. Mock orders should clearly be demo state.

<!-- context7 -->
Use Context7 MCP to fetch current documentation whenever the user asks about a library, framework, SDK, API, CLI tool, or cloud service -- even well-known ones like React, Next.js, Prisma, Express, Tailwind, Django, or Spring Boot. This includes API syntax, configuration, version migration, library-specific debugging, setup instructions, and CLI tool usage. Use even when you think you know the answer -- your training data may not reflect recent changes. Prefer this over web search for library docs.

Do not use for: refactoring, writing scripts from scratch, debugging business logic, code review, or general programming concepts.

## Steps

1. Always start with `resolve-library-id` using the library name and the user's question, unless the user provides an exact library ID in `/org/project` format.
2. Pick the best match by exact name match, description relevance, code snippet count, source reputation, and benchmark score.
3. `query-docs` with the selected library ID and the user's full question.
4. Answer using the fetched docs.
<!-- context7 -->
