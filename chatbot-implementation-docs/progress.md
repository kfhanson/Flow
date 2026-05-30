# PROGRESS.md

## Current Status
Project phase: documentation reset for a mock ecommerce shoes assistant

## Completed
- Reframed `Flow` as an ecommerce shoes application with a conversational shopping assistant
- Chose a mock backend/API contract with local deterministic service functions for the first build
- Removed the requirement for live LLM calls, database infrastructure, MCP tooling, auth providers, cloud services, and real payments
- Defined the core assistant-driven flows:
  - product search
  - product detail
  - add to bag
  - show bag
  - store lookup
  - delivery options
  - mock order placement
  - order status
  - inventory summary
- Defined the documentation updates across `.trae/documents/`, repository architecture, decisions, and feature metadata

## In Progress
- Converting the documentation reset into the actual React implementation
- Creating typed mock data and deterministic assistant response functions

## Next
- Scaffold or update the frontend project
- Create mock data modules for products, variants, stores, delivery methods, inventory, users, bag, and orders
- Implement `mockAssistantService` and intent detection
- Build the assistant panel and suggested prompts
- Build structured response renderers for product lists, details, bag, stores, delivery methods, and orders
- Add focused tests for mock services and renderers
- Decide whether an optional HTTP mock API facade is needed

## Open Risks
- Response routing can become brittle if intent matching grows too broad
- Mock data must be rich enough to make the assistant feel useful
- UI should avoid fragile raw-text parsing in favor of structured response objects
- Optional map or API work could exceed the intended simple scope

## Notes
- The first implementation should work without network access after dependencies are installed
- Cart and order state are demo state, not real transactions
- Backend contracts are documented now so real infrastructure can be added later
