# 15 — Phase 1 Fan Screen-by-Screen UI Specification

## Scope

Every Phase 1 fan screen from onboarding through recognition. Copy is Figma-ready. Components and states are implementation requirements unless explicitly marked optional.

---

## 01. Splash

### Purpose
Establish brand while the app initializes.

### Hierarchy
1. Brand mark
2. Minimal loading indicator

### States
- Loading
- Initialization error

### Error copy
**Something went wrong**
We couldn't start the app.

**Try again**

### Interaction
Automatically route to Welcome for signed-out users or Home for authenticated users.

---

## 02. Welcome

### Copy
**Get their name heard.**
Have your favorite artist shout out someone special in one of their songs.

Primary: **Get started**
Secondary: **I already have an account**

### Components
- Hero artwork/animation
- Headline
- Supporting copy
- Primary button
- Secondary text button

### States
- Default
- Reduced motion

### Interaction
Get started → How it works.
Existing account → Log in.

---

## 03. How It Works

### Copy
**Pick a song. Pick a name. Make it personal.**

**01 Pick a song**
Choose an artist and song.

**02 Pick a person**
Tell us whose name should be mentioned.

**03 Make it personal**
Choose how the artist should deliver the shoutout.

Primary: **Continue**

### Components
- 3-step illustrated cards
- Progress indicator
- Primary CTA

### Interaction
Continue → Account creation.

---

## 04. Account Creation

### Copy
**Let's get you started.**

Continue with Apple
Continue with Google
Continue with email

Optional legal/support text below.

### Components
- Social auth buttons
- Email auth button
- Terms/privacy links if required

### States
- Default
- Loading
- Auth error
- Account already exists

### Rules
Do not ask for identity, payment, detailed profile or recognition setup here.

---

## 05. Log In

### Copy
**Welcome back.**

Email
Password

Primary: **Log in**
Secondary: **Continue with Google** / **Continue with Apple**
Link: **Forgot password?**

### States
- Empty
- Validation error
- Loading
- Invalid credentials
- Network error

---

## 06. Home

### Hierarchy
1. Header / greeting
2. Featured artists
3. Trending songs
4. Popular shoutout moments
5. Recognition highlights
6. Bottom navigation

### Copy
**Good to see you, [First Name]**

Section labels:
- **Featured artists**
- **Trending songs**
- **Popular shoutouts**
- **Recognition moments**

### Components
- ArtistCard
- SongCard
- RecognitionMomentCard
- Horizontal carousels
- Search entry
- BottomNavigation

### States
- Content
- Loading skeleton
- Empty discovery state
- Network error

### Interaction
Song → Song detail.
Artist → Artist profile.
Recognition moment → Published shoutout.

---

## 07. Explore

### Copy
**Explore**

Search placeholder: **Search artists, songs or people**

Filters:
- Artists
- Songs
- Shoutouts

### Components
- Search field
- Filter chips
- Content cards
- BottomNavigation

### States
- Default
- Searching
- Results
- No results
- Error

### Empty copy
**Nothing found**
Try a different artist, song or name.

---

## 08. Search Results

### Header
**Search results**

### Result groups
**Artists**
**Songs**
**People**
**Shoutouts**

### Components
- Search field
- Result rows/cards
- Filter chips
- Clear search action

### Interaction
Result tap routes to the relevant entity without exposing internal IDs.

---

## 09. Artist Profile

### Hierarchy
1. Artist image
2. Artist name + verification
3. Description
4. Available songs

### Copy
**[Artist Name]**
**[Short description]**

**Available for shoutouts**

Song metadata:
**Shoutout from [price]**

### Components
- ArtistHeader
- VerificationBadge
- SongCard
- Shoutout CTA

### States
- Loaded
- Loading
- Artist unavailable
- No songs

### No songs
**No shoutouts available yet**
This artist hasn't enabled shoutouts for any songs.

---

## 10. Song Detail / Player

### Hierarchy
1. Artwork
2. Song title
3. Artist
4. Audio player
5. Tier preview
6. Starting price
7. Sticky CTA

### Copy
**[Song Name]**
[Artist Name]

**Get a shoutout from [price]**

Primary: **Get a shoutout**

### Components
- Artwork
- AudioPlayer
- TierPreview
- PrimaryButton

### States
- Audio idle
- Playing
- Paused
- Audio loading
- Audio error
- Artist unavailable

### Interaction
Get a shoutout → Person selection.

