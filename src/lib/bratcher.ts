// Lee Bratcher and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster, applied to
// the organizer rather than the officeholder or the builder. Abbott,
// Patrick, Schwertner, Hancock, and Huffines shaped what the State of
// Texas does with Bitcoin; Song shaped who can build on it; Bratcher built
// the machine that put the industry in the room every time the state
// decided. The record is drawn from the Texas Blockchain Council's own
// releases, the Legislature's witness lists and the Work Group report, the
// federal docket for the EIA case, Cipher's press release, and the
// Tribune, CoinDesk, Decrypt, and the Prospect for the rest. The honest
// counterweight: a trade association's revenue goes to lobbyists, the
// grid-flexibility argument is also a subsidy argument, and the founder now
// works for a miner.
//
// Verified September 10, 2026. Re-verify on a new session, a new TBC
// summit, or a change in Bratcher's role at Cipher.

export const BRATCHER_LAST_VERIFIED = "September 10, 2026";

export interface BratcherSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: TBC's own record, the Legislature and the Work
// Group, the federal case, Cipher's release, then press.
export const bratcherSources: BratcherSource[] = [
  { id: 1, label: "Dallas Baptist University, Institute for Global Engagement - Lee Bratcher: President and Founder, Texas Blockchain Council; former DBU political-science professor; M.A. International Relations, St. Mary's University; Ph.D. candidate, UT Dallas (blockchain land registries); Captain, U.S. Army Reserve, 75th Innovation Command; Richardson, Texas", url: "https://www.dbu.edu/ige/about/lee-bratcher.html" },
  { id: 2, label: "Decential Media - Lee Bratcher's Unconventional Path to Blockchain: Army officer, property-rights work at the Army Peacekeeping and Stability Operations Institute, the whitepaper, the dissertation on blockchain land administration (2016), TBC as a side project until 2021, the summit at 1,300 in 2023", url: "https://www.decential.io/articles/lee-bratchers-unconventional-path-to-blockchain" },
  { id: 3, label: "Texas Blockchain Council - home: founded 2019; more than 100 member companies; the North American Blockchain Summit", url: "https://texasblockchaincouncil.org/" },
  { id: 4, label: "PR Newswire - Texas Blockchain Council Spearheads Passage of Two Blockchain Laws (July 14, 2021): HB 1576 (Work Group) and HB 4474 (virtual currency in the UCC), sponsors Rep. Tan Parker and Sen. Angela Paxton, signed June 2021", url: "https://www.prnewswire.com/news-releases/texas-blockchain-council-spearheads-passage-of-two-blockchain-laws-301333162.html" },
  { id: 5, label: "Texas Legislature Online - 87(R) HB 4474: control of virtual currency and the rights of purchasers under the Uniform Commercial Code (enrolled)", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 6, label: "SMU Dedman School of Law - Texas Work Group on Blockchain Matters Releases 2022 Legislative Report and Master Plan (November 15, 2022): 16 members, Bratcher appointed by Speaker Dade Phelan, 84 pages, eight subcommittees", url: "https://www.smu.edu/law/news-events/2022/texas-workgroup-on-blockchain-matters" },
  { id: 7, label: "The Texas Tribune - Texas Republicans want to make the state the center of the cryptocurrency universe (October 28, 2021): the first Texas Blockchain Summit, Austin, October 8, 2021, 700 attendees; Bratcher on mining flexibility and a property-tax-in-bitcoin amendment", url: "https://www.texastribune.org/2021/10/28/texas-republicans-blockchain-bitcoin/" },
  { id: 8, label: "CBS Austin - Bitcoin leaders push back against SB 1751 restrictions with campaign ahead of Senate vote (April 2023): the \"Don't Mess With Texas Innovation\" campaign; Bratcher on ratepayer costs and a \"targeted bill against a single industry\"", url: "https://cbsaustin.com/news/local/bitcoin-leaders-push-back-against-sb-1751-restrictions-with-campaign-ahead-of-senate-vote" },
  { id: 9, label: "CoinDesk - Bitcoin Miners Gain Support From Texas With Two Bills Passed, One Halted (June 1, 2023): SB 1929 registration above 75 MW, HB 591 flared-gas exemption, SB 1751 stopped in House committee; Bratcher: \"Texas remains the jurisdiction of choice\"", url: "https://www.coindesk.com/policy/2023/06/01/bitcoin-miners-gain-support-from-texas-with-two-bills-passed-one-halted" },
  { id: 10, label: "Decrypt - Death of 'Anti-Mining' Bill Means Texas Miners Can Keep Raking in Energy Credits (June 2023): Bratcher \"thrilled\"; a Navarro County activist on why SB 1751 actually died", url: "https://decrypt.co/143214/death-of-anti-mining-bill-means-texas-miners-can-keep-raking-energy-credits" },
  { id: 11, label: "CoinDesk - Texas Blockchain Council, Riot Platforms Sue Dept. of Energy, OMB Over 'Emergency' Survey (February 23, 2024): the EIA-862 survey, the Paperwork Reduction Act claim, Bratcher on \"an alarming precedent\"", url: "https://www.coindesk.com/policy/2024/02/23/texas-blockchain-council-riot-platforms-sue-dept-of-energy-omb-over-emergency-survey" },
  { id: 12, label: "Bitcoin Magazine - Riot Platforms and Texas Blockchain Council seek injunction against EIA survey (February 23, 2024): the Waco hearing before Judge Alan Albright", url: "https://bitcoinmagazine.com/legal/miners-vs-the-eia-hearing-in-waco-texas" },
  { id: 13, label: "New Civil Liberties Alliance - Texas Blockchain Council et al. v. Department of Energy et al.: the case page; TRO February 23, 2024; survey withdrawn March 1, 2024", url: "https://nclalegal.org/case/texas-blockchain-council-et-al-v-department-of-energy-et-al/" },
  { id: 14, label: "Cointelegraph - US energy officials agree to 'destroy' all data from crypto mining survey (March 2024): the stipulated filing in the Western District of Texas; EIA to destroy responses and give 60 days' notice on any revised collection", url: "https://cointelegraph.com/news/us-department-of-energy-eia-riot-platforms-texas-blockchain-council" },
  { id: 15, label: "Texas Legislature Online - Senate Business & Commerce Committee witness list, February 18, 2025: Lee Bratcher, President, Texas Blockchain Council, Richardson - FOR SB 21", url: "https://capitol.texas.gov/tlodocs/89R/witlistmtg/html/C5102025021809301.HTM" },
  { id: 16, label: "CoinDesk - Texas Buys $5M in BTC ETF as States Edge Toward First Government Crypto Reserves (November 25, 2025): the Comptroller's placeholder purchase; Bratcher's congratulations at roughly $87,000 per coin", url: "https://www.coindesk.com/policy/2025/11/25/texas-buys-usd5m-in-btc-etf-as-states-edge-toward-first-government-crypto-reserves" },
  { id: 17, label: "Texas Blockchain Council - Texas Blockchain Council Announces New Leadership (January 5, 2026): Bratcher steps down after six years, stays on the board; Giovanni Capriglione named President, Jessi Goostree Executive Director; Board Chair Carol Haines", url: "https://texasblockchaincouncil.org/blog/texas-blockchain-council-announces-new-leadership" },
  { id: 18, label: "Cipher (NASDAQ: CIFR) - Cipher Welcomes Industry Veterans Lee Bratcher and Drew Armstrong (January 6, 2026): Bratcher as Head of Policy and Government Affairs - energy policy, ERCOT representation, regulatory and community engagement", url: "https://investors.cipherdigital.com/news-releases/news-release-details/cipher-welcomes-industry-veterans-lee-bratcher-and-drew" },
  { id: 19, label: "The American Prospect - The Crypto Racket (May 9, 2025): TBC's 2023 revenue of $949,488, more than half to a lobbying firm; Bratcher's count of about 40 mines at about 3,200 MW; the advisory board", url: "https://prospect.org/2025/05/09/2025-05-09-crypto-racket-texas-bitcoin-mining/" },
  { id: 20, label: "Houston Chronicle, Chris Tomlinson - Texas crypto miners put electric grid at risk by withholding data (February 2024): the case against the EIA suit from the grid's side", url: "https://www.houstonchronicle.com/business/columnists/tomlinson/article/bitcoin-electric-grid-texas-blackout-18699052.php" },
];

