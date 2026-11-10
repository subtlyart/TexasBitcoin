// Verified 90(R) filings; bill histories and introduced texts are primary sources.
export const LEGE90_LAST_VERIFIED = "November 9, 2026";

// Session milestones — the clock the tracker runs on.
export interface SessionDate {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  done: boolean;
}

export const sessionDates: SessionDate[] = [
  {
    date: "2026-11-09",
    dateLabel: "November 9, 2026",
    title: "Pre-filing opens",
    detail:
      "Pre-filing opened; eight tracked bills were filed November 9, including three directly about cryptocurrency and five broader data-center or computational-load measures.",
    done: true,
  },
  {
    date: "2027-01-12",
    dateLabel: "January 12, 2027",
    title: "The 90th Legislature convenes",
    detail:
      "The Regular Session gavels in at the Capitol. Texas legislatures meet in regular session only in odd-numbered years — everything Bitcoin gets, it gets in these 140 days or in a called special session.",
    done: false,
  },
  {
    date: "2027-03-12",
    dateLabel: "March 12, 2027",
    title: "Bill-filing deadline",
    detail:
      "The 60th day — the deadline for filing most bills. After this date, the session's Bitcoin agenda is effectively set; what is not filed is not happening.",
    done: false,
  },
  {
    date: "2027-05-31",
    dateLabel: "May 31, 2027",
    title: "Sine die",
    detail:
      "The last day of the Regular Session. Bills that have not passed both chambers die where they stand — the raw material of the next dead file.",
    done: false,
  },
];

// The watchlist — what the record suggests the 90th will take up. Every entry
// is grounded in something that already happened (a dead bill, a statutory
// deadline, a cut provision), not speculation.
export interface WatchItem {
  title: string;
  detail: string;
  precedent: string; // the sourced 88th/89th-session basis for expecting it
}

export const watchlist: WatchItem[] = [
  {
    title: "A reserve top-up",
    detail:
      "HB 815 proposes local cryptocurrency investment authority up to $10 million per municipality or county. Whether the state adds to its own reserve remains open.",
    precedent:
      "SB 21's $21M Senate rider was trimmed to $10M in 2025; HB 4258 (Reynolds/Plesa) proposed ~$250M plus local authority and died without a hearing.",
  },
  {
    title: "The kiosk fight, round three",
    detail:
      "HB 271 and SB 181 propose different kiosk prohibitions: a Class A misdemeanor versus a civil penalty tied to revenue. Neither is law.",
    precedent:
      "SB 1705 passed the Senate and died on the House calendar; HB 2798 passed the House and died in Senate committee (2025). Two majorities, zero laws, with kiosk-scam losses still running.",
  },
  {
    title: "HJR 175's return",
    detail:
      "The proposed constitutional right to own, hold, and use a chosen medium of exchange — including digital currency. Constitutional amendments routinely take multiple sessions; watch for a refiled version.",
    precedent:
      "HJR 175 passed the House May 9, 2025 and was left pending in Senate Business & Commerce.",
  },
  {
    title: "Staking, revisited",
    detail:
      "Whether the state's reserve (or state funds generally) may earn yield on digital assets. Cut provisions have a way of coming back once the underlying program is running.",
    precedent: "Staking authority was stripped from SB 21 before passage in 2025.",
  },
  {
    title: "Large loads, mines, and the grid — after SB 6",
    detail:
      "SB 32, SB 33 and SB 34 propose permitting, transmission-cost allocation and county zoning for computational loads, including distributed-ledger activity.",
    precedent:
      "SB 6 (2025) rebuilt large-load rules; SB 1751's demand-response cap passed the Senate 31–0 in 2023 before dying; Governor Abbott's June 10, 2026 directive ordered data centers to fund their own grid costs.",
  },
  {
    title: "The reserve's first biennial report",
    detail:
      "SB 21 requires the Comptroller to report publicly on the fund's value and administration every two years — the first report's timing overlaps the session, and its contents will feed every reserve debate above.",
    precedent: "The reporting mandate is in SB 21's enrolled text (2025).",
  },
];

// Bills of the 90th: three direct cryptocurrency bills, then five broader measures.
export type BillChamber = "House" | "Senate";
export type BillStatus =
  | "prefiled"
  | "filed"
  | "in-committee"
  | "passed-committee"
  | "passed-chamber"
  | "passed-both"
  | "signed"
  | "vetoed"
  | "dead";

export interface TrackedBill {
  bill: string; // e.g. "SB 21"
  chamber: BillChamber;
  author: string;
  title: string;
  summary: string;
  scope: "Direct cryptocurrency" | "Broader computational load";
  textUrl: string;
  status: BillStatus;
  statusDetail: string;
  historyUrl: string; // capitol.texas.gov 90R bill history
  lastAction: string; // ISO date of last verified action
}

