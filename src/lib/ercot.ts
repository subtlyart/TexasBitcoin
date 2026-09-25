// ERCOT and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: the sixth institutional page, and the operator's, distinct
// from the regulator's. The subject is the Electric Reliability Council
// of Texas - the nonprofit that runs the grid for ninety percent of the
// state, answers to a board the Legislature rebuilt in 2021 and to the
// Public Utility Commission - and how it has treated Bitcoin mining as a
// load: first as the fastest-growing thing in its queue, then as a
// resource it plans around, and now as a rounding error beside the data
// centers. The record is drawn from ERCOT's own reports, decks, market
// notices, and releases (read directly), the Independent Market
// Monitor's State of the Market reports, the miners' SEC filings, the
// Legislature's interim report, and the Texas Tribune and trade press.
// The thesis is the resource: ERCOT's capacity report treats every large
// flexible load - "typically a crypto-currency mining site" - as
// non-firm, its storm reports credit the mines with cutting 91.5% in
// Elliott and 4,100 megawatts in Fern, and all twelve loads it has
// registered as controllable resources are crypto mines. The honest
// counterweight is the market monitor's: those mines now hold 64% of
// the emergency reserve service, and paying them for it "essentially
// pays them to do what they would already do." ERCOT and the commission
// are kept distinct throughout.
//
// Verified September 26, 2026. Re-verify when ERCOT files the Batch Zero
// audit results (target December 10, 2026), when NPRR1337 is decided,
// and after the next winter event.

export const ERCOT_LAST_VERIFIED = "September 26, 2026";

