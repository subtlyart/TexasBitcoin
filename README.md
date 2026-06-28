# TexasBitcoin.com

The authority on Bitcoin in Texas — where Bitcoin meets the physical world
(energy, the grid, the largest mines in North America) and the financial future
(the money law, a state reserve, and programmable money built on the hardest
base layer).

## Positioning

A focused **research and reference** publication. Bitcoin-centric: stablecoins
and smart contracts are covered specifically as layers that **settle to
Bitcoin**, not as a gateway to generic multi-chain coverage. Not financial,
investment, legal, or tax advice. We do not custody, transmit, or facilitate
transactions in any digital asset.

The editorial spine is a **layered stack anchored in Texas**:

- **Base layer — principles:** trustless settlement, self-custody, proof-of-work.
- **The grid:** ERCOT, mining economics, demand response.
- **The money law:** Memo 1037 → SB 21 reserve → HB 1056 gold-backed currency.
- **Programmability — the frontier:** Lightning, Taproot Assets, Bitcoin-settling layers.

## Launch strategy

Narrow and deep. Ship one sourced **cornerstone** (`/history-of-bitcoin-in-texas`)
plus a credible **shell + trust layer** (About / Editorial Standards,
Disclosures, newsletter capture), rather than a wide, thin site. Every datable
legal/legislative claim is cited.

## Stack

Next.js 15.5 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript ·
Vercel Analytics + Speed Insights. Mirrors the american-peptide / peptidehormone
stack.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pre-launch checklist

- [ ] Newsletter is **parked** (`src/components/newsletter.tsx`, not rendered). When planned, re-add `<Newsletter />` and wire to an email provider.
- [ ] Add a contact channel on `/about`.
- [ ] Add OG/Twitter share image and favicon.
- [ ] Verify all legislative facts once more against primary sources before publishing.
- [ ] Connect Google Search Console + analytics; confirm sitemap/robots.
- [ ] Legal review of `/disclaimer` for the jurisdiction(s) of operation.

## Structure

```
src/
  app/
    layout.tsx                       # fonts, metadata, schema.org, analytics
    page.tsx                         # homepage (layered thesis + cornerstone feature)
    history-of-bitcoin-in-texas/     # CORNERSTONE — sourced
    about/                           # trust layer — editorial standards
    disclaimer/                      # trust layer — disclosures
    sitemap.ts / robots.ts           # SEO foundation
  components/                        # header, footer, newsletter, lone-star
  lib/site.ts                        # site config + positioning
```
