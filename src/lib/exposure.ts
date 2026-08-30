// The exposure map - the sourced dataset.
//
// PHILOSOPHY: this page answers a money question without giving money
// advice. It maps WHAT EXISTS - the public equities with Texas Bitcoin
// operations, the asset itself, the state fund (closed), the bond that
// doesn't exist, the venture funds (gated) - and states plainly who can
// access each route. No recommendations, no allocations, no price talk,
// no exchange or broker links (same rule as /texas-bitcoin-resources).
// Every access claim is sourced; the reader takes the map to a licensed
// advisor, not to us.
//
// Verified August 2026. Re-verify: TXSE corporate listings (targeted
// October 2026), the reserve's custody contract, and the public miners'
// Texas footprints (the AI rotation moves fast).

export const EXPOSURE_LAST_VERIFIED = "August 30, 2026";

export interface ExposureSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: statute and state documents, then company
// filings and official pages, then established press.
export const exposureSources: ExposureSource[] = [
  { id: 1, label: "Texas Legislature - SB 21 enrolled text (89R): Strategic Bitcoin Reserve composition, Gov't Code § 403.703 - appropriations, dedicated revenue, purchases/forks/airdrops, and earnings only", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
  { id: 2, label: "The Bond Buyer - Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 3, label: "Crypto Briefing - Texas plans to shift $10M Bitcoin holdings from IBIT to direct custody; custody contract targeted for late August 2026", url: "https://cryptobriefing.com/texas-expands-bitcoin-strategic-reserve/" },
  { id: 4, label: "iShares - iShares Bitcoin Trust ETF (IBIT), official fund page", url: "https://www.ishares.com/us/products/333011/ishares-bitcoin-trust-etf" },
  { id: 5, label: "Riot Platforms - official site: Rockdale and Corsicana, Texas facilities (Nasdaq: RIOT)", url: "https://www.riotplatforms.com/" },
  { id: 6, label: "Core Scientific - official site: Austin, Texas headquarters; Denton and Pecos, Texas data centers (Nasdaq: CORZ)", url: "https://corescientific.com/" },
  { id: 7, label: "Core Scientific IR - Termination of merger agreement with CoreWeave after stockholder vote (October 30, 2025); CORZ continues trading on Nasdaq", url: "https://investors.corescientific.com/news-events/press-releases/detail/124/core-scientific-announces-termination-of-merger-agreement-with-coreweave" },
  { id: 8, label: "CNBC - Core Scientific shareholders reject $9 billion CoreWeave offer, deal terminated (October 30, 2025)", url: "https://www.cnbc.com/2025/10/30/core-scientific-shareholders-reject-9-billion-coreweave-offer-deal-terminated.html" },
  { id: 9, label: "Cipher Mining - official site: Odessa and Barber Lake, Texas sites (Nasdaq: CIFR)", url: "https://www.ciphermining.com/" },
  { id: 10, label: "MARA Holdings - official site: Texas operations including the announced Matagorda County campus (Nasdaq: MARA)", url: "https://www.mara.com/" },
  { id: 11, label: "Hut 8 - official site: Texas sites including the announced Beacon Point campus (Nasdaq: HUT)", url: "https://hut8.com/" },
  { id: 12, label: "Bitdeer - official site: Rockdale, Texas facility (Nasdaq: BTDR)", url: "https://www.bitdeer.com/" },
  { id: 13, label: "Galaxy - official site: Helios campus, Dickens County, Texas (Nasdaq: GLXY)", url: "https://www.galaxy.com/" },
  { id: 14, label: "Texas Tribune - Texas Stock Exchange to launch trading (July 2026, Dallas)", url: "https://www.texastribune.org/2026/07/03/texas-stock-exchange-launch-trading/" },
  { id: 15, label: "Venable LLP - Texas Stock Exchange opens for trading: staged rollout, ETP listings anticipated September 2026, corporate listings October 2026", url: "https://www.venable.com/insights/publications/2026/07/texas-stock-exchange-opens-for-trading" },
  { id: 16, label: "Fortune - Crypto venture firms enjoy banner years; Austin's Multicoin posts 56% annual growth (April 2025)", url: "https://fortune.com/crypto/2025/04/07/paradigm-multicoin-electric-haun-pantera-polychain-aums-crypto-vc/" },
  { id: 17, label: "Investor.gov (SEC) - Accredited investor definition: the gate on most private funds", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-3" },
  { id: 18, label: "Texas Policy Research - SB 21 tracker: private-donation provision stripped in conference committee", url: "https://www.texaspolicyresearch.com/bills/89th-legislature-sb-21/" },
];

export type ExposureAccess = "public" | "accredited" | "state-only" | "none";

// The map itself: each route, who can walk it, and the honest caveat.
export interface ExposureRoute {
  route: string;
  what: string;
  access: ExposureAccess;
  accessLabel: string;
  caveat: string;
  sourceIds: number[];
}

export const exposureRoutes: ExposureRoute[] = [
  {
    route: "Bitcoin itself",
    what: "Self-custodied BTC, or a spot Bitcoin ETF such as IBIT - the same instrument the Texas comptroller bought as the reserve's placeholder.",
    access: "public",
    accessLabel: "Open to anyone",
    caveat: "Pure Bitcoin price exposure; nothing Texas-specific about it beyond the company it keeps.",
    sourceIds: [2, 4],
  },
  {
    route: "Public equities with Texas operations",
    what: "Exchange-listed miners and infrastructure firms running Texas sites: Riot (Rockdale, Corsicana), Core Scientific (Austin HQ; Denton, Pecos), Cipher (Odessa, Barber Lake), Galaxy (Helios), Bitdeer (Rockdale), MARA and Hut 8 (announced campuses).",
    access: "public",
    accessLabel: "Open to anyone",
    caveat: "Company risk, not just Bitcoin risk - and several are rotating megawatts toward AI compute, so the Bitcoin share of the business is a moving number.",
    sourceIds: [5, 6, 9, 10, 11, 12, 13],
  },
  {
    route: "The Texas Strategic Bitcoin Reserve",
    what: "The state's own fund - $10 million appropriated, held outside the treasury, managed by the comptroller.",
    access: "state-only",
    accessLabel: "Closed to private money",
    caveat: "SB 21's enrolled text funds it by appropriation, dedicated revenue, purchases, forks/airdrops, and earnings only; the donation provision was stripped in conference. There is no citizen share.",
    sourceIds: [1, 3, 18],
  },
  {
    route: "A Texas Bitcoin bond",
    what: "Does not exist. Texas municipal bonds fund the state and its localities in dollars; none are Bitcoin-linked.",
    access: "none",
    accessLabel: "Not a thing (yet)",
    caveat: "If one ever appears, it will show up in the money law first - watch the legislature, not the marketing.",
    sourceIds: [1],
  },
  {
    route: "Texas-based venture funds",
    what: "Austin's crypto venture desks - Multicoin Capital and neighbors - take limited partners, not retail deposits.",
    access: "accredited",
    accessLabel: "Accredited investors, by invitation",
    caveat: "High minimums, long lockups, and the SEC's accredited-investor gate stand between retail savers and these funds. No public ticker exists for any of them.",
    sourceIds: [16, 17],
  },
  {
    route: "The Texas Stock Exchange (TXSE)",
    what: "Dallas's new national exchange - live trading since July 2026, ETP listings targeted September, corporate listings October.",
    access: "public",
    accessLabel: "Market plumbing, not an asset",
    caveat: "TXSE is where Texas exposure may eventually list, not exposure itself - an infrastructure story to watch, not a position to take.",
    sourceIds: [14, 15],
  },
];
