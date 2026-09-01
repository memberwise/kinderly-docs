# Kinderly Docs — Rewrite Progress

Working document for the docs catch-up pass. Tracks what's done, what's left, and
anything that needed (or still needs) a human.

**Goal:** provider-friendly walkthroughs for every area of the enroll app, with
screenshots and practical tips — replacing the 15–30 line stubs that exist today.

## Ground rules

- Audience is **daycare providers, not developers**. No API endpoints, table
  names, R2 key layouts, or framework jargon (see `docs/CLAUDE.md`).
- Every page answers "how do I do this", not "what is this".
- Screenshots captured from **staging** (`go-staging.mykinderly.com`) at
  1440×900 via the Playwright MCP profile. Production is blocked in `.mcp.json`.
- Images land in `src/assets/screenshots/` and are referenced from the page.
- **Source of truth is the running app**, not the markdown specs. `../enroll/functionality.md`
  and friends (`funding-center.md`, `curriculum.md`, `child-scheduling.md`,
  `MOBILE_APPS_REQUIREMENTS.md`) are useful for orientation but are demonstrably stale —
  see Gotchas. Use them to know what to go and look at; confirm the detail on staging or
  in the source before writing it down.

## Order of work

1. ~~**Forms → Packets → Shares**~~ ✅ — the core enrollment loop. Sets the
   page template every other section follows.
2. ~~Documents~~ ✅
3. ~~Getting Started~~ ✅
4. Kinderly Manage (incl. undocumented Finance + Curriculum) ← **next**
5. Kinderly Grow (needs full rework — now a website builder, not just a pipeline)
6. Funding Center (**no docs exist at all**)
7. Actions, Shares admin, Billing, Integrations, Mobile, Reference

## Status

Legend: ⬜ not started · 🟡 drafted, no images · 🟢 done (prose + images)

### Getting Started
| Page | Status | Notes |
|---|---|---|
| `getting-started/welcome.md` | 🟢 | The four products, dashboard, Ellie |
| `getting-started/what-you-get.md` | 🟢 | Real plan tiers + limits table |
| `getting-started/account-setup.md` | 🟢 | Profile, teams, billing, setup order |

### Forms
| Page | Status | Notes |
|---|---|---|
| `forms/overview.md` | 🟢 | 4 creation paths documented (3 were undocumented) |
| `forms/building-a-form.md` | 🟢 | Full walkthrough + conditional visibility |
| `forms/field-types.md` | 🟢 | All 18 components, PRO gating marked |

### Packets
| Page | Status | Notes |
|---|---|---|
| `packets/overview.md` | 🟢 | Node types, colour coding, packet-vs-separate-shares |
| `packets/building-a-packet.md` | 🟢 | Canvas tour, connecting nodes, action field binding |
| `packets/conditions.md` | 🟢 | True/false handles, worked allergy example |
| `packets/approval-mode.md` | 🟢 | Immediate vs Require Approval decision table |

### Documents
| Page | Status | Notes |
|---|---|---|
| `documents/overview.md` | 🟢 | Incl. New Blank PDF, folder-structure advice |
| `documents/managing-files.md` | 🟢 | Row menu, bulk actions, expiry dates |
| `documents/viewer.md` | 🟢 | Field placement, tab order, signing, annotate |

### Shares
| Page | Status | Notes |
|---|---|---|
| `shares/overview.md` | 🟢 | PIN model, public links |
| `shares/sending.md` | 🟢 | All dialog options + QR codes |
| `shares/admin.md` | 🟢 | List, filters, detail page, revoking |
| `shares/for-parents.md` | 🟢 | Family-facing walkthrough + FAQ |

**Enroll app + Getting Started complete** — 17 pages rewritten, 24 screenshots, site builds clean.

## Screenshots captured

All in `src/assets/screenshots/`, from staging at 1440×900.

