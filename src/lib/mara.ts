// MARA Holdings and Texas - the sourced dataset.
//
// PHILOSOPHY: the second company page. The subject is MARA - the
// Florida patent-holding company that pivoted to mining in 2017, renamed
// itself twice, holds one of the largest corporate bitcoin treasuries,
// and owns the most litigated Bitcoin mine in Texas - and its record in
// the state: Granbury, Garden City, a Panhandle wind farm, a two-gigawatt
// bet on Matagorda County, and a town that tried to incorporate around
// its fans. The record is drawn from MARA's own SEC filings, releases,
// and shareholder letters; the verified nuisance petition and the
// Earthjustice filings; the Hood County resolution; the federal dockets
// as reported; ERCOT; the Legislature; and TIME, the Texas Tribune, KERA,
// and the trade press. The thesis is the neighbors: a company that
// bought a mine in January 2024 with the $1.9 million sound wall already
// named in the purchase agreement and said it was unaware of the noise,
// then spent two years cutting fans, sinking rigs in oil, extending the
// wall, acquitting its site manager, removing a suit to federal court
// twice, and suing a county to stop an election - which it won at the
// ballot box, 86 to 52. The honest counterweight cuts both ways: MARA's
// measured noise is now below the legal limit by its own survey and the
// county's, and the neighbors say they still cannot sleep. Everything
// the site attributes to Riot at Granbury is corrected here.
//
// Verified September 26, 2026. Re-verify when the Hood County case sets
// a trial date, when the Ninth Circuit rules in Ho, when Long Ridge
// closes, and after the Batch Zero audit filing (December 10, 2026).

export const MARA_LAST_VERIFIED = "September 26, 2026";

