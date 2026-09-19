# UX Content and State Rules

## Purpose

This file defines user-facing terminology, progressive disclosure rules, and state communication for implementation.

## User-facing terminology

| Internal concept | User-facing term | Rule |
|---|---|---|
| Name Identity | Person | Never expose the database term in normal consumer flows |
| Identity Claim | Is this you? / That's me | Use only when claiming an existing recipient profile |
| Social Capital | Recognition | Use Recognition in consumer UI initially |
| Social Capital Event | Recognition moment | Use only if a detailed explanation is needed |
| Trust Score | Do not expose by default | Internal system concept |
| Name Token / points abstraction | Recognition / points where appropriate | Do not imply tradable value in Phase 1 |

## Progressive disclosure

1. Explain the product through the action users want to take.
2. Ask for recipient information only when the user starts a shoutout.
3. Ask for disambiguation only when multiple people could match.
4. Ask for tier-specific customization only after tier selection.
5. Introduce Recognition after a shoutout has been published.
6. Keep leaderboards and secondary mechanics outside onboarding.

## State communication

Payment, fulfillment, moderation, and recognition states are separate system concerns. The UI should not collapse them into one ambiguous status.

### Customer-facing fulfillment progression

`Request received → Payment confirmed → Artist recording → Published`

If a request enters another state, show a clear human-readable explanation and next action.

## Content rules

- Prefer verbs and concrete actions over system nouns.
- Use "Who should we shout out?" rather than "Select identity."
- Use "Get a shoutout" as the primary purchase CTA.
- Show starting prices before the user enters checkout.
- Show the final price before payment.
- Always show who the shoutout is for in review, payment, tracking, and completion.
- Never assume two identical display names represent the same person.
- Do not imply that recognition points are a tradable token in Phase 1.

## Onboarding constraints

Maximum recommended onboarding:

1. Product value proposition
2. Three-step explanation
3. Account creation

Do not put profile setup, identity creation, payment setup, Social Capital education, or leaderboard mechanics into onboarding unless a later requirement explicitly makes them necessary.

## Accessibility/content quality

- Buttons should describe the action: "Get a shoutout", "Continue to payment", "Track shoutout".
- Avoid unexplained jargon.
- State changes must not depend on color alone.
- Error messages should explain what happened and what the user can do next.
- Destructive or irreversible actions require explicit confirmation.
