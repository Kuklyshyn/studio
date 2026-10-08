# Lighthouse baseline and results

Measured on 2026-10-08 with Lighthouse 12.8.2, mobile emulation, the four categories
(performance, accessibility, best practices, SEO). The run machine is the same for every row.

## Before: production omnicode.sk (commit 34b70f9)

| Page | Performance | Accessibility | Best practices | SEO | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/sk` | 74 | 95 | 100 | 92 | 3.0 s | 5.0 s | 0 ms | 0 |
| `/sk/portfolio` | 96 | 93 | 100 | 92 | 1.0 s | 2.4 s | 20 ms | 0 |
| `/sk/contact` | 95 | 95 | 100 | 92 | 1.2 s | 2.6 s | 40 ms | 0 |

What failed before: the meta description was rendered inside `<body>` on every page, so SEO
audits did not see it (SEO 92). Buttons without a name (language switcher) and heading order
on the portfolio (accessibility 93–95). On `/sk`, the LCP element was the cookie banner text,
which appeared only after JavaScript ran, and the logos loaded from the Iconify API at runtime.

## Local production builds on the same machine (34b70f9 vs 4ee9c94)

These runs use a local server, so there is no network latency to Vercel. They compare the
code before and after, not the production numbers.

| Page | Before (34b70f9) | After (4ee9c94) |
| --- | --- | --- |
| `/sk` | 98 / 95 / 100 / 92, LCP 2.5 s | 96 / 100 / 100 / 92, LCP 2.7 s |
| `/sk/portfolio` | 95 / 93 / 96 / 92, LCP 3.0 s | 95–96 / 100 / 100 / 92, LCP 2.8–2.9 s |
| `/sk/contact` | 96 / 95 / 100 / 92, LCP 2.8 s | 97 / 100 / 100 / 92, LCP 2.6 s |

Local performance varies by about ±3 between runs, so the home page difference is noise. The
change that matters most for production is that all locale pages are now prerendered
(before, most were rendered per request), so the first byte comes from the CDN. That effect
does not show on a local server. Measure it on the production deployment after merge.

## Known artifact

SEO shows 92 locally because the canonical audit sees `https://omnicode.sk/...` on a
`localhost` page and marks it invalid. The production baseline did not fail the canonical
audit, so the expected production value is 100. Verify after deploy.

## Checks run on 4ee9c94

- `tsc --noEmit`: passes.
- `npm run build`: passes. `postbuild` checks that no `[[ПОТРІБНО` placeholder is rendered.
- All 54 prerendered HTML files carry title, description, canonical and `og:image` in `<head>`.
- `lint`: the repository has no ESLint configuration, so `next lint` is not run.
