// Phil King and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas Senate for the bio, Texas Legislature Online
// for the bill histories, the enrolled SB 6 text, the Senate Research
// Center analysis, the House Research Organization analysis, and the
// committee record; the Public Utility Commission's own implementation
// deck; the Governor's office for the 2026 directives; and Texas and
// trade press for the numbers and the quotes. King is the grid author of
// the people cluster: he has never given a speech about Bitcoin, and his
// record on it is entirely as the man who wrote the rules the mines run
// under - a 1999 deregulation rookie, three sessions chairing Regulated
// Industries, a coauthor of the 2015 depository and the 2019 blockchain
// work group, the Business and Commerce vice chair who voted both 2023
// mining bills out 11-0, and the author of SB 6, the 2025 large-load law
// that took the registry and the curtailment the miners' fight produced
// and made them the state's policy for every load over 75 megawatts. The
// honest counterweight: the "kill switch" is the constraint miners spent
// 2023 fighting, now law; the new reliability service excludes the
// price-responsive curtailment that is the mining business model; and
// the queue the law was written for grew from 63 to 474 gigawatts anyway,
// until the governor froze it.
//
// Verified September 13, 2026. Re-verify after the PUC's SB 6
// transmission-cost study (due December 31, 2026), the July 2026 joint
// memorandum's legislative recommendations, and when the 90th Legislature
// files large-load bills (from November 9, 2026).

export const KING_LAST_VERIFIED = "September 13, 2026";

