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
- `functionality.md` in the sibling `../enroll/` project is the source of truth for what Kinderly does — consult it when scaffolding new sections, but translate into provider-friendly language.
- Brand theming lives in `src/styles/kinderly.css` (Poppins font, Kinderly purple accent in both light and dark mode). Pulled in via Starlight's `customCss`.
- Logo at `src/assets/kinderly.png` is used with `replacesTitle: true`.
- `site` in `astro.config.mjs` is `https://docs.mykinderly.com` — update if the docs are deployed elsewhere.

TypeScript extends `astro/tsconfigs/strict` with `strictNullChecks` on.
