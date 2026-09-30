// Lancium and Texas - the sourced dataset.
//
// PHILOSOPHY: the sixth company page, and the odd one out: a private
// company that never mined at scale and never meant to host miners for
// long. Lancium is the Houston start-up that co-founded itself in
// November 2017 to put Bitcoin machines next to wind farms, patented the
// software that ramps them down in seconds, won ERCOT's first load-only
// Controllable Load Resource designation in 2020, sued two miners over
// the patents, promised Fort Stockton 325 megawatts and Abilene a $2.4
// billion Bitcoin-and-computing campus - and then, when the money moved,
// leased the Abilene land to Crusoe for the first Stargate site, took
// Blackstone's and Nvidia's money, and announced two more gigawatt
// campuses in a week. The thesis is the landlord who patented the
// switch: the company that taught ERCOT to treat a mine as a resource is
// the same one whose patents ERCOT's own counsel said may be "a barrier
// to entry" for other loads doing the same, and whose campuses now house
// almost no Bitcoin at all. The honest counterweight cuts both ways: the
// license it gave ERCOT is free and perpetual, its Abilene water use is
// a rounding error, and the flexibility it invented is real; and Fort
// Stockton stalled at 25 of 325 megawatts, the Bitcoin tenant it signed
// never deployed, Taylor County abated most of the tax, and Abilene's
// rents doubled.
//
// Verified September 30, 2026. Re-verify when the Nvidia investment
// terms are confirmed, when Childress and Hall County break ground,
// after the Batch Zero audit filing (December 10, 2026), and when the
// Abilene phase-two buildings energize.

export const LANCIUM_LAST_VERIFIED = "September 30, 2026";

