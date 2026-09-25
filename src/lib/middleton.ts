// Mayes Middleton and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from Texas Legislature Online for every bill history and the
// author, coauthor, and co-sponsor reports in both chambers, the House
// and Senate Journals for every roll call, the senator's own campaign
// site and Senate press room for what he has said (nothing), and Texas
// press for the campaign. Middleton is the nominee for the office that
// will prosecute crypto fraud in Texas for the next four years, and his
// Bitcoin record consists entirely of votes: yea on the reserve twice,
// yea on the gold bill he co-sponsored, yea on the large-load law he
// coauthored, yea on the 2023 mining bills, yea on the 2021 definition -
// and, as House Freedom Caucus chair, recorded voting no on the 2021
// blockchain work group. He has authored nothing on the subject in four
// sessions and said nothing on it in a seventeen-month campaign funded
// mostly by himself. The honest counterweight is the whole page: a record
// of votes without a single word to explain them.
//
// Verified September 25, 2026. Re-verify after the November 3, 2026
// general election and if he states a position on digital assets.

export const MIDDLETON_LAST_VERIFIED = "September 25, 2026";

export interface MiddletonSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Legislature's own record and journals,
// then the candidate's own site, then Texas press and the watchdogs.
export const middletonSources: MiddletonSource[] = [
  { id: 1, label: "Wikipedia - Mayes Middleton: born September 18, 1981, Wallisville; UT Austin finance and Plan II, UT Law 2008; president, Middleton Oil Company; First Liberty National Bank board; Texas House District 23 (2019–2023); Senate District 11 since January 2023", url: "https://en.wikipedia.org/wiki/Mayes_Middleton" },
  { id: 2, label: "Texas Tribune - Mayes Middleton's attorney general run built on personal fortune and years of political giving (May 22, 2026): inherited the company in 2013; $300,000-plus to Empower Texans; self-funded the 2018 and 2022 races; Roy - \"It just don't smell right to me\"", url: "https://www.texastribune.org/2026/05/22/texas-attorney-general-gop-runoff-mayes-middleton-political-donations/" },
  { id: 3, label: "Galveston Daily News - Middleton unseats Faircloth (March 2018): about 57% in the House District 23 primary; lost Galveston County by 83 votes, carried on Chambers County", url: "https://www.galvnews.com/news/free/article_7500cdbb-4639-5000-9eec-8b0b0cac754c.html" },
  { id: 4, label: "Texas Freedom Caucus - Freedom Caucus elects new executive committee, Rep. Middleton to chair (January 15, 2020)", url: "https://freedomfortexas.com/blog/post/freedom-caucus-elects-new-executive-committee-rep-middleton-to-chair" },
  { id: 5, label: "Community Impact - Mayes Middleton wins the Republican nomination for Senate District 11 (March 1, 2022): 63% over Mitchell, Armstrong, and Gracia; unopposed in November", url: "https://communityimpact.com/houston/pearland-friendswood/city-county/2022/03/01/updated-mayes-middleton-honored-to-be-republican-nominee-for-texas-senate-district-11-seat/" },
  { id: 6, label: "Texas Legislature Online - Senator Middleton, 88R committee assignments: Business & Commerce, State Affairs, Jurisprudence, Education (vice chair, higher education), Administration", url: "https://capitol.texas.gov/Members/MemberInfo.aspx?Leg=88&Chamber=S&Code=A1350" },
  { id: 7, label: "Texas Senate - Senator Mayes Middleton, District 11: 89R committees - Local Government (vice chair), Business & Commerce, State Affairs, Education K-16, Administration", url: "https://senate.texas.gov/member.php?d=11" },
  { id: 8, label: "Texas House Journal - April 23, 2021, pp. 1547–1548: HB 1576 (blockchain work group) on Local and Consent, Record 417; Middleton among the twenty members \"recorded voting no\"", url: "https://journals.house.texas.gov/hjrnl/87r/pdf/87RDAY31CFINAL.PDF" },
  { id: 9, label: "Texas House Journal - May 11, 2021: HB 4474 (virtual currency in the UCC) on Local and Consent, Record 951; seventeen recorded noes, Middleton not among them", url: "https://journals.house.texas.gov/hjrnl/87r/pdf/87RDAY44CFINAL.PDF" },
  { id: 10, label: "Texas Senate Journal - April 12, 2023, p. 891: SB 1751 (Kolkhorst) and SB 1929 (Johnson) on the Local and Uncontested Calendar, each 31–0 and 31–0, all members deemed yea", url: "https://journals.senate.texas.gov/sjrnl/88r/pdf/88RSJ04-12-F1.PDF" },
  { id: 11, label: "Texas Senate Journal - May 15, 2023: HB 1666 (commingling ban) passed 31–0", url: "https://journals.senate.texas.gov/SJRNL/88R/HTML/88RSJ05-15-F.HTM" },
  { id: 12, label: "Texas Legislature Online - SJR 67 (88R) bill history: author Parker, coauthor Paxton; a right to a mutually agreed medium of exchange; died in Business & Commerce", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SJR67" },
  { id: 13, label: "Texas Legislature Online - SB 21 (89R) bill history: author Schwertner; coauthors Hinojosa, Parker, West - Middleton is not among them", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 14, label: "Texas Senate Journal - March 6, 2025: SB 21 passed 25–5; Middleton yea", url: "https://journals.senate.texas.gov/SJRNL/89R/HTML/89RSJ03-06-F.HTM" },
  { id: 15, label: "Texas Senate Journal - May 30, 2025: SB 21 conference report adopted 23–8; Middleton yea", url: "https://journals.senate.texas.gov/SJRNL/89R/HTML/89RSJ05-30-F.HTM" },
  { id: 16, label: "Texas Legislature Online - SB 6 (89R) bill history: author King; coauthors Alvarado, Blanco, Campbell, Creighton, Eckhardt, Hagenbuch, Hughes, Middleton", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 17, label: "Texas Senate Journal - March 19, 2025, pp. 615–616: SB 6 passed on third reading 31–0", url: "https://journals.senate.texas.gov/sjrnl/89r/pdf/89RSJ03-19-F1.PDF" },
  { id: 18, label: "Texas Legislature Online - HB 1056 (89R) bill history: author Dorazio; Senate sponsor Hughes; co-sponsors Hinojosa, Middleton, Sparks (May 26–27, 2025); gold and silver specie as legal tender; signed June 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1056" },
  { id: 19, label: "Texas Senate Journal - May 27–28, 2025, pp. 2884–2907: HB 1056 - suspension 19–12, passage to third reading 18–12–1, suspension 20–11, final passage 18–12–1; Middleton yea at every stage", url: "https://journals.senate.texas.gov/sjrnl/89r/pdf/89RSJ05-28-F1.PDF" },
  { id: 20, label: "Texas Legislature Online - HJR 175 (89R) bill history: Senate sponsor Parker; left pending in Business & Commerce May 15, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HJR175" },
  { id: 21, label: "Texas Legislature Online - Bills authored by Sen. Middleton, 89R: 255 bills, none on digital assets, gold, or banking; nearest are SB 404 and SB 2642 on governmental investments", url: "https://capitol.texas.gov/reports/report.aspx?LegSess=89R&ID=author&Code=A1350" },
  { id: 22, label: "Texas Legislature Online - Bills authored by Sen. Middleton, 88R: 222 bills, none on the subject", url: "https://capitol.texas.gov/reports/report.aspx?LegSess=88R&ID=author&Code=A1350" },
  { id: 23, label: "Texas Legislature Online - Bills authored by Rep. Middleton, 87R (87) and 86R (79): none on the subject", url: "https://capitol.texas.gov/reports/report.aspx?LegSess=87R&ID=author&Code=A3645" },
  { id: 24, label: "Texas Legislature Online - Bills co-sponsored by Sen. Middleton, 89R: thirty, HB 1056 the only one on money", url: "https://capitol.texas.gov/reports/report.aspx?LegSess=89R&ID=cosponsor&Code=A1350" },
  { id: 25, label: "Mayes Middleton for Attorney General - Senator Mayes Middleton announces his campaign for Attorney General (April 15, 2025): \"at least $10 million\"; \"public service, not self-service\"", url: "https://mayesmiddleton.com/news/senator-mayes-middleton-announces-his-campaign-for-attorney-general/" },
  { id: 26, label: "Mayes Middleton for Attorney General - issues and endorsements: consumer protection, foreign threats, \"DOGE Texas\"; no digital-asset position; no blockchain or crypto organization among the endorsements", url: "https://mayesmiddleton.com/" },
  { id: 27, label: "Texas Senate - Senator Middleton press room: one release, on SB 7 (August 4, 2025); nothing on digital assets", url: "https://senate.texas.gov/pressroom.php?d=11" },
  { id: 28, label: "Texas Scorecard - Republicans' campaign for Texas Attorney General (July 23, 2025): the $10 million self-loan on the first report", url: "https://texasscorecard.com/state/republicans-campaign-for-texas-attorney-general/" },
  { id: 29, label: "Texas Tribune - Chip Roy and Mayes Middleton head to a runoff (March 12, 2026): primary March 3 - Middleton 39.1%, Roy 31.6%; about $15 million of his own money by then", url: "https://www.texastribune.org/2026/03/12/chip-roy-mayes-middleton-texas-attorney-general-gop-primary-runoff/" },
  { id: 30, label: "Ballotpedia News - Mayes Middleton defeated Chip Roy in the May 26 Republican primary runoff for Texas attorney general (May 27, 2026): 55.2% to 44.8%; Johnson won the Democratic runoff with 60.5%", url: "https://news.ballotpedia.org/2026/05/27/mayes-middleton-defeated-chip-roy-in-the-may-26-republican-primary-runoff-for-texas-attorney-general/" },
  { id: 31, label: "The Texan - Texas Sen. Mayes Middleton wins GOP primary for Attorney General (May 26, 2026): Paxton did not formally endorse; Trump did not endorse", url: "https://thetexan.news/elections/2026/texas-sen-mayes-middleton-wins-gop-primary-for-attorney-general/article_092420d7-3705-4b20-bdd4-e8fb68ee495c.html" },
  { id: 32, label: "The Texan - Top lines from Texas' July campaign finance reports (July 2026): $5.2 million in new personal loans, $3.25 million spent, $118,000 on hand; Johnson $291,000 on hand", url: "https://thetexan.news/elections/2026/heres-a-look-at-the-top-lines-from-texas-july-campaign-finance-reports/article_0bc50754-759d-4272-9aef-c12071072f46.html" },
  { id: 33, label: "ReconMR - Texas Poll, September 2026 release (September 17, 2026): attorney general - Middleton 45, Johnson 44", url: "https://reconmr.com/wp-content/uploads/2026/09/ReconMR-Texas-Poll-September-Release-Final.pdf" },
  { id: 34, label: "Texans for Fiscal Responsibility - Fiscal Responsibility Index, Mayes Middleton, 2025: score 92, career A-; SB 21 and SB 6 votes scored against TFR's position", url: "https://index.texastaxpayers.com/legislators/mayes-middleton/2025-index" },
  { id: 35, label: "Texas Tribune - Texans lost $56.8 million to cryptocurrency kiosk scams (July 8, 2026): about 1,200 victims; Bitcoin Depot's bankruptcy; the 2027 session's consumer-protection fight - neither attorney general nominee quoted", url: "https://www.texastribune.org/2026/07/08/texas-cryptocurrency-kiosk-bitcoin-atm-scam-fraud/" },
  { id: 36, label: "CoinDesk - Crypto PACs spend $9 million in Texas and score wins in both parties (May 27, 2026): Fairshake's Texas spending was in federal runoffs; none tied to the attorney general race", url: "https://www.coindesk.com/policy/2026/05/27/crypto-pacs-spend-usd9-million-in-texas-and-score-wins-in-both-parties" },
];

export type MiddletonTimelineKind = "path" | "vote" | "campaign" | "watch";

// The arc: the oilman → the caucus chair → the votes → the ballot.
export interface MiddletonEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: MiddletonTimelineKind;
  sourceIds: number[];
}

