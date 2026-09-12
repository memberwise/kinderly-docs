---
title: API
description: Read your center's data from your own systems, with a key you control.
sidebar:
  order: 5
---

Kinderly has a read API. Point a spreadsheet, a reporting tool or something
you've built at it, and it can pull your children, staff, enrollments, invoices,
payments and attendance.

It's read-only. To have Kinderly push things to you as they happen, use
[webhooks](/integrations/webhooks/) instead — the two are designed to be used
together.

## Getting a key

**Manage → Settings → API Keys → Create key.**

Give it a name you'll recognise, tick what it's allowed to read, and optionally
set an expiry date. You'll be shown the key once — copy it straight into
whatever needs it.

:::caution[Give a key the least it needs]
Each thing you tick is a separate permission. A tool that files invoices in a
spreadsheet has no business reading children's records, and ticking everything
out of habit is how that happens. There's a **Select all** if you genuinely need
it.
:::

The list shows the first few characters of each key, when it was last used, and
whether it's still live. If a key hasn't been used in months, it's probably safe
to revoke.

## Using it

Send the key as a bearer token:

```bash
curl https://go.mykinderly.com/api/v1/children \
  -H "Authorization: Bearer kly_live_..."
```

Start with `/api/v1/me` — it tells you which center the key belongs to and what
it's allowed to read, which saves guessing when something returns a 403.

## What you can read

| Endpoint | Needs |
|---|---|
| `/api/v1/me` | any key |
| `/api/v1/children` | `children:read` |
| `/api/v1/guardians` | `guardians:read` |
| `/api/v1/staff` | `staff:read` |
| `/api/v1/enrollments` | `enrollments:read` |
| `/api/v1/invoices` | `invoices:read` |
| `/api/v1/payments` | `payments:read` |
| `/api/v1/attendance` | `attendance:read` |

Some things are never returned, whatever a key is allowed to read: staff pay
rates, salaries, Social Security numbers and dates of birth; children's medical
and allergy records; and the signatures, photos and locations captured for state
subsidy programs.

## Working through a list

Lists come back a page at a time:

```json
{
  "data": [ … ],
  "has_more": true,
  "next_cursor": "MjAyNi0wOS0wNlQxMjowMDowMC4wMDBafGFiYw"
}
```

Keep going while `has_more` is true, passing the previous `next_cursor` back:

```bash
curl "https://go.mykinderly.com/api/v1/children?limit=100&cursor=$CURSOR" \
  -H "Authorization: Bearer $KEY"
```

`limit` defaults to 50 and caps at 200.

:::note[Why there are no page numbers]
If someone enrols a child while you're on page three, page numbers shift under
you and a child can slip through unread — with no error, and nobody noticing
until a name is missing from a system that should have it. A cursor is a
position rather than a count, so that can't happen.
:::

## When something goes wrong

Errors always come back in the same shape:

```json
{ "error": { "code": "insufficient_scope", "message": "This key needs the `invoices:read` scope…" } }
```

| Status | Means |
|---|---|
| `401` | The key is missing, wrong, revoked or expired |
| `403` | The key is fine, but isn't allowed to read this. The message names the permission to tick |
| `400` | Something in the request was wrong — usually a `cursor` that didn't come from us |
| `404` | No such endpoint |

## Revoking

**Revoke** kills a key on its very next request. Use it when a key has been
somewhere it shouldn't, when a tool is retired, or when whoever set it up
leaves.

It can't be undone — you'd create a new key and update whatever holds it — so
revoked keys stay in the list, greyed out, rather than disappearing.

## Next

- [Webhooks](/integrations/webhooks/) — the other direction: Kinderly pushing to you.
- [Overview](/integrations/overview/) — every integration Kinderly offers.