export interface LanciumSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the company's own releases, the Federal
// Circuit, ERCOT's board materials, the City of Abilene and the DCOA,
// the Legislature, SEC filings by counterparties; then the Texas and
// trade press.
export const lanciumSources: LanciumSource[] = [
  { id: 1, label: "U.S. Court of Appeals for the Federal Circuit - BearBox LLC v. Lancium LLC, no. 2023-1922 (January 13, 2025, PDF): \"Mr. McNamara and Dr. Cline co-founded Lancium in November 2017\"; 120 miners running in Texas by October 2018; the software that became Smart Response; the opening line - \"Lancium allegedly stole Austin Storms' thunder and patented it\"; judgment for Lancium affirmed", url: "https://www.cafc.uscourts.gov/opinions-orders/23-1922.OPINION.1-13-2025_2449602.pdf" },
  { id: 2, label: "PR Newswire - With fifth patent, Lancium powers ahead in fast-ramping data center innovation (March 31, 2020): U.S. 10,608,433; Smart Response ramps \"in as little as five seconds\"", url: "https://www.prnewswire.com/news-releases/with-5th-patent-lancium-powers-ahead-in-fast-ramping-data-center-innovation-301033043.html" },
  { id: 3, label: "PR Newswire - Lancium and MP2 Energy offer unique energy demand response solution for high-throughput computing and cryptocurrency miners (June 19, 2020): the first load-only Controllable Load Resource in ERCOT, at Compute North's Big Spring site; McNamara - \"a testament to our technical and IP leadership\"", url: "https://www.prnewswire.com/news-releases/lancium-and-mp2-energy-offer-unique-energy-demand-response-solution-for-high-throughput-computing-and-cryptocurrency-miners-301080410.html" },
  { id: 4, label: "PR Newswire - CLR market leader Lancium files patent infringement lawsuit against Layer1 (August 14, 2020): W.D. Tex.; McNamara - \"We will also aggressively defend this intellectual property\"", url: "https://www.prnewswire.com/news-releases/controllable-load-resource-clr-market-leader-lancium-files-patent-infringement-lawsuit-against-layer1-301112687.html" },
  { id: 5, label: "PR Newswire - Lancium and Layer1 settle patent infringement suit (March 8, 2021): case 6:20-cv-00739; Layer1 licenses the patents and adopts Smart Response", url: "https://www.prnewswire.com/news-releases/lancium-and-layer1-settle-patent-infringement-suit-301242602.html" },
  { id: 6, label: "Fort Stockton Pioneer - Lancium breaks ground on first Clean Campus in Fort Stockton (September 15, 2021): 25 MW in the first quarter of 2022, 325 MW by the end of 2022; McNamara - \"we need to rethink the grid\"", url: "https://www.fortstocktonpioneer.com/news/lancium-breaks-ground-first-clean-campus-fort-stockton" },
  { id: 7, label: "PR Newswire - Lancium closes $150 million in financing (November 23, 2021): led by Hanwha Solutions; \"over 2,000 MW of capacity in development\"", url: "https://www.prnewswire.com/news-releases/lancium-closes-150m-in-financing-to-advance-ambitious-growth-strategy-301431182.html" },
  { id: 8, label: "Hanwha Solutions - Hanwha Solutions unveils $100 million investment in Lancium (November 24, 2021): a board seat; Lancium \"founded by Michael McNamara in 2017\"", url: "https://www.hanwhasolutions.com/en/cs/news/view?idx=584" },
  { id: 9, label: "CoinDesk - Crypto mining power management firm Lancium raises $150 million (November 24, 2021): Fort Stockton's 325 MW expected in the fourth quarter of 2022", url: "https://www.coindesk.com/business/2021/11/24/crypto-mining-power-management-firm-lancium-raises-150m" },
  { id: 10, label: "City of Abilene / Development Corporation of Abilene - Taylor County and City of Abilene announce historic partnership with Lancium for a $2.4 billion data center campus (December 21, 2021, PDF): \"largest project in Abilene and Taylor County history\"; 200 MW to more than 1 GW; 57 jobs; about 800 acres; \"hosting Bitcoin mining and other energy-intensive applications\"; McNamara - \"We chose Abilene for our second Clean Campus\"", url: "https://abilenetx.gov/DocumentCenter/View/16123/DCOA-Lancium-news-release" },
  { id: 11, label: "CoinDesk - Power management firm Lancium signs $2.4 billion data center development deal (December 21, 2021)", url: "https://www.coindesk.com/business/2021/12/21/power-management-firm-lancium-signs-24b-data-center-development-deal" },
  { id: 12, label: "SEC - CleanSpark Form 8-K (March 29, 2022): a hosting agreement with Lancium for 200 MW at Abilene, with an option to 500 MW", url: "https://www.sec.gov/Archives/edgar/data/827876/000095017022005119/clsk-20220329.htm" },
  { id: 13, label: "The Block - CleanSpark inks deal to expand Texas mining capacity by up to 500 megawatts (March 31, 2022): at least 70% carbon-free power", url: "https://www.theblock.co/linked/140003/cleanspark-inks-deal-to-expand-texas-mining-capacity-by-up-to-500-megawatts" },
  { id: 14, label: "PR Newswire - Lancium's Fort Stockton facility qualifies as ERCOT Controllable Load Resource (November 2, 2022): McNamara - \"large power consumers can be transformed into a resource for power grid operators during times of stress\"", url: "https://www.prnewswire.com/news-releases/lanciums-fort-stockton-facility-qualifies-as-ercot-controllable-load-resource-301666370.html" },
  { id: 15, label: "PR Newswire - Lancium breaks ground on Abilene Clean Campus (November 3, 2022): more than 1,000 acres; interest from \"Bitcoin miners and high-performance computing\"", url: "https://www.prnewswire.com/news-releases/lancium-breaks-ground-on-abilene-clean-campus-301668382.html" },
  { id: 16, label: "Thompson Coburn - Bitcoin miner and Lancium patent power showdown in Texas (May 18, 2023): Lancium v. U.S. Data Mining Group, W.D. Tex. 6:23-cv-00344, filed May 10, 2023; seven patents; about 730 MW across four sites", url: "https://www.thompsoncoburn.com/insights/publications/item/2023-05-18/bitcoin-miner-and-lancium-patent-power-showdown-in-texas" },
  { id: 17, label: "PacerMonitor - Lancium LLC v. US Data Mining Group, Inc. d/b/a US Bitcoin: voluntary dismissal January 12, 2024; dismissed January 16, 2024; terms not public", url: "https://www.pacermonitor.com/public/case/48820470/Lancium_LLC_v_US_Data_Mining_Group,_Inc_dba_US_Bitcoin_et_al" },
  { id: 18, label: "Lancium - Crusoe to build initial 200 MW AI data center with plans to expand at the 1.2 GW Lancium Clean Campus (July 18, 2024): construction begun June 2024; Lancium's role - land, interconnection, site engineering, power orchestration", url: "https://lancium.com/2024/07/18/crusoe-lancium-clean-campus/" },
  { id: 19, label: "Crusoe - Crusoe, Blue Owl Capital, and Primary Digital Infrastructure enter $3.4 billion joint venture (October 15, 2024): two buildings, 206 MW, 998,000 square feet, \"Located at Lancium Clean Campus\"", url: "https://www.crusoe.ai/resources/newsroom/crusoe-blue-owl-capital-primary-digital-joint-venture" },
  { id: 20, label: "Bloomberg Law - Blackstone said to invest $500 million in Lancium AI growth (November 21, 2024): more than 5 GW across five West Texas sites by 2028", url: "https://news.bloomberglaw.com/private-equity/blackstone-is-said-to-invest-500-million-in-lancium-ai-buildout" },
  { id: 21, label: "Wikipedia - Stargate LLC: announced January 21, 2025 by OpenAI, SoftBank, Oracle, and MGX; the first site in Abilene", url: "https://en.wikipedia.org/wiki/Stargate_LLC" },
  { id: 22, label: "Texas Legislature Online - SB 6 witness list, Senate Business & Commerce (February 27, 2025): \"McNamara, Michael - CEO, Lancium (Shenandoah, TX)\" - on; Crusoe on; the Texas Blockchain Council on", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00006S.htm" },
  { id: 23, label: "KTXS - Taylor County residents raise concerns on Lancium tax breaks at commissioners meeting (February 11, 2025): the abatement amendment; a final vote February 25", url: "https://ktxs.com/news/local/taylor-county-residents-raise-concerns-on-lancium-tax-breaks-at-commissioners-meeting" },
  { id: 24, label: "KTAB / BigCountryHomepage - Taylor County estimated to see $18 million a year windfall from the Lancium AI project (2025): an 80% county abatement for ten years, 85% for the city, none from Abilene ISD", url: "https://www.bigcountryhomepage.com/news/stargate-abilene/taylor-county-estimated-to-see-18-million-year-windfall-from-lancium-ai-project/" },
  { id: 25, label: "Lancium - Crusoe expands AI data center campus in Abilene to 1.2 gigawatts (March 18, 2025): eight buildings, about 4 million square feet; McNamara - \"to transform large loads from potential risks to robust grid assets\"", url: "https://lancium.com/2025/03/18/crusoe-expands-ai-data-center-campus-in-abilene-to-1-2-gigawatts/" },
  { id: 26, label: "ERCOT - Board of Directors item 11, ERCOT–Lancium patent license agreement disclosure (April 7–8, 2025, PDF): \"Lancium's patents may be acting as a barrier to entry for increased CLR participation\"; a non-exclusive, perpetual, royalty-free license for the ERCOT region; Lancium at 9002 Six Pines Drive, Shenandoah", url: "https://www.ercot.com/files/docs/2025/04/01/11-ERCOT-Lancium-Patent-License-Agreement-Disclosure.pdf" },
  { id: 27, label: "GlobeNewswire - Crusoe, Blue Owl Capital, and Primary Digital Infrastructure enter the second phase of a $15 billion joint venture in Abilene (May 21, 2025): six more buildings; about 5,000 workers at peak", url: "https://www.globenewswire.com/news-release/2025/05/21/3085765/0/en/" },
  { id: 28, label: "PR Newswire - Lancium secures $600 million debt financing to advance Clean Campus development, starting with the 1.2 GW Abilene site (October 16, 2025): Santander; Abilene \"the inaugural site of Stargate\"", url: "https://www.prnewswire.com/news-releases/lancium-secures-600-million-debt-financing-to-advance-clean-campus-development-starting-with-1-2-gw-abilene-site-302585635.html" },
  { id: 29, label: "Texas House Committee on State Affairs - public hearing agenda (April 9, 2026, PDF): the interim charge on data centers, SB 6 implementation, and Batch Zero; \"Michael McNamara - CEO and Co-Founder - Lancium\" on panel two", url: "https://capitol.texas.gov/tlodocs/89R/handouts/C4502026040910001/9db6208c-1f72-41a6-8513-72c3eb6bc54d.PDF" },
  { id: 30, label: "Inside Climate News - Texas data center developers play offense on water (April 10, 2026): three of eight Abilene buildings running; more than 8,500 workers; 20 gallons a minute against a 500-gallon allocation; McNamara - \"a water shortage driven by shortages of engineering and money\"", url: "https://insideclimatenews.org/news/10042026/" },
  { id: 31, label: "QTS - QTS and Lancium announce data center campus in Hall County, Texas (July 13, 2026): more than $10 billion; 1 GW; up to eleven buildings; Lancium \"founded 2017, headquartered in The Woodlands\"", url: "https://q.com/news/qts-and-lancium-announce-data-center-campus-in-hall-county-texas/" },
  { id: 32, label: "Lancium - Crusoe and Lancium announce 1.0 gigawatt AI data center campus in Childress, Texas (July 15, 2026): 270 acres owned by Lancium; construction in the third quarter; Crusoe's adjacent 900 MW at Abilene", url: "https://lancium.com/2026/07/15/crusoe-and-lancium-announce-1-0-gigawatt-ai-data-center-campus-in-childress-texas/" },
  { id: 33, label: "ABC7 Amarillo - $10 billion data center campus planned near Turkey in Hall County (July 17, 2026): Childress rents doubling; a \"man camp\"", url: "https://abc7amarillo.com/news/local/10-billion-data-center-campus-planned-near-turkey-in-hall-county-lancium" },
  { id: 34, label: "Tech Times - Lancium activates two Texas AI gigawatt campuses in one week (July 19, 2026): both approved under ERCOT's pre-Batch Zero process", url: "https://www.techtimes.com/articles/320962/20260719/" },
  { id: 35, label: "Yahoo Finance / Forkast - Nvidia's $3 billion bet on Lancium (August 8, 2026), citing The Information: up to $3 billion, about 20%, about a $10 billion valuation; Blackstone about half", url: "https://finance.yahoo.com/technology/ai/articles/nvidia-3-billion-bet-lancium-211209280.html" },
  { id: 36, label: "PR Newswire - Lancium supports Governor Abbott's call for transparency and accountability in Texas data center development (August 10, 2026): McNamara - \"Large computing load can be an asset to the grid rather than a burden on it\"", url: "https://www.prnewswire.com/news-releases/lancium-supports-governor-abbotts-call-for-transparency-and-accountability-in-texas-data-center-development-302847121.html" },
  { id: 37, label: "Baker Botts - Texas large load interconnection update: ERCOT Batch Zero pause and verification process (August 17, 2026): no energization of large computational loads until verification is complete", url: "https://www.bakerbotts.com/thought-leadership/publications/2026/august/" },
  { id: 38, label: "Lancium - Lancium announces partnership with NVIDIA to advance gigawatt-scale AI factory development across its 15+ GW portfolio (August 24, 2026): a strategic investment, amount undisclosed; \"4 GW of leased capacity currently operational\"; \"a Blackstone portfolio company\"", url: "https://lancium.com/2026/08/24/" },
  { id: 39, label: "KACU - Panel tackles persistent concerns around Abilene's AI boom (September 2, 2026): rents doubled and tripled; protests over \"backroom data center deals\"; Crowley - \"Abatements are unpopular ... that is the only way you're going to have any authority\"", url: "https://www.kacu.org/local-news/2026-09-02/panel-tackles-persistent-concerns-around-abilenes-ai-boom" },
  { id: 40, label: "Compute Atlas - Lancium Fort Stockton facility profile (updated July 2026): 25 MW operational against 300 to 325 planned; 110 acres", url: "https://www.compute-atlas.com/facilities/lancium-fort-stockton-tx" },
  { id: 41, label: "Global Energy Monitor - Fort Stockton Clean Campus: \"no evidence ... deriving its power from carbon-free sources\"; the Broad Reach Power battery agreement of July 2022", url: "https://www.gem.wiki/Fort_Stockton_Clean_Campus" },
  { id: 42, label: "Freethink (sponsored) - A West Texas lab's mission to make cryptocurrency mining sustainable (June 15, 2023): Fort Stockton's immersion cooling; co-founder and CTO Raymond Cline Jr.; McNamara - \"one of the largest single Bitcoin mines ever built\"", url: "https://www.freethink.com/sponsored/clean-bitcoin-mining" },
  { id: 43, label: "Texas Legislature Online - SB 1751 witness list, Senate Business & Commerce (March 28, 2023): no Lancium witness", url: "https://capitol.texas.gov/tlodocs/88R/witlistbill/html/SB01751S.htm" },
  { id: 44, label: "Thunder Said Energy - Lancium: can AI data centers load shift? (November 14, 2025): the patent library reviewed; about 80 employees", url: "https://thundersaidenergy.com/downloads/lancium-can-ai-data-centers-load-shift/" },
  { id: 45, label: "Save Abilene - What is Stargate? (2025): the opposition's framing - 875 acres, 400,000 GPUs, \"Lancium owns the land\"", url: "https://saveabilene.com/stargate" },
  { id: 46, label: "Texas Blockchain Council - deck to the ERCOT Large Flexible Load Task Force (September 26, 2022, PDF): the definition of a large flexible load as one that is a CLR or interruptible", url: "https://www.ercot.com/files/docs/2022/09/23/LFLTF%20Deck%20Sept%2026.pdf" },
];

// Promised against built, for the campuses figure. Megawatts as stated
// by the company or its partners; "built" is what is operating or has
// broken ground as of September 2026.
export interface LanciumCampus {
  name: string;
  county: string;
  promised: number;
  promisedLabel: string;
  built: number;
  builtLabel: string;
  tenant: string;
}

export const lanciumCampuses: LanciumCampus[] = [
  { name: "Fort Stockton", county: "Pecos", promised: 325, promisedLabel: "325 MW by end-2022", built: 25, builtLabel: "25 MW", tenant: "Bitcoin hosting · no named tenant" },
  { name: "Abilene", county: "Taylor", promised: 1200, promisedLabel: "$2.4B · 200 MW → 1 GW+ (2021)", built: 1200, builtLabel: "1.2 GW · 3 of 8 buildings live", tenant: "Crusoe → Oracle → OpenAI (Stargate)" },
  { name: "Childress", county: "Childress", promised: 1000, promisedLabel: "1.0 GW", built: 0, builtLabel: "construction Q3 2026", tenant: "Crusoe" },
  { name: "Hall County", county: "Turkey", promised: 1000, promisedLabel: "1 GW · $10B+", built: 0, builtLabel: "announced July 2026", tenant: "QTS" },
];

export type LanciumTimelineKind = "patent" | "campus" | "court" | "stargate" | "watch";

// The arc: the patent → the campuses → the courts → Stargate → the
// gigawatts.
export interface LanciumEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: LanciumTimelineKind;
  sourceIds: number[];
}

