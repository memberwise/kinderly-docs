---
title: Family billing
description: Bill families for tuition and collect payments through Stripe.
sidebar:
  order: 7
---

The **Billing** area of Manage (`/manage/billing`) is how you bill **families**. It requires the **Manage — Billing** add-on to be active (see [Add-ons](/billing/addons/)).

## Concepts

- **Accounts** — a billing account is linked to one or more guardians (as **holders**) and one or more children.
- **Bills** — recurring or one-time invoices generated per account, based on program fees and any overrides.
- **Payments** — payments recorded against a bill. Card payments are collected through Stripe.
- **Billing runs** — run automated billing generation across every active account at once.
- **Ledger entries** — agency-funded transactions (e.g., subsidy credits) on an account.

## Accepting card payments — Stripe Connect

Providers connect their own Stripe account to accept card payments from guardians. Guardians can then save payment methods and pay their balance in the [Parent app](/mobile/parent-app/) or via a receipt email.

## Setup

1. Go to **Manage → Settings → Stripe Connect** and start onboarding.
2. Complete Stripe's onboarding flow.
3. Once your account is verified, the **Pay** buttons will light up for your guardians.
