# BES India website redesign

The design serves broadcast engineers, media technology companies, exhibitors, conference delegates, and society members. It uses the existing BES identity and event photography, with navy, ivory, champagne, clear typography, and restrained interactions.

## What changed

- A new homepage with an editorial hero, CMS-backed event information and photo controls, participation pathways, partner logos, society introduction, gallery, planning resources, and contact options.
- Shared design tokens in `app/design-system.css` and a Material UI theme in `app/UIComponent/design/DesignProvider.tsx`.
- Consistent page introductions, breadcrumbs, desktop sidebars, mobile section sheets, forms, tables, loading states, footer, and error states.
- The standalone PWA offline fallback uses the same brand colors and accessible layout without depending on network-loaded styles or fonts.
- Desktop navigation supports click, keyboard activation, Escape, outside-click dismissal, and focus restoration. Mobile navigation uses a drawer with expandable sections.
- Registration CTAs follow existing MongoDB service status. Delegate registration now checks the delegate service rather than the visitor service.
- Gallery filtering awaits Next.js search parameters, includes the existing 2026 photographs, and uses stable image layouts. Its keyboard-accessible photo viewer supports previous/next controls, arrow keys, Escape, and focus trapping.
- Council contact links, membership contact spelling, relative brochure URLs, and malformed external links were corrected.
- Historical detail pages and token-bearing badge URLs now await Next.js route parameters so they resolve their actual content and token rather than silently receiving undefined values.
- Historical HTML preserves its content while resolving asset path capitalization and displaying clear fallbacks for missing photographs and documents. The unavailable 2024 report is hidden from navigation until its file is restored.
- Sidebars hide inactive destinations; unavailable legacy event sections are no longer linked. The floor plan fits its content panel across tablet and desktop widths while retaining its zoom controls.

## Existing integrations

The existing routes, forms, server actions, CMS/AWS data sources, authentication provider, analytics, PWA support, public PDFs, and business data remain in use. No demo registrations, invented testimonials, or replacement inventory were introduced.

## Local verification

Use Node 22, matching `package.json`.

```powershell
npm run typecheck
npm run dev -- --port 3100
```

In another terminal:

```powershell
npm run test:design
npm run test:accessibility
```

The browser checks use local Chrome and the existing Playwright and axe-core installations. `BES_QA_URL` can select another local server; `BES_QA_BROWSER` can select another Chromium executable. Screenshots and JSON reports are written to `artifacts/`.

The checks cover public routes, desktop and mobile overflow, navigation, gallery filtering/viewing, brochure delivery, signup validation, password visibility, login/recovery UI, and reduced motion. Browser checks create no registrations or database records and send no email.

## Environment limitation

This checkout has no `.env` and lacks the MongoDB, SMTP, token, and service-secret settings required by `scripts/prebuild-check/validate-env.ts`. The ordinary `npm run build` correctly refuses to proceed without them. A direct Next.js framework build can verify compilation, type checking, and route generation, but does not verify service connectivity.

Successful live registration, account creation/login, OTP delivery, badge generation, exhibition booking, member approval, and authenticated admin operations still require those services and credentials. An inactive/unavailable registration state was checked; it must not be interpreted as evidence of a successful live submission.

The user's pre-existing lockfile changes were retained.

## Final verified result

- Next.js framework build succeeded with Node 22.14.0, including compilation, TypeScript validation, and route generation. The command was `node node_modules/next/dist/bin/next build --no-lint`; the environment precheck was not bypassed inside the normal npm script or removed from the repository.
- All 75 browser checks passed against the production preview, with no browser runtime or hydration errors. Responsive checks covered widths from 320px to 1440px.
- All 12 automated accessibility audits reported zero WCAG A/AA violations: homepage, contact, council, signup, gallery, and standalone offline fallback at desktop and mobile widths. These are automated checks, not a claim of comprehensive accessibility certification.
- Final screenshots were inspected, and `git diff --check` passed.
- Evidence: `artifacts/design-qa.json`, `artifacts/accessibility-qa.json`, and the screenshots in `artifacts/`.
