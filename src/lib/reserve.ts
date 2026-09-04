// The Texas Strategic Bitcoin Reserve — the dataset behind the tracker page.
//
// PHILOSOPHY: same as the law timeline and mining map — verified entries only,
// every datable claim sourced to the primary record (SB 21 bill history,
// comptroller.texas.gov) or reputable reporting. This is the money-law vertical's
// evergreen reference: what the reserve is, and where it stands right now.
//
// Re-verify whenever the Comptroller acts, reports, or names the fifth committee
// member — and bump RESERVE_LAST_VERIFIED and the page's dateModified together.

export const RESERVE_LAST_VERIFIED = "September 1, 2026";

export interface ReserveSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: SB 21 bill history and comptroller.texas.gov, then
// legal analysis, then trade press. Rendered on-page; every claim points here.
export const reserveSources: ReserveSource[] = [
  { id: 1, label: "Texas Legislature Online — SB 21 (89R) bill history: signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 2, label: "Hunton — Texas Establishes Strategic Bitcoin Reserve (SB 21): $500B market-cap floor, five-member advisory committee, biennial reporting, held outside the treasury", url: "https://www.hunton.com/blockchain-legal-resource/texas-establishes-strategic-bitcoin-reserve" },
  { id: 3, label: "The Block — Governor Greg Abbott signs strategic Bitcoin reserve bill into law (June 2025)", url: "https://www.theblock.co/post/359089/texas-governor-greg-abbott-signs-strategic-bitcoin-reserve-bill-into-law" },
  { id: 4, label: "The Bond Buyer — Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025, held as a placeholder", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 5, label: "Texas Comptroller — Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 6, label: "Texas Comptroller — Manual of Accounts: Strategic Bitcoin Reserve fund (Fund 1018, Fiscal 2026)", url: "https://fmcpa.cpa.state.tx.us/fiscalmoa/fund.jsp?num=1018" },
  { id: 7, label: "Texas Policy Research — Texas House Approves SB 21 (context on the $10M appropriation)", url: "https://www.texaspolicyresearch.com/texas-house-approves-sb-21-paving-way-for-state-run-bitcoin-reserve/" },
  { id: 8, label: "Texas SmartBuy ESBD — RFP 908-26-1778WS: custody and liquidity services for the Texas Strategic Bitcoin Reserve", url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS" },
  { id: 9, label: "Crypto Briefing — Texas plans to shift $10M Bitcoin holdings from IBIT to direct custody; bids due June 15, 2026, contract execution targeted for late August", url: "https://cryptobriefing.com/texas-expands-bitcoin-strategic-reserve/" },
  { id: 10, label: "Texas Comptroller — Don Huffines Sworn in as Texas Comptroller, Refuses Salary, Calls for Property Tax Relief (August 1, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260801-don-huffines-sworn-in-as-texas-comptroller-refuses-salary-calls-for-property-tax-relief-1785512488796" },  { id: 11, label: "Cointelegraph — Texas lawmaker behind state's crypto reserve bill: Ether may be next (October 10, 2025): Bitcoin ≈ $2T, ether ≈ $494B against the $500B floor", url: "https://cointelegraph.com/news/texas-senator-crypto-reserve-bill-ether-next" },
  { id: 12, label: "Texas Observer — Texas Set to Create State Bitcoin Reserve (May 21, 2025): the donation clause restored by the House, removed in conference", url: "https://www.texasobserver.org/texas-set-to-create-state-bitcoin-reserve/" },
  { id: 13, label: "Dallas Morning News — Texas' $10M bitcoin investment slips into the red amid crypto price dive (March 2, 2026): ~$5M on Nov 20, 2025; ~$5M on Dec 15, 2025; valued ~$7.8M", url: "https://www.dallasnews.com/business/2026/03/02/texas-10m-bitcoin-investment-slips-into-the-red-amid-crypto-price-dive/" },
  { id: 14, label: "The Hill — New Hampshire becomes first state to adopt strategic crypto reserve: HB 302, up to 5% of certain funds in precious metals and digital assets over $500B (May 2025)", url: "https://thehill.com/policy/technology/5287441-new-hampshire-becomes-first-state-to-adopt-strategic-crypto-reserve/" },
  { id: 15, label: "Arizona Senate — HB 2749 fact sheet: the Bitcoin and Digital Assets Reserve Fund of abandoned digital assets, airdrops and staking rewards; signed May 7, 2025 after the veto of SB 1025", url: "https://www.azleg.gov/legtext/57leg/1R/summary/S.2749GOV.DOCX.htm" },
];

// Current status — the scannable "where the reserve stands today" panel. Each
// row is a self-contained fact for extraction; the citation lives on the page.
export interface ReserveStatusRow {
  label: string;
  value: string;
  sourceIds: number[];
}

export const reserveStatus: ReserveStatusRow[] = [
  { label: "Enabling law", value: "Senate Bill 21, 89th Legislature — signed June 20, 2025, effective immediately", sourceIds: [1, 3] },
  { label: "Manager", value: "Texas Comptroller of Public Accounts — Don Huffines since August 1, 2026 — holding the fund outside the state treasury", sourceIds: [2, 10] },
  { label: "Appropriation", value: "$10 million from the Legislature (a $21M Senate rider was trimmed to $10M)", sourceIds: [7] },
  { label: "Eligibility floor", value: "Digital assets averaging ≥ $500B market cap over 24 months — only Bitcoin qualifies today", sourceIds: [2] },
  { label: "First purchase", value: "~$5 million into the iShares Bitcoin Trust on November 20, 2025", sourceIds: [4] },
  { label: "Current holdings", value: "$10 million in the iShares Bitcoin Trust (a spot BTC ETF) — the full appropriation deployed, held as an explicit placeholder", sourceIds: [8, 9] },
  { label: "Custody", value: "No custodian named as of September 1, 2026. RFP 908-26-1778WS closed July 10, 2026 (extended from June 15); the late-August execution target passed with no award, so the contract moving the $10M from the ETF proxy to directly held Bitcoin now executes under Comptroller Huffines", sourceIds: [8, 9, 10] },
  { label: "Advisory committee", value: "Complete — the Comptroller chairs by office (Kelly Hancock to July 31, 2026; Don Huffines since August 1), joined May 28, 2026 by Laurie Dotter, Jamie McAvity (Cormint), Carla Reyes (SMU), Gary Vecchiarelli (CleanSpark)", sourceIds: [5, 10] },
  { label: "Reporting", value: "Comptroller must publish biennial reports on the fund's value and management", sourceIds: [2] },
];

// A compact reserve-specific timeline (a spoke of the fuller law timeline).
export interface ReserveEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  done: boolean; // false = announced / in progress
  sourceIds: number[];
}

export const reserveTimeline: ReserveEvent[] = [
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "SB 21 signed — the reserve is created",
    detail:
      "Governor Greg Abbott signs Senate Bill 21, effective immediately, making Texas the first state with a standalone, publicly funded Strategic Bitcoin Reserve held outside the treasury under the Comptroller.",
    done: true,
    sourceIds: [1, 3],
  },
  {
    date: "2025-11-20",
    dateLabel: "November 20, 2025",
    title: "The first purchase",
    detail:
      "The Comptroller's office buys roughly $5 million of the iShares Bitcoin Trust at $51.8694 per share, with Bitcoin near $91,300 — an explicit placeholder until a dedicated custodian is contracted.",
    done: true,
    sourceIds: [4],
  },
  {
    date: "2026-05-28",
    dateLabel: "May 28, 2026",
    title: "Committee complete; custody RFP opens — holdings at $10M",
    detail:
      "Acting Comptroller Kelly Hancock completes the five-seat advisory committee — Hancock chairing, joined by Laurie Dotter, Jamie McAvity, Carla Reyes, and Gary Vecchiarelli — and the office issues the custody-and-liquidity RFP. The filing confirms the reserve's ETF position has reached the full $10 million appropriation.",
    done: true,
    sourceIds: [5, 8, 9],
  },
  {
    date: "2026-07-10",
    dateLabel: "July 10, 2026",
    title: "Custody RFP closes",
    detail:
      "Proposals for the custody-and-liquidity mandate come due — the deadline, first set for June 15, was extended to July 10 on the ESBD. The selected firm will securely acquire, hold, and report the state's Bitcoin in the name of the State of Texas, retiring the ETF placeholder for coin the state controls.",
    done: true,
    sourceIds: [8, 9],
  },
  {
    date: "2026-08-31",
    dateLabel: "Late August 2026",
    title: "Custody contract execution — the move to the keys",
    detail:
      "The RFP targeted contract execution for late August 2026; the window passed with no award as of September 1, and the contract now executes under Comptroller Don Huffines, sworn in August 1. Once the custodian is under contract, the $10 million IBIT placeholder converts to directly held Bitcoin — the moment the reserve stops holding a claim and starts holding the asset.",
    done: false,
    sourceIds: [8, 9],
  },
];
