// The Texas Comptroller of Public Accounts and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: the sixth institutional page, and the one the money-law
// vertical runs through. The subject is the office, not its holders - the
// holders have pages of their own (Hegar, Hancock, Huffines). The record
// is drawn from the Comptroller's own releases, Fiscal Notes, Manual of
// Accounts, tax rulings, and procurement postings; the enrolled texts of
// HB 483, SB 21, and HB 1056; the Legislative Budget Board's fiscal
// notes; Texas Legislature Online's histories and witness lists; then
// Texas and trade press. The thesis: the Comptroller is the only Texas
// office that holds the asset - by statute, in a fund of its own, with
// custody, a committee chair, and a report to write - and it came to that
// role having already run the state's first reserve of a hard asset, the
// bullion depository, for a decade. The honest counterweight is the
// office's own caution: an authority to buy that went unused for eighteen
// months, a fiscal note that warned the fund would sit beyond the
// Legislature's reach, a tax ruling that calls the asset intangible
// property, an ETF placeholder in the state's name instead of coin, a
// custody window that closed with no award, and an unclaimed-coin bill
// the office would have administered that died on the House calendar.
//
// Verified September 30, 2026. Re-verify when the custodian is named, after
// the November 3, 2026 comptroller election, when the first SB 21 report
// posts (due December 31, 2026), and when HB 1056's transactional currency
// goes live (May 1, 2027).

export const COMPTROLLER_LAST_VERIFIED = "September 30, 2026";

