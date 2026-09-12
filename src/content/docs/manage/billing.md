---
title: Billing
description: Charging families — accounts, invoices, payments and balances.
sidebar:
  order: 12
---

Billing handles money coming **in** from families. (Your own operating spend is [Finance](/manage/finance/).)

![The billing dashboard with payments collected and account balances](../../../assets/screenshots/manage-billing.png)

## Turning on payments

Until you complete setup, a banner offers **Start Billing**. Completing it lets you charge guardians via saved credit cards or bank accounts.

You can run billing without it — issuing invoices and recording what families pay by cash or transfer — but families can't pay in-app.

## Billing accounts

A **billing account** is who gets the invoice. It can have several **holders** (both parents, say) and cover several children, so a family gets one invoice rather than one per child.

**New Account** creates one. Children are attached from their own [record](/manage/children/#billing).

:::tip[One account per family, not per child]
Siblings on one account means one invoice, one balance and one payment. Separate accounts per child means a family reconciling three payments a month and you chasing three balances.
:::

## The dashboard

- **Payments Collected** — a per-day chart over 30 days, 90 days or a year
- **Paid vs. Outstanding** — all-time totals, and how many accounts carry a balance
- **Collected last 30 days**

## The accounts table

Each row shows the account, its holders, agency ledger, number of children, balance, next due date and status (e.g. **Balance Due**). Sort by any column; **Filters** narrows the list.

:::tip[Sort by balance to find the real problem]
Sorting by balance, largest first, shows you where the money actually is. Working chronologically through overdue accounts means spending equal effort on a $12 balance and a $1,200 one.
:::

### Agency ledger

Where a third party — a state subsidy or agency — pays part of a child's fees, that portion is tracked separately from what the family owes.

:::caution[Split the family and agency portions properly]
If an agency covers part of a place and you bill the whole amount to the family, you'll chase parents for money they don't owe. The agency ledger exists so the family's balance is genuinely what the family owes.
:::

## Invoices

**All Invoices** lists every invoice raised. Charges come from the [program](/manage/programs/) a child is enrolled in, with any **Program Fee Overrides** on the child's record applied automatically.

## Refunds

Open an invoice in **All Invoices** and click **Refund**. There are three ways
to say how much:

| Choose | When |
|---|---|
| **The whole invoice** | You're giving back everything that was paid |
| **Selected line items** | Only part of what was billed is coming back — a supplies fee, say |
| **A specific amount** | You've agreed a figure that doesn't match any line |

Whichever you pick, Kinderly will never let you refund more than the invoice
actually received. The dialog shows the amount available, and it goes down as
you issue refunds.

**Card payments go back to the card.** If you refund against a payment that was
taken by card, Kinderly sends the refund through Stripe and the money returns to
the family's card. Anything else — cash, a cheque, a bank transfer — is recorded
as a refund you handled yourself; Kinderly keeps the record straight but doesn't
move the money.

A card refund can take a few days to land. Until it does it shows as **Pending**
and doesn't count against the invoice, so you can't accidentally refund the same
money twice while the first one is in flight.

:::caution[A refunded invoice reopens]
Refunding part of a paid invoice makes it unpaid again, with a balance equal to
what you gave back. That's deliberate — the family's balance should match what
your bank says. If the refund settles the matter and you don't want to chase it,
void the invoice.
:::

Refunds show on the invoice underneath the payments, and are subtracted from
tax statements automatically — see below.

### Refunds you issue in Stripe

You don't have to start a refund here. If you refund a charge from the Stripe
dashboard, Kinderly picks it up and records it against the same invoice, marked
**Refunded in Stripe**, and the invoice reopens exactly as it would have done.
The family's balance is the same number either way.

Two things to know. Kinderly only matches charges it took — a payment your
center collected in Stripe for something outside Kinderly is ignored, not
guessed at. And a refund that Stripe reports as pending stays pending here too
until it settles.

## Tax statements

Families download tax statements from the [Parents app](/mobile/parent-app/). These carry your **Tax ID (EIN/TIN)** and **Provider Number (DVN)** from [Settings](/manage/settings/).

Refunds appear on the statement as negative lines, in date order alongside the
payments, and are subtracted from the total. A family claiming a childcare tax
credit is claiming what they actually spent, so a statement that ignored refunds
would overstate their deduction.

:::tip[Fill in your Tax ID and Provider Number before January]
Parents need these for childcare tax credits, and they all want them at once. Left blank, the fields are simply omitted from the statement — and you'll spend January answering the same question by email.
:::

## Next

- [Programs](/manage/programs/) — where fees are defined.
- [Finance](/manage/finance/) — money going out.
