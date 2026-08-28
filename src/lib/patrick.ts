// Dan Patrick and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the site. The record is drawn from
// the Lieutenant Governor's own office (ltgov.texas.gov), the Legislature's
// bill histories, and reputable reporting. Patrick's arc is the most
// two-sided of the people pages - the presiding officer of the Senate that
// passed SB 1751 (the miner demand-response cap) and the author of the "Wild
// Wild West" grid warning is also the man who made the Bitcoin Reserve a
// Top 40 priority. The page's thesis: Patrick separates the asset from the
// load - bullish on the coin, tough on the megawatts - and the dates prove
// it is one coherent position, not a flip.
//
// Verified August 2026. Re-verify when the 90th Legislature's priorities
// land (January 2027) - grid-cost legislation touching miners is likely.

export const PATRICK_LAST_VERIFIED = "August 28, 2026";

export interface PatrickSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Lieutenant Governor's office and the
// Legislature's bill histories, then Texas press, then trade press.
export const patrickSources: PatrickSource[] = [
  { id: 1, label: "Lt. Gov. Dan Patrick - Statement on the Bipartisan Passage of Senate Bill 21, Establishing the Texas Bitcoin Reserve (March 6, 2025): \"digital gold\"", url: "https://www.ltgov.texas.gov/2025/03/06/lt-gov-dan-patrick-statement-on-the-bipartisan-passage-of-senate-bill-21-establishing-the-texas-bitcoin-reserve/" },
  { id: 2, label: "Lt. Gov. Dan Patrick - Top 40 Priority Bills for the 2025 Legislative Session (SB 21, the Texas Bitcoin Reserve, among them)", url: "https://www.ltgov.texas.gov/2025/03/13/lt-gov-dan-patrick-announces-second-round-of-top-40-priority-bills-for-the-2025-legislative-session/" },
  { id: 3, label: "Texas Legislature Online - SB 1751 (88R) bill history: passed the Senate April 2023, died in House committee", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 4, label: "Cointelegraph - Bill limiting incentives for crypto miners passes Texas Senate (April 2023): the 10% demand-response cap and abatement rollback", url: "https://cointelegraph.com/news/bill-limiting-incentives-for-crypto-miners-passes-texas-senate-moves-to-house" },
  { id: 5, label: "CoinDesk - Texas Bill That Would Limit Miners' Participation in Cost-Saving Grid Programs Stopped in House Committee (May 30, 2023)", url: "https://www.coindesk.com/policy/2023/05/30/texas-bill-that-would-limit-miners-participation-in-cost-saving-grid-programs-stopped-in-house-committee" },
  { id: 6, label: "Texas Tribune - Texas leaders worry that Bitcoin mines threaten to crash the state power grid (July 10, 2024): Patrick's \"Wild Wild West\" post and the ~2,600 MW mining load", url: "https://www.texastribune.org/2024/07/10/texas-bitcoin-mine-noise-power-grid-cryptocurrency/" },
  { id: 7, label: "Houston Chronicle (Tomlinson) - Dan Patrick targets Texas electric grid's bitcoin mines (2024)", url: "https://www.houstonchronicle.com/business/columnists/tomlinson/article/texas-grid-bitcoin-patrick-blackouts-19510928.php" },
  { id: 8, label: "FOX 4 - Lt. Gov. Dan Patrick criticizes crypto-miners, AI data centers for potential strain on Texas power grid (June 2024)", url: "https://www.fox4news.com/news/lt-gov-dan-patrick-criticizes-crypto-miners-ai-data-centers-potential-strain-texas-power-grid" },
  { id: 9, label: "Coinspeaker - Texas Plans Bitcoin Reserve Among Top Legislative Priorities for 2025 (announced January 30, 2025)", url: "https://www.coinspeaker.com/texas-plans-bitcoin-reserve-among-top-legislative-priorities-for-2025/" },
  { id: 10, label: "Texas Legislature Online - SB 21 (89R) bill history: Senate passage March 6, 2025; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 11, label: "The Digital Chamber, Texas Blockchain Council, Satoshi Action Fund - joint letter urging Lt. Gov. Patrick to oppose SB 1751 (2023)", url: "https://digitalchamber.org/chamber-of-digital-commerce-texas-blockchain-council-and-satoshi-action-fund-oppose-anti-bitcoin-mining-bill-texas-sb-1751/" },
  { id: 12, label: "Texas Policy Research - Texas House Approves SB 21 (the House vote and the $10M appropriation context)", url: "https://www.texaspolicyresearch.com/texas-house-approves-sb-21-paving-way-for-state-run-bitcoin-reserve/" },
];

export type PatrickTimelineKind = "brake" | "warning" | "priority" | "delivery";

// The arc: the 2023 brake on the mines → the 2024 grid warning → the 2025
// reserve priority → delivery. One position throughout: pro-asset, tough
// on the load.
export interface PatrickEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: PatrickTimelineKind;
  sourceIds: number[];
}

export const patrickTimeline: PatrickEvent[] = [
  {
    date: "2023-04-12",
    dateLabel: "April 12, 2023",
    title: "The brake: SB 1751 passes Patrick's Senate 30–1",
    detail:
      "The Senate Patrick presides over passes Senate Bill 1751, which would cap Bitcoin miners' share of ERCOT demand-response programs at 10% and roll back tax abatements - over a joint industry letter urging Patrick to oppose it. The bill dies in a House committee that May, but the signal from the upper chamber is unambiguous: the mines' grid economics are under scrutiny.",
    kind: "brake",
    sourceIds: [3, 4, 5, 11],
  },
  {
    date: "2024-06-12",
    dateLabel: "June 2024",
    title: "“It can't be the Wild Wild West”",
    detail:
      "After ERCOT testimony on exploding load growth, Patrick posts that Texas wants data centers, \"but it can't be the Wild Wild West of data centers and crypto miners crashing our grid and turning the lights off.\" Mining load on ERCOT is running near 2,600 megawatts - roughly Austin's draw - with as much again approved to connect.",
    kind: "warning",
    sourceIds: [6, 7, 8],
  },
  {
    date: "2025-01-30",
    dateLabel: "January 30, 2025",
    title: "The pivot to the asset: reserve named a priority",
    detail:
      "Patrick announces the Texas Bitcoin Reserve among his legislative priorities for the 89th session - the same lieutenant governor who braked the miners now putting the state's ownership of the coin itself at the top of the Senate's agenda. SB 21 lands on his Top 40 priority-bill list.",
    kind: "priority",
    sourceIds: [9, 2],
  },
  {
    date: "2025-03-06",
    dateLabel: "March 6, 2025",
    title: "“Digital gold”: SB 21 passes the Senate, bipartisan",
    detail:
      "The Senate passes SB 21 with votes from both parties. Patrick's statement makes the thesis explicit: \"Some have called Bitcoin 'digital gold,' and I believe its limited supply and decentralized nature make it a critical asset\" - framed against President Trump's stated intent to make the United States \"the cryptocurrency capital.\"",
    kind: "priority",
    sourceIds: [1, 10],
  },
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "Delivery: the priority becomes law",
    detail:
      "Governor Abbott signs SB 21, effective immediately. The Texas Strategic Bitcoin Reserve - the bill Patrick elevated, authored by Senator Charles Schwertner and carried through Patrick's chamber - becomes the nation's first standalone, publicly funded state Bitcoin reserve.",
    kind: "delivery",
    sourceIds: [10, 12],
  },
];