export interface MaraSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the company's own filings and releases, the
// verified petition and court records, the county, ERCOT; then press.
export const maraSources: MaraSource[] = [
  { id: 1, label: "Wikipedia - MARA Holdings: founded February 23, 2010 as Marathon Patent Group, Fort Lauderdale; the Uniloc patent suits; the 2017 pivot to mining", url: "https://en.wikipedia.org/wiki/MARA_Holdings" },
  { id: 2, label: "Marathon Patent Group - Marathon to acquire Global Bit Ventures (November 2, 2017): the pivot to cryptocurrency mining", url: "https://ir.mara.com/news-events/press-releases/detail/1166/marathon-patent-group-to-acquire-global-bit-ventures-inc" },
  { id: 3, label: "Marathon Patent Group - Name change to Marathon Digital Holdings (February 26, 2021): Okamoto - \"one of the only pure-play Bitcoin investment options available\"", url: "https://ir.mara.com/news-events/press-releases/detail/1227/marathon-patent-group-announces-name-change-to-marathon-digital-holdings" },
  { id: 4, label: "Marathon Digital - Marathon appoints Fred Thiel chief executive officer (April 26, 2021)", url: "https://ir.mara.com/news-events/press-releases/detail/1236/marathon-appoints-fred-thiel-to-chief-executive-officer" },
  { id: 5, label: "GlobeNewswire - Marathon Digital signs binding LOI with Compute North for a new 300 MW Texas facility (May 24, 2021): about 73,000 miners; an 18-month bridge loan of up to $67 million to build it", url: "https://www.globenewswire.com/en/news-release/2021/05/24/2234657/0/en/" },
  { id: 6, label: "CoinDesk - Marathon discloses SEC subpoena over Hardin, Montana deal (November 15, 2021)", url: "https://www.coindesk.com/business/2021/11/15/" },
  { id: 7, label: "GlobeNewswire - Marathon to exit Hardin, Montana coal plant \"to become carbon neutral by end of 2022\" (April 5, 2022)", url: "https://www.globenewswire.com/en/news-release/2022/04/05/2416672/0/en/" },
  { id: 8, label: "MARA - Form 10-Q for the third quarter of 2022: about $80 million of exposure to Compute North's bankruptcy - $10 million preferred, a $21.3 million note, about $50 million in deposits at King Mountain and Wolf Hollow", url: "https://www.sec.gov/Archives/edgar/data/1507605/000149315222031756/form10-q.htm" },
  { id: 9, label: "MARA - Form 8-K (February 28, 2023): non-reliance on the 2021 annual report and the 2021–22 interim statements; the restatement", url: "https://www.sec.gov/Archives/edgar/data/1507605/000149315223006169/form8-k.htm" },
  { id: 10, label: "Decrypt - Marathon Digital CEO: Texas mining bill \"won't change our minds about Texas\" (April 14, 2023): Thiel - \"I don't think it's going to make it out of the House intact\"", url: "https://decrypt.co/136790/marathon-digital-bitcoin-mining-bill-texas" },
  { id: 11, label: "Marathon Digital - Marathon to acquire two operational sites totaling 390 MW for $178.6 million (December 19, 2023): Granbury, Texas and Kearney, Nebraska, from Generate Capital", url: "https://ir.mara.com/news-events/press-releases/detail/1335/" },
  { id: 12, label: "TIME - Bitcoin mining noise in Texas (February 1, 2024, updated January 2026): Shadden's 103-decibel reading; Schumacher - the company was unaware of the noise at purchase and commissioned a sound study", url: "https://time.com/6590155/bitcoin-mining-noise-texas/" },
  { id: 13, label: "DL News - Granbury, Texas residents under \"aural attack\" from Bitcoin mine (February 19, 2024): about 80,000 fan-cooled computers; eight citations; Schumacher - \"I'm not aware of anyone ever having medical issues from a Bitcoin mining site\"; \"There are people who are upset by this, and we need to go fix it\"", url: "https://www.dlnews.com/articles/people-culture/granbury-texas-residents-under-aural-attack-from-bitcoin-mine/" },
  { id: 14, label: "Marathon Digital - Marathon to take over operations at Granbury and Kearney from Hut 8 (February 1, 2024): Thiel - \"fully recognize the operational and economic benefits of owning these assets\"; a $13.5 million fee", url: "https://ir.mara.com/news-events/press-releases/detail/1340/" },
  { id: 15, label: "Applied Digital - Applied Digital to sell its Garden City, Texas facility to Marathon (March 15, 2024): 200 MW nameplate", url: "https://ir.applieddigital.com/news-events/press-releases/detail/89/" },
  { id: 16, label: "Marathon Digital - Marathon announces Kaspa mining operations (June 26, 2024): about 60 PH/s, 30 live \"in the company's self-owned and operated facilities in Texas\"", url: "https://ir.mara.com/news-events/press-releases/detail/1360/marathon-digital-holdings-announces-kaspa-mining-operations" },
  { id: 17, label: "TIME - \"We're Living in a Nightmare\": inside the health crisis of a Texas Bitcoin town (July 8, 2024, Andrew R. Chow): forty-plus residents; 72 decibels in a child's bedroom; the constable's thirty-five-plus readings above 85; the $1.9 million sound wall in the purchase agreement; \"Prior to the purchase, we were not aware of the noise issues\"", url: "https://time.com/6982015/bitcoin-mining-texas-health/" },
  { id: 18, label: "Texas Tribune - A Bitcoin mine's noise, the power grid, and the Legislature (July 10, 2024): Shadden - \"Nobody in their right mind would live here. My windows rattle\"; Crawford on the phased plan; Patrick - \"the Wild Wild West\"", url: "https://www.texastribune.org/2024/07/10/texas-bitcoin-mine-noise-power-grid-cryptocurrency/" },
  { id: 19, label: "Decrypt - Texas jury sides with Bitcoin miner Marathon in \"nightmare\" noise dispute (July 2024): site manager David Fischer acquitted on twelve citations; County Attorney Mills - jurors \"had trouble connecting it to Fischer personally\"", url: "https://decrypt.co/239380/texas-jury-sides-with-bitcoin-miner-marathon-in-nightmare-noise-dispute" },
  { id: 20, label: "Hood County Commissioners Court - Resolution on Bitcoin mine noise (July 23, 2024, PDF): asks the Legislature to add noise to the nuisance statute, allow escalating penalties, and reintroduce SB 1751; copies to Senator Birdwell and Representative Slawson", url: "https://texasscorecard.com/wp-content/uploads/2024/07/hood-county-cc-resolution-re-bitcoin-mine-noise.pdf" },
  { id: 21, label: "MARA Granbury - Sound survey results for MARA's Granbury data center (July–November 2024): all eleven points below 63 decibels, down from 78; containers deactivated; immersion 20% to 50%; the wall completed October 2024", url: "https://www.maragranbury.com/posts/sound-survey-results-for-maras-granbury-data-center" },
  { id: 22, label: "MARA - Form 8-K (August 29, 2024): Marathon Digital Holdings renamed MARA Holdings, Inc.", url: "https://www.sec.gov/Archives/edgar/data/1507605/000149315224035093/form8-k.htm" },
  { id: 23, label: "Texas Tribune - Constellation's proposed Wolf Hollow expansion beside the Granbury Bitcoin mine (September 12, 2024): a 300 MW peaker; new power barred from \"directly serving industrial load\"", url: "https://www.texastribune.org/2024/09/12/texas-power-plant-expansion-granbury-bitcoin-mine-pollution" },
  { id: 24, label: "Citizens Concerned About Wolf Hollow v. Marathon Digital Holdings - first verified petition, Hood County District Clerk no. C2024253 (October 4, 2024, PDF): private nuisance; a permanent injunction, no damages; 88 dBZ at 4:58 a.m.; \"turning their refuge into a prison\"; the partial wall covering \"roughly 46% of the property's perimeter\"", url: "https://earthjustice.org/wp-content/uploads/2024/10/2024-10-04-first-verified-petition_redacted.pdf" },
  { id: 25, label: "Earthjustice - Granbury residents sue local Bitcoin mine over health-threatening noise pollution (October 7, 2024): Ramirez - \"No corporation has the right to subject their neighbors to conditions that jeopardize their health and well-being\"; Shadden - \"Day and night, we are subjected to relentless noise that is physically harming us\"", url: "https://earthjustice.org/press/2024/granbury-residents-sue-local-bitcoin-mine-over-health-threatening-noise-pollution" },
  { id: 26, label: "MARA - Form 8-K exhibit (November 2024): the $1.0 billion zero-coupon convertible notes due 2030 to buy bitcoin", url: "https://www.sec.gov/Archives/edgar/data/1507605/000149315224047078/ex99-1.htm" },
  { id: 27, label: "MARA - MARA acquires wind farm (December 3, 2024): 114 MW nameplate in Hansford County; Thiel - \"renewable resources that would have otherwise been curtailed\"", url: "https://ir.mara.com/news-events/press-releases/detail/1383/mara-acquires-wind-farm" },
  { id: 28, label: "MARA - Full-year 2024 results (February 26, 2025): 53.2 EH/s; 44,893 bitcoin held; net income $541 million", url: "https://ir.mara.com/news-events/press-releases/detail/1390/" },
  { id: 29, label: "GovInfo - Citizens Concerned About Wolf Hollow v. Marathon Digital Holdings, N.D. Tex. 4:24-cv-00983: removed to federal court; remanded to Hood County March 27, 2025", url: "https://www.govinfo.gov/app/details/USCOURTS-txnd-4_24-cv-00983" },
  { id: 30, label: "MARA - 2025 proxy statement (April 30, 2025): Thiel's 2024 compensation about $43.2 million; performance units paid at the 200% maximum", url: "https://ir.mara.com/sec-filings/all-sec-filings/content/0001507605-25-000006/mara-20250430.htm" },
  { id: 31, label: "CoinDesk - MARA's Fred Thiel says the U.S. should start mining bitcoin to fill the strategic reserve (May 27, 2025): \"an empty statement unless you start putting stuff into it\"", url: "https://www.coindesk.com/markets/2025/05/27/maras-fred-thiel-says-us-should-start-mining-bitcoin-to-fill-strategic-reserve" },
  { id: 32, label: "KERA - Hood County residents vote to incorporate around the Bitcoin mine (August 18, 2025): Mitchell Bend; about 600 residents", url: "https://www.keranews.org/news/2025-08-18/north-texas-hood-county-vote-incorporate-bitcoin-mine" },
  { id: 33, label: "Earthjustice - Granbury residents demand answers from MARA's Bitcoin mine as nuisance lawsuit continues (September 3, 2025): the motion to dismiss denied; the motion to compel; Cantú - \"the constant, harmful noise from MARA's cryptomining plant\"", url: "https://earthjustice.org/press/2025/granbury-residents-demand-answers-from-maras-bitcoin-mine-as-lawsuit-over-noise-nuisance-continues" },
  { id: 34, label: "Texas Tribune - Hood County residents try to incorporate a city to fight the Bitcoin mine's noise (October 9, 2025): 95 containers deactivated, a 2,000-foot wall, 67% immersion; the county study's 60 decibels near the site; MARA's \"more than $1.2 billion\" in Texas; Lakey - \"we're getting really good at fighting Goliath\"", url: "https://www.texastribune.org/2025/10/09/texas-hood-county-crypto-noise-incorporate-city/" },
  { id: 35, label: "KERA - MARA sues Hood County over the Mitchell Bend incorporation election (October 30, 2025): \"an intentional and unconstitutional use of local government authority to favor a small group of citizens\"", url: "https://www.keranews.org/news/2025-10-30/hood-county-mitchell-bend-election-incorporate-bitcoin-mine-marathon" },
  { id: 36, label: "KERA - Judge denies MARA's bid to halt the Mitchell Bend vote (November 3, 2025): Judge O'Connor found no \"substantial threat of irreparable harm\"; Shadden - \"We just want to sleep in our beds in peace at night\"", url: "https://www.keranews.org/news/2025-11-03/bitcoin-hood-county-lawsuit-ruling-mitchell-bend-election" },
  { id: 37, label: "Texas Tribune - Hood County residents' vote to incorporate against the Bitcoin mine fails (November 5, 2025): 86 to 52; MARA - \"saw through the sham incorporation effort\"; Weeks - \"preserve the peace we had, it's that simple\"", url: "https://www.texastribune.org/2025/11/05/texas-hood-county-bitcoin-noise-city-vote-fail/" },
  { id: 38, label: "CoinDesk - Bitcoin miners must own power or die trying before the next halving, MARA CEO says (November 11, 2025): \"By 2028, you'll either be a power generator, be owned by one, or be partnered with one\"", url: "https://www.coindesk.com/markets/2025/11/11/bitcoin-miners-must-own-power-or-die-trying-before-next-halving-mara-ceo-says" },
  { id: 39, label: "MARA - Form 10-K for 2025 (March 2, 2026): Hallandale Beach, Florida; Granbury \"approximately 300 megawatt\" and 12.3 EH/s, \"among the first of our sites where we have begun integrating inference\"; other Central Texas sites about 250 MW; a wind farm in North Texas; 66.4 EH/s; 53,822 bitcoin; net loss $1.31 billion; \"we do not receive significant compensation for curtailment\"; the Garden City storm impairment of $26 million; the Granbury suits not listed among legal proceedings; Ho's $138.8 million verdict on appeal", url: "https://www.sec.gov/Archives/edgar/data/1507605/000150760526000007/mara-20251231.htm" },
  { id: 40, label: "MARA - MARA repurchases $1 billion of convertible notes (March 26, 2026): 15,133 bitcoin sold; Thiel - \"we captured approximately $88 million in value\"", url: "https://ir.mara.com/news-events/press-releases/detail/1418/" },
  { id: 41, label: "MARA - 2026 proxy statement (April 30, 2026): Thiel's 2025 compensation about $27.1 million; $4.3 million of security including an armored vehicle; ratio 134 to 1", url: "https://www.sec.gov/Archives/edgar/data/0001507605/000150760526000010/mara-20260430.htm" },
  { id: 42, label: "MARA - Form 8-K (April 30, 2026): the Long Ridge Energy agreement - a 505 MW gas plant in Hannibal, Ohio, about $1.5 billion including assumed debt", url: "https://www.sec.gov/Archives/edgar/data/0001507605/000119312526193982/d54802d8k.htm" },
  { id: 43, label: "Decrypt - Nine Texas residents sue MARA over Granbury noise (May 2026): the federal damages suit before Judge O'Connor - nuisance, negligence, emotional distress, up to $10 million; MARA - \"thoughtful and considerate members of our new community\"", url: "https://decrypt.co/366654/texas-lawsuit-mara-holdings-bitcoin-mining-noise" },
  { id: 44, label: "CoinDesk - MARA sold $1.5 billion of bitcoin as it shifts toward AI infrastructure (May 12, 2026): Thiel - \"a redefining quarter, not an incremental one\"", url: "https://www.coindesk.com/markets/2026/05/12/bitcoin-miner-mara-sold-usd1-5-billion-of-bitcoin-as-it-shifts-toward-ai-infrastructure" },
  { id: 45, label: "MARA - MARA signs definitive agreement for a 2 GW site in Matagorda County, Texas (July 9, 2026): with HIF USA; 1 GW by October 2027, 2 GW by April 2028; Thiel - \"strategically located infrastructure assets capable of supporting high-performance compute and bitcoin workloads\"", url: "https://ir.mara.com/news-events/press-releases/detail/1424/" },
  { id: 46, label: "MARA - Second-quarter 2026 shareholder letter (August 6, 2026): 70.3 EH/s; 35,577 bitcoin, about $2.1 billion; net loss $611.3 million; 386 million shares", url: "https://www.sec.gov/Archives/edgar/data/0001507605/000150760526000020/q226shareholderletter.htm" },
  { id: 47, label: "POWER - More data-center operators commit to Abbott's Texas standards (August 10, 2026): MARA \"voluntarily curtailed approximately 550 MW\" in Winter Storm Fern; \"These are not new commitments we are making in response to this review\"", url: "https://www.powermag.com/more-data-center-operators-commit-to-abbotts-texas-standards-as-power-companies-endorse-ercot-batch-framework/" },
  { id: 48, label: "The Energy Mag - MARA's Matagorda site classified as studied load; Granbury 280 MW and Garden City 200 MW as base load in ERCOT's Batch Zero (September 2026)", url: "https://www.theenergymag.com/news/market-news/mara-matagorda-ai-texas-base-load" },
  { id: 49, label: "CoinDesk - Eight U.S. blockchain lobby groups unite (January 15, 2025): MARA among the Texas Blockchain Council's biggest financial contributors", url: "https://www.coindesk.com/policy/2025/01/15/eight-u-s-blockchain-lobby-groups-unite-ahead-of-trumps-crypto-friendly-regime" },
  { id: 50, label: "Paul, Weiss - MARA wins dismissal with prejudice of securities class action over bitcoin accounting (2026)", url: "https://www.paulweiss.com/insights/client-news/mara-holdings-wins-dismissal-with-prejudice-of-securities-class-action-over-bitcoin-accounting-practices" },
];

