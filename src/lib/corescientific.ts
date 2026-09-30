// Core Scientific and Texas - the sourced dataset.
//
// PHILOSOPHY: the third company page. The subject is Core Scientific -
// the Seattle-born miner that moved its headquarters to Austin, went
// public through a SPAC in January 2022, filed for Chapter 11 in Houston
// eleven months later, came out in January 2024 with its shareholders
// still holding sixty percent, and then converted its Texas mines into
// data centers for CoreWeave and AMD. The Texas record runs through
// Denton: a city-owned utility carrying about $140 million of Winter
// Storm Uri debt signed a partly redacted power contract with a company
// the council was not at first allowed to name, sold as a flexible load
// that would switch off when the grid was tight, and three years later
// voted unanimously to let the same site become a 394-megawatt
// supercomputer that does not switch off. The thesis is the dimmer
// switch: the flexibility that justified the mine is the thing the AI
// conversion removed, and in September 2026 the same city held its first
// hearing on a data-center moratorium while the company asked for more
// land. The honest counterweight cuts both ways: the conversion added
// about $3 billion to Denton's tax base and let the city cut its rate,
// the company pays its own power and interconnection costs, and no noise
// case was ever made against the Denton site; and the ledger is a
// bankruptcy, a restatement, a shareholder revolt, and $4.3 billion of
// debt to build buildings for two tenants.
//
// Verified September 30, 2026. Re-verify after the Denton moratorium's
// second hearing (October 27, 2026) and vote (December 1), the Q3 2026
// results (November), and the Batch Zero audit filing (December 10, 2026).

export const CORESCIENTIFIC_LAST_VERIFIED = "September 30, 2026";