export interface ErcotSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: ERCOT's own documents, the Independent
// Market Monitor, the miners' filings, the Legislature; then press.
export const ercotSources: ErcotSource[] = [
  { id: 1, label: "ERCOT - Company profile: 27 million customers, about 90 percent of the state's electric load; a membership-based 501(c)(4) nonprofit under a board of directors, the Public Utility Commission, and the Legislature", url: "https://www.ercot.com/about/profile" },
  { id: 2, label: "Congressional Research Service - R48914 (April 22, 2026), quoting FERC: transmission wholly within ERCOT \"is not subject to the Commission's jurisdiction\" under the Federal Power Act; about 20 GW of the 2025 queue for cryptocurrency mining", url: "https://www.congress.gov/crs_external_products/R/PDF/R48914/R48914.1.pdf" },
  { id: 3, label: "Texas Legislature Online - SB 2 (87R) enrolled text: the ERCOT board rebuilt - eleven members, eight chosen by a selection committee appointed by the governor, lieutenant governor, and speaker; Texas residency", url: "https://capitol.texas.gov/tlodocs/87R/billtext/html/SB00002F.htm" },
  { id: 4, label: "Texas Tribune - ERCOT board fires CEO Bill Magness (March 3–4, 2021)", url: "https://www.texastribune.org/2021/03/03/ercot-texas-bill-magness/" },
  { id: 5, label: "Texas Tribune - ERCOT picks Pablo Vegas as new CEO (August 16, 2022): from NiSource; started October 1, 2022; the governor had vetoed at least one candidate", url: "https://www.texastribune.org/2022/08/16/texas-ercot-ceo-pablo-vegas-power-grid/" },
  { id: 6, label: "ERCOT - Peak demand records: 91,089 MW on July 22, 2026 (unofficial); 85,508 MW on August 10, 2023; 80,148 MW on July 20, 2022", url: "https://www.ercot.com/static-assets/data/news/content/a-peak-demand/all-time-records.htm" },
  { id: 7, label: "PR Newswire - Lancium and MP2 Energy offer demand-response solution for high-throughput computing and cryptocurrency miners (June 19, 2020): \"the first successful load-only Controllable Load Resource (CLR) designation by ERCOT\"", url: "https://www.prnewswire.com/news-releases/lancium-and-mp2-energy-offer-unique-energy-demand-response-solution-for-high-throughput-computing-and-cryptocurrency-miners-301080410.html" },
  { id: 8, label: "Senators Warren, Markey, et al. - letter to ERCOT CEO Pablo Vegas (October 12, 2022, PDF): seven miners drawing more than 1,045 MW with 2,399 MW planned; interim CEO Brad Jones on Texas as the world's mining center - \"Yeah, that's what we are planning\"; Ed Hirs's \"tapeworm\"", url: "https://www.warren.senate.gov/imo/media/doc/Letter%20to%20ERCOT%20re%20Cryptomining2.pdf" },
  { id: 9, label: "ERCOT - Market notice W-A032522-01 (March 25, 2022): the interim large-load interconnection process, effective immediately - standalone loads of 75 MW or more, co-located 20 MW or more", url: "https://www.ercot.com/services/comm/mkt_notices/W-A032522-01" },
  { id: 10, label: "ERCOT - Large Flexible Load Task Force (inactive): first meeting April 14, 2022; chair Bill Blevins; succeeded by the Large Load Working Group", url: "https://www.ercot.com/committees/inactive/lfltf" },
  { id: 11, label: "ERCOT - Large Load Interconnection queue status update (August 22, 2022, PDF): 17,376 MW tracked on April 26, 2022, 35,142 MW on August 22; a Large Flexible Load Interconnection Manager hired", url: "https://www.ercot.com/files/docs/2022/08/22/LLI%20Queue%20Status%20Update%20-%202022-08-22_.pdf" },
  { id: 12, label: "Texas Blockchain Council - deck to the Large Flexible Load Task Force (September 26, 2022, ERCOT-hosted PDF): \"33,000 MWs is not possible\"; 1,500 to 2,000 MW energized in Texas in 2022", url: "https://www.ercot.com/files/docs/2022/09/23/LFLTF%20Deck%20Sept%2026.pdf" },
  { id: 13, label: "ERCOT - ERCOT creates voluntary curtailment program for large flexible loads (December 6, 2022): Rickerson - \"These customers are large power users but have the flexibility and willingness to reduce their energy use quickly, if needed\"", url: "https://www.ercot.com/news/release/2022-12-06-ercot-creates-voluntary" },
  { id: 14, label: "ERCOT - December 2022 cold-weather operations public report (March 27, 2023, PDF), § 12: large flexible loads \"curtailed their consumption from 1,530 MW to 130 MW (a 91.5% reduction) during the peak demand\"; 75 MW of responsive reserve; all twenty known sites curtailed, most above $70 to $110 per MWh", url: "https://www.ercot.com/files/docs/2023/03/27/December-2022-Cold-Weather-Operations-Public-Report.pdf" },
  { id: 15, label: "Baker Botts - Bitcoin and large loads in ERCOT (April 2023): 38,143 MW of large flexible loads in the queue in January 2023, \"predominantly bitcoin mining,\" against an 80,038 MW peak", url: "https://www.bakerbotts.com/thought-leadership/publications/2023/april/2022-energy-memo_bitcoin-and-large-loads-in-ercot" },
  { id: 16, label: "Riot Platforms - Form 8-K exhibit (September 6, 2023): $31.7 million in power and demand-response credits for August 2023 against 333 bitcoin mined; curtailed \"by more than 95% during periods of peak demand\"", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837023015517/riot-20230906xex99d1.htm" },
  { id: 17, label: "Riot Platforms - Riot responds to recent inquiries regarding its power strategy (September 8, 2023): about $24 million were resale credits under its TXU contract and about $7 million ERCOT ancillary-service credits, \"less than one percent of the program, which administered nearly $1 billion\"", url: "https://www.riotplatforms.com/riot-responds-to-recent-inquiries-regarding-its-power-strategy/" },
  { id: 18, label: "ERCOT - Independent Market Monitor report to the board (December 11, 2023, PDF): ECRS \"generated artificial shortages that produced massive inefficient market costs, totaling more than $12 Billion in 2023\"", url: "https://www.ercot.com/files/docs/2023/12/11/13%20Independent%20Market%20Monitor%20(IMM)%20Report.pdf" },
  { id: 19, label: "Texas Tribune - Texas Bitcoin miners profit from a strained grid (January 3, 2024): about twenty industrial mines up to 2,300 MW; Vegas - \"I'm interested in their operating characteristics\"; Hirs - \"Why can't I get $5 a kilowatt an hour for shutting down my power?\"", url: "https://www.texastribune.org/2024/01/03/texas-bitcoin-profit-electricity/" },
  { id: 20, label: "ERCOT - System operations update to the board (February 19, 2024, PDF): Winter Storm Heather peak 78,495 MW; large flexible loads curtailed \"on several occasions\" but \"the magnitude of response was not consistent day to day\"", url: "https://www.ercot.com/files/docs/2024/02/19/10.2%20System%20Operations%20Update_v3.pdf" },
  { id: 21, label: "ERCOT - Large Load Interconnection status update (April 1, 2024, PDF): about 40,808 MW in the queue; 4,479 MW approved to energize; observed simultaneous peak 2,538 MW", url: "https://www.ercot.com/files/docs/2024/03/26/LLI%20Queue%20Status%20Update%20-%202024-4-1.pdf" },
  { id: 22, label: "Texas Tribune - Texas Bitcoin mine noise, power grid, and the Legislature (July 10, 2024): Rickerson - mining \"can draw up to 2,600 megawatts,\" another 2,600 approved; \"the largest share of large flexible loads\"; Patrick - \"It can't be the Wild Wild West of data centers and crypto miners crashing our grid\"", url: "https://www.texastribune.org/2024/07/10/texas-bitcoin-mine-noise-power-grid-cryptocurrency/" },
  { id: 23, label: "Texas Senate Business and Commerce Committee - interim report to the 89th Legislature (December 2024, PDF): ERCOT's June 12, 2024 estimate of 40,000 MW of mining or large flexible load in the queue; recommends evaluating miners acting as \"energy traders\"", url: "https://senate.texas.gov/cmtes/89/c510/c510_InterimReport_2024.pdf" },
  { id: 24, label: "U.S. Energy Information Administration - Today in Energy (October 3, 2024): large flexible loads about 54 billion kWh in 2025, roughly 10% of ERCOT consumption; 5,479 MW approved; 65% historical utilization", url: "https://www.eia.gov/todayinenergy/detail.php?id=63344" },
  { id: 25, label: "ERCOT - 2025 Long-Term Load Forecast report (April 8, 2025, PDF): a \"Crypto\" category; a 49.8% peak-to-request factor applied to non-crypto data-center additions", url: "https://www.ercot.com/files/docs/2025/04/08/ERCOT-2025-Long-Term-Load-Forecast-Report.pdf" },
  { id: 26, label: "ERCOT - Capacity, Demand and Reserves report (May 2025, revised, PDF): \"ERCOT assumes all Loads other than Large Flexible Loads (i.e., crypto-currency mining) are considered Firm Loads\"; \"An LFL is typically a crypto-currency mining site\"", url: "https://www.ercot.com/files/docs/2025/05/16/CapacityDemandandReservesReport_May2025_Revised.pdf" },
  { id: 27, label: "Potomac Economics - 2024 State of the Market report for ERCOT (June 2025, PDF): \"The vast majority of LFLs in ERCOT are cryptocurrency mines\"; more than 3,600 MW non-coincident and 3,200 MW simultaneous by the end of 2024", url: "https://www.potomaceconomics.com/wp-content/uploads/2025/06/2024-State-of-the-Market-Report.pdf" },
  { id: 28, label: "ERCOT - Market notice M-B062325-01 (June 23, 2025): survey of data-center and crypto loads of 75 MW or more; about 2,600 MW the maximum sustainable sudden load loss", url: "https://www.ercot.com/services/comm/mkt_notices/M-B062325-01" },
  { id: 29, label: "ERCOT via PUC Interchange - Kristi Hobbs presentation, Project 55999 (October 23, 2025, PDF): the initial wave \"Mostly crypto-mining\" with \"much shorter timeline to interconnect (months rather than years)\"; the current wave AI data centers; flexible loads \"could utilize available transmission capacity if they are willing to curtail\"", url: "https://interchange.puc.texas.gov/Documents/55999_168_1550025.PDF" },
  { id: 30, label: "ERCOT - System planning and weatherization update to the board (December 2025, PDF): about 226 GW seeking interconnection against 63 GW in December 2024, about 73% data centers; 225 new requests in 2025 against 152 in 2022–2024", url: "https://www.ercot.com/files/docs/2025/12/02/16.2-System-Planning-and-Weatherization-Update_Revised.pdf" },
  { id: 31, label: "Utility Dive - ERCOT's large-load queue jumped almost 300% last year (January 6, 2026): Hobbs - \"We have outgrown the process that was established for reviewing these large loads. It was originally set up for, we were thinking about 40 to 50 loads back in the 2022 time frame\"", url: "https://www.utilitydive.com/news/ercots-large-load-queue-jumped-almost-300-last-year-official/808820/" },
  { id: 32, label: "ERCOT - ERS crypto-mining load presentation (January 7, 2026, PPTX): crypto mining \"increased to 64% of the total capacity procured\" for the December 2025 to March 2026 term; from 9 crypto ERS resources in late 2023 to 75; a fixed $75 million annual budget; on September 6, 2023 about 60% of ERS self-deployed before instruction", url: "https://www.ercot.com/files/docs/2026/01/05/05.-ERS-Crypto-Mining-Load-Presentation.pptx" },
  { id: 33, label: "ERCOT - System operations update to the board (February 2026, revised, PDF): Winter Storm Fern - \"Cryptocurrency mining began reducing ~4,100 MW Saturday\"; oil and gas about 4,200 MW, data centers 170 MW; adding reductions back \"brings Monday morning peak to 84,558 MW\"; twelve large-load ride-through events in 2025; a crypto demand-forecasting model implemented", url: "https://www.ercot.com/files/docs/2026/02/04/9.3-System-Operations-Update-REVISED.pdf" },
  { id: 34, label: "Potomac Economics - 2025 State of the Market report for ERCOT (June 2026, PDF): crypto demand about 4,600 MW in 2025; \"all 12 registered CLRs are cryptocurrency mines\"; crypto more than 64% of ERS capacity; \"allowing them to provide ERS essentially pays them to do what they would already do\"; flexible loads \"can shift a disproportionate share of transmission costs onto other consumers\"", url: "https://www.potomaceconomics.com/wp-content/uploads/2026/06/2025-State-of-the-Market-Report-for-ERCOT.pdf" },
  { id: 35, label: "ERCOT - Large-load update to Senate Business and Commerce (April 1, 2026, PDF): about 410 GW tracked, about 87% data centers", url: "https://www.ercot.com/files/docs/2026/04/01/ERCOT_LargeLoad_Update_April2026_B-C_-Hearing.pdf" },
  { id: 36, label: "ERCOT - PUCT approves ERCOT's new large-load interconnection process (June 18, 2026): NPRR1325 and PGRR145, Batch Zero; 438 GW in the queue, about 89% data centers; Vegas - \"This new process represents a fundamental shift\"; the first batch process at any U.S. grid operator", url: "https://www.ercot.com/news/release/06182026-puct-approves-ercots" },
  { id: 37, label: "ERCOT - Market notices M-A080326-01 and M-A080326-02 (August 3 and 20, 2026): the Governor's audit directive; the classification deadline missed; the commission's good-cause exception granted", url: "https://www.ercot.com/services/comm/mkt_notices/M-A080326-02" },
  { id: 38, label: "Utility Dive - ERCOT, Texas PUC launch data center audit (August 21, 2026): a community-impact review of crypto facilities of 25 MW and above; 157 medium data-center and crypto facilities; Seely - \"Our goal is to head toward a December 10 filing\"; the April 9, 2027 study date will slip", url: "https://www.utilitydive.com/news/ercot-texas-puc-data-center-audit/828472/" },
  { id: 39, label: "ERCOT - 89th Legislative Session status deck (July 2026, PDF): the SB 6 assignments - curtailment thresholds, a demand-management service that must exclude any customer \"that curtails in response to the wholesale price of electricity,\" breaker protocols, the net-metering study", url: "https://www.ercot.com/files/docs/2025/09/15/89th-Legislative-Session-PPTX-ERCOT-Status-July-2026.pdf" },
  { id: 40, label: "OBM - NPRR1337: what ERCOT's proposed ERS changes mean for Bitcoin miners (2026): an alternate-baseline test, filed May 26, 2026, to exclude price-responsive loads from the emergency reserve service", url: "https://obm.io/blog/nprr-1337-what-ercots-proposed-ers-changes-mean-for-bitcoin-miners/" },
  { id: 41, label: "Texas Tribune - Texas power grid sets a record; Vegas on what comes next (July 29, 2026): \"The ease at which we got through last week's peaks would not be the way I would characterize the future in two to three years. I think it will be much more difficult\"", url: "https://www.texastribune.org/2026/07/29/texas-ercot-power-grid-record-data-center/" },
  { id: 42, label: "ERCOT - ERCOT announces strategic organizational changes (December 12, 2025): a new Interconnection and Grid Analysis division under Jeff Billo; McKinsey engaged on a queue of \"over 225 gigawatts\"", url: "https://www.ercot.com/news/release/12122025-ercot-announces-strategic" },
];

// Bitcoin mining as an ERCOT load, by year - ERCOT's and the Independent
// Market Monitor's figures where they exist, the industry's for 2021.
export const ercotMiningByYear: { year: number; mw: number; note: string; who: string }[] = [
  { year: 2021, mw: 850, note: "700–1,000 MW energized", who: "TBC estimate" },
  { year: 2022, mw: 1530, note: "1,530 MW registered at Elliott's peak", who: "ERCOT" },
  { year: 2023, mw: 2300, note: "up to ~2,300 MW, ~20 mines", who: "ERCOT via Tribune" },
  { year: 2024, mw: 3600, note: "3,600 MW non-coincident, 3,200 simultaneous", who: "IMM" },
  { year: 2025, mw: 4600, note: "~4,600 MW peak crypto demand", who: "IMM" },
  { year: 2026, mw: 4100, note: "~4,100 MW cut in Winter Storm Fern", who: "ERCOT" },
];

export type ErcotTimelineKind = "operator" | "load" | "resource" | "queue" | "watch";

// The arc: the operator after Uri → the mines arrive → the resource →
// the queue outruns it → the audit.
export interface ErcotEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: ErcotTimelineKind;
  sourceIds: number[];
}

