// Ted Cruz and Bitcoin — the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the site. The legislative record is
// drawn from the government's own words (cruz.senate.gov and
// commerce.senate.gov press releases, Congress.gov bill texts, the House
// Financial Services Committee's enactment record), the personal purchases
// from Senate financial disclosures as reported by reputable outlets, and the
// money from FEC-tracked reporting (The Intercept, Cointelegraph, OpenSecrets).
// The page answers the "did he sell out?" question honestly: the record shows
// no reversal — the positions came first and the industry money followed — and
// the counterweight section keeps the money question in view anyway.
//
// Verified August 2026. The CLARITY Act cloture vote is scheduled for
// September 15, 2026 — re-verify on the next pass.

export const CRUZ_LAST_VERIFIED = "August 28, 2026";

export interface CruzSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: Cruz's own office and the congressional record,
// then reputable journalism for the disclosures and the money, then the
// primary video of Cruz's own words.
export const cruzSources: CruzSource[] = [
  {
    id: 1,
    label:
      "Office of Sen. Ted Cruz — Sen. Cruz Leads Fight to Remove Harmful Regulations on Cryptocurrency From Wasteful Infrastructure Bill (Aug 9, 2021): the Senate-floor remarks, the 'not greater than five' quote, and the China warning",
    url: "https://www.cruz.senate.gov/newsroom/press-releases/sen-cruz-leads-fight-to-remove-harmful-regulations-on-cryptocurrency-from-wasteful-infrastructure-bill",
  },
  {
    id: 2,
    label:
      "Office of Sen. Ted Cruz — Sen. Ted Cruz Introduces Bill to Promote On-Site Energy Generation (Mar 31, 2025): the FLARE Act and the 'making Texas the number one place for Bitcoin mining' statement",
    url: "https://www.cruz.senate.gov/newsroom/press-releases/sen-ted-cruz-introduces-bill-to-promote-on-site-energy-generation",
  },
  {
    id: 3,
    label:
      "Office of Sen. Ted Cruz — Sen. Cruz Statement on Voting Against 21st Century ROAD to Housing Act (June 2026): his 'no' vote because the CBDC ban it carried was not permanent",
    url: "https://www.cruz.senate.gov/newsroom/press-releases/sen-cruz-statement-on-voting-against-21st-century-road-to-housing-act",
  },
  {
    id: 4,
    label:
      "Congress.gov — S. 3801, 118th Congress: CBDC Anti-Surveillance State Act, introduced by Mr. Cruz on February 26, 2024 (with Hagerty, Scott, Braun, Budd, and Cramer)",
    url: "https://www.congress.gov/118/bills/s3801/BILLS-118s3801is.pdf",
  },
  {
    id: 5,
    label:
      "GovTrack.us — S. 1188, 119th Congress: FLARE Act, introduced by Mr. Cruz on March 27, 2025 — permanent full expensing for property that captures gas otherwise flared or vented",
    url: "https://www.govtrack.us/congress/bills/119/s1188/text",
  },
  {
    id: 6,
    label:
      "House Financial Services Committee — 21st Century ROAD to Housing Act Becomes Law: Senate 85–5 (June 22, 2026), House 358–32 (June 23, 2026)",
    url: "https://financialservices.house.gov/news/documentsingle.aspx?DocumentID",
  },
  {
    id: 7,
    label:
      "Congress.gov — H.R. 6644, 119th Congress: 21st Century ROAD to Housing Act text (Title XI carries the CBDC prohibition)",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/6644/text",
  },
  {
    id: 8,
    label:
      "U.S. Senate Committee on Commerce, Science, and Transportation — Sen. Cruz Designated Chairman (January 2025): the Republican Conference ratified Cruz as chairman",
    url: "https://www.commerce.senate.gov/press/rep/release/sen-cruz-designated-chairman-of-senate-committee-on-commerce-science-and-transportation/",
  },
  {
    id: 9,
    label:
      "CoinDesk — Senate Advances Infrastructure Bill Without Amending Crypto Provision (Aug 9, 2021): the Toomey–Lummis compromise amendment failed on a single objection",
    url: "https://www.coindesk.com/policy/2021/08/09/senate-advances-infrastructure-bill-without-amending-crypto-provision",
  },
  {
    id: 10,
    label:
      "The Texas Tribune — Texas Republicans want to make the state the center of the cryptocurrency universe (Oct 28, 2021): Cruz's Texas Blockchain Summit remarks, 'the center of the universe for bitcoin and crypto'",
    url: "https://www.texastribune.org/2021/10/28/texas-republicans-blockchain-bitcoin/",
  },
  {
    id: 11,
    label:
      "CNBC — Bitcoin miners say they're fixing Texas electric grid, Ted Cruz agrees (Dec 4, 2021): the interruptible-load thesis and the Rockdale surplus-energy example",
    url: "https://www.cnbc.com/2021/12/04/bitcoin-miners-say-theyre-fixing-texas-electric-grid-ted-cruz-agrees.html",
  },
  {
    id: 12,
    label:
      "VICE — Ted Cruz Says Bitcoin Mining Can Fix Texas' Crumbling Electric Grid (Oct 2021): the Permian flared-gas thesis, '50% of the natural gas in this country that is flared, is being flared in the Permian'",
    url: "https://www.vice.com/en/article/ted-cruz-says-bitcoin-mining-can-fix-texas-crumbling-electric-grid/",
  },
  {
    id: 13,
    label:
      "CNBC — Sen. Ted Cruz discloses a bitcoin purchase worth up to $50,000: between $15,001 and $50,000 bought Jan. 25, 2022 (Feb 5, 2022)",
    url: "https://www.cnbc.com/2022/02/05/sen-ted-cruz-discloses-a-bitcoin-purchase-worth-up-to-50000.html",
  },
  {
    id: 14,
    label:
      "New York Post — Ted Cruz bought the bitcoin dip in January, filing shows (Feb 7, 2022): Senate financial disclosure, transaction dated Jan. 25",
    url: "https://nypost.com/2022/02/07/ted-cruz-bought-the-bitcoin-dip-in-january-filing-shows",
  },
  {
    id: 15,
    label:
      "Business Insider — Senator Ted Cruz bought up to $50,000 in bitcoin, according to a new financial disclosure; the payment was made through the bitcoin brokerage River",
    url: "https://www.businessinsider.com/senator-ted-cruz-bitcoin-crypto-financial-disclosure-2022-2",
  },
  {
    id: 16,
    label:
      "Cointelegraph (via TradingView) — Texas senator discloses up to $100K in BTC after blockchain endorsement: Cruz bought between $50,001 and $100,000 of bitcoin as part of his personal holdings in 2023",
    url: "https://www.tradingview.com/news/cointelegraph:5976bbecd094b:0-texas-senator-discloses-up-to-100k-in-btc-after-blockchain-endorsement",
  },
  {
    id: 17,
    label:
      "The Intercept — Bitcoin Freedom PAC gave $350,000 to Ted Cruz in tightening race against Colin Allred (Oct 25, 2024): the PAC was funded with $3.9 million from Jeff Yass; Bitcoin Voter PAC spent on pro-Cruz text messages",
    url: "https://theintercept.com/2024/10/25/crypto-bitcoin-ted-cruz-colin-allred-senate/",
  },
  {
    id: 18,
    label:
      "Cointelegraph — Protecting Ted Cruz's Senate seat is a 'top priority': crypto PAC (Oct 2024): Bitcoin Freedom PAC contributed $350,000 to Truth and Courage PAC; Coinbase's Brian Armstrong and the Winklevoss twins each gave the $3,300 maximum",
    url: "https://cointelegraph.com/news/texas-ted-cruz-senate-priority-crypto-pac",
  },
  {
    id: 19,
    label:
      "The Texas Tribune — Here's how much Ted Cruz and Colin Allred raised in their U.S. Senate race (Jul 18, 2024): over $192 million collectively, making it the most expensive Senate race",
    url: "https://www.texastribune.org/2024/07/18/ted-cruz-colin-allred-fundraising-2024/",
  },
  {
    id: 20,
    label:
      "OpenSecrets — Most Expensive Races: the 2024 Texas Senate race ranked first, with $199.96 million raised and $198.18 million spent",
    url: "https://www.opensecrets.org/elections-overview/most-expensive-races",
  },
  {
    id: 21,
    label:
      "Fox Business — Ted Cruz's speech on cryptocurrency goes viral, accuses senators of 'ignorance' on issue (Aug 10, 2021)",
    url: "https://www.foxbusiness.com/politics/ted-cruzs-speech-on-cryptocurrency-goes-viral-accuses-senators-of-ignorance-on-issue",
  },
  {
    id: 22,
    label:
      "Cryptonews — US Senator Introduces Bill to Ban Direct-to-Consumer Central Bank Digital Currency (Mar 23, 2023): Cruz reintroduced his CBDC ban legislation (first introduced March 2022, with Braun and Grassley) and is described as a bitcoin investor who purchases BTC on a weekly basis",
    url: "https://cryptonews.net/news/legal/20703971",
  },
  {
    id: 23,
    label:
      "Issuant — Does the ROAD to Housing Act ban a US CBDC?: Public Law 119-101, Section 1101, bars a Fed-issued retail digital dollar through December 31, 2030; the standalone Anti-CBDC Surveillance State Act (H.R. 1919, Rep. Tom Emmer) passed the House 219–210 on July 17, 2025",
    url: "https://issuant.com/articles/road-housing-act-cbdc-ban-institutions",
  },
  {
    id: 24,
    label:
      "Forbes — Senate Prepares For Pivotal Clarity Act Cloture Vote With Echoes Of 2021 (Aug 18, 2026): the September 15, 2026 cloture vote on the CLARITY Act, and the 2021 infrastructure-bill standoff as the cautionary precedent",
    url: "https://www.forbes.com/sites/digital-assets/2026/08/18/what-a-2021-crypto-procedural-vote-signals-for-clarity-act-cloture",
  },
  {
    id: 25,
    label:
      "Cunicula — US Central Bank Digital Currency Ban: What Public Law 119-101 Actually Says (Aug 2026): Section 1101 adds section 16A to the Federal Reserve Act (12 U.S.C. 423); the bill became law July 11, 2026, without the president's signature, under the ten-day rule",
    url: "https://cunicula.com/en/articles/us-cbdc-ban-road-to-housing-act",
  },
  {
    id: 26,
    label:
      "Video — Senator Ted Cruz talks Bitcoin (Oct 8, 2021, Texas Blockchain Summit fireside): Cruz on knowing bitcoin existed but 'didn't understand it very much,' the Peter Thiel anecdote, and the infrastructure bill",
    url: "https://www.youtube.com/watch?v=8NbFiqIf7yE",
  },
];

