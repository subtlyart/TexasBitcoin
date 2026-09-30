// The Texas Blockchain Council - the sourced dataset.
//
// PHILOSOPHY: the institutions wing's one private institution. The
// subject is the trade association - a 501(c)(6) founded in Richardson
// in 2019 by a political-science professor and Army reservist - that
// wrote or carried most of the Bitcoin law this site describes: the 2021
// UCC definition and Work Group, the 2023 campaign that killed the brake
// on the miners, the 2024 suit that stopped a federal survey in a day,
// and the 2025 statute that made Texas the first state to buy bitcoin.
// The thesis is the lobby that outgrew its name: funded more than half
// by miners, it named a sitting legislator its president in January
// 2026 while he still held his seat, and on August 18, 2026 dropped
// "Blockchain" for "Digital Infrastructure Network" as its members
// became data-center landlords - the same season Cipher dropped
// "Mining." The honest counterweight cuts both ways: it is the reason
// the reserve exists and the reason the survey does not; its revenue is
// about two million dollars a year, a rounding error beside the
// companies it speaks for; and its record of transparency, in Public
// Citizen's phrase, is that of "an enemy of transparency." One
// correction the research produced: SB 1751 passed the Senate 31–0 on
// the local and uncontested calendar, not 30–1 as the press and, until
// September 30, 2026, this site reported.
//
// Verified September 30, 2026. Re-verify after the North American
// Blockchain Summit (November 18–19, 2026), when the 2027 legislative
// priorities are published, when Capriglione leaves the House (January
// 2027), and when the 2026 Form 990 is filed.

export const TBC_LAST_VERIFIED = "September 30, 2026";