export const trackedBills90: TrackedBill[] = [
  { bill: "HB 815", chamber: "House", author: "Reynolds", title: "Local cryptocurrency investment",
    summary: "Would allow a municipality or county to invest no more than $10 million of money under its control in Bitcoin or another cryptocurrency. This is local authority, not a state reserve appropriation.", scope: "Direct cryptocurrency", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB815", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00815I.htm" },
  { bill: "HB 271", chamber: "House", author: "Shofner", title: "Virtual-currency kiosk criminal ban",
    summary: "Would prohibit knowingly owning or operating a virtual-currency kiosk in Texas, or allowing one on property under a person’s control; violations would be Class A misdemeanors.", scope: "Direct cryptocurrency", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB271", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00271I.htm" },
  { bill: "SB 181", chamber: "Senate", author: "Hagenbuch", title: "Virtual-currency kiosk civil ban",
    summary: "Would prohibit operating a virtual-currency kiosk for compensation, or allowing that operation on controlled property; the proposed civil penalty equals revenue earned during the violation, including fees.", scope: "Direct cryptocurrency", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB181", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00181I.htm" },
  { bill: "HB 734", chamber: "House", author: "Vincent Perez", title: "Data-center development-agreement disclosure",
    summary: "Would require complete public submission of local data-center development agreements, subject to specified attorney-general-approved redactions; its data-center definition includes cryptocurrency mining and blockchain computation.", scope: "Broader computational load", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB734", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00734I.htm" },
  { bill: "HB 374", chamber: "House", author: "Mary González", title: "Data-center nondisclosure limits",
    summary: "Would limit government nondisclosure agreements concerning data centers of at least 25 MW, including virtual-currency mining, to two years and require approval at a public meeting with testimony.", scope: "Broader computational load", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB374", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00374I.htm" },
  { bill: "SB 32", chamber: "Senate", author: "Zaffirini", title: "Large computational-load permits",
    summary: "Would require a PUC permit before construction of computational-load sites with at least 75 MW demand; the definition includes adding virtual-currency transactions to a distributed ledger.", scope: "Broader computational load", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB32", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00032I.htm" },
  { bill: "SB 33", chamber: "Senate", author: "Zaffirini", title: "Computational-load transmission costs",
    summary: "Would establish a separate transmission cost-of-service rate class for computational-load-site customers, including distributed-ledger activity, for costs not otherwise recovered.", scope: "Broader computational load", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB33", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00033I.htm" },
  { bill: "SB 34", chamber: "Senate", author: "Zaffirini", title: "County zoning for large computational loads",
    summary: "Would authorize county zoning districts and special-use permits in unincorporated areas for large computational loads, including distributed-ledger activity.", scope: "Broader computational load", status: "filed",
    statusDetail: "Filed November 9, 2026; not enacted.", lastAction: "2026-11-09",
    historyUrl: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB34", textUrl: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00034I.htm" },
];

export interface Lege90Source {
  id: number;
  label: string;
  url: string;
}

export const lege90Sources: Lege90Source[] = [
  { id: 1, label: "Texas Legislative Reference Library — first-day-of-prefiling statistics (pre-filing opens the Monday following the November general election; November 9, 2026 for the 90th)", url: "https://lrl.texas.gov/whatsNew/client/index.cfm/2024/11/15/First-Day-of-Prefiling-Statistics-89th-Regular-Session" },
  { id: 2, label: "State Bar of Texas — Legislative Timetable 2026–2027: 90th Regular Session convenes January 12, 2027; bill-filing deadline March 12, 2027; sine die May 31, 2027", url: "https://www.texasbar.com/AM/Template.cfm?Section=Meeting_Agendas_and_Minutes&Template=%2FCM%2FContentDisplay.cfm&ContentID=70245" },
  { id: 3, label: "Texas Legislature Online — SB 21 (89R) bill history: the Strategic Bitcoin Reserve, signed June 20, 2025 (the $10M appropriation and biennial-reporting mandate the 90th inherits)", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 4, label: "Texas Legislature Online — HJR 175 (89R) bill history: passed the House May 9, 2025, left pending in Senate Business & Commerce", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HJR175" },
  { id: 5, label: "Texas Legislature Online — SB 1705 (89R) bill history: the kiosk bill that passed the Senate and died on the House calendar", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1705" },
  { id: 6, label: "Texas Legislature Online — HB 2798 (89R) bill history: the kiosk bill that passed the House and died in Senate committee", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB2798" },
  { id: 7, label: "Texas Legislature Online — SB 6 (89R) bill history: large-load interconnection overhaul, signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 8, label: "Texas Legislature Online — SB 1751 (88R) bill history: the miner demand-response cap that passed the Senate 31–0 and died in House committee (2023)", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 9, label: "Texas Legislature Online — HB 815 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB815" },
  { id: 10, label: "Texas Legislature Online — HB 271 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB271" },
  { id: 11, label: "Texas Legislature Online — SB 181 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB181" },
  { id: 12, label: "Texas Legislature Online — HB 734 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB734" },
  { id: 13, label: "Texas Legislature Online — HB 374 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=HB374" },
  { id: 14, label: "Texas Legislature Online — SB 32 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB32" },
  { id: 15, label: "Texas Legislature Online — SB 33 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB33" },
  { id: 16, label: "Texas Legislature Online — SB 34 (90R), history: filed November 9, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=90R&Bill=SB34" },
  { id: 17, label: "Texas Legislature Online — HB 815 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00815I.htm" },
  { id: 18, label: "Texas Legislature Online — HB 271 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00271I.htm" },
  { id: 19, label: "Texas Legislature Online — SB 181 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00181I.htm" },
  { id: 20, label: "Texas Legislature Online — HB 734 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00734I.htm" },
  { id: 21, label: "Texas Legislature Online — HB 374 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/HB00374I.htm" },
  { id: 22, label: "Texas Legislature Online — SB 32 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00032I.htm" },
  { id: 23, label: "Texas Legislature Online — SB 33 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00033I.htm" },
  { id: 24, label: "Texas Legislature Online — SB 34 (90R), introduced text", url: "https://capitol.texas.gov/tlodocs/90R/billtext/html/SB00034I.htm" },
];
