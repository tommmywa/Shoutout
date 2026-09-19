# MVP Scope & Build Rules

## Must build
### Fan
- Authentication
- Home
- Explore/search
- Artist profile
- Song/player
- Tier selection
- Identity search/disambiguation
- Identity creation
- Tier customization
- Platinum voice note
- Checkout
- Purchase result
- Shoutout tracking
- Name Identity profile
- Social Capital points
- Leaderboard
- Activity/notifications
- Profile/settings

### Artist
- Authentication/role
- Artist profile
- Dashboard
- Song management
- Add shoutout opportunity
- Incoming shoutout queue
- Order detail
- Voice-note review
- Recording
- Preview
- Publish
- Earnings

### Admin
- Identity claims
- Identity merge review
- Moderation
- Fraud review
- Transaction oversight

## Do not build yet
- Live video
- Real-time live requests
- Live gifts
- Live music sessions
- Real token trading
- Token marketplace
- Automated identity merges
- Complex financial charts

## Definition of done
A fan can complete a studio shoutout from discovery through payment and fulfillment. An artist can fulfill it. The resulting recognition appears against the correct Name Identity and contributes to internal Social Capital.

## Build order
1. Foundation/auth
2. Fan discovery
3. Song + tier
4. Identity system
5. Checkout
6. Shoutout tracking
7. Artist fulfillment
8. Social Capital
9. Leaderboard
10. Admin essentials
11. Polish, accessibility, edge states

## Vibe-coding rule
Build vertical slices, not disconnected screens. Every implemented screen should connect to real application state, even if Phase 1 uses mocked/local data initially.
