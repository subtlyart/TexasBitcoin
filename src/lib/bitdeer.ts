// Bitdeer Technologies Group and Texas - the sourced dataset.
//
// PHILOSOPHY: the fifth company page, and the other half of Rockdale.
// The subject is Bitdeer - the Singapore company spun out of Bitmain in
// January 2021 by Jihan Wu, who still holds nearly seventy percent of
// its votes - and the mine it operates on the former Alcoa smelter land
// four-tenths of a mile from Riot's. It is the site where industrial
// Texas mining began: Bitmain promised Milam County $500 million and 400
// jobs in August 2018, got a tax abatement, suspended the project five
// months later with a crew of five, lost the abatement for missing the
// job count, and then quietly built the thing anyway - 25 megawatts in
// October 2019, 563 by 2024, 742 planned - while its neighbor gave
// tours, testified, sued the Department of Energy, and signed a $9.1
// billion AI lease. The thesis is the mine next door: the largest Texas
// site the site has never really reported on, because its owner does
// not talk. The honest counterweight cuts both ways: no nuisance suit,
// no county resolution, no abatement, a hundred-plus jobs at about
// $80,000, 310 megawatts curtailed in Winter Storm Fern; and a
// controlling founder in Singapore, a 300-million-gallon water bill the
// Texas Tribune had to find, and an AI plan that is still, after two
// years, "in active evaluation."
//
// Verified September 30, 2026. Re-verify at the Q3 2026 results
// (November), when the Rockdale AI conversion gets a tenant or a
// megawatt figure, after the TWDB water-survey compliance report
// (October 14, 2026), and after the Batch Zero audit filing (December
// 10, 2026).

export const BITDEER_LAST_VERIFIED = "September 30, 2026";

