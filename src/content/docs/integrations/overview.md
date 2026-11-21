---
title: Integrations overview
description: Connecting Kinderly to the systems your state and your center already use.
sidebar:
  order: 1
---

## Live today

**[KinderConnect](/integrations/kinderconnect/)** — report attendance to KinderSystems for state subsidy billing, without keying it in twice.

**[QuickBooks Online](/integrations/quickbooks/)** — send invoices, payments and refunds to your accounting software. One-way: Kinderly writes to QuickBooks, never the reverse.

**[Google Business Profile](/integrations/google-business/)** (coming soon): keep your hours, phone and website on Google Search and Maps in step with Kinderly, post updates from your Center Feed, and see how families find you on Google.

**[Facebook Page](/integrations/facebook-page/)** (coming soon): post Center Feed posts to your center’s Facebook business Page as you publish them.

**[Webhooks](/integrations/webhooks/)** — have Kinderly POST to your own systems the moment something happens: a new inquiry, a check-in, an invoice, a failed payment. Signed, retried, and logged.

**[API](/integrations/api/)** — read your children, staff, enrollments, invoices, payments and attendance from your own systems, with a key you control.



Saving credentials doesn't start syncing anything today. See [Vendor integrations](/actions/vendor-integrations/).

## Built-in connections

Much of what you'd otherwise need an integration for is already internal to Kinderly:

| Instead of integrating… | Kinderly does it directly |
|---|---|
| A form tool feeding your child database | [Actions](/actions/overview/) create children, guardians, classroom and program assignments straight from a completed packet |
| A separate website with an inquiry form | [Grow](/grow/page-sections/#forms) embeds a Kinderly form inline and drops the inquiry into your [pipeline](/grow/pipeline/) |
| A separate parent-messaging app | [Messages](/manage/messages/) and the [Feed](/manage/feed/) reach families in the [Parent app](/mobile/parent-app/) |
| A curriculum documentation system | [Curriculum](/manage/curriculum/) tags observations teachers already write |

:::tip[Check the built-in route before looking for an integration]
The most common thing people go hunting for an integration to solve — getting enrollment form answers into their child records — is already an [action](/actions/overview/). It's just not where most people look.
:::

## Getting data out

Three routes. [Webhooks](/integrations/webhooks/) push events to your systems as
they happen — the right choice when something needs to react. The
[API](/integrations/api/) lets your systems pull, which suits anything on a
schedule. And [Reports](/manage/reports/) is the manual route: run the report,
export it, upload it wherever it needs to go.

## Next

- [KinderConnect](/integrations/kinderconnect/) — attendance for subsidy billing.
- [Webhooks](/integrations/webhooks/) — events pushed to your own systems.
- [API](/integrations/api/) — reading your data from elsewhere.
- [Actions](/actions/overview/) — the built-in automation.
