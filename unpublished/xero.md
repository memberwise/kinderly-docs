---
title: Xero
description: Send invoices, payments and refunds to Xero.
sidebar:
  order: 6
---

Kinderly can write your invoices, the payments against them and any refunds
straight into Xero, so you're not keying the same numbers twice.

It's **one-way**. Kinderly writes to Xero and never reads back, so nothing that
happens here can change your books except by adding what Kinderly already knows.

Set it up in **Manage → Settings → Integrations → Accounting (Xero)**.

## Connecting

Click **Connect Xero** and sign in. Xero asks which organisation to allow
access to — pick the one your center's books are in.

:::caution[Pick one organisation]
If you authorise several, Kinderly connects to the first and tells you which one
on the settings card. If that's not the right one, **Disconnect** and connect
again, choosing only the organisation you want.
:::

## Mapping your accounts

Click **Load accounts** to read your chart of accounts, then say where each kind
of money should go. Accounts are shown by code and name — "200 · Sales" — which
is how Xero lists them.

**Where revenue is recorded.** Tuition, registration and deposits, late fees,
subsidy, discounts, and optionally refunds. These are matched on the *kind* of
fee, not its name, so renaming "Registration Fee" to "Sign-up Fee" won't move
your revenue to a different account.

**Anything else.** Set this. It's where a fee you haven't mapped goes, and
without it a single new fee name fails a whole night's sync.

**Where the money lands.** Chosen by how the family paid, because that's what
decides where the money physically is.

:::caution[Card payments need a clearing account]
Point **Card** at a clearing account — something like "Stripe Clearing" — rather
than your bank account. A family pays the full invoice today; Stripe pays you a
few days later, minus its fee. If Card points at your bank, your bank balance in
Xero will be wrong every day of the week.

Kinderly doesn't yet move that clearing balance across to your bank for you.
You'll record the Stripe payout in Xero yourself, which also lets you record the
fee. (Our QuickBooks integration does this automatically; Xero will follow.)
:::

**Don't send anything before.** Set this to the start of the period you want
Kinderly to fill in. It stops connecting Xero from posting a year of history
into books you've already closed and filed.

## Running it

**Only when I click Sync** is the safe default while you check the first
results. **Every night** takes over once you're happy.

Either way, **Sync now** queues a run immediately, and the run history under the
card shows what happened — how many invoices were created, updated or left
alone, and anything that failed with the reason.

## What lands in Xero

| In Kinderly | In Xero |
|---|---|
| A billing account, or an agency | A Contact (agencies are marked "(Agency)") |
| An invoice | An approved ACCREC invoice, dated to the period it covers |
| A payment | A payment against that invoice, in the account you mapped |
| A refund | A credit note **and** a payment against it |

A refund is two things on purpose. The credit note records what's owed back; the
payment records the money actually leaving. Without the second one, Xero would
show a credit the family might use later and your cash would be overstated by
the amount you refunded.

## If something's already in Xero

If you had "Smith Family" as a contact before connecting, Kinderly links to that
contact rather than creating a second one. You won't end up with "Smith Family
2".

Nothing is ever posted twice. If a sync is retried, it updates what it created
last time, and anything that hasn't changed is left completely alone.

## Disconnecting

**Disconnect** removes Kinderly's access. Everything already in Xero stays
exactly where it is — this stops new things being sent, it doesn't undo
anything. If you reconnect later, Kinderly still remembers what it created, so
it picks up where it left off instead of duplicating your books.

## Next

- [QuickBooks Online](/integrations/quickbooks/) — the same job, the other package.
- [Billing](/manage/billing/) — where the invoices come from.
