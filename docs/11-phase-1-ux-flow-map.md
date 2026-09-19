# Phase 1 Mobile UX Flow Map

## UX North Star

The platform may have complex identity, recognition, trust, payment, and fulfillment systems, but the consumer experience should remain simple.

**Primary user mental model:**

`Song → Person → Shoutout → Recognition`

Do not expose database terminology such as `Name Identity`, `Identity Claim`, `Social Capital Event`, or `Trust Score` unless it is necessary for a specific action.

---

## 1. First-time experience

### Welcome

**Headline:** Get their name heard.

**Supporting copy:** Have your favorite artist shout out someone special in one of their songs.

**Primary CTA:** Get started

**Secondary:** I already have an account

### How it works

**Headline:** Pick a song. Pick a name. Make it personal.

1. **Pick a song** — Choose an artist and song.
2. **Pick a person** — Tell us whose name should be mentioned.
3. **Make it personal** — Choose how the artist should deliver the shoutout.

**CTA:** Continue

### Account creation

Keep signup lightweight:
- Continue with Apple
- Continue with Google
- Continue with email

Do not require identity setup, payment details, detailed preferences, or a profile photo during onboarding unless another requirement explicitly demands it.

---

## 2. Fan navigation

Phase 1 bottom navigation:

`Home | Explore | Activity | Profile`

Phase 2 can add Live:

`Home | Explore | Live | Activity | Profile`

Do not add a Live tab to Phase 1 without live content.

---

## 3. Home

Show:
- Featured artists
- Trending songs
- Recent/popular shoutout moments
- Recognition highlights
- Entry points to Explore

Primary behavior: discovery, not setup.

---

## 4. Explore

Search artists, songs, and people.

Useful filters:
- Artists
- Songs
- Shoutouts

Avoid forcing the user to understand the identity system before they can discover content.

---

## 5. Artist → Song

### Artist profile

Show:
- Artist identity and verification state
- Short description
- Available songs
- Starting shoutout price

### Song detail

Show:
- Artwork
- Song title
- Artist
- Audio preview
- Available tiers
- Starting price

Primary CTA:

**Get a shoutout**

---

## 6. Core purchase flow

`Song → Get a shoutout → Who? → Tier → Personalize → Review → Pay → Track`

Use a compact progress indicator during the multi-step request flow:

`Person · Tier · Personalize · Review`

---

## 7. Person selection

### Default state

**Headline:** Who should we shout out?

Input placeholder:

**Search for someone**

Search by name or username.

### Multiple matches

Example:

**John Smith**  
@johnsmith · Lagos

**John Smith**  
@jsmith · London

Then ask:

**Is this the right person?**

Actions:
- Yes, that's them
- Choose someone else

Use username, location, profile photo, or another supported disambiguator when needed.

### No match

**Can't find them?**

Add the person you're looking for and we'll create their recognition profile.

Fields:
- Name — required
- Username — optional
- Location — optional
- Photo — optional

**CTA:** Continue

The system creates the underlying Name Identity automatically. The user does not need to understand that term.

---

## 8. Identity rules

### Never ask

> Create a Name Identity

### Ask

> Who should we shout out?

### Do not require identity creation during onboarding

Create or resolve the identity contextually when a shoutout requires a recipient.

### Buyer and recipient are separate

A recipient does not need an account for another user to purchase a shoutout for them.

### Future claiming

After a recipient has a profile, the product may later show:

**Someone added you as a shoutout recipient. Is this you?**

Actions:
- That's me
- Not me

Identity claiming is separate from purchasing.

---

## 9. Tier selection

### Headline

**How should they be shouted out?**

### Bronze — Quick shoutout

Hear their name once.

### Silver — Pick the moment

Choose where their name appears.

### Gold — Set the vibe

Choose how the artist delivers it.

### Platinum — Make it yours

Send instructions or a voice note.

Only reveal configuration relevant to the selected tier.

---

## 10. Tier configuration

### Bronze

No additional configuration.

Confirm:

John Smith will be mentioned once in **Song Name**.

### Silver

**Where should their name appear?**

Options:
- Intro
- Verse
- Outro

### Gold

**What's the vibe?**