export const middletonTimeline: MiddletonEvent[] = [
  {
    date: "2019-01-08",
    dateLabel: "2013 → January 2019",
    title: "The oilman takes House District 23 by Chambers County",
    detail:
      "Mayes Middleton - born in Wallisville in 1981, UT finance and UT Law, president of Middleton Oil Company since his father's death in 2013, a fifteen-year Republican mega-donor including more than $300,000 to Empower Texans - unseats Representative Wayne Faircloth in the March 2018 primary with about 57%, losing Galveston County by 83 votes and winning on Chambers, in a race he mostly paid for himself. He is sworn in January 2019.",
    kind: "path",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2021-04-23",
    dateLabel: "January 2020 → April 2021",
    title: "The Freedom Caucus chair votes no on the work group",
    detail:
      "Elected chairman of the Texas Freedom Caucus on January 15, 2020, he leads it through the 87th session. On April 23, 2021, Parker's HB 1576 - a sixteen-member Work Group on Blockchain Matters - passes on the Local and Consent Calendar, and the journal lists Middleton among the twenty members \"recorded voting no.\" It is the only vote against a Bitcoin-adjacent bill in his record, and the only one on a bill that created a committee rather than a rule.",
    kind: "vote",
    sourceIds: [4, 8],
  },
  {
    date: "2021-05-11",
    dateLabel: "May 11, 2021",
    title: "Yea on the definition",
    detail:
      "Eighteen days later HB 4474, the bill that writes \"virtual currency\" into the Texas Uniform Commercial Code, passes the House on the same calendar, Record 951. Seventeen members are recorded voting no. He is not among them.",
    kind: "vote",
    sourceIds: [9],
  },
  {
    date: "2023-01-10",
    dateLabel: "March 2022 → January 2023",
    title: "Senate District 11, and a seat on Business and Commerce",
    detail:
      "He wins the Republican nomination for the open Galveston-Chambers-Harris Senate seat on March 1, 2022 with 63% over three opponents, having raised more than two million dollars - most of it his own - against their $333,000 combined, and is unopposed in November. Sworn in January 10, 2023, he is seated on Business and Commerce and State Affairs, the two committees that hear every digital-asset, mining, and money bill in the chamber.",
    kind: "path",
    sourceIds: [5, 2, 6],
  },
  {
    date: "2023-05-15",
    dateLabel: "April → May 2023",
    title: "Three yeas on the mining and custody bills; one amendment dies in his committee",
    detail:
      "On April 12, 2023 Kolkhorst's brake on the miners and Johnson's registry both pass on the Local and Uncontested Calendar, 31–0 and 31–0, every senator deemed yea. On May 15 he votes for Capriglione's commingling ban, 31–0. Parker's SJR 67, a constitutional right to a mutually agreed medium of exchange, dies in Business and Commerce without a hearing - his committee. He authors 222 bills that session; none touches the subject.",
    kind: "vote",
    sourceIds: [10, 11, 12, 22],
  },
  {
    date: "2025-03-19",
    dateLabel: "March 2025",
    title: "Yea on the reserve, coauthor of the load law",
    detail:
      "He is not among SB 21's coauthors, but on March 6, 2025 he votes yea as the reserve passes 25–5. He is a coauthor of SB 6, the large-load law, one of eight from both parties, and votes yea as it passes 31–0 on March 19. Texans for Fiscal Responsibility, which opposed both, scores both votes against him on an index where he otherwise earns a 92.",
    kind: "vote",
    sourceIds: [13, 14, 16, 17, 34],
  },
  {
    date: "2025-04-15",
    dateLabel: "April 15, 2025",
    title: "\"At least $10 million\" for attorney general",
    detail:
      "One week after Ken Paxton enters the U.S. Senate race, Middleton announces for attorney general with a pledge of at least ten million dollars of his own money: \"I believe in public service, not self-service.\" The announcement, the issues page, and every campaign document since address consumer protection, foreign threats, ESG, and \"DOGE Texas.\" None mentions digital assets, and no blockchain or crypto organization appears among his endorsements.",
    kind: "campaign",
    sourceIds: [25, 26],
  },
  {
    date: "2025-05-30",
    dateLabel: "May 26–30, 2025",
    title: "Co-sponsor of the gold bill; yea on the reserve again",
    detail:
      "In the session's last week he signs on as a Senate co-sponsor of HB 1056, gold and silver specie as legal tender, under sponsor Bryan Hughes, and votes yea at every stage as it passes 18–12 in a 12:54 a.m. session on May 28. On May 30 he votes yea on the reserve's conference report, 23–8. HJR 175, the medium-of-exchange amendment, is left pending in his committee on May 15. Of 255 bills he authored in 2025, none is on money, digital or otherwise; of thirty he co-sponsored, HB 1056 is the only one.",
    kind: "vote",
    sourceIds: [18, 19, 15, 20, 21, 24],
  },
  {
    date: "2026-05-26",
    dateLabel: "July 2025 → May 2026",
    title: "The self-funded nomination",
    detail:
      "The first finance report shows a ten-million-dollar personal loan; by the March 3 primary it is about fifteen million, and he leads Chip Roy 39.1% to 31.6%. \"I look at the amount of money being thrown around by my opponent, into groups that then endorse him,\" Roy says. \"It just don't smell right to me.\" On May 26 Middleton wins the runoff 55.2% to 44.8%; Paxton does not formally endorse, Trump does not endorse, Dan Patrick and Angela Paxton do. Nathan Johnson wins the Democratic runoff the same night.",
    kind: "campaign",
    sourceIds: [28, 29, 2, 30, 31],
  },
  {
    date: "2026-09-17",
    dateLabel: "July → September 2026",
    title: "A tied race, a kiosk problem, and no position",
    detail:
      "The July report shows $5.2 million in new personal loans and $118,000 on hand against Johnson's $291,000. The Tribune reports Texans lost $56.8 million to crypto-kiosk scams and that the 2027 session will fight over them; neither nominee for the office that prosecutes such fraud is quoted. ReconMR's September poll has Middleton 45, Johnson 44. Crypto PACs spent nine million dollars in Texas this cycle, none of it on this race.",
    kind: "watch",
    sourceIds: [32, 35, 33, 36],
  },
];
