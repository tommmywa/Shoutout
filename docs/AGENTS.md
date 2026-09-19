# AGENTS.md — Shoutout App

## Mission
Build the Shoutout mobile app from the `/docs` product blueprint.

## Before coding
Read:
- 00-product-brief.md
- 01-product-principles.md
- 03-information-architecture.md
- 04-user-flows.md
- 05-screen-inventory.md
- 06-data-model.md
- 07-state-model.md
- 10-mvp-scope.md

For visual work also read:
- 08-design-system.md

For architecture touching future live functionality also read:
- 09-phase-2-extension.md

## Non-negotiable rules
1. Do not invent missing business logic without flagging it.
2. Do not collapse Name Identity into a display-name string.
3. A shoutout references a Name Identity ID.
4. Buyer and recipient can be different people.
5. Keep payment, fulfillment, moderation and recognition states separate.
6. Phase 1 is points-based, not a real tradable token.
7. Do not implement live streaming until explicitly requested.
8. Keep live functionality architecturally extensible.
9. Use reusable components and domain models.
10. Prefer real state/data flow over hardcoded visual demos.
11. Every major feature needs loading, empty, success, error and relevant edge states.
12. Never auto-merge identities.
13. Do not expose internal fraud/trust mechanics unnecessarily to end users.
14. Mobile-first; optimize for touch and small screens.
15. Preserve existing working behavior when adding features.

## Implementation workflow
For each task:
1. Identify the relevant product requirement.
2. Identify affected entities and states.
3. Identify screens/components.
4. Implement the smallest complete vertical slice.
5. Test primary and failure paths.
6. Update docs if the product/data/state model changes.
7. Only then move to the next slice.

## Product language
Use user-friendly language such as:
- Social Capital
- Recognition
- Shoutout
- Name Identity
- Points

Avoid exposing:
- raw database IDs
- trust-weighting formulas
- fraud scoring internals
- token mechanics in Phase 1

## Architecture preference
Prefer a domain model where recognition events are extensible:
`studio_shoutout`, `live_shoutout`, `live_session_mention`

Do not create a second parallel recognition system for Phase 2.


## UX implementation rules

- Treat `11-phase-1-ux-flow-map.md` as the Phase 1 flow source of truth.
- Treat `12-ux-content-and-state-rules.md` as the source of truth for consumer-facing terminology and state communication.
- Treat `13-fan-screen-spec.md` as the source of truth for the Phase 1 fan screen set and interaction expectations.
- Do not expose `Name Identity` in normal consumer UI; use `Person`, `Who should we shout out?`, or similarly concrete language.
- Do not add identity setup to onboarding.
- Do not add live functionality to Phase 1.
- Preserve separate payment, fulfillment, moderation, and recognition states in implementation.
- Do not invent business rules when a requirement is absent. Flag the ambiguity instead.

## UI specification files

For screen-level implementation also read:
- `14-ui-spec-foundation.md`
- `15-fan-ui-spec.md`
- `16-artist-ui-spec.md`
- `17-admin-ui-spec.md`

UI rules:
- Build the exact screen hierarchy and interaction states defined in these files before adding visual embellishment.
- Treat copy as the default Figma-ready product copy; do not casually rename core actions.
- Preserve all loading, empty, success, error and permission states specified.
- Do not expose `Name Identity` in normal fan flows.
- Do not invent unsupported business rules, prices, limits, payout timing, eligibility rules or moderation policies.
