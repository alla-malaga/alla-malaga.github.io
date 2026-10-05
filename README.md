# Alla · Málaga

Static site (Astro, TypeScript, no client JS) for Alla: home-cooked food to order and apartment cleaning in Málaga (La Luz, La Paz).

| Language | URL |
|---|---|
| Russian (default, x-default) | `/` |
| Spanish | `/es/` |
| Ukrainian | `/uk/` |
| English | `/en/` |

## Editing content

- **Facts** (WhatsApp number, phone, areas, profile links): `src/config/site.ts`.
  While `whatsappNumber` is empty, the WhatsApp buttons are hidden and the build prints a warning.
- **Texts** for each language: `src/i18n/ru.ts`, `es.ts`, `uk.ts`, `en.ts`.
  All of them share the type in `src/i18n/types.ts`, so a missing translation fails `npm run check`.
- Prices are intentionally not published.

Never add facts that aren't confirmed: no invented experience, reviews, prices, or a street address.

## Commands

```sh
npm install
npm run dev      # local dev server
npm run check    # type check
npm run build    # build to dist/ + SEO checks (scripts/verify-build.mjs)
npm run preview
```

## Deployment

`.github/workflows/deploy.yml` builds every PR and deploys `main` to GitHub Pages.
One-time setup: **Settings → Pages → Source: GitHub Actions**.

For the site to live at `https://alla-malaga.github.io/`, the repository must be named exactly
`alla-malaga.github.io`. Under any other name, GitHub serves it at `/<repo>/`. The workflow picks up the
real URL and base path automatically, so canonical/hreflang/sitemap stay correct either way.

## SEO

- Per-language `<title>`, description, canonical, hreflang (ru/es/uk/en/x-default), OpenGraph/Twitter.
- JSON-LD: `WebSite`, `WebPage`, `LocalBusiness` (city only, no street), `Service` ×3, `FAQPage`;
  `areaServed` = Málaga, La Luz, La Paz.
- `sitemap-index.xml` with hreflang alternates, `robots.txt`.

Fonts: Lora (SIL OFL 1.1, see `src/assets/fonts/OFL.txt`), self-hosted.
