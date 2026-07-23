// Texas Bitcoin law timeline — the dataset.
//
// PHILOSOPHY: Same as the mining map and the events directory — verified
// entries only. Every milestone below was checked against the Texas
// Legislature Online bill-history page (capitol.texas.gov) or the issuing
// regulator (dob.texas.gov) before inclusion; trade and legal press
// corroborate. Dates are the primary record's dates, not a headline's.
//
// Dataset verified July 2026. Re-verify after every regular session (odd
// years) and any special session that touches money or digital-asset law.

export const LAW_LAST_VERIFIED = "July 22, 2026";

export type MilestoneOutcome = "adopted" | "enacted" | "died" | "guidance";

export const OUTCOME_LABELS: Record<MilestoneOutcome, string> = {
  adopted: "Adopted",
  enacted: "Signed into law",
  died: "Died in committee",
  guidance: "Regulator guidance",
};

export interface LawSource {
  id: number;
  label: string;
  url: string;
}

export interface LawMilestone {
  id: string;
  /** ISO date of the defining action (issuance, signing, or key vote). */
  date: string;
  /** Human-readable form of `date`, pre-formatted to avoid timezone drift. */
  dateLabel: string;
  title: string;
  /** Who acted — chamber, legislature, or agency. */
  actor: string;
  /** 1–2 extractable sentences: entity + number + date, self-contained. */
  summary: string;
  outcome: MilestoneOutcome;
  sourceIds: number[];
}