export interface BitdeerSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the company's own SEC filings (20-Fs, 6-Ks)
// and releases, the SPAC filings, Bitmain's release, the Legislature;
// then the Texas and trade press, and the U.S. Senate letter.
export const bitdeerSources: BitdeerSource[] = [
  { id: 1, label: "SEC - Bitdeer Technologies Group Form 20-F for 2025 (April 30, 2026): Rockdale \"became operational in February 2019 and had 563 MW electrical capacity in use as of March 31, 2026. We are evaluating converting this site for colocation or AI cloud use\"; the June 2018 Dory Creek lease with Alcoa; the spin-off by dividend in kind on January 26, 2021; Jihan Wu 19.5% of shares and 69.5% of votes; Tether affiliates 19.3% of Class A; 471 employees; revenue $620.3 million and net income $65.6 million", url: "https://www.sec.gov/Archives/edgar/data/1899123/000121390026049770/ea0282628-20f_bitdeer.htm" },
  { id: 2, label: "SEC - Bitdeer Form 20-F for 2024: revenue $349.8 million; net loss $599.2 million; Rockdale 563 MW completed and 179 MW in the pipeline for 2026; 1.4 EH/s of SEALMINER A1 hydro rigs energized there", url: "https://www.sec.gov/Archives/edgar/data/0001899123/000114036125014766/ef20038928_20f.htm" },
  { id: 3, label: "SEC - Bitdeer Form 20-F for 2022: 2021 revenue $394.7 million and net profit $82.6 million; 2022 revenue $333.3 million and net loss $60.4 million; Winter Storms Uri and Elliott as risk factors", url: "https://www.sec.gov/Archives/edgar/data/1899123/000110465923052895/btdr-20221231x20f.htm" },
  { id: 4, label: "SEC - Blue Safari Group Form 8-K exhibit (November 18, 2021): the Bitdeer merger at about a $4 billion enterprise value; five data centers in the United States and Norway; Wu - \"We are excited to enter into the Transaction\"", url: "https://www.sec.gov/Archives/edgar/data/1853084/000110465921140916/tm2125646d1_ex99-1.htm" },
  { id: 5, label: "SEC - Blue Safari Group Form 8-K (December 2022): the second extension of the merger deadline to June 2023; Bitdeer's interest-free loans to the SPAC to fund the extensions", url: "https://www.sec.gov/Archives/edgar/data/1853084/000110465922124703/tm2135137d30_8k.htm" },
  { id: 6, label: "SEC - Blue Safari Group Form 8-K exhibit (April 13, 2023): the business combination completed; BTDR trading from April 14; Kong - \"the start of a new era for Bitdeer\"", url: "https://www.sec.gov/Archives/edgar/data/1853084/000110465923045089/tm2312777d1_ex99-1.htm" },
  { id: 7, label: "GlobeNewswire - Bitdeer appoints Jihan Wu chief executive officer as Linghui Kong transitions to chief business officer (January 29, 2024): effective March 1", url: "https://www.globenewswire.com/news-release/2024/01/29/2818916/0/en/Bitdeer-Announces-Appointment-of-Jihan-Wu-as-New-Chief-Executive-Officer-as-Linghui-Kong-Transitions-to-Chief-Business-Officer.html" },
  { id: 8, label: "CoinDesk - Tether buys $100 million of Bitdeer shares with an option for $50 million more (May 31, 2024): 18.6 million Class A shares and a warrant for 5 million at $10", url: "https://www.coindesk.com/business/2024/05/31/tether-buys-100m-worth-of-bitdeer-shares-with-option-to-buy-50m-more" },
  { id: 9, label: "SEC - Tether Schedule 13D/A (August 8, 2024): 25.6 million Class A shares, 27.2% of the class", url: "https://www.sec.gov/Archives/edgar/data/1899123/000110465924087416/tm2421248d1_sc13da.htm" },
  { id: 10, label: "SEC - Bitdeer Form F-3ASR (August 10, 2026): \"Mr. Jihan Wu currently controls a majority of the voting power\"; Class V shares carry ten votes and may be held only by the founder and affiliates", url: "https://www.sec.gov/Archives/edgar/data/1899123/000121390026087012/ea0300737-f3asr_bitdeer.htm" },
  { id: 11, label: "KWTX - New Central Texas data center will create 400 jobs (August 6, 2018): Bitmain's $500 million plan; a ten-year phased abatement approved by Milam County; Barkemeyer - \"We welcome our newest employer\"", url: "https://www.kwtx.com/content/news/New-Central-Texas-data-center-will-create-400-jobs-490195701.html" },
  { id: 12, label: "Texas Standard - Rockdale: the small Texas town that's turning to bitmining (October 19, 2018): Alcoa's closures cost 1,700 jobs and 30% of the county's tax revenue; Miles - \"It made a hit on Rockdale; it hit us hard\"", url: "https://texasstandard.org/stories/rockdale-the-small-texas-town-thats-turning-to-bitmining/" },
  { id: 13, label: "KWTX - Chinese-owned cryptocurrency company suspends local operations (January 14, 2019): a skeleton crew of five; 7,000 to 8,000 servers on site", url: "https://www.kwtx.com/content/news/Chinese-owned-cryptocurrency-company-suspends-local-operations-504328361.html" },
  { id: 14, label: "Crowdfund Insider, citing Wired - Proposed $500 million Bitmain cryptomining facility dormant in Texas (July 13, 2019): the abatement approved August 13, 2018 and halted for missing the 350-job minimum; Young - \"if the market goes sour you're just up the creek\"", url: "https://www.crowdfundinsider.com/2019/07/149432-adios-amigo-proposed-500-million-bitmain-cryptomining-facility-dormant-in-texas/" },
  { id: 15, label: "PR Newswire - Bitmain fulfills commitment to Rockdale, Texas with launch of cryptocurrency mining farm to construct 50 MW facility (October 21, 2019): 25 MW initial, 300 MW potential on the 33,000-acre Alcoa site; DMG Blockchain as operator; King - \"Bitmain will be the future for developing new industry projects in Rockdale\"", url: "https://www.prnewswire.com/news-releases/bitmain-fulfills-commitment-to-rockdale-texas-with-launch-of-cryptocurrency-mining-farm-to-construct-50mw-facility-300941759.html" },
  { id: 16, label: "CoinDesk - Why Bitmain is building the world's largest Bitcoin mine in rural Texas (October 22, 2019): the facility named Dory Creek; fewer than fifty staff; Zhu - \"Our investment is not so sensitive to the bitcoin price\"; Hudson - \"People are a little skeptical\"", url: "https://www.coindesk.com/markets/2019/10/22/why-bitmain-is-building-the-worlds-largest-bitcoin-mine-in-rural-texas" },
  { id: 17, label: "KXXV - New developments made in bitcoin mining companies located in the decommissioned Alcoa power plant (c. 2020–21): Bitdeer \"(formerly Bitmain)\"; three lines built, two under construction, plans for sixteen; Young - \"I want the folks in this county to have good jobs\"", url: "https://www.kxxv.com/brazos/new-developments-made-in-bitcoin-mining-companies-located-in-decommissioned-alcoa-power-plant" },
  { id: 18, label: "CNBC - Bitcoin mining giants Bitdeer, Riot Blockchain in Rockdale, Texas (October 31, 2021): Riot's Whinstone \"throws open its doors to media,\" while Bitdeer is \"aloof, steeped in mystery, and definitely not keen on visitors\"; no answers on rigs, headcount, or output", url: "https://www.cnbc.com/2021/10/31/bitcoin-mining-giants-bitdeer-riot-blockchain-in-rockdale-texas.html" },
  { id: 19, label: "Senator Elizabeth Warren - Warren and colleagues press six cryptomining companies on energy use and climate impacts (January 27, 2022, letters PDF): Riot, Marathon, Stronghold, Bitdeer, Bitfury, Bit Digital", url: "https://www.warren.senate.gov/wp-content/uploads/media/doc/2022.01.27%20Letters%20to%20Cryptominers.pdf" },
  { id: 20, label: "Texas Legislature Online - SB 1751 witness list, Senate Business & Commerce, March 28, 2023: Riot and US Bitcoin against, the Texas Blockchain Council and ERCOT on; no Bitdeer witness", url: "https://capitol.texas.gov/tlodocs/88R/witlistbill/html/SB01751S.htm" },
  { id: 21, label: "Earthjustice - Cryptocurrency mining in Texas (September 12, 2023): Bitdeer Rockdale at 170 MW among the five largest Texas mines", url: "https://earthjustice.org/feature/cryptocurrency-mining-texas" },
  { id: 22, label: "Texas Standard, summarizing the Dallas Morning News - Chinese-owned crypto mines raise national security and grid concerns (October 20, 2023): Rockdale's draw equal to more than 300,000 homes; \"nearly $50 million\" for grid-balancing participation; the Lone Star Infrastructure Protection Act's reach", url: "https://www.texasstandard.org/stories/chinese-owned-crypto-mines-texas-national-security-energy-grid-concerns/" },
  { id: 23, label: "Dallas Morning News - Texas wears the crown as the bitcoin mining capital of the world (November 1, 2023): the watchdog report on Chinese-owned mines including Bitdeer", url: "https://www.dallasnews.com/news/watchdog/2023/11/01/texas-wears-the-crown-as-the-bitcoin-mining-capital-of-the-world/" },
  { id: 24, label: "Greenpeace USA - Impacted communities react to the water-consumption report (November 30, 2023): Bitdeer \"approximately four-tenths of a mile from Riot\" on the former Alcoa property", url: "https://www.greenpeace.org/usa/impacted-communities-and-enviro-advocates-react-to-new-report-showing-cryptominings-massive-water-consumption/" },
  { id: 25, label: "SEC - Bitdeer Form 6-K exhibit, November 2024 production update (December 5, 2024): Rockdale 563 MW online; the 100 MW hydro-cooling conversion; the 179 MW expansion \"in planning\" for 2026; 8.2 EH/s self-mining", url: "https://www.sec.gov/Archives/edgar/data/1899123/000114036124048440/ef20039505_ex99-1.htm" },
  { id: 26, label: "Bitget News, summarizing the fourth quarter 2024 release (February 26, 2025): a $531.9 million quarterly loss including $479.8 million of fair-value charges on notes and warrants; 594 bitcoin held", url: "https://www.bitget.com/news/detail/12560604601678" },
  { id: 27, label: "The Block - Bitdeer and Cipher plummet after 2024 earnings (February 25, 2025): BTDR down 28%; bitcoin mined fell from 1,299 to 469", url: "https://www.theblock.co/post/343269/bitcoin-mining-stocks-bitdeer-and-cipher-plummet-after-2024-earnings-show-continued-headwinds-to-profitability" },
  { id: 28, label: "SEC - Bitdeer Form 6-K exhibit, September 2025 production update (October 14, 2025): the Rockdale hydro conversion fully energized; 35.0 EH/s; SEALMINER A3 in mass production", url: "https://www.sec.gov/Archives/edgar/data/1899123/000121390025098957/ea026118901ex99-1_bitdeer.htm" },
  { id: 29, label: "SEC - Bitdeer third quarter 2025 results (November 10, 2025): revenue $169.7 million; net loss $266.7 million; 2,029 bitcoin held; Kong - \"The global shortage of AI infrastructure continues to deepen\"", url: "https://www.sec.gov/Archives/edgar/data/1899123/000121390025107865/ea026473801ex99-1_bitdeer.htm" },
  { id: 30, label: "The Block - U.S. probes Bitmain over national security concerns, Bloomberg reports (November 21, 2025): \"Operation Red Sunset\"; Bitmain calls the claims \"unequivocally false\"; no mention of Bitdeer", url: "https://www.theblock.co/post/379914/us-probes-chinese-bitcoin-mining-machine-giant-bitmain-over-national-security-concerns-bloomberg" },
  { id: 31, label: "GlobeNewswire - Bitdeer fourth quarter and full year 2025 results (February 12, 2026): revenue $620.3 million; net income $65.6 million; 55.2 EH/s at year-end; 2,017 bitcoin; Rockdale \"563 MW / Online / Crypto - Evaluating AI\"", url: "https://www.globenewswire.com/news-release/2026/02/12/3237044/0/en/bitdeer-reports-unaudited-financial-results-for-the-fourth-quarter-and-full-year-of-2025.html" },
  { id: 32, label: "GlobeNewswire - Bitdeer launches SEALMINER A4 series (April 7, 2026): 9.45 joules a terahash on the company's own SEAL04 chips", url: "https://www.globenewswire.com/news-release/2026/04/07/3269133/0/en/bitdeer-launches-sealminer-a4-series-bitcoin-mining-rigs-achieves-a-power-efficiency-of-9-45-j-th.html" },
  { id: 33, label: "GlobeNewswire - Bitdeer first quarter 2026 results (May 14, 2026): revenue $188.9 million; net loss $159.5 million; 65.1 EH/s; 31 bitcoin held; Rockdale \"in active evaluation of AI transition\"; Kong - \"2026 will be a defining year for Bitdeer as an AI infrastructure platform\"", url: "https://www.globenewswire.com/news-release/2026/05/14/3294742/0/en/Bitdeer-Reports-Unaudited-Financial-Results-for-the-First-Quarter-of-2026.html" },
  { id: 34, label: "Holland & Knight - Texas Governor Abbott directs data center audit (August 2026): the August 3 directive; audits of tax incentives, on-site generation, water, cooling, community impacts, and \"project ownership structures\"", url: "https://www.hklaw.com/en/insights/publications/2026/08/texas-gov-abbott-directs-data-center-audit" },
  { id: 35, label: "SEC - Bitdeer second quarter 2026 results (August 10, 2026): revenue $228.8 million; net loss $92.3 million; 73.0 EH/s; 150 bitcoin held; 227.4 million Class A and 44.4 million Class V shares; Rockdale \"active evaluation of AI transition\"", url: "https://www.sec.gov/Archives/edgar/data/0001899123/000121390026086938/ea030131301ex99-1.htm" },
  { id: 36, label: "SEC - Riot Platforms second quarter 2026 results (August 10, 2026): the 191 MW, twenty-year Rockdale lease to \"one of the world's leading frontier AI labs,\" about $9.1 billion", url: "https://www.sec.gov/Archives/edgar/data/1167419/000110465926093406/riot-20260810xex99d1.htm" },
  { id: 37, label: "Bitdeer - Bitdeer supports data center oversight in Texas (August 14, 2026): \"194+ hours of curtailment since 2025,\" \"310 MW load reduction during Winter Storm Fern,\" \"100+ local employees\" at about $80,000, no real-estate tax abatement; \"Greater industry disclosure encourages responsible, sustainable growth that puts Texans first\"", url: "https://www.bitdeer.com/news/bitdeer-supports-data-center-oversight-in-texas" },
  { id: 38, label: "Texas Tribune - Texas will audit up to 300 projects, mostly data center proposals (August 14, 2026): Seely - \"moving that verification process now to the front of the line\"", url: "https://www.texastribune.org/2026/08/14/texas-data-center-approval-pause-ercot-power-grid/" },
  { id: 39, label: "GlobeNewswire - Bitdeer announces acquisition of 200 acres near its Rockdale facility in Milam County to support AI/HPC infrastructure development (September 1, 2026): about $100 million cash; about 255 acres and 742 MW existing and pipeline; Potter - \"eliminates the renewal risk associated with a lease\"", url: "https://www.globenewswire.com/news-release/2026/09/01/3354593/0/en/bitdeer-announces-acquisition-of-200-acres-near-rockdale-facility-in-milam-county-texas-to-support-ai-hpc-infrastructure-development.html" },
  { id: 40, label: "Texas Tribune - Texas could penalize data centers for not reporting water use (September 14, 2026): only about 28% answered the water survey; Bitdeer's Rockdale facility at \"over 300 million gallons annually,\" a town of about 3,500", url: "https://www.texastribune.org/2026/09/14/texas-data-centers-abbott-water-survey-enforcement/" },
  { id: 41, label: "GlobeNewswire - Bitdeer August 2026 production and operations update (September 16, 2026): 1,310 bitcoin mined; 79.9 EH/s self-mining; 61 bitcoin held; AI cloud at about $86 million of annualized revenue; Rockdale \"well positioned to receive additional power allocations over the coming years\"", url: "https://www.globenewswire.com/news-release/2026/09/16/3363523/0/en/bitdeer-announces-august-2026-production-and-operations-update.html" },
  { id: 42, label: "SEC - Bitdeer Form 6-K exhibit, recent developments (September 2026): the Milam County footprint of \"approximately 255 acres and 742 MW\"; first-half AI cloud revenue $17.7 million", url: "https://www.sec.gov/Archives/edgar/data/0001899123/000121390026104638/ea030647301ex99-2.htm" },
  { id: 43, label: "Texas Legislature Online - Senate Business & Commerce interim hearing witness list (June 24, 2026): the Texas Blockchain Council's Jessi Goostree; no Bitdeer witness", url: "https://capitol.texas.gov/tlodocs/89R/witlistmtg/html/C5102026062409001.HTM" },
  { id: 44, label: "CCN - Bitcoin mining shock as Winter Storm Fern knocks major pools offline (January 2026): a Bitdeer spokesperson - the company \"stands ready to fully support the grid should supply constraints occur\"", url: "https://www.ccn.com/news/crypto/bitcoin-mining-shock-storm-fernan-knocks-major-pools-us/" },
  { id: 45, label: "Yahoo / Cointelegraph - Major Texas Bitcoin miners power down ahead of Winter Storm Elliott (December 2022): Bitdeer, Riot's Whinstone, Compute North, and Layer1", url: "https://sports.yahoo.com/major-texas-bitcoin-miners-close-093818932.html" },
];

