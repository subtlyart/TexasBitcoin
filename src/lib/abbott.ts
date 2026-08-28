// Greg Abbott and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the site. The record is drawn from
// the Governor's office (gov.texas.gov), the Texas Legislature's bill
// histories, and Abbott's own public statements as reported by reputable
// outlets - the Texas Tribune for the 2014 first, the trade press for the
// signings, Bloomberg for the grid thesis. The honest counterweight is the
// June 2026 ratepayer directive: the same governor who recruited the miners
// ordering that large loads fund their own grid costs. That is not a
// reversal - it is the thesis maturing - and the page says so with dates.
//
// Verified August 2026. Re-verify after the PUC/ERCOT joint memorandum
// (ordered by July 17, 2026) produces rules, and when the 90th Legislature
// convenes January 2027.

export const ABBOTT_LAST_VERIFIED = "August 28, 2026";

export interface AbbottSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Governor's office and the Legislature's bill
// histories, then the Texas Tribune and Bloomberg, then trade press.
export const abbottSources: AbbottSource[] = [
  { id: 1, label: "Texas Tribune - Abbott to Start Accepting Bitcoin Donations (April 17, 2014): the gubernatorial campaign takes bitcoin as in-kind contributions", url: "https://www.texastribune.org/2014/04/17/abbott-start-accepting-bitcoin-donations/" },
  { id: 2, label: "GregAbbott.com - Abbott Campaign Accepts Bitcoin: \"The spirit of Bitcoin embodies the free market principles that make Texas a leader in innovation and entrepreneurship\"", url: "https://www.gregabbott.com/abbott-campaign-accepts-bitcoin/" },
  { id: 3, label: "Hunton - Texas Legislature Proposes Significant Virtual Currency Bill: Governor Abbott tweets \"Count me in as a crypto law proposal supporter\" (March 2021)", url: "https://www.hunton.com/blockchain-legal-resource/texas-legislature-proposes-significant-virtual-currency-bill" },
  { id: 4, label: "Cointelegraph - Cryptocurrencies now recognized under commercial law in Texas: Abbott signs HB 4474 (virtual-currency UCC amendments), effective September 1, 2021", url: "https://cointelegraph.com/news/cryptocurrencies-now-legally-recognized-under-commercial-law-in-texas" },
  { id: 5, label: "Texas Legislature Online - HB 1576 (87R) bill history: the blockchain working group, signed June 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB1576" },
  { id: 6, label: "Texas Tribune - Texas Republicans want to make the state the center of the cryptocurrency universe (October 28, 2021)", url: "https://www.texastribune.org/2021/10/28/texas-republicans-blockchain-bitcoin/" },
  { id: 7, label: "Bloomberg - Texas Governor Eyes Bitcoin Mining to Fortify the Electric Grid (January 27, 2022): the post-Uri controllable-load thesis, the Austin gathering of crypto dealmakers", url: "https://www.bloomberg.com/news/articles/2022-01-27/texas-governor-eyes-bitcoin-mining-to-fortify-the-electric-grid" },
  { id: 8, label: "Decrypt - Texas Governor Greg Abbott Is Inviting Bitcoin Miners to Stabilize Electrical Grid (November 2021)", url: "https://decrypt.co/91432/texas-governor-greg-abbott-inviting-bitcoin-miners-stabilize-electrical-grid" },
  { id: 9, label: "Texas Legislature Online - SB 21 (89R) bill history: the Texas Strategic Bitcoin Reserve, signed by Abbott June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 10, label: "The Block - Texas Governor Greg Abbott signs strategic Bitcoin reserve bill into law (June 2025)", url: "https://www.theblock.co/post/359089/texas-governor-greg-abbott-signs-strategic-bitcoin-reserve-bill-into-law" },
  { id: 11, label: "Texas Legislature Online - HB 4488 (89R) bill history: shields the reserve from general-revenue sweeps, signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB4488" },
  { id: 12, label: "Office of the Texas Governor - Governor Abbott Directs PUC And ERCOT To Shield Texans From Data Center Infrastructure Costs (June 10, 2026)", url: "https://gov.texas.gov/news/post/governor-abbott-directs-puc-and-ercot-to-shield-texans-from-data-center-infrastructure-costs" },
  { id: 13, label: "Houston Chronicle - Greg Abbott tells PUC, ERCOT not to pass new data center costs to customers (June 2026)", url: "https://www.houstonchronicle.com/politics/texas/article/greg-abbott-tells-puc-ercot-rein-costs-new-data-22299187.php" },
  { id: 14, label: "CoinDesk - Meet the US Politicians Who Are Embracing Bitcoin (May 21, 2014): the early-adopter cohort Abbott joined", url: "https://www.coindesk.com/markets/2014/05/21/meet-the-us-politicians-who-are-embracing-bitcoin" },
  { id: 15, label: "Cointelegraph - Bitcoin For America: Cryptocurrencies In Campaign Finance (~$2,000 in crypto donations to Abbott's 2014 campaign)", url: "https://cointelegraph.com/news/bitcoin-for-america-cryptocurrencies-in-campaign-finance" },
];

export type AbbottTimelineKind = "first" | "law" | "grid" | "reserve" | "steward";

// The arc: earliest statewide official to take bitcoin → the 2021 legal
// foundation → the post-Uri grid thesis → the reserve signature → the
// ratepayer turn.
export interface AbbottEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: AbbottTimelineKind;
  sourceIds: number[];
}

