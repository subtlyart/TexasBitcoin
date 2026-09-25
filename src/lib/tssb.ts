// The Texas State Securities Board and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: an institutional page, the companion to the Attorney
// General's. The subject is the agency - the independent securities
// regulator under the Securities Commissioner - and what it has done with
// the asset since its first Bitcoin alert in 2014. The record is drawn
// from the Board's own orders, notices of hearing, releases, sweep report,
// annual financial reports, and enforcement index (PDFs read directly),
// the bankruptcy courts, NASAA, the State Office of Administrative
// Hearings as reported, and Texas and trade press. The thesis is the
// first: on December 20, 2017 this agency entered the first order by any
// state securities regulator against a crypto investment scheme, led the
// forty-regulator sweep that followed, put the three big lenders on
// notice five to sixteen months before they failed, opened an account
// under its own enforcement director's name to prove FTX was selling an
// investment contract, and has entered more than seventy crypto orders
// since. The honest counterweight is the office's own sentence - "the
// TSSB is not regulating the cryptocurrencies themselves" - and the
// cases it lost, set aside, or never joined, the offshore orders that
// collect nothing, and the kiosks that belong to another agency.
//
// Verified September 25, 2026. Re-verify when the TEXITcoin proposal for
// decision issues (briefs closed October 2026) and after the agency's
// first year under Commissioner Heintz.

export const TSSB_LAST_VERIFIED = "September 25, 2026";