---

## 11. Person Search

### Copy
**Who should we shout out?**

Input: **Search for someone**
Supporting: Search by name or username.

### Components
- Progress: **Person · Tier · Personalize · Review**
- Search field
- Person result rows
- Add-person action

### States
- Empty
- Typing
- Loading
- Results
- No results
- Error

### No result
**Can't find them?**
Add the person you're looking for and we'll create their recognition profile.

CTA: **Add person**

### Interaction
Single result → select/confirm person.
Multiple results → disambiguation.
Add person → Add person screen.

---

## 12. Person Match / Disambiguation

### Copy
**Is this the right person?**

[Photo]
**John Smith**
@johnsmith · Lagos

Primary: **Yes, that's them**
Secondary: **Choose someone else**

### Components
- Person identity card
- Disambiguator metadata
- Primary/secondary actions

### States
- Match available
- Match unavailable/stale

### Rule
Never auto-merge people with the same display name.

---

## 13. Add Person

### Copy
**Add someone**
Tell us who you'd like to shout out.

Fields:
**Name** — required
**Username** — optional
**Location** — optional
**Photo** — optional

Primary: **Continue**

### Components
- Form fields
- Optional avatar picker
- Primary CTA

### States
- Empty
- Validation error
- Saving
- Duplicate/possible match warning
- Success

### Duplicate warning
**We found someone with a similar name**
Check the details before continuing.

### Rule
Underlying identity record is created/linked by the system; do not expose `Name Identity`.

---

## 14. Tier Selection

### Copy
**How should they be shouted out?**

**Bronze — Quick shoutout**
Hear their name once.

**Silver — Pick the moment**
Choose where their name appears.

**Gold — Set the vibe**
Choose how the artist delivers it.

**Platinum — Make it yours**
Send instructions or a voice note.

Each card includes price.

### Components
- Tier cards
- Selected state
- Price
- Benefits
- Progress indicator

### States
- Default
- Selected
- Disabled/unavailable
- Loading

### Interaction
Bronze → Review/confirmation within flow.
Silver → Placement.
Gold → Style.
Platinum → Instructions.

---

## 15. Silver Placement

### Copy
**Where should their name appear?**

- **Intro**
- **Verse**
- **Outro**

Primary: **Continue**

### Components
- Selection cards/radio rows
- Progress indicator
- Sticky CTA

### States
- Unselected
- Selected
- Error

CTA disabled until a valid choice exists.

---

## 16. Gold Style

### Copy
**What's the vibe?**

**Hype**
Energetic and exciting.

**Chill**
Smooth and relaxed.

**Comedic**
Playful and funny.

Primary: **Continue**

### Components
- Style selection cards
- Optional preview icon/animation

### States
- Unselected
- Selected
- Disabled

---

## 17. Platinum Instructions

### Copy
**Make it personal**
Tell the artist exactly how you'd like the shoutout delivered.

**Add instructions**
Placeholder: **Tell the artist what you'd like...**

Primary: **Continue**
Secondary: **Send a voice note**

### Components
- Multiline text field
- Character count if a limit exists
- Voice-note entry

### States
- Empty
- Typing
- Valid
- Error

Do not invent a character limit unless specified by product requirements.

---

## 18. Platinum Voice Note Recorder

### Copy
**Record your instructions**

Primary states:
**Record** → **Stop** → **Preview** → **Use recording**

Secondary: **Record again**

### Components
- Large record control
- Timer
- Waveform
- Playback control
- Delete/re-record

### States
- Ready
- Recording
- Paused if supported
- Previewing
- Saving
- Microphone permission denied
- Recording error

### Permission copy
**Microphone access is needed**
Allow microphone access to record your instructions.

CTA: **Allow access**

---

## 19. Shoutout Review

### Copy
**Your shoutout**

**Song**
[Song Name]
[Artist Name]

**For**
[Person Name]

**Tier**
[Bronze / Silver / Gold / Platinum]

**Placement / Style / Instructions**
[Selected value]

**Total**
[Amount]

Primary: **Continue to payment**

Each configurable section has **Edit**.

### Components
- Summary cards
- Edit actions
- Price total
- Sticky CTA

### States
- Ready
- Updating after edit
- Price recalculating
- Error

Rule: recipient and final total must be prominent.

---

## 20. Checkout / Payment

### Copy
**You're almost there.**

**Your shoutout**
[Person]
[Song] · [Artist]
[Tier]

