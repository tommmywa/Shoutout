# Phase 1 Fan Screen Specification

## Navigation shell

### Bottom navigation

- Home
- Explore
- Activity
- Profile

Persistent global entry points where appropriate:
- Search
- Notifications

## Screen list

### Onboarding

1. Welcome
2. How it works
3. Account creation

### Discovery

4. Home
5. Explore
6. Search results
7. Artist profile
8. Song detail

### Shoutout request

9. Person selection
10. Person disambiguation
11. Add person
12. Tier selection
13. Silver placement
14. Gold style
15. Platinum instructions
16. Platinum voice note
17. Review
18. Payment
19. Payment processing
20. Purchase success

### Post-purchase

21. Activity
22. Shoutout tracking/detail
23. Published shoutout
24. Recognition profile
25. Leaderboard
26. Notifications
27. Profile/settings

## Screen requirements

### Welcome

Must communicate the product value in one sentence and provide one obvious primary action.

### How it works

Must communicate the three-step mechanic: song, person, personalization.

### Home

Must prioritize discovery over account setup.

### Artist profile

Must make available shoutout opportunities discoverable.

### Song detail

Must make the primary action and starting price obvious.

### Person selection

Must support search, multiple matches, and no-match creation.

### Tier selection

Must explain value in plain language and avoid requiring users to remember tier specifications.

### Review

Must make the recipient and total price obvious.

### Payment

Must make the final amount and payment action unambiguous.

### Success

Must reassure the user that the request exists and explain what happens next.

### Tracking

Must communicate the current fulfillment state and what happens next.

### Published shoutout

Must turn completion into a recognition moment and provide the completed media.

## Interaction pattern

The core request flow should support:

- Back navigation without losing valid input.
- Edit actions from review.
- Clear loading states.
- Inline validation where possible.
- Retry after recoverable errors.
- Confirmation for irreversible submission/payment actions.

## Mobile behavior

- Primary controls should be reachable with one hand.
- Keep primary CTA anchored consistently where useful.
- Avoid long forms.
- Use bottom sheets for lightweight selection where it improves flow.
- Use full-screen steps for focused tasks such as voice recording.