Options:
- Hype — Energetic and exciting.
- Chill — Smooth and relaxed.
- Comedic — Playful and funny.

### Platinum

**Make it personal**

Options:
- Add instructions
- Send a voice note

Example instruction:

> Say John's name right before the second verse and make it energetic.

---

## 11. Review

### Headline

**Your shoutout**

Summary:
- Song
- Artist
- For: recipient
- Tier
- Placement/style/instructions where applicable
- Total

Every configurable section should have an Edit action.

**CTA:** Continue to payment

---

## 12. Payment

### Headline

**You're almost there.**

Show:
- Recipient
- Song
- Artist
- Tier
- Total
- Payment method

**CTA:** Pay [amount]

Do not hide the final price.

---

## 13. Purchase success

### Headline

**Your shoutout is booked 🎉**

**Supporting copy:** John Smith will be shouted out by Artist Name in Song Name.

### Status tracker

`Request received → Payment confirmed → Artist recording → Published`

**Primary CTA:** Track shoutout

Secondary: Back to home

---

## 14. Activity

Tabs:
- Active
- Completed

Active card example:

**John Smith**  
Song Name · Artist Name  
**Artist recording**

Completed card example:

**John Smith**  
Song Name · Artist Name  
**Published**

CTA: Listen now

---

## 15. Shoutout tracking

### Headline

**John Smith's shoutout**

Timeline:

**Request received** — Your request was submitted.

**Payment confirmed** — Payment successfully processed.

**Artist recording** — The artist is preparing your shoutout.

**Published** — Your shoutout is ready.

The current state must always be visually clear.

---

## 16. Published shoutout

Show the completed audio/video moment.

### Headline

**John Smith just got recognized 🎉**

Supporting copy:

Artist Name mentioned John Smith in **Song Name**.

### Recognition

**+120 Recognition**

Initially expose Social Capital as **Recognition** in consumer-facing UI. Keep the underlying data model as `social_capital`.

---

## 17. Recognition profile

### Header

**John Smith**

**1,240 Recognition**

Stats:
- 34 Mentions
- 12 Songs
- 8 Artists

Show recent recognition moments.

Introduce this profile only after the user has experienced the core shoutout flow.

---

## 18. Leaderboard

### Headline

**Most recognized**

Tabs:
- Today
- This Week
- All Time

Leaderboard rows show:
- Rank
- Person
- Recognition

This is a retention/discovery mechanic, not onboarding content.

---

## 19. Artist experience

Artist navigation:

`Dashboard | Songs | Shoutouts | Earnings | Profile`

### Dashboard

Show:
- Pending shoutouts
- Published shoutouts
- Earnings
- Recognition generated

### Songs

Show:
- Song artwork
- Song name
- Shoutout availability
- Starting price
- Availability toggle

### Shoutout queue

Tabs:
- New
- Recording
- Published

A request should expose:
- Recipient
- Tier
- Song
- Placement/style
- Instructions/voice note where applicable

### Recording

Controls:
- Record
- Pause
- Preview
- Submit

Before submission:

**Confirm publication**

After submission:

**Shoutout published ✓**

---

## 20. Empty and error states

### No songs

**No shoutouts available yet**

This artist hasn't enabled shoutouts for any songs.

### No active shoutouts

**You're all caught up**

Your active shoutouts will appear here.

### No completed shoutouts

**Your recognition moments will appear here**

Once an artist publishes your shoutout, you'll find it here.

### Payment failed

**Payment didn't go through**

Your shoutout hasn't been submitted.

CTA: Try again

### Artist unavailable

**This artist isn't accepting shoutouts right now**

Your request hasn't been submitted.

CTA: Choose another song

### Revision required

**Your shoutout needs an update**

The artist needs to make a change before it can be published.

Show the reason and next action.

### Ambiguous person

**We found multiple people with that name**

Choose the person you're looking for.

Never automatically merge same-name people.

---

## 21. Phase 2 compatibility

Reuse the same recipient/person interaction in Live.

Phase 1:

`Song → Who? → Tier → Personalize → Pay`

Phase 2:

`Live → Artist → Request shoutout → Who? → Live shoutout`

The same underlying identity and recognition-event systems should power both experiences.
