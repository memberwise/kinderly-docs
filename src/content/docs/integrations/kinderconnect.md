---
title: KinderConnect
description: Report attendance to KinderSystems for state subsidy billing.
sidebar:
  order: 2
---

Kinderly integrates with **KinderSystems / KinderConnect** so you can send attendance records to your state agency without leaving Kinderly.

## Setting it up

Configure credentials at **Manage → Settings → Integrations → KinderConnect**:

- **Provider ID**, **Group Password**, **Agency ID** — your KinderSystems provider credentials.
- **Cognito** credentials (base API, client ID, client secret) — used to authenticate with KinderSystems.
- **Base API URL** — the KinderSystems REST API base.

When you save with the integration **enabled**, Kinderly immediately runs an **auto-match** as a connection test.

## Auto-match

Kinderly matches your children to KinderSystems children using **first name + last name + date of birth**:

- Pulls the KinderSystems children list for the current month.
- For each of your unmatched children, finds an exact match by name and DOB.
- On a match, stores the KinderSystems child ID on that child's record.

You'll see three buckets in the result:

- **Matched** — successfully linked.
- **Not Found** — no match in KinderSystems.
- **Needs Review** — ambiguous matches you should look at manually.

A **daily job at 7:00 AM** re-runs auto-match for every team that has KinderConnect enabled.

## Manual match

For a child who didn't auto-match, open their row actions menu in **Children** and use **Match to KinderSystems** to pick the right KinderSystems child by hand.

## Submitting attendance

Once children are matched, send attendance to KinderSystems from the **KinderConnect** page (`/manage/kinderconnect`). Kinderly validates that every included child has a KinderSystems ID before submitting.

## The "Edit in KinderSystems" link

When a child has a KinderSystems ID, an **Edit in KinderSystems** option appears in the child's row actions in the Children list.
