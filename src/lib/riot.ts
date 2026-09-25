// Riot Platforms and Texas - the sourced dataset.
//
// PHILOSOPHY: the site's first company page, and the companion to the
// Rockdale place page, which tells the story of the site; this one tells
// the story of the company that owns it. The record is drawn from
// Riot's own SEC filings (10-Ks, 8-Ks, proxies) and press releases, the
// Legislature's witness lists, the county commissioners' records, the
// Governor's releases, court reporting, and the Texas and financial
// press. The thesis is the landlord: a Colorado shell company that
// renamed itself for Bitcoin in 2017, bought the largest mine in North
// America in 2021, learned in Texas that the most profitable thing a
// mine can do in August is switch off, and in 2026 signed a twenty-year,
// $9.1 billion lease to rent that power to an AI lab - selling seven
// thousand bitcoin in six months to build the buildings. The honest
// counterweight is the ledger a shareholder reads: four and a half times
// the shares, net losses in four of five years, an $83.5 million pay
// year for the chief executive, and a county that turned the company
// down once before it said yes.
//
// Verified September 26, 2026. Re-verify at the Q3 2026 results
// (November), if the frontier-lab tenant is confirmed, when the
// Corsicana letter of intent becomes a lease, and after the Batch Zero
// audit filing (December 10, 2026).

export const RIOT_LAST_VERIFIED = "September 26, 2026";

