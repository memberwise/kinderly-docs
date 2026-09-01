---
title: Execution & troubleshooting
description: What happens when an action runs, and how to tell when one didn't.
sidebar:
  order: 3
---

## When an action fires

Two modes, set by the packet's **Actions** toggle:

- **Immediate** — the action runs as soon as the step feeding into it is completed.
- **Require Approval** — nothing runs until you review the submissions and click **Approve**, at which point every action for that packet fires at once.

See [Approval mode](/packets/approval-mode/) for choosing.

## Actions behind a condition

An action sitting on a [condition](/packets/conditions/) branch only runs if the condition sends the family down that branch.

Conditions are evaluated against **everything the family has answered so far**, not just the most recent step. So a condition late in a packet can branch on an answer from step one, and the action behind it behaves accordingly.

## Order

Actions connected to the same completed step fire together. If you need one thing to happen before another, chain them through the flow rather than hanging both off the same node.

:::caution[Create the record before you assign it]
**Assign Child to Classroom** needs the child to exist. Order the flow so **Add Child to Kinderly Manage** runs first — otherwise the assignment has nothing to attach to. The same applies to guardians and addresses.
:::

## Checking what happened

Every run is recorded against the [share](/shares/admin/), with:

- **Status** — pending, running, success or error
- **Input** — the values the action actually ran with, after bindings were resolved
- **Output** — the response, or the error
- **Finished at**

:::tip[The Input field is where you debug a binding]
When an action succeeds but produces something wrong — a child named after a parent, a blank date of birth — the Input record shows exactly what the binding resolved to. That tells you whether the problem is the binding or the form.
:::

## When something doesn't happen

Work through this order:

1. **Is the packet on Require Approval?** If so, nothing fires until someone approves. This is by far the most common cause.
2. **Is the action connected?** An action node with no line into it is never reached.
3. **Is it behind a condition?** If the condition went the other way, the action was correctly skipped.
4. **Check the run record.** An error status will say what went wrong.
5. **Check the bindings.** A required field bound to a question the family left blank can fail.

:::tip[Approval mode is the answer most of the time]
"Our welcome emails stopped" almost always means completed shares are sitting unapproved. Make sure someone owns that queue — the [Shares list](/shares/admin/) flags them with a **Needs Approval** badge.
:::

## Approving twice

Approve is guarded against double-firing, so a stray second click won't send everything again.

## Next

- [Parameter binding](/actions/parameter-binding/) — getting the inputs right.
- [Managing shares](/shares/admin/) — where run records live.
