// The 90th Legislature Bitcoin bill tracker — the dataset behind the session
// watch page.
//
// PHILOSOPHY: same as the law timeline and the dead file — verified entries
// only, every bill sourced to its capitol.texas.gov history. This file ships
// as a STUB before pre-filing opens (November 9, 2026): the session facts and
// the watchlist are real and sourced; the bills array is empty by design and
// fills as Bitcoin-relevant bills are actually filed.
//
// Workflow once pre-filing opens: search capitol.texas.gov (90R) for
// bitcoin/digital-asset/virtual-currency bills, add each with its bill-history
// URL, and bump LEGE90_LAST_VERIFIED + the page's dateModified together.
// When the first bills land, consider promoting the page off sitemap-only.

export const LEGE90_LAST_VERIFIED = "August 30, 2026";

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
      "The first day members may file bills for the 90th Regular Session. The first Bitcoin bills of the session — and this tracker's first entries — typically appear within days.",
    done: false,
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
      "Whether the Strategic Bitcoin Reserve's $10 million was the seed or the size. The Comptroller's custody contract and the fund's first performance record land squarely in the appropriations debate.",
    precedent:
      "SB 21's $21M Senate rider was trimmed to $10M in 2025; HB 4258 (Reynolds/Plesa) proposed ~$250M plus local authority and died without a hearing.",
  },
  {
    title: "The kiosk fight, round three",
    detail:
      "Crypto-ATM consumer protection is the rare Bitcoin issue with majorities in both chambers and no law to show for it — the likeliest early filing of the session.",
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
      "The first session with SB 6 in force and the AI conversion in full swing: expect cleanup bills on transmission-cost allocation, curtailment obligations, and how much of the miners' demand-response franchise survives the pivot.",
    precedent:
      "SB 6 (2025) rebuilt large-load rules; SB 1751's demand-response cap passed the Senate 30–1 in 2023 before dying; Governor Abbott's June 10, 2026 directive ordered data centers to fund their own grid costs.",
  },
  {
    title: "The reserve's first biennial report",
    detail:
      "SB 21 requires the Comptroller to report publicly on the fund's value and administration every two years — the first report's timing overlaps the session, and its contents will feed every reserve debate above.",
    precedent: "The reporting mandate is in SB 21's enrolled text (2025).",
  },
];

// Bills of the 90th — EMPTY until pre-filing opens November 9, 2026.
// Add entries only with a capitol.texas.gov (90R) bill-history URL.
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
  status: BillStatus;
  statusDetail: string;
  historyUrl: string; // capitol.texas.gov 90R bill history
  lastAction: string; // ISO date of last verified action
}

export const trackedBills90: TrackedBill[] = [];

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
  { id: 8, label: "Texas Legislature Online — SB 1751 (88R) bill history: the miner demand-response cap that passed the Senate 30–1 and died in House committee (2023)", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
];
