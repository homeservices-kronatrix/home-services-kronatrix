KRONATRIX HOME SERVICES V4.7 — GA4 CUSTOM EVENT FIX
Date: 2026-08-19

Replace only site.js.

Why:
GA4 page_view, session_start, user_engagement and scroll were confirmed in Realtime,
but the custom CTA events did not appear.

This patch:
- explicitly targets G-HVE7XRLZEP
- uses event_callback and event_timeout
- briefly holds tracked same-tab navigation so the custom event can be processed
- does not send email contents or user-entered personal information

Test:
1. Upload site.js from this ZIP.
2. Wait for GitHub Pages deployment.
3. Open Home Services and make sure analytics is allowed.
4. Click Pool businesses once.
5. Check GA4 Realtime for pool_business_visibility_click.