export interface RiotSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the company's own filings and releases, the
// Legislature and the counties, the Governor, the courts; then press.
export const riotSources: RiotSource[] = [
  { id: 1, label: "Riot Blockchain - Form 8-K exhibit (October 2017): Bioptix, Inc. renamed Riot Blockchain, Inc.", url: "https://www.sec.gov/Archives/edgar/data/0001167419/000107997317000569/ex99x1.htm" },
  { id: 2, label: "CNBC - A public company changed its name to Riot Blockchain and its shares rocketed (February 16, 2018): the investigation into the rename, the stock, and the insiders", url: "https://www.cnbc.com/2018/02/16/public-company-changes-name-to-riot-blockchain-sees-shares-rocket.html" },
  { id: 3, label: "Riot Blockchain - Form 10-K for 2020: the April 9, 2018 SEC subpoena; the investigation closed January 29, 2020 with no enforcement recommended", url: "https://www.sec.gov/Archives/edgar/data/1167419/000107997321000221/riot10k1220.htm" },
  { id: 4, label: "CNBC - Riot Blockchain CEO John O'Rourke is out (September 8, 2018): named in the SEC's unrelated $27 million market-manipulation case", url: "https://www.cnbc.com/2018/09/08/riot-blockchain-ceo-john-orourke-is-out-interim-ceo-is-named-in-wake-of-unrelated-sec-charges.html" },
  { id: 5, label: "Riot Blockchain - Riot announces appointment of Jason Les as CEO (February 8, 2021): \"Bitcoin positioned to disrupt the global financial system\"", url: "https://www.riotplatforms.com/riot-blockchain-announces-appointment-of-jason-les-as-ceo-and-appointment-of-new-director/" },
  { id: 6, label: "Riot Blockchain - Riot to acquire Whinstone (April 8, 2021): $80 million cash and 11.8 million shares, about $651 million at announcement; 750 MW at Rockdale", url: "https://www.riotplatforms.com/riot-to-acquire-whinstone-creating-a-us-based-industry-leader-in-bitcoin-mining/" },
  { id: 7, label: "Riot Blockchain - Riot completes acquisition of Whinstone US (May 26, 2021): Les - \"the most significant milestone in Riot's history\"", url: "https://www.riotplatforms.com/riot-blockchain-completes-acquisition-of-whinstone-us-creating-leading-north-american-bitcoin-mining-company/" },
  { id: 8, label: "Riot Blockchain - Riot announces 1 GW development in Navarro County, Texas (April 27, 2022): Corsicana; 265 acres; initial 400 MW; immersion cooling", url: "https://www.globenewswire.com/news-release/2022/04/27/2430290/0/en/Riot-Blockchain-Announces-1-GW-Development-in-Navarro-County-Texas.html" },
  { id: 9, label: "Dallas Morning News - \"We do not want this\": Corsicana group protests Riot Blockchain's Bitcoin mining facility (June 16, 2022): Concerned Citizens of Navarro County", url: "https://www.dallasnews.com/business/local-companies/2022/06/16/we-do-not-want-this-corsicana-group-protests-riot-blockchains-bitcoin-mining-facility/" },
  { id: 10, label: "Riot Platforms - Riot reports full-year 2022 financial results: revenue $259 million; net loss $509.6 million; power credits $27.3 million", url: "https://www.riotplatforms.com/riot-reports-full-year-2022-financial-results-current-operational-and-financial-highlights/" },
  { id: 11, label: "GlobeNewswire - Riot Blockchain announces corporate rebranding to Riot Platforms (January 3, 2023)", url: "https://www.globenewswire.com/en/news-release/2023/01/03/2582242/0/en/Riot-Blockchain-Inc-Announces-Corporate-Rebranding-to-Riot-Platforms-Inc.html" },
  { id: 12, label: "Texas Legislature Online - Senate Business and Commerce witness list, March 28, 2023: Pierre Rochard, Riot Platforms, against SB 1751", url: "https://capitol.texas.gov/tlodocs/88R/witlistmtg/html/C5102023032808301.HTM" },
  { id: 13, label: "Bitcoin Magazine - Texas Senate committee hears testimony on Bitcoin mining bill (March 2023): Rochard - \"Bitcoin miners are the number 1 employer in Rockdale. Bitcoin miners are also the number 1 taxpayer to Rockdale ISD\"", url: "https://bitcoinmagazine.com/legal/texas-senate-committee-hears-testimony-on-bitcoin-mining-bill" },
  { id: 14, label: "Riot Platforms - Form 8-K exhibit (September 6, 2023): August 2023 - $31.7 million in power and demand-response credits, $24.2 million from power sold under the TXU agreement and $7.4 million from ERCOT demand response, against 333 bitcoin mined; Les - \"August was a landmark month\"", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837023015517/riot-20230906xex99d1.htm" },
  { id: 15, label: "Riot Platforms - Riot responds to recent inquiries regarding its power strategy (September 8, 2023): the ERCOT share \"less than one percent of the program, which administered nearly $1 billion\"", url: "https://www.riotplatforms.com/riot-responds-to-recent-inquiries-regarding-its-power-strategy/" },
  { id: 16, label: "Dallas Morning News - Here's what ERCOT paid a Bitcoin miner to curtail electric use this summer (October 5, 2023): about $13 million from ERCOT itself; the rest resale under the retail contract", url: "https://www.dallasnews.com/business/2023/10/05/heres-what-ercot-paid-a-bitcoin-miner-to-curtail-electric-use-this-summer/" },
  { id: 17, label: "Riot Platforms - Riot reports full-year 2023 financial results: revenue $281 million; net loss $49.5 million; power credits $71.2 million, about 2,497 bitcoin equivalent; 6,626 bitcoin mined; 12.4 EH/s", url: "https://www.riotplatforms.com/riot-platforms-reports-full-year-2023-financial-results-current-operational-and-financial-highlights/" },
  { id: 18, label: "Riot Platforms - Form 10-K for 2023: Rockdale expanded to 700 MW, \"believed to be the largest single Bitcoin mining facility in North America\"; Takata v. Riot dismissed with prejudice August 25, 2023", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837024001550/riot-20231231x10k.htm" },
  { id: 19, label: "CoinDesk - Texas Blockchain Council, Riot Platforms sue Department of Energy and OMB over emergency survey (February 23, 2024)", url: "https://www.coindesk.com/policy/2024/02/23/texas-blockchain-council-riot-platforms-sue-dept-of-energy-omb-over-emergency-survey" },
  { id: 20, label: "Corsicana Daily Sun - Commissioners deny reinvestment zone, disapprove Bitcoin tax abatements (March 2024): Navarro County unanimous; Commissioner Brewer - \"I don't think it's a good investment. They created a lot of controversy\"", url: "https://www.corsicanadailysun.com/news/commissioners-deny-reinvestment-zone-disapprove-bitcoin-tax-abatements/article_c294df5a-e075-11ee-a6d7-33f12c762991.html" },
  { id: 21, label: "Riot Platforms - Riot energizes new Corsicana facility in Navarro County (April 18, 2024): the 400 MW substation", url: "https://www.riotplatforms.com/riot-energizes-new-corsicana-facility-in-navarro-county-texas/" },
  { id: 22, label: "Corsicana Daily Sun - Riot reps speak about role in community (May 24, 2024): Schatz - \"The only thing that we do as far as water consumption is just topping off our retention pond\"", url: "https://www.corsicanadailysun.com/news/riot-reps-speak-about-role-in-community/article_3f228b8a-19d3-11ef-a494-f3dd664ec92d.html" },
  { id: 23, label: "Riot Platforms - Riot proposes to acquire Bitfarms for US$2.30 per share (May 28, 2024): Les - \"deeply concerned that the founders on the Bitfarms Board may not be acting in the best interests of all Bitfarms shareholders\"", url: "https://www.riotplatforms.com/riot-proposes-to-acquire-bitfarms-for-us2-30-per-share-to-create-the-worlds-largest-publicly-listed-bitcoin-miner/" },
  { id: 24, label: "Riot Platforms - Riot announces the acquisition of Block Mining (July 23, 2024): $92.5 million; Kentucky; total potential capacity to 2 gigawatts", url: "https://www.riotplatforms.com/riot-announces-the-acquisition-of-block-mining-expands-riots-total-potential-power-capacity-to-2-gigawatts/" },
  { id: 25, label: "Riot Platforms - Bitfarms and Riot announce settlement (September 23, 2024): a board seat; standstill; Riot's stake about 19.9%", url: "https://www.riotplatforms.com/bitfarms-and-riot-announce-settlement/" },
  { id: 26, label: "Navarro County Commissioners Court - Resolution 2024.13, tax abatement agreement with Riot Corsicana LLC (October 15, 2024, PDF): passed 3–2; ten years; $640 million pledged investment; 140 jobs", url: "https://navarro.easydocs.us/minutes/LinkedDir/2024/Links%202024-10-15-Regular/Item%2016%20Approve%20Resolution%20for%20Tax%20Abatement%20Navarro%20County%20and%20Riot%20Corsicana%20LLC.pdf" },
  { id: 27, label: "Riot Platforms - Form 8-K exhibit (January 21, 2025): formal evaluation of about 600 MW at Corsicana for AI and high-performance computing; Phase II mining halted; hashrate target cut to 38.4 EH/s; Les - \"maximizing the potential of our assets\"", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837025000282/riot-20250121xex99d1.htm" },
  { id: 28, label: "Riot Platforms - Riot announces changes to its board and update on AI/HPC evaluation (February 13, 2025): three new directors \"with constructive, independent input from each of Starboard Value LP and The D. E. Shaw Group\"", url: "https://www.riotplatforms.com/riot-platforms-announces-changes-to-its-board-of-directors-and-provides-update-on-formal-evaluation-of-ai-hpc-uses/" },
  { id: 29, label: "Riot Platforms - Riot reports full-year 2024 financial results: revenue $376.7 million; net income $109.4 million on the fair-value accounting change; power credits $33.7 million; 4,828 bitcoin mined; 31.5 EH/s; 17,722 bitcoin held", url: "https://www.riotplatforms.com/riot-platforms-reports-full-year-2024-financial-results-current-operational-and-financial-highlights/" },
  { id: 30, label: "Riot Platforms - Riot closes acquisition of Rhodium assets at Rockdale (April 28, 2025): $185 million; the legacy hosting contracts \"generated a gross loss of approximately $15 million\" in 2024", url: "https://www.riotplatforms.com/riot-platforms-announces-closing-of-the-acquisition-of-rhodium-assets-at-the-rockdale-facility-following-the-previously-announced-settlement-agreement/" },
  { id: 31, label: "Riot Platforms - 2025 proxy statement (June 2025): 2024 total compensation for Jason Les $83,532,328 including a $75.2 million performance-share grant; median employee $58,875; ratio 1,419 to 1", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837025004969/riot-20250610xdef14a.htm" },
  { id: 32, label: "Riot Platforms - Form 10-K for 2025 (March 2026): principal office Castle Rock, Colorado; Rockdale 700 MW developed, Corsicana 400 MW of 1 GW; the TXU power blocks (130, 65, and 150 MW, fixed price, to 2027 and 2030); 816 employees, about 63% in Texas; 38.5 EH/s; 18,005 bitcoin held", url: "https://www.sec.gov/Archives/edgar/data/1167419/000110465926022322/riot-20251231x10k.htm" },
  { id: 33, label: "Riot Platforms - Riot reports full-year 2025 financial results and strategic highlights (March 2, 2026): revenue $647.4 million; net loss $663.2 million; power credits $56.7 million, \"nearly $10,000 per Bitcoin mined\"; 5,686 bitcoin mined", url: "https://www.riotplatforms.com/riot-platforms-reports-full-year-2025-financial-results-and-strategic-highlights/" },
  { id: 34, label: "Riot Platforms - Form 8-K exhibit (January 16, 2026): the 25 MW AMD lease at Rockdale, ten years plus options, about $311 million; and the purchase of the 200-acre Rockdale site for $96 million, funded by the sale of about 1,080 bitcoin", url: "https://www.sec.gov/Archives/edgar/data/1167419/000110465926004551/riot-20260116xex99d1.htm" },
  { id: 35, label: "KXXV - Milam County approves tax abatement for new data center (February 2026): 4–1; 75% for ten years from 2028; Commissioner Payne - \"I thought that was too steep\"", url: "https://www.kxxv.com/news/local-news/in-your-neighborhood/milam-county/paving-the-way-for-progress-milam-county-approves-tax-abatement-for-new-data-center" },
  { id: 36, label: "The Block - Riot, SBI Crypto reach $20 million settlement in Texas Bitcoin mining dispute (2026): the inherited Whinstone hosting claim", url: "https://www.theblock.co/post/391962/riot-sbi-crypto-reach-20-million-settlement-in-texas-bitcoin-mining-dispute" },
  { id: 37, label: "Riot Platforms - Form 8-K exhibit, first-quarter 2026 results (April 30, 2026): the second 25 MW AMD phase; a non-binding letter of intent for the full ~756 MW at Corsicana with a single tenant; 15,679 bitcoin held; 42.5 EH/s; all-in power cost 3.0 cents per kWh", url: "https://www.sec.gov/Archives/edgar/data/0001167419/000110465926052943/riot-20260430xex99d2.htm" },
  { id: 38, label: "Riot Platforms - 2026 proxy statement (June 2026): the board - Yi, Les, D'Ambrosio, Leverton, Mouton, Turner; 2025 compensation for Les about $3.46 million with no long-term grant \"in direct response to 2025 Say-on-Pay feedback\"; about 378 million shares", url: "https://www.sec.gov/Archives/edgar/data/0001167419/000110465926053098/riot-20260609xdef14a.htm" },
  { id: 39, label: "Riot Platforms - Form 8-K exhibit, second-quarter 2026 results (August 10, 2026): a 191 MW, twenty-year lease at Rockdale with \"one of the world's leading frontier AI labs,\" about $9.1 billion base, 96 MW by December 2027 and the full 191 MW by June 2028; net loss $237.2 million; 11,380 bitcoin held after selling about 4,300; 44.4 EH/s; Les - \"a defining moment in our evolution\"", url: "https://www.sec.gov/Archives/edgar/data/0001167419/000110465926093406/riot-20260810xex99d1.htm" },
  { id: 40, label: "Data Center Dynamics - Riot Platforms agrees 191 MW, 20-year lease with Anthropic worth $9.1 billion, report says (August 2026): Bloomberg's identification; \"Riot declined to comment and Anthropic didn't respond\"", url: "https://www.datacenterdynamics.com/en/news/riot-platforms-agrees-191mw-20-year-lease-agreement-with-anthropic-worth-91bn-report/" },
  { id: 41, label: "Office of the Governor - Governor Abbott announces Riot Platforms and Comanche Circle data center commit to comply with his data center standards (August 18, 2026)", url: "https://gov.texas.gov/news/post/governor-abbott-announces-riot-platforms-and-comanche-circle-data-center-commit-to-comply-with-his-data-center-standards" },
  { id: 42, label: "Riot Platforms - Support Governor Abbott, an open letter from Jason Les (August 2026): \"We support your commonsense principles of ratepayer protection, water stewardship\"; $17 million for Navarro County water infrastructure; about 60% of Dawson ISD's tax base", url: "https://www.riotplatforms.com/support-governor-abbott/" },
  { id: 43, label: "OpenSecrets - Riot Platforms federal lobbying: $280,000 (2022), $470,000 (2023), $1.16 million (2024); Holland & Knight; Brian Morgenstern registered in-house", url: "https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000101665" },
  { id: 44, label: "CryptoSlate - Riot's Pierre Rochard tells Texas Senate a state Bitcoin reserve is needed to prepare for future downturns (February 2025): \"now is the perfect time to make a strategic investment\"", url: "https://cryptoslate.com/riots-pierre-rochard-tells-texas-congress-a-state-bitcoin-reserve-needed-to-prepare-for-future/" },
  { id: 45, label: "CNBC - Core Scientific shareholders reject $9 billion CoreWeave offer (October 30, 2025): the deal Riot was not part of", url: "https://www.cnbc.com/2025/10/30/core-scientific-shareholders-reject-9-billion-coreweave-offer-deal-terminated.html" },
];

// Power credits (ERCOT ancillary services plus resale under the TXU
// contract, as Riot reports them) beside bitcoin mined, by year.
export const riotCreditsByYear: { year: number; creditsM: number; btc: number; note: string }[] = [
  { year: 2021, creditsM: 6.5, btc: 3812, note: "Whinstone closes May 26" },
  { year: 2022, creditsM: 27.3, btc: 5554, note: "net loss $509.6M" },
  { year: 2023, creditsM: 71.2, btc: 6626, note: "the $31.7M August" },
  { year: 2024, creditsM: 33.7, btc: 4828, note: "the halving" },
  { year: 2025, creditsM: 56.7, btc: 5686, note: "“nearly $10,000 per Bitcoin”" },
];

export type RiotTimelineKind = "shell" | "miner" | "grid" | "county" | "landlord";

// The arc: the shell → the miner → the grid → the counties → the landlord.
export interface RiotEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: RiotTimelineKind;
  sourceIds: number[];
}

export const riotTimeline: RiotEvent[] = [
  {
    date: "2017-10-04",
    dateLabel: "October 2017 → January 2020",
    title: "Bioptix becomes Riot Blockchain, and the SEC comes calling",
    detail:
      "A Castle Rock, Colorado veterinary-diagnostics shell renames itself Riot Blockchain on October 4, 2017; the stock rises by half in a week and several-fold in three months, and CNBC's investigation that February finds a company with more promise than product. The SEC issues a subpoena on April 9, 2018; the chief executive, John O'Rourke, resigns that September after being named in an unrelated $27 million manipulation case; a shareholder suit follows. The investigation closes on January 29, 2020 with no enforcement recommended, and the suit is eventually dismissed with prejudice.",
    kind: "shell",
    sourceIds: [1, 2, 3, 4, 18],
  },
  {
    date: "2021-05-26",
    dateLabel: "February → May 2021",
    title: "Jason Les, and the largest mine in North America",
    detail:
      "Jason Les, a director since 2017 and a former professional poker player, becomes chief executive on February 8, 2021 - \"Bitcoin positioned to disrupt the global financial system.\" On April 8 Riot agrees to buy Whinstone US, the operator of the old Alcoa site at Rockdale, for $80 million in cash and 11.8 million shares, about $651 million at that day's price; the deal closes May 26. \"The most significant milestone in Riot's history,\" Les says. Rockdale, expanded to 700 developed megawatts by 2023, becomes what the company's filings call \"the largest single Bitcoin mining facility in North America.\"",
    kind: "miner",
    sourceIds: [5, 6, 7, 18],
  },
  {
    date: "2022-06-16",
    dateLabel: "April → June 2022",
    title: "Corsicana: a gigawatt announced, and the neighbors organize",
    detail:
      "On April 27, 2022 Riot announces a one-gigawatt, immersion-cooled campus on 265 acres in Navarro County, first phase 400 megawatts. Within seven weeks the Concerned Citizens of Navarro County are protesting - \"We do not want this\" - over water, noise, and the tax breaks to come. The year ends with revenue of $259 million and a net loss of $509.6 million.",
    kind: "county",
    sourceIds: [8, 9, 10],
  },
  {
    date: "2023-09-08",
    dateLabel: "January → September 2023",
    title: "Riot Platforms, the Senate, and the $31.7 million month",
    detail:
      "Renamed Riot Platforms on January 3, 2023, the company sends its research chief Pierre Rochard to testify against Kolkhorst's SB 1751 on March 28 - \"Bitcoin miners are the number 1 employer in Rockdale. Bitcoin miners are also the number 1 taxpayer to Rockdale ISD.\" In August it curtails Rockdale by more than 95% at the peaks and books $31.7 million in credits against 333 bitcoin mined - \"a landmark month,\" Les says - and the press reports that Texas paid it more not to mine than to mine. Riot's answer two days later: $24.2 million were resale credits under its fixed-price contract with TXU and $7.4 million ERCOT's, \"less than one percent of the program.\" The year's credits total $71.2 million against $189 million of mining revenue.",
    kind: "grid",
    sourceIds: [11, 12, 13, 14, 15, 16, 17],
  },
  {
    date: "2024-10-15",
    dateLabel: "February → October 2024",
    title: "The survey suit, the county that said no, and the one that said yes",
    detail:
      "On February 23, 2024 Riot and the Texas Blockchain Council sue the Department of Energy over an emergency survey of miners' power use and win a restraining order in a day; the survey is withdrawn by March 1. On March 11 Navarro County's commissioners unanimously refuse Riot's reinvestment zone - \"They created a lot of controversy\" - and on April 18 the 400-megawatt Corsicana substation is energized anyway. In May Riot launches a hostile bid for Bitfarms and builds a stake near a fifth of the company before settling in September for a board seat. On October 15 Navarro County passes the abatement 3–2: ten years, $640 million pledged, 140 jobs. The halving cuts the year's credits to $33.7 million and its bitcoin to 4,828, but a new accounting rule turns the year into $109.4 million of net income.",
    kind: "county",
    sourceIds: [19, 20, 21, 23, 25, 26, 29],
  },
  {
    date: "2025-02-13",
    dateLabel: "January → February 2025",
    title: "The pivot: 600 megawatts of Corsicana turned toward AI",
    detail:
      "On January 21, 2025 Riot announces a formal evaluation of about 600 megawatts at Corsicana for AI and high-performance computing, halts the second mining phase, cuts its hashrate target from 46.7 to 38.4 exahash, and trims $245 million of capital spending. On February 13 it seats three new directors \"with constructive, independent input from each of Starboard Value LP and The D. E. Shaw Group\" - the activists who had pushed for the turn. That week Rochard tells the Senate the state should buy bitcoin: \"now is the perfect time to make a strategic investment.\"",
    kind: "landlord",
    sourceIds: [27, 28, 44],
  },
  {
    date: "2025-06-10",
    dateLabel: "April → June 2025",
    title: "Rhodium, the loss-making contract, and the $83.5 million pay year",
    detail:
      "On April 28 Riot closes the $185 million purchase of Rhodium's 125 megawatts at Rockdale, ending a hosting contract inherited with Whinstone that \"generated a gross loss of approximately $15 million\" the year before. In June the proxy discloses that Les's 2024 compensation was $83,532,328, most of it a $75.2 million performance-share grant, against a median employee's $58,875 - a ratio of 1,419 to one. The year ends with revenue of $647.4 million, a net loss of $663.2 million, and power credits of $56.7 million, \"nearly $10,000 per Bitcoin mined.\"",
    kind: "miner",
    sourceIds: [30, 31, 33],
  },
  {
    date: "2026-02-10",
    dateLabel: "January → February 2026",
    title: "AMD, the deed to Rockdale, and a 75% abatement",
    detail:
      "On January 16, 2026 Riot signs its first data-center tenant, AMD, for 25 megawatts at Rockdale over ten years, about $311 million, with options to 200 - and buys the 200-acre site outright for $96 million, funded by selling about 1,080 bitcoin. In February Milam County's commissioners vote 4–1 for a 75% abatement over ten years from 2028; the dissenter: \"I thought that was too steep.\" Riot pays $20 million to settle the last inherited Whinstone claim. By March the proxy shows about 378 million shares, four and a half times the 84 million of 2021, and Les's 2025 pay at $3.46 million with no long-term grant \"in direct response to 2025 Say-on-Pay feedback.\"",
    kind: "landlord",
    sourceIds: [34, 35, 36, 38],
  },
  {
    date: "2026-08-10",
    dateLabel: "April → August 2026",
    title: "The $9.1 billion lease: 191 megawatts to a frontier AI lab",
    detail:
      "The second 25 AMD megawatts are exercised in April; Riot signs a non-binding letter of intent for all 756 megawatts of Corsicana's planned capacity with a single tenant; and on August 10, 2026 it announces a twenty-year, 191-megawatt lease at Rockdale with \"one of the world's leading frontier AI labs\" - about $9.1 billion in base rent to June 2048, 96 megawatts by December 2027, the rest by June 2028. Bloomberg names Anthropic; \"Riot declined to comment and Anthropic didn't respond.\" Les: \"a defining moment in our evolution into a leading developer of large-scale data centers.\" The same filing reports a $237.2 million quarterly loss and 11,380 bitcoin held, down from 18,005 at year-end after some 7,000 were sold to build. Eight days later the Governor announces Riot has committed to comply with his data-center standards, and Les publishes an open letter of support.",
    kind: "landlord",
    sourceIds: [37, 39, 40, 41, 42],
  },
];
