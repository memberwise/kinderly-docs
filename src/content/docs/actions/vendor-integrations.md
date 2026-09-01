---
title: Vendor integrations
description: Connecting Kinderly actions to outside systems.
sidebar:
  order: 4
---

The **Add Actions** dialog groups actions by vendor. **Kinderly** is the one with actions available today; the rest are prepared but not yet live.

| Vendor | Status |
|---|---|
| **Kinderly** | 11 actions available — see [Actions overview](/actions/overview/) |
| **Salesforce** | Credentials can be stored; actions not yet live |
| **Infinite Campus** | Credentials can be stored; actions not yet live |
| **ProCare** | Credentials can be stored; actions not yet live |
| **Tyler SIS** | Credentials can be stored; actions not yet live |

:::note[Storing credentials doesn't switch anything on]
You can save connection details for these systems now, and they'll be ready when the actions ship. Saving them does not start syncing anything today.
:::

## What each expects

| Vendor | Credentials |
|---|---|
| **Salesforce** | Instance URL, Client ID, Client Secret |
| **Infinite Campus** | Base URL, API Key |
| **ProCare** | Username, Password, Site ID |
| **Tyler SIS** | API URL, API Key, District ID |

These come from the other system, not from Kinderly. Your administrator for that system — or their support team — is who to ask.

:::caution[Treat these as passwords]
API keys and client secrets give access to your student information system. Don't email them around or paste them into a shared document, and rotate them if someone with access leaves.
:::

## In the meantime

Where a state or district system needs data from Kinderly today, the practical route is a [report](/manage/reports/) exported and uploaded on the other side. Less elegant than a live sync, but it works now.

For attendance reporting to state subsidy systems, see [KinderConnect](/integrations/kinderconnect/), which *is* live.

## Next

- [Actions overview](/actions/overview/) — what's available today.
- [Integrations](/integrations/overview/) — the wider picture.
