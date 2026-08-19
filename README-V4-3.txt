KRONATRIX HOME SERVICES V4.3 — LIGHT-BACKGROUND CONTRAST FIX
Date: 2026-08-19

Replace:
- styles.css

Purpose:
- fixes the Lighthouse contrast failure for small cyan uppercase labels on white/light sections
- keeps the brighter KRONATRIX cyan on dark hero/CTA areas
- uses #00789e on white/light backgrounds, which provides approximately 5.0:1 contrast against white
- no layout, content, URLs, schema, analytics or indexing settings changed

After deployment:
1. Hard refresh the live homepage.
2. Re-run Lighthouse on https://homeservices.kronatrix.co.uk/
3. Confirm Accessibility reaches 100 or identify any remaining audit item.
