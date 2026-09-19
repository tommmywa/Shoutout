# Shoutout App — Vibe-Coding Blueprint

This folder converts the supplied Fan Shoutout Platform Product Spec v2 into a designer/buildable mobile-app blueprint.

## Start here
1. Read `00-product-brief.md`
2. Read `01-product-principles.md`
3. Read `03-information-architecture.md`
4. Read `04-user-flows.md`
5. Read `05-screen-inventory.md`
6. Read `06-data-model.md`
7. Read `07-state-model.md`
8. Read `08-design-system.md`
9. Read `10-mvp-scope.md`
10. Read `11-phase-1-ux-flow-map.md`
11. Read `12-ux-content-and-state-rules.md`
12. Read `13-fan-screen-spec.md`
13. Give `AGENTS.md` to your coding agent

## UX source of truth

For Phase 1 consumer UX, use `11-phase-1-ux-flow-map.md`, `12-ux-content-and-state-rules.md`, and `13-fan-screen-spec.md` together.

The core consumer mental model is:

**Song → Person → Shoutout → Recognition**

The underlying identity system remains robust, but the term `Name Identity` should not leak into normal consumer UX.

## Recommended build sequence
Foundation/auth → onboarding → fan discovery → artist/song → person selection → tier/personalization → checkout → tracking → artist fulfillment → Recognition → leaderboard → admin → polish.

## Important product constraint
Phase 1 is a studio-shoutout, points-based MVP. Phase 2 live functionality is intentionally represented as extension points, not implemented functionality.

## Source
Based on the uploaded `shoutout-platform-spec.pdf`, Product Spec v2, plus the UX flow decisions captured in this blueprint.

## UI implementation layer

The screen-level UI specification is split into:

- `14-ui-spec-foundation.md` — global components, hierarchy, accessibility and interaction conventions
- `15-fan-ui-spec.md` — all Phase 1 fan screens, exact copy and states
- `16-artist-ui-spec.md` — all Phase 1 artist screens, exact copy and states
- `17-admin-ui-spec.md` — essential Phase 1 admin screens

Recommended build sequence:
1. Foundation/app shell
2. Onboarding/auth
3. Fan discovery
4. Fan shoutout request flow
5. Payment and tracking
6. Published recognition
7. Artist workflow
8. Admin essentials
9. Edge states and accessibility
10. Visual polish/motion
