---
title: Parameter binding
description: Feed a family's answers straight into an action.
sidebar:
  order: 2
---

An action's fields can be fixed text, or they can pull from what the family actually answered. That second option — **binding** — is what makes actions useful.

![The action config pane showing the incoming form data panel and Bind field buttons](../../../assets/screenshots/packet-action-config.png)

## How to bind

Click an action node to open its settings. At the top, **Incoming form data** tells you what's available — *"Enrollment Form — 17 fields"*.

Then on any field, use the **@** button (or **Bind field**) to insert an answer instead of typing a value.

## Static or bound

| Use static when | Use bound when |
|---|---|
| The value never changes | It differs per family |
| Emailing your own office | Emailing the parent |
| A fixed subject line | The child's name |

:::tip[Bind the To address on parent emails]
Binding **To** to the parent's email field means one packet serves every family. Hard-code an address only when the message should always go to the same place — your office, or a room lead.
:::

## Binding record-creating actions

Actions like **Add Child to Kinderly Manage** are almost entirely bound: first name, last name, birth date and gender each come from a form field.

:::caution[Bind to the right field, and check the format]
Two traps. First, a form with both the child's name and the parent's name has two "First Name" fields — bind the wrong one and you create a child record named after the parent. Second, a date of birth collected as free text rather than a [Date field](/forms/field-types/) may not import cleanly. Use the proper field type when the answer feeds an action.
:::

:::tip[Design the form around the actions]
If a packet is going to create records, work backwards: list what the actions need, then make sure the form asks for exactly that, with the right field types. It's much easier than retro-fitting bindings to a form written for humans to read.
:::

## Which answers are available

An action can use answers from any form **earlier** in the packet, not only the step immediately before it. Data from step one is available to an action at step five.

:::caution[An action can't bind to a form after it]
Bindings only look backwards. If an action needs an answer, that question has to come before it in the flow.
:::

## Next

- [Execution](/actions/execution/) — what happens when the action runs.
- [Approval mode](/packets/approval-mode/) — controlling when.
