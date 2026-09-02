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
4. ~~Kinderly Manage (incl. undocumented Finance + Curriculum)~~ ✅
5. ~~Kinderly Grow (needed a full rework — it's a website builder now)~~ ✅
6. ~~Funding Center~~ ✅
7. ~~Actions, Billing, Integrations, Mobile, Reference~~ ✅

**All planned sections are done.** Remaining work is listed under *Needs manual intervention*
and *Not reviewed* below.

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

### Kinderly Manage
| Page | Status | Notes |
|---|---|---|
| `manage/overview.md` | 🟢 | The five nav groups + recommended setup order |
| `manage/children.md` | 🟢 | All six record tabs, CACFP fields |
| `manage/guardians.md` | 🟢 | Many-to-many model, per-child flags |
| `manage/staff.md` | 🟢 | Roles, ratio counting, time reports |
| `manage/classrooms.md` | 🟢 | Ratios, out-of-ratio alerts |
| `manage/programs.md` | 🟢 | Programs vs classrooms, fee overrides |
| `manage/scheduling.md` | 🟢 | Staff / Children / Transitions tabs |
| `manage/curriculum.md` | 🟢 | **NEW** — frameworks, planner, assessment, gaps |
| `manage/messages.md` | 🟢 | Conversations vs broadcasts vs feed |
| `manage/feed.md` | 🟢 | **NEW** — post types, recurring events, video |
| `manage/billing.md` | 🟢 | Accounts, agency ledger, tax statements |
| `manage/finance.md` | 🟢 | **NEW** — expenses, categories, budgets |
| `manage/reports.md` | 🟢 | Report categories, custom builder |
| `manage/settings.md` | 🟢 | 7 tabs + meal schedule, auto sign-out, custom closures, import |

### Kinderly Grow — restructured
| Page | Status | Notes |
|---|---|---|
| `grow/overview.md` | 🟢 | Rewritten — it's a website builder, not a board |
| `grow/sites.md` | 🟢 | **NEW** — sites, pages, draft/publish, media |
| `grow/page-sections.md` | 🟢 | **NEW** — all 17 section types |
| `grow/theme.md` | 🟢 | **NEW** — colours, typography, buttons |
| `grow/tours.md` | 🟢 | **NEW** — virtual tours + embedding |
| `grow/pipeline.md` | 🟢 | **NEW** — replaces boards/cards/shares-on-cards |
| `grow/analytics.md` | 🟢 | **NEW** — metrics and how to read them |

**Deleted:** `grow/boards.md`, `grow/cards.md`, `grow/shares-on-cards.md` — all three were
pipeline-only stubs from when Grow *was* just a pipeline. Consolidated into `pipeline.md`.
Checked: nothing else linked to them.

### Funding Center — brand new section
| Page | Status | Notes |
|---|---|---|
| `funding/overview.md` | 🟢 | **NEW** — what it does, the workflow |
| `funding/profile.md` | 🟢 | **NEW** — the questions that drive matching |
| `funding/opportunities.md` | 🟢 | **NEW** — filters, choosing what to pursue |
| `funding/applications.md` | 🟢 | **NEW** — deadlines, checklists, reporting |
| `funding/documents.md` | 🟢 | **NEW** — the upload-once vault |
| `funding/calendar.md` | 🟢 | **NEW** — working backwards from deadlines |

Added a **Funding Center** entry to the `astro.config.mjs` sidebar (top-level sections are
explicit; the per-page order autogenerates).

### Actions
| Page | Status | Notes |
|---|---|---|
| `actions/overview.md` | 🟢 | All 12 actions — the old page listed 2 |
| `actions/parameter-binding.md` | 🟢 | @ / Bind field, binding record-creating actions |
| `actions/execution.md` | 🟢 | Run records, ordering, troubleshooting order |
| `actions/vendor-integrations.md` | 🟢 | What's live vs. prepared |

### Billing — was actively wrong
| Page | Status | Notes |
|---|---|---|
| `billing/overview.md` | 🟢 | Rewritten for flat per-center pricing |
| `billing/plans.md` | 🟢 | Real four tiers; legacy Free/Pro mapping noted |
| `billing/payment-methods.md` | 🟢 | Cards, invoices, usage |

**Deleted:** `billing/addons.md` — described per-child add-ons (`manage` $0.85/child,
`manage_billing` +$0.20/child) that are not how Kinderly is sold. Nothing linked to it.

### Integrations, Mobile, Reference
| Page | Status | Notes |
|---|---|---|
| `integrations/overview.md` | 🟢 | Live vs. prepared, plus "use the built-in route" table |
| `integrations/kinderconnect.md` | 🟢 | Rewritten from source; added scheduled submission |
| `mobile/overview.md` | ⬜ | Short but accurate; left as-is |
| `mobile/teacher-app.md` | 🟢 | Added out-of-ratio alerts, Learning row, video posts |
| `mobile/parent-app.md` | 🟢 | Already strong; added video + recurring events |
| `reference/authentication.md` | 🟢 | Corrected the "you deliver the PIN" claim |
| `reference/settings.md` | 🟢 | Rewritten as "which of the two Settings pages" |
| `reference/glossary.md` | 🟢 | Rebuilt across all five products |

Also updated `index.mdx` — the Grow card still described a pipeline only, and there was no
Funding Center card.

**All sections complete** — 60 pages, 44 screenshots, site builds clean, every internal link
resolves, no orphaned images.

## Not reviewed

- **`mobile/overview.md`** (13 lines) — short, but accurate as far as it goes. Left as-is.

## Screenshots captured

All in `src/assets/screenshots/`, from staging at 1440×900.

`forms-empty-state` · `forms-template-picker` · `form-builder-overview` ·
`form-builder-properties` · `form-field-visibility-rule` · `form-preview` ·
`packet-new-dialog` · `packet-canvas-empty` · `packet-canvas-flow` ·
`packet-condition-config` · `packet-action-config` · `share-create-dialog` ·
`share-created-pin` · `share-qr-code` · `share-pin-gate` · `share-packet-steps` ·
`shares-list` · `share-detail` · `documents-library` · `dashboard` ·
`enroll-overview` · `settings-plans` ·
`documents-selected-actions` · `documents-row-menu` · `document-viewer` ·
`manage-children-list` · `manage-child-record` · `manage-child-medical` ·
`manage-curriculum` · `manage-scheduling` · `manage-reports` · `manage-billing` ·
`manage-finance` · `manage-feed` · `grow-sites` · `grow-page-editor` ·
`grow-add-section` · `grow-theme` · `grow-pipeline` · `grow-analytics` ·
`funding-profile` · `funding-documents` · `funding-opportunities` · `packet-action-picker` ·
`manage-classrooms` · `manage-messages` · `manage-guardians` · `manage-staff` ·
`manage-settings` · `grow-tours` · `funding-calendar` · `funding-applications`

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

**Manage → Settings** — found on a second pass, all undocumented
- **Auto Sign-Out** — signs out anyone still signed in at a set time, with *separate times for
  children and staff*. This is the actual fix for stale sign-ins skewing ratio alerts.
- **Meal Schedule** — configure the meals you serve and when, reorderable; underpins CACFP.
- **Custom Closures** — one-off center closures alongside the federal-holiday checklist.
- **Data Tools → Import Data** — bulk import children, guardians and staff from Excel/CSV.
  Materially changes the recommended setup order, so `getting-started/account-setup.md`
  now points at it.

**Manage** — three whole areas had no docs at all
- **Curriculum** — framework library (Head Start ELOF as the crosswalk interlingua, plus KY,
  MO, IL, AR and more state standards, each with domain/outcome counts), Library, Planner,
  Assessment and Shared tabs, Framework Coverage / Outcome Gaps / Observation Volume panels,
  "Build your own", and a **Curriculum in the apps** toggle gating the Teachers-app Learning row.
- **Finance** — operating spend: expenses with receipts, categories, budgets, six-month trend.
  Deliberately *not* connected to family Billing.
- **Feed** — News / Announcements / Events / Closures, pinning, photo **and video** posts
  (20 attachments, 200 MB per clip), recurring events with series collapse, all-day events.
- **Children** — CACFP/USDA food program fields (program type, race/ethnicity, IE form dates)
  on every child record. Six record tabs, not the flat record the old docs implied.
- **Billing** — **agency ledger** for third-party/subsidy payers, and Tax ID (EIN/TIN) +
  Provider Number (DVN) that print on family tax statements.
- **Reports** — far larger than documented: 12 attendance reports alone, plus a custom report
  builder and saved reports. Categories: Attendance / Health / Curriculum / CACFP / Finance /
  Other / Manage.
- **Staff** — out-of-ratio alerts count who is *signed in*, not who is assigned.

**Grow** — the docs described a pipeline board; it's a full website builder
- **Sites** with **draft/publish versioning** (`v0 live • v1 draft`) on free
  `*.kinderlysites.com` subdomains
- **Page editor** — stack sections, drag to reorder, autosave, draft preview, hide-panels
- **17 section types**: Hero, CTA Banner, Image+Text, Features, Stats, About,
  Image+Text carousel, Virtual tour, **Compliance** (licence no., capacity, ratios, food
  program, accreditations), Gallery, Video, Video carousel, Testimonial, FAQ, Testimonial
  carousel, **Kinderly form/document embed**, **Center Feed**, Contact
- **Theme** — primary + primary-soft colours with matched templates, curated font pairings
  (Fraunces + Inter default) or custom Google Font URL, button shape and hover animation
- **Virtual tours** — photo walkthroughs with a closing CTA, embeddable three ways
  (entry card / full-bleed cover / immersive takeover)
- **Analytics** — page views, button clicks, CTR, top pages, devices, referrers,
  "Review with Ellie"

**Funding Center** — had zero documentation
- Profile-driven **matching** (8 questions; state/ZIP/enrolment pulled from center settings)
- **Applications** bundling deadline + document checklist + reporting requirements
- **Document vault** — upload W-9 / licence / COI once, auto-attached to any application
  asking for them, with expiry tracking
- **Calendar** unifying deadlines, reporting dates and document expiries
- A **matching-funds** toggle that hides grants requiring you to put money up

**Actions** — the docs listed 2; there are 12
The **+** beside Actions in the packet palette opens an "Add Actions" dialog with vendor tabs.
**KINDERLY ACTIONS (11)** plus Send Email:
Add Card to Kinderly Grow · Add Child to Kinderly Manage · Add Guardian to Kinderly Manage ·
Assign Child to Classroom · Assign Child to Program · Add Address to Child / Guardian / Staff ·
Link Share to Child / Guardian / Staff.
Together these mean **a completed packet can create the entire child record**, both guardians,
their addresses, classroom and program assignment, attach the signed paperwork to the child's
file, and email the family — with no manual data entry. This is arguably the most valuable
capability in the product and it was almost entirely undocumented.

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

- ~~**Funding Center** (`/funding`)~~ ✅ written
- ~~**Curriculum** (`/manage/curriculum`)~~ ✅ written
- ~~**Finance** (`/manage/finance`)~~ ✅ written
- ~~**Feed** (`/manage/feed`)~~ ✅ written
- ~~**Grow website builder**~~ ✅ written (domains excluded — still "Coming soon" in-product)

## ACTION REQUIRED — your checklist

Open items only. Everything here needs a human; nothing is blocking the docs.

### Product bugs to fix

- [ ] **`/grow/domains` leaks an internal note to users.** The "Coming soon" page tells
      providers *"Track progress in docs/grow-design.md."* — an internal repo path rendered
      in production UI. Should be removed.
- [ ] **Grow's "Center Feed" section says "Requires the Manage add-on."** Add-ons are no
      longer how Kinderly is sold — Settings states Manage is included on every tier. Either
      that string is stale, or add-on gating still exists somewhere and Settings is wrong.
      Worth resolving; I documented the Settings version, since that's what customers see.

### Docs decisions for you

- [ ] **`docs/CLAUDE.md` points at a stale source of truth.** It tells future sessions
      `../enroll/functionality.md` is authoritative. It isn't — it was wrong or silent on
      nearly every section (see Gotchas). Either refresh that file or amend CLAUDE.md to say
      "verify against the running app". Left alone, the next session repeats my mistakes.
- [ ] **Sanity-check `integrations/kinderconnect.md` against a real submission.** I have now
      verified it against the source (match rules, cadences, cron, submission window), so the
      described *behaviour* is accurate. What I still can't confirm is how it behaves against
      a live KinderSystems endpoint — worth one read from someone who has actually filed.
- [ ] **Confirm PRO gating.** The form palette showed Section, Upload image, Upload doc and
      Payment as PRO on this staging team's plan, and the docs state that as fact. Confirm it
      matches production plan rules.

### Optional — would improve the docs

- [ ] **Seed funding opportunities on staging** (`npm run db:seed:funding`). The Opportunities
      list is empty, so I could only capture its empty state. With data I can reshoot and
      document what an opportunity card actually shows.
- [ ] **Build a realistic Grow site on staging.** Current content is a placeholder ("uhhuh",
      one Welcome page), so the Sites/Pages screenshots are honest but unglamorous.
- [ ] **Tidy up my staging demo data** whenever you like — an "Enrollment Form", a
      "New Family Enrollment" packet, and one share to `parent@example.com`. All screenshots
      are already captured, so deleting them breaks nothing.

### Before publishing

- [ ] **`npm run deploy`** — I have not deployed. `npm run check` passes (build + tsc +
      wrangler dry-run).
- [ ] **Re-read any screenshot showing personal data.** I caught and replaced one Settings
      capture containing a real name and email. Screens covering Staff, Guardians, Children
      and Messages need the same check if recaptured.

### Done

- [x] Auth0 login on staging (2026-08-31) — session lives in the Playwright Chrome profile
      at `~/.claude/playwright-kinderly-profile` and will expire eventually.
- [x] Removed unreferenced stubs `forms/image.png`, `forms/image-1.png`,
      `billing/addons.md`, `grow/boards.md`, `grow/cards.md`, `grow/shares-on-cards.md`.

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

**How to redact a screenshot properly.** For Guardians and Staff I rewrote the DOM text nodes
before capturing, so the published image carries placeholder data instead of real addresses:

```js
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
for (const n of nodes) n.nodeValue = n.nodeValue
  .replace(/[\w.+-]+@[\w.-]+\.\w+/g, 'dad@example.com');
```

Two traps. **Names are often split across text nodes** — matching `/Tyler Buese/` found
nothing while `/Tyler/` and `/Buese/` separately found three nodes, including one in an
off-screen profile menu. **Always assert afterwards** rather than trusting the replace:
`await page.evaluate(() => /Buese/i.test(document.body.innerText))` must come back `false`
*before* you screenshot. My first staff capture passed visual inspection and still had the
real name in the DOM. Avatar initials (e.g. "TB") survive this and are fine — two letters,
no name or contact detail.

**Read the pixels, not just the text.** Extracting the plans section as text listed "Virtual
tours", "Grow analytics dashboard" and "Funding Center" under Sprout's INCLUDES, so my first
draft said Sprout had all three. The screenshot shows them **struck through with a lock** —
they're excluded. `innerText` gives no hint of `line-through`. Where a UI conveys meaning
through styling, confirm against the image or computed style.

**Verify before asserting.** I initially wrote that "Start from document" uploads a PDF and
converts it. It doesn't — it reads fillable fields out of a PDF *already in the Documents
library*, and only ones that have AcroForm fields. Caught it by reading
`DocumentPickerDialog.tsx`. Assume anything not seen on screen or in source is a guess.