// The Granbury record, dated, for the strip figure.
export const granburyStrip: { d: string; l: string; sub: string; side: "mine" | "town" }[] = [
  { d: "2021-05-24", l: "The loan", sub: "$67M to build 300 MW", side: "mine" },
  { d: "2022-09-22", l: "Compute North fails", sub: "MARA's ~$80M exposure", side: "mine" },
  { d: "2023-11-13", l: "A half wall", sub: "US Bitcoin builds 24 ft, 46% of the perimeter", side: "mine" },
  { d: "2024-01-12", l: "MARA buys", sub: "$189.6M · the $1.9M wall in the contract", side: "mine" },
  { d: "2024-07-08", l: "“A Nightmare”", sub: "TIME · 40+ residents", side: "town" },
  { d: "2024-07-11", l: "Acquittal", sub: "site manager, 12 citations", side: "mine" },
  { d: "2024-10-04", l: "The suit", sub: "C2024253 · injunction, no damages", side: "town" },
  { d: "2025-03-27", l: "Remanded", sub: "back to Hood County", side: "town" },
  { d: "2025-11-04", l: "The vote", sub: "Mitchell Bend fails 86–52", side: "mine" },
  { d: "2026-05-01", l: "Nine owners sue", sub: "federal · up to $10M", side: "town" },
];

