// Charles Schwertner and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas Senate (senate.texas.gov) for the bio and the
// floor and committee reporting, Texas Legislature Online for the bill
// history and enrolled text, the Lieutenant Governor's office for the
// grid package, and Texas and trade press for the debate and the
// aftermath. Schwertner is the author of the people cluster: Abbott signed
// the reserve, Patrick prioritized it, Hancock bought it, Huffines holds
// it - Schwertner wrote it, twice (SB 778, then SB 21). The honest
// counterweight: the fiscal right opposed it, the reserve was under water
// within four months of its first purchase, and the same senator wrote the
// grid package miners read as a leash.
//
// Verified September 1, 2026. Re-verify after the November 3, 2026
// general (SD-5), when the 90th Legislature files reserve bills (from
// November 9, 2026), and when the first SB 21 biennial report posts.

export const SCHWERTNER_LAST_VERIFIED = "September 1, 2026";

export interface SchwertnerSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate and the Legislature's own record,
// then the Lieutenant Governor's office, then Texas press, then trade press.
export const schwertnerSources: SchwertnerSource[] = [
  { id: 1, label: "Texas Senate - Senator Charles Schwertner, M.D., District 5: Georgetown orthopedic surgeon; Texas House 2011–2013, Senate 2013–present; Chair, Business and Commerce", url: "https://senate.texas.gov/member.php?d=5" },
  { id: 2, label: "Texas Legislature Online - SB 21 (89R) bill history: author Schwertner; coauthors Hinojosa, Parker, West; House sponsors Capriglione, Oliverson, Longoria, Vasut, Cunningham; filed Feb 12, 2025; Senate committee 10–0; House committee 8–4; signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 3, label: "Texas Legislature Online - SB 21 (89R) enrolled text: § 403.703 (comptroller custody), § 403.707 (advisory committee), § 403.708 (biennial report), and the $500B 24-month market-cap eligibility floor", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
  { id: 4, label: "Texas Senate News - Business and Commerce hears SB 21 (February 18, 2025): \"We can buy land, we can buy gold\"; Comptroller Hegar testifies; $21 million seed proposed", url: "https://www.senate.texas.gov/news.php?id=20250218a" },
  { id: 5, label: "Texas Senate News - Senate passes SB 21 (March 6, 2025): \"Texas cannot expect to put its money in a one-percent savings account and keep up with inflation\"", url: "https://senate.texas.gov/news.php?id=20250306a" },
  { id: 6, label: "Cointelegraph - Texas Senate passes Bitcoin strategic reserve bill, 25–5 (March 6, 2025)", url: "https://cointelegraph.com/news/texas-senate-passes-bitcoin-strategic-reserve-bill" },
  { id: 7, label: "Cointelegraph - Texas kicks off 89th legislative session with new strategic Bitcoin reserve bill: Schwertner's SB 778 and his \"first state in the nation\" post (January 16, 2025)", url: "https://cointelegraph.com/news/texas-senator-proposes-law-establish-texas-strategic-bitcoin-reserve" },
  { id: 8, label: "Austin American-Statesman - What would a strategic bitcoin reserve look like in Texas? Two lawmakers have ideas: the Schwertner and Capriglione designs (January 28, 2025)", url: "https://www.statesman.com/story/business/technology/2025/01/28/texas-legislature-crypto-bitcoin-reserve-bills-giovanni-capriglione-charles-schwertner-donald-trump/77847904007/" },
  { id: 9, label: "Texas Observer - From Bullion to Bitcoin: Crypto Reserve Is Latest Fiscal Folly in Texas (February 28, 2025): \"All fiat currency eventually goes to its natural worth\"; Hilary Allen and Sen. Nathan Johnson in opposition", url: "https://www.texasobserver.org/texas-bitcoin-strategic-reserve-senate-bill-21/" },
  { id: 10, label: "Texas Observer - Texas Set to Create State Bitcoin Reserve (May 21, 2025): House 101–42; the donation clause restored, then removed in conference", url: "https://www.texasobserver.org/texas-set-to-create-state-bitcoin-reserve/" },
  { id: 11, label: "Texans for Fiscal Responsibility - Vote Notice, March 5, 2025: OPPOSE SB 21 - \"Using taxpayer dollars to gamble on cryptocurrency is an unnecessary financial risk\"", url: "https://texastaxpayers.com/vote-notice-3-5-2025/" },
  { id: 12, label: "Texas Policy Research - Texas House Approves SB 21, Paving Way for State-Run Bitcoin Reserve: the $10 million appropriation", url: "https://www.texaspolicyresearch.com/texas-house-approves-sb-21-paving-way-for-state-run-bitcoin-reserve/" },
  { id: 13, label: "Lt. Gov. Dan Patrick - Statement on the Passage of the Texas Senate's Power Grid Reform Package (April 6, 2023): SB 6, SB 7, SB 2010–2013, SJR 1 by Schwertner; the 10,000 MW Texas Energy Insurance Program", url: "https://www.ltgov.texas.gov/2023/04/06/lt-gov-dan-patrick-statement-on-the-passage-of-the-texas-senates-power-grid-reform-package/" },
  { id: 14, label: "Cointelegraph - Bill limiting incentives for crypto miners passes Texas Senate 30–1 (April 12, 2023): SB 1751 out of the Business and Commerce Committee", url: "https://cointelegraph.com/news/bill-limiting-incentives-for-crypto-miners-passes-texas-senate-moves-to-house" },
  { id: 15, label: "Texas Legislature Online - SB 6 (89R) bill history: authors King and Schwertner; large-load interconnection and curtailment; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 16, label: "Baker Botts - Texas Senate Bill 6: Understanding the Impacts to Large Loads and Co-located Generation (July 2025)", url: "https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-senate-bill-6-understanding-the-impacts-to-large-loads-and-co-located-generation" },
  { id: 17, label: "Cointelegraph - Texas lawmaker behind state's crypto reserve bill: Ether may be next (October 10, 2025): \"We took the full punch\"", url: "https://cointelegraph.com/news/texas-senator-crypto-reserve-bill-ether-next" },
  { id: 18, label: "Dallas Morning News - Texas' $10M bitcoin investment slips into the red amid crypto price dive (March 2, 2026): ~$5M on Nov 20, 2025 near $91,000; ~$5M on Dec 15 near $87,000; valued ~$7.8M", url: "https://www.dallasnews.com/business/2026/03/02/texas-10m-bitcoin-investment-slips-into-the-red-amid-crypto-price-dive/" },
  { id: 19, label: "Wikipedia - Charles Schwertner: born May 29, 1970; UT Austin pharmacy, UTMB medicine; SB 3 (2021) electricity-market overhaul; president pro tempore May 2023–January 2025", url: "https://en.wikipedia.org/wiki/Charles_Schwertner" },
  { id: 20, label: "Ballotpedia - Texas State Senate District 5: Schwertner on the November 3, 2026 general-election ballot", url: "https://ballotpedia.org/Texas_State_Senate_District_5" },
  { id: 21, label: "Lt. Gov. Dan Patrick - Statement on the Bipartisan Passage of Senate Bill 21 (March 6, 2025): \"digital gold\"", url: "https://www.ltgov.texas.gov/2025/03/06/lt-gov-dan-patrick-statement-on-the-bipartisan-passage-of-senate-bill-21-establishing-the-texas-bitcoin-reserve/" },
  { id: 22, label: "The Center Square - Proposed bill would create Texas Strategic Bitcoin Reserve: committee opposition to the donation clause (February 2025)", url: "https://www.thecentersquare.com/texas/article_54654c7a-f075-11ef-8116-97ce539fa96d.html" },
  { id: 23, label: "Texas Legislature Online - SB 778 (89R) bill history: author Schwertner; filed January 14, 2025; referred to Finance February 7, 2025, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB778" },
];

export type SchwertnerTimelineKind = "path" | "grid" | "reserve" | "watch";

// The arc: the surgeon-legislator → the grid hawk → the reserve's author
// → the open items.
export interface SchwertnerEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: SchwertnerTimelineKind;
  sourceIds: number[];
}

export const schwertnerTimeline: SchwertnerEvent[] = [
  {
    date: "2013-01-08",
    dateLabel: "January 2013",
    title: "The surgeon takes Senate District 5",
    detail:
      "Charles Schwertner - a Georgetown orthopedic surgeon with a UT Austin pharmacy degree and a UTMB medical degree - moves from one term in the Texas House (2011–2013) to the Senate seat for eleven counties from Williamson to Brazos. He goes on to chair Business and Commerce, the committee that owns the grid and, later, the reserve.",
    kind: "path",
    sourceIds: [1, 19],
  },
  {
    date: "2021-06-08",
    dateLabel: "June 2021",
    title: "SB 3: the post-Uri grid overhaul",
    detail:
      "Four months after Winter Storm Uri, Schwertner carries Senate Bill 3, the sweeping rewrite of the state's electricity market - weatherization mandates, an emergency alert system, ERCOT governance. It establishes him as the Senate's grid author before he is its Bitcoin author.",
    kind: "grid",
    sourceIds: [19],
  },
  {
    date: "2023-04-06",
    dateLabel: "April 2023",
    title: "The grid package - and SB 1751 through his committee",
    detail:
      "Schwertner authors the Senate's 2023 grid package: SB 6, a 10,000-megawatt natural-gas \"Texas Energy Insurance Program\" with zero-interest loans for dispatchable plants, plus SB 7 and four market-power bills. Six days later SB 1751 - Senator Kolkhorst's 10% cap on miners in demand response - clears the Senate 30–1 out of the Business and Commerce Committee he chairs.",
    kind: "grid",
    sourceIds: [13, 14],
  },
  {
    date: "2025-01-14",
    dateLabel: "January 14, 2025",
    title: "SB 778: \"the first state in the nation\"",
    detail:
      "Schwertner files the opening draft of the reserve: donations from the public, appropriations capped at 1% of general revenue, cold storage, regular audits. \"It's time for Texas to lead the way in establishing a Strategic Bitcoin Reserve,\" he posts the next day - a design the Statesman sets against Representative Capriglione's competing House version two weeks later.",
    kind: "reserve",
    sourceIds: [23, 7, 8],
  },
  {
    date: "2025-02-12",
    dateLabel: "February 12, 2025",
    title: "SB 21: the priority bill",
    detail:
      "The design is refiled under a low number - the Lieutenant Governor's signal - as Senate Bill 21, with Senators Hinojosa, Parker, and West as coauthors. SB 778 is left to die in Finance, superseded by its own successor.",
    kind: "reserve",
    sourceIds: [2, 21],
  },
  {
    date: "2025-02-18",
    dateLabel: "February 18, 2025",
    title: "\"We can buy land, we can buy gold\"",
    detail:
      "Business and Commerce hears SB 21. \"I think the state of Texas should have the option of evaluating the best performing asset over the last 10 years,\" Schwertner tells the committee, calling the bill \"a specific signal to our federal government.\" Comptroller Hegar testifies in support; Schwertner proposes a $21 million seed. The committee votes it out 10–0 after a fight over the donation clause that Senator Nathan Johnson warns invites market manipulation.",
    kind: "reserve",
    sourceIds: [4, 2, 9, 22],
  },
  {
    date: "2025-03-06",
    dateLabel: "March 6, 2025",
    title: "The Senate passes it, 25–5",
    detail:
      "\"Texas cannot expect to put its money in a one-percent savings account and keep up with inflation,\" Schwertner tells the floor. \"I want Texas to lead in this.\" The vote is bipartisan, 25–5, a day after Texans for Fiscal Responsibility urges a no. Patrick calls it \"digital gold\" the same afternoon.",
    kind: "reserve",
    sourceIds: [5, 6, 11, 21],
  },
  {
    date: "2025-05-21",
    dateLabel: "May 21, 2025",
    title: "The House, 101–42 - and the conference",
    detail:
      "Capriglione carries SB 21 through the House 101–42, with 21 Republicans and 21 Democrats opposed. The House restores the donation clause the Senate had stripped; the conference committee removes it again, and the $21 million rider is trimmed to $10 million. \"Texas is now on the verge of establishing the Texas Strategic Bitcoin Reserve!\" Schwertner posts as both chambers adopt the report.",
    kind: "reserve",
    sourceIds: [10, 12, 2],
  },
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "Signed - with the large-load law beside it",
    detail:
      "Governor Abbott signs SB 21, effective immediately: the reserve outside the treasury, the $500 billion floor that admits only Bitcoin, custody with the comptroller, a biennial report. The same day he signs SB 6, the large-load interconnection and curtailment law Schwertner joint-authored with Senator King. The author of the reserve co-wrote the leash on the load.",
    kind: "reserve",
    sourceIds: [2, 3, 15, 16],
  },
  {
    date: "2025-10-10",
    dateLabel: "October 10, 2025",
    title: "\"We took the full punch\"",
    detail:
      "\"We're the only state that actually put sovereign money, taxpayer money, toward the reserve,\" Schwertner tells Cointelegraph, and floats the statute's built-in expansion: if ether holds a $500 billion market cap for 24 months, \"I think it's reasonable and prudent to give direction that Ethereum could be added.\" He wants to see \"the speed at which they establish the reserve and how it acts from a returns standpoint.\"",
    kind: "watch",
    sourceIds: [17, 3],
  },
  {
    date: "2025-11-20",
    dateLabel: "November 2025 → March 2026",
    title: "The purchases - and the red ink",
    detail:
      "The Comptroller deploys the author's appropriation: about $5 million on November 20, 2025 with Bitcoin near $91,000, and about $5 million more on December 15 near $87,000, both through the iShares Bitcoin Trust. By March 2, 2026 the $10 million position is worth roughly $7.8 million. The \"best performing asset over the last 10 years\" spent its first four months in the state's hands under water.",
    kind: "watch",
    sourceIds: [18],
  },
  {
    date: "2026-11-03",
    dateLabel: "November 3, 2026",
    title: "The ballot",
    detail:
      "Schwertner stands for another term in Senate District 5. Whatever the result, the 90th Legislature convenes January 12, 2027 with the reserve's author either back in his committee chair or gone from it - and the expansions drafted in 2025's dead bills waiting for a sponsor.",
    kind: "watch",
    sourceIds: [20],
  },
];
