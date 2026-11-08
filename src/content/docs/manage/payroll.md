---
title: Payroll
description: Review a pay period, sign it off, and take the hours to payroll.
sidebar:
  order: 18
---

**Manage → Payroll** turns the sign-ins and sign-outs your team already records
into a pay period you can check, approve, and hand to whoever runs payroll.

![The Payroll page, with the period controls and recent pay periods](../../../assets/screenshots/manage-payroll-overview.png)

## Opening a pay period

Click **New pay period**, pick the dates (or a shortcut like **Last 2 weeks**), the
overtime rule, and which day your workweek starts on, then click **Open pay period**.
Kinderly works out everyone's hours from attendance, and remembers the overtime rule
and week start for next time.

Your pay periods are listed down the left, newest first, each tagged with its
status — **Draft**, **Approved** or **Sent**. Click one to open it; the
most recent opens on its own when you arrive. Above each period's figures, a
**Review → Approve → Export** track says what's left to do.

![A draft pay period, with regular, overtime and PTO hours per person](../../../assets/screenshots/manage-payroll-review.png)

The summary line under the dates is the whole period at a glance — total regular
hours, total overtime, PTO, and how many people are payable. Each row below is
one person's hours, with anything questionable called out in **Needs a look**.

:::note[Overtime is counted by week, not by pay period]
Two weeks of 30 hours each is 60 hours and no overtime. Counting across the
whole period would invent 20 hours of it. That's why the workweek start day
matters — it decides where one week ends and the next begins.

Federal overtime is over 40 hours a week. California, Alaska, Nevada and
Colorado also owe it past 8 hours in a day: four ten-hour days is exactly 40
hours and still owes 8 hours of overtime there.
:::

## Needs a look

Anyone whose records don't add up appears with a note — a missing sign-out, a
sign-out with no matching sign-in, two sign-ins in a row.

**Kinderly counts nothing for these rather than guessing.** A teacher who forgot
to clock out worked an unknown number of hours, and eight is as much a guess as
zero. The difference is that eight looks like a real timecard and gets signed
off.

You have two choices:

1. **Fix the record** in [Attendance](/manage/children/#attendance), then reopen
   the pay period and rebuild it. This is usually right.
2. **Tick "I've checked this"** to approve anyway, with a note saying why. Use
   this when you know what happened — someone covered the close and forgot to
   clock out — and the note is what you'll be glad of in six months.

You can't approve a pay period while anything is still unchecked.

## Approving

**Approve** signs the period off and freezes the figures.

:::caution[Approving locks the numbers in — on purpose]
After you approve, editing attendance does **not** change the approved hours.
Instead, Kinderly shows you a banner saying what's changed and by how much.

That's deliberate. If the numbers quietly moved after you signed them, what
eventually reached payroll wouldn't be what you approved, and nobody could tell.
If you want the new figures, **Reopen**, rebuild, and approve again.
:::

Reopening clears the approval — what you signed off was a set of numbers, and
once those can move again the signature doesn't mean anything.

## Getting the hours to payroll

Once a period is approved, **Export for payroll** downloads the hours as a file for
Gusto, QuickBooks Online Payroll, ADP RUN or Paychex Flex, or as an entry sheet for
Square Payroll. The dialog shows where to upload it in your provider. See
[Payroll exports](/manage/payroll-exports/) for each provider's steps.

**Print** gives you a sheet of everyone's hours, and the **Payroll Hours** report in
[Reports](/manage/reports/) gives you the same figures to key in by hand.

The approval is still worth doing first: it freezes the numbers and records who
checked what, so what reaches payroll is exactly what was signed off.

## Next

- [Payroll exports](/manage/payroll-exports/): the file for your payroll provider, and where it goes.
- [Scheduling](/manage/scheduling/) — where shifts are set.
- [Reports](/manage/reports/) — the Payroll Hours and Employee Time Card reports.
