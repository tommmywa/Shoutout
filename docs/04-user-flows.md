# User Flows

## Flow A — First-time fan onboarding

Welcome → How it works → Account creation → Home

Onboarding should not require identity creation, payment setup, or Social Capital education.

## Flow B — Purchase a studio shoutout

Home/Explore → Artist → Song → Get a shoutout → Who? → Tier → Personalize → Review → Pay → Track

### Person step
1. Fan searches for a person by name or username.
2. If one suitable match exists, fan selects it.
3. If multiple matches exist, fan disambiguates using available profile markers.
4. If no match exists, fan adds the person.
5. The system resolves/creates the underlying Name Identity without exposing that terminology.

### Tier step
- Bronze: one mention.
- Silver: choose intro/verse/outro.
- Gold: choose hype/chill/comedic.
- Platinum: provide instructions and/or voice note.

### Completion
After payment, show: Request received → Payment confirmed → Artist recording → Published.

## Flow C — Person disambiguation

Search → multiple matching people → show disambiguators → confirm "Yes, that's them" or choose someone else.

Never automatically merge same-name people.

## Flow D — Add person

Search → no match → Add person → name required + optional username/location/photo → Continue → shoutout flow resumes.

## Flow E — Future identity claiming

Recipient notification → "Is this you?" → That's me / Not me → claim workflow.

This is separate from purchasing and is not part of initial onboarding.

## Flow F — Artist fulfillment

Artist dashboard → Pending shoutouts → Open order → Review recipient/tier/instructions → Record → Preview → Submit → Published.

## Flow G — Social Capital / Recognition

Published shoutout → recognition event → recognition points update → recipient recognition profile/leaderboard update.

Consumer UI calls this Recognition initially; backend retains Social Capital terminology.

## Flow H — Future live extension

Artist starts live → fan submits live request → artist selects request → live shoutout event → timestamp/clip → engagement events → recognition update.

The live flow reuses the same person/identity and recognition systems.
