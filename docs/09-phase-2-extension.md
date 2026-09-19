# Phase 2 Extension Strategy

## Goal
Add live streaming and live shoutouts without rebuilding Phase 1.

## Reuse
Phase 2 must reuse:
- User
- Artist Profile
- Fan Profile
- Name Identity
- Consent
- Social Capital Event
- Trust/Fraud systems
- Transactions
- Notifications
- Profile and leaderboard surfaces

## Add
- Live Session
- Live Shoutout
- Live Reaction
- Gifts/coins
- Clips
- Viewer engagement metrics
- Live moderation tools

## Event architecture
Phase 1:
- Studio shoutout mention

Phase 2:
- Live shoutout mention
- Reaction
- Replay
- Watch time
- Gift

All should flow into a common recognition-event pipeline.

## UX extension
Phase 1:
Song → Shoutout

Phase 2:
Live → Request → Artist selects → Performs → Clip → Engagement

The Name Identity selected for a live shoutout must be the same identity system used in studio shoutouts.

## Live-ready UI placeholders
Do not implement fake live functionality. Instead:
- keep navigation/routing extensible
- use reusable media/player components
- design artist profiles with a future Live entry point in mind
- make notification architecture capable of live alerts
- make event/activity components source-aware

## Token layer
Keep Social Capital behind an abstraction so the Phase 1 points system can later support a legally approved token implementation. Do not expose tradeable token behavior until explicitly approved.