export type MaraTimelineKind = "shell" | "texas" | "granbury" | "treasury" | "watch";

// The arc: the patent shell → Texas by loan → the neighbors → the
// treasury → the two-gigawatt bet.
export interface MaraEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: MaraTimelineKind;
  sourceIds: number[];
}

export const maraTimeline: MaraEvent[] = [
  {
    date: "2021-04-26",
    dateLabel: "2010 → April 2021",
    title: "A patent troll becomes a pure play",
    detail:
      "Marathon Patent Group is founded in Fort Lauderdale in February 2010 and spends its first years suing Microsoft, Google, Amazon, and Apple through a subsidiary; in November 2017 it pivots to mining, and in February 2021 renames itself Marathon Digital Holdings - \"one of the only pure-play Bitcoin investment options available,\" the chairman says. Fred Thiel becomes chief executive on April 26, 2021. A month later the company signs a letter of intent with Compute North for a 300-megawatt site in Texas and lends the builder up to $67 million to put it up. The site is Granbury.",
    kind: "shell",
    sourceIds: [1, 2, 3, 4, 5],
  },
  {
    date: "2022-09-22",
    dateLabel: "November 2021 → September 2022",
    title: "The subpoena, the coal plant, and the builder's bankruptcy",
    detail:
      "MARA discloses an SEC subpoena in November 2021 over its Hardin, Montana deal and a six-million-share issuance; in April 2022 it announces it will leave the revived coal plant \"to become carbon neutral by end of 2022,\" and critics note the rigs are going to a Texas gas plant. On September 22, 2022 Compute North - which built Granbury and hosted most of MARA's fleet at King Mountain - files for bankruptcy, and MARA reports about $80 million of exposure. In February 2023 it restates its 2021 accounts. It ends 2022 with a net loss of $687 million.",
    kind: "texas",
    sourceIds: [6, 7, 8, 9],
  },
  {
    date: "2023-04-14",
    dateLabel: "March → April 2023",
    title: "\"1751 won't change our minds about Texas\"",
    detail:
      "As Kolkhorst's brake on the miners passes the Senate, Thiel tells Decrypt it \"won't change our minds about Texas\" and that \"I don't think it's going to make it out of the House intact\" - the House being \"much more aligned with the positive aspects and the benefits of bitcoin mining.\" It does not make it out. A company representative says MARA \"voluntarily curtails operations to support the grid,\" with revenue from it \"immaterial.\"",
    kind: "texas",
    sourceIds: [10],
  },
  {
    date: "2024-01-12",
    dateLabel: "December 2023 → April 2024",
    title: "MARA buys Granbury, and the neighbors have already been calling",
    detail:
      "On December 19, 2023 MARA agrees to buy Granbury and a Nebraska site, 390 megawatts for $178.6 million, from Generate Capital; the deal closes January 12, 2024 at $189.6 million. The purchase agreement names a $1.9 million sound wall; residents had been complaining to the constable since December, one had recorded 103 decibels, and the operator had built a wall around 46% of the fence line in November. MARA's spokesman: the company was unaware of the noise before buying and has commissioned a study; \"There are people who are upset by this, and we need to go fix it.\" In February it takes over operations from Hut 8 for a $13.5 million fee; in April it buys Garden City, 200 megawatts in Glasscock County, from Applied Digital for $96.8 million.",
    kind: "granbury",
    sourceIds: [11, 17, 12, 13, 14, 15],
  },
  {
    date: "2024-07-23",
    dateLabel: "July 2024",
    title: "TIME, the acquittal, and the county's plea to the Legislature",
    detail:
      "On July 8 TIME publishes \"We're Living in a Nightmare\": more than forty residents, 72 decibels in a child's bedroom, a retired pastor with a pacemaker, two ear specialists, and a constable who has recorded more than 85 decibels over thirty-five times and written $17,500 in citations. On July 11 a Hood County jury acquits MARA's site manager on twelve of them - jurors \"had trouble connecting it to Fischer personally,\" the county attorney says. On July 23 the commissioners court asks the Legislature to make noise a statutory nuisance, allow escalating penalties, and reintroduce SB 1751. MARA's own July survey reports every point below 63 decibels, down from 78, with fans shut and rigs going into oil.",
    kind: "granbury",
    sourceIds: [17, 18, 19, 20, 21],
  },
  {
    date: "2024-10-04",
    dateLabel: "August → December 2024",
    title: "The suit, the rename, and a billion dollars of bitcoin",
    detail:
      "Marathon becomes MARA Holdings on August 29. On October 4 the Citizens Concerned About Wolf Hollow, represented by Earthjustice, file in Hood County for a permanent injunction - no damages - against \"unreasonable noise and vibrations\"; the verified petition records 88 decibels at 4:58 in the morning and a home turned into \"a prison.\" MARA removes the case to federal court. In November it adopts a full-hold policy and sells $1 billion of zero-coupon convertible notes to buy bitcoin, then $850 million more; in December it buys a 114-megawatt wind farm in Hansford County to run old rigs on power \"that would have otherwise been curtailed.\" It ends the year with 44,893 bitcoin and a $541 million profit on the fair-value rule.",
    kind: "treasury",
    sourceIds: [22, 24, 25, 26, 27, 28],
  },
  {
    date: "2025-09-03",
    dateLabel: "March → September 2025",
    title: "Remanded, not dismissed; the neighbors ask for the data",
    detail:
      "A federal judge sends the nuisance case back to Hood County on March 27, 2025. MARA's motion to dismiss is denied over the summer; on September 3 Earthjustice moves to compel the company's equipment lists, mitigation records, and noise data. By October the Tribune counts 95 containers deactivated, a 2,000-foot wall, and 67% of the site in immersion; the county's own study finds about 60 decibels at the fence and 35 to 53 in the neighborhoods. MARA: \"more than $1.2 billion\" invested in Texas. Thiel's 2024 pay is disclosed at about $43 million.",
    kind: "granbury",
    sourceIds: [29, 33, 34, 30],
  },
  {
    date: "2025-11-04",
    dateLabel: "August → November 2025",
    title: "Mitchell Bend: a town tries to incorporate, and MARA sues to stop the vote",
    detail:
      "About 600 residents petition to incorporate two square miles around the mine as the city of Mitchell Bend; the county judge rejects the petition, then accepts it. On October 29 MARA sues Hood County, its judge, its attorney, and its elections administrator in federal court, calling the election \"an intentional and unconstitutional use of local government authority to favor a small group of citizens.\" Judge O'Connor denies a restraining order on November 3 - no \"substantial threat of irreparable harm.\" On November 4 the incorporation fails, 86 to 52. MARA: voters \"saw through the sham incorporation effort.\" A plaintiff: \"What we want to do is get back and preserve the peace we had, it's that simple.\" Thiel, the week after: \"By 2028, you'll either be a power generator, be owned by one, or be partnered with one.\"",
    kind: "granbury",
    sourceIds: [32, 35, 36, 37, 38],
  },
  {
    date: "2026-05-12",
    dateLabel: "January → May 2026",
    title: "Fern, the treasury sold, a gas plant bought, nine more plaintiffs",
    detail:
      "In Winter Storm Fern MARA \"voluntarily curtailed approximately 550 MW\" in ERCOT. Its 2025 report shows 53,822 bitcoin, 66.4 exahash, a $1.31 billion net loss on the fair-value rule, Granbury at 300 megawatts and 12.3 exahash \"among the first of our sites where we have begun integrating inference\" - and no Granbury lawsuit among its legal proceedings. In March it sells 15,133 bitcoin to retire a billion dollars of the notes it had sold to buy them; in April it agrees to buy a 505-megawatt gas plant in Ohio for about $1.5 billion. On May 1 nine Granbury property owners file a second federal suit for damages of up to $10 million. Thiel: \"a redefining quarter, not an incremental one.\"",
    kind: "treasury",
    sourceIds: [47, 39, 40, 42, 43, 44],
  },
  {
    date: "2026-09-14",
    dateLabel: "July → September 2026",
    title: "Two gigawatts on the Gulf, and the audit MARA welcomed",
    detail:
      "On July 9 MARA signs for 1,200 acres in Matagorda County with HIF USA: a gigawatt by October 2027, two by April 2028, up to $600 million contingent on ERCOT approval. On August 10 it commits to the Governor's data-center standards - \"These are not new commitments we are making in response to this review\" - and Thiel tells analysts the audit will flush out phantom requests. In September ERCOT's Batch Zero classifies Granbury's 280 megawatts and Garden City's 200 as base load and Matagorda as studied. The company holds 35,577 bitcoin, runs 70.3 exahash, and has 386 million shares - four and three-quarters times the 82 million of 2020.",
    kind: "watch",
    sourceIds: [45, 47, 48, 46],
  },
];
