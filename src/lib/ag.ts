// The Texas Attorney General's office and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: this is an institutional page, like the Satoshi Nakamoto
// Institute's: the subject is the OFFICE and what it has done with the
// asset since 2015, not the Attorney General's biography, his impeachment,
// or his Senate campaign. The record is drawn from the office's own
// filings and releases where they could be read, the multistate complaint
// itself (parsed from the Oklahoma Attorney General's hosted copy), the
// bankruptcy-court reporting on the objections its lawyers signed for the
// state's regulators, the Public Utility Commission's suit against it,
// the coalition letters it signed and skipped, and the Texas Tribune's
// accounting of what it has not done. The thesis is the ledger: one
// marquee suit against the SEC, filed in November 2024 and stayed since
// April 2025; one coalition letter signed; a pro-disclosure ruling that
// cut against the miners; regulator-driven bankruptcy objections; and, on
// the consumer side, no opinion, no enforcement action, and no kiosk suit
// in eleven years, while Texans lost $56.8 million to kiosk fraud in a
// single year and peer states sued. The distinction between the Attorney
// General and the State Securities Board - a separate agency that has
// issued more than fifty crypto orders - is kept everywhere.
//
// Verified September 25, 2026. Re-verify after the November 3, 2026
// election, when the office changes hands for the first time since 2015,
// and if the E.D. Ky. case or the PUC records suit produces a ruling.

export const AG_LAST_VERIFIED = "September 25, 2026";