`forms-empty-state` · `forms-template-picker` · `form-builder-overview` ·
`form-builder-properties` · `form-field-visibility-rule` · `form-preview` ·
`packet-new-dialog` · `packet-canvas-empty` · `packet-canvas-flow` ·
`packet-condition-config` · `packet-action-config` · `share-create-dialog` ·
`share-created-pin` · `share-qr-code` · `share-pin-gate` · `share-packet-steps` ·
`shares-list` · `share-detail` · `documents-library` · `dashboard` ·
`enroll-overview` · `settings-plans` ·
`documents-selected-actions` · `documents-row-menu` · `document-viewer`

## Undocumented features found while writing

All live in the app, all absent from `functionality.md`. Now covered in the docs,
but they may deserve marketing/changelog attention too.

**Forms**
- Template gallery (Onboarding / Sales / HR / Events) with full field preview
- "Start from document" — imports fillable fields out of a library PDF
- "Start with Ellie" — AI-assisted form creation (feature-flagged)
- Per-field conditional visibility ("Show only if…", 6 operators)
- Sections, and PRO gating on Section / Upload image / Upload doc / Payment
- "Long answer" field type

**Packets**
- Colour-coded node types on the canvas
- Field binding via an **@ / Bind field** button (old doc described `{{fieldId}}` tokens)
- "Incoming form data" panel showing which upstream fields an action can use

**Documents**
- **New Blank PDF** — build a document from nothing, no source file needed
- Full PDF **field editor**: place Signature / Initials / Text / Number / Dropdown /
  Checkbox / Label / Separator fields onto a page
- **Built-in field detection** — a fillable PDF's existing fields are found automatically
  (the staging state form reported 128)
- **Tab order** panel with drag-to-reorder
- **Annotate** mode
- Per-document **expiry dates**, surfaced in an Expires column
- Row menu: Share via Link, Add to Packet, Move to…, Rename
- Bulk select → Delete / Download / Add to Packet

**Plans / billing** — the biggest single discrepancy found
- Real tiers are **Sprout (free) · Bloom $49.99 · Flourish $99.99 · Grove (contact us)**.
  `functionality.md` describes `free` / `pro` with "30 MB, 3 forms, 5 packets" vs
  "unlimited". That maps to nothing in the live product.
- Limits per tier now recorded in `getting-started/what-you-get.md` — **this table should be
  the reference for the Billing section too**, which still carries the old free/pro model.
- Sprout **excludes** virtual tours, the Grow analytics dashboard and the Funding Center
  (struck through in the plan card). Everything else is on every tier.

**Shares**
- Kinderly **emails the link and PIN automatically** (`shares.ts:504-520`). The old doc
  claimed the sender delivers the PIN by hand. Delivery failure is non-fatal — the dialog
  still shows both so you can pass them on manually.
- Recipient picker sourced from Manage guardians
- **Upload Mailing List** for bulk sending
- **Public access** toggle (no-PIN links)
- **Allow editing after submission** (settable at creation *and* later)
- QR code generation + download
- Search across **response content**, plus "Search with Ellie"
- **Download all (ZIP)** on the share detail page

## Coverage gaps — app features with no docs today

These need **new** pages and sidebar entries in `astro.config.mjs`:

- **Funding Center** (`/funding`) — opportunities, applications, calendar,
  document vault, provider profile. Zero coverage.
- **Curriculum** (`/manage/curriculum`) — learning frameworks, activities.
- **Finance** (`/manage/finance`) — expenses, budgets, categories.
- **Grow website builder** (`/grow/sites`, `pages`, `theme`, `media`, `tours`,
  `domains`, `analytics`) — docs currently describe Grow as only a pipeline board.

## Needs manual intervention

Things I can't do unattended — please action or confirm.