// Numbered, primary-first: Texas Legislature Online bill histories, then the
// Texas Department of Banking, then trade and legal press. Rendered on-page;
// every milestone points here.
export const lawSources: LawSource[] = [
  { id: 1, label: "Texas Legislature Online — SB 21 (89R) bill history: signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 2, label: "Texas Legislature Online — HB 1056 (89R) bill history: signed June 22, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1056" },
  { id: 3, label: "Texas Legislature Online — HB 4474 (87R) bill history: signed June 15, 2021, effective September 1, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 4, label: "Texas Legislature Online — HB 1576 (87R) bill history: signed June 7, 2021, effective September 1, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB1576" },
  { id: 5, label: "Texas Legislature Online — SB 1751 (88R) bill history", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 6, label: "Texas Legislature Online — SB 895 (88R) bill history: signed May 29, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB895" },
  { id: 7, label: "Texas Legislature Online — HB 591 (88R) bill history: signed June 2, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB591" },
  { id: 8, label: "Texas Legislature Online — HB 1666 (88R) bill history: signed June 9, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1666" },
  { id: 9, label: "Texas Legislature — HB 1056 (89R) bill analysis", url: "https://capitol.texas.gov/tlodocs/89R/analysis/html/HB01056S.htm" },
  { id: 10, label: "Texas Department of Banking — Supervisory Memorandum 1037 (PDF)", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/New-Actions/sm1037.pdf" },
  { id: 11, label: "Texas Department of Banking — press release announcing Supervisory Memorandum 1037, April 3, 2014 (PDF)", url: "https://www.dob.texas.gov/public/uploads/files/news/press-releases/2014/04-03-14pr.pdf" },
  { id: 12, label: "Texas Department of Banking — Industry Notice 2021-03: Authority of Texas State-Chartered Banks to Provide Virtual Currency Custody Services (PDF)", url: "https://www.dob.texas.gov/sites/default/files/files/news/Industrynotices/in2021-03.pdf" },
  { id: 13, label: "Texas Department of Banking — Virtual Currency Guidance", url: "https://www.dob.texas.gov/consumer-information/virtual-currency-guidance" },
  { id: 14, label: "CoinDesk — Texas Senate passes SB 1751, 30–1 (April 12, 2023)", url: "https://www.coindesk.com/policy/2023/04/12/texas-senate-passes-bill-to-limit-bitcoin-miners-participation-in-demand-response-programs" },
  { id: 15, label: "CoinDesk — SB 1751 stopped in House committee (May 30, 2023)", url: "https://www.coindesk.com/policy/2023/05/30/texas-bill-that-would-limit-miners-participation-in-cost-saving-grid-programs-stopped-in-house-committee" },
  { id: 16, label: "CoinDesk — Texas state regulator greenlights banks to custody crypto (June 10, 2021)", url: "https://www.coindesk.com/policy/2021/06/10/texas-state-regulator-greenlights-banks-to-custody-crypto" },
  { id: 17, label: "O'Melveny — Texas Uniform Commercial Code updated to recognize cryptocurrency (HB 4474)", url: "https://www.omm.com/insights/alerts-publications/texas-uniform-commercial-code-updated-to-recognize-cryptocurrency/" },
  { id: 18, label: "Buckley LLP — Texas enacts Money Services Modernization Act (SB 895, June 2023)", url: "https://buckleyfirm.com/blog/2023-06-09/texas-enacts-money-services-modernization-act" },
  { id: 19, label: "Forvis Mazars — Severance taxes saved by diverting flared gas to Bitcoin mining (HB 591, September 2023)", url: "https://www.forvismazars.us/forsights/2023/09/severance-taxes-saved-by-diverting-flared-gas-to-bitcoin-mining" },
  { id: 20, label: "PR Newswire — Texas passes proof-of-reserves legislation (HB 1666, May 2023)", url: "https://www.prnewswire.com/news-releases/texas-passes-proof-of-reserves-legislation-301827948.html" },
  { id: 21, label: "Hunton — Texas establishes Strategic Bitcoin Reserve (SB 21)", url: "https://www.hunton.com/blockchain-legal-resource/texas-establishes-strategic-bitcoin-reserve" },
  { id: 22, label: "The Block — Governor Greg Abbott signs strategic Bitcoin reserve bill into law (June 2025)", url: "https://www.theblock.co/post/359089/texas-governor-greg-abbott-signs-strategic-bitcoin-reserve-bill-into-law" },
];

export const lawMilestones: LawMilestone[] = [
  {
    id: "sm-1037",
    date: "2014-04-03",
    dateLabel: "April 3, 2014",
    title: "Supervisory Memorandum 1037 — Bitcoin is not 'money'",
    actor: "Texas Department of Banking",
    summary:
      "On April 3, 2014, the Texas Department of Banking issued Supervisory Memorandum 1037, holding that Bitcoin is not 'money' under the Texas Money Services Act. Selling your own bitcoin, or exchanging crypto for crypto, does not by itself require a Texas money-transmission license.",
    outcome: "guidance",
    sourceIds: [10, 11, 13],
  },
  {
    id: "hb-1576-2021",
    date: "2021-06-07",
    dateLabel: "June 7, 2021",
    title: "HB 1576 — Work Group on Blockchain Matters",
    actor: "87th Legislature",
    summary:
      "Governor Greg Abbott signed House Bill 1576 on June 7, 2021, creating the 16-member Texas Work Group on Blockchain Matters, effective September 1, 2021. The group was charged with delivering a master plan for the state's blockchain industry by October 31, 2022.",
    outcome: "enacted",
    sourceIds: [4],
  },
  {
    id: "in-2021-03",
    date: "2021-06-10",
    dateLabel: "June 10, 2021",
    title: "Industry Notice 2021-03 — banks may custody Bitcoin",
    actor: "Texas Department of Banking",
    summary:
      "On June 10, 2021, the Texas Department of Banking issued Industry Notice 2021-03, confirming that Texas state-chartered banks may provide virtual currency custody services under existing authority in Texas Finance Code § 32.001.",
    outcome: "guidance",
    sourceIds: [12, 16],
  },
  {
    id: "hb-4474-2021",
    date: "2021-06-15",
    dateLabel: "June 15, 2021",
    title: "HB 4474 — virtual currency enters the Texas UCC",
    actor: "87th Legislature",
    summary:
      "Signed June 15, 2021 and effective September 1, 2021, House Bill 4474 wrote virtual currency into the Texas Uniform Commercial Code — defining it, establishing what 'control' of it means, and clarifying how security interests in it are perfected.",
    outcome: "enacted",
    sourceIds: [3, 17],
  },
  {
    id: "sb-1751-2023",
    date: "2023-04-12",
    dateLabel: "April 12, 2023",
    title: "SB 1751 — the demand-response cap that died",
    actor: "88th Legislature",
    summary:
      "Senate Bill 1751 would have capped Bitcoin miners' share of ERCOT demand-response programs at 10% and stripped their tax abatements; it passed the Texas Senate 30–1 on April 12, 2023. It then died in a Texas House committee in May 2023, never reaching a floor vote.",
    outcome: "died",
    sourceIds: [5, 14, 15],
  },
  {
    id: "sb-895-2023",
    date: "2023-05-29",
    dateLabel: "May 29, 2023",
    title: "SB 895 — Money Services Modernization Act",
    actor: "88th Legislature",
    summary:
      "Signed May 29, 2023 and effective September 1, 2023, Senate Bill 895 replaced Texas's money-transmission statute with the multistate Money Services Modernization Act framework — the modern law under which the Department of Banking's virtual-currency guidance now operates.",
    outcome: "enacted",
    sourceIds: [6, 18],
  },
  {
    id: "hb-591-2023",
    date: "2023-06-02",
    dateLabel: "June 2, 2023",
    title: "HB 591 — the flared-gas mining tax exemption",
    actor: "88th Legislature",
    summary:
      "Signed June 2, 2023 and effective September 1, 2023, House Bill 591 exempts natural gas that would otherwise be vented or flared from severance tax when it is consumed near the wellhead — a direct invitation to the off-grid Bitcoin miners of the Permian Basin.",
    outcome: "enacted",
    sourceIds: [7, 19],
  },
  {
    id: "hb-1666-2023",
    date: "2023-06-09",
    dateLabel: "June 9, 2023",
    title: "HB 1666 — proof of reserves becomes law",
    actor: "88th Legislature",
    summary:
      "Signed June 9, 2023 and effective September 1, 2023, House Bill 1666 requires digital asset service providers operating in Texas to segregate customer funds from company assets and to file auditor-attested proof-of-reserves reports with the Texas Department of Banking.",
    outcome: "enacted",
    sourceIds: [8, 20],
  },
  {
    id: "sb-21-2025",
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "SB 21 — the Texas Strategic Bitcoin Reserve",
    actor: "89th Legislature",
    summary:
      "Governor Greg Abbott signed Senate Bill 21 on June 20, 2025 — effective immediately — making Texas the first state with a standalone, publicly funded Strategic Bitcoin Reserve. The reserve sits outside the state treasury under the Texas Comptroller and may hold only digital assets averaging at least $500 billion in market capitalization over 24 months, a bar only Bitcoin clears.",
    outcome: "enacted",
    sourceIds: [1, 21, 22],
  },
  {
    id: "hb-1056-2025",
    date: "2025-06-22",
    dateLabel: "June 22, 2025",
    title: "HB 1056 — gold and silver go digital",
    actor: "89th Legislature",
    summary:
      "Signed June 22, 2025, House Bill 1056 recognizes gold and silver specie as Texas legal tender and directs a transactional currency backed by metal held in the Texas Bullion Depository. The act takes effect May 1, 2027, except Section 2116.101, which takes effect September 1, 2026.",
    outcome: "enacted",
    sourceIds: [2, 9],
  },
];
