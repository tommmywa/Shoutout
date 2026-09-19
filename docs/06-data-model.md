# Data Model — Designer/Builder View

## Core entities

### User
id, email, phone, role, display name, created date

### Artist Profile
user, stage name, bio, verified status, payout account

### Fan Profile
user, wallet/points balance

### Song
artist, title, audio, duration, original flag, draft/published status

### Shoutout Tier
name, price, placement choice, style choice, voice note permission

### Shoutout
song, buyer/fan, tier, Name Identity, placement, style, status, timestamps

### Voice Note
shoutout, audio, transcript, duration, moderation status

### Name Identity
durable identity record for one specific person:
- display name (not unique)
- disambiguator tag
- claimed user (optional)
- verification status
- creator
- created date

### Identity Claim
identity, claimant, evidence, review status, reviewer

### Identity Merge Request
primary identity, duplicate identity, requester, review status, reviewer

### Social Capital Event
Name Identity, user who generated event, source type, source id, event type, raw value, trust-weighted value, timestamp

### User Trust Score
user, score, account age, payment verification, device diversity, flag count

### Fraud Flag
identity/user, flag type, related events, status, reviewer, timestamps

### Name Token / Points abstraction
identity, current value/points, supply/value abstraction, tradeability flag

### Transaction
user, transaction type, amount, status, timestamp

### Consent Record
identity, consenting user, scope, granted/revoked timestamps

## Future live entities
Live Session
- artist
- type: freeform_live/live_music_session
- start/end
- stream
- peak viewers

Live Shoutout
- live session
- Name Identity
- buyer/fan
- timestamp
- clip
- gift amount

Live Reaction
- live shoutout
- user
- reaction type
- timestamp

## Architectural rule
A display name must never be the primary identity key. Shoutouts point to `name_identity_id`.
