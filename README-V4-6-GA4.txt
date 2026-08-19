KRONATRIX HOME SERVICES V4.6 — GOOGLE ANALYTICS
Date: 2026-08-19

Measurement ID:
G-HVE7XRLZEP

Upload and rename/replace:
- site-v4-6-ga4.js -> site.js
- privacy-v4-6-ga4.html -> privacy.html

Or use the ZIP: it already contains the correct repository filenames.

What this adds:
- Existing KRONATRIX GA4 measurement ID
- GA loads only after "Allow analytics"
- Advertising storage denied
- Ad user data denied
- Ad personalisation denied
- Google Signals disabled in website config
- Ad-personalisation signals disabled in website config
- Visitor can reopen "Analytics settings"
- CTA events:
  * home_services_email_click
  * visibility_review_click
  * pool_business_visibility_click
  * proof_live_site_click

Important:
- home_services_email_click means the visitor clicked the email link.
- It does NOT prove an email was actually sent.
- A confirmed enquiry-submitted event requires a real form endpoint and successful form response.

After deployment:
1. Open the site in incognito/private browsing.
2. Confirm the Analytics choice panel appears.
3. Click Allow analytics.
4. Browse several Home Services pages and click a CTA.
5. Open the existing KRONATRIX GA4 property -> Reports -> Realtime.
6. Confirm the Home Services visit appears.

ChatGPT attempted the GitHub update directly, but the GitHub write endpoint returned HTTP 403, so manual upload is required.
