// The bills that died - the 89th Legislature's Bitcoin dead file.
//
// PHILOSOPHY: the law timeline records what Texas enacted; this dataset
// records what it declined to enact, and where each measure actually
// stopped. Every status is verified against the bill's own history page on
// capitol.texas.gov - "left pending in committee" and "placed on the
// calendar" are the Legislature's own words for the many ways a bill dies
// without a no vote. The register stays bullish: a dead bill is a surveyed
// claim on the next session's frontier, and this page treats the dead file
// as the 90th Legislature's likely agenda.
//
// Extensible by session: add a new entries array per session as future
// legislatures convene (90th: January 2027).
//
// Verified August 2026 against capitol.texas.gov (89R adjourned sine die
// June 2, 2025 - every bill still "pending" on that date died with the
// session).

export const DEAD_BILLS_LAST_VERIFIED = "August 28, 2026";

export interface DeadBillSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: capitol.texas.gov bill histories, then the
// Statesman and Tribune, then trade press.
export const deadBillSources: DeadBillSource[] = [
  { id: 1, label: "Texas Legislature Online - SB 778 (89R) bill history: Schwertner's original reserve bill, referred to Finance February 7, 2025, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB778" },
  { id: 2, label: "Texas Legislature Online - HB 1598 (89R) bill history: Capriglione's in-treasury bitcoin reserve, referred to Delivery of Government Efficiency March 12, 2025, no hearing", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1598" },
  { id: 3, label: "Texas Legislature Online - HB 4258 (89R) bill history: Reynolds/Plesa comptroller-and-local-government crypto investment, referred April 1, 2025, no hearing", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB4258" },
  { id: 4, label: "Texas Legislature Online - HJR 175 (89R) bill history: right to own, hold, and use a mutually agreed medium of exchange; passed the House May 9, 2025, left pending in Senate Business & Commerce May 15", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HJR175" },
  { id: 5, label: "Texas Legislature Online - HB 2798 (89R) bill history: virtual-currency kiosk disclosures; passed the House April 25, 2025, died in Senate Business & Commerce", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB2798" },
  { id: 6, label: "Texas Legislature Online - SB 1705 (89R) bill history: virtual-currency kiosk regulation; passed the Senate May 15, 2025, died on the House General State Calendar", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1705" },
  { id: 7, label: "Austin American-Statesman - What would a strategic bitcoin reserve look like in Texas? Two lawmakers have ideas (January 28, 2025): the Schwertner vs. Capriglione designs", url: "https://www.statesman.com/story/business/technology/2025/01/28/texas-legislature-crypto-bitcoin-reserve-bills-giovanni-capriglione-charles-schwertner-donald-trump/77847904007/" },
  { id: 8, label: "CryptoSlate - Texas lawmakers finalize details on Bitcoin reserve, remove staking ahead of final vote (May 2025)", url: "https://cryptoslate.com/texas-lawmakers-finalize-details-on-bitcoin-reserve-removes-staking-ahead-of-final-vote/" },
  { id: 9, label: "Texas Policy Research - Texas House Approves SB 21 (the $21M Senate rider trimmed to the $10M appropriation)", url: "https://www.texaspolicyresearch.com/texas-house-approves-sb-21-paving-way-for-state-run-bitcoin-reserve/" },
  { id: 10, label: "Texas Tribune - Texas regulations lacking as crypto kiosk scams rise (July 8, 2026): the cost of the kiosk bills' failure", url: "https://www.texastribune.org/2026/07/08/texas-cryptocurrency-kiosk-bitcoin-atm-scam-fraud/" },
  { id: 11, label: "Crypto Briefing - Texas lawmakers consider ban on crypto kiosk scams costing $57M (2025)", url: "https://cryptobriefing.com/texas-crypto-kiosk-ban-57-million/" },
  { id: 12, label: "Texas Policy Research - SB 1705 bill analysis: the proposed Chapter 161 kiosk framework (registration, reporting, consumer protection)", url: "https://www.texaspolicyresearch.com/bills/89th-legislature-sb-1705/" },
  { id: 13, label: "Texas Legislature Online - SB 21 (89R) bill history: the reserve bill that did pass, signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
];

// Where a bill stopped - the Legislature's own euphemisms, made legible.
export type DeathPlace =
  | "no-hearing" // referred to committee, never heard
  | "pending" // heard, left pending in committee
  | "calendar" // cleared committee, died awaiting a floor vote
  | "superseded"; // folded into a bill that passed

export interface DeadBill {
  bill: string;
  caption: string;
  authors: string;
  wouldHaveDone: string;
  story: string;
  died: DeathPlace;
  diedLabel: string; // human-readable where-it-stopped
  sourceIds: number[];
}

// The 89th's Bitcoin dead file, ordered by how far each measure traveled -
// the closer to the finish line, the higher on the page.
export const deadBills89: DeadBill[] = [
  {
    bill: "SB 1705",
    caption: "Regulation of virtual currency kiosks",
    authors: "Parker (Blanco, Campbell)",
    wouldHaveDone:
      "A new Finance Code Chapter 161 for virtual currency kiosks - registration with the state, transaction disclosures, daily limits and reporting aimed at the scam pipelines that run through crypto ATMs.",
    story:
      "Passed the full Senate on May 15, 2025, cleared its House committee favorably and without amendment on May 22, and was placed on the House General State Calendar on May 27 - then the calendar ran out. Six days before sine die, the House simply never reached it.",
    died: "calendar",
    diedLabel: "Died on the House calendar, May 27, 2025",
    sourceIds: [6, 12],
  },
  {
    bill: "HJR 175",
    caption: "Right to own, hold, and use a mutually agreed medium of exchange",
    authors: "Gerdes, Bumgarner, Leo Wilson (Sponsor: Parker)",
    wouldHaveDone:
      "A Texas constitutional amendment - subject to voter approval - establishing the right of individuals to own, hold, and use the medium of exchange of their choosing, including digital currency, for trading and contracting.",
    story:
      "The 89th's boldest Bitcoin measure got the furthest of anything that failed: it passed the full House on May 9, 2025, crossed to the Senate, got its Business & Commerce hearing on May 15 - and was left pending there, five committee votes short of a ballot line that would have put transactional freedom before Texas voters.",
    died: "pending",
    diedLabel: "Left pending in Senate Business & Commerce, May 15, 2025",
    sourceIds: [4],
  },
  {
    bill: "HB 2798",
    caption: "Virtual currency kiosk transaction disclosures",
    authors: "Plesa (Capriglione, Garcia, Lambert, Bhojani)",
    wouldHaveDone:
      "The House's version of kiosk consumer protection - mandatory disclosures and requirements on kiosk transactions, with a fee to fund oversight.",
    story:
      "Passed the House on April 25, 2025 - the mirror image of SB 1705's fate. The House said yes to its kiosk bill; the Senate said yes to its own; neither chamber passed the other's, and both died. Texas ended the session with two chambers on record for kiosk regulation and no law.",
    died: "pending",
    diedLabel: "Died in Senate Business & Commerce after House passage",
    sourceIds: [5],
  },
  {
    bill: "HB 1598",
    caption: "A bitcoin reserve within the state treasury",
    authors: "Capriglione",
    wouldHaveDone:
      "The rival reserve design: Bitcoin held inside the state treasury, a minimum five-year hold, and a channel for Texans and governmental entities to donate BTC to the state - custody-first where SB 21 is investment-first.",
    story:
      "Filed December 12, 2024 - before the session even opened - by the House's most prominent blockchain legislator. It was referred to the new Delivery of Government Efficiency committee on March 12, 2025 and never received a hearing. The chamber chose Schwertner's architecture wholesale; Capriglione's five-year-hold discipline and donation channel remain unclaimed ideas.",
    died: "no-hearing",
    diedLabel: "No hearing in House Delivery of Government Efficiency",
    sourceIds: [2, 7],
  },
  {
    bill: "HB 4258",
    caption: "Comptroller and local-government cryptocurrency investment",
    authors: "Reynolds | Plesa",
    wouldHaveDone:
      "Authority for the comptroller to invest state money in cryptocurrencies at real scale - reported around $250 million from the rainy-day fund - and for municipalities and counties to invest up to $10 million each.",
    story:
      "The most expansive number of the session, and it came from Democratic authors - a detail the party-line framing of Bitcoin politics never predicts. Referred to Delivery of Government Efficiency on April 1, 2025, and never heard. Its local-government clause is the sleeper: no Texas city or county has investment authority today.",
    died: "no-hearing",
    diedLabel: "No hearing in House Delivery of Government Efficiency",
    sourceIds: [3],
  },
  {
    bill: "SB 778",
    caption: "The original Texas Strategic Bitcoin Reserve bill",
    authors: "Schwertner",
    wouldHaveDone:
      "The first-filed Senate reserve bill of the 89th, appropriation included - Schwertner's opening draft of what became the law.",
    story:
      "Filed January 14, 2025 and parked in Finance on February 7, where it never moved again - because it did not need to. Schwertner refiled the design as SB 21, the lieutenant governor put it on the priority list, and the original died the happiest death in the file: superseded by its own successor.",
    died: "superseded",
    diedLabel: "Superseded by SB 21; left in Senate Finance",
    sourceIds: [1, 13],
  },
];

// What the surviving bill lost on the way through - the amendments file.
export interface CutFromSB21 {
  what: string;
  detail: string;
  sourceIds: number[];
}

export const cutFromSB21: CutFromSB21[] = [
  {
    what: "Staking",
    detail:
      "Earlier drafts let the reserve stake eligible assets for yield; lawmakers removed staking authority before the final vote, keeping the fund to holding and investment.",
    sourceIds: [8],
  },
  {
    what: "$11 million of the appropriation",
    detail:
      "A Senate budget rider floated $21 million to kick-start the reserve; the final figure settled at $10 million.",
    sourceIds: [9],
  },
];
