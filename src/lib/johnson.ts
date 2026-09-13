// Nathan Johnson and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Texas Senate for the bio, Texas Legislature Online for
// the bill histories and the enrolled SB 1929 text, the Senate Research
// Center's analysis, the Senate Journal for the roll call, the Public
// Utility Commission's rule as reported, and Texas and trade press for
// the hearing quotes. Johnson is the only Democrat in the people cluster,
// and its bipartisan half: the senator who wrote the mining registry the
// industry could live with (SB 1929, the bill that passed the day
// Kolkhorst's cap did and survived the House when hers did not), who
// argued the donation clause out of the reserve before the committee
// vote - "billionaire tech bros owning a branch of the state government"
// - and who then voted for the reserve on the floor while the future
// comptroller who would buy its Bitcoin voted no. The honest
// counterweight: the registry is light (75 MW, no statutory penalty,
// seventeen months to a rule), the reserve he shaped is the one the
// fiscal right opposed, and he is leaving the chamber to run for
// attorney general against a crypto-friendly Republican.
//
// Verified September 13, 2026. Re-verify after the November 3, 2026
// attorney general general election and when the 90th Legislature files
// large-load bills (from November 9, 2026).

export const JOHNSON_LAST_VERIFIED = "September 13, 2026";

export interface JohnsonSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Senate and the Legislature's own record,
// then the regulator, then Texas press, then trade press.
export const johnsonSources: JohnsonSource[] = [
  { id: 1, label: "Texas Senate - Senator Nathan Johnson, District 16: Dallas County; Democrat; first elected 2018; Business and Commerce, Transportation; attorney, Thompson Coburn; B.S. physics, Arizona; J.D., Texas", url: "https://senate.texas.gov/member.php?d=16" },
  { id: 2, label: "Wikipedia - Nathan M. Johnson: born February 12, 1968, Fort Worth; physics 1990, UT Law 1993; business and bankruptcy litigator; composed for the Funimation Dragon Ball Z dub; 2018 54.13% over Huffines; 2022 61.95%; 2024 primary 59.15%; attorney general bid announced July 15, 2025; primary 48.1%; runoff 60.5% May 26, 2026; faces Mayes Middleton", url: "https://en.wikipedia.org/wiki/Nathan_M._Johnson" },
  { id: 3, label: "Texas Tribune - Democrats Nathan Johnson and Beverly Powell defeat state Sens. Don Huffines and Konni Burton (November 6, 2018): an 8-point margin; Republicans' Senate majority falls from 20 to 19", url: "https://www.texastribune.org/2018/11/06/konni-burton-don-huffines-joan-huffman-texas-midterm-election-results/" },
  { id: 4, label: "Texas Legislature Online - SB 1929 (88R) bill history: author Johnson; coauthor Menéndez; House sponsor Dean; filed March 8, 2023; Business & Commerce 11–0; passed the Senate April 12, 2023; House State Affairs 13–0; passed the House May 22; signed June 9, 2023; effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1929" },
  { id: 5, label: "Texas Legislature Online - SB 1929 (88R) enrolled text: a virtual currency mining facility over 75 MW of interruptible load registers with the Public Utility Commission within one business day of its power agreement, with location and five years of anticipated demand; the commission may share it with ERCOT", url: "https://capitol.texas.gov/tlodocs/88R/billtext/html/SB01929F.htm" },
  { id: 6, label: "Senate Research Center - C.S.S.B. 1929 bill analysis: large flexible loads over 75 MW - data centers, crypto mining, hydrogen - and \"ERCOT's inability to see or control the behavior\" of them", url: "https://capitol.texas.gov/tlodocs/88R/analysis/html/SB01929S.htm" },
  { id: 7, label: "Texas Legislature Online - SB 1751 (88R) bill history: authors Kolkhorst, Campbell, Nichols; passed the Senate April 12, 2023; referred to House State Affairs April 24, no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 8, label: "CoinDesk - Bitcoin Miners Gain Support From Texas With Two Bills Passed, One Halted (June 1, 2023): SB 1929 and HB 591 signed, SB 1751 stopped", url: "https://www.coindesk.com/policy/2023/06/01/bitcoin-miners-gain-support-from-texas-with-two-bills-passed-one-halted" },
  { id: 9, label: "FOX 4 - Bitcoin mining, AI data centers increasing demand on Texas power grid, leaders say (June 12, 2024): ERCOT's Vegas - from about 85,000 MW to 150,000 MW by 2030; Patrick - \"the Wild Wild West of data centers and crypto miners\"", url: "https://www.fox4news.com/news/bitcoin-mining-ai-data-centers-texas-power-grid" },
  { id: 10, label: "Forbes - ERCOT CEO Stuns Texas Officials With New Estimate For Power Needs (June 13, 2024): Johnson - \"every assumption we've made in the last four years is now called into question once again\"", url: "https://www.forbes.com/sites/davidblackmon/2024/06/13/ercot-ceo-stuns-texas-officials-with-new-estimate-for-power-needs/" },
  { id: 11, label: "Houston Chronicle - Texas lawmakers sour on bitcoin mining, fearing large power needs (June 2024): Johnson - \"a completely new economy really in Texas, and certainly a new grid\"", url: "https://www.houstonchronicle.com/business/energy/article/texas-lawmakers-sour-bitcoin-mining-fearing-19508969.php" },
  { id: 12, label: "Utility Dive - As bitcoin's price and energy demand surge, Texas requires some miners to register with utility commission (November 25, 2024): the PUC rule adopted November 21 - over 75 MW, location, ownership, annual demand, up to $25,000 per violation per day; Bratcher - \"appropriate and far less invasive than what the Federal Government attempted\"", url: "https://www.utilitydive.com/news/texas-requires-bitcoin-miners-to-register-with-electric-grid-operator-ERCOT/733848/" },
  { id: 13, label: "CBS Austin - Texas senators float creating state reserve of Bitcoin (February 18, 2025): Johnson - \"I do have a great concern with billionaire tech bros owning branches of government\"", url: "https://cbsaustin.com/news/local/texas-senators-float-creating-state-reserve-of-bitcoin" },
  { id: 14, label: "Texas Observer - From Bullion to Bitcoin: Crypto Reserve Is Latest Fiscal Folly in Texas (February 28, 2025): Johnson on a $10 billion donor who could \"manipulate the market using the imprimatur of the state\"; the committee passes the amended bill unanimously", url: "https://www.texasobserver.org/texas-bitcoin-strategic-reserve-senate-bill-21/" },
  { id: 15, label: "Texas Senate Journal - 89th Legislature, Regular Session, 14th Day (March 6, 2025): CSSB 21 passed to engrossment and finally passed, Yeas 25, Nays 5 - Johnson among the yeas; nays Creighton, Gutierrez, Hall, Hancock, Nichols; Miles absent-excused", url: "https://journals.senate.texas.gov/sjrnl/89r/pdf/89RSJ03-06-F.PDF" },
  { id: 16, label: "Texas Observer - Texas Set to Create State Bitcoin Reserve (May 21, 2025): the House restores donations, limited to Texans; Johnson's office - he would vote against concurring; the Senate declines the House changes May 25; conference removes the clause", url: "https://www.texasobserver.org/texas-set-to-create-state-bitcoin-reserve/" },
  { id: 17, label: "Texas Legislature Online - SB 21 (89R) bill history: Business & Commerce 10–0 February 18, 2025; House 101–42 May 21; conferees May 27; report adopted May 29; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 18, label: "Texas Legislature Online - SB 6 (89R) bill history: authors King and Schwertner; large-load interconnection standards and emergency curtailment above 75 MW; Business & Commerce 10–0; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB6" },
  { id: 19, label: "Dallas Morning News - Texas Sen. Nathan Johnson launches campaign for attorney general (July 15, 2025): \"used essentially as a party apparatus\"", url: "https://www.dallasnews.com/news/politics/2025/07/15/texas-sen-nathan-johnson-launches-campaign-for-attorney-general/" },
  { id: 20, label: "Texas Tribune - Nathan Johnson, Democratic state senator, launches attorney general bid (July 15, 2025): restore \"faith and confidence\" in the office", url: "https://www.texastribune.org/2025/07/15/nathan-johnson-texas-attorney-general-democrat-2026-midterms" },
  { id: 21, label: "Ballotpedia - Texas Attorney General election, 2026 (March 3 Democratic primary): Johnson 48.1%, Jaworski 26.4%, Box 25.5%", url: "https://ballotpedia.org/Texas_Attorney_General_election,_2026_(March_3_Democratic_primary)" },
  { id: 22, label: "CBS Texas - Nathan Johnson selected as Democratic candidate for Texas attorney general after winning primary runoff (May 26, 2026): faces Mayes Middleton; \"Attorneys General are supposed to make sure that the competitive market is competitive\"", url: "https://www.cbsnews.com/texas/news/2026-tx-ag-democrat-primary-runoff-winner/" },
  { id: 23, label: "Texas Tribune - Texas Democrats answer questions ahead of AG runoff (April 23, 2026): Johnson raised $901,353 and spent $1,230,534 from July 2025 to February 2026; endorsements", url: "https://www.texastribune.org/2026/04/23/texas-2026-attorney-general-democrats-runoff-nathan-johnson-joe-jaworski/" },
  { id: 24, label: "Texas Tribune - State Sen. Nathan Johnson to retain his Texas Senate seat (March 5, 2024): the primary over Rep. Victoria Neave Criado", url: "https://www.texastribune.org/2024/03/05/nathan-johnson-victoria-neave-criado-texas-senate/" },
];

export type JohnsonTimelineKind = "path" | "registry" | "reserve" | "watch";

// The arc: the upset → the registry → the reserve's editor → the exit.
export interface JohnsonEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: JohnsonTimelineKind;
  sourceIds: number[];
}

export const johnsonTimeline: JohnsonEvent[] = [
  {
    date: "2018-11-06",
    dateLabel: "November 6, 2018",
    title: "The upset: Johnson over Huffines",
    detail:
      "A Dallas business litigator with a physics degree - and a composing credit on the Funimation dub of Dragon Ball Z - unseats Senator Don Huffines by eight points, 54.13% to 45.87%, the first Democrat to hold Senate District 16 in more than three decades. Republicans' majority drops from 20 to 19. Huffines will resurface eight years later as the comptroller holding the state's Bitcoin.",
    kind: "path",
    sourceIds: [3, 2],
  },
  {
    date: "2019-01-08",
    dateLabel: "January 2019",
    title: "Business and Commerce",
    detail:
      "Sworn in January 8, 2019, Johnson lands on the Business and Commerce Committee, the panel that owns the grid. After Winter Storm Uri in 2021 the grid becomes his subject; by 2023 every Texas mining and reserve bill will cross his desk there.",
    kind: "path",
    sourceIds: [1, 2],
  },
  {
    date: "2023-03-08",
    dateLabel: "March 8, 2023",
    title: "SB 1929: the registry",
    detail:
      "One day after Kolkhorst files her cap, Johnson files the registry: any virtual currency mining facility over 75 megawatts of interruptible load registers with the Public Utility Commission within one business day of its power agreement, with its location and five years of anticipated demand, and the commission may hand the data to ERCOT. The Senate Research Center's analysis names the problem plainly - \"ERCOT's inability to see or control the behavior\" of large flexible loads. Senator Menéndez signs on.",
    kind: "registry",
    sourceIds: [4, 5, 6],
  },
  {
    date: "2023-04-12",
    dateLabel: "April 12, 2023",
    title: "Two bills pass the Senate the same day",
    detail:
      "Business and Commerce sends both bills out 11–0 on April 4; the Senate passes Kolkhorst's SB 1751 30–1 and Johnson's SB 1929 on April 12. The industry has already chosen: the registry it can live with, the cap it cannot.",
    kind: "registry",
    sourceIds: [4, 7],
  },
  {
    date: "2023-06-09",
    dateLabel: "May 22 → June 9, 2023",
    title: "His bill survives the House. Hers does not.",
    detail:
      "House State Affairs, where SB 1751 sits unheard, reports SB 1929 out 13–0 on May 3; the House passes it May 22 with Representative Dean as sponsor; the Senate concurs May 27; Abbott signs it June 9, effective September 1. CoinDesk's headline is the session in one line: two bills passed, one halted. Texas gets a registry and no cap.",
    kind: "registry",
    sourceIds: [4, 8],
  },
  {
    date: "2024-06-12",
    dateLabel: "June 12, 2024",
    title: "\"Every assumption we've made ... is now called into question\"",
    detail:
      "ERCOT's Pablo Vegas tells Business and Commerce that peak demand could go from about 85,000 megawatts to 150,000 by 2030, with data centers and miners more than half the growth. Johnson: the projection has \"huge policy implications, and every assumption we've made in the last four years is now called into question once again\" - the arrival of \"a completely new economy really in Texas, and certainly a new grid.\" Patrick, the same week: no \"Wild Wild West of data centers and crypto miners.\"",
    kind: "registry",
    sourceIds: [9, 10, 11],
  },
  {
    date: "2024-11-21",
    dateLabel: "November 21, 2024",
    title: "The rule, seventeen months later",
    detail:
      "The Public Utility Commission adopts the registration rule his statute required: mines over 75 megawatts file location, ownership, and annual demand, with penalties of up to $25,000 per violation per day and the data held off the public record. The Texas Blockchain Council calls it \"appropriate and far less invasive than what the Federal Government attempted\" - the federal survey the council had sued to stop.",
    kind: "registry",
    sourceIds: [12],
  },
  {
    date: "2025-02-18",
    dateLabel: "February 18, 2025",
    title: "\"Billionaire tech bros owning a branch of the state government\"",
    detail:
      "Business and Commerce hears Schwertner's reserve. Johnson goes after the donation clause: \"If someone decides to give $10 billion to the state, they're creating a market for themselves\" and could \"manipulate the market using the imprimatur of the state. I don't want the state to be a tool of an investor.\" Schwertner strips the clause; the committee votes 10–0. The reserve that emerges is state money only.",
    kind: "reserve",
    sourceIds: [13, 14, 17],
  },
  {
    date: "2025-03-06",
    dateLabel: "March 6, 2025",
    title: "He votes yes. Hancock votes no.",
    detail:
      "The Senate passes SB 21 25–5. The journal records Johnson among the yeas with Eckhardt, Menéndez, and West; the five nays are Creighton, Gutierrez, Hall, Nichols - and Kelly Hancock, the senator who eight months later, as acting comptroller, will buy the reserve's first Bitcoin. The Democrat who edited the bill voted for it; the Republican who would execute it voted against.",
    kind: "reserve",
    sourceIds: [15],
  },
  {
    date: "2025-05-29",
    dateLabel: "May 21–29, 2025",
    title: "The clause comes back, and dies again",
    detail:
      "The House restores donations, limited to Texans, and passes the bill 101–42. Johnson's office says he will vote against concurring. The Senate declines the House version on May 25; conferees are named May 27; the report adopted May 29 removes the donation clause for good. Abbott signs June 20. The same afternoon he signs SB 6, the large-load law that takes his 75-megawatt registry and adds interconnection standards and emergency curtailment for every load that size.",
    kind: "reserve",
    sourceIds: [16, 17, 18],
  },
  {
    date: "2025-07-15",
    dateLabel: "July 15, 2025",
    title: "The attorney general bid",
    detail:
      "Johnson launches a campaign for attorney general - \"for a long time, the attorney general's office has been used essentially as a party apparatus\" - the first major Democrat in the race to succeed Ken Paxton. He keeps his Senate seat through the campaign.",
    kind: "watch",
    sourceIds: [19, 20],
  },
  {
    date: "2026-05-26",
    dateLabel: "March 3 → May 26, 2026",
    title: "The nomination",
    detail:
      "Johnson leads the Democratic primary with 48.1%, then wins the runoff over Joe Jaworski with 60.5% on May 26. \"Attorneys General are supposed to make sure that the competitive market is competitive,\" he says. He faces Republican Senator Mayes Middleton on November 3, 2026 - a colleague from Business and Commerce and a coauthor of SB 6.",
    kind: "watch",
    sourceIds: [21, 2, 22, 18],
  },
];