// Rockdale, two neighbors, dated, for the strip figure: Bitmain and
// Bitdeer above the line, Whinstone and Riot below.
export const rockdaleStrip: { d: string; l: string; sub: string; side: "bitdeer" | "riot" }[] = [
  { d: "2018-08-13", l: "The promise", sub: "Bitmain · $500M · 400 jobs · abatement", side: "bitdeer" },
  { d: "2019-01-14", l: "Suspended", sub: "crew of five · abatement lost", side: "bitdeer" },
  { d: "2019-10-21", l: "25 MW", sub: "Bitmain launches · DMG operates", side: "bitdeer" },
  { d: "2020-06-01", l: "Whinstone", sub: "300 MW · Northern Data", side: "riot" },
  { d: "2021-01-26", l: "Spin-off", sub: "Bitdeer leaves Bitmain", side: "bitdeer" },
  { d: "2021-05-26", l: "Riot buys", sub: "~$651M · 700 MW planned", side: "riot" },
  { d: "2021-10-31", l: "“Aloof”", sub: "CNBC · no answers", side: "bitdeer" },
  { d: "2023-08-31", l: "$31.7M", sub: "Riot's August credits", side: "riot" },
  { d: "2024-12-05", l: "563 MW", sub: "Bitdeer's count · 179 more planned", side: "bitdeer" },
  { d: "2026-08-10", l: "$9.1B", sub: "Riot · 191 MW · AI lab · 20 yr", side: "riot" },
  { d: "2026-09-01", l: "200 acres", sub: "Bitdeer buys · $100M · “evaluating”", side: "bitdeer" },
];

