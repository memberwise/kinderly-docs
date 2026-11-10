---
title: Programs
description: What you offer, who's enrolled, and what it costs.
sidebar:
  order: 6
---

A program is something a family enrols in — Full Day Preschool, Before & After School Care, Summer Camp, a two-day toddler place. It ties what you offer to what you charge.

**Manage → Programs** shows every program as a card: what it collects each billing cycle, when it next bills, and who's enrolled. **New program** creates one.

## The Programs page

Across the top:

- **Programs**: how many you run, and how many invoice automatically.
- **Children enrolled**: children in at least one program, and how many active children aren't in any.
- **Expected per month**: every program's flat fees for the children it will actually invoice, after each child's overrides, converted to a month (a weekly program counts 52 cycles a year, a twice-monthly one 24). Daily and hourly fees depend on attendance, so they're left out and the tile says which programs have them.
- **Won't be invoiced**: enrolled children the billing run will skip because they aren't on an open [billing account](/manage/billing/) with an account holder, and what a cycle of their fees comes to. Click it to see only the programs that need attention.

Each card shows the amount per cycle ("$4,250.00 / month"), the next bill date, a bar of how many enrolled children will be invoiced, who joined or left in the last 30 days, and the children themselves. Search finds a program or a child in one. **Needs attention** shows programs with children who won't be invoiced, enrolled children but no fees, or invoices that aren't automatic. **Archived** shows retired programs, which you can restore from the card's menu.

## Who was in a program, and when

Kinderly keeps a history of every enrollment change: a child enrolled or unenrolled, moved from one program to another (on the child's page or by a [transition](/manage/scheduling/#transitions)), their start or end date edited, or everyone unenrolled when a program was archived. Changes made in the teacher app and by a packet's "enroll in program" action are recorded too.

- **Program activity**, at the bottom of the Programs page, lists every change, newest first. Filter it by child, kind of change or program.
- On a program's **Children** tab, the **Program calendar** shows a month at a time: how many children were enrolled each day, who joined and who left, and the days the program bills. Click a day to see exactly who was in the program that day, and for a bill day, the period it covers. The timeline below it includes children who have since left, and **Enrollment history** lists the changes for that program.
- The **Program** box on a [child's record](/manage/children/) lists their program history.

History starts with what Kinderly already knew when the feature arrived: every current enrollment and every past one it still had. If a child left a program and later came back before then, only their latest stint was on record.

## Programs and billing

A program carries its fee structure, so enrolling a child in a program is what generates their charges. Get the program right and [billing](/manage/billing/) mostly runs itself.

Individual exceptions are handled with **Program Fee Overrides** on the [child's record](/manage/children/#billing) — the amount changes for that child, the program stays as it is.

## When a program starts billing

Every billing schedule on the program's **Billing** tab has a **First Billing Date**. Nothing is billed before it, so you can set up next fall's program today and it won't send a single invoice until then.

- **Weekly, Bi-Weekly and Annually** repeat from that date. A weekly program bills on the weekday of its first billing date.
- **Monthly and Twice Monthly** keep their own schedule (a day of the month, or for example the 1st and 3rd Monday). Billing starts on the first of those days on or after your first billing date. The form shows when the first invoice will go out.
- **One Time** has a single **Billing Date** instead.

The calendar beside the form shows the actual billing dates, starting from the first invoice.

## Daily and hourly rates

A recurring fee doesn't have to be the same amount every cycle. When you add or edit one on the program's **Fees** tab, choose how it's **Charged**:

- **Per cycle**: the same amount on every invoice (tuition, an activity fee).
- **Per day**: the rate times the number of days the child signed in.
- **Per hour**: the rate times the hours between sign-in and sign-out. Pick **Round up** or **Round down**. Each day's total time is rounded to a whole hour, so with round up 4 h 10 m bills as 5 hours, and with round down 4 h 50 m bills as 4 hours. A child who leaves for an appointment and comes back the same day is rounded once for the whole day, not once per visit.

Attendance can only be billed after it has happened, so daily and hourly fees are billed for the **previous** cycle. A weekly program billing on Mondays sends one invoice with this week's flat fees and last week's days or hours. The line shows the count and dates, for example "12 hours, Oct 5 – Oct 11". The first invoice after you set up a program has no attendance on it, and attendance from before billing began is never charged.

A few things to know:

- **A missing sign-out still counts as a day, but none of its hours are billed.** The invoice line says so, so you can fix the attendance record and adjust the invoice.
- **A child who leaves partway through a cycle** still gets a final invoice for the days or hours they attended before their end date, with no new flat fees.
- **A child with no attendance** on a daily or hourly program gets no invoice that cycle.
- **A child-specific rate** works the same way as any other override: a custom amount on the child's record becomes that child's daily or hourly rate.

:::tip[One program per thing you sell, not per price]
It's tempting to create "Preschool", "Preschool (sibling rate)" and "Preschool (staff rate)". Don't. That's one program with two overridden children. Otherwise every fee change means remembering to edit three programs identically.
:::

## Programs and classrooms

They answer different questions. A **[classroom](/manage/classrooms/)** is where a child physically is, and drives ratios and safety. A **program** is what the family buys, and drives billing. Children in one room can be on several different programs.

## Retiring a program

Archive a program you no longer offer, from its card's menu or the **Archive program** button on the program. Archiving unenrolls every child in it, so none of them are billed for it again, and each one shows in the program's history. Their past invoices are untouched.

Restoring an archived program brings it back empty. Re-enroll children yourself, so nobody starts being billed again by accident.

## Next

- [Billing](/manage/billing/) — turning programs into invoices.
- [Children](/manage/children/) — enrolling a child and overriding fees.
