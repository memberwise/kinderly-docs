---
title: Approval mode
description: Decide whether automations fire immediately or wait for you to review.
sidebar:
  order: 4
---

The **Actions** toggle at the top of the packet canvas decides when your action nodes run. There are two settings, and the right one depends on what your actions actually do.

## Immediate

Each action fires as soon as the step feeding into it is completed. A family finishes the enrollment form, the confirmation email goes out seconds later.

Best for anything you'd never want to hold up:

- Confirmation and welcome emails
- Notifying your own team that something arrived
- Adding a card to a [Grow](/grow/overview/) pipeline so the enquiry shows up straight away

## Require Approval

Nothing fires automatically. The family completes every step, then the packet waits. You open the share, read through what they submitted, and click **Approve** — and only then does every action run at once.

Best when an action does something you'd struggle to walk back:

- Emails to a family that assume they're accepted
- Anything that creates a billing record
- Anything sent to an outside organisation

:::tip[Ask yourself: what if the answers are wrong?]
This is the whole decision. If a family fat-fingers their email address or uploads the wrong document, does your action do something awkward? A duplicate welcome email is a shrug. A billing record or a "your place is confirmed" email is not. Awkward to undo means **Require Approval**.
:::

## How approval works day to day

1. The family completes every step in the packet.
2. The share picks up a **Needs Approval** badge in your [Shares](/shares/admin/) list.
3. You open it and review the submissions.
4. You click **Approve**. Every action fires.

The badge only appears once *everything* is submitted, so it's a reliable "this one is ready for you" signal rather than a nag.

:::caution[Approval mode means someone has to actually approve]
Nothing happens until a person clicks the button. If your welcome emails have stopped going out, check whether the packet is on Require Approval and shares are sitting unapproved. Make sure someone owns that queue.
:::

:::tip[You can't approve twice]
Approve is guarded against double-firing, so an accidental second click won't send everything again.
:::

## Choosing

| Your actions… | Setting |
|---|---|
| Only notify you or your team | Immediate |
| Send a family a routine confirmation | Immediate |
| Tell a family something is confirmed or approved | Require Approval |
| Create billing records or charges | Require Approval |
| Send data to an outside organisation | Require Approval |
| You're not sure | Require Approval — you can always relax it later |

## Changing it later

The toggle can be changed at any time and takes effect on shares going forward. It doesn't retroactively fire actions for packets already completed.

## Next

- [Building a packet](/packets/building-a-packet/) — the full walkthrough.
- [Managing shares](/shares/admin/) — where the Approve button lives.