export interface CoreSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the company's own filings and releases, the
// bankruptcy court and claims agent, the City of Denton, the Governor,
// ERCOT-facing filings; then the Texas and trade press.
export const coreSources: CoreSource[] = [
  { id: 1, label: "Core Scientific - Core Scientific to begin trading on Nasdaq (January 20, 2022): CORZ after the XPDI merger; about $222 million gross from the trust; headquartered in Austin, Texas; Levitt - \"a significant milestone in Core Scientific's evolution\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/37/core-scientific-to-begin-trading-on-nasdaq" },
  { id: 2, label: "SEC - Core Scientific / XPDI Form 424B3 (2021): the business combination; first merger January 19, 2022, second merger January 20; XPDI renamed Core Scientific, Inc.", url: "https://www.sec.gov/Archives/edgar/data/1839341/000162828022014364/corescientificinc-424b3.htm" },
  { id: 3, label: "GeekWire - Core Scientific, which started in Seattle but moved its headquarters to Austin, to go public at a $4.3 billion valuation (2021)", url: "https://www.geekwire.com/2021/core-scientific-started-seattle-relocated-austin-going-public-4-3b-valuation/" },
  { id: 4, label: "Core Scientific - Full fiscal year 2021 results (March 29, 2022): revenue $544.5 million; net income $47.3 million; 5,769 bitcoin self-mined; 5,296 held; 13.5 EH/s at year-end", url: "https://investors.corescientific.com/news-events/press-releases/detail/32/core-scientific-announces-full-fiscal-year-2021-results" },
  { id: 5, label: "Baxtel - Core Scientific's 300 MW blockchain data center in Texas to be 100% net carbon-neutral (October 7, 2021): 8171 Jim Christal Road, Denton; Levitt - \"Denton represents our first blockchain data center in Texas\"", url: "https://baxtel.com/news/core-scientific-s-300mw-blockchain-data-center-in-texas-to-be-100-net-carbon-neutral" },
  { id: 6, label: "City of Denton - Legistar file 21-1364 (August 24, 2021): ordinance approving a power purchase agreement between the City and Core Scientific Inc.", url: "https://denton-tx.legistar.com/LegislationDetail.aspx?ID=5092359&GUID=258CEBCC-D1B9-4996-934F-1ADA035D8595&Options=ID%7CText%7C&Search=power+purchase+agreement" },
  { id: 7, label: "BuzzFeed News, Sarah Emerson - How Denton, Texas, embraced a crypto miner it didn't want (March 7, 2022): the near-unanimous August 2021 vote, Armintor opposed; $200 million; $9–11 million a year to DME; 16 permanent jobs; DME's ~$140 million Uri debt; the 138-page redacted contract; the council barred at first from naming the company; Hogg - \"It's so weird the way everything was done so secretively\"", url: "https://www.buzzfeednews.com/article/sarahemerson/denton-texas-crypto-miner-core-scientific" },
  { id: 8, label: "Core Scientific - Form 8-K (December 21, 2022): the Chapter 11 filing, S.D. Tex. no. 22-90341; $513.3 million of convertible notes; the ad hoc noteholder group above 70%; 210 Barton Springs Road, Austin", url: "https://investors.corescientific.com/sec-filings/all-sec-filings/content/0001193125-22-310173/d366482d8k.htm" },
  { id: 9, label: "Core Scientific - Core Scientific announces comprehensive restructuring transaction (December 21, 2022): bitcoin's price, electricity costs, and \"failure by certain of its hosting customers to honor their payment obligations\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/14/core-scientific-announces-comprehensive-restructuring-transaction" },
  { id: 10, label: "Stretto - Core Scientific Chapter 11 case site: eleven debtors filed December 21, 2022, Houston Division; about $1.4 billion of assets against $1.3 billion of liabilities", url: "https://cases.stretto.com/corescientific/" },
  { id: 11, label: "SEC - Core Scientific Form 10-K for 2022 (April 4, 2023): revenue $640.3 million; operating loss $2.11 billion; 15.7 EH/s self-mining and 8.0 hosting; about 234,000 miners; 235 employees; Denton up to 297 MW; Pecos on MP2 Energy real-time pricing", url: "https://www.sec.gov/Archives/edgar/data/1839341/000162828023010454/core-20221231.htm" },
  { id: 12, label: "Cointelegraph - Core Scientific shuts down 37,000 mining rigs it was hosting for Celsius (January 4, 2023): powered down January 3 under court order; about $7.8 million of Celsius power costs absorbed", url: "https://cointelegraph.com/news/core-scientific-shuts-down-37k-mining-rigs-it-was-hosting-for-celsius" },
  { id: 13, label: "Core Scientific - Core Scientific and Celsius Mining enter into purchase agreement for the Cedarvale site, settle all litigation (September 15, 2023): Ward County, 215 MW; $14 million cash against a $45 million agreed value", url: "https://investors.corescientific.com/news-events/press-releases/detail/56/" },
  { id: 14, label: "CoinDesk - Celsius, Core Scientific resolve acrimonious mining dispute with $45 million deal (September 15, 2023): Celsius had claimed $312 million in damages", url: "https://www.coindesk.com/policy/2023/09/15/celsius-core-scientific-resolve-acrimonious-mining-dispute-with-45m-deal" },
  { id: 15, label: "Core Scientific - Fourth quarter and full year 2023 results (March 12, 2024): revenue $502.4 million; net loss $246.5 million against $2.15 billion in 2022; 13,762 bitcoin self-mined; 23.2 EH/s; Sullivan - \"more self-mined bitcoin than any other listed miner in North America\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/8/" },
  { id: 16, label: "Core Scientific - Core Scientific appoints Adam Sullivan chief executive officer (August 4, 2023): Levitt remains chairman", url: "https://investors.corescientific.com/news-events/press-releases/detail/61/" },
  { id: 17, label: "Core Scientific - Plan of reorganization confirmed by bankruptcy court (January 16, 2024): about $1 billion of debt reduced assuming warrant exercise; existing shareholders about 60% of the new equity; the $55 million rights offering; Sullivan - \"a defining moment\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/39/" },
  { id: 18, label: "Cointelegraph - Bitcoin miner Core Scientific to exit bankruptcy, relist shares (January 16, 2024): Judge Lopez - \"a tremendous recovery for both unsecured creditors and also equity holders\"; more than 240 jobs preserved", url: "https://cointelegraph.com/news/core-scientific-bankruptcy-relist-shares-chapter-11-bitcoin-miner" },
  { id: 19, label: "CoinDesk - Bitcoin miner Core Scientific to emerge from bankruptcy, relist this month (January 16, 2024): bitcoin about $43,000 at emergence against about $16,000 at filing", url: "https://www.coindesk.com/business/2024/01/16/bitcoin-miner-core-scientific-to-emerge-from-bankruptcy-re-list-shares-this-month" },
  { id: 20, label: "SEC - Core Scientific Form 10-K for 2024 (February 27, 2025): emergence January 23, 2024; CORZ trading again January 24", url: "https://www.sec.gov/Archives/edgar/data/1839341/000162828025008302/core-20241231.htm" },
  { id: 21, label: "Core Scientific - Core Scientific to provide approximately 200 MW of infrastructure to host CoreWeave's high-performance computing (June 3, 2024): twelve-year terms; more than $3.5 billion cumulative revenue; CoreWeave funds the capital; Sullivan - \"transform our hosting business and our earnings power\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/74/" },
  { id: 22, label: "Core Scientific - CoreWeave exercises final contract option for approximately 120 MW (October 22, 2024): about 500 MW total; $8.7 billion of cumulative contracted revenue over twelve years", url: "https://investors.corescientific.com/news-events/press-releases/detail/95/" },
  { id: 23, label: "Core Scientific - Approval of lease amendments with the City of Denton to enable high-performance computing expansion (November 20, 2024): council approval November 19; about 31 acres to about 78; 297 MW to 394 MW; $6.1 billion projected investment; Sullivan - \"one of the largest GPU supercomputers in North America\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/100/" },
  { id: 24, label: "City of Denton - The City of Denton announces an expanded commercial agreement with Core Scientific (November 20, 2024): 78.85 acres; $194 million in property tax to the city over ten years; 300 on-site jobs; no tax incentives; two new substations; transmission by 2029", url: "https://www.cityofdenton.com/CivicAlerts.aspx?AID=922" },
  { id: 25, label: "KERA - Goodbye, crypto; hello, AI: Denton data center is changing focus, planning to grow and use more power (November 21, 2024): unanimous votes; peak load up 73% by 2044; the load-shed obligation from 0.5% to 1%; the site no longer a \"dimmer switch\"; Beck - \"gets rid of the problematic associations that crypto has\"; Puente - \"Since Uri, there have been zero forced outages\"", url: "https://www.keranews.org/news/2024-11-21/goodbye-crypto-hello-ai-denton-data-center-is-changing-focus-planning-to-grow-and-use-more-power" },
  { id: 26, label: "American Public Power Association - Denton City Council approves amendments to PPAs with Core Scientific (November 25, 2024): completion 2027; transmission by 2029", url: "https://www.publicpower.org/periodical/article/denton-city-council-approves-amendments-ppas-with-core-scientific" },
  { id: 27, label: "SEC - Core Scientific Form 8-K exhibit 99.1 (February 26, 2025): the $1.2 billion Denton expansion with CoreWeave; about 70 MW more, to just over 260 MW of critical IT load; about 590 MW and $10.2 billion contracted across six sites", url: "https://www.sec.gov/Archives/edgar/data/1839341/000162828025008312/ex991-coreweavepressrelease.htm" },
  { id: 28, label: "Core Scientific - Fourth quarter and full year 2024 results (February 26, 2025): revenue $510.7 million, of which $24.4 million HPC; the warrant-driven net loss; 20.1 EH/s; three Texas facilities; headquartered in Austin", url: "https://investors.corescientific.com/news-events/press-releases/detail/109/" },
  { id: 29, label: "Texas Tribune - Tech leaders make the case for a growing blockchain industry in Texas (February 20, 2025): Carol Haines, Core Scientific's head of power and policy, on SB 6's backup-generation language - \"If the rules aren't clear, people won't come and they won't build\"", url: "https://www.texastribune.org/2025/02/20/texas-technology-blockchain/" },
  { id: 30, label: "SEC - Core Scientific 2025 proxy statement (March 28, 2025): Sullivan's base salary raised from $500,000 to $625,000; bonus target 125% of salary", url: "https://www.sec.gov/Archives/edgar/data/1839341/000119312525065652/d925494ddef14a.htm" },
  { id: 31, label: "Core Scientific - CoreWeave to acquire Core Scientific (July 7, 2025): all stock, 0.1235 CoreWeave shares per share; about $9.0 billion; a 66% premium to the June 25 price; 1.3 GW of gross power", url: "https://investors.corescientific.com/news-events/press-releases/detail/119/coreweave-to-acquire-core-scientific" },
  { id: 32, label: "Core Scientific - Second quarter 2025 results (August 8, 2025): revenue $78.6 million; net loss $936.8 million on warrant and CVR marks; colocation \"expanded into Denton during Q2 2025\"", url: "https://investors.corescientific.com/news-events/press-releases/detail/121/" },
  { id: 33, label: "PR Newswire - Two Seas Capital publishes investor presentation opposing Core Scientific's sale to CoreWeave (October 13, 2025): Toussi - \"inadequate value to Core Scientific shareholders, who own one of the best high-performance computing assets in the world\"", url: "https://www.prnewswire.com/news-releases/two-seas-capital-publishes-investor-presentation-describing-why-it-opposes-core-scientifics-proposed-sale-to-coreweave-302582037.html" },
  { id: 34, label: "SEC - Core Scientific merger proxy (September 2025): CoreWeave's June 2024 offer of $5.75 a share, about $1.02 billion, rejected; the special meeting October 30, 2025; about $15.64 implied per share at September 25", url: "https://www.sec.gov/Archives/edgar/data/1839341/000114036125036346/ny20053622x1_defm14a.htm" },
  { id: 35, label: "CoreWeave - CoreWeave comments on Core Scientific stockholder vote (October 30, 2025): the merger terminated; Intrator - \"We respect the views of Core Scientific stockholders and look forward to continuing our commercial partnership\"", url: "https://investors.coreweave.com/news/news-details/2025/CoreWeave-Comments-on-Core-Scientific-Stockholder-Vote/default.aspx" },
  { id: 36, label: "Core Scientific - Fourth quarter 2025 results (March 2, 2026): 2025 revenue $319.0 million, colocation $65.4 million; net loss $288.6 million against a restated $1,437.9 million for 2024; $222.0 million of bitcoin held; about 350 MW energized for CoreWeave; Hunt County and Pecos announced", url: "https://investors.corescientific.com/news-events/press-releases/detail/127/" },
  { id: 37, label: "StockTitan - Core Scientific flags restatement, swings to Q4 2025 profit (March 2, 2026): mining assets committed to demolition kept on the books instead of impaired; a material weakness; the auditor's 2024 control opinion revised to adverse", url: "https://www.stocktitan.net/sec-filings/CORZ/8-k-core-scientific-inc-tx-reports-material-event-4c33d1a7d591.html" },
  { id: 38, label: "SEC - Core Scientific Form 10-K for 2025 (March 2, 2026): Denton 394 MW gross on Denton Municipal Electric; Pecos 300 MW on Texas-New Mexico Power; Austin 20 MW on Austin Energy; 325 employees; 15.7 EH/s self-mining; principal executive office listed in Dover, Delaware, with leased offices in Texas and Florida", url: "https://www.sec.gov/Archives/edgar/data/1839341/000162828026013305/core-20251231.htm" },
  { id: 39, label: "Core Scientific - 2026 proxy statement (March 31, 2026): 315,594,802 shares at March 23; Sullivan's 2025 compensation $9.0 million, 2024 $6.4 million; 2025 say-on-pay \"lower support ... than we expected\"", url: "https://investors.corescientific.com/sec-filings/all-sec-filings/content/0001193125-26-134857/d119389ddef14a.htm" },
  { id: 40, label: "eGreenvilleExtra - How Hunt County's first AI data center came to be (March 25, 2026): 263.778 acres near Wieland bought for a solar farm in 2023; Core Scientific approached late 2025; commissioners \"expressed no knowledge of the data center\" before the outlet's article; no incentives sought", url: "https://eextra.news/greenville/2026/03/25/how-hunt-countys-first-ai-data-center-came-to-be/" },
  { id: 41, label: "Core Scientific - Core Scientific plans expansion to 1.5 gigawatts of gross power at its Pecos, Texas campus (April 27, 2026): 300 MW mining today plus 300 contracted; a \"scalable behind-the-meter solution\"; first data hall footings complete; initial capacity early 2027", url: "https://investors.corescientific.com/news-events/press-releases/detail/134/" },
  { id: 42, label: "Core Scientific - First quarter 2026 results (May 6, 2026): revenue $115.2 million, colocation $77.5 million; net loss $347.2 million with $266.5 million of impairments; 243 MW billing; the Hunt County site bought for about $233 million; $3.3 billion of 7.75% senior secured notes due 2031; 2,385 bitcoin sold", url: "https://investors.corescientific.com/news-events/press-releases/detail/136/" },
  { id: 43, label: "eGreenvilleExtra - Core Scientific hosts town hall for Hunt County data center (May 6, 2026): Lone Oak; under 6,750 gallons of water a day, closed-loop glycol cooling, the company pays \"100% of their energy costs\"; residents on runoff, bills, light, and noise; the promotional claim of $135 million a year to Quinlan for a site outside the city", url: "https://eextra.news/greenville/2026/05/06/core-scientific-hosts-town-hall-for-hunt-county-data-center/" },
  { id: 44, label: "Cross Timbers Gazette - Hudspeth: Denton's two data center projects (June 20, 2026): only Core Scientific's project required ERCOT evaluation; closed-loop cooling; a combined initial fill of about 5.44 million gallons, \"a large grocery store uses between 3 and 5 million gallons each year\"", url: "https://www.crosstimbersgazette.com/2026/06/20/hudspeth-dentons-two-data-center-projects/" },
  { id: 45, label: "Core Scientific - Core Scientific and AMD announce infrastructure partnership (July 28, 2026): more than 500 MW leased from 2027, expandable to 2.5 GW; Pecos 185 MW and Hunt County 110 MW among the five sites; AMD receives market-priced warrants", url: "https://investors.corescientific.com/news-events/press-releases/detail/138/" },
  { id: 46, label: "SEC - Core Scientific second quarter 2026 results, Form 8-K exhibit (July 28, 2026): revenue $164.2 million, colocation $136.7 million, self-mining $21.5 million; net loss $1,155.3 million on a $1.045 billion warrant mark; long-term debt $4.298 billion; 437 MW billing in July; about 1.1 GW leased; 319.6 million shares; four Texas facilities", url: "https://www.sec.gov/Archives/edgar/data/1839341/000183934126000013/q22026corescientificinc-ea.htm" },
  { id: 47, label: "Core Scientific - Core Scientific supports Governor Abbott's focus on responsible data center infrastructure in Texas (August 10, 2026): pays its own electric and infrastructure costs; low-water cooling; in Texas since 2022 with four facilities", url: "https://investors.corescientific.com/news-events/press-releases/detail/141/" },
  { id: 48, label: "Office of the Texas Governor - Governor Abbott announces Core Scientific, Vantage Data Centers, and SB Energy commit to comply with his data center standards (August 12, 2026): pay for their own infrastructure, reuse water, no taxpayer incentives, a PUC and ERCOT audit of each project; \"pay their own way\"", url: "https://gov.texas.gov/news/post/governor-abbott-announces-core-scientific-vantage-data-centers-and-sb-energy-commit-to-comply-with-his-data-center-standards" },
  { id: 49, label: "Utility Dive - ERCOT aims to complete the Governor's data center audit by December (August 21, 2026): the August 3 pause; about 300 projects of 75 MW or more in Batch Zero; crypto sites of 25 MW or more in the community-impact review; a queue near 474 GW; a December 10 target", url: "https://www.utilitydive.com/news/ercot-texas-puc-data-center-audit/828472/" },
  { id: 50, label: "Core Scientific - Form 8-K on the electrical power status of its Texas data centers (September 10, 2026): Denton's 297 MW conditionally approved as base load under pathway (a), 74 MW more validated in 2025, neither in Batch Zero; Pecos's 300 MW base load and 300 MW studied load conditionally approved in Batch Zero with collateral posted; Hunt County's 431 MW base load, advancing large load, construction begun", url: "https://investors.corescientific.com/sec-filings/all-sec-filings/content/0001839341-26-000023/core-20260910.htm" },
  { id: 51, label: "KERA / Denton Record-Chronicle - Denton holds first hearing on a data center moratorium as Core Scientific eyes more land (September 24, 2026): a 90-day pause, second hearing October 27; the company asked DME about land south of its site - Lutrick: \"They did not tell us what it's for\"; the 391 MW contract cap; about $3 billion added to assessed value; the tax rate cut from $0.595420 to $0.548485; Holland - \"they're carrying their weight\"", url: "https://www.keranews.org/news/2026-09-24/denton-holds-first-hearing-on-a-data-center-moratorium-as-core-scientific-eyes-more-land" },
  { id: 52, label: "Hoodline - Denton residents at hearing back temporary pause on new data centers (September 23, 2026): all twenty speakers for the moratorium; the campus on 78.85 acres; more than $3.5 million of tax revenue to date; a council vote expected in December", url: "https://hoodline.com/2026/09/denton-residents-at-hearing-back-temporary-pause-on-new-data-centers/" },
  { id: 53, label: "Community Impact - Denton officials weigh data center moratorium at public hearing (September 23, 2026): a vote as early as December 1; the second project is Qumulus AI at 20 MW; Core Scientific has not asked for power beyond its contract; Ferrie - \"We don't have longitudinal studies\"", url: "https://communityimpact.com/denton/government/denton-officials-weigh-data-center-moratorium-during-first-public-hearing/" },
  { id: 54, label: "Cointelegraph - US winter storm hits Bitcoin miner production, data shows (February 1, 2026): tracked public miners' output fell from 70–90 to 30–40 bitcoin a day in Winter Storm Fern; Core Scientific among those that \"routinely participate in grid-curtailment programs\"", url: "https://cointelegraph.com/news/bitcoin-miner-output-us-winter-storm-latest-data" },
  { id: 55, label: "CoinDesk - Eight U.S. blockchain lobby groups unite ahead of Trump's crypto-friendly regime (January 15, 2025): Core Scientific among the Texas Blockchain Council's biggest financial contributors, with MARA, Riot, Bitmain, and Cipher", url: "https://www.coindesk.com/policy/2025/01/15/eight-u-s-blockchain-lobby-groups-unite-ahead-of-trumps-crypto-friendly-regime" },
  { id: 56, label: "Senator Ted Cruz on X (August 12, 2024): \"Proud to be endorsed by the Texas Blockchain Council today at the Core Scientific Facility in Denton, TX\"", url: "https://x.com/tedcruz/status/1823061891067101657" },
];

