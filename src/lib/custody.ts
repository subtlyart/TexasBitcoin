// Who holds the Texas Bitcoin reserve — the dataset behind the custody watch page.
//
// PHILOSOPHY: same as lib/reserve.ts — verified entries only, every datable
// claim sourced to the primary record (the ESBD solicitation, comptroller.texas.gov)
// or reputable reporting. This page is the operational sequel to the reserve
// explainer: not what the law built, but whose hands the coin sits in.
//
// Re-verify whenever the ESBD posts an award, the Comptroller announces the
// custodian, or the transparency site goes live — and bump CUSTODY_LAST_VERIFIED
// and the page's dateModified together. The reserve page's status panel links
// here; keep the two consistent.

export const CUSTODY_LAST_VERIFIED = "September 1, 2026";

export interface CustodySource {
  id: number;
  label: string;
  url: string;
}

export const custodySources: CustodySource[] = [
  { id: 1, label: "Texas SmartBuy ESBD — RFP 908-26-1778WS: custody and liquidity services for the Texas Strategic Bitcoin Reserve (posted May 7, 2026; responses due July 10, 2026; no award posted)", url: "https://www.txsmartbuy.gov/esbd/908-26-1778WS" },
  { id: 2, label: "Texas Comptroller — Acting Comptroller Kelly Hancock Names Strategic Bitcoin Reserve Advisory Committee Members and opens the custody RFP (May 28, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 3, label: "Cointelegraph — Texas plans shift of Bitcoin reserve from ETF to direct custody: 60-day conversion window, public transparency website, custody in the name of the State of Texas (May 29, 2026)", url: "https://cointelegraph.com/news/texas-plans-shift-bitcoin-reserve-from-etf-to-direct-custody" },
  { id: 4, label: "Crypto Briefing — Texas plans to shift $10M Bitcoin holdings from IBIT to direct custody; contract execution targeted for late August 2026", url: "https://cryptobriefing.com/texas-expands-bitcoin-strategic-reserve/" },
  { id: 5, label: "HigherGov — RFP 908-26-1778WS listing: issued by the Comptroller on behalf of the Texas Treasury Safekeeping Trust Company; scope includes cold storage, encryption, multifactor authentication, and a public-facing transparency website", url: "https://www.highergov.com/sl/contract-opportunity/tx-texas-strategic-bitcoin-reserve-67282979/" },
  { id: 6, label: "Hunton — Texas Establishes Strategic Bitcoin Reserve (SB 21): managed by the Comptroller outside the treasury, five-member advisory committee, biennial reporting", url: "https://www.hunton.com/blockchain-legal-resource/texas-establishes-strategic-bitcoin-reserve" },
  { id: 7, label: "The Bond Buyer — Texas makes first purchase for state's Bitcoin reserve: ~$5M in the iShares Bitcoin Trust, November 20, 2025, held as a placeholder", url: "https://www.bondbuyer.com/news/texas-makes-first-purchase-for-states-bitcoin-reserve" },
  { id: 8, label: "Texas Comptroller — Manual of Accounts: Strategic Bitcoin Reserve fund (Fund 1018, Fiscal 2026)", url: "https://fmcpa.cpa.state.tx.us/fiscalmoa/fund.jsp?num=1018" },
  { id: 9, label: "Texas Legislature Online — SB 21 (89R) bill history: signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 10, label: "Texas Comptroller — Don Huffines Sworn in as Texas Comptroller, Refuses Salary, Calls for Property Tax Relief (August 1, 2026)", url: "https://comptroller.texas.gov/about/media-center/news/20260801-don-huffines-sworn-in-as-texas-comptroller-refuses-salary-calls-for-property-tax-relief-1785512488796" },
  { id: 11, label: "Texas Tribune — Acting Comptroller Kelly Hancock to step down as Texas CFO: resignation effective end of July 2026; Abbott appoints Don Huffines (July 1, 2026)", url: "https://www.texastribune.org/2026/07/01/texas-comptroller-kelly-hancock-resigns-greg-abbott-don-huffines/" },
  { id: 12, label: "Texas Legislature Online — SB 21 (89R) enrolled text: § 403.703 (the comptroller has custody of the reserve), § 403.707 (the comptroller sits on the advisory committee)", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
];

// The custody watch — the scannable "who holds what, right now" panel.
export interface CustodyStatusRow {
  label: string;
  value: string;
  sourceIds: number[];
}

export const custodyStatus: CustodyStatusRow[] = [
  { label: "Custodian", value: "Not yet named. As of September 1, 2026, the late-August execution target has passed, no award is posted on the ESBD, and the Comptroller has made no custodian announcement.", sourceIds: [1] },
  { label: "Who signs", value: "Comptroller Don Huffines, sworn in August 1, 2026 after Kelly Hancock – who opened the search – resigned effective July 31. Under SB 21, custody of the reserve and the comptroller's committee seat pass with the office", sourceIds: [10, 11, 12] },
  { label: "What Texas holds", value: "$10 million in the iShares Bitcoin Trust (IBIT), a spot Bitcoin ETF – a claim on Bitcoin held by BlackRock's custodian, not coin in the state's name", sourceIds: [4, 7] },
  { label: "Legal owner of the fund", value: "The Strategic Bitcoin Reserve (Fund 1018), managed by the Texas Comptroller outside the state treasury", sourceIds: [6, 8] },
  { label: "Contracting entity", value: "The Comptroller of Public Accounts, on behalf of the Texas Treasury Safekeeping Trust Company – the state's investment arm", sourceIds: [1, 5] },
  { label: "Procurement", value: "RFP 908-26-1778WS posted May 7, 2026; the response deadline, first set for June 15, closed July 10, 2026", sourceIds: [1, 2] },
  { label: "Execution target", value: "Contract execution was targeted for late August 2026; the window closed with no award, and the contract now executes under Comptroller Huffines", sourceIds: [4, 10] },
  { label: "Conversion clock", value: "Once under contract, the custodian has 60 days to move the $10 million from IBIT into directly held Bitcoin", sourceIds: [3] },
  { label: "Public reporting", value: "The custodian must build a public website showing the reserve's holdings and valuations; the Comptroller must publish biennial reports", sourceIds: [3, 5, 6] },
];

// What the winning custodian is on the hook for — from the RFP's scope.
export interface CustodyMandateItem {
  title: string;
  detail: string;
  sourceIds: number[];
}

export const custodyMandate: CustodyMandateItem[] = [
  {
    title: "Hold the coin in the name of the State of Texas",
    detail:
      "Custody the reserve's Bitcoin directly in the state's name – not as a fund share, not as an omnibus claim – with institutional-grade key management.",
    sourceIds: [3, 5],
  },
  {
    title: "Retire the ETF placeholder within 60 days",
    detail:
      "Transition the full $10 million IBIT position into directly custodied Bitcoin within 60 days of contract execution.",
    sourceIds: [3],
  },
  {
    title: "Run cold storage with layered controls",
    detail:
      "The RFP's security scope names cold storage, encryption, and multifactor authentication as baseline operational controls.",
    sourceIds: [5],
  },
  {
    title: "Provide liquidity both ways",
    detail:
      "Support purchases and sales for the reserve – SB 21 lets the fund grow by open-market purchase, so the custodian is also the trading desk.",
    sourceIds: [3, 9],
  },
  {
    title: "Build the public transparency website",
    detail:
      "Stand up a dedicated public-facing site displaying the reserve's Bitcoin and qualifying cryptocurrency holdings and their valuations.",
    sourceIds: [3, 5],
  },
  {
    title: "Support legislative reporting",
    detail:
      "Provide standard and custom reporting and support legislative inquiries – the plumbing behind the Comptroller's mandatory biennial reports.",
    sourceIds: [5, 6],
  },
];

// The custody procurement, step by step.
export interface CustodyEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  done: boolean;
  sourceIds: number[];
}

export const custodyTimeline: CustodyEvent[] = [
  {
    date: "2025-11-20",
    dateLabel: "November 20, 2025",
    title: "The placeholder position opens",
    detail:
      "The Comptroller's office buys roughly $5 million of the iShares Bitcoin Trust – an explicit placeholder while the state builds the plumbing to hold Bitcoin itself. The position later grows to the full $10 million appropriation.",
    done: true,
    sourceIds: [7, 4],
  },
  {
    date: "2026-05-07",
    dateLabel: "May 7, 2026",
    title: "The custody RFP posts",
    detail:
      "RFP 908-26-1778WS goes up on the Texas SmartBuy ESBD: custody and liquidity services for the Strategic Bitcoin Reserve, issued by the Comptroller on behalf of the Texas Treasury Safekeeping Trust Company.",
    done: true,
    sourceIds: [1, 5],
  },
  {
    date: "2026-05-28",
    dateLabel: "May 28, 2026",
    title: "The committee that will judge the custodian is seated",
    detail:
      "Acting Comptroller Kelly Hancock completes the five-seat advisory committee and publicly announces the custody search in the same release – custody standards are explicitly in the committee's portfolio.",
    done: true,
    sourceIds: [2],
  },
  {
    date: "2026-07-10",
    dateLabel: "July 10, 2026",
    title: "Proposals close",
    detail:
      "The response deadline – originally June 15, extended on the ESBD – passes at 2:00 p.m. Central. The field of would-be custodians for the first state-owned Bitcoin reserve is set; the state has not disclosed who bid.",
    done: true,
    sourceIds: [1],
  },
  {
    date: "2026-08-01",
    dateLabel: "August 1, 2026",
    title: "The desk changes hands",
    detail:
      "Don Huffines is sworn in as Comptroller after Kelly Hancock's July 31 resignation. Under SB 21, custody of the reserve – and the authority to award the custody contract – passes with the office. The solicitation is still under evaluation.",
    done: true,
    sourceIds: [10, 11, 12],
  },
  {
    date: "2026-08-31",
    dateLabel: "Late August 2026",
    title: "Contract execution — the target window",
    detail:
      "The procurement targeted contract execution for late August 2026. The window closed: as of September 1, no award is posted on the ESBD and no custodian has been announced. This is the entry we update next.",
    done: false,
    sourceIds: [1, 4],
  },
  {
    date: "2026-10-31",
    dateLabel: "Execution + 60 days",
    title: "The conversion clock",
    detail:
      "Whenever the contract executes, a 60-day window opens to convert the $10 million IBIT position into directly held Bitcoin – the moment Texas stops holding a claim and starts holding the asset.",
    done: false,
    sourceIds: [3],
  },
];
