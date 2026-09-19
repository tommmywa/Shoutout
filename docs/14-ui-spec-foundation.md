# 14 — UI Specification Foundation

## Purpose

Implementation-level visual and interaction rules for Phase 1. This document sits below the product/flow docs and tells Antigravity how screens should be composed without inventing business rules.

## Source hierarchy

When documents conflict, use this order:
1. Product requirements / data / state model
2. `11-phase-1-ux-flow-map.md`
3. `12-ux-content-and-state-rules.md`
4. This UI specification
5. Existing implementation

Do not change product logic to satisfy a visual preference.

## Mobile frame

- Design for a compact mobile viewport first.
- Safe-area aware top and bottom padding.
- Primary action reachable with one hand.
- Use a consistent sticky bottom CTA on focused transactional screens.
- Do not place essential information only in swipe gestures.

## Global hierarchy

Use this order wherever applicable:
1. Context / navigation
2. Page title
3. Supporting explanation
4. Primary content
5. Secondary content
6. Primary action

## Global components

### AppHeader

Components:
- Back button or logo
- Title
- Optional trailing action

States:
- Default
- Scrolled
- Loading

Interaction:
- Back returns to previous valid state without discarding form input.

### BottomNavigation

Phase 1:
- Home
- Explore
- Activity
- Profile

States:
- Active
- Inactive
- Disabled only if a destination genuinely cannot be accessed

### PrimaryButton

States:
- Default
- Pressed
- Disabled
- Loading
- Success where appropriate

Rules:
- Label describes the action.
- Do not use vague labels such as `Next` when a specific action is available.

### SecondaryButton

Used for alternate actions. Never visually compete with the primary CTA.

### TextField

States:
- Empty
- Focused
- Filled
- Error
- Disabled
- Loading/autocomplete

Validation:
- Prefer inline validation.
- Preserve entered content after recoverable errors.

### SelectionCard

Used for tiers, placement, style and payment methods.

States:
- Default
- Selected
- Pressed
- Disabled
- Error

### StatusChip

Use text + icon where useful. Never communicate status through color alone.

### AudioPlayer

Components:
- Artwork
- Play/pause
- Progress
- Duration
- Optional waveform

States:
- Idle
- Playing
- Paused
- Loading
- Error

### BottomSheet

Use for lightweight selection or contextual actions. Do not hide critical transactional information in a sheet if a full-screen step is clearer.

### EmptyState

Structure:
- Illustration/icon
- Headline
- Supporting copy
- Optional action

### ErrorState

Structure:
- What happened
- What the user can do
- Retry/action

## Transactional screen pattern

For Person → Tier → Personalize → Review → Payment:
- Progress indicator at top.
- One focused decision per screen.
- Persistent primary CTA near bottom.
- Back preserves valid previous selections.
- Do not expose implementation terminology.

## Copy rules

Use:
- `Who should we shout out?`
- `Get a shoutout`
- `How should they be shouted out?`
- `Continue to payment`
- `Pay [amount]`
- `Track shoutout`

Avoid:
- `Select identity`
- `Create Name Identity`
- `Configure recognition event`
- `Submit transaction`

## Recognition presentation

Consumer-facing term: `Recognition`.

Do not imply tradable financial value in Phase 1.

## Accessibility

- Minimum comfortable touch targets.
- Visible focus/pressed/selected states.
- Sufficient contrast.
- Dynamic updates announced where needed.
- Keyboard accessibility should be preserved for any web/desktop implementation.
- Reduced-motion alternative for celebratory animations.

## Motion

Use motion for:
- Shoutout booking confirmation
- Recording feedback
- Published moment reveal
- Recognition increment

Avoid motion that delays task completion or obscures information.
