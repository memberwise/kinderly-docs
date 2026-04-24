---
title: Conditions and branching
description: Show different steps to different families based on their answers.
sidebar:
  order: 3
---

**Conditions** let a packet follow different paths for different families. For example: only show the "Food allergy details" form if a parent checked "Yes" on the "Does your child have a food allergy?" question.

## How it works

- Drop a **Condition** node onto the canvas from the **Logic** section of the palette.
- Configure three things in the side panel:
  - **Field** — which form answer to look at.
  - **Operator** — _equals_, _does not equal_, _contains_, _does not contain_, _greater than_, _less than_.
  - **Compare value** — what to compare the answer against.
- Connect the **green (right) handle** to the steps that should run if the condition is **true**.
- Connect the **red (bottom) handle** to the steps that should run if it is **false**.

The parent never sees the condition — they just see the right next step.

> _Add a screenshot of a simple branching example here._