export interface TssbSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Board's own orders, notices, reports, and
// index; then the courts and NASAA; then Texas and trade press.
export const tssbSources: TssbSource[] = [
  { id: 1, label: "Texas State Securities Board - Investor Alert: Risks of investments tied to digital currencies (February 25, 2014): Commissioner John Morgan's first Bitcoin guidance - Mt. Gox, volatility, anonymity", url: "https://ssb.texas.gov/index.php/news-publications/investor-alert-risks-investments-tied-digital-currencies" },
  { id: 2, label: "Texas State Securities Board - Enforcement 2017: oil drilling, crypto mining (January 31, 2018): USI-Tech, ENF-17-CDO-1753, December 20, 2017 - \"daily return of 1%\"; the first state order against a cryptocurrency-linked investment; USI-Tech ceased U.S. sales within three weeks", url: "https://ssb.texas.gov/news-publications/enforcement-2017-oil-drilling-crypto-mining" },
  { id: 3, label: "Texas State Securities Board - Administrative action report, January–March 2018: BitConnect ENF-18-CDO-1754 (January 4, 2018; \"up to 40% per month\"; \"disclosed virtually nothing about its principals\"), R2B Coin, DavorCoin, Investors in Crypto, LeadInvest", url: "https://ssb.texas.gov/news-publications/administrative-action-report-jan-march-2018" },
  { id: 4, label: "Texas State Securities Board - Widespread Fraud Found in Cryptocurrency Offerings (April 10, 2018, PDF): 32 investigations in four weeks; 19 claimed to use Bitcoin; none registered; five guaranteed returns \"some as high as 40% per month\"; \"the TSSB is not regulating the cryptocurrencies themselves, only the investments that claim to use virtual currencies\"", url: "https://ssb.texas.gov/sites/default/files/CRYPTO%20SWEEP%20report%20April%2010%202018%20FINAL.pdf" },
  { id: 5, label: "Texas State Securities Board - Texas spearheads U.S.–Canada probe of cryptocurrency investments (May 21, 2018): Texas \"took the lead in organizing, managing, and coordinating\" Operation Cryptosweep; forty-plus regulators; ten Texas actions since December 20, 2017", url: "https://www.ssb.texas.gov/news-publications/texas-spearheads-us-canada-probe-cryptocurrency-investments" },
  { id: 6, label: "NASAA - State and provincial securities regulators conduct coordinated international crypto crackdown (May 21, 2018)", url: "https://www.nasaa.org/45121/state-and-provincial-securities-regulators-conduct-coordinated-international-crypto-crackdown-2/" },
  { id: 7, label: "Texas State Securities Board - States continue crackdown on cryptocurrency investments (August 28, 2018): 47 actions, 200-plus investigations; Iles - \"bad actors are leveraging widespread interest in cryptocurrencies to defraud the investing public\"", url: "https://ssb.texas.gov/news-publications/states-continue-crackdown-cryptocurrency-investments" },
  { id: 8, label: "Blokt - Interview with the Director of Enforcement at the Texas State Securities Board (November 26, 2018): Rotunda - \"Bitcoin, not surprisingly, lit the spark\"; \"It's not the product. It's the people\"; sixteen actions against 57 promoters", url: "https://blokt.com/news/director-of-enforcement-at-the-texas-state-securities-board-talks-bitcoin-cryptocurrencies-icos-and-cybersecurity-exclusive" },
  { id: 9, label: "Texas State Securities Board - Notice of hearing, BlockFi (July 22, 2021, PDF): BlockFi Interest Accounts; the third state to act; Rotunda - \"affords BlockFi and its affiliates the opportunity to respond\"", url: "https://www.ssb.texas.gov/sites/default/files/2021-07/Blockfi_NOH_final.pdf" },
  { id: 10, label: "Texas State Securities Board - Board joins other state regulators to settle with digital-asset lender BlockFi (February 14, 2022): $50 million to the states and $50 million to the SEC; Texas share $943,396.22; about 36,443 Texas investors and $688 million; Iles - \"Complying with existing laws and regulations promotes continued investor protection\"", url: "https://ssb.texas.gov/news-publications/texas-state-securities-board-joins-other-state-regulators-settle-digital-asset" },
  { id: 11, label: "Texas State Securities Board - Notice of hearing, Celsius Network (September 17, 2021, PDF): \"more than $344,000,000 in assets under management from more than 9,000 Texas residents\"; regulators had warned Celsius privately in May 2021; existing accounts untouched", url: "https://www.ssb.texas.gov/sites/default/files/2021-09/20210917_FINAL_Celsius_NOH_js_signed.pdf" },
  { id: 12, label: "CoinDesk - Texas securities regulator adds Celsius to its crypto lending crosshairs (September 17, 2021): Rotunda - \"I am not trying to put the company out of business or shutter its doors ... We are simply trying to get Celsius in compliance\"", url: "https://www.coindesk.com/policy/2021/09/17/texas-securities-regulator-adds-celsius-to-its-crypto-lending-crosshairs" },
  { id: 13, label: "CoinDesk - Texas, other states open investigation into Celsius Network following account freeze (June 16, 2022): Rotunda - \"very concerned that clients – including many retail investors – may need to immediately access their assets yet are unable to withdraw\"", url: "https://www.coindesk.com/business/2022/06/16/texas-other-states-open-investigation-into-celsius-network-following-account-freeze" },
  { id: 14, label: "U.S. Bankruptcy Court, S.D.N.Y. - In re Celsius Network, opinion on the stablecoin motion (2022): the Texas objection overruled", url: "https://www.nysb.uscourts.gov/sites/default/files/opinions/312902_1822_opinion.pdf" },
  { id: 15, label: "Texas State Securities Board - Consent order, Celsius, ENF-24-CDO-1885 (July 16, 2024, PDF): the multistate resolution; states forgo a fine so that assets go to account holders", url: "https://ssb.texas.gov/sites/default/files/2024-07/ENF_24_CDO_1885.pdf" },
  { id: 16, label: "Texas State Securities Board - Notice of hearing, Voyager Digital (April 12, 2022, PDF): \"more than $500 million held in more than 170,000 Voyager Interest Accounts belonging to Texans\"", url: "https://www.ssb.texas.gov/sites/default/files/2022-04/20220412_FINAL_Voyager_NOH_312-22-2244.pdf" },
  { id: 17, label: "Texas State Securities Board - Notice of hearing, Sam Bankman-Fried (November 2022, PDF), reciting the October 14, 2022 declaration of Joseph Jason Rotunda: an FTX account in his own name, ETH moved, 8% yield shown - \"This appears to be an investment contract\"; refunds prioritized over fines", url: "https://www.ssb.texas.gov/sites/default/files/2022-11/NOH_SOAH_312_23_06226.pdf" },
  { id: 18, label: "Texas Tribune - Texas securities regulator investigating FTX (October 17, 2022): a self-initiated probe; Rotunda - \"We want Texans to have the opportunity to invest in what they want to invest in. We want to make sure they're protected\"", url: "https://www.texastribune.org/2022/10/17/texas-securities-ftx-investigation" },
  { id: 19, label: "Dallas Morning News - FTX's Sam Bankman-Fried wins crypto case brought by Texas (February 2, 2023): the administrative law judge found no personal jurisdiction over the non-resident; hearing cancelled", url: "https://www.dallasnews.com/business/2023/02/02/ftxs-sam-bankman-fried-wins-crypto-case-brought-by-texas/" },
  { id: 20, label: "Texas State Securities Board - Board enters consent order with Voyager Digital entities (March 23, 2026): ENF-26-CDO-1894 with the plan administrator; the Earn Program \"generally operated at a deficit\"; Deputy Commissioner Ochoa - \"brings resolution to our enforcement action\"", url: "https://www.ssb.texas.gov/news-publications/texas-state-securities-board-enters-consent-order-voyager-digital-entities" },
  { id: 21, label: "Texas State Securities Board - Board joins $22.5 million state settlement with Nexo Capital (January 19, 2023): $45 million total with the SEC; Texas share $420,000; Rotunda - \"our work does not begin and end with traditional products and established markets\"", url: "https://www.ssb.texas.gov/news-publications/texas-securities-board-joins-225-million-state-settlement-nexo-capital-over" },
  { id: 22, label: "Texas State Securities Board - Abra release (January 22, 2024, PDF): the Texas-led June 2023 action alleging insolvency and concealment; settlement returning assets to about 12,000 U.S. investors including 1,600 Texans; Rotunda - \"we prioritized returning money to retail investors\"", url: "https://www.ssb.texas.gov/sites/default/files/2024-01/Abra_Release_Final_0.pdf" },
  { id: 23, label: "Texas State Securities Board - GS Partners settlement release (September 9, 2024, PDF): full return of deposits to about 800,000 customers in 170-plus countries; Iles - \"regulatory actions that materially benefit many investors are unfortunately rare ... Today's settlement is different\"", url: "https://ssb.texas.gov/sites/default/files/2024-09/GSB_PressRelease_1.pdf" },
  { id: 24, label: "Texas State Securities Board - Emergency cease and desist, GS Partners and Swiss Valorem Bank, ENF-23-CDO-1879 (November 16, 2023, PDF): Texas led the five-state working group; the order came four weeks after the investigation opened", url: "https://ssb.texas.gov/sites/default/files/2023-11/ENF_23_CDO_1879.pdf" },
  { id: 25, label: "Regulatory Oversight - Ten state regulators sue Coinbase alleging securities-law violations (July 2023): Alabama, California, Illinois, Kentucky, Maryland, New Jersey, South Carolina, Vermont, Washington, Wisconsin - not Texas", url: "https://www.regulatoryoversight.com/2023/07/ten-state-ags-sue-coinbase-alleging-securities-law-violations/" },
  { id: 26, label: "Texas State Securities Board - What happens in the metaverse does not stay in the metaverse (April 13, 2022): Sand Vegas Casino Club, ENF-22-CDO-1860, with Alabama; Rotunda - \"Virtual reality can leave you virtually broke\"", url: "https://ssb.texas.gov/news-publications/what-happens-metaverse-does-not-stay-metaverse-texas-securities-commissioner" },
  { id: 27, label: "Texas State Securities Board - Texas leads coordinated states' action to stop artificial-intelligence investment scheme (May 3, 2023): The Shark of Wall Street and Hedge4.ai, with Alabama, Kentucky, Montana, New Jersey", url: "https://ssb.texas.gov/news-publications/texas-leads-coordinated-states-action-stop-artificial-intelligence-investment" },
  { id: 28, label: "Texas State Securities Board - Texas grounds crypto-mining investment \"rocket ship\" (February 11, 2026): TEXITcoin, MineTXC, Blockchain Mint, Robert J. Gray, ENF-26-CDO-1893; Ochoa - \"when investor harm is immediate and ongoing, it's imperative we act quick[ly]\"", url: "https://www.ssb.texas.gov/news-publications/texas-grounds-crypto-mining-investment-rocket-ship" },
  { id: 29, label: "Texas Public Radio - Hearing opens over TEXITcoin securities and fraud allegations (August 17, 2026): four days before the State Office of Administrative Hearings; about $147 million raised, $65 million in commissions, 55,000 participants; the Board argued by Jeramy Heintz; briefs due October", url: "https://www.tpr.org/economy-and-labor/2026-08-17/hearing-opens-over-texitcoin-securities-and-fraud-allegations" },
  { id: 30, label: "The Crypto Times - Texas regulators drop claims against Apertum Foundation (August 2, 2025): ENF-25-CDO-1891 set aside the April emergency order against Josip Heit's Apertum; Quinn Emanuel - \"This case should never have been brought\"; no public explanation from the Board", url: "https://www.cryptotimes.io/2025/08/02/texas-regulators-drop-claims-against-apertum-foundation/" },
  { id: 31, label: "Texas State Securities Board - Cryptocurrency enforcement index: \"more than 70 administrative orders\" since December 2017, listed by year 2017–2026", url: "https://www.ssb.state.tx.us/cryptocurrency-enforcement" },
  { id: 32, label: "Texas State Securities Board - Annual Financial Report FY2025 (PDF): \"the first state securities regulator to enter an enforcement action against a cryptocurrency firm in December 2017\"; the federal Responsible Financial Innovation Act \"threatens the Texas definition of the 'investment contract' as enunciated by the Supreme Court of Texas in Life Partners v. Arnold\"", url: "https://www.ssb.texas.gov/sites/default/files/2025-10/AFR_FY25_Agy312.pdf" },
  { id: 33, label: "Texas State Securities Board - Legislative appropriations request FY2024–25 (August 2022, PDF): 75 staff against a cap of 92; Enforcement Division 27, under Director Joe Rotunda; the agency returns roughly $160 million a year to general revenue on a budget near $9 million", url: "https://ssb.texas.gov/sites/default/files/2022-08/Agy312_LAR_FY2425_Final_Revised.pdf" },
  { id: 34, label: "Texas State Securities Board - Agency overview: created 1957; five governor-appointed members; the Board appoints the Commissioner; Austin, Dallas, Houston, Corpus Christi", url: "https://ssb.texas.gov/about-us/agency-overview" },
  { id: 35, label: "Texas State Securities Board - Travis Iles appointed Texas Securities Commissioner (August 1, 2017, effective September 1): the eighth commissioner, succeeding John Morgan", url: "https://ssb.texas.gov/news-publications/travis-iles-appointed-texas-securities-commissioner" },
  { id: 36, label: "Texas State Securities Board - Jeramy E. Heintz appointed Texas Securities Commissioner (June 22, 2026, effective June 18): the ninth; formerly Director of Enforcement; Iles retired", url: "https://ssb.texas.gov/news-publications/jeramy-e-heintz-appointed-texas-securities-commissioner" },
  { id: 37, label: "Supreme Court of Texas - Life Partners, Inc. v. Arnold, No. 14-0122 (2015): the investment-contract test under Texas law", url: "https://www.txcourts.gov/media/962845/140122.pdf" },
  { id: 38, label: "Texas Tribune - Texans lost $56.8 million to cryptocurrency kiosk scams (July 8, 2026): kiosks fall to the Department of Banking; SB 1705 died at sine die; the Board \"also investigates fraudulent cryptocurrency activity\"", url: "https://www.texastribune.org/2026/07/08/texas-cryptocurrency-kiosk-bitcoin-atm-scam-fraud/" },
  { id: 39, label: "Texas Blockchain Council - An interview with Lee Bratcher: \"The Texas State Board of Securities has done an impeccable job of rooting out bad actors\"", url: "https://texasblockchaincouncil.org/blog/an-interview-with-lee-bratcher-49pz7-bna5x" },
  { id: 40, label: "NASAA - NASAA urges Congress to champion the states as fraud fighters (September 17, 2025, PDF): In re BitConnect (Texas, January 4, 2018) and In re Wind Wide Coin (Texas, May 15, 2018) cited as the model state crypto antifraud cases", url: "https://www.nasaa.org/wp-content/uploads/2025/09/NASAA-Urges-Congress-to-Champion-the-States-as-Fraud-Fighters-as-Congress-Examines-Fraud-and-New-Technologies-9.17.25-F.pdf" },
];