export const abbottTimeline: AbbottEvent[] = [
  {
    date: "2014-04-17",
    dateLabel: "April 17, 2014",
    title: "The first: a gubernatorial campaign takes bitcoin",
    detail:
      "Attorney General Greg Abbott's campaign for governor announces it will accept bitcoin as in-kind contributions - over a decade before any state owned the asset. \"The spirit of Bitcoin embodies the free market principles that make Texas a leader in innovation and entrepreneurship,\" Abbott says. The campaign collects a modest ~$2,000 in crypto, but the signal outlives the sum.",
    kind: "first",
    sourceIds: [1, 2, 15],
  },
  {
    date: "2021-03-29",
    dateLabel: "March 29, 2021",
    title: "“Count me in as a crypto law proposal supporter”",
    detail:
      "As the 87th Legislature weighs the virtual-currency bills, Governor Abbott endorses them publicly on Twitter - \"Count me in as a crypto law proposal supporter\" - invoking the Texas Bullion Depository as precedent for the state leading on hard assets.",
    kind: "law",
    sourceIds: [3],
  },
  {
    date: "2021-06-15",
    dateLabel: "June 2021",
    title: "The legal foundation: HB 4474 and HB 1576 signed",
    detail:
      "Abbott signs House Bill 4474, writing virtual currency into the Texas Uniform Commercial Code - control, rights, and dispute resolution for digital-asset ownership - and House Bill 1576, creating a statewide blockchain working group. Both take effect September 1, 2021. \"Blockchain is a booming industry that Texas needs to be involved in,\" Abbott says, predicting the state \"will be #1 for blockchain & cryptocurrency.\"",
    kind: "law",
    sourceIds: [4, 5],
  },
  {
    date: "2021-10-28",
    dateLabel: "Fall 2021",
    title: "The recruitment: miners as the grid's shock absorber",
    detail:
      "Months after Winter Storm Uri exposed the grid, Abbott gathers dozens of cryptocurrency dealmakers in Austin around a thesis: electricity-hungry Bitcoin miners can shore up ERCOT by buying power when it is abundant and shutting off when Texans need it. Miners begin agreeing to pause operations on request when demand surges.",
    kind: "grid",
    sourceIds: [6, 7, 8],
  },
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "The signature: SB 21 and HB 4488 become law",
    detail:
      "Abbott signs Senate Bill 21, creating the Texas Strategic Bitcoin Reserve - the nation's first standalone, publicly funded state Bitcoin reserve - and House Bill 4488, shielding it from the routine sweeps that pull idle balances into general revenue. The 2014 campaign gesture becomes state balance-sheet policy under the same man's pen.",
    kind: "reserve",
    sourceIds: [9, 10, 11],
  },
  {
    date: "2026-06-10",
    dateLabel: "June 10, 2026",
    title: "The steward's turn: large loads pay their own way",
    detail:
      "Abbott directs the Public Utility Commission and ERCOT to require data centers - the category that includes the state's industrial-scale Bitcoin mines - to fully fund their own electric infrastructure costs rather than pass them to residential ratepayers, with a joint protective-actions memorandum ordered by July 17, 2026. \"Data centers must operate in ways that reduce costs for residential electricity customers,\" the directive reads.",
    kind: "steward",
    sourceIds: [12, 13],
  },
];