export type BitdeerTimelineKind = "bitmain" | "rockdale" | "singapore" | "grid" | "watch";

// The arc: Bitmain's promise → the mine built quietly → the Singapore
// company → the grid and the state → the land.
export interface BitdeerEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: BitdeerTimelineKind;
  sourceIds: number[];
}

export const bitdeerTimeline: BitdeerEvent[] = [
  {
    date: "2018-08-13",
    dateLabel: "June → August 2018",
    title: "Bitmain promises Milam County $500 million and 400 jobs",
    detail:
      "Alcoa's smelter at Rockdale and Luminant's Sandow plant have closed, taking about 1,700 jobs and 30% of Milam County's tax base. In June 2018 a Bitmain subsidiary, Dory Creek, LLC, leases part of the 33,000-acre Alcoa site; on August 6 Bitmain announces a $500 million data center with 400 jobs, and on August 13 the commissioners court approves a ten-year phased tax abatement conditioned on 350 of them. The county judge: \"We welcome our newest employer.\" A barber: \"It made a hit on Rockdale; it hit us hard.\"",
    kind: "bitmain",
    sourceIds: [1, 11, 12, 14],
  },
  {
    date: "2019-10-21",
    dateLabel: "January → October 2019",
    title: "Suspended with a crew of five, then built anyway at 25 megawatts",
    detail:
      "Bitcoin falls below $4,000 and in January 2019 Bitmain suspends Rockdale, leaving five people and about 7,500 idle servers; the abatement is halted for want of the jobs. \"If the market goes sour you're just up the creek,\" the county judge says. In February, by the company's later account, the site becomes operational, and on October 21, 2019 Bitmain announces the launch of a 25-megawatt farm with a 50-megawatt target and 300 megawatts of potential, run by DMG Blockchain. CoinDesk calls it the world's largest mine in prospect and reports fewer than fifty staff. Rockdale's mayor: \"Bitmain will be the future for developing new industry projects in Rockdale, Texas.\" A former Alcoa worker: \"People are a little skeptical.\"",
    kind: "bitmain",
    sourceIds: [13, 14, 1, 15, 16],
  },
  {
    date: "2021-10-31",
    dateLabel: "January → October 2021",
    title: "Bitdeer leaves Bitmain, and the neighbor gives tours",
    detail:
      "On January 26, 2021 Bitmain distributes Bitdeer's shares to its own shareholders and the Rockdale mine becomes a Singapore company's, with Jihan Wu as chairman and Linghui Kong as chief executive; local television now describes it as \"Bitdeer (formerly Bitmain),\" with three lines built, two under construction, and plans for sixteen. In May Riot buys the Whinstone site four-tenths of a mile away for about $651 million and begins inviting reporters in. CNBC's Halloween 2021 dispatch from Rockdale: Riot's team \"thrives on transparency,\" while Bitdeer is \"aloof, steeped in mystery, and definitely not keen on visitors,\" and would not say how many machines, people, or bitcoin it had. In November it agrees to merge with the Blue Safari SPAC at about a $4 billion enterprise value.",
    kind: "singapore",
    sourceIds: [1, 17, 24, 18, 4],
  },
  {
    date: "2023-04-14",
    dateLabel: "January 2022 → April 2023",
    title: "A senator's letter, two storms, and a SPAC that took seventeen months",
    detail:
      "Senator Warren and seven colleagues write to Bitdeer and five other miners in January 2022 about energy use. The merger deadline is extended twice while Bitdeer lends the SPAC money to stay alive; in December 2022 the mine powers down with Riot and the rest of Texas ahead of Winter Storm Elliott. The combination closes April 13, 2023 and BTDR begins trading on Nasdaq. Bitdeer does not appear at the March 2023 hearing on SB 1751, where Riot and US Bitcoin testify against the brake on the miners. Revenue for 2022 is $333.3 million, the net loss $60.4 million.",
    kind: "singapore",
    sourceIds: [19, 5, 45, 6, 20, 3],
  },
  {
    date: "2023-11-01",
    dateLabel: "September → November 2023",
    title: "\"Nearly $50 million\" from the grid, and the Chinese-ownership question",
    detail:
      "Earthjustice counts the Rockdale site at 170 megawatts among the five largest in Texas. The Dallas Morning News's watchdog column, summarized by Texas Standard, reports that the mine draws power equal to more than 300,000 homes, that it \"has been awarded nearly $50 million for participating in these programs that help balance the grid,\" and that the Lone Star Infrastructure Protection Act of 2021, written to keep Chinese, Russian, Iranian, and North Korean interests off the grid, may not reach a load, on the Attorney General's reading, at all. Bitdeer is incorporated in the Cayman Islands and run from Singapore; its founder was born in China and lives in Singapore.",
    kind: "grid",
    sourceIds: [21, 22, 23, 1],
  },
  {
    date: "2024-12-05",
    dateLabel: "January → December 2024",
    title: "Wu takes the chair, Tether buys in, and Rockdale reaches 563 megawatts",
    detail:
      "Jihan Wu becomes chief executive on March 1, 2024 as Kong moves to chief business officer. On May 30 Tether buys $100 million of shares and a warrant, and by August holds 27% of the Class A stock. The December production update puts Rockdale at 563 megawatts online, with a 100-megawatt conversion to hydro cooling for Bitdeer's own SEALMINER rigs under way and a 179-megawatt expansion \"in planning\" for 2026. The year ends with a $599 million net loss, $480 million of it fair-value charges on notes and warrants in the fourth quarter alone, and the stock falls 28% on the results.",
    kind: "singapore",
    sourceIds: [7, 8, 9, 25, 2, 26, 27],
  },
  {
    date: "2026-02-12",
    dateLabel: "January → February 2026",
    title: "Winter Storm Fern, and the first profitable year since 2021",
    detail:
      "In Winter Storm Fern in January 2026 the company tells the press it \"stands ready to fully support the grid should supply constraints occur,\" and later puts its Rockdale curtailment at 310 megawatts. On February 12 it reports 2025: revenue of $620.3 million, net income of $65.6 million, self-mining at 55.2 exahash on rigs it now designs itself, 2,017 bitcoin - and, for the first time, Rockdale labeled \"Evaluating AI.\" The 20-F filed in April shows Wu with 19.5% of the shares and 69.5% of the votes, Tether's affiliates with 19% of the Class A, and 471 employees, most of them in Singapore and the United States.",
    kind: "grid",
    sourceIds: [44, 37, 31, 1],
  },
  {
    date: "2026-08-14",
    dateLabel: "May → August 2026",
    title: "The Governor's audit, the neighbor's $9.1 billion, and a statement of support",
    detail:
      "Rockdale is \"in active evaluation of AI transition\" in May and again in August, with no megawatts, tenant, or dollar figure attached; Kong says 2026 \"will be a defining year for Bitdeer as an AI infrastructure platform,\" and the AI cloud business earns $17.7 million in the half. On August 3 the Governor orders an audit of every large load in ERCOT's queue, including \"project ownership structures.\" On August 10 Riot, next door, reports a twenty-year, 191-megawatt lease to a frontier AI lab worth about $9.1 billion, and Bitdeer reports a $92.3 million quarterly loss at 73 exahash. On August 14 Bitdeer publishes its support for the Governor: 194 hours of curtailment since 2025, 310 megawatts shed in Fern, more than a hundred local employees at about $80,000, no real-estate abatement, and donations to the school district and the volunteer fire department. \"Greater industry disclosure encourages responsible, sustainable growth that puts Texans first.\"",
    kind: "watch",
    sourceIds: [33, 35, 42, 34, 36, 37, 38],
  },
  {
    date: "2026-09-16",
    dateLabel: "September 2026",
    title: "Two hundred acres, three hundred million gallons, and eighty exahash",
    detail:
      "On September 1 Bitdeer buys about 200 acres of former smelter land beside its site for about $100 million in cash - \"eliminates the renewal risk associated with a lease,\" the chief financial officer says - and counts its Milam County footprint at 255 acres and 742 megawatts existing and planned. On September 14 the Texas Tribune, reporting the Governor's order to penalize data centers that ignore the state's water survey, identifies the Rockdale facility as one of the state's largest water users at more than 300 million gallons a year, the consumption of a town of 3,500. On September 16 the company reports 79.9 exahash of self-mining, 1,310 bitcoin mined in August, 61 held, and Rockdale \"well positioned to receive additional power allocations over the coming years.\" It has still not said what it will build there.",
    kind: "watch",
    sourceIds: [39, 42, 40, 41],
  },
];
