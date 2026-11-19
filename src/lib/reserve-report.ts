// The first Texas Strategic Bitcoin Reserve biennial report — the dataset behind
// the countdown/explainer spoke page.
//
// PHILOSOPHY: same as lib/reserve.ts and lib/custody.ts — verified entries only,
// every datable claim sourced to the primary record (SB 21 enrolled text,
// comptroller.texas.gov) or reputable reporting. This page owns one question:
// what the first § 403.708 report is required to say, when, and what it will and
// will not show. It is a forward-looking spoke of the reserve explainer.
//
// Re-verify whenever the Comptroller posts the report, or the status of the
// custody award or the office changes — and bump REPORT_LAST_VERIFIED and the
// page's dateModified together. When the report posts, flip reportStatus's
// "Published" row and add the filing to the sources.

export const REPORT_LAST_VERIFIED = "November 19, 2026";

// The statutory deadline and the measuring date it points back to.
export const REPORT_DUE_ISO = "2026-12-31";
export const PRECEDING_BIENNIUM_END = "August 31, 2025";

export interface ReportSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the SB 21 enrolled text and comptroller.texas.gov,
// then the fiscal calendar, then reporting on the holdings and the transition.
export const reportSources: ReportSource[] = [
  { id: 1, label: "Texas Legislature Online — SB 21 (89R), enrolled text, Government Code § 403.708 (biennial report): not later than December 31 of each even-numbered year, the comptroller publishes on the comptroller's website and submits to the legislature a report stating the amount of bitcoin and other cryptocurrency held in the reserve on the last day of the preceding state fiscal biennium; an estimate of its monetary value on that day; the changes, if any, over the period the cryptocurrency has been held, disaggregated by cryptocurrency type; and a description of the actions taken to administer and manage the reserve", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
  { id: 2, label: "Texas Legislature Online — SB 21 (89R) bill history: signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 3, label: "Texas Comptroller — Fiscal Management, state fiscal year and biennium: each Texas fiscal year runs September 1 through August 31; the 2024–25 biennium ended August 31, 2025", url: "https://fmx.cpa.texas.gov/fmx/" },
  { id: 4, label: "The Bond Buyer — Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025, held as a placeholder", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 5, label: "Dallas Morning News — Texas' $10M bitcoin investment slips into the red amid crypto price dive (March 2, 2026): ~$5M on Nov 20, 2025; ~$5M on Dec 15, 2025; valued ~$7.8M", url: "https://www.dallasnews.com/business/2026/03/02/texas-10m-bitcoin-investment-slips-into-the-red-amid-crypto-price-dive/" },
  { id: 6, label: "Texas Comptroller — Manual of Accounts: Strategic Bitcoin Reserve fund (Fund 1018, Fiscal 2026)", url: "https://fmcpa.cpa.state.tx.us/fiscalmoa/fund.jsp?num=1018" },
  { id: 7, label: "Texas Comptroller — Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members and opens the custody RFP (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 8, label: "Texas SmartBuy ESBD — RFP 908-26-1778WS: custody and liquidity services for the Texas Strategic Bitcoin Reserve (posted May 7, 2026; responses due July 10, 2026)", url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS" },
  { id: 9, label: "Texas Comptroller — Don Huffines Sworn in as Texas Comptroller (August 1, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260801-don-huffines-sworn-in-as-texas-comptroller-refuses-salary-calls-for-property-tax-relief-1785512488796" },
  { id: 10, label: "Texas Secretary of State — November 3, 2026 general election, unofficial returns at 100% of polling locations reporting (November 4, 2026, 4:59 p.m.): Sarah Eckhardt (D) led Don Huffines (R), 5,014,496 (51.30%) to 4,511,185 (46.15%). Not certified", url: "https://electionresults.sos.state.tx.us/results.html" },
  { id: 11, label: "Texas Comptroller — News releases, reviewed November 19, 2026: no release posting the Strategic Bitcoin Reserve report and none naming a custodian; the last Bitcoin release remains the May 28, 2026 advisory-committee announcement", url: "https://comptroller.texas.gov/about/media-center/news/" },
  { id: 12, label: "Texas Legislature Online — the 90th Legislature convenes in regular session January 12, 2027 (second Tuesday in January, per Tex. Const. art. III, § 5)", url: "https://capitol.texas.gov/" },
];

// The four things § 403.708 requires the report to contain, each paired with what
// the primary record says that clause will actually show for the first report.
export interface ReportClause {
  n: string;
  requirement: string;
  willShow: string;
  sourceIds: number[];
}

export const reportClauses: ReportClause[] = [
  {
    n: "§ 403.708(1)",
    requirement:
      "The amount of bitcoin and other cryptocurrency held in the reserve on the last day of the preceding state fiscal biennium.",
    willShow:
      "Read literally, zero. The preceding biennium ended August 31, 2025 — twelve weeks before the first purchase on November 20, 2025 — so on the measuring date the reserve held no Bitcoin.",
    sourceIds: [1, 3, 4],
  },
  {
    n: "§ 403.708(2)",
    requirement:
      "An estimate of the monetary value of that holding on the last day of the preceding state fiscal biennium.",
    willShow:
      "On the same literal reading, about $0 — the value of nothing held on August 31, 2025.",
    sourceIds: [1, 3],
  },
  {
    n: "§ 403.708(3)",
    requirement:
      "The changes, if any, in amount and estimated value over the period the cryptocurrency has been held, disaggregated by cryptocurrency type.",
    willShow:
      "This clause carries the real story: two ~$5 million IBIT purchases (November 20 and December 15, 2025) building to the $10 million appropriation, and a mark near $7.8 million by March 2, 2026. It is not bounded to the preceding biennium.",
    sourceIds: [1, 4, 5],
  },
  {
    n: "§ 403.708(4)",
    requirement:
      "A description of the actions the comptroller took to administer and manage the reserve.",
    willShow:
      "The operational record: the ETF placeholder, the five-member advisory committee named May 28, 2026, and custody RFP 908-26-1778WS — whose award was still unposted on November 19, 2026.",
    sourceIds: [1, 7, 8],
  },
];

// The scannable status panel — where the report itself stands right now.
export interface ReportStatusRow {
  label: string;
  value: string;
  sourceIds: number[];
}

export const reportStatus: ReportStatusRow[] = [
  { label: "Statutory deadline", value: "December 31, 2026 — the first report required under SB 21 § 403.708, due by December 31 of each even-numbered year", sourceIds: [1] },
  { label: "Published", value: "Not yet. As of November 19, 2026, the Comptroller's newsroom has posted no Strategic Bitcoin Reserve report", sourceIds: [11] },
  { label: "Who owes it", value: "Comptroller Don Huffines, sworn in August 1, 2026. Unofficial November 3 returns show Sarah Eckhardt (D) ahead for the term that begins in January 2027, so the first report falls in a lame-duck window", sourceIds: [9, 10] },
  { label: "Where it goes", value: "Published on the Comptroller's website and submitted to the Legislature, which convenes January 12, 2027 — about two weeks after the report is due", sourceIds: [1, 12] },
  { label: "Measuring date", value: "The last day of the preceding state fiscal biennium — August 31, 2025 — on which the reserve held no Bitcoin, the first purchase coming November 20, 2025", sourceIds: [3, 4] },
  { label: "Custody at report time", value: "Still an ETF placeholder on the current record: $10 million in the iShares Bitcoin Trust, with RFP 908-26-1778WS unawarded as of November 19, 2026", sourceIds: [8, 11] },
];

// What to read for when the report posts — the checklist this page flips through
// on the day, and the reason each line matters.
export interface ReportWatchItem {
  question: string;
  why: string;
}

export const reportWatch: ReportWatchItem[] = [
  {
    question: "Does it report the literal August 31, 2025 snapshot (zero), or current holdings?",
    why: "The statute's measuring date predates the fund's first purchase. How the Comptroller resolves that — a zero snapshot plus a changes narrative, or a present-day figure — sets the template for every future report.",
  },
  {
    question: "Is the Bitcoin still in the ETF, or has the custody contract executed?",
    why: "If RFP 908-26-1778WS has been awarded by report time, the actions clause should name the custodian — the first official word on who holds the state's coin.",
  },
  {
    question: "What value does it put on the $10 million position?",
    why: "The last public mark, about $7.8 million on March 2, 2026, was under water. The report is the first official valuation of a position written for a ten-year horizon.",
  },
  {
    question: "Does it signal anything about a 2027 appropriation?",
    why: "The report lands two weeks before the 90th Legislature convenes with the top-up question open — whether $10 million stays the seed or becomes the size.",
  },
];
