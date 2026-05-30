# DECISIONS.md

## Active Decisions

### D-001: Assistant-First Shoe Commerce
- Status: accepted
- Decision: build `Flow` as an ecommerce shoes application centered on a conversational shopping assistant
- Why: the core demo value is guided shopping through product search, recommendations, cart intent, store lookup, delivery options, and mock order status

### D-002: Black And Red Brand System
- Status: accepted
- Decision: use a black/graphite base with red as the primary accent; the `Flow` wordmark remains red in all core brand contexts
- Why: this preserves the premium brand direction while shifting the product from cinematic showcase to commerce assistant

### D-003: Mock Backend Contract Before Real Infrastructure
- Status: accepted
- Decision: document a backend/API contract but implement the first phase with local mock service functions and typed mock data
- Why: this preserves backend design clarity while avoiding LLM, database, cloud, auth, and MCP setup during the time-limited build

### D-004: Deterministic Assistant Responses
- Status: accepted
- Decision: route user input through a deterministic intent matcher and predefined response templates
- Why: the same supported input must produce the same demo response without relying on live model behavior

### D-005: Structured Response Rendering
- Status: accepted
- Decision: prefer structured assistant response objects over parsing raw assistant text
- Why: product cards, bag summaries, stores, delivery methods, and order status are safer and easier to test when rendered from typed data

### D-006: Local Typed Data As Initial Data Source
- Status: accepted
- Decision: store products, variants, inventory, stores, delivery methods, mock users, cart items, and orders in typed modules or lightweight client state
- Why: the curated demo data is small and can later be replaced by real services

### D-007: No Required Authentication In Mock Phase
- Status: accepted
- Decision: do not require Google sign-in or any auth provider for the initial demo
- Why: auth would add infrastructure complexity without improving the mock shopping journey

### D-008: Cart And Orders Are Demo State
- Status: accepted
- Decision: the shopping bag and mock orders capture purchase intent and may reset on refresh
- Why: this shows ecommerce flow without pretending to process real transactions

### D-009: Store Locator Can Be Card-Based
- Status: accepted
- Decision: use sorted store cards for the initial store locator; maps are optional
- Why: cards prove the store lookup requirement without external map tiles or geospatial dependencies

### D-010: API Facade Is Optional For First Build
- Status: accepted
- Decision: the app can call mock services directly first; a small HTTP facade may be added if needed
- Why: this keeps implementation simple while keeping backend boundaries documented

## Pending Decisions

### P-001: Mock API Runtime
- Status: pending
- Question: should the optional API facade be implemented with a lightweight Node server, a Vite dev route pattern, or a FastAPI service?

### P-002: Product Asset Source
- Status: pending
- Question: should mock product images be local generated assets, public static images, or simple designed placeholders for the first pass?

### P-003: State Persistence
- Status: pending
- Question: should bag and mock order state persist in localStorage, or reset on refresh for a cleaner demo?

## Change Log
- 2026-05-30: initial decision set created from the planning phase
- 2026-05-30: replaced cinematic showcase direction with assistant-first mock ecommerce architecture