export interface AgSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the filings and the office's own releases,
// then the courts and the regulators, then the coalitions, then press.
export const agSources: AgSource[] = [
  { id: 1, label: "State of Kentucky et al. v. SEC - complaint (E.D. Ky., filed November 14, 2024), eighteen states and the DeFi Education Fund; ¶13 names the State of Texas and its Attorney General as plaintiff; counts for ultra vires action and the Administrative Procedure Act; \"the SEC has sought to unilaterally wrest regulatory authority away from the States\" (Oklahoma Attorney General's hosted copy)", url: "https://oklahoma.gov/content/dam/ok/en/oag/news-documents/2024/november/2024-11-14%20FINAL%20DeFi%20States%20Complaint.pdf" },
  { id: 2, label: "Texas Attorney General - Attorney General Ken Paxton Sues Biden-Harris Administration for Unlawful Regulations Against Cryptocurrency Markets (November 2024): \"Federal bureaucrats in Washington have no authority to dictate to States how they should interact with cryptocurrency\"", url: "https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-sues-biden-harris-administration-unlawful-regulations-against" },
  { id: 3, label: "Texas Scorecard - Texas sues federal government for unlawful cryptocurrency regulations (November 26, 2024): the release's text; the 1933 and 1934 Acts \"almost 100 years old and in no way apply to cryptocurrency exchanges\"", url: "https://texasscorecard.com/federal/texas-sues-federal-government-for-unlawful-cryptocurrency-regulations/" },
  { id: 4, label: "Decrypt - Judge pauses 18-state lawsuit against SEC, saying it \"could potentially be resolved\" (April 16, 2025): sixty-day stay on the parties' joint motion after the change in SEC leadership", url: "https://decrypt.co/315253/judge-pauses-18-state-lawsuit-against-sec-saying-it-could-potentially-be-resolved" },
  { id: 5, label: "Law360 - Kentucky et al. v. SEC, No. 3:24-cv-00069 (E.D. Ky.): docket summary; last activity April 16, 2025", url: "https://www.law360.com/cases/6736b4d3d34bc2c6277be12e" },
  { id: 6, label: "Texas Lawbook - Crypto groups, seven states file amicus briefs in Fort Worth SEC case (July 18, 2024): Lejilex and the Crypto Freedom Alliance of Texas v. SEC; Iowa, Arkansas, Indiana, Kansas, Montana, Nebraska, Oklahoma - not Texas", url: "https://texaslawbook.net/crypto-groups-7-states-file-amicus-briefs-in-fort-worth-sec-case/" },
  { id: 7, label: "CourtListener - Texas Blockchain Council and Riot Platforms v. Department of Energy, No. 6:24-cv-00099 (W.D. Tex.): filed February 22, 2024; temporary restraining order February 23; the survey withdrawn March 1, 2024; no state party or amicus", url: "https://www.courtlistener.com/docket/68276281/texas-blockchain-council-v-department-of-energy/" },
  { id: 8, label: "Texas Blockchain Council - Industry groups sue over finalized IRS broker rulemaking (December 27, 2024): the DeFi broker rule challenge in the Northern District of Texas, industry plaintiffs only", url: "https://texasblockchaincouncil.org/blog/industry-groups-sue-over-finalized-irs-broker-rulemaking" },
  { id: 9, label: "Cointelegraph - Texas investigates FTX for securities violations after objecting to Voyager auction (October 17, 2022): the Attorney General's October 14 objection that Voyager and FTX \"are not in compliance with Texas law,\" with the State Securities Board's declaration attached", url: "https://cointelegraph.com/news/texas-investigates-ftx-for-securities-violations-after-objecting-to-voyager-auction" },
  { id: 10, label: "Bloomberg Law - Texas objection to Binance.US–Voyager deal cites link to Binance (February 25, 2023): the State Securities Board and Department of Banking, through the Attorney General's counsel", url: "https://news.bloomberglaw.com/crypto/texas-objection-to-binance-us-voyager-deal-cites-link-to-binance" },
  { id: 11, label: "CoinDesk - Texas objects to Celsius plan to fund operations with stablecoin sales (September 29, 2022): \"troublingly broad permission to sell assets insufficiently defined for purposes that are also insufficiently defined\"", url: "https://www.coindesk.com/policy/2022/09/29/texas-objects-to-celsius-plan-to-fund-operations-with-stablecoin-sales" },
  { id: 12, label: "David Gerard - Celsius Network bankruptcy hearing, November 1, 2022: Assistant Attorney General Layla Milligan on the examiner's scope - \"Sometimes sunlight is the best disinfectant\"", url: "https://davidgerard.co.uk/blockchain/2022/11/02/celsius-network-bankruptcy-hearing-1-november-2022-stablecoins-kerps-and-ponzis/" },
  { id: 13, label: "Straight Arrow News - SAN reporter's inquiry into Texas bitcoin mines triggers lawsuit (August 7, 2025): the Attorney General's May 15, 2025 ruling that the PUC \"failed to demonstrate\" the registration data identified vulnerabilities; the PUC's June 27 suit", url: "https://san.com/cc/exclusive-san-reporters-inquiry-into-texas-bitcoin-mines-triggers-lawsuit/" },
  { id: 14, label: "Texas Tribune - Texas utility regulators sue attorney general to keep crypto-mining power data secret (August 11, 2025): \"In the wrong hands, this information could be used by terrorists to plan attacks on Texas's energy grid\"", url: "https://www.texastribune.org/2025/08/11/texas-public-utility-commission-cryptocurrency-mining-power-lawsuit/" },
  { id: 15, label: "Straight Arrow News - Texas utility commission spent $56K blocking public records release (November 10, 2025): the case still pending", url: "https://san.com/cc/texas-utility-commission-spent-56k-blocking-public-records-release/" },
  { id: 16, label: "Iowa Attorney General - Attorney General Bird leads coalition warning against federal overreach on crypto transactions (October 21, 2025): twenty-one states, Texas among them, to the SEC Crypto Task Force", url: "https://www.iowaattorneygeneral.gov/newsroom/attorney-general-bird-leads-coalition-warning-against-federal-overreach-on-crypto-transactions" },
  { id: 17, label: "New York Attorney General - letter to Congress on digital-asset regulation (September 2026): eighteen Democratic attorneys general and the District of Columbia against the CLARITY Act; Texas not a signatory", url: "https://es.ag.ny.gov/sites/default/files/letters/letter-to-congress-on-digital-asset-regulation-letter-2025.pdf" },
  { id: 18, label: "Texas Attorney General - Opinion KP-0057 (January 19, 2016): paid daily fantasy sports is illegal gambling under Penal Code § 47.02 - the office's nearest opinion to a digital-money question; no KP opinion on virtual currency exists", url: "https://www.texasattorneygeneral.gov/opinions/ken-paxton/kp-0057" },
  { id: 19, label: "Texas Legislature Online - HB 4306 (88R) text: the Attorney General to study the feasibility of a bullion-depository debit card and report by May 31, 2024; the report has not been located", url: "https://capitol.texas.gov/tlodocs/88R/billtext/html/HB04306H.htm" },
  { id: 20, label: "Texas State Securities Board - Cryptocurrency scams: the state's crypto-fraud education and enforcement page - a separate agency from the Attorney General", url: "https://www.ssb.texas.gov/cryptocurrency-scams" },
  { id: 21, label: "State Bar of Texas - Texas Cryptocurrency Jurisprudence (Nelson Ebaugh): the Securities Board \"the first state securities regulator to enter an enforcement order against a cryptocurrency firm,\" more than fifty orders; no Attorney General opinion cited", url: "https://www.texasbar.com/AM/Template.cfm?Section=articles&ContentID=60081&Template=%2FCM%2FHTMLDisplay.cfm" },
  { id: 22, label: "Texas Tribune - Texans lost $56.8 million to cryptocurrency kiosk scams (July 8, 2026): about 1,200 victims, some 4,000 kiosks; Bitcoin Depot's bankruptcy; the agencies named are the FBI, the Department of Banking, and a county district attorney - not the Attorney General", url: "https://www.texastribune.org/2026/07/08/texas-cryptocurrency-kiosk-bitcoin-atm-scam-fraud/" },
  { id: 23, label: "CoinDesk - Bitcoin Depot, once North America's largest Bitcoin ATM operator, files for bankruptcy (May 18, 2026): about 900 Texas kiosks; \"increasing litigation and regulatory enforcement\"", url: "https://www.coindesk.com/markets/2026/05/18/bitcoin-depot-once-north-america-s-largest-bitcoin-atm-operator-files-for-bankruptcy" },
  { id: 24, label: "District of Columbia Attorney General - Attorney General Schwalb sues crypto ATM operator: a peer office's kiosk suit", url: "https://oag.dc.gov/release/attorney-general-schwalb-sues-crypto-atm-operator" },
  { id: 25, label: "Texas Tribune - Texans lost more than $1 billion to crypto scams in 2025 (July 8, 2026): second only to California", url: "https://www.texastribune.org/2026/07/08/texas-crypto-scam-how-to-spot-bitcoin-fraud/" },
  { id: 26, label: "Texas Legislature Online - SB 21 (89R) enrolled text: \"The comptroller has custody of and shall administer and manage the reserve\"; no role for the Attorney General", url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00021F.htm" },
  { id: 27, label: "Texas Department of Banking - Virtual currency guidance: Industry Notice 2021-03 and the Department's role under HB 4474; no Attorney General role", url: "https://www.dob.texas.gov/consumer-information/virtual-currency-guidance" },
  { id: 28, label: "Courier Texas - Ken Paxton, Kalshi donor (September 3, 2026): the office absent from the 34-state, 44-state, and 38-state prediction-market coalitions of 2025 after contributions from Kalshi and its chief executive", url: "https://couriertexas.com/news/politics/ken-paxton-kalshi-donor/" },
  { id: 29, label: "Austin American-Statesman via Yahoo - Ken Paxton's platform short on specifics (June 18, 2026): the crypto plank on the Senate campaign - \"Digital assets are one of the defining frontiers changing the world\" - added \"in recent months\"; the CLARITY Act the only bill named", url: "https://www.yahoo.com/news/politics/articles/ken-paxtons-platform-short-specifics-174044002.html" },
  { id: 30, label: "Texas Tribune - Ken Paxton's office filed a burst of Big Tech lawsuits in the runoff's final days (June 3, 2026): none concerned digital assets", url: "https://www.texastribune.org/2026/06/03/texas-ken-paxton-tech-lawsuits-senate-campaign/" },
  { id: 31, label: "Wikipedia - 2026 Texas Attorney General election: Mayes Middleton (R) v. Nathan Johnson (D), November 3, 2026 - the office's first change of hands since January 2015", url: "https://en.wikipedia.org/wiki/2026_Texas_Attorney_General_election" },
  { id: 32, label: "Texas Senate Journal - March 6, 2025: SB 21 passed 25–5; both 2026 attorney general nominees voted yea", url: "https://journals.senate.texas.gov/SJRNL/89R/HTML/89RSJ03-06-F.HTM" },
];

export type AgTimelineKind = "counsel" | "suit" | "records" | "gap" | "watch";

// The arc: the regulators' lawyer → the marquee suit → the miners' data →
// the consumer gap → the handover.
export interface AgEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: AgTimelineKind;
  sourceIds: number[];
}

