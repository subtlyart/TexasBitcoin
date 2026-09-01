// Kelly Hancock and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the site. The record is drawn
// from the Comptroller's office (comptroller.texas.gov), the Texas Tribune
// and Texas press for the succession, and trade press for the purchases.
// Hancock is the executor of the people cluster: Abbott signed the reserve,
// Patrick prioritized it, Schwertner authored it - Hancock is the man who
// actually buys, holds, and reports the state's Bitcoin. The honest
// counterweight: he was an unelected acting official making first-of-their-
// kind investment decisions - and, after losing the March 3, 2026 primary
// to Don Huffines, a lame duck who resigned effective July 31, 2026 with the
// custody transition unfinished. Huffines inherited the reserve August 1.
//
// Verified September 1, 2026. Hancock's record is closed; re-verify only if
// the custodian award or the first SB 21 report re-characterizes what he
// left behind. The successor's record lives in huffines.ts.

export const HANCOCK_LAST_VERIFIED = "September 1, 2026";

export interface HancockSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Comptroller's office, then Texas press for
// the succession and the race, then trade press for the purchases.
export const hancockSources: HancockSource[] = [
  { id: 1, label: "Texas Comptroller - Comptroller Glenn Hegar Welcomes Former State Sen. Kelly Hancock to Comptroller's Office (June 19, 2025)", url: "https://comptroller.texas.gov/about/media-center/news/20250619-texas-comptroller-glenn-hegar-welcomes-kelly-hancock-to-comptrollers-office-1750300171508" },
  { id: 2, label: "Texas Tribune - Former Texas state Sen. Kelly Hancock to become acting comptroller, run for permanent job (June 19, 2025)", url: "https://www.texastribune.org/2025/06/19/kelly-handcock-texas-comptroller-glenn-hegar/" },
  { id: 3, label: "Texas Tribune - Glenn Hegar named as Texas A&M System's next leader (March 7, 2025)", url: "https://www.texastribune.org/2025/03/07/texas-am-system-chancellor-glenn-hegar/" },
  { id: 4, label: "The Bond Buyer - Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 5, label: "Texas Comptroller - Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 6, label: "The Block - Texas appoints CleanSpark exec, bitcoin miner CEO to Strategic Bitcoin Reserve committee (May 2026)", url: "https://www.theblock.co/post/403026/texas-cleanspark-exec-bitcoin-miner-ceo-strategic-bitcoin-reserve-committee" },
  { id: 7, label: "Texas SmartBuy ESBD - RFP 908-26-1778WS: custody and liquidity services for the Texas Strategic Bitcoin Reserve", url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS" },
  { id: 8, label: "Crypto Briefing - Texas plans to shift $10M Bitcoin holdings from IBIT to direct custody; bids due June 15, 2026, contract execution targeted for late August", url: "https://cryptobriefing.com/texas-expands-bitcoin-strategic-reserve/" },
  { id: 9, label: "Ballotpedia - Kelly Hancock: Texas House 2007–2013, Texas Senate District 9 2013–2025, acting Comptroller from July 1, 2025", url: "https://ballotpedia.org/Kelly_Hancock" },
  { id: 10, label: "Wikipedia - 2026 Texas Comptroller of Public Accounts election: Hancock, Christi Craddick, and Don Huffines in the Republican primary", url: "https://en.wikipedia.org/wiki/2026_Texas_Comptroller_of_Public_Accounts_election" },
  { id: 11, label: "Austin American-Statesman - How Kelly Hancock plans to manage being acting comptroller and a candidate (June 23, 2025)", url: "https://www.statesman.com/story/news/politics/2025/06/23/how-kelly-hancock-plans-to-manage-being-acting-comptroller-candidate/84315329007/" },
  { id: 12, label: "Texas Comptroller - Manual of Accounts: Strategic Bitcoin Reserve fund (Fund 1018, Fiscal 2026)", url: "https://fmcpa.cpa.state.tx.us/fiscalmoa/fund.jsp?num=1018" },
  { id: 13, label: "Texas Tribune - Don Huffines defeats Christi Craddick and Kelly Hancock in the GOP primary for comptroller (March 3, 2026)", url: "https://www.texastribune.org/2026/03/03/don-huffines-christi-craddick-kelly-hancock-texas-gop-primary-comptroller/" },
  { id: 14, label: "Houston Chronicle - Don Huffines wins Texas Republican comptroller race, will face Sarah Eckhardt (March 2026)", url: "https://www.houstonchronicle.com/politics/election/2026/article/comptroller-primary-results-21329222.php" },
  { id: 15, label: "The Texan - Don Huffines Secures Strong Win in Republican Comptroller Primary (~58% to Hancock's ~23%, no runoff)", url: "https://thetexan.news/elections/2026/don-huffines-secures-strong-win-in-republican-comptroller-primary/article_db7b1cff-dde2-4125-a7e1-c11dfdea9e7b.html" },
  { id: 16, label: "Texas Tribune - Acting Comptroller Kelly Hancock to step down as Texas CFO: resignation submitted July 1, 2026, effective end of July (July 1, 2026)", url: "https://www.texastribune.org/2026/07/01/texas-comptroller-kelly-hancock-resigns-greg-abbott-don-huffines/" },
  { id: 17, label: "The Texan - Abbott Appoints Comptroller Candidate Don Huffines to Fill Outgoing Hancock's Unexpired Term (July 2, 2026)", url: "https://thetexan.news/state/texas-state-news/abbott-appoints-comptroller-candidate-don-huffines-to-fill-outgoing-hancocks-unexpired-term/article_6ae16818-e965-4319-8f0a-2524476ade36.html" },
  { id: 18, label: "Texas Comptroller - Don Huffines Sworn in as Texas Comptroller, Refuses Salary, Calls for Property Tax Relief (August 1, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260801-don-huffines-sworn-in-as-texas-comptroller-refuses-salary-calls-for-property-tax-relief-1785512488796" },
];

export type HancockTimelineKind = "path" | "office" | "execution" | "verdict";

// The arc: the legislator → the succession → the execution of the reserve.
export interface HancockEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: HancockTimelineKind;
  sourceIds: number[];
}

