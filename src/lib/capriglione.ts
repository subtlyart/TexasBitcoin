// Giovanni Capriglione and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the people cluster. The record
// is drawn from Texas Legislature Online for every bill history and the
// HB 1598 text, the Texas House and the Texas Tribune directory for the
// bio, the Texas Blockchain Council for the 2026 turn, and Texas and trade
// press for the debate. Capriglione is the House of the people cluster:
// Schwertner wrote the reserve, Capriglione filed one first, heard the
// Senate's in his own committee, carried it 101–42, and chaired the
// conference that finished it - after a decade of the statutes underneath
// it (the bullion depository, the UCC definition, the flared-gas exemption,
// the commingling ban). The honest counterweight: his own design died
// unheard in the committee he chaired, he now runs the industry's lobbying
// council while still holding his seat, and the reserve he carried spent
// its first months under water.
//
// Verified September 13, 2026. Re-verify after the November 3, 2026
// general (HD-98 successor), when the 90th Legislature files reserve bills
// (from November 9, 2026), and after the North American Blockchain Summit
// (November 18–19, 2026).

export const CAPRIGLIONE_LAST_VERIFIED = "September 13, 2026";

export interface CapriglioneSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the Legislature's own record, then the House
// and the Tribune directory, then the council, then Texas press, then
// trade press.
export const capriglioneSources: CapriglioneSource[] = [
  { id: 1, label: "Texas House of Representatives - Rep. Giovanni Capriglione, District 98 (Tarrant, part); district office Keller", url: "https://house.texas.gov/members/member-page?district=98" },
  { id: 2, label: "Texas Policy Research - State Rep. Giovanni Capriglione: Southlake; first elected 2012; private equity and semiconductor design; Chair, Delivery of Government Efficiency (89R); 72 bills authored in the 89th", url: "https://www.texaspolicyresearch.com/legislative-directory-texas-house-of-representatives/texas-house-of-representatives/state-rep-giovanni-capriglione/" },
  { id: 3, label: "Texas Tribune - Elected Officials Directory: Giovanni Capriglione, HD-98; President, Texas Adventure Capital LLC; Chair, Delivery of Government Efficiency", url: "https://directory.texastribune.org/giovanni-capriglione/" },
  { id: 4, label: "Wikipedia - Giovanni Capriglione: born March 8, 1973; B.S. physics, Worcester Polytechnic Institute; MBA, Santa Clara; defeated Rep. Vicki Truitt in the 2012 primary with 55.6%", url: "https://en.wikipedia.org/wiki/Giovanni_Capriglione" },
  { id: 5, label: "Texas Legislature Online - HB 483 (84R) bill history: author Capriglione; the Texas Bullion Depository; filed December 10, 2014; signed June 19, 2015, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=84R&Bill=HB483" },
  { id: 6, label: "Texas Legislature Online - HB 1576 (87R) bill history: authors Parker, Capriglione, Bucy, Button, Wilson; Work Group on Blockchain Matters; signed June 7, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB1576" },
  { id: 7, label: "Texas Legislature Online - HB 4474 (87R) bill history: authors Parker, Anchía, Stephenson, Capriglione, Perez; virtual currency in the Texas UCC; signed June 15, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 8, label: "Texas Legislature Online - HB 591 (88R) bill history: author Capriglione; severance-tax exemption for flared gas consumed at the well; filed November 14, 2022; signed June 2, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB591" },
  { id: 9, label: "Texas Legislature Online - HB 1666 (88R) bill history: author Capriglione; commingling of funds by digital asset service providers; signed June 9, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1666" },
  { id: 10, label: "TEXPERS - House Speaker Names Chair of Pensions, Investments & Financial Services Committee (February 8, 2023): Speaker Phelan names Capriglione", url: "https://texpers.memberclicks.net/index.php?day=09&id=199%3Ahouse-speaker-names-chair-of-pensions-investments-financial-services-committee&month=02&option=com_dailyplanetblog&view=entry&year=2023" },
  { id: 11, label: "Dallas Innovates - The Last Word: State Rep. Capriglione on Y'all Street, Digital Assets, and a Texas Bitcoin Reserve (November 22, 2024): \"It's destined to happen somewhere. I'd rather it happen here first.\"", url: "https://dallasinnovates.com/the-last-word-state-rep-capriglione-on-yall-street-digital-assets-and-a-texas-bitcoin-reserve/" },
  { id: 12, label: "Texas Legislature Online - HB 1598 (89R) bill history: author Capriglione; a bitcoin reserve within the state treasury; filed December 12, 2024; referred to Delivery of Government Efficiency March 12, 2025; no further action", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1598" },
  { id: 13, label: "Texas Legislature Online - HB 1598 (89R) introduced text: special fund in the treasury under the comptroller; five-year minimum hold; donations from residents and governmental entities; agencies convert accepted crypto to Bitcoin; biennial report; expires September 1, 2035", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/HB01598I.htm" },
  { id: 14, label: "Decrypt - Texas Legislator Introduces Bill to Establish Bitcoin Strategic Reserve (December 12, 2024): \"probably the biggest enemy of our investments is inflation\"", url: "https://decrypt.co/296264/texas-bill-bitcoin-strategic-reserve" },
  { id: 15, label: "Disruption Banking - Texas Strategic Bitcoin Reserve! (December 12, 2024): the Texas Blockchain Council announces HB 1598; Bratcher on \"our partnership with Chairman Capriglione\"", url: "https://www.disruptionbanking.com/2024/12/12/texas-strategic-bitcoin-reserve/" },
  { id: 16, label: "Austin American-Statesman - What would a strategic bitcoin reserve look like in Texas? Two lawmakers have ideas (January 28, 2025): the Capriglione and Schwertner designs", url: "https://www.statesman.com/story/business/technology/2025/01/28/texas-legislature-crypto-bitcoin-reserve-bills-giovanni-capriglione-charles-schwertner-donald-trump/77847904007/" },
  { id: 17, label: "Government Technology - Capriglione to Chair New Government Efficiency Committee (February 14, 2025): 13 members; \"Government must innovate, not stagnate\"", url: "https://insider.govtech.com/texas/news/capriglione-to-chair-new-government-efficiency-committee" },
  { id: 18, label: "Texas Legislature Online - SB 21 (89R) bill history: referred to House Delivery of Government Efficiency April 9, 2025; reported favorably as substituted 8–4 May 7; House sponsors Capriglione, Oliverson, Longoria, Vasut, Cunningham; House conferees appointed May 27 with Capriglione as chair; signed June 20, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 19, label: "KERA News - Bitcoin in the state budget? Texas House backs crypto reserve plan (May 21, 2025): 101–42; \"strengthens our fiscal sovereignty\"", url: "https://www.keranews.org/texas-news/2025-05-21/texas-bitcoin-crypto-reserve-house-budget" },
  { id: 20, label: "Texas Observer - Texas Set to Create State Bitcoin Reserve (May 21, 2025): House 101–42; the donation clause restored, then removed in conference", url: "https://www.texasobserver.org/texas-set-to-create-state-bitcoin-reserve/" },
  { id: 21, label: "StateScoop - Inspired by Trump, Texas first to fund state 'strategic' bitcoin reserve (June 26, 2025): Capriglione as House sponsor; \"prepared for the evolution of global finance\"", url: "https://statescoop.com/texas-strategic-bitcoin-reserve-trump-cryptocurrency-2025/" },
  { id: 22, label: "Texas Legislature Online - HB 149 (89R) bill history: author Capriglione, Senate sponsor Schwertner; the Texas Responsible Artificial Intelligence Governance Act; signed June 22, 2025, effective January 1, 2026", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB149" },
  { id: 23, label: "Texas Legislature Online - HB 150 (89R) bill history: author Capriglione; the Texas Cyber Command; signed June 2, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB150" },
  { id: 24, label: "Texas Legislature Online - HB 1056 (89R) bill history: authors Dorazio, Hunter, Capriglione, Raymond, Harris; gold and silver as legal tender and a transactional currency; signed June 22, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1056" },
  { id: 25, label: "Texas Tribune - Rep. Giovanni Capriglione, first Texas DOGE chair, will not seek reelection (July 23, 2025): \"It's time for a new chapter\"; Keller Mayor Armin Mizani announces", url: "https://www.texastribune.org/2025/07/23/texas-house-giovanni-capriglione-retirement/" },
  { id: 26, label: "Texas Blockchain Council - Texas Blockchain Council Announces New Leadership (January 5, 2026): Capriglione named President, effective immediately; Bratcher stays on the board; Jessi Goostree Executive Director", url: "https://texasblockchaincouncil.org/blog/texas-blockchain-council-announces-new-leadership" },
  { id: 27, label: "Public Citizen - Rep. Capriglione Has the Opportunity to Change Crypto Lobby Group's Opposition to Transparency (January 5, 2026): Adrian Shelley on the council's suit against the Department of Energy", url: "https://www.citizen.org/news/rep-capriglione-has-the-opportunity-to-change-crypto-lobby-groups-opposition-to-transparency/" },
  { id: 28, label: "KERA News - Armin Mizani, Cate Brennan lead race for Texas House District 98 primary (March 4, 2026): Mizani 53.5%, Tate 43%; Brennan 78%", url: "https://www.keranews.org/elections-2026/2026-03-04/armin-mizani-cate-brennan-lead-race-for-texas-house-district-98-primary-here-are-tarrant-election-results" },
  { id: 29, label: "Dallas Morning News - Texas' $10M bitcoin investment slips into the red amid crypto price dive (March 2, 2026): ~$5M on Nov 20, 2025 near $91,000; ~$5M on Dec 15 near $87,000; valued ~$7.8M", url: "https://www.dallasnews.com/business/2026/03/02/texas-10m-bitcoin-investment-slips-into-the-red-amid-crypto-price-dive/" },
  { id: 30, label: "Disruption Banking - Why the Texas Blockchain Council's North American Blockchain Summit Matters (June 9, 2026): November 18–19, 2026, National Medal of Honor Museum, Arlington; Capriglione as President", url: "https://www.disruptionbanking.com/2026/06/09/why-the-texas-blockchain-councils-north-american-blockchain-summit-matters/" },
];

export type CapriglioneTimelineKind = "path" | "statute" | "reserve" | "watch";

// The arc: the engineer-investor → the statutes underneath → the reserve
// → the turn to the council.
export interface CapriglioneEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: CapriglioneTimelineKind;
  sourceIds: number[];
}

export const capriglioneTimeline: CapriglioneEvent[] = [
  {
    date: "2013-01-08",
    dateLabel: "January 2013",
    title: "The engineer takes House District 98",
    detail:
      "Giovanni Capriglione - a Worcester Polytechnic physics graduate with a Santa Clara MBA, a career in semiconductor design and private equity, and a Southlake address - takes the northeast Tarrant County seat after beating a sitting Republican, Vicki Truitt, in the 2012 primary with 55.6%. He is the only member of the people cluster who arrived in Austin already fluent in the technology.",
    kind: "path",
    sourceIds: [4, 2, 1],
  },
  {
    date: "2015-06-19",
    dateLabel: "June 19, 2015",
    title: "HB 483: the vault before the coin",
    detail:
      "Abbott signs Capriglione's Texas Bullion Depository act, filed December 10, 2014 - the first state-administered precious-metals depository in the country. It is the template every later hard-money bill of his follows: build custody first, add functions later.",
    kind: "statute",
    sourceIds: [5],
  },
  {
    date: "2021-06-15",
    dateLabel: "June 2021",
    title: "HB 1576 and HB 4474: the definitions",
    detail:
      "Two bills Capriglione joint-authors with Representative Tan Parker become law eight days apart: HB 1576, which creates the Work Group on Blockchain Matters, and HB 4474, which writes \"virtual currency\" into the Texas Uniform Commercial Code and gives a buyer who takes control of it clean title. Texas defines the asset before it owns any.",
    kind: "statute",
    sourceIds: [6, 7],
  },
  {
    date: "2023-06-09",
    dateLabel: "February → June 2023",
    title: "The chairman: HB 591 and HB 1666",
    detail:
      "Speaker Phelan names him chair of Pensions, Investments and Financial Services on February 8. That session he authors HB 591, the severance-tax exemption for flared gas consumed at the wellhead - the miners' bill - and HB 1666, the post-FTX ban on digital-asset service providers commingling customer funds. Both are signed in June and take effect September 1, 2023.",
    kind: "statute",
    sourceIds: [10, 8, 9],
  },
  {
    date: "2024-11-20",
    dateLabel: "November 20, 2024",
    title: "\"I'd rather it happen here first\"",
    detail:
      "On stage at the Texas Blockchain Summit in Dallas, two weeks after the presidential election, Capriglione says a state Bitcoin reserve is \"destined to happen somewhere. I'd rather it happen here first,\" and adds that \"it would be great if the community itself would participate in creating this.\" The donation channel is already in the design.",
    kind: "reserve",
    sourceIds: [11],
  },
  {
    date: "2024-12-12",
    dateLabel: "December 12, 2024",
    title: "HB 1598: filed before the session opens",
    detail:
      "Capriglione files the first Texas reserve bill: a special fund inside the treasury under the comptroller, a five-year minimum hold, donations from residents and governmental entities, agencies converting any crypto they accept into Bitcoin, a biennial report, and a 2035 sunset. \"Probably the biggest enemy of our investments is inflation,\" he tells an X Spaces the same day. The Texas Blockchain Council announces it as \"our partnership with Chairman Capriglione.\"",
    kind: "reserve",
    sourceIds: [12, 13, 14, 15],
  },
  {
    date: "2025-02-14",
    dateLabel: "February 14, 2025",
    title: "The first Texas DOGE chair",
    detail:
      "Speaker Burrows hands him the gavel of the new 13-member House Committee on Delivery of Government Efficiency. \"Government must innovate, not stagnate,\" he says. Two weeks earlier the Statesman had set his in-treasury design against Senator Schwertner's outside-the-treasury SB 778; the House will now decide which architecture it hears.",
    kind: "reserve",
    sourceIds: [17, 16],
  },
  {
    date: "2025-05-07",
    dateLabel: "March 12 → May 7, 2025",
    title: "His committee hears the Senate's bill, not his",
    detail:
      "HB 1598 is referred to Delivery of Government Efficiency on March 12 and never gets a hearing. SB 21 is referred to the same committee on April 9, and on May 7 Capriglione's committee reports the Senate's design out 8–4, substituted. The chairman chose the bill that could pass over the bill that was his.",
    kind: "reserve",
    sourceIds: [12, 18],
  },
  {
    date: "2025-05-21",
    dateLabel: "May 21, 2025",
    title: "Carried 101–42, then the conference chair",
    detail:
      "Capriglione, as House sponsor, moves SB 21 through the floor 101–42 with the donation clause restored. \"This reserve not only strengthens our fiscal sovereignty, but positions Texas as a forward-thinking state prepared for the evolution of global finance,\" he tells the chamber. Six days later he is named chair of the House conferees; the conference strips the donation clause again and trims the $21 million rider to $10 million.",
    kind: "reserve",
    sourceIds: [18, 19, 20],
  },
  {
    date: "2025-06-22",
    dateLabel: "June 20–22, 2025",
    title: "Signed - with four more of his bills beside it",
    detail:
      "Abbott signs SB 21 on June 20, effective immediately. On June 2 he had signed HB 150, Capriglione's Texas Cyber Command; on June 22 he signs HB 149, the Texas Responsible Artificial Intelligence Governance Act - Capriglione's bill, Schwertner's Senate sponsorship, the mirror of SB 21 - and HB 1056, the gold-and-silver legal-tender law he joint-authored. One June, one representative, both hard monies and the machine that governs the rest.",
    kind: "reserve",
    sourceIds: [18, 23, 22, 24],
  },
  {
    date: "2025-07-23",
    dateLabel: "July 23, 2025",
    title: "\"It's time for a new chapter\"",
    detail:
      "A month after saying he would run again, Capriglione announces he will not seek an eighth term: \"I also feel in my heart that I've accomplished what I set out to do.\" Keller Mayor Armin Mizani, whom he beat in the 2018 primary, announces for the seat the same day.",
    kind: "watch",
    sourceIds: [25],
  },
  {
    date: "2026-01-05",
    dateLabel: "January 5, 2026",
    title: "President of the Texas Blockchain Council",
    detail:
      "The council names its \"partner\" its president, effective immediately, with founder Lee Bratcher staying on the board. \"Joining the Texas Blockchain Council as President is an incredible opportunity to continue advancing the digital assets industry that I've championed throughout my legislative career,\" Capriglione says - while still holding House District 98 until January 2027. Public Citizen answers the same day, asking him to reverse the council's suit against federal data collection on miners.",
    kind: "watch",
    sourceIds: [26, 27],
  },
  {
    date: "2026-03-03",
    dateLabel: "March 3, 2026",
    title: "The seat, and the ledger",
    detail:
      "Mizani wins the Republican primary for HD-98 with 53.5%; Cate Brennan takes the Democratic nomination with 78%. The day before, the Dallas Morning News reports the reserve Capriglione carried - $10 million bought in November and December 2025 - is worth about $7.8 million. The November 18–19 North American Blockchain Summit in Arlington will be his first as the council's president, ten weeks before the 90th Legislature convenes without him.",
    kind: "watch",
    sourceIds: [28, 29, 30],
  },
];
