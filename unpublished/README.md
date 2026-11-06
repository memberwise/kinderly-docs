# Unpublished docs pages

Pages taken off docs.mykinderly.com but kept for when the feature returns.
Nothing in this folder is built, shown in the sidebar, or indexed for Ellie.

| Page | Was at | Why |
|---|---|---|
| `gusto.md` | `src/content/docs/integrations/gusto.md` | Gusto integration unavailable (2026-10-01) |
| `xero.md` | `src/content/docs/integrations/xero.md` | Xero integration paused (2026-10-01) |

To restore one: move it back, put back its links (integrations overview,
Payroll, Settings, Reference → Settings), re-add its entry to
`enroll/scripts/feature-map.json`, then run `npm run docs:parity` and
`npm run docs:index` in `../enroll`.
