# TexasBitcoin.com

The authority on Bitcoin in Texas – where Bitcoin meets the physical world
(energy, the grid, the largest mines in North America) and the financial future
(the money law, a state reserve, and programmable money built on the hardest
base layer).

Live at [texasbitcoin.com](https://texasbitcoin.com). Deployed on Vercel from `main`.

## Positioning

A focused **research and reference** publication. Bitcoin-centric: stablecoins
and smart contracts are covered specifically as layers that **settle to
Bitcoin**, not as a gateway to generic multi-chain coverage. Not financial,
investment, legal, or tax advice. We do not custody, transmit, or facilitate
transactions in any digital asset.

The editorial spine is a **layered stack anchored in Texas**:

- **Base layer – principles:** trustless settlement, self-custody, proof-of-work.
- **The grid:** ERCOT, mining economics, demand response.
- **The money law:** Memo 1037 → SB 21 reserve → HB 1056 gold-backed currency.
- **Programmability – the frontier:** Lightning, Taproot Assets, Bitcoin-settling layers.

Every datable legal, legislative, or historical claim is cited to a primary
source. Where the record cuts against the thesis, the page says so (the
"honest counterweight" section in `CONTENT-TEMPLATE.md`).

## What's on the site

Roughly 40 routes, organised into wings:

| Wing | Pages |
|---|---|
| **History** | `/history-of-bitcoin-in-texas` (cornerstone), `/texas-crypto-archive`, `/early-bitcoin-merchants-texas`, `/central-texas-gun-works-bitcoin`, `/rockdale-texas-bitcoin`, `/ross-ulbricht-silk-road-bitcoin` |
| **Law & policy** | `/what-texas-law-says-about-bitcoin`, `/texas-bitcoin-law-timeline`, `/texas-strategic-bitcoin-reserve`, `/who-holds-the-texas-bitcoin-reserve`, `/texas-gold-vs-bitcoin`, `/texas-bitcoin-bills-that-died`, `/texas-bitcoin-bills-2027`, `/bitcoin-estate-planning-texas` |
| **Enforcement** | `/texas-bitcoin-case-tracker` (+ per-case and per-district pages), `/texas-crypto-enforcement-report` |
| **The grid** | `/bitcoin-mining-ercot`, `/bitcoin-mining-map-texas`, `/texas-bitcoin-miners-ai-pivot`, `/elon-musk-bitcoin-energy` |
| **People** | `/greg-abbott-bitcoin`, `/dan-patrick-bitcoin`, `/ted-cruz-bitcoin`, `/kelly-hancock-bitcoin`, `/charles-schwertner-bitcoin`, `/don-huffines-bitcoin`, `/jimmy-song-bitcoin` |
| **Builders & culture** | `/satoshi-nakamoto-institute`, `/doctor-bitcoin`, `/doctor-bitcoin-interviews`, `/events`, `/invest-in-texas-bitcoin`, `/texas-bitcoin-resources` |
| **Trust layer** | `/about` (editorial standards), `/disclaimer` |

Header nav is deliberately minimal (History, Events). The mining and law
verticals are reachable from body copy, not the nav – see `SEAM.md`.

### Figures

Sixteen pages carry original SVG figures – around 60 in total – drawn from the
same data files that drive the prose (`src/lib/*.ts`). They are theme-aware,
animate only where `prefers-reduced-motion` allows, and are built as chapter
illustrations rather than decoration.

### Case tracker

`/texas-bitcoin-case-tracker` is a data-driven index of federal § 1960 and
cryptocurrency prosecutions in Texas's four districts, with per-case and
per-district pages. Data lives in `src/data/texas-cases*.json` and is produced
by a separate scraper/enricher pipeline (`project1960`) on a change-gated daily
schedule. Editorial exclusions are applied at the site layer in
`src/lib/case-tracker.ts`.

### The Seam

A hidden, unlisted reader journey threaded through five pages and ending at
`/the-seam`. It is intentionally absent from the sitemap, nav, and `llms.txt`.
Internal notes in `SEAM.md`; do not explain it in page copy.

## Stack

Next.js 15.5 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript ·
lucide-react · Vercel Analytics + Speed Insights.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Adding a page

1. Read `CONTENT-TEMPLATE.md` for the page anatomy (direct answer, key facts,
   question-shaped H2s, counterweight, FAQ, schema).
2. Put the sourced data in `src/lib/<topic>.ts`; the page and any figures read
   from it.
3. Add the route under `src/app/<slug>/page.tsx` with metadata and JSON-LD.
4. Register it in `src/app/sitemap.ts` (unless it's meant to stay unlisted).

## Structure

```
src/
  app/
    layout.tsx                 # fonts, metadata, schema.org, analytics
    page.tsx                   # homepage – layered thesis + cornerstone feature
    <slug>/page.tsx            # one folder per article / reference page
    texas-bitcoin-case-tracker # index, [slug], district/[district]
    sitemap.ts / robots.ts     # SEO foundation
  components/                  # header, footer, case-tracker, law-timeline,
                               # mining-map, seam-mark, lone-star, youtube-embed
  data/                        # case-tracker JSON (generated upstream)
  lib/                         # site config + one sourced data module per topic
CONTENT-TEMPLATE.md            # AEO/GEO page template
SEAM.md                        # the hidden trail, internal only
```

## Watchlist

- SB 21 reserve: custodian award, then the first statutory report (31 Dec).
- November 3 general election – candidates tracked on the people pages.
- 2027 session bills – `/texas-bitcoin-bills-2027`.