export const agTimeline: AgEvent[] = [
  {
    date: "2016-01-19",
    dateLabel: "January 2015 → January 2016",
    title: "The office, and the nearest thing to an opinion",
    detail:
      "Ken Paxton takes office January 5, 2015 as the state's chief civil litigator, consumer-protection enforcer, and the lawyer who represents Texas agencies in court. On January 19, 2016 the office issues KP-0057: paid daily fantasy sports is illegal gambling under the Penal Code where the house takes a cut. In the eleven years since, the office has issued no formal opinion on virtual currency, Bitcoin, blockchain, a central bank digital currency, or whether a county may take crypto - the closest it has come to construing digital money is that one.",
    kind: "gap",
    sourceIds: [18, 21],
  },
  {
    date: "2022-10-14",
    dateLabel: "September → November 2022",
    title: "The regulators' lawyer: Celsius and Voyager",
    detail:
      "When the lenders fail, the state's securities and banking regulators object in the New York bankruptcy courts, and the Attorney General's lawyers sign the papers. September 29: Texas objects to Celsius selling stablecoins on \"troublingly broad permission to sell assets insufficiently defined for purposes that are also insufficiently defined.\" October 14: the office objects to Voyager's sale to FTX - the two \"are not in compliance with Texas law\" - and attaches the Securities Board's declaration that it is investigating FTX and Sam Bankman-Fried, three weeks before FTX collapses. On the examiner: \"Sometimes sunlight is the best disinfectant.\"",
    kind: "counsel",
    sourceIds: [11, 9, 12],
  },
  {
    date: "2023-02-25",
    dateLabel: "January → February 2023",
    title: "Objecting to Binance.US, and losing",
    detail:
      "The Securities Board and the Department of Banking, through the Attorney General's counsel, object twice to Voyager's replacement sale to Binance.US, citing its reliance on Binance.com and gaps in data protection. The court approves the sale anyway. The pattern is set: the office's crypto enforcement is the regulators' enforcement, with the Attorney General as the state's lawyer of record, not its initiator.",
    kind: "counsel",
    sourceIds: [10],
  },
  {
    date: "2024-03-01",
    dateLabel: "February → July 2024",
    title: "The fights it sat out",
    detail:
      "In February 2024 the Texas Blockchain Council and Riot sue the Department of Energy in Waco over an emergency survey of miners' power use, win a restraining order in a day, and force the survey's withdrawal by March 1 - with no state party or amicus. In July, seven states file an amicus for two Texas plaintiffs suing the SEC in Fort Worth; Texas is not among them. In December the same council sues the IRS over the DeFi broker rule, in Texas, without the state.",
    kind: "gap",
    sourceIds: [7, 6, 8],
  },
  {
    date: "2024-11-14",
    dateLabel: "November 14, 2024",
    title: "The marquee suit: eighteen states against the SEC",
    detail:
      "Texas joins Kentucky and sixteen other states, with the DeFi Education Fund, in the Eastern District of Kentucky: the SEC \"has sought to unilaterally wrest regulatory authority away from the States through an ongoing series of enforcement actions targeting the digital asset industry,\" without congressional authorization, in violation of the Administrative Procedure Act. Three Special Litigation Division lawyers sign for Texas. Paxton's release: \"Federal bureaucrats in Washington have no authority to dictate to States how they should interact with cryptocurrency nor do they have the power to crush this new field with a regulatory framework that Congress never intended.\"",
    kind: "suit",
    sourceIds: [1, 2, 3],
  },
  {
    date: "2025-04-16",
    dateLabel: "April 16, 2025",
    title: "Stayed, and never resumed",
    detail:
      "After the change of administrations and SEC chairs, the states and the Commission jointly ask for a pause; the court grants sixty days, quoting the SEC's own view that the case \"could potentially be resolved.\" No ruling, dismissal, or further filing has been reported since. The office's one affirmative crypto case has produced no law.",
    kind: "suit",
    sourceIds: [4, 5],
  },
  {
    date: "2025-06-27",
    dateLabel: "May → June 2025",
    title: "The miners' data: the office rules for disclosure, and gets sued",
    detail:
      "Under SB 1929, mines over 75 megawatts registered with the Public Utility Commission by February 2025. Reporters ask for the registrations; the PUC refuses on critical-infrastructure grounds. On May 15 an assistant attorney general rules that the commission \"failed to demonstrate the information at issue identifies the technical details of particular vulnerabilities\" and orders release. On June 27 the PUC sues the Attorney General in Travis County: \"In the wrong hands, this information could be used by terrorists to plan attacks on Texas's energy grid.\" The case is still pending, the commission has spent tens of thousands defending secrecy, and the office - in the one dispute where it could have sided with the industry quietly - sided with the public record.",
    kind: "records",
    sourceIds: [13, 14, 15],
  },
  {
    date: "2025-10-21",
    dateLabel: "October 2025 → September 2026",
    title: "One letter signed, one skipped",
    detail:
      "On October 21, 2025 Texas signs Iowa's twenty-one-state letter to the SEC's Crypto Task Force, asking for definitions clear enough that federal rules will not preempt state fraud, money-transmitter, and unclaimed-property law. In September 2026 it does not sign New York's eighteen-state letter urging the Senate to reject the CLARITY Act - every signatory a Democratic office. No coalition letter on a central bank digital currency, the GENIUS Act, or a federal Bitcoin reserve with Texas on it has been located.",
    kind: "suit",
    sourceIds: [16, 17],
  },
  {
    date: "2026-07-08",
    dateLabel: "May → July 2026",
    title: "$56.8 million, 1,200 Texans, and no suit",
    detail:
      "The largest kiosk operator in North America, with about 900 machines in Texas, files for bankruptcy in May citing \"increasing litigation and regulatory enforcement\" - in other states. In July the Tribune reports that Texans lost $56.8 million to crypto-kiosk scams in 2025, about 1,200 victims, more than a billion dollars to crypto fraud of all kinds, second only to California. The agencies it names are the FBI, the Department of Banking, and a county district attorney. Iowa's and the District of Columbia's attorneys general have sued kiosk operators. Texas's has not, and has issued no consumer alert specific to the machines.",
    kind: "gap",
    sourceIds: [23, 22, 25, 24],
  },
  {
    date: "2026-11-03",
    dateLabel: "September → November 2026",
    title: "The handover",
    detail:
      "The Attorney General is running for the U.S. Senate on a platform that added a crypto plank \"in recent months\" and names the CLARITY Act; his office's crypto record is unchanged by it. On November 3 the office changes hands for the first time since 2015, between two state senators who both voted for the reserve and neither of whom has stated a position on the kiosks, the SEC suit, or the miners' data. The Kentucky case and the PUC case will pass to whichever of them wins.",
    kind: "watch",
    sourceIds: [29, 30, 31, 32],
  },
];
