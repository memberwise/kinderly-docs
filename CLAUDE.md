# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — local Astro dev server on `localhost:4321`
- `npm run build` — produce Cloudflare Worker output in `./dist/`
- `npm run preview` — build + run locally under Wrangler (exercises the Worker runtime, not just the Astro dev server)
- `npm run check` — full gate: `astro build && tsc && wrangler deploy --dry-run`. Use this before declaring work done.
- `npm run deploy` — `wrangler deploy` (publishes to Cloudflare; don't run without explicit user request)
- `npm run cf-typegen` — regenerate `worker-configuration.d.ts` from `wrangler.json` bindings. Run after changing bindings.
- `npx wrangler tail` — tail production Worker logs

Node >=22 is required (see `package.json` engines).

## Architecture

Astro 5 blog/docs site deployed as a **Cloudflare Worker with static assets** (not Pages). Key implications:

- `@astrojs/cloudflare` adapter with `platformProxy.enabled: true` — during `astro dev`, Cloudflare bindings declared in `wrangler.json` are proxied in, so server code can access them locally.
- `wrangler.json` points `main` at `./dist/_worker.js/index.js` (produced by `astro build`) and serves `./dist` as static assets via the `ASSETS` binding. The build step is mandatory before `wrangler deploy` or `wrangler dev`; `npm run preview` chains them.
- `worker-configuration.d.ts` is a generated file (~400KB) — do not hand-edit. Regenerate via `npm run cf-typegen` when bindings change.

Content model:

- This is a **Starlight** docs site (`@astrojs/starlight`). All pages live under `src/content/docs/` as `.md` / `.mdx`.
- `src/content.config.ts` wires up Starlight's `docsLoader` + `docsSchema` — do not replace the collection with a custom glob.
- Sidebar structure is driven by `astro.config.mjs` using `autogenerate: { directory: ... }` per section — creating a new page inside a section's folder adds it to the sidebar automatically. Top-level sidebar section order is defined explicitly in the config.
- **Audience is daycare providers, not developers.** When adding content, avoid exposing internal API endpoints, DB table names, R2 key layouts, or framework jargon. Describe workflows from the operator's perspective.
- **The running app and its source are the source of truth — not the markdown specs.**
  `../enroll/functionality.md` is useful for orientation but is demonstrably stale: it was
  wrong or silent on most of Forms, Grow, Actions, the Funding Center and the real plan
  tiers. Use it to know what to go and look at; confirm every detail against staging
  (`go-staging.mykinderly.com`) or the source before writing it down. Where the two
  disagree, the app wins. See `DOCS-PROGRESS.md` → Gotchas.
- Brand theming lives in `src/styles/kinderly.css` (Poppins font, Kinderly purple accent in both light and dark mode). Pulled in via Starlight's `customCss`.
- Logo at `src/assets/kinderly.png` is used with `replacesTitle: true`.
- `site` in `astro.config.mjs` is `https://docs.mykinderly.com` — update if the docs are deployed elsewhere.
- **Ellie searches these pages.** The `enroll` worker bundles this content so the in-app assistant can answer
  product questions and cite a URL. After adding, renaming, or substantially rewriting a page, run
  `npm run docs:index` in `../enroll` and commit the regenerated
  `enroll/src/worker/lib/ellie/docs-index.generated.ts` — otherwise Ellie keeps answering from the old copy.
- **The in-app guided tour links here, and a parity check enforces it.** Every lesson in
  `enroll/src/react-app/contexts/TutorialContext.tsx` carries a `docsHref` into
  docs.mykinderly.com. After any page change, run **`npm run docs:parity`** in `../enroll`:

  - A **new page** fails the check until it is registered in `enroll/scripts/feature-map.json`
    — with the tour steps that teach it, the page whose step covers it, or a written reason it
    needs none. That is the point: a new feature cannot be documented and then silently left
    out of the tour.
  - **Renaming a page or a heading** fails the check if a tour step still links to the old one,
    rather than sending a provider from inside the product to a 404.
  - **Sentinels** assert that sets defined in the app — CACFP report labels, Food Program tab
    names, notification types — are each mentioned on the page that owns them. If the app grows
    a report and this page doesn't mention it, the check fails.

  A screenshot used by a tour step has to exist in `enroll/public/tutorial/` as well as here;
  the failure message gives you the `cp` command.

TypeScript extends `astro/tsconfigs/strict` with `strictNullChecks` on.