// The Denton record, dated, for the strip figure: the city above the
// line, the company below.
export const dentonStrip: { d: string; l: string; sub: string; side: "city" | "company" }[] = [
  { d: "2021-02-15", l: "Uri", sub: "DME's ~$140M storm debt", side: "city" },
  { d: "2021-08-24", l: "The contract", sub: "PPA, 138 pages, partly redacted", side: "city" },
  { d: "2022-01-20", l: "CORZ lists", sub: "$4.3B SPAC valuation", side: "company" },
  { d: "2022-12-21", l: "Chapter 11", sub: "Houston · $513M of notes", side: "company" },
  { d: "2024-01-23", l: "Emergence", sub: "shareholders keep ~60%", side: "company" },
  { d: "2024-06-03", l: "CoreWeave", sub: "200 MW · $3.5B, then $8.7B", side: "company" },
  { d: "2024-11-19", l: "The vote", sub: "unanimous · 297 → 394 MW · $6.1B", side: "city" },
  { d: "2025-10-30", l: "Sale rejected", sub: "$9B CoreWeave offer voted down", side: "company" },
  { d: "2026-09-10", l: "Base load", sub: "297 MW outside Batch Zero", side: "company" },
  { d: "2026-09-23", l: "Moratorium", sub: "first hearing · all 20 speakers for", side: "city" },
];