**Total**
[Amount]

**Payment method**
[Selected method]

Primary: **Pay [amount]**

### Components
- Order summary
- Payment method selector
- Final total
- Secure/payment information where supported

### States
- Ready
- Payment method loading
- Payment processing
- Payment failed
- Network error

Never hide the final price.

---

## 21. Payment Processing

### Copy
**Processing your payment**
Please don't close the app.

### Components
- Progress indicator
- Order summary

### States
- Processing
- Success
- Failed
- Timeout/unknown outcome

### Timeout copy
**We're checking your payment**
Your payment status is still being confirmed. Check your activity for the latest update.

Do not allow duplicate payment submission while status is unresolved.

---

## 22. Purchase Success

### Copy
**Your shoutout is booked 🎉**
John Smith will be shouted out by Artist Name in Song Name.

Timeline:
**Request received** ✓
**Payment confirmed** ✓
**Artist recording**
**Published**

Primary: **Track shoutout**
Secondary: **Back to home**

### Components
- Celebration animation
- Order summary
- Status tracker
- Primary CTA

### Reduced motion
Replace animation with static success state.

---

## 23. Activity

### Header
**Activity**

Tabs:
**Active** | **Completed**

### Active card
**John Smith**
Song Name · Artist Name
**Artist recording**

### Completed card
**John Smith**
Song Name · Artist Name
**Published**

CTA: **Listen now**

### States
- Loading
- Active populated
- Completed populated
- Empty
- Error

### Empty active
**You're all caught up**
Your active shoutouts will appear here.

### Empty completed
**Your recognition moments will appear here**
Once an artist publishes your shoutout, you'll find it here.

---

## 24. Shoutout Tracking / Detail

### Copy
**John Smith's shoutout**
[Song Name] · [Artist Name]

Timeline:

**Request received**
Your request was submitted.

**Payment confirmed**
Payment successfully processed.

**Artist recording**
The artist is preparing your shoutout.

**Published**
Your shoutout is ready.

### Components
- Order header
- Status tracker
- Event timestamps if available
- Media preview when published

### States
- Request received
- Payment confirmed
- Recording
- Published
- Revision required
- Cancelled/failed only if supported by product state model

### Revision copy
**Your shoutout needs an update**
The artist needs to make a change before it can be published.

Show the reason and next action.

---

## 25. Published Shoutout

### Copy
**John Smith just got recognized 🎉**
Artist Name mentioned John Smith in Song Name.

**+120 Recognition**

Primary: **See recognition**
Secondary: **Done**

### Components
- Audio/video player
- Recognition animation
- Artist/song metadata
- Recognition value

### States
- Loading media
- Playing
- Paused
- Published
- Media error

### Interaction
See recognition → Recognition profile.

---

## 26. Recognition Profile

### Copy
**John Smith**
**1,240 Recognition**

**34 Mentions**
**12 Songs**
**8 Artists**

**Recent recognition**

### Components
- Avatar
- Recognition total
- Stats row
- Recognition moment cards
- Optional share action if supported

### States
- Populated
- Loading
- No recognition moments
- Error

Do not expose trust/fraud mechanics.

---

## 27. Leaderboard

### Copy
**Most recognized**

Tabs:
**Today** | **This Week** | **All Time**

Rows:
[Rank] [Person] [Recognition]

### Components
- Period tabs
- Leaderboard rows
- Recognition value

### States
- Populated
- Loading
- Empty
- Error

### Empty
**No recognition rankings yet**
Recognition will appear here as shoutouts are published.

Do not imply tradable monetary value.

---

## 28. Notifications

### Copy examples
**Your shoutout is booked**
John Smith's shoutout is now with Artist Name.

**Your shoutout is ready 🎉**
John Smith was recognized in Song Name.

**Your shoutout needs an update**
The artist needs a change before publishing.

### Components
- Notification row
- Timestamp
- Read/unread state
- Optional deep-link icon

### States
- Unread
- Read
- Loading
- Empty
- Error

### Empty
**You're all caught up**
New updates about your shoutouts will appear here.

---

## 29. Fan Profile / Settings

### Header
**Profile**

Sections:
- Account
- Recognition
- My shoutouts
- Notifications
- Settings

Actions:
**Edit profile**
**Notification settings**
**Account settings**
**Log out**

### States
- Loaded
- Loading
- Error

Do not make identity creation a required profile setup step.