export type BratcherTimelineKind = "path" | "law" | "fight" | "turn";

// The arc: the officer → the council → the statutes → the fights → the turn.
export interface BratcherEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: BratcherTimelineKind;
  sourceIds: number[];
}

export const bratcherTimeline: BratcherEvent[] = [
  {
    date: "2016-01-01",
    dateLabel: "2016",
    title: "An Army officer reads the whitepaper",
    detail:
      "Working on property rights at the Army's Peacekeeping and Stability Operations Institute, Bratcher finds the Bitcoin whitepaper and turns it into a doctoral question: blockchain-based land administration. He goes on to teach political science and blockchain at Dallas Baptist University and onto a Ph.D. track at UT Dallas. The reserve captaincy - Tech Scout, 75th Innovation Command - stays.",
    kind: "path",
    sourceIds: [1, 2],
  },
  {
    date: "2019-01-01",
    dateLabel: "2019",
    title: "The Texas Blockchain Council, as a side project",
    detail:
      "Bratcher founds the TBC while still teaching, on a simple read of the market: nobody in Texas bridged the industry and the Capitol. It runs as a side project until he goes full-time in 2021.",
    kind: "path",
    sourceIds: [2, 3],
  },
  {
    date: "2021-06-01",
    dateLabel: "June 2021",
    title: "Two bills, one session: HB 4474 and HB 1576",
    detail:
      "The council's first legislative session produces two statutes signed by Governor Abbott: HB 4474, which writes virtual currency into the Texas Uniform Commercial Code, and HB 1576, which creates the Work Group on Blockchain Matters. Rep. Tan Parker and Sen. Angela Paxton carry them; the TBC's release says it \"spearheaded\" both and drafted with the Uniform Law Commission.",
    kind: "law",
    sourceIds: [4, 5],
  },
  {
    date: "2021-10-08",
    dateLabel: "October 8, 2021",
    title: "The first Texas Blockchain Summit",
    detail:
      "Seven hundred people in Austin, with Ted Cruz, John Cornyn, Cynthia Lummis, and the governor on the bill. Bratcher's pitch from the stage is the one that will define the next four years: mining is a load that buys power around the clock but can switch off when the grid is short.",
    kind: "law",
    sourceIds: [7],
  },
  {
    date: "2022-11-15",
    dateLabel: "November 15, 2022",
    title: "The Work Group reports",
    detail:
      "Appointed to the 16-member Work Group by Speaker Dade Phelan, Bratcher sits on the body his own bill created. Its 84-page report and master plan, eight subcommittees deep, becomes the 2023 session's reading list.",
    kind: "law",
    sourceIds: [6],
  },
  {
    date: "2023-04-10",
    dateLabel: "April–May 2023",
    title: "\"Don't Mess With Texas Innovation\": the SB 1751 fight",
    detail:
      "Senator Kolkhorst's SB 1751 would cap miners' share of ERCOT demand-response programs and strip their tax abatements. The TBC answers with a named campaign and Bratcher's framing - higher ratepayer costs, \"a targeted bill against a single industry.\" It passes the Senate and dies in House committee; the two bills the industry wanted, SB 1929 and HB 591, pass.",
    kind: "fight",
    sourceIds: [8, 9, 10],
  },
  {
    date: "2024-02-23",
    dateLabel: "February 23, 2024",
    title: "TBC v. Department of Energy",
    detail:
      "With Riot Platforms, the council sues the Energy Department, the EIA, and OMB in Waco over an \"emergency\" survey demanding miners' power data. Judge Alan Albright presses the government into a stand-down the same day; by March 1 the survey is withdrawn and the EIA agrees to destroy every response it received.",
    kind: "fight",
    sourceIds: [11, 12, 13, 14],
  },
  {
    date: "2025-02-18",
    dateLabel: "February 18, 2025",
    title: "The reserve hearing",
    detail:
      "Bratcher testifies for SB 21, the Texas Strategic Bitcoin Reserve, before Senate Business & Commerce - listed from Richardson as President of the Texas Blockchain Council. Four months later the governor signs it.",
    kind: "law",
    sourceIds: [15],
  },
  {
    date: "2025-11-20",
    dateLabel: "November 20, 2025",
    title: "The state buys",
    detail:
      "The Comptroller makes the reserve's first purchase, roughly $5 million of the iShares Bitcoin Trust as a placeholder for direct custody. Bratcher congratulates the state on buying at about $87,000 a coin.",
    kind: "law",
    sourceIds: [16],
  },
  {
    date: "2026-01-05",
    dateLabel: "January 5–6, 2026",
    title: "The turn: from the council to a miner",
    detail:
      "The TBC announces its founder is stepping down after six years, staying on the board; Rep. Giovanni Capriglione, author of the reserve statute, becomes President. The next day Cipher names Bratcher Head of Policy and Government Affairs - energy policy and ERCOT representation for a miner whose Texas footprint he spent six years arguing for.",
    kind: "turn",
    sourceIds: [17, 18],
  },
];
