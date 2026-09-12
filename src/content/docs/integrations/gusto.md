---
title: Gusto
description: Send approved timesheet hours to Gusto, so nobody re-types them.
sidebar:
  order: 7
---

Kinderly can send the hours your team actually worked straight to Gusto, so
you're not copying a timesheet into a payroll system twice.

It's **one-way and hours only**. Kinderly sends hours and paid leave. It never
sends — or reads — pay rates, salaries, Social Security numbers, bank details or
addresses. Gusto holds those and should keep holding them.

Set it up in **Manage → Settings → Center Configuration → Payroll (Gusto)**.

## Connecting

Click **Connect Gusto** and sign in as somebody with payroll admin access. If
you administer more than one Gusto company, Kinderly connects to the first one
and names it — if that's not the right one, disconnect and connect again.

## Matching your staff

Click **Load staff from Gusto**. Kinderly matches your team to Gusto employees
**on work email address**, and shows you what it couldn't match.

:::caution[Matching is by email, never by name]
Two people called Maria Garcia is not unusual in this line of work, and matching
on name would send one of them's hours to the other's paycheck with nothing to
flag it. So anyone without a unique matching email is left for you to match by
hand, from the dropdown.
:::

You'll be told exactly why somebody didn't match:

- **No work email on their Kinderly record** — add one on their staff record.
- **No Gusto employee has this email** — usually a new hire not yet set up in
  Gusto, or a different address on each side.
- **More than one Gusto employee has this email** — pick the right one.

A match you make by hand sticks, and won't be second-guessed by a later email
match.

:::tip[Do this on a quiet Tuesday]
Unmatched staff block the send. Far better to find out now than at four o'clock
on the Friday payroll is due.
:::

## Paid leave

Map each kind of leave — PTO, Sick, Holiday — to the Gusto policy it belongs to.

Anything you leave unmapped simply isn't sent. Worked hours still go, and
Kinderly tells you what was left out. It won't guess a policy: if your PTO and
Sick accrue differently, hours in the wrong bucket is as much a payroll error as
a wrong wage.

## Sending hours

Sending happens on the [Payroll](/manage/payroll/) page, never from here. Open a
pay period, review it, approve it, then **Send to Gusto**.

That separation is on purpose. Settings is somewhere you click while thinking
about something else. Payroll isn't.

Kinderly refuses to send if the period isn't approved, if it's already been
sent, if Gusto has already run payroll for those dates, or if anyone hourly is
unmatched. Each refusal says what to fix.

## Disconnecting

**Disconnect** removes Kinderly's access. Anything already submitted stays in
Gusto — this stops new hours being sent, it doesn't undo anything. Your staff
matches are kept, so reconnecting later doesn't mean doing them all again.

## Next

- [Payroll](/manage/payroll/) — where hours are reviewed, approved and sent.
- [Overview](/integrations/overview/) — every integration Kinderly offers.
