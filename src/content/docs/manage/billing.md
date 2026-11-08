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

### Payout day

The money families pay online is sent to your bank once a week. You pick the weekday, Monday to Friday, during setup (in the onboarding wizard's billing step or under **Settings → Billing**). If you don't pick one, it's Friday. You can change it any time under **Settings → Billing**.

A payout includes the payments that have cleared by that day. A card payment usually clears in about two business days, and a bank payment takes a few business days longer, so a payment made the day before your payout day goes out the following week.

## Fees and discounts

Each online payment carries the payment processor's fee — 2.9% + 30¢ for a card, 0.8% (at most $5) for a bank payment — and Kinderly's platform fee of 0.3% + $0.25. Both come out of your payout.

If you want families to share the cost, set either or both under **Settings → Billing → Fees**:

- **Service fee on card and bank payments** — a flat amount, a percentage, or both. You can't know in advance how a family will pay, so the fee is added at the moment they pay by card or bank and appears on the invoice as its own line. Payments by cash, check or account credit never carry it, and neither does an agency.
- **Discount for paying by bank** — a percentage off payments made from a bank account. Bank payments cost you far less than cards, so this pays for itself.

Both apply wherever a card or bank payment happens: in the parent app, when you charge a saved card or bank account, on autopay, and when you record a card or bank payment you took outside Kinderly. When you record one, enter the amount going toward the balance; the payment screen shows the service fee and the total to collect from the family. In the parent app, families choose how to pay first (a saved card or bank account, or a new one) and see the fee, any bank discount, and the total before they pay. They can also change which saved method is their default, which is the one autopay charges.

If you cancel a payment, its service fee and discount come off the invoice with it.

To see every fee for a period (processor, platform, service fees and discounts), run the **Payment Fees** report under **Reports → Finance**.

Card networks and some states limit fees for paying by card, and some require fees to be disclosed before payment. Check the rules that apply to you before turning the service fee on.

Bank payments take a few business days to clear. Until then the payment shows as pending and the invoice stays open. Once the money arrives the invoice is marked paid and the service fee and any bank discount appear on it.

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

You add, rename and remove agency ledgers under **Settings → Billing → Agency Ledgers**. If you don't have any yet, you can also create your first one while adding an **Agency / Ledger** holder to a billing account. Before you remove one, Kinderly tells you how many open billing accounts use it. Removing a ledger doesn't change those accounts: they keep billing the agency's share. It only stops the ledger being added to more accounts. To stop billing an agency for a family, remove it from that family's billing account.

## Invoices

**All Invoices** lists every invoice raised. Charges come from the [program](/manage/programs/) a child is enrolled in, with any **Program Fee Overrides** on the child's record applied automatically.

### Invoice templates

If you raise the same charges by hand again and again, save them as a template
instead of retyping them. Templates hold line items: a name, description, amount
and quantity for each.

To make one, go to **Settings → Billing → Invoice Templates** and click **New
Template**. You can also click **Save as template** in **Create Invoice**, which
starts a template from the lines on that invoice.

To use one, open **Create Invoice** on an account and pick it from **Add from a
template**. Its items are added to whatever is already on the invoice, so you can
combine templates, and you can change or remove any line before you create the
invoice. Due date, period and note are still set per invoice.

Editing or deleting a template doesn't affect invoices you've already created.

### Changing a due date

Open an account, expand the invoice and click **Change Due Date**. Use it when
you've given a family more time, or when an invoice was raised with the wrong
date on it. Only the date moves — the line items and the amount owed stay as
they are, and the invoice stops counting as overdue from the new date.

It's offered on invoices that still have a balance. A paid or voided invoice is
history and can't be moved.

### Voiding and deleting

**Void** cancels an invoice a family has already seen. It stays on the account,
marked **Void**, so the record of what was cancelled survives. An invoice that
has received a payment can't be voided — cancel the payment first.

**Delete Permanently** appears on voided invoices only. It removes the invoice
and its line items from the account entirely, for invoices that shouldn't be on
the books at all — a duplicate, or one raised against the wrong account.

:::caution[Delete is for mistakes, not for cancellations]
A deleted invoice leaves no trace: it disappears from the account's history and
from reports. If a family was ever sent the invoice, void it instead so the
cancellation is still on the record.
:::

If the invoice charged a one-time deposit or registration fee, deleting it frees
that fee to be billed again — voiding alone does not.

To clear several at once, tick the invoices in the list and click **Delete N
Voided** in the bar above the table. Only the voided ones in your selection are
deleted — anything still open or paid is left alone, so a selection you made to
email or download PDFs can't take live invoices with it.

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