export interface TbcSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the council's own releases and site, the IRS
// record via ProPublica, the Texas Ethics Commission, the Legislature's
// witness lists, journals, and histories, the federal dockets; then the
// Texas and trade press.
export const tbcSources: TbcSource[] = [
  { id: 1, label: "PR Newswire - Texas Blockchain Council launches to make Texas a leader in blockchain innovation (November 9, 2020): Bratcher \"President and Founder\"; goals of a caucus, a work group, and a UCC update; Bratcher - \"Silicon Valley has lost its competitive edge, and Texas is positioning itself to lead\"", url: "https://www.prnewswire.com/news-releases/texas-blockchain-council-launches-to-make-texas-a-leader-in-blockchain-innovation-301168332.html" },
  { id: 2, label: "ProPublica Nonprofit Explorer - Texas Blockchain Council, EIN 85-1019061: 501(c)(6), Richardson, ruling February 2021; revenue $859,418 (2021), $2,017,286 (2022), $949,488 (2023), $2,245,704 (2024), $2,368,020 (2025); net assets −$412,111 at end-2023; president compensation $153,335 (2021) to $480,012 (2025)", url: "https://projects.propublica.org/nonprofits/organizations/851019061" },
  { id: 3, label: "PR Newswire - Texas Blockchain Council spearheads passage of two blockchain laws (July 14, 2021): HB 1576 and HB 4474; Parker and Paxton; Smolenski, board chair - \"the opening salvo letting the world know that Texas is open for blockchain business\"", url: "https://www.prnewswire.com/news-releases/texas-blockchain-council-spearheads-passage-of-two-blockchain-laws-301333162.html" },
  { id: 4, label: "PR Newswire - Texas Blockchain Council announces first Texas Blockchain Summit (July 1, 2021): October 8, Austin; Bratcher - \"years of policy work in Texas that started in early 2019 when Representative Parker filed the first Blockchain Work Group bill\"", url: "https://www.prnewswire.com/news-releases/texas-blockchain-council-announces-first-texas-blockchain-summit-301323942.html" },
  { id: 5, label: "Dallas Innovates - Could the Texas Blockchain Council turn Texas into America's blockchain and crypto capital? (July 28, 2021): 20 members in 2020, more than 50 in 2021; Whinstone, Argo, Compass among the partners", url: "https://dallasinnovates.com/watch-out-wyoming-could-the-texas-blockchain-council-turn-texas-into-americas-blockchain-and-crypto-capital/" },
  { id: 6, label: "Chainalysis Public Key podcast, episode 103 - Blockchain in Texas with Lee Bratcher (2024): \"a 501(c)(6) trade association, so like your chambers of commerce essentially\"; about 95 corporate members", url: "https://www.chainalysis.com/blog/blockchain-in-texas-ep-103/" },
  { id: 7, label: "Texas Legislature Online - HB 1576 witness list, House Pensions, Investments & Financial Services (March 17, 2021): Boot, Bratcher, and Lewellen for the council", url: "https://capitol.texas.gov/tlodocs/87R/witlistbill/html/HB01576H.htm" },
  { id: 8, label: "Texas Legislature Online - HB 4474 witness list, Senate Business & Commerce (May 18, 2021): Calicott testifying for; Bratcher registered for", url: "https://capitol.texas.gov/tlodocs/87R/witlistbill/html/HB04474S.htm" },
  { id: 9, label: "Office of the Lieutenant Governor - Appointments to the Work Group on Blockchain Matters (October 29, 2021): Senator Paxton; Christopher Calicott among the appointees", url: "https://www.ltgov.texas.gov/2021/10/29/lt-gov-dan-patrick-announces-appointments-to-the-work-group-on-blockchain-matters/" },
  { id: 10, label: "Austin American-Statesman - Blockchain group urges Texas to become hub for cryptocurrency (December 7, 2022): the Work Group report; Abbott's 2021 mansion reception for the council and his prediction that Texas would be \"#1 for blockchain & cryptocurrency\"", url: "https://www.statesman.com/story/business/technology/2022/12/07/texas-urged-to-become-hub-for-cryptocurrency-and-other-blockchain-tech-web3/69674697007/" },
  { id: 11, label: "Texas Tribune - Despite FTX's fall, Texas' crypto industry stays optimistic (November 21, 2022): \"over 100 corporate members\"; the second summit; the council a Tribune financial supporter; Patterson - \"The loudest voice in the room doesn't always speak for everyone\"", url: "https://www.texastribune.org/2022/11/21/texas-crypto-blockchain-ftx-bankruptcy" },
  { id: 12, label: "Cointelegraph - High sentiment in FTX's shadow: the Texas Blockchain Summit (November 2022): about 1,000 at the 2021 summit; Cruz, Mersinger, Yang", url: "https://cointelegraph.com/news/high-sentiment-in-ftx-s-shadow-event-recap-for-texas-blockchain-summit" },
  { id: 13, label: "KRON4 / EIN Presswire - Texas Blockchain Summit day two (November 2022): Senator Angela Paxton named Legislator of the Year", url: "https://www.kron4.com/business/press-releases/ein-presswire/602066622/texas-blockchain-summit-day-2-features-cryptos-leading-regulatory-and-policy-focused-elected-officials-and-leaders/" },
  { id: 14, label: "Texas Legislature Online - SB 1751 witness list, Senate Business & Commerce (March 28, 2023): Bratcher and Cranley for the council testifying on, not against; Riot and US Bitcoin against; Sierra Club, Navarro County residents, and Public Citizen for", url: "https://capitol.texas.gov/tlodocs/88R/witlistbill/html/SB01751S.htm" },
  { id: 15, label: "CoinDesk - Texas bill limiting benefits for crypto miners unanimously passes committee vote (April 4, 2023): the council - \"We urge all Texas residents to reach out to their representatives and encourage them to vote against this anti-free market bill\"", url: "https://www.coindesk.com/policy/2023/04/04/texas-bill-limiting-benefits-for-crypto-miners-unanimously-passes-committee-vote" },
  { id: 16, label: "The Digital Chamber - Blockchain leaders launch grassroots \"Don't Mess With Texas Innovation\" campaign (April 10, 2023): with the council and the Satoshi Action Fund; Bratcher - \"ERCOT and all Texans will be paying more for these services\"", url: "https://digitalchamber.org/blockchain-leaders-launch-grassroots-dont-mess-with-texas-innovation-campaign-to-stop-anti-competitive-energy-bill-in-texas/" },
  { id: 17, label: "CBS Austin - Bitcoin leaders push back against SB 1751 (April 2023): Bratcher - Kolkhorst \"is just being fed bad information on this particular issue\"; \"a targeted bill against a single industry\"", url: "https://cbsaustin.com/news/local/bitcoin-leaders-push-back-against-sb-1751-restrictions-with-campaign-ahead-of-senate-vote" },
  { id: 18, label: "The Digital Chamber - Joint letter to Lieutenant Governor Patrick opposing SB 1751 (April 12, 2023): \"anti-free market and anti-bitcoin mining\"", url: "https://digitalchamber.org/chamber-of-digital-commerce-texas-blockchain-council-and-satoshi-action-fund-oppose-anti-bitcoin-mining-bill-texas-sb-1751/" },
  { id: 19, label: "Texas Senate Journal - 88th Legislature, April 12, 2023, local and uncontested calendar session: \"CSSB 1751 (Kolkhorst, Campbell, Nichols) ... (viva voce vote) (31-0) (31-0)\"", url: "https://journals.senate.texas.gov/SJRNL/88R/HTML/88RSJ04-12-F1.HTM" },
  { id: 20, label: "Texas Legislature Online - SB 1751 (88R) bill history: committee 11–0 April 4; recommended for the local and uncontested calendar April 5; passed the Senate April 12, Journal p. 891; referred to House State Affairs April 24; no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 21, label: "CoinDesk - Texas Senate passes bill to limit Bitcoin miners' participation in demand response programs (April 12, 2023, corrected April 13): \"An earlier version of the story said that the bill passed with one vote against it\"", url: "https://www.coindesk.com/policy/2023/04/12/texas-senate-passes-bill-to-limit-bitcoin-miners-participation-in-demand-response-programs" },
  { id: 22, label: "No BS Bitcoin - Texas anti-Bitcoin-mining bill failed to become law while miners got a new tax incentive (May 30, 2023): Bratcher - \"a victory for the great state of Texas\"; more than 5,000 grassroots participants", url: "https://www.nobsbitcoin.com/texas-anti-bitcoin-mining-bill-failed-to-become-law/" },
  { id: 23, label: "CoinDesk - Bitcoin miners gain support from Texas with two bills passed, one halted (June 1, 2023): Bratcher - \"Texas remains the jurisdiction of choice\"; Sawicky - \"The house just didn't prioritize it\"", url: "https://www.coindesk.com/policy/2023/06/01/bitcoin-miners-gain-support-from-texas-with-two-bills-passed-one-halted" },
  { id: 24, label: "Texas Legislature Online - HB 1666 witness list, House Pensions, Investments & Financial Services (March 15, 2023): Bratcher for the proof-of-reserves bill", url: "https://capitol.texas.gov/tlodocs/88R/witlistbill/html/HB01666H.htm" },
  { id: 25, label: "Disruption Banking - The Texas Blockchain Summit is back, now called the North American Blockchain Summit (October 9, 2023): November 15–17, Fort Worth", url: "https://www.disruptionbanking.com/2023/10/09/texas-blockchain-summit-is-back-this-november-but-now-its-called-the-north-american-blockchain-summit/" },
  { id: 26, label: "CoinDesk - Texas Blockchain Council, Riot Platforms sue Department of Energy, OMB over \"emergency\" survey (February 23, 2024): Bratcher - \"an alarming precedent of government intrusion into private industry operations\"; the complaint - \"sloppy government process, contrived and self-inflicted urgency, and invasive government data collection\"", url: "https://www.coindesk.com/policy/2024/02/23/texas-blockchain-council-riot-platforms-sue-dept-of-energy-omb-over-emergency-survey" },
  { id: 27, label: "CourtListener - Dockets: Texas Blockchain Council v. Department of Energy, W.D. Tex. 6:24-cv-00099, filed February 22, 2024, Judge Albright; Blockchain Association v. Internal Revenue Service, N.D. Tex. 3:24-cv-03259, filed December 27, 2024, Judge Starr", url: "https://www.courtlistener.com/api/rest/v4/search/?q=%22Texas%20Blockchain%20Council%22&type=r" },
  { id: 28, label: "New Civil Liberties Alliance - Texas Blockchain Council et al. v. Department of Energy et al.: the TRO of February 23, 2024; the March 1 agreement withdrawing the survey and destroying the data", url: "https://nclalegal.org/case/texas-blockchain-council-et-al-v-department-of-energy-et-al/" },
  { id: 29, label: "Baker McKenzie - To end a lawsuit, the Department of Energy agrees to halt its survey (March 6, 2024): $2,199.45 in fees and costs recovered", url: "https://blockchain.bakermckenzie.com/2024/03/06/to-end-a-lawsuit-department-of-energy-agrees-to-halt-its-survey-seeking-data-from-crypto-miners/" },
  { id: 30, label: "The Block - Sierra Club says accurate insight into crypto miners' energy use is \"urgently needed\" (February 28, 2024): the amicus brief for the survey", url: "https://www.theblock.co/post/279722/sierra-club-says-accurate-insight-into-crypto-mining-firms-energy-use-is-urgently-needed-in-support-of-federal-survey" },
  { id: 31, label: "Texas Blockchain Council - Lawsuit against the IRS (December 27, 2024): Bratcher - \"unrealistic expectations on the digital asset ecosystem\"", url: "https://texasblockchaincouncil.org/blog/industry-groups-sue-over-finalized-irs-broker-rulemaking" },
  { id: 32, label: "DeFi Education Fund - DEF, BA, and TBC v. IRS and the Department of the Treasury: the Congressional Review Act disapproval signed April 10, 2025; dismissed April 16, 2025", url: "https://www.defieducationfund.org/docs/legal/impact-litigation-efforts/def-ba-and-tbc-v-irs-and-the-department-of-treasury/" },
  { id: 33, label: "Disruption Banking - Texas Strategic Bitcoin Reserve! (December 12, 2024): HB 1598 announced with the council; Bratcher - \"positions Texas at the forefront of digital innovation\"", url: "https://www.disruptionbanking.com/2024/12/12/texas-strategic-bitcoin-reserve/" },
  { id: 34, label: "CoinDesk - Eight U.S. blockchain lobby groups unite ahead of Trump's crypto-friendly regime (January 15, 2025): \"more than half of the TBC's funding comes from bitcoin miners: MARA, Riot, Core Scientific, Bitmain and Cipher Mining are among the association's biggest financial contributors\"; Bratcher - \"keep things fair and consistent\"", url: "https://www.coindesk.com/policy/2025/01/15/eight-u-s-blockchain-lobby-groups-unite-ahead-of-trumps-crypto-friendly-regime" },
  { id: 35, label: "Texas Legislature Online - SB 21 witness list, Senate Business & Commerce (February 18, 2025, PDF): Bratcher testifying for; Goostree and Mckirahan registered for; Sierra Club against; Comptroller Hegar on", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/pdf/SB00021S.pdf" },
  { id: 36, label: "Texas Legislature Online - SB 6 witness list, Senate Business & Commerce (February 27, 2025): Bratcher on, with written testimony", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00006S.htm" },
  { id: 37, label: "Texas Legislature Online - SB 21 witness list, House Delivery of Government Efficiency (April 23, 2025): Bratcher and Goostree for; \"Texas Blockchain Council SBR Ambassadors\"", url: "https://capitol.texas.gov/tlodocs/89R/witlistbill/html/SB00021H.htm" },
  { id: 38, label: "Texas Legislature Online - SB 21 (89R) bill history: filed February 12, 2025; committee 10–0; Senate March 6; House committee 8–4; House May 21; signed and effective June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 39, label: "Texas Observer - From bullion to Bitcoin: the crypto reserve is the latest fiscal folly in Texas (February 28, 2025): SB 21 drafted \"in consultation with the Texas Blockchain Council\"; council members packed the hearing; Johnson on \"billionaire tech bros\"", url: "https://www.texasobserver.org/texas-bitcoin-strategic-reserve-senate-bill-21/" },
  { id: 40, label: "The American Prospect / Texas Observer - The Crypto Racket (May 9, 2025): \"more than half\" of 2023's $949,488 revenue to a lobbying firm; the advisory board; the Cruz endorsement; Bratcher - about 40 mines at about 3,200 MW", url: "https://prospect.org/2025/05/09/2025-05-09-crypto-racket-texas-bitcoin-mining/" },
  { id: 41, label: "CoinDesk - Texas ready for $10 million Bitcoin purchase after the Governor signs the reserve bill (June 23, 2025): Bratcher - \"just 0.0004% of the state's budget but could create an outsized impact\"", url: "https://www.coindesk.com/policy/2025/06/23/texas-ready-for-10m-bitcoin-purchase-after-governor-signs-bill-for-state-reserve" },
  { id: 42, label: "Texas Ethics Commission - 2025 lobbyists with clients, ordered by client (PDF): Texas Blockchain Council - Bratcher at $0, John R. Clay Jr. at $55,610–$111,219, Caroline Wylie under $22,240", url: "https://www.ethics.state.tx.us/data/search/lobby/2025/2025LobbyGroupByClient.pdf" },
  { id: 43, label: "Texas Ethics Commission - 2021 lobbyists with clients, ordered by client (PDF): the council's first registrations - Clay at $18,360–$46,579; Dennis and McCartt under $18,360", url: "https://www.ethics.state.tx.us/data/search/lobby/2021/2021LobbyGroupByClient.pdf" },
  { id: 44, label: "Texas Ethics Commission - 2026 lobbyists with clients, ordered by client (PDF): \"Texas Block Chain Council\" - Goostree (January 12) and Ward (March 25) at $22,240–$55,609 each; \"Digital Infrastructure Network\" - Aldredge (September 9) at $55,610–$111,219; no Capriglione registration", url: "https://www.ethics.state.tx.us/data/search/lobby/2026/2026LobbyGroupByClient.pdf" },
  { id: 45, label: "CryptoBit Mag - North American Blockchain Summit 2025 (October 9–10, 2025): the Bush Center; Governor Abbott, Senator Schwertner, Riot's Les, Core Scientific's Sullivan", url: "https://www.cryptobitmag.com/north-american-blockchain-summit-2025/" },
  { id: 46, label: "Texas Blockchain Council - Texas Blockchain Council announces new leadership (January 5, 2026): Bratcher steps down after six years and stays on the board; Capriglione named president; Goostree executive director; Haines board chair", url: "https://texasblockchaincouncil.org/blog/texas-blockchain-council-announces-new-leadership" },
  { id: 47, label: "Public Citizen - Rep. Capriglione has the opportunity to change the crypto lobby group's opposition to transparency (January 5, 2026): Shelley - \"an enemy of transparency, going so far as to sue the U.S. Department of Energy\"", url: "https://www.citizen.org/news/rep-capriglione-has-the-opportunity-to-change-crypto-lobby-groups-opposition-to-transparency/" },
  { id: 48, label: "Dallas Morning News - Texas crypto roundup: a state rep gets into lobbying, and more (January 16, 2026): funded by dues and events; Capriglione \"will not be lobbying for at least a couple years to stay onside of Texas law\"; correction - he \"is not a registered lobbyist\"", url: "https://www.dallasnews.com/business/2026/01/16/texas-crypto-roundup-mark-cuban-a-state-rep-gets-into-lobbying-and-more/" },
  { id: 49, label: "GovTech Insider - State Rep. Capriglione named president of the Texas Blockchain Council (January 6, 2026): serving House District 98 through January 2027", url: "https://insider.govtech.com/texas/news/state-rep-capriglione-named-president-of-texas-blockchain-council" },
  { id: 50, label: "GlobeNewswire - Cipher welcomes industry veterans Lee Bratcher and Drew Armstrong (January 6, 2026): Bratcher as head of policy and government affairs", url: "https://www.globenewswire.com/news-release/2026/01/06/3213649/0/en/Cipher-Welcomes-Industry-Veterans-Lee-Bratcher-and-Drew-Armstrong.html" },
  { id: 51, label: "Disruption Banking - Texas Blockchain Council names Spencer Ward director of policy and technology (March 2, 2026): \"100+ member companies\"; Capriglione - \"effective in Austin and in Washington\"", url: "https://www.disruptionbanking.com/2026/03/02/texas-blockchain-council-names-spencer-ward-director-of-policy-and-technology/" },
  { id: 52, label: "E&E News - Texas approves grid standards to keep data centers online (July 10, 2026): Goostree on the ride-through rule - \"$500,000 to $1 million per megawatt\"; \"We definitely understand and support the principle behind the rule\"", url: "https://www.eenews.net/articles/texas-approves-grid-standards-to-keep-data-centers-online/" },
  { id: 53, label: "Disruption Banking - Texas Blockchain Council becomes Digital Infrastructure Network as technology, energy, and infrastructure converge (August 18, 2026): 120 corporate members; an Austin office; Galaxy's Friedrich to the board; IonQ the first quantum member; Capriglione - \"bigger than any one technology or sector\"; Bratcher - \"honors the organization's roots while embracing a broader mandate\"", url: "https://www.disruptionbanking.com/2026/08/18/texas-blockchain-council-becomes-digital-infrastructure-network-as-technology-energy-and-infrastructure-converge/" },
  { id: 54, label: "Digital Infrastructure Network - home: \"Formerly Texas Blockchain Council ... Same team, same benefits, new name\"; member logos including Riot, MARA, Cipher, Bitdeer, Core Scientific, Galaxy, IREN; offices in Dallas and Austin", url: "https://digitalinfranet.org/" },
  { id: 55, label: "Texas Blockchain Council - Events: the North American Blockchain Summit, November 18–19, 2026, National Medal of Honor Museum, Arlington", url: "https://texasblockchaincouncil.org/events-tbc" },
  { id: 56, label: "Dallas Innovates - The Last Word: State Rep. Capriglione on Y'all Street, digital assets, and a Texas Bitcoin reserve (November 22, 2024): \"It's destined to happen somewhere. I'd rather it happen here first\"", url: "https://dallasinnovates.com/the-last-word-state-rep-capriglione-on-yall-street-digital-assets-and-a-texas-bitcoin-reserve/" },
  { id: 57, label: "Texas Blockchain Council - Announcing the Texas Blockchain Committee PAC (undated, c. 2021–22): individual donors only, all-volunteer; Transparency USA records about $2,000 raised", url: "https://texasblockchaincouncil.org/blog/announcing-the-texas-blockchain-committee-pac" },
  { id: 58, label: "Texas Legislature Online - HB 1598 (89R) bill history: filed December 12, 2024; referred March 12, 2025; no hearing", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1598" },
];

// The 990 record, for the money figure.
export const tbcMoney: { y: string; rev: number; exp: number; pres: number }[] = [
  { y: "2021", rev: 859418, exp: 555903, pres: 153335 },
  { y: "2022", rev: 2017286, exp: 2187593, pres: 326645 },
  { y: "2023", rev: 949488, exp: 2031728, pres: 300004 },
  { y: "2024", rev: 2245704, exp: 1787981, pres: 391081 },
  { y: "2025", rev: 2368020, exp: 2250210, pres: 480012 },
];

// The legislative ledger, for the bills figure: what the council wanted
// and what happened.
export interface TbcBill {
  session: string;
  bill: string;
  what: string;
  stance: "for" | "against" | "on";
  outcome: "passed" | "died";
  outcomeLabel: string;
}

export const tbcBills: TbcBill[] = [
  { session: "87R · 2021", bill: "HB 1576", what: "Work Group on Blockchain Matters", stance: "for", outcome: "passed", outcomeLabel: "signed June 2021" },
  { session: "87R · 2021", bill: "HB 4474", what: "Virtual currency in the UCC", stance: "for", outcome: "passed", outcomeLabel: "signed June 2021" },
  { session: "88R · 2023", bill: "SB 1751", what: "10% cap on miners in demand response", stance: "against", outcome: "died", outcomeLabel: "Senate 31–0 · died in House" },
  { session: "88R · 2023", bill: "HB 591", what: "Flared-gas mining severance exemption", stance: "for", outcome: "passed", outcomeLabel: "signed June 2, 2023" },
  { session: "88R · 2023", bill: "HB 1666", what: "Proof of reserves, commingling ban", stance: "for", outcome: "passed", outcomeLabel: "signed 2023" },
  { session: "89R · 2025", bill: "HB 1598", what: "Reserve inside the treasury (Capriglione)", stance: "for", outcome: "died", outcomeLabel: "never heard" },
  { session: "89R · 2025", bill: "SB 21", what: "Texas Strategic Bitcoin Reserve", stance: "for", outcome: "passed", outcomeLabel: "signed June 20, 2025" },
  { session: "89R · 2025", bill: "SB 6", what: "Large-load interconnection and curtailment", stance: "on", outcome: "passed", outcomeLabel: "signed June 20, 2025" },
];

export type TbcTimelineKind = "founding" | "statute" | "fight" | "court" | "turn";

// The arc: the founding → the statutes → the fights → the courts → the
// turn.
export interface TbcEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: TbcTimelineKind;
  sourceIds: number[];
}

export const tbcTimeline: TbcEvent[] = [
  {
    date: "2020-11-09",
    dateLabel: "2019 → November 2020",
    title: "A professor's side project becomes a trade association",
    detail:
      "Lee Bratcher, a political-science professor at Dallas Baptist University and an Army Reserve officer, founds the council in 2019 as Representative Tan Parker files the first Blockchain Work Group bill; it has about twenty member companies that first year. On November 9, 2020 it launches publicly with three goals - a legislative caucus, a state work group, and a Uniform Commercial Code update - and a sentence for the press: \"Silicon Valley has lost its competitive edge, and Texas is positioning itself to lead in emerging technology.\" The IRS recognizes it as a 501(c)(6) business league, \"like your chambers of commerce essentially,\" in February 2021, from Richardson.",
    kind: "founding",
    sourceIds: [4, 5, 1, 2, 6],
  },
  {
    date: "2021-07-14",
    dateLabel: "March → October 2021",
    title: "Two statutes, a summit, and a seat on the Work Group",
    detail:
      "Council witnesses testify for HB 1576, the Work Group on Blockchain Matters, in March 2021 and for HB 4474, which writes virtual currency into the Texas UCC, in May; both are signed in June, and on July 14 the council announces it \"spearheaded\" them - \"the opening salvo letting the world know that Texas is open for blockchain business,\" its board chair says. The Governor receives the council at the mansion and predicts Texas will be first. On October 8 the first Texas Blockchain Summit draws about a thousand to Austin with Senators Cruz and Lummis; on October 29 the Lieutenant Governor appoints the council's Christopher Calicott to the Work Group. Its first lobbyist registers that spring. Revenue for the year is $859,418.",
    kind: "statute",
    sourceIds: [7, 8, 3, 10, 12, 9, 43, 2],
  },
  {
    date: "2023-04-12",
    dateLabel: "March → April 2023",
    title: "\"Don't Mess With Texas Innovation\": the brake passes the Senate 31–0 anyway",
    detail:
      "Senator Kolkhorst's SB 1751 would cap miners at 10% of ERCOT's demand-response programs and end their abatements. At the March 28 hearing the council testifies \"on\" the bill - neither for nor against - while Riot and US Bitcoin testify against; the committee sends it out 11–0 on April 4 and the council urges Texans to \"vote against this anti-free market bill.\" On April 10 it launches \"Don't Mess With Texas Innovation\" with the Digital Chamber and the Satoshi Action Fund; Bratcher says the senator \"is just being fed bad information.\" On April 12 the three groups write to the Lieutenant Governor calling the bill \"anti-free market and anti-bitcoin mining.\" The same morning the Senate passes it on the local and uncontested calendar, 31–0 - a count CoinDesk first reported as 30–1 and corrected the next day, and which most accounts, this site's included until September 2026, repeated.",
    kind: "fight",
    sourceIds: [14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    date: "2023-06-01",
    dateLabel: "April → June 2023",
    title: "The House never hears it, and the miners get a tax break instead",
    detail:
      "SB 1751 is referred to House State Affairs on April 24 and never gets a hearing; it is dead on May 29. Bratcher calls it \"a victory for the great state of Texas\" and counts more than 5,000 grassroots participants; a Navarro County activist offers a plainer reading - \"The house just didn't prioritize it.\" The same session passes HB 591, a severance-tax exemption for gas flared into mining rigs, and HB 1666, the proof-of-reserves and commingling bill the council testified for. \"Texas remains the jurisdiction of choice,\" Bratcher says. Revenue that year falls to $949,488 against $2.03 million of spending, and the council ends 2023 with net assets of minus $412,111; more than half the year's revenue, by later reporting, goes to a lobbying firm.",
    kind: "fight",
    sourceIds: [20, 22, 23, 24, 2, 40],
  },
  {
    date: "2024-03-01",
    dateLabel: "February → March 2024",
    title: "TBC v. Department of Energy: a survey stopped in a day",
    detail:
      "On February 22, 2024 the council and Riot sue the Department of Energy, its Energy Information Administration, and the Office of Management and Budget in Waco over an emergency survey of miners' power use - \"a case about sloppy government process, contrived and self-inflicted urgency, and invasive government data collection.\" Judge Albright grants a restraining order on February 23; the Sierra Club files for the government, calling the data \"urgently needed.\" On March 1 the government withdraws the survey, agrees to destroy what it collected, and pays $2,199.45 in fees. The council's blog frames the survey as political; Public Citizen will later call the suit the act of \"an enemy of transparency.\" The summit, renamed the North American Blockchain Summit and moved to Fort Worth in 2023, goes to the Bush Center in Dallas that November.",
    kind: "court",
    sourceIds: [26, 27, 28, 30, 29, 25, 47],
  },
  {
    date: "2025-01-15",
    dateLabel: "December 2024 → January 2025",
    title: "The reserve bill, the IRS suit, and who pays the bills",
    detail:
      "On December 12, 2024 Representative Capriglione files HB 1598, a Texas Strategic Bitcoin Reserve inside the treasury, and announces it with the council - \"positions Texas at the forefront of digital innovation,\" Bratcher says. On December 27 the council joins the Blockchain Association and the DeFi Education Fund in suing the IRS over its DeFi broker rule in the Northern District of Texas; the rule is repealed by Congress in April 2025 and the case dismissed. On January 15, 2025 eight state associations form a national coalition, and CoinDesk reports the council's finances: \"more than half of the TBC's funding comes from bitcoin miners,\" with MARA, Riot, Core Scientific, Bitmain, and Cipher its largest contributors, and Coinbase, Galaxy, law firms, and banks paying dues.",
    kind: "turn",
    sourceIds: [33, 58, 31, 27, 32, 34],
  },
  {
    date: "2025-06-20",
    dateLabel: "February → June 2025",
    title: "SB 21: the lead witness for the first state Bitcoin reserve",
    detail:
      "Senator Schwertner's SB 21 is drafted, the Texas Observer reports, \"in consultation with the Texas Blockchain Council.\" On February 18, 2025 Bratcher is the lead witness before Senate Business & Commerce, with council members filling the room; the committee votes 10–0. On February 27 he testifies \"on\" SB 6, the large-load law that puts the state's brake on miners into statute without Kolkhorst's cap. SB 21 passes the Senate March 6, the House 101–42 on May 21 with Capriglione carrying it, and is signed June 20 with $10 million appropriated - \"just 0.0004% of the state's budget,\" Bratcher says. Capriglione's own HB 1598 never gets a hearing. Revenue for 2025 is $2.37 million; the president's compensation is $480,012. The October summit at the Bush Center features the Governor.",
    kind: "statute",
    sourceIds: [39, 35, 36, 37, 38, 41, 58, 2, 45],
  },
  {
    date: "2026-01-05",
    dateLabel: "January 2026",
    title: "A sitting legislator becomes president; the founder goes to Cipher",
    detail:
      "On January 5, 2026 the council announces that Bratcher is stepping down after six years, staying on the board, and that Representative Giovanni Capriglione - author of the reserve statute's House passage, still holding House District 98 through January 2027 - is president, effective immediately, with Jessi Goostree as executive director and Carol Haines of Core Scientific as board chair. The same day Public Citizen's Texas director calls the council \"an enemy of transparency, going so far as to sue the U.S. Department of Energy.\" The next day Cipher announces Bratcher as its head of policy and government affairs. The Dallas Morning News reports the council's assurance that Capriglione \"will not be lobbying for at least a couple years to stay onside of Texas law\"; he does not appear on the Ethics Commission's 2026 registrations, where Goostree and a new policy director do.",
    kind: "turn",
    sourceIds: [46, 49, 47, 50, 48, 44, 51],
  },
  {
    date: "2026-08-18",
    dateLabel: "July → September 2026",
    title: "The lobby drops \"Blockchain\" and becomes the Digital Infrastructure Network",
    detail:
      "In July the executive director tells E&E News the council supports the PUC's ride-through rule for large loads in principle while putting its cost at \"$500,000 to $1 million per megawatt.\" On August 18, 2026 the Texas Blockchain Council becomes the Digital Infrastructure Network: 120 corporate members, a Dallas headquarters and a new Austin office, Galaxy's chief legal officer on the board, a quantum-computing company as the first new member, and a mandate covering AI, data centers, energy, quantum, and fintech as well as digital assets. Capriglione: \"The opportunity in front of us is bigger than any one technology or sector.\" Bratcher, now speaking for Cipher: it \"honors the organization's roots while embracing a broader mandate.\" On September 9 the first lobbyist registers under the new name. The website tells members: \"Same team, same benefits, new name.\" The summit in November keeps the word the council gave up.",
    kind: "turn",
    sourceIds: [52, 53, 54, 44, 55],
  },
];