export type CruzTimelineKind =
  | "origin"
  | "fight"
  | "skin"
  | "power"
  | "law";

export interface CruzTimelineEntry {
  date: string;
  dateLabel: string;
  title: string;
  detail: string;
  kind: CruzTimelineKind;
  sourceIds: number[];
}

// The arc, in order — from self-described skeptic to committee chairman with
// a CBDC ban on the books. Rendered as the timeline. Every date and figure
// is sourced above.
export const cruzTimeline: CruzTimelineEntry[] = [
  {
    date: "2021-08-09",
    dateLabel: "August 9, 2021",
    title: "The breakout: Cruz leads the floor fight on the infrastructure bill",
    detail:
      "Cruz offers an amendment to strike the 'broker' crypto-tax provisions from the $1.2 trillion infrastructure bill, telling the chamber that of 100 senators, 'you would not get greater than five who could' define a cryptocurrency, and warning the rules would hand the industry to China. The Toomey–Lummis compromise amendment is blocked by a single objection; the bill advances unamended.",
    kind: "fight",
    sourceIds: [1, 21, 9],
  },
  {
    date: "2021-10-08",
    dateLabel: "October 8, 2021",
    title: "The skeptic admits it: 'I didn't understand it very much'",
    detail:
      "At the Texas Blockchain Summit in Austin, Cruz says he wants Texas to be 'the center of the universe for bitcoin and crypto' — and describes his starting point honestly: he had known bitcoin existed through a friend who invested in it but 'didn't understand it very much,' joking that Peter Thiel, a major 2012 backer of his, never told him about it. He pitches mining as grid infrastructure: 50% of flared U.S. gas is flared in the Permian.",
    kind: "origin",
    sourceIds: [26, 10, 12],
  },
  {
    date: "2022-01-25",
    dateLabel: "January 25, 2022",
    title: "Skin in the game: Cruz buys the dip",
    detail:
      "Cruz purchases between $15,001 and $50,000 of bitcoin through the brokerage River, in a market dip — disclosed to the Senate in early February 2022. In 2023 he buys between $50,001 and $100,000 more, and trade press reports him buying BTC weekly.",
    kind: "skin",
    sourceIds: [13, 15, 16, 22],
  },
  {
    date: "2022-03-01",
    dateLabel: "March 2022 → February 2024",
    title: "The CBDC crusade begins",
    detail:
      "Cruz introduces Senate legislation to prohibit a direct-to-consumer central bank digital currency in March 2022, reintroduces it in March 2023 (with Braun and Grassley), and again in February 2024 as S. 3801, the CBDC Anti-Surveillance State Act (with Hagerty, Scott, Braun, Budd, and Cramer). None passes the Senate — yet.",
    kind: "fight",
    sourceIds: [22, 4],
  },
  {
    date: "2024-11-05",
    dateLabel: "November 2024",
    title: "The most expensive Senate race in history",
    detail:
      "Cruz defeats Colin Allred in a race that raised over $192 million between the candidates alone — the most expensive Senate race ever, per OpenSecrets ($199.96 million raised). Crypto-linked groups spend on his behalf: the Jeff Yass–funded Bitcoin Freedom PAC gives $350,000 to a pro-Cruz super PAC, and Coinbase's Brian Armstrong and the Winklevoss twins each give the $3,300 individual maximum.",
    kind: "skin",
    sourceIds: [19, 20, 17, 18],
  },
  {
    date: "2025-01-03",
    dateLabel: "January 2025",
    title: "The gavel: Cruz becomes Commerce Committee chairman",
    detail:
      "The Senate Republican Conference ratifies Cruz as Chairman of the Senate Committee on Commerce, Science, and Transportation — the panel with jurisdiction over digital-asset market structure — making him the most powerful single senator on the file.",
    kind: "power",
    sourceIds: [8],
  },
  {
    date: "2025-03-27",
    dateLabel: "March 27, 2025",
    title: "The FLARE Act: Texas energy meets Bitcoin mining",
    detail:
      "Cruz introduces S. 1188, the Facilitate Lower Atmospheric Released Emissions (FLARE) Act: permanent full expensing for equipment that captures gas otherwise flared or vented — explicitly pitched at bitcoin miners — barred to entities owned by China, Iran, North Korea, or Russia. 'I am committed to making Texas the number one place for Bitcoin mining.'",
    kind: "power",
    sourceIds: [5, 2],
  },
  {
    date: "2025-07-17",
    dateLabel: "July 17, 2025",
    title: "The House passes a CBDC ban; the Senate stalls",
    detail:
      "The House passes Rep. Tom Emmer's standalone Anti-CBDC Surveillance State Act (H.R. 1919) 219–210 — the House twin of Cruz's Senate bills. In the Senate, Cruz's version does not reach a floor vote on its own.",
    kind: "fight",
    sourceIds: [23],
  },
  {
    date: "2026-07-11",
    dateLabel: "July 11, 2026",
    title: "The ban becomes law — and Cruz votes no anyway",
    detail:
      "A four-year CBDC prohibition becomes law as Section 1101 of the 21st Century ROAD to Housing Act (Public Law 119-101), adding section 16A to the Federal Reserve Act and barring a Fed digital dollar through December 31, 2030. The bill clears the Senate 85–5 and the House 358–32 and lapses into law without the president's signature. Cruz votes against the package — because the ban is not permanent.",
    kind: "law",
    sourceIds: [6, 7, 25, 3],
  },
  {
    date: "2026-09-15",
    dateLabel: "September 15, 2026 (scheduled)",
    title: "Next test: the CLARITY Act cloture vote",
    detail:
      "The Senate is set to hold a cloture vote on the CLARITY Act, the market-structure bill that passed the House 294–134 in July 2025 — with Forbes flagging the 2021 infrastructure-bill standoff as the cautionary precedent. Cruz, as chairman of the committee of jurisdiction, sits at the center of the negotiation.",
    kind: "law",
    sourceIds: [24],
  },
];
