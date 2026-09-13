// Tan Parker and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas Senate for the bio, Texas Legislature Online for
// every bill history and the enrolled HB 4474 text, the Department of
// Banking for the custody notice, the work group's own report release, and
// Texas and trade press for the quotes. Parker is the definer of the
// people cluster: before Texas could own Bitcoin, register the mines, or
// ban commingling, it needed a legal definition of the thing, and Parker
// wrote it - HB 4474, the 2021 statute that put "virtual currency" into
// the Texas Uniform Commercial Code - after his 2019 work-group bill died
// in Calendars and before his 2021 one passed. In the Senate he became the
// chamber's most prolific digital-asset filer with the thinnest passage
// record: eight authored bills on the subject across two sessions, none
// enacted, while the House bills he sponsored became law. The honest
// counterweight: the dead-bill ledger, the kiosk bill that died with a
// real cost, and an oil-backed stablecoin bill filed the year before he
// turned up on the advisory board of a company selling one.
//
// Verified September 13, 2026. Re-verify when the 90th Legislature files
// digital-asset bills (from November 9, 2026) and after the 2028 SD-12
// election.

export const PARKER_LAST_VERIFIED = "September 13, 2026";

export interface ParkerSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate and the Legislature's own record,
// then the regulator and the work group, then Texas press, then trade
// press.
export const parkerSources: ParkerSource[] = [
  { id: 1, label: "Texas Senate - Senator Tan Parker, District 12: Flower Mound; Texas House 2007–2023, Senate 2023–present; Chair, Transportation; Senate Republican Caucus chair; technology and private-equity businessman; University of Dallas, London School of Economics", url: "https://senate.texas.gov/member.php?d=12" },
  { id: 2, label: "Wikipedia - Tan Parker: born May 22, 1971, Pittsburgh; House District 63 (2007–2023); House Republican Caucus chair 2015–2018; Senate Majority Leader since January 14, 2025; 2022 primary 71.07%", url: "https://en.wikipedia.org/wiki/Tan_Parker" },
  { id: 3, label: "Texas Monthly - The Best and Worst Legislators 2015: The Best - Representative Tan Parker", url: "https://www.texasmonthly.com/list/the-best-and-worst-legislators-2015/the-best-representative-tan-parker/" },
  { id: 4, label: "Texas Legislature Online - HB 4517 (86R) bill history: authors Parker, Capriglione, Sanford, King, Larson; a work group on blockchain matters; filed March 8, 2019; committee 10–0; sent to Calendars April 29, 2019, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=86R&Bill=HB4517" },
  { id: 5, label: "Texas Crypto Alliance - State Rep. Tan Parker Files Flagship Texas Blockchain Working Group Bill (March 3, 2021): the 2019 bill \"died in the Texas House calendars committee\"", url: "https://texascryptoalliance.wordpress.com/2021/03/03/state-rep-tan-parker-files-flagship-texas-blockchain-working-group-bill/" },
  { id: 6, label: "Texas Legislature Online - HB 1576 (87R) bill history: authors Parker, Capriglione, Bucy, Button, Wilson; Senate sponsor Paxton; the Work Group on Blockchain Matters; signed June 7, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB1576" },
  { id: 7, label: "Texas Legislature Online - HB 4474 (87R) bill history: authors Parker, Anchía, Stephenson, Capriglione, Perez; Senate sponsor Paxton; filed March 12, 2021; committees 9–0 and 9–0; signed June 15, 2021, effective September 1, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 8, label: "Texas Legislature Online - HB 4474 (87R) enrolled text: new Chapter 12, Business & Commerce Code - \"virtual currency\" defined; control as the power to derive the benefits, exclude others, and transfer; perfection by control; a purchaser for value without notice takes free of adverse claims", url: "https://capitol.texas.gov/tlodocs/87R/billtext/html/HB04474F.htm" },
  { id: 9, label: "Bitcoin Magazine - Texas Law Creates Legal Clarity For Bitcoin (May 27, 2021): Parker - \"our state is now poised to take the lead in cryptocurrency for the Nation\"", url: "https://bitcoinmagazine.com/culture/texas-law-legal-clarity-bitcoin" },
  { id: 10, label: "Texas Department of Banking - Industry Notice 2021-03 (June 10, 2021): state-chartered banks may provide virtual currency custody services under Finance Code § 32.001", url: "https://www.dob.texas.gov/sites/default/files/files/news/industrynotices/in2021-03.pdf" },
  { id: 11, label: "PR Newswire - Texas Blockchain Council Spearheads Passage of Two Blockchain Laws (July 14, 2021): Parker and Paxton \"championed both bills\"; Smolenski - \"the opening salvo\"", url: "https://www.prnewswire.com/news-releases/texas-blockchain-council-spearheads-passage-of-two-blockchain-laws-301333162.html" },
  { id: 12, label: "Texas Monthly - Amid a Bitcoin Boom, Texas Leaders Get Cozier With Cryptocurrency (April 30, 2021): \"We as an American people have to engage with these digital currencies\"", url: "https://www.texasmonthly.com/news-politics/bitcoin-cryptocurrency-texas-blockchain-leader/" },
  { id: 13, label: "Texas Tribune - Texas Republicans want to make the state the center of the cryptocurrency universe (October 28, 2021): the October 8 summit; Parker - \"pioneers on the front lines of an extraordinarily bright new future\"; Texas the third state to amend its UCC", url: "https://www.texastribune.org/2021/10/28/texas-republicans-blockchain-bitcoin/" },
  { id: 14, label: "SMU Dedman School of Law - Texas Work Group on Blockchain Matters Releases 2022 Legislative Report and Master Plan (November 15, 2022): 84 pages; chair Carla Reyes; Parker a Speaker appointee", url: "https://www.smu.edu/law/news-events/2022/texas-workgroup-on-blockchain-matters" },
  { id: 15, label: "Texas Tribune - Texas senators draw lots to determine how long their terms will be (January 11, 2023): Parker draws a two-year term", url: "https://www.texastribune.org/2023/01/11/texas-senate-2023-terms/" },
  { id: 16, label: "Texas Legislature Online - Bills authored by Sen. Parker, 88R: SB 770 (commingling), SB 925 (blockchain UCC filings), SB 1558 (gold and silver legal tender), SJR 67 (medium of exchange)", url: "https://capitol.texas.gov/reports/report.aspx?ID=author&LegSess=88R&Code=A1355" },
  { id: 17, label: "Texas Legislature Online - SB 770 (88R) bill history: author Parker; commingling of funds by digital asset service providers; heard April 13, 2023, left pending in Business & Commerce", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB770" },
  { id: 18, label: "Texas Legislature Online - HB 1666 (88R) bill history: author Capriglione, Senate sponsor Parker; the commingling ban; signed June 9, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1666" },
  { id: 19, label: "Community Impact - Tan Parker wins race for State Senate, District 12 seat (November 5, 2024): 61.54% to 38.46%; all of Wise County and parts of Denton, Dallas, and Tarrant", url: "https://communityimpact.com/dallas-fort-worth/frisco/election/2024/11/05/tan-parker-wins-race-for-state-senate-district-12-seat/" },
  { id: 20, label: "Tan Parker - Senator Tan Parker Elected Chair of Texas Senate Republican Caucus (January 7, 2025): unanimous", url: "https://www.tanparker.com/tan-parker-elected-chair-texas-senate-republican-caucus/" },
  { id: 21, label: "Texas Legislature Online - SB 21 (89R) bill history: author Schwertner; coauthors Hinojosa, Parker, West; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 22, label: "Tan Parker - Senate Bill 21, the Texas Strategic Bitcoin Reserve (March 8, 2025): \"Bitcoin is a recognized asset, and Texas is taking action to secure our future\"", url: "https://www.tanparker.com/senate-bill-21-the-texas-strategic-bitcoin-reserve/" },
  { id: 23, label: "Texas Legislature Online - Bills authored by Sen. Parker, 89R: SB 1705 (kiosks), SB 1941 and SB 2174 (digital asset service provider reports and audits), SJR 55 (medium of exchange), SB 2922 (oil-backed stablecoin), SB 1700, SB 1964, SB 2490 (artificial intelligence)", url: "https://capitol.texas.gov/reports/report.aspx?ID=author&LegSess=89R&Code=A1355" },
  { id: 24, label: "Texas Legislature Online - SB 1705 (89R) bill history: author Parker, House sponsor Plesa; virtual currency kiosks; passed the Senate May 15, 2025; placed on the House General State Calendar May 27, 2025, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1705" },
  { id: 25, label: "Texas Legislature Online - SJR 55 (89R) bill history: author Parker; the right to own, hold, and use a mutually agreed medium of exchange; referred to Business & Commerce February 28, 2025, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SJR55" },
  { id: 26, label: "Texas Legislature Online - SB 2922 (89R) bill history: author Parker; issuance and regulation of an oil-backed stablecoin; filed March 14, 2025; referred to Business & Commerce April 7, 2025, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB2922" },
  { id: 27, label: "Texas Legislature Online - SB 2174 (89R) bill history: author Parker; reporting and auditing for digital asset service providers; companion HB 4233 by Capriglione; referred March 24, 2025, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB2174" },
  { id: 28, label: "Texas Legislature Online - HB 150 (89R) bill history: author Capriglione, Senate sponsor Parker; the Texas Cyber Command; signed June 2, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB150" },
  { id: 29, label: "Texas Legislature Online - HJR 175 (89R) bill history: authors Gerdes, Bumgarner, Leo Wilson; Senate sponsor Parker; passed the House; left pending in Senate Business & Commerce May 15, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HJR175" },
  { id: 30, label: "Texas Senate, Office of Senator Parker - Senator Tan Parker applauds signing of SB 1057 (May 20, 2025): the capital-markets package with HJR 4, SB 29, SB 1058; \"Texas is putting Delaware and New York on notice\"; the Texas Stock Exchange's thanks", url: "https://senate.texas.gov/members/d12/press/en/p20250520a.pdf" },
  { id: 31, label: "Texas Tribune via KSAT - Texas oil and gas regulator Wayne Christian peddles oil-backed crypto coin (April 16, 2026): Energy Substantiation's $WTIC; Parker named to the company's advisory board; his office did not respond", url: "https://www.ksat.com/news/texas/2026/04/16/texas-oil-and-gas-regulator-wayne-christian-peddles-oil-backed-crypto-coin/" },
  { id: 32, label: "GlobeNewswire via Yahoo Finance - MazeBolt Appoints Tan Parker to Its Board of Directors (July 22, 2026)", url: "https://finance.yahoo.com/technology/ai/articles/mazebolt-appoints-tan-parker-board-175400966.html" },
];

export type ParkerTimelineKind = "path" | "definition" | "senate" | "watch";

// The arc: the caucus chairman → the definition → the Senate's filer →
// the open items.
export interface ParkerEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: ParkerTimelineKind;
  sourceIds: number[];
}

