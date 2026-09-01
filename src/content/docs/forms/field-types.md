---
title: Field types
description: Every component you can put on a form, and when to reach for it.
sidebar:
  order: 3
---

Components in the builder palette are grouped into five categories. Some are marked **PRO** and need a paid plan — see [Plans](/billing/plans/).

## Structure

These shape the form. None of them ask the family a question.

| Component | What it does | Use it for |
|---|---|---|
| **Label** | A bold heading. | Breaking a long form into readable chunks — "Emergency Contact", "Medical Information" |
| **Description** | A block of descriptive text. | Explaining why you're asking, or what to have to hand |
| **Separator** | A horizontal divider. | A visual breath between groups of questions |
| **Section** *(PRO)* | A named group that fields can be assigned to. | Genuinely long forms where you want collapsible structure rather than just headings |

:::tip[Labels and separators cost nothing and help enormously]
A 30-field wall of inputs feels endless. The same 30 fields under four headings with dividers feels like four short forms. This is the cheapest improvement you can make.
:::

## Inputs

| Component | What it does | Notes |
|---|---|---|
| **Text** | Single-line text. | Supports min/max length |
| **Long answer** | Multi-line text box. | For "tell us about your child's routine" — anything needing more than a line |
| **Email** | Email address. | Validates the format, and shows a keyboard with `@` on phones |
| **Phone** | Phone number. | Brings up the number pad on phones |
| **URL** | Web address. | Rarely needed on family forms |

:::tip[Use the right input type, not just Text]
Email and Phone aren't only about validation — they change the on-screen keyboard a parent gets on their phone. Using a plain Text field for a phone number makes a parent hunt for digits on a letter keyboard.
:::

## Choices

| Component | What it does | Use it for |
|---|---|---|
| **Checkbox** | A single on/off tick. | Consent and confirmation — "I confirm the above is accurate" |
| **Choice** | Radio buttons; pick exactly one. | 2–5 options, where seeing them all at once helps |
| **Dropdown** | A select menu; pick one. | 6+ options, where radio buttons would flood the page |

The rule of thumb: **Choice** when you want the options visible, **Dropdown** when the list is long enough that showing it all is noise.

## Date & time

| Component | What it does | Use it for |
|---|---|---|
| **Date** | Date only. | Date of birth, start date |
| **Time** | Time only. | Preferred drop-off or pickup time |
| **Date & Time** | Both together. | A specific appointment slot |

:::tip[Date of birth wants Date, not Date & Time]
Pick the narrowest component that fits. Asking for a time alongside a birth date invites confusion and gives you data you'll never use.
:::

## Specialty

| Component | What it does | Notes |
|---|---|---|
| **Signature** | The family draws a signature with finger or mouse. | Works on touch and desktop |
| **Image** | Displays a static image inside the form. | Not an upload — this is *you* showing *them* something, like a site map or a uniform example |
| **Upload image** *(PRO)* | The family uploads a photo. | Immunisation records, a photo of the child |
| **Upload doc** *(PRO)* | The family uploads a document. | Custody paperwork, court orders |
| **Legal** | A block of legal or consent text the family has to acknowledge. | Photo release, terms of enrollment |
| **Payment** *(PRO)* | Collect a payment inline. | Registration fee, deposit |

:::caution[Image and Upload image are opposites]
**Image** displays a picture you've chosen. **Upload image** asks the family for one. The names are similar and picking the wrong one is a common mistake — if you're expecting immunisation records back and getting nothing, check which one you used.
:::

## Choosing between Legal and Checkbox

Both capture agreement, and they pair well:

- **Legal** presents the terms themselves — the actual text of what's being agreed to.
- **Checkbox** captures the acknowledgement — "I have read and agree".

For anything with real weight, use **Legal** for the text, a **Checkbox** to confirm, and a **Signature** to sign. That gives you a much stronger record than a lone tick.

## Next

- [Building a form](/forms/building-a-form/) — putting these together.
- [Field visibility](/forms/building-a-form/#show-a-field-only-when-it-matters) — showing a field only when it's relevant.