export const ercotTimeline: ErcotEvent[] = [
  {
    date: "2021-06-08",
    dateLabel: "June 2020 → June 2021",
    title: "The first controllable load, and a board rebuilt by the storm",
    detail:
      "A year before the mines arrive in numbers, ERCOT grants the first load-only Controllable Load Resource designation to a Lancium-operated computing site at Big Spring, the market status through which a mine can sell its flexibility into the reserve services. Then Winter Storm Uri: the board fires Bill Magness in March 2021, and in June the Legislature passes SB 2, cutting the board to eleven with eight members chosen by a committee the governor, lieutenant governor, and speaker appoint, all Texas residents. Brad Jones runs the operator on an interim basis; asked in 2022 whether Texas plans to be the world's mining center, he answers, \"Yeah, that's what we are planning.\"",
    kind: "operator",
    sourceIds: [7, 4, 3, 8],
  },
  {
    date: "2022-08-22",
    dateLabel: "March → September 2022",
    title: "The mines fill the queue: 17 gigawatts to 35 in four months",
    detail:
      "On March 25, 2022 ERCOT issues an interim interconnection process for loads of 75 megawatts or more, effective immediately, written for a category the notice never names. A Large Flexible Load Task Force meets from April 14. The tracked queue runs from 17,376 megawatts on April 26 to 35,142 on August 22 - against a peak of 80,148 that July - and ERCOT hires a Large Flexible Load Interconnection Manager. The Blockchain Council tells the task force in September that \"33,000 MWs is not possible\" and that perhaps two gigawatts are actually running. In October seven U.S. senators write Pablo Vegas, a month into the job, naming seven miners drawing more than a gigawatt.",
    kind: "load",
    sourceIds: [9, 10, 11, 6, 12, 5, 8],
  },
  {
    date: "2022-12-24",
    dateLabel: "December 2022",
    title: "The program, and the storm that proved it: 1,530 to 130",
    detail:
      "On December 6 ERCOT opens a voluntary curtailment program for \"large flexible customers, such as bitcoin mining facilities\" - a phone, text, and email request to cut load after non-spinning reserves are deployed and before emergency service is called. Woody Rickerson: \"These customers are large power users but have the flexibility and willingness to reduce their energy use quickly, if needed.\" Winter Storm Elliott arrives before the program goes live, and ERCOT's report records the mines doing it anyway: registered large flexible loads \"curtailed their consumption from 1,530 MW to 130 MW (a 91.5% reduction) during the peak demand,\" all twenty known sites, most once prices passed $70 to $110 a megawatt-hour, with 75 megawatts held as responsive reserve.",
    kind: "resource",
    sourceIds: [13, 14],
  },
  {
    date: "2023-09-08",
    dateLabel: "August → December 2023",
    title: "The $31.7 million month, and the $12 billion the monitor did not blame on mines",
    detail:
      "Riot reports $31.7 million in credits for curtailing Rockdale by more than 95% at the August peaks, against 333 bitcoin mined, and the press writes that ERCOT paid it; Riot answers that about $24 million were resale credits under its retail contract with TXU and about $7 million ERCOT's ancillary-service payments - \"less than one percent of the program, which administered nearly $1 billion.\" In December the Independent Market Monitor tells the board that ERCOT's new contingency reserve service \"generated artificial shortages that produced massive inefficient market costs, totaling more than $12 Billion in 2023\" - a critique of how much reserve ERCOT held, in which the mines are not named. Vegas, that fall, on the miners: \"I'm interested in their operating characteristics.\"",
    kind: "resource",
    sourceIds: [16, 17, 18, 19],
  },
  {
    date: "2024-07-10",
    dateLabel: "January → July 2024",
    title: "Heather, the numbers, and the Senate's 40,000 megawatts",
    detail:
      "In Winter Storm Heather the mines curtail \"on several occasions,\" ERCOT's operations chief reports, \"but the magnitude of response was not consistent day to day.\" By April the queue holds 40,808 megawatts with 4,479 approved to energize and an observed simultaneous mining peak of 2,538. On June 12 Vegas tells the Senate that peak demand could go from 85 gigawatts to 150 by 2030, more than half of it data centers and miners, and Rickerson puts 40,000 megawatts of mining or flexible load in the queue; the committee's interim report will recommend evaluating miners \"acting as 'energy traders.'\" In July Rickerson tells the Tribune mining \"can draw up to 2,600 megawatts,\" with as much again approved, and the Lieutenant Governor says it \"can't be the Wild Wild West of data centers and crypto miners crashing our grid.\"",
    kind: "resource",
    sourceIds: [20, 21, 23, 22],
  },
  {
    date: "2025-05-16",
    dateLabel: "April → June 2025",
    title: "Non-firm by definition: how ERCOT plans around the mines",
    detail:
      "ERCOT's planning documents write the mines into the grid as a resource. The May 2025 capacity report: \"ERCOT assumes all Loads other than Large Flexible Loads (i.e., crypto-currency mining) are considered Firm Loads\"; \"An LFL is typically a crypto-currency mining site.\" The long-term forecast carries a \"Crypto\" category and applies a 49.8% peak factor to the data centers but not to it. The market monitor's 2024 report counts \"more than 3,600 MW of non-coincident demand\" from mines by year-end, \"the vast majority of LFLs.\" In June ERCOT surveys every data-center and crypto load over 75 megawatts and sets 2,600 megawatts as the most the grid can lose at once without breaching frequency limits. The Legislature passes SB 6 on June 20.",
    kind: "resource",
    sourceIds: [26, 25, 27, 28],
  },
  {
    date: "2025-12-09",
    dateLabel: "October → December 2025",
    title: "\"We have outgrown the process\": 63 gigawatts to 226",
    detail:
      "Kristi Hobbs tells the commission in October that the first wave was \"mostly crypto-mining\" with \"much shorter timeline to interconnect (months rather than years)\" and the current wave is AI. In December she tells the board the queue holds about 226 gigawatts against 63 a year earlier, 73% data centers, with 225 new requests in 2025 against 152 in the three years before: \"We have outgrown the process that was established for reviewing these large loads. It was originally set up for, we were thinking about 40 to 50 loads back in the 2022 time frame.\" ERCOT creates an Interconnection and Grid Analysis division and hires McKinsey. The Congressional Research Service reads the same deck as about 20 gigawatts of crypto - nine percent.",
    kind: "queue",
    sourceIds: [29, 30, 31, 42, 2],
  },
  {
    date: "2026-01-26",
    dateLabel: "January 2026",
    title: "Fern: 4,100 megawatts of mining shed, and 64% of the emergency reserve",
    detail:
      "In Winter Storm Fern ERCOT's operations chief reports that \"cryptocurrency mining began reducing ~4,100 MW Saturday\" - beside 4,200 from oil and gas and 170 from data centers - and that adding the reductions back would have put Monday's peak at 84,558 megawatts; no emergency was declared and no conservation call made. Three weeks earlier ERCOT's own presentation on the emergency reserve service had shown crypto mines at 64% of the capacity procured for the winter, up from nine resources in late 2023 to 75, inside a fixed $75 million budget - and that on September 6, 2023 about 60% of the reserve had switched itself off before ERCOT asked.",
    kind: "resource",
    sourceIds: [33, 32],
  },
  {
    date: "2026-06-18",
    dateLabel: "April → June 2026",
    title: "The monitor's verdict, and Batch Zero",
    detail:
      "The market monitor's 2025 report: crypto demand about 4,600 megawatts; \"all 12 registered CLRs are cryptocurrency mines\"; crypto more than 64% of emergency reserve capacity; and \"allowing them to provide ERS essentially pays them to do what they would already do\" - with a recommendation to move them out of it and a warning that flexible loads \"can shift a disproportionate share of transmission costs onto other consumers.\" ERCOT files NPRR1337 on May 26 to exclude price-responsive loads from the reserve. On June 18 the commission approves Batch Zero - every request studied with every other, twice a year, the first such process at any U.S. grid operator - with 438 gigawatts in the queue, 89% of it data centers. Vegas: \"This new process represents a fundamental shift.\"",
    kind: "queue",
    sourceIds: [34, 40, 36],
  },
  {
    date: "2026-08-20",
    dateLabel: "July → September 2026",
    title: "A record peak, an audit, and a December filing",
    detail:
      "The grid sets its record, 91,089 megawatts, on July 22; Vegas: \"The ease at which we got through last week's peaks would not be the way I would characterize the future in two to three years.\" On August 3 the Governor orders an audit of every data center in the queue before more are approved; ERCOT misses its classification deadline, the commission grants an exception on August 20, and the audit covers 250 to 300 projects with a community-impact review of every crypto facility of 25 megawatts or more. Chad Seely: \"Our goal is to head toward a December 10 filing.\" ERCOT's SB 6 work continues in parallel, including a demand-management service that must exclude any customer \"that curtails in response to the wholesale price of electricity\" - the mines' whole model.",
    kind: "watch",
    sourceIds: [6, 41, 37, 38, 39],
  },
];
