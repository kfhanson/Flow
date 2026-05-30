# Flow

Flow is an ecommerce shoes application with a conversational shopping assistant. The first build uses local mock data and deterministic predefined responses instead of a live LLM, database, auth provider, cloud services, or payment processing.

## File Structure
```text
.trae/documents/
  flow-prd.md
  flow-technical-architecture.md
  flow-page-design.md
AGENTS.md
ARCHITECTURE.md
DECISIONS.md
PROGRESS.md
features.json
```

Planned app structure:
```text
src/
  components/
  data/
  pages/
  services/
  store/
  types/
  utils/
```

## Setup
The implementation has not been scaffolded yet. Once the frontend exists, collaborators should use the documented root commands, for example:

```bash
npm install
npm run dev
npm test
```

## Current Scope
- Assistant-first shoe shopping flow
- Mock products, variants, stores, delivery methods, inventory, bag, and orders
- Deterministic response routing
- No production infrastructure required
