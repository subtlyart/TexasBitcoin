// Ken King and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas House and the Legislative Reference Library for
// the bio and committees, Texas Legislature Online for every bill history
// and author report, the House Journal for every record vote and the
// printed legislative-intent exchange, the House Research Organization for
// the bill analysis, the committee's own minutes and hearing notices, and
// Texas press for the quotes. Ken King is the House half of the large-load
// law: Senate Bill 6 was Phil King's and Schwertner's, and it became the
// statute Texas has because the chairman of House State Affairs - a
// third-generation oilfield-service contractor from Canadian, in the
// Panhandle - substituted it in committee, rewrote it on the floor with a
// seventeen-item amendment adopted 136–3, and put the legislative intent
// in the journal by hand. He has never authored a digital-asset bill and
// has never said the word bitcoin on the record; he has voted yea on every
// one that reached the floor, including the reserve twice. The honest
// counterweight: the thin Bitcoin record beside the heavy grid one, the
// oilfield business beside the grid chair, and the primary he nearly lost.
//
// Verified September 24, 2026. Re-verify after the November 3, 2026
// general election and when House State Affairs files its interim report
// on data centers and SB 6 implementation.

export const KENKING_LAST_VERIFIED = "September 24, 2026";

export interface KenKingSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the House and the Legislature's own record,
// then the regulators, then Texas press, then the watchdogs.
export const kenKingSources: KenKingSource[] = [
  { id: 1, label: "Texas House of Representatives - Representative Ken King, District 88: biography; nineteen counties in the Panhandle and South Plains; Canadian ISD board president; Hemphill County Appraisal District chair; Chair, State Affairs", url: "https://house.texas.gov/members/2455/biography" },
  { id: 2, label: "Legislative Reference Library - Ken King, member profile: sessions 83R–89R; committees by session - 85R State Affairs (member); 87R Culture, Recreation and Tourism (chair); 88R Licensing and Administrative Procedures (chair), Panhandle Wildfires (chair); 89R State Affairs (chair)", url: "https://lrl.texas.gov/legeLeaders/members/memberdisplay.cfm?memberID=5744" },
  { id: 3, label: "Texas Policy Research - legislative directory, Rep. Ken King: president, Black Gold Pump and Supply; vice president, King Well Service and K&S Leasing; co-owner, Box K Cattle; API, IPAA, Panhandle Producers and Royalty Owners", url: "https://www.texaspolicyresearch.com/legislative-directory-texas-house-of-representatives/texas-house-of-representatives/state-rep-ken-king/" },
  { id: 4, label: "Ballotpedia - Ken King: 2018 primary 50.5%, general 83.7%; 2022 primary 64.7%; 2024 primary 77.6%; 2026 primary March 3, 53.9% to 46.1% over John Browning", url: "https://ballotpedia.org/Ken_King" },
  { id: 5, label: "Wikipedia - Ken King (politician): born December 28, 1971, Canadian, Texas; oil and gas businessman; 2012 runoff over Rep. Jim Landtroop 54%–46%", url: "https://en.wikipedia.org/wiki/Ken_King_(politician)" },
  { id: 6, label: "Texas Tribune via Gilmer Mirror - Winners and losers from the Texas House speaker's race (January 15–16, 2025): King among the Panhandle members behind Burrows; \"a level of influence we have never experienced before\"", url: "https://www.gilmermirror.com/2025/01/16/winners-and-losers-from-the-texas-house-speakers-race/" },
  { id: 7, label: "Texas Legislature Online - SB 6 (89R) bill history: authors King (Phil), Schwertner et al.; House sponsor King (Ken); Senate 31–0 March 19, 2025; House State Affairs 12–0; House passed May 27, 2025; Senate concurred May 29; signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 8, label: "House State Affairs Committee minutes - May 23, 2025, 3:45 p.m.: King lays out SB 6, offers a complete committee substitute, adopted without objection; reported favorably 12 ayes, 0 nays, 3 absent", url: "https://capitol.texas.gov/tlodocs/89R/minutes/pdf/C4502025052315451.PDF" },
  { id: 9, label: "House Research Organization - bill analysis, CSSB 6 by King (May 26, 2025): 75 MW threshold; $100,000 study fee; site control; backup-generation disclosure; ERCOT authority to direct deployment or curtailment; mandatory curtailment equipment for loads interconnected after December 31, 2025; large-load demand-reduction service; 4CP review by December 31, 2026", url: "https://hro.house.texas.gov/pdf/ba89r/sb0006.pdf" },
  { id: 10, label: "Texas Legislature Online - SB 6 (89R) House floor amendment 1 by King (May 26, 2025): seventeen items - curtailment directive narrowed to customers with on-site backup generation; expedited-interconnection section struck; net-metering review moved from an ERCOT decision to an ERCOT 120-day study and a PUC 60-day decision; customers held harmless", url: "https://capitol.texas.gov/tlodocs/89R/amendments/pdf/SB00006H21.PDF" },
  { id: 11, label: "Texas House Journal - May 26, 2025 (74th day), pp. 6221–6227: Anchía amendment to King's adopted 108–19; King amendment 1 as amended adopted 136–3; Raymond amendment adopted 100–40; CSSB 6 passed to third reading 117–24–1; the Ashby–King legislative-intent exchange", url: "https://journals.house.texas.gov/hjrnl/89r/pdf/89RDAY74FINAL.PDF" },
  { id: 12, label: "Texas House Journal - May 27, 2025 (75th day), p. 6397: SB 6 passed on third reading 103–25–2; King yea", url: "https://journals.house.texas.gov/hjrnl/89r/pdf/89RDAY75FINAL.PDF" },
  { id: 13, label: "Community Impact - Texas House OKs bills aimed at strengthening grid, water infrastructure (May 26–27, 2025): King - \"single customers coming to Texas with an electric demand that surpasses the size of cities' needs\"; the Valley's three gigawatts against Stargate's projected six", url: "https://communityimpact.com/south-central-austin/texas-legislature/texas-house-oks-bills-aimed-at-strengthening-grid-water-infrastructure/" },
  { id: 14, label: "Texas Tribune - Texas lawmakers aim to strengthen grid oversight as data centers and crypto mines multiply (May 25–29, 2025): King - \"clear rules where large load customers that want to come to Texas know what they're getting when they get here\"; the House removed Darby's fast-track and added Raymond's amendment", url: "https://www.texastribune.org/2025/05/25/texas-electric-grid-energy-oversight/" },
  { id: 15, label: "Texas Legislature Online - Bills authored by Rep. King, 89R: HB 143, HB 144, HB 145 (well-site power lines, pole inspection, wildfire-mitigation plans), HB 3824 (battery storage fire safety), HB 5323 (Texas Energy Waste Advisory Committee); none on digital assets, mining, or data centers", url: "https://capitol.texas.gov/Reports/Report.aspx?LegSess=89R&ID=author&Code=A2455" },
  { id: 16, label: "Texas Legislature Online - Bills sponsored by Rep. King, 89R: thirteen, including SB 3 (hemp, vetoed), SB 6, and SB 1252 (municipal limits on residential backup power)", url: "https://capitol.texas.gov/Reports/Report.aspx?LegSess=89R&ID=sponsor&Code=A2455" },
  { id: 17, label: "Texas House Journal - April 23, 2021: HB 1576 (blockchain work group) passed on Local and Consent, 126–20–2; King not among the noes", url: "https://journals.house.texas.gov/hjrnl/87r/pdf/87RDAY32FINAL.PDF" },
  { id: 18, label: "Texas House Journal - May 11, 2021: HB 4474 (virtual currency in the UCC) passed on Local and Consent, 126–17–2; King not among the noes", url: "https://journals.house.texas.gov/hjrnl/87r/pdf/87RDAY45FINAL.PDF" },
  { id: 19, label: "Texas House Journal - April 20, 2023: HB 1666 (commingling ban) passed 148–0–1; King yea", url: "https://journals.house.texas.gov/hjrnl/88r/pdf/88RDAY45FINAL.PDF" },
  { id: 20, label: "Texas House Journal - May 22, 2023: SB 1929 (mining-facility registration) passed 140–5–1; King yea", url: "https://journals.house.texas.gov/hjrnl/88r/pdf/88RDAY68FINAL.PDF" },
  { id: 21, label: "Texas Legislature Online - SB 1751 (88R) bill history: referred to House State Affairs April 24, 2023, never heard; King was not a member of that committee in 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 22, label: "Texas House Journal - May 21, 2025, p. 5478: SB 21 (Texas Strategic Bitcoin Reserve) passed 101–42–2; King yea", url: "https://journals.house.texas.gov/hjrnl/89r/pdf/89RDAY69FINAL.PDF" },
  { id: 23, label: "Texas House Journal - May 29, 2025: SB 21 conference report adopted 110–25–2; King yea; Senate concurrence in SB 6", url: "https://journals.house.texas.gov/hjrnl/89r/pdf/89RDAY77FINAL.PDF" },
  { id: 24, label: "Texas Legislature Online - HB 1056 (89R) actions: referred to State Affairs March 7, 2025; heard March 26; reported April 23; passed the House May 2, 2025, 89–45–1, King yea", url: "https://capitol.texas.gov/BillLookup/Actions.aspx?LegSess=89R&Bill=HB1056" },
  { id: 25, label: "Texas House Journal - May 9, 2025: HJR 175 (right to a medium of exchange) adopted 126–13–1; King yea", url: "https://journals.house.texas.gov/hjrnl/89r/pdf/89RDAY60FINAL.PDF" },
  { id: 26, label: "House State Affairs Committee - hearing notice, April 9, 2026, with the Speaker's interim charge: data centers, SB 6 implementation, ERCOT's Large Load Batch Study Process, co-located resources and grid resilience", url: "https://capitol.texas.gov/tlodocs/89R/schedules/pdf/C4502026040910001.PDF" },
  { id: 27, label: "ERCOT - Large Load Update, House State Affairs hearing, April 9, 2026: approximately 410 GW of large loads seeking interconnection, about 87% of them data centers; batch studies roughly every six months", url: "https://www.ercot.com/files/docs/2026/04/09/ERCOTLargeLoadUpdate-April9HouseStateAffairsHearing.pdf" },
  { id: 28, label: "Texas Impact - House committee hosts data center hearing (April 14, 2026): King - \"This hearing is only the beginning of a larger conversation as the Legislature prepares to develop a policy approach to incorporating the expanding data center industry into the state\"", url: "https://texasimpact.substack.com/p/house-committee-hosts-data-center" },
  { id: 29, label: "House State Affairs Committee - hearing notice, August 19, 2026: data centers (public and invited testimony) and 765-kV transmission", url: "https://capitol.texas.gov/tlodocs/89R/schedules/html/C4502026081908001.htm" },
  { id: 30, label: "Texas Tribune - Texas House meeting on data centers and transmission lines draws backlash (August 19, 2026): King - \"We're talking about really a routing issue\"; \"a lot of the ideas that are proposed to me kind of erode private property rights\"", url: "https://www.texastribune.org/2026/08/19/texas-house-meeting-data-centers-transmission-lines-backlash/" },
  { id: 31, label: "Texas Scorecard - Lawmaker highlights flawed transmission line application process and late-noticed landowners (August 25, 2026): King's August 24 letter to ERCOT and the PUC - \"legislative guardrails\"; \"West Texas and the Permian Basin need power, but not built on the backs of thousands of farmers and ranchers\"", url: "https://texasscorecard.com/state/lawmaker-highlights-flawed-transmission-line-application-process-and-late-noticed-landowners/" },
  { id: 32, label: "The Texan - State Rep. Ken King secures Republican vote in primary re-election bid against John Browning (March 3, 2026): Reps. Virdell and Tinderholt filmed ads against him; Speaker Burrows campaigned for him", url: "https://thetexan.news/elections/state-rep-ken-king-secures-republican-vote-in-primary-re-election-bid-against-john-browning/article_6635c93a-41bd-4ef8-baa0-d5730d7ec2ba.html" },
  { id: 33, label: "Texas Scorecard - Casino-backed PAC launches TV blitz to defend Ken King (February 19, 2026): $246,000 from the Texas Defense PAC", url: "https://texasscorecard.com/state/casino-backed-pac-launches-tv-blitz-to-defend-ken-king/" },
  { id: 34, label: "Texans for Fiscal Responsibility - Fiscal Responsibility Index, Ken King, 2025: 55, an F, the seventh consecutive failing grade", url: "https://index.texastaxpayers.com/legislators/ken-king/2025-index" },
  { id: 35, label: "Ballotpedia - Texas House of Representatives District 88: November 3, 2026 general, Ken King (R) v. Heather Wallace (D)", url: "https://ballotpedia.org/Texas_House_of_Representatives_District_88" },
  { id: 36, label: "Texas Rural Reporter - Interview with Rep. Ken King on his wildfire bills (March 14, 2025): \"The Panhandle doesn't have a new wind problem; we have an 80-year-old infrastructure problem\"", url: "https://texasruralreporter.substack.com/p/interview-with-rep-king-king-on-his" },
];

export type KenKingTimelineKind = "path" | "load" | "vote" | "watch";

// The arc: the contractor → the chairman → the load law → the hearings.
export interface KenKingEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: KenKingTimelineKind;
  sourceIds: number[];
}

export const kenKingTimeline: KenKingEvent[] = [
  {
    date: "2013-01-08",
    dateLabel: "July 2012 → January 2013",
    title: "The well-service contractor takes House District 88",
    detail:
      "Ken King - born in Canadian in 1971, a third-generation well-servicing contractor who runs Black Gold Pump and Supply and King Well Service, a former Canadian ISD board president and appraisal-district chair - beats incumbent Jim Landtroop in the July 2012 Republican runoff, 54% to 46%, for a district of nineteen Panhandle and South Plains counties. He is sworn in January 8, 2013 and seated on Public Education, where he stays for a decade.",
    kind: "path",
    sourceIds: [1, 3, 5, 2],
  },
  {
    date: "2021-05-11",
    dateLabel: "April → May 2021",
    title: "Two yeas on the foundation, from the back of the chamber",
    detail:
      "When Parker's HB 1576 and HB 4474 - the work group and the definition - pass the House on the Local and Consent Calendar on April 23 and May 11, 2021, King is not among the twenty and seventeen members who vote no. He is chairing Culture, Recreation and Tourism that session and the bills are not his; the votes are the first entries in a Bitcoin record that consists entirely of votes.",
    kind: "vote",
    sourceIds: [17, 18, 2],
  },
  {
    date: "2023-05-22",
    dateLabel: "April → May 2023",
    title: "Yea on the commingling ban, yea on the registry; no seat for the brake",
    detail:
      "King votes for Capriglione's HB 1666 on April 20, 2023 (148–0) and for Johnson's SB 1929, the mining-facility registration, on May 22 (140–5). Kolkhorst's SB 1751, the brake on the miners, is referred to House State Affairs on April 24 and never heard - but King is not on that committee in 2023; he chairs Licensing and, after February 2024, the investigation into the Panhandle wildfires.",
    kind: "vote",
    sourceIds: [19, 20, 21, 2],
  },
  {
    date: "2025-01-14",
    dateLabel: "January 2025",
    title: "The Burrows vote, and the gavel of State Affairs",
    detail:
      "King is one of the Panhandle members behind Dustin Burrows for Speaker on January 14, 2025 - \"a level of influence we have never experienced before,\" a colleague says of the bloc. Burrows makes him chair of State Affairs, the committee that hears the grid bills and the gold bill and, in the interim, the data centers. His own filings that spring are the wildfire package: well-site power lines, pole inspections, utility mitigation plans, battery-storage fire safety. None is about digital assets.",
    kind: "path",
    sourceIds: [6, 1, 15],
  },
  {
    date: "2025-05-21",
    dateLabel: "May 2–21, 2025",
    title: "Yea on gold, yea on the medium of exchange, yea on the reserve",
    detail:
      "HB 1056, the gold-and-silver specie bill, goes through his committee - referred March 7, heard March 26, reported April 23 - and passes the House May 2, 89–45, King yea. HJR 175, the right to a mutually agreed medium of exchange, passes May 9, 126–13, King yea. SB 21, the Texas Strategic Bitcoin Reserve, passes May 21, 101–42, King yea.",
    kind: "vote",
    sourceIds: [24, 25, 22],
  },
  {
    date: "2025-05-23",
    dateLabel: "May 23, 2025",
    title: "SB 6 substituted in two minutes",
    detail:
      "The large-load bill Phil King and Schwertner sent over 31–0 in March reaches House State Affairs in April. At a formal meeting called to order at 3:45 p.m. on May 23, King lays out SB 6, offers a complete committee substitute, has it adopted without objection, and moves it out 12–0 with three absent. The committee adjourns at 3:47. No witnesses; the House Research Organization's digest is written on the substitute.",
    kind: "load",
    sourceIds: [7, 8, 9],
  },
  {
    date: "2025-05-26",
    dateLabel: "May 26, 2025",
    title: "The seventeen-item amendment, 136–3",
    detail:
      "On the floor King rewrites the Senate's bill with a seventeen-item amendment: the curtailment directive is narrowed to customers with on-site backup generation, who may be told to deploy it or curtail; the Senate's expedited-interconnection section is struck; ERCOT's power to approve co-location arrangements becomes an ERCOT 120-day study and a PUC 60-day decision; customers are held harmless. Anchía amends it 108–19, the amendment is adopted 136–3, Raymond adds a water-bill provision 100–40, and the bill passes to third reading 117–24. King puts the intent in the journal by hand: not to slow projects already in the works, and the review can start \"immediately upon enactment.\"",
    kind: "load",
    sourceIds: [10, 11, 14],
  },
  {
    date: "2025-06-20",
    dateLabel: "May 27 → June 20, 2025",
    title: "\"Single customers… that surpass the size of cities' needs\"",
    detail:
      "The House passes SB 6 on third reading May 27, 103–25. \"We have single customers coming to Texas with an electric demand that surpasses the size of cities' needs,\" King tells the chamber; the whole Rio Grande Valley peaks at three gigawatts, and Stargate in Abilene is projected at twice that by 2030. \"Clear rules where large load customers that want to come to Texas know what they're getting when they get here.\" The Senate concurs May 29 and Abbott signs June 20, the same day as the reserve. He votes yea on the reserve's conference report the day the Senate concurs.",
    kind: "load",
    sourceIds: [12, 13, 14, 7, 23],
  },
  {
    date: "2026-04-09",
    dateLabel: "March → April 2026",
    title: "The interim charge: data centers and the law he carried",
    detail:
      "On March 26, 2026 Speaker Burrows charges State Affairs to study data centers - competitiveness, workforce, streamlined regulation - and \"the implementation of SB 6 and the Large Load Batch Study Process proposed by ERCOT.\" On April 9 King chairs the first hearing, invited testimony only: ERCOT's CEO reports roughly 410 gigawatts of large loads seeking interconnection, about 87% of them data centers. \"This hearing is only the beginning of a larger conversation,\" King says.",
    kind: "watch",
    sourceIds: [26, 27, 28],
  },
  {
    date: "2026-08-24",
    dateLabel: "August 2026",
    title: "The second hearing, the letter, and the landowners",
    detail:
      "On August 19 the committee takes public testimony on data centers and 765-kV transmission for a full day; King frames the fight as \"really a routing issue\" and warns that many proposals \"erode private property rights.\" On August 24 he writes ERCOT and the PUC calling the transmission-line application process flawed and inviting them to help draft \"legislative guardrails\" for data centers: \"West Texas and the Permian Basin need power, but not built on the backs of thousands of farmers and ranchers.\" On the November 3 ballot against Heather Wallace, after a 53.9% primary in March.",
    kind: "watch",
    sourceIds: [29, 30, 31, 4, 35],
  },
];
