// Don Huffines and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Comptroller's office (comptroller.texas.gov) for the
// appointment and the office's own output, the enrolled text of SB 21 for
// what the office controls, the Texas Tribune and Texas press for the
// succession and the race, and the 2022 trade-press record for the Bitcoin
// plan he ran for governor on. Huffines is the inheritor of the people
// cluster: Abbott signed the reserve, Patrick prioritized it, Hancock bought
// it - Huffines is the man who now holds it, and the only one of the four
// who proposed a state Bitcoin reserve before the Legislature built one.
// The honest counterweight: since taking office he has said nothing about
// it, and the custody window closed on his watch with no award.
//
// Verified September 1, 2026. Re-verify when the custodian is named, after
// the November 3, 2026 general (Huffines vs. Eckhardt), and when the first
// SB 21 biennial report posts (due by December 31, 2026).

export const HUFFINES_LAST_VERIFIED = "September 1, 2026";

export interface HuffinesSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Comptroller's office and the statute, then
// the procurement record, then Texas press for the succession and the race,
// then the 2022 trade press for the plan.
export const huffinesSources: HuffinesSource[] = [
  { id: 1, label: "Texas Comptroller - Don Huffines Sworn in as Texas Comptroller, Refuses Salary, Calls for Property Tax Relief (August 1, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260801-don-huffines-sworn-in-as-texas-comptroller-refuses-salary-calls-for-property-tax-relief-1785512488796" },
  { id: 2, label: "Texas Comptroller - Media kit: Don Huffines, Texas Comptroller of Public Accounts (2026)", url: "https://comptroller.texas.gov/about/media-center/media-kit/2026/don-huffines/" },
  { id: 3, label: "Texas Comptroller - News releases, August–September 2026: sales tax, property tax, school-district reviews, TEFA - no release on the reserve or a custodian", url: "https://comptroller.texas.gov/about/media-center/news/" },
  { id: 4, label: "Texas SmartBuy ESBD - RFP 908-26-1778WS, custody and liquidity services for the Texas Strategic Bitcoin Reserve: closed July 10, 2026; no award posted as of September 1, 2026", url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS" },
  { id: 5, label: "Texas Legislature Online - SB 21 (89R), enrolled text: § 403.703 (the comptroller has custody of the reserve), § 403.707 (the comptroller sits on the five-member advisory committee), § 403.708 (biennial report due by December 31 of each even-numbered year)", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
  { id: 6, label: "Texas Tribune - Acting Comptroller Kelly Hancock to step down as Texas CFO (July 1, 2026)", url: "https://www.texastribune.org/2026/07/01/texas-comptroller-kelly-hancock-resigns-greg-abbott-don-huffines/" },
  { id: 7, label: "The Texan - Abbott Appoints Comptroller Candidate Don Huffines to Fill Outgoing Hancock's Unexpired Term (July 2, 2026)", url: "https://thetexan.news/state/texas-state-news/abbott-appoints-comptroller-candidate-don-huffines-to-fill-outgoing-hancocks-unexpired-term/article_6ae16818-e965-4319-8f0a-2524476ade36.html" },
  { id: 8, label: "Texas Tribune - Huffines takes over Texas comptroller office months before midterms (August 1, 2026)", url: "https://www.texastribune.org/2026/08/01/don-huffines-sworn-in-as-texas-acting-comptroller-ahead-of-november-elections/" },
  { id: 9, label: "The Texan - Don Huffines Forgoes Salary, Pledges Public Audits After Swearing-in as Comptroller (August 1, 2026)", url: "https://thetexan.news/elections/2026/don-huffines-forgoes-salary-pledges-public-audits-after-swearing-in-as-comptroller/article_354d8287-687e-46dc-af7d-8796c2f3ef19.html" },
  { id: 10, label: "Slashdot, citing Bitcoin Magazine - Texas Governor Candidate Plans To Make Texas the 'Citadel For Bitcoin' (January 28, 2022); the plan lived at donhuffines.com/issues/#bitcoin-cryptocurrency, since taken down", url: "https://politics.slashdot.org/story/22/01/28/0817253/texas-governor-candidate-plans-to-make-texas-the-citadel-for-bitcoin" },
  { id: 11, label: "BTC Times - Gubernatorial Candidate Don Huffines Plans to Make Texas the Citadel for Bitcoin: the six planks, including holding a portion of state reserves in Bitcoin (January 29, 2022)", url: "https://btctimes.com/gubernatorial-candidate-don-huffines-make-texas-bitcoin-citadel/" },
  { id: 12, label: "The Cryptonomist - Texas: Don Huffines designs the \"Citadel of Bitcoin\" - the December 16, 2021 announcement (December 20, 2021)", url: "https://en.cryptonomist.ch/2021/12/20/texas-don-huffines-citadel-of-bitcoin/" },
  { id: 13, label: "Bitcoinist - Texas, The Citadel For Bitcoin: A Gubernatorial Election Race - Huffines, Abbott, and West on Bitcoin (February 1, 2022)", url: "https://bitcoinist.com/texas-the-citadel-for-bitcoin-election-race/" },
  { id: 14, label: "Wikipedia - Don Huffines: Huffines Communities (founded 1985), Texas Senate District 16 (2015–2019), the 2018 loss to Nathan Johnson, the 2022 governor primary (12%, third)", url: "https://en.wikipedia.org/wiki/Don_Huffines" },
  { id: 15, label: "KSAT / Texas Tribune - President Trump endorses Sid Miller and Don Huffines, countering Abbott's picks (February 28, 2026)", url: "https://www.ksat.com/news/texas/2026/02/28/president-trump-endorses-sid-miller-and-don-huffines-countering-abbotts-picks/" },
  { id: 16, label: "Texas Tribune - Don Huffines defeats Christi Craddick and Kelly Hancock in the GOP primary for comptroller (March 3, 2026)", url: "https://www.texastribune.org/2026/03/03/don-huffines-christi-craddick-kelly-hancock-texas-gop-primary-comptroller/" },
  { id: 17, label: "Texas Tribune - Texas Votes: the Tribune sits down with Don Huffines, Republican nominee for comptroller - DEI, vouchers, working with Abbott; no Bitcoin (April 13, 2026)", url: "https://www.texastribune.org/events/2026/04/13/texas-votes-huffines-comptroller/" },
  { id: 18, label: "Texas Comptroller - Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members and opens the custody RFP (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 19, label: "Wikipedia - 2026 Texas Comptroller of Public Accounts election: Huffines (R) vs. Sarah Eckhardt (D), November 3, 2026", url: "https://en.wikipedia.org/wiki/2026_Texas_Comptroller_of_Public_Accounts_election" },
];

export type HuffinesTimelineKind = "path" | "plan" | "office" | "watch";

// The arc: the candidate with a Bitcoin plan → the office that owns the
// reserve → the open items that will define the record.
export interface HuffinesEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: HuffinesTimelineKind;
  sourceIds: number[];
}

export const huffinesTimeline: HuffinesEvent[] = [
  {
    date: "2015-01-13",
    dateLabel: "January 13, 2015",
    title: "The Senate seat",
    detail:
      "Don Huffines - a Dallas developer who co-founded Huffines Communities with his twin brother in 1985 - takes the Texas Senate District 16 seat he won by unseating a Republican incumbent. He serves one term, losing the 2018 general to Democrat Nathan Johnson by about eight points as Dallas County turned.",
    kind: "path",
    sourceIds: [14],
  },
  {
    date: "2021-12-16",
    dateLabel: "December 16, 2021",
    title: "\"The citadel for Bitcoin\"",
    detail:
      "Running for governor against Greg Abbott, Huffines posts that his team is reviewing the state's Bitcoin policy: \"I want to make Texas the citadel for Bitcoin.\" He crowdsources proposals from Bitcoiners over the following weeks.",
    kind: "plan",
    sourceIds: [12],
  },
  {
    date: "2022-01-28",
    dateLabel: "January 28, 2022",
    title: "The Bitcoin plan - including a state reserve",
    detail:
      "The campaign publishes a six-plank Bitcoin platform: declare Bitcoin legal tender in Texas, create a Bitcoin & Cryptocurrency Policy Commission, hold a portion of state reserves in Bitcoin, pair miners with flared gas and grid reliability, shield holders and miners from federal regulation, and bar cities from regulating them. \"I have owned Bitcoin for years,\" the plan says. SB 21 is three years away.",
    kind: "plan",
    sourceIds: [10, 11, 13],
  },
  {
    date: "2022-03-01",
    dateLabel: "March 1, 2022",
    title: "Third place",
    detail:
      "Abbott wins the Republican primary for governor outright with about 66%; Huffines finishes third with roughly 12%. The Bitcoin plank goes back on the shelf - the candidate does not.",
    kind: "path",
    sourceIds: [14],
  },
  {
    date: "2026-02-27",
    dateLabel: "February 27, 2026",
    title: "The Trump endorsement",
    detail:
      "Four days before the comptroller primary, President Trump posts a \"complete and total endorsement\" of Huffines, countering Governor Abbott's roughly $2.6 million in ads for acting Comptroller Kelly Hancock - the man then running the Bitcoin reserve.",
    kind: "path",
    sourceIds: [15, 16],
  },
  {
    date: "2026-03-03",
    dateLabel: "March 3, 2026",
    title: "The primary - won outright",
    detail:
      "Huffines takes the Republican nomination for comptroller with about 58% to Hancock's roughly 23%, with Railroad Commissioner Christi Craddick third and no runoff. Democrat Sarah Eckhardt awaits in November.",
    kind: "path",
    sourceIds: [16, 19],
  },
  {
    date: "2026-07-02",
    dateLabel: "July 2, 2026",
    title: "The appointment: Abbott hands the office to the man he beat",
    detail:
      "Hancock submits his resignation on July 1, effective July 31 - one year to the day after taking office. The next day Abbott appoints Huffines, his 2022 primary challenger, to the unexpired term. \"I'll bring a private-sector mindset to the public sector and DOGE Texas government,\" Huffines says.",
    kind: "office",
    sourceIds: [6, 7],
  },
  {
    date: "2026-08-01",
    dateLabel: "August 1, 2026",
    title: "Sworn in - and the reserve is his",
    detail:
      "Huffines takes the oath as Texas Comptroller of Public Accounts and declines the salary. Under SB 21 the comptroller \"has custody of and shall administer and manage the reserve\" and sits on its advisory committee by office, so the $10 million Strategic Bitcoin Reserve, the open custody procurement, and the committee seat pass to him the same day.",
    kind: "office",
    sourceIds: [1, 2, 5, 8, 9],
  },
  {
    date: "2026-08-31",
    dateLabel: "August 31, 2026",
    title: "The custody window closes on his watch",
    detail:
      "The procurement's late-August target for contract execution passes. As of September 1, the ESBD shows RFP 908-26-1778WS closed with no award, and the Comptroller's office - a dozen releases into the Huffines era - has not mentioned the reserve once. The custodian's name is the first entry this record adds.",
    kind: "watch",
    sourceIds: [3, 4],
  },
  {
    date: "2026-11-03",
    dateLabel: "November 3, 2026",
    title: "The general",
    detail:
      "Huffines faces Democratic state Senator Sarah Eckhardt for the full four-year term beginning January 2027. The reserve's manager is on the ballot for the first time since the reserve existed.",
    kind: "watch",
    sourceIds: [19],
  },
  {
    date: "2026-12-31",
    dateLabel: "December 31, 2026",
    title: "The first report",
    detail:
      "SB 21 requires the comptroller to publish a report on the reserve's holdings, value, and administration by December 31 of each even-numbered year. The first one in the statute's life is due under Huffines's name - whatever November decides.",
    kind: "watch",
    sourceIds: [5],
  },
];
