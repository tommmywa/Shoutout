# 17 — Phase 1 Admin UI Specification

## Purpose

Essential operational screens only. Admin screens support identity integrity, moderation, fraud review and financial oversight. Internal terminology may be used here when it improves operational precision.

---

## 42. Admin Dashboard

### Hierarchy
1. Operational overview
2. Pending identity work
3. Moderation queue
4. Fraud review
5. Transactions/payouts

### Components
- Metric cards
- Queue summaries
- Recent activity table/list

### States
- Loaded
- Loading
- Error

---

## 43. Identity Claims Queue

### Header
**Identity claims**

Each item:
- Person profile
- Claimant
- Evidence/context
- Current status

Actions:
- Review
- Approve
- Reject

### States
- Pending
- Approved
- Rejected
- Loading
- Error

Never automatically merge identities based only on matching names.

---

## 44. Identity Merge Review

### Header
**Identity merge review**

Show side-by-side:
- Identity A
- Identity B
- Name
- Username
- Location
- Profile metadata
- Recognition history

Actions:
**Approve merge**
**Reject**

### Confirmation
**Merge these identities?**
This action changes which recognition history is associated with the person.

Primary: **Confirm merge**
Secondary: **Cancel**

### States
- Review
- Confirming
- Complete
- Conflict/error

Require explicit confirmation.

---

## 45. Moderation Queue

### Header
**Moderation**

Each item:
- Shoutout/media
- Report reason
- Reporter/context
- Current moderation state

Actions depend on supported moderation policy.

### States
- Pending
- Reviewing
- Resolved
- Escalated
- Error

Do not invent moderation decisions or enforcement rules.

---

## 46. Fraud Review

### Header
**Fraud review**

Show only operational signals supported by the fraud system.

Possible structure:
- Flag
- Related transaction/order
- Relevant account/entity
- Reason/signal
- Review status

Actions should follow the actual fraud workflow.

Never expose fraud scores or trust formulas to consumers.

---

## 47. Transaction / Payout Overview

### Header
**Transactions & payouts**

Columns/rows:
- Transaction
- User/order
- Amount
- Payment state
- Fulfillment state
- Payout state where applicable
- Timestamp

### States
- Loading
- Populated
- Empty
- Error

Keep payment, fulfillment, moderation and recognition states separate.
