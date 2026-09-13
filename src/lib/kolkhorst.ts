// Lois Kolkhorst and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas Senate for the bio, Texas Legislature Online for
// the bill histories, the engrossed SB 1751 text, the Senate Research
// Center's bill analysis, and the committee witness list; then Texas and
// trade press for the hearing quotes, the campaign against the bill, and
// its death in the House. Kolkhorst is the brake of the people cluster:
// every other page is someone who moved the asset or the industry forward,
// and hers is the one bill the industry organized to kill. The honest
// counterweight runs the other way on this page - the bill died, the
// industry's numbers held, and yet the registration half of her design
// became law twice under other names, and the August 2023 Riot credits
// made her "business model" line the most-quoted sentence of the fight.
// She was also the Senate sponsor of the 2015 Bullion Depository: bullish
// on gold, wary of the load.
//
// Verified September 13, 2026. Re-verify after the November 3, 2026
// general (SD-18) and when the 90th Legislature files large-load and
// mining bills (from November 9, 2026).

export const KOLKHORST_LAST_VERIFIED = "September 13, 2026";

export interface KolkhorstSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate and the Legislature's own record,
// then the committee record, then Texas press, then trade press.
export const kolkhorstSources: KolkhorstSource[] = [
  { id: 1, label: "Texas Senate - Senator Lois W. Kolkhorst, District 18: Brenham; Texas House 2001–2014, Senate 2014–present; Chair, Health and Human Services; Business and Commerce; Finance", url: "https://senate.texas.gov/member.php?d=18" },
  { id: 2, label: "Wikipedia - Lois Kolkhorst: born November 4, 1964, Brenham; TCU 1988; Washington County Chamber of Commerce president; House District 13 (2001–2014); Senate District 18 special election December 6, 2014", url: "https://en.wikipedia.org/wiki/Lois_Kolkhorst" },
  { id: 3, label: "Texas Tribune - Elected Officials Directory: Lois Kolkhorst, SD-18; business owner; Administration, Business & Commerce, Finance, Health & Human Services (Chair), Water, Agriculture and Rural Affairs; seat up in 2026", url: "https://directory.texastribune.org/lois-kolkhorst/" },
  { id: 4, label: "Texas Legislature Online - HB 483 (84R) bill history: author Capriglione, Senate sponsor Kolkhorst; the Texas Bullion Depository; Senate committee 7–0; signed June 19, 2015", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=84R&Bill=HB483" },
  { id: 5, label: "Houston Chronicle - Texas could create its own 'Fort Knox' to store gold (2015): Kolkhorst on UTIMCO's 5,610 bars in New York; \"New York will hate this ... a golden idea\"", url: "https://www.houstonchronicle.com/politics/texas/article/Texas-could-create-its-own-Fort-Knox-to-store-6287689.php" },
  { id: 6, label: "Texas Legislature Online - SB 1751 (88R) bill history: authors Kolkhorst, Campbell, Nichols; coauthor Menéndez; filed March 7, 2023; Business & Commerce 11–0 April 4; Senate passage April 12; referred to House State Affairs April 24, 2023, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 7, label: "Texas Legislature Online - SB 1751 (88R) engrossed text: registration above 10 MW within one business day; demand-response participation only if mining facilities are under 10% of program load; no Chapter 312 abatements for virtual currency mining facilities", url: "https://capitol.texas.gov/tlodocs/88R/billtext/html/SB01751E.htm" },
  { id: 8, label: "Senate Research Center - C.S.S.B. 1751 bill analysis: the 87th Interim charge, testimony that mining load could grow by 37 gigawatts, and the author's statement of intent", url: "https://capitol.texas.gov/tlodocs/88R/analysis/html/SB01751S.htm" },
  { id: 9, label: "Texas Legislature Online - SB 1751 witness list, Senate Business & Commerce, March 28, 2023: for - Sierra Club, Concerned Citizens of Navarro County, Public Citizen; against - US Bitcoin Corp, Riot Platforms; on - Texas Blockchain Council, ERCOT, Texas Electric Cooperatives", url: "https://capitol.texas.gov/tlodocs/88R/witlistbill/html/SB01751S.htm" },
  { id: 10, label: "CBS Austin - Texas Senate bill seeks to regulate Bitcoin miners and their electricity consumption (March 28, 2023): \"we're going to pay them to go off the grid at different times, which I believe is a part of their business model\"; Rochard on Rockdale jobs", url: "https://cbsaustin.com/news/local/texas-senate-bill-seeks-to-regulate-bitcoin-miners-and-their-electricity-consumption-riot-platforms-ercot-rockdale" },
  { id: 11, label: "Decrypt - New Texas Senate Bill Seeks to Slash Bitcoin Mining Incentives (March 30, 2023): Kolkhorst - the bill \"rightsizes\" and is not \"punitive\"; Cranley, Rochard, Prusak, Bratcher in opposition", url: "https://decrypt.co/124814/new-texas-senate-bill-seeks-slash-bitcoin-mining-incentives" },
  { id: 12, label: "Houston Chronicle - Texas could limit crypto miners' participation in some ERCOT incentive programs (March 2023): \"It's not a punitive bill\"", url: "https://www.houstonchronicle.com/business/energy/article/texas-cryptocurrency-mining-electricity-incentives-17896124.php" },
  { id: 13, label: "CoinDesk - Texas Bill Limiting Benefits for Crypto Miners Unanimously Passes Committee Vote (April 4, 2023)", url: "https://www.coindesk.com/policy/2023/04/04/texas-bill-limiting-benefits-for-crypto-miners-unanimously-passes-committee-vote" },
  { id: 14, label: "CBS Austin - Bitcoin leaders push back against SB 1751 restrictions with campaign ahead of Senate vote (April 2023): \"Don't Mess With Texas Innovation\"; Bratcher - \"well-intentioned ... but is just being fed bad information\"", url: "https://cbsaustin.com/news/local/bitcoin-leaders-push-back-against-sb-1751-restrictions-with-campaign-ahead-of-senate-vote" },
  { id: 15, label: "Gradually, Then Suddenly - An Open Letter to Texas State Senator Lois Kolkhorst (April 7, 2023): Parker Lewis and Will Cole - \"misinformed, discriminatory, anti-competitive, harmful to grid stability, bad for consumers and a strategic setback for Texas\"", url: "https://graduallythensuddenly.xyz/open-letter-to-texas-senator/" },
  { id: 16, label: "Cointelegraph - Bill limiting incentives for crypto miners passes Texas Senate 30–1, moves to House (April 12, 2023)", url: "https://cointelegraph.com/news/bill-limiting-incentives-for-crypto-miners-passes-texas-senate-moves-to-house" },
  { id: 17, label: "CoinDesk - Texas Bill That Would Limit Miners' Participation in Cost-Saving Grid Programs Stopped in House Committee (May 30, 2023)", url: "https://www.coindesk.com/policy/2023/05/30/texas-bill-that-would-limit-miners-participation-in-cost-saving-grid-programs-stopped-in-house-committee" },
  { id: 18, label: "Texas Legislature Online - SB 1929 (88R) bill history: author Johnson; registration of virtual currency mining facilities above 75 MW; passed the Senate the same day as SB 1751; signed June 9, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1929" },
  { id: 19, label: "CNBC - Texas paid bitcoin miner Riot $31.7 million to shut down during heat wave in August (September 6, 2023)", url: "https://www.cnbc.com/2023/09/06/texas-paid-bitcoin-miner-riot-31point7-million-to-shut-down-in-august.html" },
  { id: 20, label: "Texas Legislature Online - SB 6 (89R) bill history: authors King and Schwertner; large-load interconnection standards and emergency curtailment; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 21, label: "The Nation - Texas's Crypto-Mining Racket (May 5, 2025): Granbury residents lobby to resurrect SB 1751; the session moves the other way", url: "https://www.thenation.com/article/society/texas-crypto-mining-boom/" },
  { id: 22, label: "Houston Chronicle - State Sen. Kolkhorst makes Texas Monthly's 'worst legislators' list (June 2017): Best in 2007 - \"competitive zeal always found the fair way\"; Worst in 2017 for SB 6, the bathroom bill", url: "https://www.chron.com/neighborhood/katy/news/article/State-Sen-Kolkhorst-makes-worst-legislators-11247364.php" },
  { id: 23, label: "KBTX - Exclusive: Texas Sen. Lois Kolkhorst reflects on 89th legislative session (June 16, 2025): SB 17 foreign land ownership, SB 25, the A&M System; nothing on the grid or mining", url: "https://www.kbtx.com/2025/06/16/exclusive-texas-sen-lois-kolkhorst-reflects-89th-legislative-session/" },
  { id: 24, label: "Ballotpedia - Lois Kolkhorst: advanced from the March 3, 2026 Republican primary; faces Erica Gillum (D) in the November 3, 2026 general for Senate District 18", url: "https://ballotpedia.org/Lois_Kolkhorst" },
];

export type KolkhorstTimelineKind = "path" | "gold" | "brake" | "after";

// The arc: the chamber-of-commerce legislator → the gold sponsor → the
// brake → what became of it.
export interface KolkhorstEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: KolkhorstTimelineKind;
  sourceIds: number[];
}

export const kolkhorstTimeline: KolkhorstEvent[] = [
  {
    date: "2001-01-09",
    dateLabel: "January 2001",
    title: "The chamber president takes House District 13",
    detail:
      "Lois Kolkhorst - a Brenham native, a TCU golfer, and the president of the Washington County Chamber of Commerce - enters the Texas House for seven counties between Austin and Houston. Texas Monthly names her a Best Legislator in 2007: her \"competitive zeal always found the fair way.\" She serves seven terms.",
    kind: "path",
    sourceIds: [2, 22],
  },
  {
    date: "2014-12-06",
    dateLabel: "December 6, 2014",
    title: "Senate District 18, by special election",
    detail:
      "Kolkhorst wins the special election for the Senate seat that runs from the Houston suburbs through Brenham and Victoria to the coast. She lands on Business and Commerce - the committee that owns the grid - and will chair Health and Human Services.",
    kind: "path",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2015-06-19",
    dateLabel: "June 2015",
    title: "\"A golden idea\": the Bullion Depository's Senate sponsor",
    detail:
      "Kolkhorst carries Representative Capriglione's HB 483 through the Senate - the first state-run precious-metals depository in the country - pointing at UTIMCO's 5,610 gold bars paying storage fees in Manhattan. \"New York will hate this,\" she says. \"To me, that and the fact that it will save Texas money makes it a golden idea.\" Abbott signs it June 19. The senator who will write the brake on Bitcoin mining wrote hard money into Texas law first.",
    kind: "gold",
    sourceIds: [4, 5],
  },
  {
    date: "2022-06-01",
    dateLabel: "2022 interim",
    title: "The 37-gigawatt hearing",
    detail:
      "Between sessions, Business and Commerce takes up its interim charge on blockchain and the electricity market. Testimony puts potential new mining load at 37 gigawatts, with no requirement that large flexible loads register with ERCOT. The bill is drafted from that record.",
    kind: "brake",
    sourceIds: [8],
  },
  {
    date: "2023-03-07",
    dateLabel: "March 7, 2023",
    title: "SB 1751 is filed",
    detail:
      "Three parts: register any mining facility over 10 megawatts with the Public Utility Commission within one business day, with five years of demand projections; admit miners to ERCOT's paid demand-response programs only while they are under 10% of program load; and bar Chapter 312 property-tax abatements for mining facilities. Senators Campbell and Nichols join as authors, Menéndez as coauthor.",
    kind: "brake",
    sourceIds: [6, 7],
  },
  {
    date: "2023-03-28",
    dateLabel: "March 28, 2023",
    title: "\"Part of their business model\"",
    detail:
      "In her own committee, Kolkhorst lays out the case: \"We're trying to produce all this new power. We're going to have a lot of this new power taken up by virtual currency mining. And then we're going to pay them to go off the grid at different times, which I believe is a part of their business model.\" The bill \"rightsizes\" an industry that needs no subsidy, she says; \"it's not a punitive bill.\" Riot's Pierre Rochard answers that miners are Rockdale's largest employer and largest taxpayer to its schools. Sierra Club, Public Citizen, and Navarro County residents testify for; Riot and US Bitcoin Corp against; the Texas Blockchain Council and ERCOT on.",
    kind: "brake",
    sourceIds: [10, 11, 12, 9],
  },
  {
    date: "2023-04-07",
    dateLabel: "April 4–11, 2023",
    title: "11–0, the open letter, and the campaign",
    detail:
      "The committee sends it out unanimously on April 4. Three days later Parker Lewis and Will Cole publish an open letter to her calling the bill \"misinformed, discriminatory, anti-competitive, harmful to grid stability, bad for consumers and a strategic setback for Texas.\" The Texas Blockchain Council launches \"Don't Mess With Texas Innovation\"; Lee Bratcher calls her \"well-intentioned\" but \"fed bad information.\"",
    kind: "brake",
    sourceIds: [6, 13, 15, 14],
  },
  {
    date: "2023-04-12",
    dateLabel: "April 12, 2023",
    title: "The Senate, 30–1",
    detail:
      "SB 1751 passes the Texas Senate 30–1 - the same day the chamber passes Senator Johnson's SB 1929, the registration-only bill the industry could live with. Marathon's Fred Thiel tells CoinDesk the House is \"much more aligned with the positive aspects and the benefits of bitcoin mining.\" He is right.",
    kind: "brake",
    sourceIds: [16, 18],
  },
  {
    date: "2023-05-29",
    dateLabel: "April 24 → May 29, 2023",
    title: "Referred to House State Affairs. Never heard.",
    detail:
      "The House refers SB 1751 to State Affairs on April 24, 2023. No hearing is set; the session ends May 29 with the bill still in committee. Eleven days later Abbott signs SB 1929 - registration for mining facilities above 75 megawatts, by another author - and HB 591, the flared-gas exemption. One-third of her design became law the week her bill died, under someone else's name.",
    kind: "brake",
    sourceIds: [6, 17, 18],
  },
  {
    date: "2023-09-06",
    dateLabel: "September 6, 2023",
    title: "The $31.7 million August",
    detail:
      "Riot reports a record $31.7 million in power and demand-response credits for August 2023 - more than all of 2022 - for curtailing Rockdale through the heat wave. The number does what the hearing could not: it makes \"part of their business model\" the most-quoted sentence of the fight, in both directions. To the industry it is proof the grid works; to her side, proof of the subsidy.",
    kind: "after",
    sourceIds: [19],
  },
  {
    date: "2025-06-20",
    dateLabel: "89th Legislature, 2025",
    title: "Her registration, their bill: SB 6",
    detail:
      "Kolkhorst files nothing on mining in 2025; her session is SB 17 on foreign land ownership and SB 25. Granbury residents living beside a 300-megawatt mine lobby to resurrect SB 1751 and go home disappointed. The Legislature instead passes SB 6 - King and Schwertner's large-load law, interconnection standards above 75 megawatts and emergency curtailment, signed June 20, 2025. The register-and-curtail half of her 2023 design is now the state's large-load policy; the cap and the abatement ban are not.",
    kind: "after",
    sourceIds: [23, 21, 20],
  },
  {
    date: "2026-11-03",
    dateLabel: "November 3, 2026",
    title: "The ballot",
    detail:
      "Kolkhorst advanced from the March 3, 2026 Republican primary and faces Democrat Erica Gillum for Senate District 18. The 90th Legislature convenes January 12, 2027 with the large-load question reopened by AI data centers that dwarf the miners - and the one senator who tried to cap the load in 2023 back on Business and Commerce.",
    kind: "after",
    sourceIds: [24, 1],
  },
];