| # | Item | Status |
|---|---|---|
| 1 | **Auth0 login on staging.** Screenshot capture needs a live session in the Playwright Chrome profile (`~/.claude/playwright-kinderly-profile`). Session expires — expect to re-log periodically. | ✅ done 2026-08-31 |
| 2 | **Demo content created on staging.** Staging's Enroll section was empty, so to have anything to photograph I created: an **"Enrollment Form"** (from the built-in template), a **"New Family Enrollment"** packet (form → document → condition → email action), and one **share** to `parent@example.com`. Delete these whenever you like — the screenshots are already captured. | ✅ done, yours to remove |
| 3 | **`docs/CLAUDE.md` points at a stale source of truth.** It tells future sessions `../enroll/functionality.md` is authoritative. It isn't (see Gotchas). Worth either refreshing that file or amending CLAUDE.md to say "verify against the running app". | ⏳ needs your call |
| 4 | **Confirm PRO gating is accurate.** The palette showed Section, Upload image, Upload doc and Payment as PRO on this staging team's plan. Docs state this as fact — worth confirming it matches production plan rules. | ⏳ needs review |
| 5 | **Old stub images deleted.** `forms/image.png` and `forms/image-1.png` were unreferenced after the rewrite and have been removed. | ✅ done |

## Gotchas

**`functionality.md` is materially out of date — trust the live app.** This is the big one.
It's cited in `docs/CLAUDE.md` as the source of truth, but for Forms alone it was wrong or
silent on: the template gallery, "start from document", Ellie, per-field conditional
visibility, sections, PRO gating, and roughly half the field-type names (it lists
`datetime`/`choice`/`select`; the UI says Date & Time / Choice / Dropdown, and has a
"Long answer" type the doc doesn't mention). **Verify everything against staging or the
source before writing it.** Where the two disagree, I've gone with the app.

**Screenshot paths must be absolute.** Passing a bare filename to the Playwright MCP
screenshot tool saves to the repo root, not the configured `--output-dir`. Always pass the
full path under `docs/src/assets/screenshots/`.

**Dismiss the tour modal first.** A "Want a guided tour?" dialog covers the page on first
load of a section. Click **No thanks**. There's also a persistent "Getting started 0/22"
badge bottom-right — it's in the empty-state shot but stays out of the way elsewhere.

**Don't save experimental changes.** When poking at a control to photograph it (e.g.
toggling a visibility rule), toggle it back and navigate away without saving. The builder
header flips from **Saved** to **Save** to tell you there's something outstanding.

**"Duplicate id" build warnings are harmless — ignore them.** Rewriting a page makes the
*first* `astro build` after the change warn `Duplicate id "packets/overview" found…`.
There is only ever one file. Running the build a second time with no further edits comes
back clean, so it's the content-layer store being written twice in a single run, not a
real collision. (`rm -rf .astro` looks like it fixes this but doesn't — I checked; the
warning still appears on the first build after a change, cache cleared or not.) Don't go
hunting for a second file.

**Arranging packet canvas nodes needs real mouse events.** React Flow ignores synthetic
`PointerEvent`s dispatched via `browser_evaluate` — nodes won't move. Drive it through
Playwright's `page.mouse` instead. Two further traps: dragging moves a node *by a delta*,
not to an absolute point, so compute `delta = (target - current) × zoom`; and a node whose
`boundingBox()` sits outside the visible canvas pane can't be grabbed, so clamp the grab
point inside the pane. Watch for accidentally dragging a palette tile — it silently creates
duplicate nodes (click one and press Delete to remove).

**Watch for personal data in screenshots.** The Settings page shows the logged-in user's real
name and email. I captured it, spotted it, and replaced that shot with one cropped to the
plan cards (`settings-plans.png`). These docs are public — check every capture of Settings,
Staff, Guardians, Children and Messages before committing it.

**Read the pixels, not just the text.** Extracting the plans section as text listed "Virtual
tours", "Grow analytics dashboard" and "Funding Center" under Sprout's INCLUDES, so my first
draft said Sprout had all three. The screenshot shows them **struck through with a lock** —
they're excluded. `innerText` gives no hint of `line-through`. Where a UI conveys meaning
through styling, confirm against the image or computed style.

**Verify before asserting.** I initially wrote that "Start from document" uploads a PDF and
converts it. It doesn't — it reads fillable fields out of a PDF *already in the Documents
library*, and only ones that have AcroForm fields. Caught it by reading
`DocumentPickerDialog.tsx`. Assume anything not seen on screen or in source is a guess.