export interface KingSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate and the Legislature's own record,
// then the regulator and the Governor, then Texas press, then trade press.
export const kingSources: KingSource[] = [
  { id: 1, label: "Texas Senate - Senator Phil King, District 10: Weatherford; Texas House 1999–2022; Senate 2023–present; Vice-Chair, Business and Commerce; Chair, Homeland and Border Security and Religious Liberty (Select) and Congressional Redistricting (Special); Fort Worth police officer 15 years; attorney", url: "https://senate.texas.gov/member.php?d=10" },
  { id: 2, label: "Wikipedia - Phil King (Texas politician): born February 29, 1956, Weatherford; Dallas Baptist B.A. and MBA; J.D.; Fort Worth police captain; Parker County justice of the peace; House District 61 1999–2023; Senate District 10 from January 10, 2023", url: "https://en.wikipedia.org/wiki/Phil_King_(Texas_politician)" },
  { id: 3, label: "Dallas Morning News, Watchdog - Can a Texas lawmaker who championed electricity deregulation rewire the system to work for consumers? (July 20, 2018): a rookie at the 1999 deregulation vote; three sessions chairing Regulated Industries", url: "https://www.dallasnews.com/news/watchdog/2018/07/20/can-a-texas-lawmaker-who-championed-electricity-deregulation-rewire-the-system-to-work-for-consumers/" },
  { id: 4, label: "Texas Legislature Online - HB 483 (84R) bill history: author Capriglione; coauthors include King (Phil); the Texas Bullion Depository; signed June 19, 2015", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=84R&Bill=HB483" },
  { id: 5, label: "Texas Legislature Online - HB 4517 (86R) bill history: authors Parker, Capriglione, Sanford, King (Phil), Larson; a work group on blockchain matters; sent to Calendars April 29, 2019, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=86R&Bill=HB4517" },
  { id: 6, label: "Texas Legislature Online - Senate Business & Commerce Committee membership, 88R: Chair Schwertner, Vice Chair King; Birdwell, Campbell, Creighton, Johnson, Kolkhorst, Menéndez, Middleton, Nichols, Zaffirini", url: "https://capitol.texas.gov/Committees/MembershipCmte.aspx?LegSess=88R&CmteCode=C510" },
  { id: 7, label: "Texas Legislature Online - SB 1751 (88R) bill history: authors Kolkhorst, Campbell, Nichols; Business & Commerce 11–0 April 4, 2023; passed the Senate April 12; died in House State Affairs", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 8, label: "Texas Legislature Online - SB 1929 (88R) bill history: author Johnson; Business & Commerce 11–0; registration of mining facilities above 75 MW; signed June 9, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1929" },
  { id: 9, label: "FOX 4 - Bitcoin mining, AI data centers increasing demand on Texas power grid, leaders say (June 12, 2024): ERCOT's Vegas to Business and Commerce - about 85,000 MW to 150,000 MW by 2030; Patrick - \"the Wild Wild West of data centers and crypto miners\"", url: "https://www.fox4news.com/news/bitcoin-mining-ai-data-centers-texas-power-grid" },
  { id: 10, label: "Texas Legislature Online - SB 6 (89R) bill history: authors King and Schwertner; coauthors Alvarado, Blanco, Campbell, Creighton, Eckhardt, Hagenbuch, Hughes, Middleton; filed February 12, 2025; Business & Commerce 10–0 March 13; passed the Senate March 19; House State Affairs 12–0 May 23; passed the House May 27; signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 11, label: "Texas Legislature Online - SB 6 (89R) enrolled text: § 37.0561 (75 MW threshold, $100,000 study fee, site control, backup-generation disclosure, ERCOT curtail-or-deploy authority); § 39.170 (remote curtailment during firm load shed for loads interconnected after December 31, 2025; a competitively procured reliability service that excludes price-responsive loads); § 39.169 (net-metering review); § 6 (transmission-cost study by December 31, 2026)", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00006F.htm" },
  { id: 12, label: "Senate Research Center - C.S.S.B. 6 bill analysis: ERCOT projects 130–150 GW of additional load by 2030 against a 2024 peak of 86 GW; four goals - cost allocation, reliability safeguards, credible forecasting, and large loads sharing load shed", url: "https://capitol.texas.gov/tlodocs/89R/analysis/html/SB00006S.htm" },
  { id: 13, label: "Texas Legislature Online - SB 6 witness list, Senate Business & Commerce, February 27, 2025: for - Sierra Club; against - Bill Peacock; on - Texas Blockchain Council (Bratcher), ERCOT (Vegas), PUC, AECT, Data Center Coalition, Lancium", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00006S.htm" },
  { id: 14, label: "House Research Organization - SB 6 bill analysis (May 26, 2025): State Affairs 12–0; Senate final passage March 19, 31–0; the digest of the interconnection standards, the curtailment authority, and expedited processing for flexible loads under 10-year contracts", url: "https://hro.house.texas.gov/pdf/ba89r/sb0006.pdf" },
  { id: 15, label: "McGuireWoods - Texas Senate Bill 6 Significantly Expands Regulatory Oversight Over Large Loads in ERCOT (July 2025): House vote 103–25; the \"kill switch\"; effective on signature", url: "https://www.mcguirewoods.com/client-resources/alerts/2025/7/texas-senate-bill-6-significantly-expands-regulatory-oversight-over-large-loads-in-ercot/" },
  { id: 16, label: "Public Utility Commission of Texas - Texas Senate Bill 6 (NASEO webinar, October 17, 2025): 189 GW of large-load requests, 69% data centers; Projects 58479–58482; forecasting rule by March 2026; the reliability service with 24 hours' notice; Texas RE upgrades \"Disorganized Integration of Large Loads\" to Likely/Major", url: "https://www.naseo.org/Data/Sites/1/media/tknaseo/sb6-puct-17-oct-2025.pdf" },
  { id: 17, label: "Introl - Texas Data Center Bubble: 220 GW in Queue, 7.5 GW Connected (December 13, 2025): 63 GW in December 2024 to 230+ GW; remote disconnect for loads connecting after December 31, 2025", url: "https://introl.com/blog/texas-ercot-220gw-data-center-bubble-december-2025" },
  { id: 18, label: "Houston Chronicle via Yahoo - Hundreds of large data centers want to join the Texas grid (June 8, 2026): King at an April hearing - \"Everywhere we go, people are asking us about data centers and (electricity) costs\"; 418+ GW sought through 2032 against an 85.5 GW record; crypto mines not included in ERCOT's data", url: "https://www.yahoo.com/news/us/articles/exclusive-hundreds-large-data-centers-160000897.html" },
  { id: 19, label: "Community Impact - Gov. Abbott tells PUC, ERCOT to ensure Texas consumers do not foot the bill for data center growth (June 10, 2026): the directive; deadlines July 17 and July 31; SB 6 \"took meaningful steps\"", url: "https://communityimpact.com/austin/central-austin/texas-legislature/2026/06/10/gov-abbott-tells-puc-ercot-to-ensure-texas-consumers-do-not-foot-the-bill-for-data-center-growth/" },
  { id: 20, label: "Phil King - New Regulations on Data Centers (June 11, 2026): SB 6 as \"the nation's first comprehensive legislation regarding data centers\"; agreement with the Governor's directive", url: "https://www.philking.com/author/philking/" },
  { id: 21, label: "Office of the Governor - Governor Abbott Directs Comprehensive Data Center Audit (August 3, 2026): about 474 GW of connection requests, roughly 90% data centers, more than five times the record peak; no project proceeds until audited", url: "https://gov.texas.gov/news/post/governor-abbott-directs-comprehensive-data-center-audit" },
  { id: 22, label: "Texas Tribune - New Texas data center projects frozen until state audits them (August 3, 2026): more than 1,800 projects, 474+ GW; the moratorium applies only inside ERCOT", url: "https://www.texastribune.org/2026/08/03/texas-data-center-project-audit-greg-abbott/" },
  { id: 23, label: "CryptoSlate - Bitcoin miners saved Texas power grid from collapse, but their lucrative pivot to AI is stripping away the emergency brake (2025): SB 6's enforceable curtailment against the miners' price-responsive model", url: "https://cryptoslate.com/bitcoin-miners-saved-the-texas-power-grid-from-collapse-but-their-lucrative-pivot-to-ai-is-stripping-away-the-emergency-brake/" },
  { id: 24, label: "Ballotpedia - Phil King (Texas): re-elected November 5, 2024, 61.71% over Andy Morris; term ends January 9, 2029", url: "https://ballotpedia.org/Phil_King_(Texas)" },
];

export type KingTimelineKind = "path" | "grid" | "law" | "watch";

// The arc: the deregulation rookie → the grid chairman → the large-load
// law → the queue that outran it.
export interface KingEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: KingTimelineKind;
  sourceIds: number[];
}

export const kingTimeline: KingEvent[] = [
  {
    date: "1999-01-12",
    dateLabel: "1999",
    title: "The rookie votes to deregulate the grid",
    detail:
      "Phil King - fifteen years a Fort Worth police officer, a Parker County justice of the peace, a Dallas Baptist MBA and a law degree - enters the Texas House for Weatherford and Parker County and, as a freshman, helps pass the 1999 law that deregulated Texas electricity and built the market ERCOT runs today. He will chair the House committee that regulates that market, Regulated Industries, for three sessions.",
    kind: "path",
    sourceIds: [2, 1, 3],
  },
  {
    date: "2015-06-19",
    dateLabel: "2015 → 2019",
    title: "Two hard-money coauthorships",
    detail:
      "King signs on as a coauthor of Capriglione's HB 483, the Texas Bullion Depository, signed June 19, 2015 - and in March 2019 as a joint author of Parker's HB 4517, the first blockchain work-group bill, which dies in Calendars. Neither is his bill; both put his name on the two lines of Texas hard-money law before he ever wrote one.",
    kind: "path",
    sourceIds: [4, 5],
  },
  {
    date: "2023-01-10",
    dateLabel: "January 2023",
    title: "Senate District 10, and the vice chair's gavel",
    detail:
      "After 24 years in the House, King takes the Senate seat for seven counties west of Fort Worth on January 10, 2023, and Schwertner makes him vice chair of Business and Commerce - the committee that owns the grid. Every Texas mining and reserve bill of the next two sessions will pass through a panel he helps run.",
    kind: "grid",
    sourceIds: [2, 1, 6],
  },
  {
    date: "2023-04-04",
    dateLabel: "April 4, 2023",
    title: "Both mining bills, 11–0",
    detail:
      "His committee votes out Kolkhorst's SB 1751 - the 10% demand-response cap and the abatement ban - and Johnson's SB 1929 - the 75-megawatt registry - on the same day, both unanimously. The Senate passes both on April 12. The House keeps the registry and kills the cap. Two years later King will write the bill that decides what to do with the pieces.",
    kind: "grid",
    sourceIds: [7, 8],
  },
  {
    date: "2024-06-12",
    dateLabel: "June 12, 2024",
    title: "The 150-gigawatt hearing",
    detail:
      "ERCOT's Pablo Vegas tells Business and Commerce that peak demand could go from about 85,000 megawatts to 150,000 by 2030, more than half of it data centers and miners. The Lieutenant Governor answers within days: no \"Wild Wild West of data centers and crypto miners crashing our grid.\" The interim charge that follows is the drafting brief for SB 6.",
    kind: "grid",
    sourceIds: [9, 12],
  },
  {
    date: "2025-02-12",
    dateLabel: "February 12, 2025",
    title: "SB 6 is filed",
    detail:
      "King files the large-load bill with Schwertner as joint author and a low number - the Lieutenant Governor's priority signal. The Senate Research Center states the brief: 130 to 150 gigawatts of new load by 2030 against a 2024 peak of 86; four goals - make large loads pay their interconnection costs, protect reliability, make the forecast credible, and make large loads share load shed with everyone else. At the February 27 hearing the Sierra Club testifies for, one witness against, and the Texas Blockchain Council, ERCOT, the PUC, and the Data Center Coalition register \"on.\"",
    kind: "law",
    sourceIds: [10, 12, 13],
  },
  {
    date: "2025-03-19",
    dateLabel: "March 13–19, 2025",
    title: "10–0, then 31–0",
    detail:
      "Business and Commerce sends SB 6 out 10–0 on March 13; the full Senate passes it 31–0 on March 19. The bill as passed: a 75-megawatt threshold, a $100,000 study fee and proof of site control, disclosure of any duplicate request in another part of Texas, disclosure of on-site backup generation able to carry half the load, and ERCOT authority - after every market tool but frequency response is spent - to order a large load to run its backup or curtail.",
    kind: "law",
    sourceIds: [10, 14, 11],
  },
  {
    date: "2025-05-27",
    dateLabel: "May 23–27, 2025",
    title: "The House, 103–25, and the name that stuck",
    detail:
      "House State Affairs reports the bill 12–0 on May 23 with Representative Ken King as sponsor; the House passes it 103–25 on May 27, with no conference needed. The provision requiring loads interconnected after December 31, 2025 to install equipment that lets ERCOT cut them remotely during firm load shed gets the nickname the law will carry: the kill switch.",
    kind: "law",
    sourceIds: [14, 15, 11],
  },
  {
    date: "2025-06-20",
    dateLabel: "June 20, 2025",
    title: "Signed - the same afternoon as the reserve",
    detail:
      "Abbott signs SB 6, effective immediately, the same day he signs SB 21. The state now owns Bitcoin and has a leash on every load the size of a mine. The register-and-curtail architecture Kolkhorst asked for in 2023 - at 10 megawatts, for miners only - is law at 75 megawatts, for everyone, under King's name.",
    kind: "law",
    sourceIds: [10, 11],
  },
  {
    date: "2025-10-17",
    dateLabel: "October 2025 → March 2026",
    title: "The rules, and the 189-gigawatt queue",
    detail:
      "The Public Utility Commission opens four rulemakings - forecasting criteria to strip \"phantom\" load, interconnection standards, net-metering review, and the new large-load demand-management service with 24 hours' notice that excludes price-responsive loads - and tells regulators the queue holds 189 gigawatts of requests, 69% data centers, about 40% of the nation's electricity. By December it is 230. The Texas Reliability Entity has upgraded \"Disorganized Integration of Large Loads\" to Likely/Major.",
    kind: "watch",
    sourceIds: [16, 17],
  },
  {
    date: "2026-06-10",
    dateLabel: "April → June 2026",
    title: "\"Everywhere we go, people are asking us about data centers\"",
    detail:
      "At an April interim hearing King tells regulators to move faster: \"Everywhere we go, people are asking us about data centers and (electricity) costs and all these things. We need to be able to tell our constituents it's getting done.\" On June 10 the Governor directs the PUC and ERCOT to make data centers pay their full infrastructure cost and to lower residential bills, with memoranda due July 17 and 31; King posts the next day that SB 6 was \"the nation's first comprehensive legislation regarding data centers\" and that he agrees.",
    kind: "watch",
    sourceIds: [18, 19, 20],
  },
  {
    date: "2026-08-03",
    dateLabel: "August 3, 2026",
    title: "The freeze: 474 gigawatts",
    detail:
      "Abbott orders a comprehensive audit of every data center in ERCOT's queue - more than 1,800 projects, about 474 gigawatts, roughly 90% data centers, more than five times the record peak of 91,089 megawatts set July 22 - and says no project moves forward until it is audited. The queue the law was written to discipline grew seven-fold in the twenty months after it passed. King's term runs to January 2029; the 90th Legislature convenes January 12, 2027 with the joint memorandum's recommendations and the PUC's transmission-cost study, due December 31, waiting for him.",
    kind: "watch",
    sourceIds: [21, 22, 11, 24],
  },
];
