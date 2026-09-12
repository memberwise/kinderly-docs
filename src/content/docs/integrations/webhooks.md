---
title: Webhooks
description: Have Kinderly tell your own systems the moment something happens.
sidebar:
  order: 4
---

A webhook is Kinderly telling your software about something the moment it
happens, instead of your software asking over and over whether anything has.

Set them up in **Manage → Settings → Webhooks**.

## What you can subscribe to

| Event | Fires when |
|---|---|
| `lead.created` | A new enquiry reaches your pipeline |
| `enrollment.created` | A child is enrolled in a program |
| `child.checked_in` | A child is signed in |
| `invoice.created` | An invoice is raised for a family |
| `payment.succeeded` | A family's payment settles |
| `payment.failed` | A family's payment is declined |
| `staff.created` | A staff member is added |
| `document.expiring` | A document is approaching its expiry |
| `form.submitted` | Somebody completes a shared form |

These names are fixed. We'll add new ones over time, but we won't rename or
remove an existing one, and we won't change what a field in its payload means —
so anything you build on them keeps working.

## Setting one up

1. Enter the URL your system listens on. It must start with `https://`.
2. Give it a name, and pick the events you want.
3. Click **Add endpoint**.

You'll be shown a **signing secret**. Copy it now — it's shown once and never
again. If you lose it, use **Rotate secret** to issue a new one and update your
receiver.

**Send test** posts a real event of a type you're subscribed to, marked
`"test": true` in its body, so you can confirm the wiring end to end.

## Checking the signature

Every delivery carries a `Kinderly-Signature` header:

```
Kinderly-Signature: t=1757160000,v1=8f2a...
```

Your receiver should compute an HMAC-SHA256 of `<t>.<raw request body>` using
your signing secret, and compare it to the `v1` value.

```python
import hmac, hashlib, time

def verify(secret, raw_body, header, tolerance=300):
    parts = dict(p.split("=", 1) for p in header.split(","))
    t = int(parts["t"])
    if abs(time.time() - t) > tolerance:
        return False
    expected = hmac.new(
        secret.encode(), f"{t}.{raw_body}".encode(), hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(expected, parts["v1"])
```

:::caution[Use the raw body, exactly as received]
Verify before you parse. If you decode the JSON and re-encode it, key order and
spacing change, the signature won't match, and you'll reject deliveries that
were perfectly genuine.
:::

The timestamp is part of what's signed, so nobody can capture a delivery and
replay it later with a fresh timestamp. Rejecting anything more than a few
minutes old is worth doing.

## What your endpoint should do

**Answer quickly with a `2xx`.** Anything in the 200s means "got it". Do the
actual work afterwards — if you make us wait while you process, we'll time out
at 10 seconds and retry something you already handled.

**Deduplicate on the event id.** Every delivery carries `Kinderly-Delivery` as a
header and `id` in the body. Both stay the same across retries. We guarantee a
delivery arrives *at least* once, which means occasionally twice.

**Returning an error tells us what to do:**

- A `5xx`, `429` or `408` — we'll retry, up to four attempts.
- A `4xx` — we stop. It means the request was wrong, and sending it again won't
  change that.
- A `410 Gone` — we stop immediately.
- A redirect — we don't follow it. Point the endpoint at the final URL.

## The delivery log

**Deliveries** on each endpoint shows every attempt: what was sent, what came
back, how many tries it took and what went wrong. It's the first place to look
when something didn't arrive.

:::note[Endpoints that keep failing turn themselves off]
After ten failures in a row, Kinderly stops sending to an endpoint and says so
on the settings screen. Any success resets the count, so an endpoint that
wobbles occasionally is never at risk. Fix the receiver, then **Turn on**.
:::

## What's in a delivery

```json
{
  "id": "evt_9f2c1b...",
  "type": "lead.created",
  "createdAt": "2026-09-06T14:02:11.000Z",
  "teamId": "…",
  "data": { "cardId": "…", "title": "Hannah B — tour request" }
}
```

Payloads carry what the event is about and no more. There's no medical or
allergy information, no guardian contact details, no staff pay information, and
no form answers — a form can ask anything, and these bodies travel to whatever
URL was typed into the settings screen. Where you need the full record, fetch it
from Kinderly.

## Next

- [Overview](/integrations/overview/) — every integration Kinderly offers.
- [Billing](/manage/billing/) — where invoice and payment events come from.