export type CoreTimelineKind = "seattle" | "denton" | "houston" | "landlord" | "watch";

// The arc: the Seattle miner → the Denton contract → the Houston
// courtroom → the landlord → the audit and the moratorium.
export interface CoreEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: CoreTimelineKind;
  sourceIds: number[];
}

export const coreTimeline: CoreEvent[] = [
  {
    date: "2021-08-24",
    dateLabel: "2017 → August 2021",
    title: "A Seattle miner moves to Austin and finds a city that needs the money",
    detail:
      "Core Scientific is founded in the Seattle suburbs in 2017 and moves its headquarters to Barton Springs Road in Austin before it goes public. In August 2021 the Denton City Council, whose municipal utility is carrying about $140 million of debt from buying emergency power at $9,000 a megawatt-hour in Winter Storm Uri, approves a power purchase agreement and a seven-year land lease for a 300-megawatt mine beside the Denton Energy Center. The vote is near-unanimous; the 138-page contract is partly redacted; council members were at first not allowed to name the company; the utility may open the breaker when the grid is short but has, in the contract's words, no obligation to. Denton is promised $200 million of investment, $9 to $11 million a year, and sixteen permanent jobs.",
    kind: "seattle",
    sourceIds: [3, 7, 6, 5],
  },
  {
    date: "2022-01-20",
    dateLabel: "January → March 2022",
    title: "CORZ lists at a $4.3 billion valuation on a $47 million profit",
    detail:
      "The merger with Power & Digital Infrastructure Acquisition closes January 20, 2022 and CORZ begins trading on Nasdaq with about $222 million from the trust. The 2021 numbers arrive in March: revenue of $544.5 million, net income of $47.3 million, 5,769 bitcoin self-mined, 13.5 exahash, and guidance of 40 to 42 exahash by year-end. Denton is named as the company's first Texas data center; Pecos, in Reeves and Ward Counties on real-time power prices, follows.",
    kind: "seattle",
    sourceIds: [1, 2, 4, 11],
  },
  {
    date: "2022-12-21",
    dateLabel: "July → December 2022",
    title: "Celsius stops paying, and the company files in Houston",
    detail:
      "Celsius Mining, a hosting customer, stops paying after its parent's bankruptcy in July 2022; the price of bitcoin falls toward $16,000; power costs rise. On December 21, 2022 eleven Core Scientific entities file for Chapter 11 in the Southern District of Texas in Houston, case 22-90341, with about $513 million of convertible notes outstanding, about $1.4 billion of assets against $1.3 billion of liabilities, and a noteholder group holding more than 70% of the paper agreeing to take most of the new equity. The company's own explanation names the bitcoin price, electricity, and \"failure by certain of its hosting customers to honor their payment obligations.\" The year's net loss is $2.15 billion.",
    kind: "houston",
    sourceIds: [8, 9, 10, 15],
  },
  {
    date: "2023-09-15",
    dateLabel: "January → September 2023",
    title: "37,000 rigs switched off, a $312 million claim, and a site sold to settle it",
    detail:
      "On January 3, 2023 Core Scientific powers down more than 37,000 Celsius machines under court order, saying it has absorbed about $7.8 million of Celsius's power costs. Celsius claims $312 million in damages and moves for contempt. In August Mike Levitt steps down as chief executive and Adam Sullivan, the company's president, takes over. On September 15 the two bankrupt companies settle: Core sells Celsius its Cedarvale site in Ward County, 215 megawatts of available power, for $14 million in cash against an agreed value of $45 million, and both sides release every claim.",
    kind: "houston",
    sourceIds: [12, 14, 16, 13],
  },
  {
    date: "2024-01-23",
    dateLabel: "January 2024",
    title: "Out of bankruptcy with the shareholders still holding sixty percent",
    detail:
      "Judge Christopher Lopez confirms the plan on January 16, 2024 - \"a tremendous recovery for both unsecured creditors and also equity holders.\" Creditors are paid in full or equitized; about $1 billion of debt comes off assuming the warrants are exercised; a $55 million rights offering is oversubscribed; existing shareholders keep about 60% of the new company. Core Scientific emerges January 23 and CORZ trades again January 24, with bitcoin near $43,000 against $16,000 on the day it filed. It ends 2023 with a net loss of $246.5 million and, by its own count, more self-mined bitcoin than any other listed North American miner.",
    kind: "houston",
    sourceIds: [17, 18, 19, 20, 15],
  },
  {
    date: "2024-10-22",
    dateLabel: "June → October 2024",
    title: "CoreWeave: a $1 billion offer refused, a $8.7 billion lease accepted",
    detail:
      "In June 2024 CoreWeave offers $5.75 a share, about $1.02 billion, for the whole company; the board says no. Instead, on June 3, Core Scientific agrees to host 200 megawatts of CoreWeave's high-performance computing on twelve-year terms worth more than $3.5 billion, with the tenant funding the construction. Options are exercised through the summer and fall; by October 22 the contracts cover about 500 megawatts and $8.7 billion of cumulative revenue. In August Senator Cruz accepts the Texas Blockchain Council's endorsement at the Denton facility.",
    kind: "landlord",
    sourceIds: [34, 21, 22, 56],
  },
  {
    date: "2024-11-19",
    dateLabel: "November 2024 → February 2025",
    title: "Denton votes unanimously to turn the mine into a supercomputer",
    detail:
      "On November 19, 2024 the Denton council votes without dissent to expand the lease from about 31 acres to 78.85 and the power from 297 to 394 megawatts for a $6.1 billion conversion to GPU computing - $194 million in property tax to the city over ten years, 300 jobs, no incentives, two new substations, and transmission by 2029. The utility tells KERA the site will no longer act as a \"dimmer switch\" for the grid and that Denton's share of any statewide load shed will roughly double; a council member says the change \"gets rid of the problematic associations that crypto has.\" In February 2025 CoreWeave adds 70 megawatts at Denton for $1.2 billion, taking the site past 260 megawatts of critical IT load.",
    kind: "denton",
    sourceIds: [23, 24, 25, 26, 27],
  },
  {
    date: "2025-10-30",
    dateLabel: "July → October 2025",
    title: "The $9 billion sale the shareholders refused",
    detail:
      "On July 7, 2025 CoreWeave agrees to buy Core Scientific for about $9 billion in stock, 0.1235 of its shares for each CORZ share, a 66% premium to the June price, promising to eliminate more than $10 billion of lease payments. CoreWeave's stock falls through the summer and the implied price with it, to about $15.64 a share by late September. Two Seas Capital, the largest active holder, publishes its opposition on October 13 - \"inadequate value to Core Scientific shareholders, who own one of the best high-performance computing assets in the world\" - and the proxy advisers agree. On October 30 the stockholders vote the merger down and it is terminated; CoreWeave says the commercial relationship continues. Sullivan's 2025 pay is later disclosed at $9.0 million.",
    kind: "landlord",
    sourceIds: [31, 34, 33, 35, 39],
  },
  {
    date: "2026-07-28",
    dateLabel: "March → July 2026",
    title: "A restatement, a $233 million county, a 1.5-gigawatt Pecos, and AMD",
    detail:
      "On March 2, 2026 the company restates 2024 and most of 2025: mining assets committed to demolition for the conversions had stayed on the books instead of being written down, a material weakness that turns the auditor's 2024 control opinion adverse. The same day it announces a 431-megawatt site in Hunt County - 264 acres near Wieland that a solar developer brought to it, and which the county's commissioners learned of from a local newspaper - bought in the first quarter for about $233 million. In April it sets Pecos on a path from 300 megawatts of mining to 1.5 gigawatts behind the meter; in May it sells $3.3 billion of 7.75% notes and 2,385 bitcoin. On July 28 AMD agrees to lease more than 500 megawatts from 2027, 185 of them at Pecos and 110 in Hunt County, expandable to 2.5 gigawatts. Second-quarter colocation revenue is $136.7 million against $21.5 million from mining; long-term debt is $4.3 billion.",
    kind: "landlord",
    sourceIds: [37, 36, 40, 42, 41, 45, 46],
  },
  {
    date: "2026-09-23",
    dateLabel: "August → September 2026",
    title: "The Governor's standards, Batch Zero, and Denton's first moratorium hearing",
    detail:
      "Governor Abbott pauses new large-load interconnections on August 3 pending an audit; Core Scientific commits to his standards on August 10 - it pays its own power and infrastructure costs, cools with little water, has been in Texas since 2022 - and the Governor announces the commitment on August 12. On September 10 the company files an 8-K on where its Texas load stands: Denton's 297 megawatts are base load under the oldest pathway, energized before March 2022, and outside Batch Zero altogether, with 74 more validated in 2025; Pecos's 300 existing and 300 new megawatts are conditionally approved inside it; Hunt County's 431 are advancing, with collateral posted and construction begun. On September 22 and 23 Denton holds the first hearing on a ninety-day moratorium on new data centers. All twenty speakers support it. The company has asked the utility about leasing more land to the south; the utility's deputy manager tells the paper, \"They did not tell us what it's for.\" The second hearing is October 27.",
    kind: "watch",
    sourceIds: [48, 47, 49, 50, 51, 52, 53],
  },
];