export const parkerTimeline: ParkerEvent[] = [
  {
    date: "2007-01-09",
    dateLabel: "January 2007",
    title: "The Flower Mound businessman takes House District 63",
    detail:
      "Tan Parker - University of Dallas, the London School of Economics, a career in technology and private equity that began in his family's restaurant business - enters the Texas House for southern Denton County. By 2015 his colleagues make him chair of the House Republican Caucus and Texas Monthly names him a Best Legislator for running a productive chamber while working across the aisle.",
    kind: "path",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2019-04-29",
    dateLabel: "March → April 2019",
    title: "HB 4517: the work group that died in Calendars",
    detail:
      "Parker files the first Texas blockchain bill, a work group on blockchain matters, with Capriglione among the joint authors. It clears Pensions, Investments and Financial Services 10–0 and is sent to the Calendars Committee on April 29, 2019, where it is never set for a floor vote. The idea survives the session; the bill does not.",
    kind: "definition",
    sourceIds: [4, 5],
  },
  {
    date: "2021-04-30",
    dateLabel: "March → April 2021",
    title: "Two bills, one argument",
    detail:
      "Parker refiles the work group as HB 1576 and files HB 4474, the bill that writes \"virtual currency\" into the Texas Uniform Commercial Code. \"We as an American people have to engage with these digital currencies,\" he tells Texas Monthly. \"They are instrumentally important to the economic and, I would argue, national security interest of the United States.\" Senator Angela Paxton carries both in the Senate.",
    kind: "definition",
    sourceIds: [6, 7, 12, 11],
  },
  {
    date: "2021-06-15",
    dateLabel: "June 7–15, 2021",
    title: "The definition becomes law",
    detail:
      "Abbott signs HB 1576 on June 7 and HB 4474 on June 15, effective September 1. Between them, on June 10, the Department of Banking issues Industry Notice 2021-03: state-chartered banks may custody virtual currency. \"Our state is now poised to take the lead in cryptocurrency for the Nation by offering a comprehensive framework for digital currency,\" Parker says. Texas is the third state to amend its UCC for the asset.",
    kind: "definition",
    sourceIds: [6, 7, 10, 9, 13],
  },
  {
    date: "2021-10-08",
    dateLabel: "October 8, 2021",
    title: "\"Pioneers on the front lines\"",
    detail:
      "At the first Texas Blockchain Summit in Austin - 700 people, Cruz and Abbott on the program - Parker tells the room: \"You guys are pioneers on the front lines of an extraordinarily bright new future,\" and predicts the technology's impact will exceed the internet's. The Texas Blockchain Council calls him and Paxton the champions of its first two laws.",
    kind: "definition",
    sourceIds: [13, 11],
  },
  {
    date: "2022-11-15",
    dateLabel: "November 15, 2022",
    title: "The work group reports",
    detail:
      "The 16-member Work Group on Blockchain Matters that HB 1576 created - chaired by SMU's Carla Reyes, with Parker among Speaker Phelan's appointees alongside Lee Bratcher - delivers its 84-page legislative report and master plan: commercial contracts, digital identity, DAOs, education, energy, finance, government, records. The document is the agenda the next two sessions draw from.",
    kind: "definition",
    sourceIds: [14, 6],
  },
  {
    date: "2023-01-11",
    dateLabel: "January 2023",
    title: "Senate District 12, and a two-year straw",
    detail:
      "Parker moves to the Senate for Wise County and parts of Denton, Dallas, and Tarrant, and draws a two-year term in the post-redistricting lottery. He files four digital-asset and hard-money bills in his first session - SB 770 on commingling, SB 925 on blockchain UCC filings, SB 1558 on gold and silver as legal tender, SJR 67 on a right to a medium of exchange - and none leaves committee. The commingling ban becomes law anyway as Capriglione's HB 1666, with Parker as Senate sponsor, signed June 9, 2023.",
    kind: "senate",
    sourceIds: [15, 16, 17, 18],
  },
  {
    date: "2025-01-14",
    dateLabel: "November 2024 → January 2025",
    title: "Re-elected, then Majority Leader",
    detail:
      "Parker wins a full four-year term with 61.54% on November 5, 2024. On January 7, 2025 the Republican caucus elects him chair unanimously; on January 14 he becomes Senate Majority Leader. Every digital-asset bill of the 89th session now passes through the desk of a senator who wrote the definition.",
    kind: "senate",
    sourceIds: [19, 20, 2],
  },
  {
    date: "2025-03-08",
    dateLabel: "February → March 2025",
    title: "Coauthor of the reserve, author of eight more",
    detail:
      "Parker signs on as a coauthor of Schwertner's SB 21. \"Bitcoin is a recognized asset, and Texas is taking action to secure our future,\" he writes after the Senate vote. His own filings that spring: SB 1705 on virtual currency kiosks, SB 1941 and SB 2174 on digital-asset service provider reporting and audits, SJR 55 on a right to a medium of exchange, SB 2922 to license an oil-backed stablecoin, and three artificial-intelligence bills.",
    kind: "senate",
    sourceIds: [21, 22, 23, 26],
  },
  {
    date: "2025-06-02",
    dateLabel: "May → June 2025",
    title: "The ledger closes: sponsored bills pass, authored bills die",
    detail:
      "SB 1705, the kiosk bill, passes the Senate May 15 and dies on the House General State Calendar. SJR 55, SB 2174, and SB 2922 never leave Business and Commerce. What passes carries his name as Senate sponsor: HB 150, the Texas Cyber Command, signed June 2; SB 1057, his own capital-markets bill, signed May 20 - \"Texas is putting Delaware and New York on notice.\" HJR 175, the House's medium-of-exchange amendment, is left pending in committee with Parker as sponsor. SB 21 is signed June 20 with his name among the coauthors.",
    kind: "senate",
    sourceIds: [24, 25, 27, 26, 28, 30, 29, 21],
  },
  {
    date: "2026-04-16",
    dateLabel: "April 16, 2026",
    title: "The oil-backed coin, and the advisory board",
    detail:
      "The Texas Tribune reports that Railroad Commissioner Wayne Christian is promoting Energy Substantiation's $WTIC, a token pegged to barrels of crude - and that Parker, a member of the Senate Natural Resources Committee who filed the oil-backed stablecoin bill a year earlier, is listed on the company's advisory board. His Capitol office does not respond.",
    kind: "watch",
    sourceIds: [31, 26],
  },
  {
    date: "2026-07-22",
    dateLabel: "July 22, 2026",
    title: "A cybersecurity board seat",
    detail:
      "MazeBolt, a DDoS-testing company, names the sitting Majority Leader to its board of directors, citing the Cyber Command he carried. His Senate seat is not on the ballot until 2028; the 90th Legislature convenes January 12, 2027 with the work group's unfinished agenda, and his own dead bills, waiting to be refiled.",
    kind: "watch",
    sourceIds: [32, 19],
  },
];