// The Board's own crypto-enforcement index, orders per calendar year
// (tallied from the index pages, September 2026; 2023 header says 11).
export const tssbOrdersByYear: { year: number; n: number; note?: string }[] = [
  { year: 2017, n: 1, note: "USI-Tech, Dec 20 - the first" },
  { year: 2018, n: 15, note: "BitConnect; the sweep" },
  { year: 2019, n: 9 },
  { year: 2020, n: 18, note: "the pandemic peak" },
  { year: 2021, n: 15, note: "BlockFi, Celsius notices" },
  { year: 2022, n: 5, note: "Voyager; the metaverse casinos; FTX" },
  { year: 2023, n: 11, note: "Nexo, Abra, GS Partners" },
  { year: 2024, n: 5, note: "Celsius, Abra consents" },
  { year: 2025, n: 1, note: "Apertum - set aside" },
  { year: 2026, n: 5, note: "TEXITcoin; Voyager consent (to Sept)" },
];

export type TssbTimelineKind = "first" | "lenders" | "cases" | "gap" | "watch";

// The arc: the first order → the sweep → the lenders → FTX → the ledger.
export interface TssbEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: TssbTimelineKind;
  sourceIds: number[];
}

export const tssbTimeline: TssbEvent[] = [
  {
    date: "2014-02-25",
    dateLabel: "February 25, 2014",
    title: "The first alert, five weeks before Memo 1037",
    detail:
      "Commissioner John Morgan issues the Board's first Bitcoin guidance, an investor alert on digital currencies - Mt. Gox, volatility, anonymity - while Central Texas Gun Works is running the state's second Bitcoin ATM and the Department of Banking has not yet said what the asset is. The agency that would lead the country on crypto fraud begins with a warning, not an order.",
    kind: "first",
    sourceIds: [1],
  },
  {
    date: "2017-12-20",
    dateLabel: "December 20, 2017",
    title: "USI-Tech: the first state order against a crypto scheme",
    detail:
      "Twelve weeks into Travis Iles's tenure as commissioner, the Board enters ENF-17-CDO-1753, an emergency cease-and-desist against USI-Tech of Dubai and two American sales agents selling Bitcoin-mining contracts through Craigslist ads and YouTube - a \"daily return of 1%,\" 35% referral commissions, and no disclosure of where the mining happened or what it cost. It is, by the Board's account and NASAA's, the first enforcement order by any state securities regulator against a cryptocurrency-linked investment. USI-Tech quits the U.S. market within three weeks.",
    kind: "first",
    sourceIds: [2, 32, 35],
  },
  {
    date: "2018-01-04",
    dateLabel: "January 4, 2018",
    title: "BitConnect, two days before the top",
    detail:
      "ENF-18-CDO-1754 halts BitConnect's Texas sales of a lending program promising up to 40% a month - a company that \"has disclosed virtually nothing about its principals, financial condition, or strategies.\" BitConnect Coin peaks at a $2.6 billion market value on January 6 and loses 98% of it within weeks. NASAA still cites the order to Congress as the model of what a state can do.",
    kind: "first",
    sourceIds: [3, 4, 40],
  },
  {
    date: "2018-05-21",
    dateLabel: "December 2017 → August 2018",
    title: "The sweep: 32 offerings in four weeks, then forty regulators",
    detail:
      "Enforcement opens 32 crypto investigations in four weeks and publishes the results on April 10: nineteen claimed to use Bitcoin, none was registered, five guaranteed returns \"some as high as 40% per month,\" and only eleven gave a physical address. Seven orders follow. On May 21 NASAA announces Operation Cryptosweep - forty-plus U.S. and Canadian regulators, seventy investigations - and Texas \"took the lead in organizing, managing, and coordinating\" it. By August: 47 actions across the continent, sixteen of them Texas's. Enforcement director Joe Rotunda, that fall: \"Bitcoin, not surprisingly, lit the spark.\" \"It's not the product. It's the people.\"",
    kind: "first",
    sourceIds: [4, 5, 6, 7, 8],
  },
  {
    date: "2021-09-17",
    dateLabel: "July → September 2021",
    title: "The lenders on notice: BlockFi and Celsius",
    detail:
      "On July 22 the Board files a notice of hearing against BlockFi over its interest accounts, the third state to act; on September 17, one of four states the same day, against Celsius - \"more than $344,000,000 in assets under management from more than 9,000 Texas residents,\" after a private warning in May that Celsius ignored. Neither is an emergency order: existing accounts are untouched and the companies get a hearing. Rotunda: \"I am not trying to put the company out of business or shutter its doors ... We are simply trying to get Celsius in compliance.\"",
    kind: "lenders",
    sourceIds: [9, 11, 12],
  },
  {
    date: "2022-04-12",
    dateLabel: "February → April 2022",
    title: "BlockFi settles; Voyager is next",
    detail:
      "On February 14, 2022 BlockFi settles with the states and the SEC for $100 million - $50 million to the states, split equally, Texas's share $943,396.22 against roughly $688 million that 36,443 Texans had deposited. On April 12 the Board notices Voyager: \"more than $500 million held in more than 170,000 Voyager Interest Accounts belonging to Texans.\" Voyager files for bankruptcy on July 5; Celsius freezes withdrawals in June and Texas learns of it from social media - \"very concerned,\" Rotunda says, \"that clients ... may need to immediately access their assets yet are unable to.\"",
    kind: "lenders",
    sourceIds: [10, 16, 13],
  },
  {
    date: "2022-10-14",
    dateLabel: "October 14, 2022",
    title: "The declaration: an FTX account in the enforcement director's own name",
    detail:
      "FTX US wins the Voyager auction. The Board, through the Attorney General as its counsel, objects, and attaches a sworn declaration by Joseph Jason Rotunda: he opened an FTX account under his own name and an Austin address, moved ether into it, and was shown an 8% yield. \"Despite the fact I identified myself by name and address, the FTX Trading App now shows that I am earning yield on the ETH ... This appears to be an investment contract.\" The declaration discloses an open, self-initiated investigation of FTX and Sam Bankman-Fried. FTX collapses three weeks later.",
    kind: "cases",
    sourceIds: [17, 18],
  },
  {
    date: "2023-02-02",
    dateLabel: "November 2022 → February 2023",
    title: "The Bankman-Fried notice, and the jurisdiction ruling",
    detail:
      "In November the Board notices Bankman-Fried personally - seeking refunds to Texans ahead of any fine, and up to $250,000 more per act against Texans over 65. On February 2, 2023 an administrative law judge rules the Board lacks personal jurisdiction over a non-resident and cancels the hearing. It is the Board's clearest crypto loss, and the case that showed the limit of a state order against a man who never set foot in Texas.",
    kind: "gap",
    sourceIds: [17, 19],
  },
  {
    date: "2024-09-09",
    dateLabel: "January 2023 → September 2024",
    title: "Nexo, Abra, GS Partners: the working-group years",
    detail:
      "Nexo settles for $45 million, half to the states, Texas's share $420,000. In June 2023 a Texas-led group moves ex parte against Abra, alleging it was insolvent and moving funds to Binance while holding $1.8 million for 1,600 Texans; the January 2024 settlement returns the assets - \"we prioritized returning money to retail investors.\" In November 2023 Texas leads five states against GS Partners and Josip Heit four weeks after opening the file; the September 2024 settlement returns deposits to about 800,000 customers worldwide. Iles: \"regulatory actions that materially benefit many investors are unfortunately rare ... Today's settlement is different.\" Texas joins neither the ten-state Coinbase staking action nor any Kraken case.",
    kind: "cases",
    sourceIds: [21, 22, 24, 23, 25],
  },
  {
    date: "2025-07-31",
    dateLabel: "April → July 2025",
    title: "Apertum: the order the Board set aside",
    detail:
      "In April 2025 the Board enters an emergency order against Apertum Foundation and Heit - the GS Partners respondent it had settled with the year before - over the APTM token. On July 31 Iles enters ENF-25-CDO-1891: the emergency order \"is set aside.\" Respondents' counsel: \"This case should never have been brought.\" The Board gives no public explanation. It is the only crypto emergency order the agency has vacated on its own motion, and 2025's only crypto entry on its index.",
    kind: "gap",
    sourceIds: [30, 31],
  },
  {
    date: "2026-08-17",
    dateLabel: "February → October 2026",
    title: "TEXITcoin: the mining case that went to a full hearing",
    detail:
      "On February 11, 2026 Deputy Commissioner Cristi Ochoa halts TEXITcoin, MineTXC, and Robert J. Gray's sale of \"seats on the rocket ship\" - mining-pool participations that raised about $147 million from 55,000 people and paid $65 million in commissions. Gray demands a hearing; his counsel argues the SEC's March 2026 mining-pool guidance takes it outside securities law. Four days of testimony before the State Office of Administrative Hearings, August 17–20, with the Board argued by Jeramy Heintz - appointed the ninth Securities Commissioner on June 18 - and briefs due in October. In March the Board closed Voyager with a consent order and no fine.",
    kind: "watch",
    sourceIds: [28, 29, 36, 20],
  },
];
