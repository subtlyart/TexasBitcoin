// Angela Paxton and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas Senate and the Legislative Reference Library for
// the bio and committees, Texas Legislature Online for every bill history,
// the Senate Journal and committee minutes for every vote, the Lieutenant
// Governor's office for the work-group appointment, and Texas and trade
// press for the rest. Paxton is the carrier of the people cluster: the
// two 2021 statutes that gave Texas a legal definition of virtual currency
// and a blockchain work group were Tan Parker's House bills, and they
// became law because a first-term senator from McKinney sponsored them
// through the upper chamber - 31–0 and 31–0, on the Local and Uncontested
// Calendar, without a floor speech. Her own three blockchain bills that
// session died in committee. The honest counterweight is what came after:
// no digital-asset bill under her name in 2023 or 2025, no located public
// statement on Bitcoin since 2021, and a voting record that is reliably
// pro-industry but never out front.
//
// Verified September 24, 2026. Re-verify when the 90th Legislature files
// digital-asset bills (from November 9, 2026) and after the 2028 SD-8
// election.

export const PAXTON_LAST_VERIFIED = "September 24, 2026";

export interface PaxtonSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate and the Legislature's own record,
// then the Lieutenant Governor and the work group, then Texas press, then
// trade press.
export const paxtonSources: PaxtonSource[] = [
  { id: 1, label: "Texas Senate - Senator Angela Paxton, District 8: McKinney; Collin (part), Hunt, and Rains counties; twenty-plus years a secondary math teacher and school counselor; Baylor B.S., University of Houston–Clear Lake M.Ed.; Chair, Economic Development", url: "https://senate.texas.gov/member.php?d=8" },
  { id: 2, label: "Legislative Reference Library - Angela Paxton, member profile: committees by session - 86R and 87R Business & Commerce; 88R Finance, State Affairs (vice chair); 89R Economic Development (chair), State Affairs (vice chair)", url: "https://lrl.texas.gov/legeLeaders/members/memberDisplay.cfm?memberID=5847" },
  { id: 3, label: "KERA - Angela Paxton wins GOP bid for District 8, beating Huffines in expensive primary race (March 7, 2018): 54.3% to 45.7% over Phillip Huffines", url: "https://www.keranews.org/politics/2018-03-07/angela-paxton-wins-gop-bid-for-district-8-beating-huffines-in-expensive-primary-race" },
  { id: 4, label: "Dallas Morning News - Angela Paxton, Phillip Huffines spent $12M in Collin County Senate race, priciest in state history (July 17, 2018)", url: "https://www.dallasnews.com/news/2018/07/17/angela-paxton-phillip-huffines-spent-12m-in-collin-county-senate-race-priciest-in-state-history/" },
  { id: 5, label: "Wikipedia - Texas Senate, District 8: general-election results 2018 (51.18% over Mark Phariss), 2022 (57.69%), 2024 (59.36% over Rachel Mello)", url: "https://en.wikipedia.org/wiki/Texas_Senate,_District_8" },
  { id: 6, label: "Community Impact - Incumbent Paxton wins 2nd State Senate District 8 term (November 5, 2024)", url: "https://communityimpact.com/dallas-fort-worth/frisco/government/2024/11/05/updated-incumbent-paxton-wins-2nd-state-senate-district-8-term/" },
  { id: 7, label: "Texas Legislature Online - HB 1576 (87R) bill history: authors Parker, Capriglione, Bucy, Button, Wilson; Senate sponsor Paxton; the Work Group on Blockchain Matters; House passed April 23, 2021; Senate committee May 12, 6–0; Senate passed May 19; signed June 7, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB1576" },
  { id: 8, label: "Texas Senate Journal - May 19, 2021: CSHB 1576 (Paxton) on the Local and Uncontested Calendar, viva voce, recorded 31–0 and 31–0", url: "https://journals.senate.texas.gov/SJRNL/87R/HTML/87RSJ05-19-F.HTM" },
  { id: 9, label: "Senate Business & Commerce Committee minutes - May 11, 2021: HB 1576 laid out in lieu of SB 1076 by Senator Paxton; committee substitute adopted 6 ayes, 0 nays, 3 absent", url: "https://capitol.texas.gov/tlodocs/87R/minutes/pdf/C5102021051108001.PDF" },
  { id: 10, label: "Texas Legislature Online - HB 4474 (87R) bill history: authors Parker, Anchía, Stephenson, Capriglione, Perez; Senate sponsor Paxton; House passed May 11, 2021; Senate committee May 20, 9–0; Senate passed May 27; signed June 15, 2021, effective September 1, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 11, label: "Senate Business & Commerce Committee minutes - May 18, 2021: HB 4474 laid out by Senate sponsor Paxton; Senator Nichols recognized to explain the bill; left pending", url: "https://capitol.texas.gov/tlodocs/87R/minutes/html/C5102021051808001.HTM" },
  { id: 12, label: "Senate Business & Commerce Committee minutes - May 20, 2021: HB 4474 reported favorably, 9 ayes, 0 nays", url: "https://capitol.texas.gov/tlodocs/87R/minutes/html/C5102021052008001.HTM" },
  { id: 13, label: "Texas Legislature Online - HB 4474 (87R) Senate witness list, May 18, 2021: for - Christopher Calicott (Texas Blockchain Council), Joseph Kelly (Unchained Capital); registered for - Lee Bratcher, Texas Bankers Association, IBAT, TechNet; none against", url: "https://capitol.texas.gov/tlodocs/87R/witlistbill/html/HB04474S.htm" },
  { id: 14, label: "Texas Senate Journal - May 26–27, 2021 (PDF): HB 4474 (Paxton) on the Local and Uncontested Calendar, viva voce, recorded 31–0 and 31–0", url: "https://journals.senate.texas.gov/sjrnl/87r/pdf/87RSJ05-26-F.PDF" },
  { id: 15, label: "PR Newswire - Texas Blockchain Council Spearheads Passage of Two Blockchain Laws (July 14, 2021): \"championed especially by Representative Tan Parker and Senator Angela Paxton\"", url: "https://www.prnewswire.com/news-releases/texas-blockchain-council-spearheads-passage-of-two-blockchain-laws-301333162.html" },
  { id: 16, label: "Angela Paxton for Texas Senate - repost of the Texas Blockchain Council release (2021): the only digital-asset item on the senator's news page", url: "https://www.angelapaxton.com/news/tyler-morning-herald-texas-blockchain-council-spearheads-passage-of-two-blockchain-laws" },
  { id: 17, label: "Texas Legislature Online - SB 344 (87R) bill history: author Paxton, coauthor Johnson; electronic signatures secured through blockchain technology; referred to State Affairs March 9, 2021, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=SB344" },
  { id: 18, label: "Texas Legislature Online - SB 1076 (87R) bill history: author Paxton; a work group on blockchain matters; heard in Business & Commerce May 4, 2021, left pending", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=SB1076" },
  { id: 19, label: "Texas Legislature Online - SB 1077 (87R) bill history: author Paxton; a work group on digital identity; referred to Business & Commerce March 18, 2021, no hearing", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=SB1077" },
  { id: 20, label: "Texas Legislature Online - HB 2199 (87R) bill history: Senate sponsor Paxton; a work group on digital identity; committee 9–0 May 20, 2021; removed from the Local and Uncontested Calendar May 26, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB2199" },
  { id: 21, label: "Office of the Lieutenant Governor - Lt. Gov. Dan Patrick announces appointments to the Work Group on Blockchain Matters (October 29, 2021): Senator Angela Paxton with Barber, Calicott, Hatfield, Kelley, Villaseñor", url: "https://www.ltgov.texas.gov/2021/10/29/lt-gov-dan-patrick-announces-appointments-to-the-work-group-on-blockchain-matters/" },
  { id: 22, label: "SMU Dedman School of Law - Texas Work Group on Blockchain Matters Releases 2022 Legislative Report and Master Plan (November 15, 2022): 84 pages; chair Carla Reyes", url: "https://www.smu.edu/law/news-events/2022/texas-workgroup-on-blockchain-matters" },
  { id: 23, label: "EIN Presswire via KRON4 - Texas Blockchain Summit Day 2 (November 18, 2022): Senator Angela Paxton named the Texas Blockchain Council's Legislator of the Year; the release miscredits her as a coauthor of HB 4474", url: "https://www.kron4.com/business/press-releases/ein-presswire/602066622/texas-blockchain-summit-day-2-features-cryptos-leading-regulatory-and-policy-focused-elected-officials-and-leaders/" },
  { id: 24, label: "Texas Legislature Online - Bills authored by Sen. Paxton, 88R (2023): 93 bills, none on digital assets, blockchain, or mining; nearest is SB 1143, a data-center sales-tax exemption that died in Finance", url: "https://capitol.texas.gov/Reports/Report.aspx?LegSess=88R&ID=author&Code=A1285" },
  { id: 25, label: "Texas Legislature Online - Bills authored by Sen. Paxton, 89R (2025): 167 bills, none on digital assets, blockchain, or mining", url: "https://capitol.texas.gov/Reports/Report.aspx?LegSess=89R&ID=author&Code=A1285" },
  { id: 26, label: "Texas Legislature Online - SB 21 (89R) authors: Schwertner; coauthors Hinojosa, Parker, West - Paxton is not among them", url: "https://capitol.texas.gov/BillLookup/Authors.aspx?LegSess=89R&Bill=SB21" },
  { id: 27, label: "Texas Senate Journal - March 6, 2025: SB 21 passed 25–5 on second and third reading; Paxton yea; nays Creighton, Gutierrez, Hall, Hancock, Nichols", url: "https://journals.senate.texas.gov/SJRNL/89R/HTML/89RSJ03-06-F.HTM" },
  { id: 28, label: "Texas Senate Journal - May 30, 2025: SB 21 conference report adopted 23–8; Paxton yea; nays Alvarado, Cook, Creighton, Eckhardt, Gutierrez, Hughes, Kolkhorst, Nichols", url: "https://journals.senate.texas.gov/SJRNL/89R/HTML/89RSJ05-30-F.HTM" },
  { id: 29, label: "Texas Senate Journal - April 12, 2023: SB 1751 (Kolkhorst) and SB 1929 (Johnson) on the Local and Uncontested Calendar, each recorded 31–0 and 31–0", url: "https://journals.senate.texas.gov/SJRNL/88R/HTML/88RSJ04-12-F1.HTM" },
  { id: 30, label: "Texas Senate Journal - March 19, 2025: SB 6 (King, Schwertner) passed 31–0 on third reading", url: "https://journals.senate.texas.gov/SJRNL/89R/HTML/89RSJ03-19-F1.HTM" },
  { id: 31, label: "Texans for Fiscal Responsibility - Fiscal Responsibility Index, Angela Paxton, 2025: SB 21 and SB 6 votes scored against TFR's position; session score 81, career C", url: "https://index.texastaxpayers.com/legislators/angela-paxton/2025-index" },
  { id: 32, label: "Texas Legislature Online - SB 860 (86R) bill history: author Paxton; a financial-technology regulatory sandbox administered by the Attorney General; referred to Business & Commerce March 1, 2019, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=86R&Bill=SB860" },
  { id: 33, label: "Texas Tribune - Angela Paxton files bill that would let her husband's office exempt companies from securities regulations (February 16, 2019): \"That has literally nothing to do with why I filed the bill\"", url: "https://www.texastribune.org/2019/02/16/ken-paxton-angela-securities-regulations-texas-attorney-general-power/" },
  { id: 34, label: "Texas Tribune - Texas Senate adopts rules for Ken Paxton's impeachment trial (June 21, 2023): 25–3; a member's spouse may not vote on any matter or join closed deliberations; Angela Paxton among the three no votes", url: "https://www.texastribune.org/2023/06/20/ken-paxton-impeachment-trial-senate-rules" },
  { id: 35, label: "Texas Tribune - Sen. Angela Paxton files for divorce from Attorney General Ken Paxton (July 10, 2025)", url: "https://www.texastribune.org/2025/07/10/angela-paxton-divorce-texas-attorney-general-ken/" },
  { id: 36, label: "Wikipedia - 2026 Texas Senate election: the sixteen seats on the November 3, 2026 ballot; District 8 is not among them", url: "https://en.wikipedia.org/wiki/2026_Texas_Senate_election" },
];

export type PaxtonTimelineKind = "path" | "carried" | "vote" | "watch";

// The arc: the counselor → the sponsor → the reliable yea → the open items.
export interface PaxtonEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: PaxtonTimelineKind;
  sourceIds: number[];
}

export const paxtonTimeline: PaxtonEvent[] = [
  {
    date: "2019-01-08",
    dateLabel: "March 2018 → January 2019",
    title: "The counselor takes Senate District 8",
    detail:
      "Angela Paxton - a Baylor mathematics graduate, twenty-plus years a high-school math teacher and guidance counselor, and the wife of the Attorney General - wins the Republican primary for the open Collin County seat over Phillip Huffines, 54.3% to 45.7%, in what the Dallas Morning News tallies as the most expensive state Senate race in Texas history at twelve million dollars combined. She takes the general with 51.18% and is sworn in January 8, 2019, the first educator elected to the Senate in more than two decades, and is seated on Business and Commerce.",
    kind: "path",
    sourceIds: [1, 3, 4, 5, 2],
  },
  {
    date: "2019-03-01",
    dateLabel: "February → March 2019",
    title: "SB 860: the fintech sandbox that ran into her husband's office",
    detail:
      "Her first financial-technology bill would have let the Attorney General exempt fintech companies from state securities rules. The Texas Tribune noted whose office that was; she answered that it had \"literally nothing to do with why I filed the bill.\" It was referred to Business and Commerce on March 1, 2019 and never heard. Not a crypto bill, but the first sign of the register she would keep: the industry's framework, filed quietly, without a campaign behind it.",
    kind: "path",
    sourceIds: [32, 33],
  },
  {
    date: "2021-03-18",
    dateLabel: "January → March 2021",
    title: "Three blockchain bills under her own name",
    detail:
      "In the 87th session she files SB 344 with Nathan Johnson, to recognize electronic signatures secured by blockchain; SB 1076, a work group on blockchain matters, the Senate twin of Parker's HB 1576; and SB 1077, a work group on digital identity. SB 344 is referred to State Affairs March 9 and never heard. SB 1077 is referred to Business and Commerce March 18 and never heard. SB 1076 gets a hearing on May 4 and is left pending.",
    kind: "carried",
    sourceIds: [17, 18, 19],
  },
  {
    date: "2021-05-19",
    dateLabel: "May 11–19, 2021",
    title: "HB 1576: the work group, carried through the Senate",
    detail:
      "Parker's work-group bill reaches the Senate on April 26. On May 11 the committee lays out HB 1576 in lieu of her SB 1076; Paxton sends up the substitute and moves it, 6–0 with three absent. On May 19 it passes the Senate on the Local and Uncontested Calendar, viva voce, recorded 31–0 and 31–0. The House concurs May 24; Abbott signs June 7. No floor speech is recorded, because that calendar records none.",
    kind: "carried",
    sourceIds: [7, 9, 8],
  },
  {
    date: "2021-05-27",
    dateLabel: "May 18–27, 2021",
    title: "HB 4474: the definition, carried through the Senate",
    detail:
      "The bill that writes \"virtual currency\" into the Texas Uniform Commercial Code reaches Business and Commerce on May 13. On May 18 the chair lays it out by its Senate sponsor and recognizes Senator Nichols to explain it; the Texas Blockchain Council's Christopher Calicott and Unchained Capital's Joseph Kelly testify for it, the bankers register for it, no one against. On May 20 it is reported 9–0. On May 27 it passes 31–0 and 31–0 on the same uncontested calendar. Abbott signs June 15; effective September 1, 2021.",
    kind: "carried",
    sourceIds: [10, 11, 13, 12, 14],
  },
  {
    date: "2021-07-14",
    dateLabel: "July 14, 2021",
    title: "\"Championed especially by\"",
    detail:
      "The Texas Blockchain Council announces that it \"spearheaded\" the two laws, drafted with the Uniform Law Commission, \"championed especially by Representative Tan Parker and Senator Angela Paxton.\" Her campaign site reposts the release. It is the only digital-asset item the site has ever carried, and it contains no words of hers.",
    kind: "carried",
    sourceIds: [15, 16],
  },
  {
    date: "2021-10-29",
    dateLabel: "October 2021 → November 2022",
    title: "A seat on the work group she carried into law",
    detail:
      "On October 29, 2021 Lieutenant Governor Patrick names her the Senate's appointee to the sixteen-member Work Group on Blockchain Matters that HB 1576 created, alongside Parker, Bratcher, and SMU's Carla Reyes in the chair. The group meets monthly, holds public hearings in May and August 2022, and delivers its 84-page legislative report and master plan on November 15, 2022. Three days later, at the Texas Blockchain Summit, the council names her its Legislator of the Year.",
    kind: "carried",
    sourceIds: [21, 22, 23],
  },
  {
    date: "2023-04-12",
    dateLabel: "2023 session",
    title: "Off the committee, on the record: SB 1751 and SB 1929",
    detail:
      "Reassigned to Finance and State Affairs, she is no longer on the committee that hears the mining bills. She authors 93 bills and none on digital assets; the nearest is a data-center sales-tax exemption that dies in Finance. On April 12, 2023 Kolkhorst's brake on the miners and Johnson's registry both pass on the Local and Uncontested Calendar, 31–0 and 31–0, every senator deemed yea. That summer the Senate bars her from voting at her husband's impeachment trial, over her no.",
    kind: "vote",
    sourceIds: [2, 24, 29, 34],
  },
  {
    date: "2025-05-30",
    dateLabel: "March → May 2025",
    title: "The reserve and the kill switch: two yeas, no authorship",
    detail:
      "Now chair of Economic Development, she authors 167 bills in the 89th session and none on Bitcoin. She is not a coauthor of SB 21. She votes yea when the reserve passes the Senate 25–5 on March 6, yea when SB 6 passes 31–0 on March 19, and yea again when the conference report on the reserve is adopted 23–8 on May 30. Texans for Fiscal Responsibility scores both against her.",
    kind: "vote",
    sourceIds: [1, 25, 26, 27, 30, 28, 31],
  },
  {
    date: "2026-09-24",
    dateLabel: "September 2026",
    title: "Not on the ballot, and not on the subject",
    detail:
      "She won a four-year term with 59.36% in November 2024, so Senate District 8 is not among the sixteen seats up on November 3, 2026. Her news page has carried nothing on digital assets since 2021, her interim charges are hotel taxes and project-finance zones, and no statement of hers on Bitcoin, mining, or the reserve has been located since the summit that gave her the award. The 90th Legislature convenes January 12, 2027.",
    kind: "watch",
    sourceIds: [5, 6, 36, 35],
  },
];