export const hancockTimeline: HancockEvent[] = [
  {
    date: "2025-03-07",
    dateLabel: "March 7, 2025",
    title: "The vacancy: Hegar chooses A&M",
    detail:
      "Comptroller Glenn Hegar - three-term custodian of the state's books - is named the Texas A&M University System's next chancellor, opening the office that SB 21, then moving through the Legislature, was about to hand the nation's first funded state Bitcoin reserve.",
    kind: "path",
    sourceIds: [3],
  },
  {
    date: "2025-06-19",
    dateLabel: "June 19, 2025",
    title: "The handoff: Hancock joins the Comptroller's office",
    detail:
      "One day before Governor Abbott signs SB 21, Hegar welcomes former State Senator Kelly Hancock - Texas House 2007–2013, Senate District 9 2013–2025, a past president pro tempore - into the Comptroller's office as chief clerk, positioning him for the succession.",
    kind: "office",
    sourceIds: [1, 2, 9],
  },
  {
    date: "2025-07-01",
    dateLabel: "July 1, 2025",
    title: "Acting Comptroller - and steward of the new reserve",
    detail:
      "Hegar departs for A&M and Hancock becomes acting Texas Comptroller of Public Accounts, inheriting an eleven-day-old statute directing his office to build, buy, and custody a Strategic Bitcoin Reserve held outside the treasury. He announces he will also run for the permanent job.",
    kind: "office",
    sourceIds: [2, 9, 11],
  },
  {
    date: "2025-11-20",
    dateLabel: "November 20, 2025",
    title: "The first purchase in state history",
    detail:
      "Hancock's office deploys roughly $5 million into the iShares Bitcoin Trust at $51.8694 per share, with Bitcoin near $91,300 - the first time a U.S. state buys Bitcoin exposure for a dedicated, publicly funded reserve. The office frames the ETF as an explicit placeholder until a custodian is contracted.",
    kind: "execution",
    sourceIds: [4, 12],
  },
  {
    date: "2026-03-03",
    dateLabel: "March 3, 2026",
    title: "The verdict: Hancock loses the primary he was appointed into",
    detail:
      "Don Huffines wins the Republican primary for comptroller outright with about 58% to Hancock's roughly 23%, powered by a late Trump endorsement that overrode Governor Abbott's $2.6 million in ads backing Hancock. Hancock stays on as a lame duck, still running the reserve's custody transition - for four more months, as it turns out.",
    kind: "verdict",
    sourceIds: [13, 14, 15],
  },
  {
    date: "2026-05-28",
    dateLabel: "May 28, 2026",
    title: "The committee and the custody RFP",
    detail:
      "Hancock names the four outside members of the advisory committee he chairs - Laurie Dotter, Jamie McAvity, Carla Reyes, Gary Vecchiarelli - and issues the custody-and-liquidity RFP to move the reserve's now-$10 million IBIT position into directly held Bitcoin. Bids close July 10 (extended from June 15); contract execution is targeted for late August 2026.",
    kind: "execution",
    sourceIds: [5, 6, 7, 8],
  },
  {
    date: "2026-07-01",
    dateLabel: "July 1, 2026",
    title: "The exit: Hancock resigns, Abbott appoints the man who beat him",
    detail:
      "Four months after the primary, Hancock submits his resignation effective July 31, 2026 - one year to the day after becoming acting comptroller - citing the completed rollout of the $1 billion Texas Education Freedom Accounts program. The next day Governor Abbott appoints Don Huffines to the unexpired term.",
    kind: "verdict",
    sourceIds: [16, 17],
  },
  {
    date: "2026-08-01",
    dateLabel: "August 1, 2026",
    title: "The handoff - custodian unnamed",
    detail:
      "Huffines is sworn in and the reserve passes with the office: the $10 million ETF placeholder, the seated committee, and a custody solicitation still under evaluation. The clean transfer an orderly office promises is delivered in structure, not yet in substance - the award Hancock targeted for late August does not execute before he leaves.",
    kind: "verdict",
    sourceIds: [18, 7],
  },
];