export const lanciumTimeline: LanciumEvent[] = [
  {
    date: "2020-06-19",
    dateLabel: "November 2017 → June 2020",
    title: "Two men, 120 miners, and the patent on switching them off",
    detail:
      "Michael McNamara and Raymond Cline Jr. found Lancium in Houston in November 2017 to put Bitcoin machines next to wind farms and turn them down when the grid needs the power. By October 2018 the company is running 120 miners in Texas; by 2019 it has software watching the wind, ERCOT's prices, and the bitcoin price at once. The fifth patent, U.S. 10,608,433, issues March 31, 2020: a method for adjusting a data center's consumption under a power-option agreement, ramping \"in as little as five seconds.\" On June 19, 2020, with Shell's MP2 Energy, Lancium announces the first load-only Controllable Load Resource in ERCOT's history, at Compute North's site in Big Spring - the market status through which a mine sells its flexibility into the reserves. McNamara: \"a testament to our technical and IP leadership.\"",
    kind: "patent",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2021-03-08",
    dateLabel: "August 2020 → March 2021",
    title: "The first suit: Layer1 takes a license",
    detail:
      "On August 14, 2020 Lancium sues Layer1, the Peter Thiel-backed West Texas miner, in the Western District of Texas for infringing the '433 patent - \"We will also aggressively defend this intellectual property.\" The case settles March 5, 2021: Layer1 licenses the patents and adopts Lancium's Smart Response software. In April 2021 a Louisiana company called BearBox sues in Delaware claiming its founder, Austin Storms, invented the method first; Lancium will win that case at trial in 2023 and on appeal in 2025.",
    kind: "court",
    sourceIds: [4, 5, 1],
  },
  {
    date: "2021-12-21",
    dateLabel: "September → December 2021",
    title: "Fort Stockton, $150 million, and the biggest project in Abilene's history",
    detail:
      "Lancium breaks ground on its first Clean Campus at Fort Stockton on September 15, 2021, promising 25 megawatts by the first quarter of 2022 and 325 by year-end. On November 23 it closes $150 million led by Hanwha Solutions, which puts in $100 million for a board seat; McNamara claims \"over 2,000 MW of capacity in development.\" On December 21 the City of Abilene, Taylor County, and the Development Corporation of Abilene announce a $2.4 billion, twenty-year campus on about 800 acres - \"the largest project in Abilene and Taylor County history\" - starting at 200 megawatts and growing past a gigawatt, with 57 full-time jobs, for \"hosting Bitcoin mining and other energy-intensive applications.\" McNamara: \"We chose Abilene for our second Clean Campus.\"",
    kind: "campus",
    sourceIds: [6, 7, 8, 9, 10, 11],
  },
  {
    date: "2022-11-03",
    dateLabel: "March → November 2022",
    title: "A Bitcoin tenant signs for 200 megawatts, and the ground is broken",
    detail:
      "On March 29, 2022 CleanSpark, the Nevada miner, discloses a hosting agreement with Lancium for 200 megawatts at Abilene, with an option to 500, on power at least 70% carbon-free. On November 2 Fort Stockton qualifies as a Controllable Load Resource - \"large power consumers can be transformed into a resource for power grid operators during times of stress\" - and on November 3 Lancium breaks ground at Abilene on more than a thousand acres, citing interest from \"Bitcoin miners and high-performance computing.\" The site directories will still list Fort Stockton at 25 megawatts four years later, and no CleanSpark machine is ever reported at Abilene.",
    kind: "campus",
    sourceIds: [12, 13, 14, 15, 40],
  },
  {
    date: "2024-01-16",
    dateLabel: "May 2023 → January 2024",
    title: "The second suit: seven patents against US Bitcoin, dismissed without terms",
    detail:
      "On May 10, 2023 Lancium sues U.S. Data Mining Group - US Bitcoin, about 730 megawatts across four sites including King Mountain - in Waco on seven patents, seeking an injunction and enhanced damages. No Lancium witness appears at the Senate hearing on SB 1751 that spring. On January 12, 2024 Lancium voluntarily dismisses the case; the terms are not public. A year later the Federal Circuit affirms its win over BearBox in an opinion that opens, \"Lancium allegedly stole Austin Storms' thunder and patented it,\" and ends by finding it did not.",
    kind: "court",
    sourceIds: [16, 43, 17, 1],
  },
  {
    date: "2025-01-21",
    dateLabel: "July 2024 → January 2025",
    title: "Crusoe, Blackstone, and the campus becomes Stargate",
    detail:
      "On July 18, 2024 Crusoe announces a 200-megawatt AI data center on the Abilene Clean Campus, expandable to 1.2 gigawatts, with construction begun in June; Lancium's role is land, interconnection, engineering, and power orchestration. In October Crusoe, Blue Owl, and Primary Digital Infrastructure fund the first two buildings, 206 megawatts, for $3.4 billion. In November Blackstone takes an equity stake of more than $500 million; Bloomberg reports Lancium wants five gigawatts across five West Texas sites by 2028. On January 21, 2025 OpenAI, SoftBank, Oracle, and MGX announce Stargate at the White House, and its first site is Lancium's land in Abilene. The Bitcoin miners were never the tenants.",
    kind: "stargate",
    sourceIds: [18, 19, 20, 21],
  },
  {
    date: "2025-04-08",
    dateLabel: "February → May 2025",
    title: "McNamara testifies on SB 6, Taylor County abates, and ERCOT takes a free license",
    detail:
      "On February 27, 2025 McNamara testifies \"on\" SB 6 before Senate Business & Commerce, listed from Shenandoah; Taylor County amends its abatement that month over residents' objections - reported as 80% for ten years, with the city at 85% and the school district giving nothing. On April 7 and 8 ERCOT's board receives a disclosure from its general counsel: Lancium's patents \"may be acting as a barrier to entry for increased CLR participation,\" an oil company has filed a rule change arguing they do not apply, and Lancium has agreed to give ERCOT a non-exclusive, perpetual, royalty-free license covering every existing and future U.S. patent needed for loads to participate in the region. Crusoe expands Abilene to eight buildings and 1.2 gigawatts in March; the joint venture reaches $15 billion in May.",
    kind: "stargate",
    sourceIds: [22, 23, 24, 26, 25, 27],
  },
  {
    date: "2026-04-10",
    dateLabel: "October 2025 → April 2026",
    title: "$600 million of debt, a House hearing, and twenty gallons a minute",
    detail:
      "Lancium closes $600 million of debt with Santander on October 16, 2025, describing Abilene as \"the inaugural site of Stargate.\" On April 9, 2026 McNamara sits on the second panel of the House State Affairs Committee's interim hearing on data centers, SB 6, and Batch Zero. Inside Climate News reports the next day that three of Abilene's eight buildings are running, more than 8,500 workers are on site, and the campus is drawing about 20 gallons of water a minute against a 500-gallon allocation. McNamara: \"We have a water shortage, but it's a water shortage driven by shortages of engineering and money. We can fix all of those.\"",
    kind: "stargate",
    sourceIds: [28, 29, 30],
  },
  {
    date: "2026-07-15",
    dateLabel: "July 2026",
    title: "Two gigawatt campuses in one week, both approved before the pause",
    detail:
      "On July 13, 2026 QTS and Lancium announce a campus of up to eleven buildings and a gigawatt of grid connection near Turkey in Hall County, more than $10 billion, with Lancium now describing itself as headquartered in The Woodlands. On July 15 Crusoe and Lancium announce a 1.0-gigawatt campus on 270 Lancium-owned acres at Childress, construction in the third quarter, and note Crusoe's adjacent 900 megawatts at Abilene. Both interconnections were approved under ERCOT's pre-Batch Zero process. In Childress the rents double and a workers' camp is planned.",
    kind: "watch",
    sourceIds: [31, 32, 34, 33],
  },
  {
    date: "2026-09-02",
    dateLabel: "August → September 2026",
    title: "The Governor's pause, Nvidia's money, and Abilene's second thoughts",
    detail:
      "The Governor's August 3 directive halts new large-load energizations pending verification. Lancium endorses it on August 10: \"Large computing load can be an asset to the grid rather than a burden on it.\" On August 24 it announces an Nvidia investment - undisclosed in its own release, reported by The Information at up to $3 billion for about a fifth of the company at about a $10 billion valuation - and describes itself as a Blackstone portfolio company with 4 gigawatts leased and operating and a pipeline past 15. On September 2 an Abilene Chamber panel hears that rents have doubled and tripled and that residents have protested \"backroom data center deals\"; the county judge: \"Abatements are unpopular ... that is the only way you're going to have any authority.\"",
    kind: "watch",
    sourceIds: [37, 36, 35, 38, 39],
  },
];
