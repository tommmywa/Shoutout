# State Model

## Shoutout
Recommended product-facing lifecycle:
- Draft/request being configured
- Payment pending
- Paid / Pending fulfillment
- Recording
- Published
- Rejected / needs changes
- Refunded
- Cancelled

The supplied spec explicitly defines the core fulfillment statuses as pending, recorded, and published. Additional payment/refund states here are implementation-ready distinctions and should be confirmed before being treated as final business rules.

## Voice note
- Pending moderation
- Approved
- Rejected

## Identity
- Unclaimed
- Verification pending
- Verified

Never auto-merge identities.

## Identity merge
- Pending
- Approved
- Rejected

## Transaction
- Pending
- Successful
- Failed
- Refunded

Exact payment states should follow the selected payment provider.

## Recognition event
- Recorded
- Validated/eligible
- Weighted
- Aggregated

The UI normally should not expose all internal processing states.

## Future live
Live Session:
- Scheduled
- Live
- Ended
- Processing/recap

Live Shoutout:
- Requested
- Accepted
- Performed
- Clipped
- Counted/weighted

## Rule
Separate payment state, fulfillment state, moderation state, and recognition state. Do not create one giant status field.