export interface ComptrollerSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the office's own record, the enrolled statutes
// and fiscal notes, the Legislature's histories; then Texas and trade press.
export const comptrollerSources: ComptrollerSource[] = [
  { id: 1, label: "Texas Legislature Online - SB 21 (89R), enrolled text: § 403.703 (the comptroller has custody of the reserve, held outside the treasury), § 403.705 (third-party contracts, including a custodian; audits), § 403.707 (the comptroller sits on the five-member advisory committee and appoints the other four), § 403.708 (biennial report by December 31 of each even-numbered year)", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
  { id: 2, label: "Texas Legislature Online - SB 21 (89R) bill history: Senate March 6, 2025; House May 21; conference report adopted May 29–30; signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 3, label: "Texas Comptroller - Manual of Accounts, Fund 1018, Texas Strategic Bitcoin Reserve: created June 25, 2025 under SB 21 and HB 4488; held by the Texas Treasury Safekeeping Trust Company; not appropriated", url: "https://fmcpa.cpa.state.tx.us/fiscalmoa/fund.jsp?num=1018" },
  { id: 4, label: "Legislative Budget Board - fiscal note, SB 21 as introduced (February 17, 2025; source agency: Comptroller): implications \"cannot be determined\"; administrative costs \"could be absorbed using proceeds from the reserve\"; a fund outside the treasury \"may limit the Legislature's ability to make appropriation decisions\"", url: "https://capitol.texas.gov/tlodocs/89R/fiscalnotes/pdf/SB00021I.pdf" },
  { id: 5, label: "Texas Senate News - Business and Commerce hears SB 21 (February 18, 2025): the office manages more than $100 billion; existing law already permits investment in SEC-regulated ETFs, none made; Hegar - \"Pioneering a strategic bitcoin reserve is a natural step for Texas\"", url: "https://senate.texas.gov/news.php?id=20250218a" },
  { id: 6, label: "Texas Scorecard - Texas Senate committee mulls measure establishing strategic bitcoin reserve (February 18, 2025): Hegar - \"a measured approach to managing a potentially volatile asset\"; to Senator Johnson - \"I can do that already\"", url: "https://texasscorecard.com/state/texas-senate-committee-mulls-measure-establishing-strategic-bitcoin-reserve/" },
  { id: 7, label: "Texas Legislature Online - SB 21 (89R) Senate witness list, February 18, 2025: Glenn Hegar, Comptroller of Public Accounts, registered \"On\" - not \"For\" - with the Treasury Safekeeping Trust Company's Anca Ion and Whitney Blanton", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00021S.htm" },
  { id: 8, label: "The Bond Buyer - Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025, at $51.8694 a share, held as a placeholder", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 9, label: "Dallas Morning News - Texas' $10M bitcoin investment slips into the red amid crypto price dive (March 2, 2026): ~$5M on November 20, 2025; ~$5M on December 15, 2025; valued ~$7.8M", url: "https://www.dallasnews.com/business/2026/03/02/texas-10m-bitcoin-investment-slips-into-the-red-amid-crypto-price-dive/" },
  { id: 10, label: "Texas Comptroller - Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members and opens the custody RFP (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 11, label: "Texas SmartBuy ESBD - RFP 908-26-1778WS, custody and liquidity services for the Texas Strategic Bitcoin Reserve: posted May 7, 2026; closed July 10, 2026; no award posted as of September 30, 2026", url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS" },
  { id: 12, label: "HigherGov - RFP 908-26-1778WS listing: issued by the Comptroller on behalf of the Texas Treasury Safekeeping Trust Company; performance August 31, 2026 to August 31, 2029 with options; estimated value $100,000", url: "https://www.highergov.com/sl/contract-opportunity/tx-texas-strategic-bitcoin-reserve-67282979/" },
  { id: 13, label: "Crypto Briefing - Texas plans to shift $10M Bitcoin holdings from IBIT to direct custody; bids due June 15, 2026, contract execution targeted for late August", url: "https://cryptobriefing.com/texas-expands-bitcoin-strategic-reserve/" },
  { id: 14, label: "Texas Comptroller - Don Huffines Sworn in as Texas Comptroller, Refuses Salary, Calls for Property Tax Relief (August 1, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260801-don-huffines-sworn-in-as-texas-comptroller-refuses-salary-calls-for-property-tax-relief-1785512488796" },
  { id: 15, label: "Texas Tribune - Acting Comptroller Kelly Hancock to step down as Texas CFO; Abbott appoints Don Huffines (July 1, 2026)", url: "https://www.texastribune.org/2026/07/01/texas-comptroller-kelly-hancock-resigns-greg-abbott-don-huffines/" },
  { id: 16, label: "Texas Comptroller - Comptroller Glenn Hegar Welcomes Former State Sen. Kelly Hancock to Comptroller's Office (June 19, 2025): chief clerk, to become acting comptroller July 1", url: "https://comptroller.texas.gov/about/media-center/news/20250619-texas-comptroller-glenn-hegar-welcomes-kelly-hancock-to-comptrollers-office-1750300171508" },
  { id: 17, label: "Texas Comptroller - News releases, August–September 2026: sales tax, property tax, school-district reviews, education freedom accounts - no release on the reserve or a custodian", url: "https://comptroller.texas.gov/about/media-center/news/" },
  { id: 18, label: "Texas Legislature Online - HB 483 (84R) bill summary: the Texas Bullion Depository, signed June 12, 2015, effective June 19, 2015; the comptroller administers the depository and appoints its administrator", url: "https://capitol.texas.gov/billlookup/BillSummary.aspx?LegSess=84R&Bill=HB483" },
  { id: 19, label: "Texas Comptroller - Texas Comptroller's Office Begins Operation of Texas Bullion Depository (June 6, 2018): \"the nation's first state-administered bullion depository is now a reality\"; Hegar its first depositor", url: "https://comptroller.texas.gov/about/media-center/news/20180606-texas-comptrollerand39s-office-begins-operation-of-texas-bullion-depository-1528304460000" },
  { id: 20, label: "Texas Bullion Depository - The creation of the first ever state-authorized bullion depository: HB 483 signed June 12, 2015; the comptroller appoints the administrator; operator Lone Star Tangible Assets; vault at Leander", url: "https://www.texasbulliondepository.gov/the-creation-of-the-first-ever-bullion-depository" },
  { id: 21, label: "Texas Observer - From Bullion to Bitcoin: Crypto Reserve Is Latest Fiscal Folly in Texas (February 28, 2025): Hegar testified the state owns no gold despite the depository, and that his office has authority to invest in crypto funds but has opted not to", url: "https://www.texasobserver.org/texas-bitcoin-strategic-reserve-senate-bill-21/" },
  { id: 22, label: "Texas Legislature Online - HB 1056 (89R) bill history: gold and silver as legal tender and a transactional currency backed by depository metal; signed June 22, 2025; Section 2116.101 effective September 1, 2026; remainder effective May 1, 2027", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1056" },
  { id: 23, label: "Texas Comptroller, Fiscal Notes - Bitcoin and Beyond: Alternative Currencies, or History's Biggest Bubble? (April 2018): \"The state of Texas doesn't accept Bitcoin (or any other currency other than U.S. dollars) in payment for its taxes\"", url: "https://comptroller.texas.gov/economy/fiscal-notes/archive/2018/april/bitcoin.php" },
  { id: 24, label: "Texas Comptroller, Fiscal Notes - Cryptocurrency in Texas: Opportunities and Challenges in Mining Digital Coins (August 2022): Rockdale's 300 direct jobs; roughly 3,000 MW of mining at 4% of peak; ERCOT projections of 17,000 MW by 2030; a recommendation to renew the data-center exemption", url: "https://comptroller.texas.gov/economy/fiscal-notes/archive/2022/aug/crypto-tx.php" },
  { id: 25, label: "Texas Comptroller, Fiscal Notes - The Future of Texas Power (September 2024): Texas crypto mines 2,717 MW at the end of 2023, the most in North America; \"A 1-MW cryptocurrency mine uses more energy than 700 households\"", url: "https://comptroller.texas.gov/economy/fiscal-notes/industry/2024/energy-demand/" },
  { id: 26, label: "Eversheds Sutherland SALT Shaker - Texas Comptroller dispenses advice to bitcoin ATM operator (August 22, 2025): private letter ruling 202506007L, June 3, 2025 - bitcoin is \"intangible property, not tangible personal property\" for franchise tax; not a security; not currency; no cost-of-goods-sold deduction for its acquisition", url: "https://www.stateandlocaltax.com/texas/texas-comptroller-dispenses-advice-to-bitcoin-atm-operator/" },
  { id: 27, label: "Texas Legislature Online - SB 1244 (89R) bill history: Schwertner, sponsored by Capriglione; \"relating to unclaimed personal property, including virtual currency\"; passed the Senate April 24, 2025; reported by House committee May 21; placed on the General State Calendar May 27 - the last recorded action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1244" },
  { id: 28, label: "Legislative Budget Board - fiscal note, SB 1244 (89R): a holder with the private keys must report abandoned virtual currency; the comptroller may contract with a custodian, hold it outside the treasury, and deduct holding and liquidation costs before depositing proceeds; fiscal impact \"cannot be estimated\"", url: "https://capitol.texas.gov/tlodocs/89R/fiscalnotes/html/SB01244S.htm" },
  { id: 29, label: "Texas Legislature Online - HB 4258 (89R) bill history: comptroller and local-government cryptocurrency investment, referred April 1, 2025, no hearing", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB4258" },
  { id: 30, label: "Wikipedia - 2026 Texas Comptroller of Public Accounts election: Huffines (R) vs. Sarah Eckhardt (D), November 3, 2026", url: "https://en.wikipedia.org/wiki/2026_Texas_Comptroller_of_Public_Accounts_election" },
  { id: 31, label: "Texas Senate Journal - 89th Legislature, 14th Day (March 6, 2025): CSSB 21 finally passed, Yeas 25, Nays 5 - Hancock among the nays", url: "https://journals.senate.texas.gov/sjrnl/89r/pdf/89RSJ03-06-F.PDF" },
  { id: 32, label: "Texas State Historical Association, Handbook of Texas - State Treasurer: voters abolished the office in November 1995, effective August 31, 1996, and its duties passed to the Comptroller of Public Accounts", url: "https://www.tshaonline.org/handbook/entries/state-treasurer" },
];

// Status panel - the office's Bitcoin duties, one self-contained row each.
export interface ComptrollerStatusRow {
  label: string;
  value: string;
  sourceIds: number[];
}

export const comptrollerStatus: ComptrollerStatusRow[] = [
  { label: "The office", value: "Comptroller of Public Accounts - the state's chief financial officer, tax collector, revenue estimator, and treasurer, with the Texas Treasury Safekeeping Trust Company under it", sourceIds: [5] },
  { label: "Holder", value: "Don Huffines since August 1, 2026, by appointment to Kelly Hancock's unexpired term; on the November 3, 2026 ballot against Sarah Eckhardt", sourceIds: [14, 30] },
  { label: "Custody of the reserve", value: "By statute: SB 21 § 403.703 places the Strategic Bitcoin Reserve in the comptroller's custody, outside the treasury, as Fund 1018 held by the Trust Company", sourceIds: [1, 3] },
  { label: "What it holds", value: "$10 million in the iShares Bitcoin Trust, bought in two ~$5 million tranches on November 20 and December 15, 2025, as an explicit placeholder for directly held Bitcoin", sourceIds: [8, 9] },
  { label: "The committee", value: "The comptroller chairs the five-member advisory committee by office and appointed its four outside members on May 28, 2026", sourceIds: [1, 10] },
  { label: "The custodian", value: "Not yet contracted. RFP 908-26-1778WS closed July 10, 2026; the late-August execution target passed with no award as of September 30, 2026", sourceIds: [11, 13] },
  { label: "The report", value: "First biennial report due by December 31, 2026 under § 403.708, published on the comptroller's website and submitted to the Legislature", sourceIds: [1] },
  { label: "The other reserve", value: "The Texas Bullion Depository, administered by the comptroller since HB 483 (2015), open at Leander since June 6, 2018; the state itself holds no gold there", sourceIds: [18, 19, 21] },
  { label: "Gold as tender", value: "HB 1056 directs the comptroller to stand up a transactional currency backed by depository metal; legal-tender section effective September 1, 2026, the currency by May 1, 2027", sourceIds: [22] },
  { label: "Tax treatment", value: "Texas does not accept Bitcoin for taxes; a June 3, 2025 letter ruling calls it intangible property, not a security or currency, for franchise tax", sourceIds: [23, 26] },
];

export type ComptrollerTimelineKind = "depository" | "study" | "statute" | "reserve" | "watch";

// The arc: the depository → the studies → the statute → the purchases →
// the handoff → the clocks.
export interface ComptrollerEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: ComptrollerTimelineKind;
  sourceIds: number[];
}

export const comptrollerTimeline: ComptrollerEvent[] = [
  {
    date: "2015-06-12",
    dateLabel: "June 12, 2015",
    title: "HB 483: the office gets a vault",
    detail:
      "Governor Abbott signs Giovanni Capriglione's bullion depository bill, effective June 19. The comptroller is to administer the Texas Bullion Depository and appoint its administrator - the first state-run reserve of a hard asset in the country, and the template the office would reuse a decade later.",
    kind: "depository",
    sourceIds: [18, 20],
  },
  {
    date: "2018-06-06",
    dateLabel: "April → June 2018",
    title: "The depository opens; Fiscal Notes reads Bitcoin",
    detail:
      "The comptroller's journal runs \"Bitcoin and Beyond\" in April: the state \"doesn't accept Bitcoin (or any other currency other than U.S. dollars) in payment for its taxes.\" On June 6 the depository opens at Leander under a private operator, Comptroller Glenn Hegar its first depositor: \"the nation's first state-administered bullion depository is now a reality.\"",
    kind: "depository",
    sourceIds: [23, 19, 20],
  },
  {
    date: "2024-09-01",
    dateLabel: "August 2022 → September 2024",
    title: "The office studies the mines",
    detail:
      "Two Fiscal Notes studies put numbers on the industry the office would later hold a stake in: roughly 3,000 megawatts of mining at 4% of peak load and Rockdale's 300 direct jobs in 2022; 2,717 megawatts at the end of 2023, the most in North America, in 2024. In January 2024 the SEC approves spot Bitcoin ETFs, which the comptroller may already buy under existing law. The office does not.",
    kind: "study",
    sourceIds: [24, 25, 5],
  },
  {
    date: "2025-02-18",
    dateLabel: "February 17–18, 2025",
    title: "\"I can do that already\": the office testifies \"on\"",
    detail:
      "The office sources the fiscal note - cost \"cannot be determined,\" a fund outside the treasury \"may limit the Legislature's ability to make appropriation decisions\" - and Hegar registers \"on,\" not \"for,\" telling Business and Commerce that the office manages more than $100 billion, takes \"a measured approach to managing a potentially volatile asset,\" and, asked whether it needs the bill to buy, \"I can do that already.\"",
    kind: "statute",
    sourceIds: [4, 5, 6, 7],
  },
  {
    date: "2025-06-25",
    dateLabel: "June 3 → June 25, 2025",
    title: "A ruling, a signature, and Fund 1018",
    detail:
      "On June 3 the office's tax division tells a bitcoin ATM operator, in letter ruling 202506007L, that bitcoin is \"intangible property, not tangible personal property\" - not a security, not currency - and its cost cannot be deducted as goods sold. On June 20 Abbott signs SB 21; on June 22, HB 1056. On June 25 the Manual of Accounts opens Fund 1018, the Strategic Bitcoin Reserve, held by the Trust Company, not appropriated. Hegar leaves for Texas A&M on July 1; Kelly Hancock, who voted against the bill, becomes acting comptroller.",
    kind: "statute",
    sourceIds: [26, 2, 22, 3, 16, 31],
  },
  {
    date: "2025-12-15",
    dateLabel: "November 20 → December 15, 2025",
    title: "The office buys",
    detail:
      "The first state Bitcoin purchase in American history for a dedicated reserve: about $5 million in the iShares Bitcoin Trust at $51.8694 a share on November 20, and about $5 million more on December 15 - the full appropriation, held as an explicit placeholder until a custodian can hold coin in the state's name. By March 2 the position marks at about $7.8 million.",
    kind: "reserve",
    sourceIds: [8, 9],
  },
  {
    date: "2026-05-28",
    dateLabel: "May 7 → May 28, 2026",
    title: "The committee and the custody search",
    detail:
      "The office posts RFP 908-26-1778WS for custody and liquidity services on behalf of the Trust Company, and on May 28 Hancock names the four outside members of the advisory committee he chairs - Laurie Dotter, Jamie McAvity, Carla Reyes, Gary Vecchiarelli. Contract execution is targeted for late August.",
    kind: "reserve",
    sourceIds: [11, 12, 10, 13],
  },
  {
    date: "2026-08-01",
    dateLabel: "July 1 → August 1, 2026",
    title: "The desk changes hands with the custodian unnamed",
    detail:
      "Hancock, beaten in the March primary, resigns effective July 31; Abbott appoints the man who beat him. Don Huffines is sworn in August 1, refusing the salary. Under § 403.703 and § 403.707, custody of the reserve, the committee chair, and the pending award pass with the office.",
    kind: "reserve",
    sourceIds: [15, 14, 1],
  },
  {
    date: "2026-09-30",
    dateLabel: "August 31 → September 30, 2026",
    title: "The window closes; gold becomes tender",
    detail:
      "The late-August execution target passes with no award on the ESBD and no release from the office on the reserve. On September 1, HB 1056's legal-tender section takes effect, the first step of the gold-backed currency the same office must stand up by May 2027. Two hard-asset programs, one desk, neither finished.",
    kind: "watch",
    sourceIds: [11, 17, 22],
  },
  {
    date: "2026-12-31",
    dateLabel: "November 3 → December 31, 2026",
    title: "The ballot and the report",
    detail:
      "Huffines faces Sarah Eckhardt on November 3 for the full term beginning January 2027. Whatever the result, the first SB 21 biennial report - holdings, value, changes, and actions taken - is due under the sitting comptroller's name by December 31.",
    kind: "watch",
    sourceIds: [30, 1],
  },
];
