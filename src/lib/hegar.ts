// Glenn Hegar and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from the Comptroller's own press releases, Fiscal Notes, and
// Manual of Accounts, Texas Legislature Online for the witness lists and
// fiscal notes, Texas Senate News for the hearing, the Texas A&M System for
// the chancellorship, and Texas press for the quotes. Hegar is the
// comptroller who could already buy it: for a decade he held the office
// that SB 21 addresses, with the authority to put state money into a spot
// Bitcoin fund from January 2024 on, and never did. When the Senate asked
// him in February 2025 whether it needed to pass the bill for him to buy,
// he said "I can do that already." Registered "on," not "for." Testified
// that the state, which built the nation's first state bullion depository
// under him, owned no gold. Left for Texas A&M eleven days after the
// statute took effect, having created the fund and nothing else. The
// honest counterweight is the whole page: a careful custodian's record,
// with the reserve built by his successors.
//
// Verified September 24, 2026. Re-verify if Hegar speaks on the reserve,
// and after the November 3, 2026 comptroller election.

export const HEGAR_LAST_VERIFIED = "September 24, 2026";

export interface HegarSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Comptroller's own record, the
// Legislature's, the university's, then Texas press.
export const hegarSources: HegarSource[] = [
  { id: 1, label: "Wikipedia - Glenn Hegar: born November 25, 1970; sixth-generation Texan raised on family farmland at Hockley; Texas A&M B.A. 1993; Texas House District 28 (2003–2007); Texas Senate District 18 (2007–2014); Comptroller January 2, 2015 – July 1, 2025", url: "https://en.wikipedia.org/wiki/Glenn_Hegar" },
  { id: 2, label: "Ballotpedia - Glenn Hegar: comptroller elections - 2014, 58.4% over Mike Collier; 2018, 53.2% over Joi Chevalier; 2022, 56.4% over Janet Dudding", url: "https://ballotpedia.org/Glenn_Hegar" },
  { id: 3, label: "Texas Comptroller - Texas Comptroller's Office Begins Operation of Texas Bullion Depository (June 6, 2018): \"the nation's first state-administered bullion depository is now a reality\"; \"I deposited some gold. The process was easy\"", url: "https://comptroller.texas.gov/about/media-center/news/20180606-texas-comptrollerand39s-office-begins-operation-of-texas-bullion-depository-1528304460000" },
  { id: 4, label: "Texas Legislature Online - HB 483 (84R) bill summary: the Texas Bullion Depository, effective June 19, 2015", url: "https://capitol.texas.gov/billlookup/BillSummary.aspx?LegSess=84R&Bill=HB483" },
  { id: 5, label: "Texas Comptroller, Fiscal Notes - Bitcoin and Beyond: Alternative Currencies, or History's Biggest Bubble? (April 2018): \"The state of Texas doesn't accept Bitcoin (or any other currency other than U.S. dollars) in payment for its taxes\"", url: "https://comptroller.texas.gov/economy/fiscal-notes/archive/2018/april/bitcoin.php" },
  { id: 6, label: "Texas Comptroller - Fiscal Notes: Understanding Cryptocurrency and Its Rise (August 23, 2022): Hegar - \"Cryptocurrency frequently appears in the news, but what it is and how it is used remains a mystery to many Texans\"", url: "https://comptroller.texas.gov/about/media-center/news/20220823-fiscal-notes-understanding-cryptocurrency-and-its-rise-1660670505542" },
  { id: 7, label: "Texas Comptroller, Fiscal Notes - Cryptocurrency in Texas: Opportunities and Challenges in Mining Digital Coins (August 2022): Rockdale's 300 direct jobs; roughly 3,000 MW of mining, 4% of peak; ERCOT projections of 6,000 MW in two years and 17,000 MW by 2030; Riot curtailed 72 times June–September; recommends renewing the data-center exemption", url: "https://comptroller.texas.gov/economy/fiscal-notes/archive/2022/aug/crypto-tx.php" },
  { id: 8, label: "Texas Comptroller, Fiscal Notes - The Future of Texas Power (September 2024): Texas crypto mines 2,717 MW at the end of 2023, the most in North America; Riot Rockdale 450 MW; \"A 1-MW cryptocurrency mine uses more energy than 700 households\"", url: "https://comptroller.texas.gov/economy/fiscal-notes/industry/2024/energy-demand/" },
  { id: 9, label: "Texas Legislature Online - SB 21 (89R) Senate witness list, February 18, 2025: Glenn Hegar, Comptroller of Public Accounts, registered \"On\" - not \"For\" - with staff Tom Currah and Victoria North and the Treasury Safekeeping Trust Company's Anca Ion and Whitney Blanton", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00021S.htm" },
  { id: 10, label: "Texas Senate News - Business and Commerce hears SB 21 (February 18, 2025): the office manages more than $100 billion; existing law already permits investment in SEC-regulated ETFs, none made; Hegar - \"Pioneering a strategic bitcoin reserve is a natural step for Texas, where innovation and ideas are nurtured and pursued\"", url: "https://senate.texas.gov/news.php?id=20250218a" },
  { id: 11, label: "Texas Scorecard - Texas Senate committee mulls measure establishing strategic bitcoin reserve (February 18, 2025): Hegar - \"a measured approach to managing a potentially volatile asset, a critical requirement when investing taxpayer dollars\"; \"step by step\"; \"we can upscale or downscale over time\"; to Johnson - \"I can do that already\"", url: "https://texasscorecard.com/state/texas-senate-committee-mulls-measure-establishing-strategic-bitcoin-reserve/" },
  { id: 12, label: "CBS Austin - Texas senators float creating state reserve of bitcoin (February 18, 2025): Hegar personally uneasy about accepting donations; Johnson - \"billionaire tech bros owning branches of government\"", url: "https://cbsaustin.com/news/local/texas-senators-float-creating-state-reserve-of-bitcoin" },
  { id: 13, label: "Texas Observer - From Bullion to Bitcoin: Crypto Reserve Is Latest Fiscal Folly in Texas (February 28, 2025): Hegar testified the state owns no gold despite the depository, that he was its first personal depositor, and that his office has authority to invest in crypto funds but has opted not to; \"officially neutral, was generally in favor\"", url: "https://www.texasobserver.org/texas-bitcoin-strategic-reserve-senate-bill-21/" },
  { id: 14, label: "Texas Senate - Business and Commerce Committee video, February 18, 2025, Part I", url: "https://www.senate.texas.gov/videoplayer.php?vid=21146&lang=en" },
  { id: 15, label: "Legislative Budget Board - fiscal note, SB 21 as introduced (February 17, 2025; source agency: Comptroller): implications \"cannot be determined\"; administrative costs \"could be absorbed using proceeds from the reserve\"; a fund outside the treasury \"may limit the Legislature's ability to make appropriation decisions\"", url: "https://capitol.texas.gov/tlodocs/89R/fiscalnotes/pdf/SB00021I.pdf" },
  { id: 16, label: "Texas Legislature Online - SB 21 (89R) House witness list, April 23, 2025: Whitney Blanton for the Comptroller and Trust Company, \"On\"; Hegar did not testify in the House", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00021H.htm" },
  { id: 17, label: "Texas Legislature Online - SB 21 (89R) bill history: Senate March 6, 2025; House May 21; conference report adopted May 29–30; signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/billlookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 18, label: "Texas A&M University System - Regents select Glenn Hegar as sole finalist to be chancellor (March 7, 2025)", url: "https://stories.tamu.edu/news/2025/03/07/texas-a-m-university-system-regents-select-glenn-hegar-as-sole-finalist-to-be-chancellor/" },
  { id: 19, label: "Texas A&M University System - Glenn Hegar named chancellor (March 28, 2025): unanimous regents' vote after the 21-day statutory wait", url: "https://stories.tamu.edu/news/2025/03/28/glenn-hegar-named-chancellor-of-the-texas-am-university-system/" },
  { id: 20, label: "Texas Comptroller - Comptroller Glenn Hegar Welcomes Former State Sen. Kelly Hancock to Comptroller's Office (June 19, 2025): chief clerk, to become acting comptroller July 1; \"Kelly is a great fit to serve as the chief financial officer of Texas\"", url: "https://comptroller.texas.gov/about/media-center/news/20250619-texas-comptroller-glenn-hegar-welcomes-kelly-hancock-to-comptrollers-office-1750300171508" },
  { id: 21, label: "Texas Comptroller - Manual of Accounts, Fund 1018, Texas Strategic Bitcoin Reserve: created June 25, 2025 under SB 21 and HB 4488; held by the Texas Treasury Safekeeping Trust Company; not appropriated", url: "https://fmcpa.cpa.state.tx.us/fiscalmoa/fund.jsp?num=1018" },
  { id: 22, label: "Texas Comptroller - press releases, June 1 – July 1, 2025: no release on Bitcoin or the reserve in Hegar's final month", url: "https://comptroller.texas.gov/about/media-center/news/?fromDate=2025-06-01&toDate=2025-07-01" },
  { id: 23, label: "Texas A&M University System - Glenn Hegar begins tenure as chancellor (July 1, 2025)", url: "https://news.tamus.edu/stories/glenn-hegar-begins-tenure-as-chancellor-of-the-texas-am-university-system/" },
  { id: 24, label: "Texas Tribune - Texas makes its first cryptocurrency investment (December 8, 2025): about $5 million in the iShares Bitcoin Trust on November 20, 2025, at $51.87 a share with Bitcoin at $91,336 - under Hancock", url: "https://www.texastribune.org/2025/12/08/texas-crypto-currency-investment/" },
  { id: 25, label: "Texas Comptroller - Acting Comptroller Kelly Hancock names Strategic Bitcoin Reserve advisory committee members (May 28, 2026): the committee and the custody RFP 908-26-1778WS", url: "https://comptroller.texas.gov/about/media-center/news/20260528-acting-texas-comptroller-kelly-hancock-names-strategic-bitcoin-reserve-advisory-committee-members-1778774749224" },
  { id: 26, label: "Texas A&M University System - Texas A&M System advances future of nuclear energy at RELLIS (2026): Hegar - \"Reliable power is one of those problems\"", url: "https://news.tamus.edu/stories/texas-am-system-advances-future-of-nuclear-energy-at-rellis/" },
  { id: 27, label: "Forbes India - Texas A&M to offer a course on Bitcoin (January 2023): Korok Ray's Bitcoin Protocol course, launched before Hegar's tenure", url: "https://www.forbesindia.com/article/cryptocurrency/texas-am-to-offer-a-course-on-bitcoin/82605/1" },
  { id: 28, label: "Texas Tribune - Don Huffines wins the Republican primary for comptroller (March 3, 2026): Huffines 57%, Hancock 24%, Craddick 15%; no Hegar endorsement on record", url: "https://www.texastribune.org/2026/03/03/don-huffines-christi-craddick-kelly-hancock-texas-gop-primary-comptroller/" },
  { id: 29, label: "Texas Tribune - Glenn Hegar named as Texas A&M System's next leader (March 7, 2025): the day after the Senate passed SB 21", url: "https://www.texastribune.org/2025/03/07/texas-am-system-chancellor-glenn-hegar/" },
];

export type HegarTimelineKind = "path" | "custodian" | "reserve" | "watch";

// The arc: the farm → the books → the hearing → the handoff.
export interface HegarEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: HegarTimelineKind;
  sourceIds: number[];
}

export const hegarTimeline: HegarEvent[] = [
  {
    date: "2015-01-02",
    dateLabel: "2003 → January 2015",
    title: "From the farm at Hockley to the state's books",
    detail:
      "Glenn Hegar - a sixth-generation Texan raised on family land at Hockley, a Texas A&M graduate with law degrees from St. Mary's and Arkansas - serves two terms in the Texas House and eight years in Senate District 18 before winning the comptroller's office in November 2014 with 58.4%. He is sworn in January 2, 2015 as the state's chief financial officer, tax collector, revenue estimator, and treasurer, with the Treasury Safekeeping Trust Company under him.",
    kind: "path",
    sourceIds: [1, 2],
  },
  {
    date: "2018-06-06",
    dateLabel: "June 2015 → June 2018",
    title: "The first reserve: a depository, and the state's own gold that never came",
    detail:
      "HB 483, Capriglione's bullion depository, takes effect June 19, 2015 and lands in his office. Hegar names an administrator, picks an operator, and opens the Texas Bullion Depository on June 6, 2018 as its first customer: \"the nation's first state-administered bullion depository is now a reality\"; \"I deposited some gold. The process was easy.\" Seven years later he will tell the Senate that the state itself never bought any.",
    kind: "custodian",
    sourceIds: [4, 3, 13],
  },
  {
    date: "2022-08-23",
    dateLabel: "April 2018 → August 2022",
    title: "The office studies the coin and the mines",
    detail:
      "Fiscal Notes, the comptroller's economic journal, runs \"Bitcoin and Beyond\" in April 2018 - Texas does not accept it for taxes - and in August 2022 a two-part study of mining: Rockdale's 300 direct jobs, roughly 3,000 megawatts of load at 4% of peak, ERCOT's projection of 17,000 by 2030, Riot curtailing 72 times in a summer, and a recommendation to renew the data-center exemption. Hegar's own line, in the release: \"Cryptocurrency frequently appears in the news, but what it is and how it is used remains a mystery to many Texans.\"",
    kind: "custodian",
    sourceIds: [5, 7, 6],
  },
  {
    date: "2024-09-01",
    dateLabel: "January → September 2024",
    title: "The authority he had, and the number his office published",
    detail:
      "In January 2024 the SEC approves spot Bitcoin exchange-traded funds, and under existing law the comptroller may invest in SEC-regulated ETFs. He does not. In September his Fiscal Notes puts Texas mining at 2,717 megawatts at the end of 2023, the most in North America, with Riot's Rockdale site alone at 450: \"A 1-MW cryptocurrency mine uses more energy than 700 households.\"",
    kind: "custodian",
    sourceIds: [10, 8],
  },
  {
    date: "2025-02-18",
    dateLabel: "February 18, 2025",
    title: "\"I can do that already\"",
    detail:
      "Business and Commerce hears SB 21. Hegar registers \"on,\" not \"for,\" and testifies that his office manages more than $100 billion, that it \"worked with the senator\" on the bill, and that it \"takes a measured approach to managing a potentially volatile asset, a critical requirement when investing taxpayer dollars.\" He will not recommend a dollar figure - \"step by step\"; \"we can upscale or downscale over time\" - says the state owns no gold, and is personally uneasy about donations. Senator Johnson asks whether the bill is needed for him to buy bitcoin. \"I can do that already. However, with that being said, having some parameters and expectations about you as the policymakers is always good.\"",
    kind: "reserve",
    sourceIds: [9, 10, 11, 12, 13],
  },
  {
    date: "2025-03-07",
    dateLabel: "March 6–28, 2025",
    title: "The Senate passes the bill; the regents pick the comptroller",
    detail:
      "The Senate passes SB 21 on March 6, 25–5. The next morning the Texas A&M System's regents name Hegar the sole finalist for chancellor; on March 28, after the statutory wait, they confirm him unanimously. The fiscal note his office sourced says the bill's cost \"cannot be determined\" and that administration \"could be absorbed using proceeds from the reserve.\" When the House hears the bill on April 23, his general counsel registers \"on\" in his place.",
    kind: "reserve",
    sourceIds: [17, 18, 19, 15, 16, 29],
  },
  {
    date: "2025-06-25",
    dateLabel: "June 19–25, 2025",
    title: "The handoff, the signature, and Fund 1018",
    detail:
      "On June 19 Hegar welcomes former Senator Kelly Hancock into the office as chief clerk - \"a great fit to serve as the chief financial officer of Texas\" - so that Hancock can become acting comptroller on July 1. On June 20 Abbott signs SB 21, effective immediately. On June 25 the Comptroller's Manual of Accounts opens Fund 1018, the Texas Strategic Bitcoin Reserve, held by the Trust Company, not appropriated. That entry is the only implementation step in his eleven days with the statute; his office's releases for the month say nothing about it.",
    kind: "reserve",
    sourceIds: [20, 17, 21, 22],
  },
  {
    date: "2025-11-20",
    dateLabel: "July 1 → November 20, 2025",
    title: "The reserve is built by the man who voted against it",
    detail:
      "Hegar begins at A&M on July 1. Hancock - who had voted no on SB 21 in March - takes the office the same day, and on November 20 makes the state's first purchase: about $5 million in the iShares Bitcoin Trust at $51.87 a share, with Bitcoin at $91,336. Hegar, who had held the authority to make that purchase for eighteen months, is not quoted on it.",
    kind: "watch",
    sourceIds: [23, 24],
  },
  {
    date: "2026-09-24",
    dateLabel: "2026",
    title: "The chancellor's silence",
    detail:
      "No statement by Hegar on the reserve has been located since he left: not on the November purchase, the May 28, 2026 advisory committee, the custody solicitation, or the March 3 primary in which his successor lost the office to Don Huffines - a race in which he made no endorsement on record. What he talks about now is power: \"Reliable power is one of those problems,\" he says of the nuclear pilots at RELLIS. A&M's Bitcoin course predates him.",
    kind: "watch",
    sourceIds: [25, 28, 26, 27],
  },
];
