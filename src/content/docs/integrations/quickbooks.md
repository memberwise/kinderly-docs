---
title: QuickBooks Online
description: Send invoices, payments and refunds to your accounting software instead of keying them in twice.
sidebar:
  order: 3
---

Stop entering tuition payments twice. Once QuickBooks is connected, the invoices
Kinderly raises, the payments families make and any refunds you issue appear in
your books on their own.

:::note[One direction]
Kinderly writes to QuickBooks. It never reads changes back. Editing an invoice
in QuickBooks won't change anything in Kinderly — and if Kinderly later updates
that same invoice, your edit is replaced.
:::

## Setting it up

Go to **Manage → Settings → Center Config → Accounting**.

### 1. Connect

Click **Connect**. You'll be sent to Intuit to sign in and choose which company
Kinderly may write to. You'll come straight back.

Connecting on its own changes nothing — no data is sent until you've told
Kinderly where it goes.

### 2. Choose where money goes

Click **Load accounts** to read your chart of accounts, then map each kind of
money:

| Kind | What lands here |
|---|---|
| **Tuition** | Your recurring program fees |
| **Registration & deposits** | One-off enrollment fees |
| **Late fees** | Charges added after a due date |
| **Subsidy** | Money paid by an agency rather than a family |
| **Discounts** | Negative lines — scholarships, sibling rates |
| **Refunds** | Optional. Left empty, refunds reverse your tuition account |

You can pick either a QuickBooks **item** or an **account**. Items are usually
the better choice: they carry their own description, so your invoices read
properly inside QuickBooks instead of as a list of bare amounts.

:::tip[Set the fallback account]
**Anything not mapped above** catches fee types you haven't mapped. Without it,
adding one new kind of fee can fail a whole night's sync. With it, the money
lands somewhere sensible and you can re-file it at your leisure.
:::

Then set **where payments land** — your card, cash and cheque payments probably
don't go to the same place, and your bank reconciliation depends on that being
right.

:::caution[Card payments should go to a holding account]
Point **Card** at *Undeposited Funds*, or a "Stripe Balance" account — not at
your bank. A family pays the full invoice, but your bank receives it a few days
later and minus fees. Kinderly records that arrival separately (see below). If
Card points straight at your bank, the money is counted twice.
:::

### Stripe payouts (optional, and worth it)

If you take card payments, map three more things:

| Field | What to pick |
|---|---|
| **Bank account Stripe pays into** | The real bank account in QuickBooks |
| **Stripe's processing fees** | An expense account — most centers make one called "Merchant fees" |
| **Kinderly's platform fee** | An expense account. Can be the same one. |

With these set, each Stripe payout becomes a **Deposit** in QuickBooks: the
gross moves out of your holding account into the bank, with the fees as separate
lines. The deposit matches your bank statement to the cent, so the bank feed
reconciles without anyone doing arithmetic.

Leave the bank account empty and Kinderly simply won't record payouts — you'll
enter them yourself, as you do now.

### 3. Set a start date

**Nothing dated before your start date is ever sent.** Pick the point you want
your books to begin from — usually the start of the current financial year, or
today.

:::caution[This one matters]
Without a start date, connecting can push every invoice Kinderly has ever raised
into a general ledger you may have already closed and filed. Set it before you
turn QuickBooks on.
:::

### 4. Turn it on

**Save & turn on**. Choose **Every night** for an automatic nightly sync, or
**Only when I click Sync now** if you'd rather control when your books change.

## What gets sent

| Kinderly | QuickBooks |
|---|---|
| Billing account | Customer |
| Agency ledger | Customer, marked *(Agency)* so subsidy stays separable |
| Invoice | Invoice, using your Stripe invoice number where there is one |
| Payment | Payment applied to that invoice |
| Refund | Refund Receipt |
| Stripe payout | Deposit, with your fees as separate lines |

Each nightly run looks at the last **two weeks**, not just yesterday — so an
invoice you corrected last week, or a payment recorded late, still reaches
QuickBooks. Records that haven't changed are skipped without being rewritten.

### Things it won't do

- **Nothing is ever duplicated.** Kinderly remembers which QuickBooks record
  each of its own records became, so a repeated sync updates rather than
  re-creates. If you already had a family in QuickBooks before connecting,
  Kinderly links to your existing customer instead of making a second one.
- **A payout Kinderly can't fully explain is never posted.** If a payout
  contains something unexpected — a dispute, a Stripe product we don't handle —
  the run says so and skips that one deposit rather than putting a figure in
  your books that your bank contradicts. Enter that payout by hand.
- **Payouts still in transit are ignored** until they actually arrive, because
  one can still fail and be reversed.

## Checking it's working

The **Accounting** section shows the same status panel as your other
integrations — whether it's working, when it last ran, and what it did. **Recent
runs** lists the last ten attempts.

If a nightly sync fails, your administrators are told by email and in the staff
app, the same as any other integration.

## When something looks wrong

1. **Did you set a start date?** Anything older is skipped on purpose.
2. **Is every fee type mapped?** Anything unmapped goes to your fallback
   account, or fails if you haven't set one.
3. **Does the status say "connected, but not finished"?** You've connected but
   not yet chosen accounts — nothing will sync until you do.
4. **Does it ask you to reconnect?** Intuit connections expire if unused for a
   long stretch. Click **Connect** again; your existing records stay linked.
5. **Anything in Recent runs?** A failed run names what QuickBooks objected to.

## Next

- [Manage → Billing](/manage/billing/) — where invoices, payments and refunds
  are raised in the first place.
- [Integrations overview](/integrations/overview/)
