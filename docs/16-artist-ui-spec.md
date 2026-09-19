# 16 — Phase 1 Artist Screen-by-Screen UI Specification

## Artist navigation

`Dashboard | Songs | Shoutouts | Earnings | Profile`

---

## 30. Artist Dashboard

### Hierarchy
1. Header
2. Pending shoutouts
3. Published shoutouts
4. Earnings
5. Recognition generated
6. Recent requests

### Copy
**Good morning, [Artist Name]**

**Pending shoutouts**
[X]

**Published**
[X]

**Earnings**
[Amount]

**Recognition generated**
[X]

Primary: **Manage shoutouts**

### States
- Loaded
- Loading skeleton
- Empty
- Error

---

## 31. Song Library

### Header
**Songs**

Each card:
- Artwork
- Song name
- Shoutout availability
- Starting price
- Availability toggle

### Copy
**Available for shoutouts**

### States
- Loaded
- Loading
- No songs
- Error

### Empty
**No songs yet**
Your songs will appear here once they're available.

---

## 32. Artist Song Detail

### Hierarchy
1. Artwork
2. Song title
3. Audio player
4. Shoutout availability
5. Tier configuration summary
6. Settings CTA

### Copy
**[Song Name]**

**Shoutouts**
Available for fans to request.

Primary: **Manage shoutouts**

### States
- Available
- Unavailable
- Loading
- Error

---

## 33. Shoutout Availability / Settings

### Header
**Shoutout settings**

Controls:
- Enable/disable shoutouts
- Available tiers
- Tier pricing where supported by requirements

### Copy
**Accept shoutouts for this song**

**Available tiers**
Bronze
Silver
Gold
Platinum

Primary: **Save changes**

### States
- Default
- Unsaved changes
- Saving
- Saved
- Error

Do not invent pricing formulas or artist eligibility rules.

---

## 34. Shoutout Queue

### Header
**Shoutouts**

Tabs:
**New | Recording | Published**

### Request card
**John Smith**
Gold — Hype
Song Name

Optional:
Placement
Instructions
Voice note

CTA: **Record shoutout**

### States
- Populated
- Loading
- Empty
- Error

### Empty
**You're all caught up**
New shoutout requests will appear here.

---

## 35. Shoutout Detail

### Hierarchy
1. Recipient
2. Song
3. Tier
4. Placement/style
5. Instructions
6. Voice note if applicable
7. Recording CTA

### Copy
**Shoutout for John Smith**

**Song**
Song Name

**Tier**
Gold — Set the vibe

**Style**
Hype

Primary: **Record shoutout**

### States
- New
- In recording
- Submitted
- Published
- Revision required

---

## 36. Platinum Voice Note Review

### Header
**Instructions from John Smith's buyer**

### Components
- Audio player
- Transcript only if product provides one
- Instruction text

### Copy
**Voice note**

Primary: **Continue to recording**

### States
- Loading
- Playing
- Paused
- Media error

Do not invent automatic transcription if it is not implemented.

---

## 37. Recording

### Header
**Record shoutout**

Show:
- Recipient
- Song
- Tier
- Placement/style
- Instructions

### Controls
**Record**
**Pause**
**Stop**

### States
- Ready
- Recording
- Paused
- Saving
- Error
- Microphone permission denied

Primary after recording: **Preview**

---

## 38. Recording Preview

### Header
**Preview shoutout**

Components:
- Audio/video player
- Recording metadata
- Re-record action

Primary: **Continue**
Secondary: **Record again**

### States
- Loading
- Playing
- Paused
- Failed

---

## 39. Publish Confirmation

### Copy
**Ready to publish?**

You're about to publish John Smith's shoutout in Song Name.

Primary: **Confirm publication**
Secondary: **Go back**

### States
- Confirmation
- Publishing
- Published
- Error

### Success
**Shoutout published ✓**
John Smith has been recognized.

Do not allow accidental duplicate publication.

---

## 40. Earnings

### Header
**Earnings**

Sections:
- Available balance
- Recent transactions
- Payout information where supported

### States
- Loaded
- Loading
- Empty
- Error

### Empty
**No earnings yet**
Completed shoutouts will appear here.

Do not invent payout timing, fees, currencies, or withdrawal rules absent from product requirements.

---

## 41. Artist Profile / Settings

### Header
**Profile**

Sections:
- Artist identity
- Bio
- Account
- Notifications
- Settings
- Log out

### States
- Loaded
- Editing
- Saving
- Error

Keep verification/admin controls separate from normal profile editing unless required.
