---
title: Authentication
description: How signing in works for staff, families, and public share recipients.
sidebar:
  order: 1
---

## Staff and admins (web)

Staff sign in through **Auth0**. A Kinderly session is a secure cookie that keeps you signed in until you log out.

## Families and staff (mobile)

The Teacher and Parent apps sign in through Auth0 as well, and use a secure token on every request. There are no session cookies on mobile.

## Parents opening paperwork

Parents **don't need a login** to open paperwork you send them. Instead:

1. They click the share link.
2. They enter the **6-digit PIN** you delivered separately.
3. After 5 wrong PIN attempts, the link is locked for 30 minutes.

This means you can send paperwork to anyone with an email address — they don't need to create an account first.
