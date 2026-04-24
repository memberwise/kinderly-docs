---
title: When actions run
description: When actions fire and where to see the result.
sidebar:
  order: 3
---

## When an action fires

It depends on the packet's [approval mode](/packets/approval-mode/):

- **Immediate** — the action runs the moment the parent finishes the connected step.
- **Requires approval** — nothing runs until a staff member clicks **Approve** on the share.

If an action is after a [condition](/packets/conditions/), it only runs when the condition takes the branch that leads to it.

## Seeing what ran

Every action run is recorded on the [share detail page](/shares/admin/) with its status — pending, running, success, or error — and any output the action returned. This is where to look if you're wondering "did the welcome email actually go out?"
