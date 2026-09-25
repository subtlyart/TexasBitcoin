// The Texas Department of Banking and Bitcoin - the sourced dataset.
//
// PHILOSOPHY: the fifth institutional page. The subject is the
// Department - the self-funded bank and money-services regulator under
// the Finance Commission, run by one commissioner since 2008 - and the
// document it wrote in April 2014 that every later Texas position on
// the asset stands on or against. The record is drawn from the memo's
// three texts (2014, 2019, 2025), the custody notice, the Department's
// own enforcement orders and press releases, its written testimony to the
// Legislature in 2022, 2025, and 2026, the CSBS settlements, the
// bankruptcy reporting, and the Texas Tribune. The thesis is the memo:
// Supervisory Memorandum 1037 said Bitcoin is not money under the Money
// Services Act, and twelve years later it still does. Fiat-backed
// stablecoins became money by interpretation in 2019 and by statute in
// 2023; Bitcoin never did. That single line is why Texas needed no
// BitLicense, why the exchanges came, why the Department's crypto orders
// rest on dollars and stablecoins rather than coins - and why, by the
// commissioner's own 2026 testimony, a kiosk selling bitcoin for cash to
// a seventy-year-old is "not subject to Chapter 152." The honest
// counterweight is the ledger: penalties in the tens of thousands
// against exchanges moving billions, a kiosk-fraud bill the Department
// was "prepared" to enforce and did not ask for, and the Celsius
// objection a bankruptcy judge overruled.
//
// Verified September 25, 2026. Re-verify when the 90th Legislature files
// kiosk and stablecoin-framework bills (from November 9, 2026), when the
// GENIUS Act's state-certification regime takes effect (by January 18,
// 2027), and if Commissioner Cooper is succeeded.

export const BANKING_LAST_VERIFIED = "September 25, 2026";

export interface BankingSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the memo and the notice in their own texts,
// the Department's orders, releases, and testimony; then the
// Legislature, CSBS, and the courts; then Texas and trade press.
export const bankingSources: BankingSource[] = [
  { id: 1, label: "Texas Department of Banking - Supervisory Memorandum 1037, April 3, 2014 (original text, mirrored PDF): \"cryptocurrencies as currently implemented cannot be considered money or monetary value under the Money Services Act\"; the five enumerated activities", url: "http://business.cch.com/BANKD/sm1037-04042014.pdf" },
  { id: 2, label: "Texas Department of Banking - press release, April 3, 2014: Cooper - \"At this point a cryptocurrency like Bitcoin is best viewed like a speculative investment, not as money\"", url: "https://www.dob.texas.gov/sites/default/files/files/news/press-releases/2014/04-03-14pr.pdf" },
  { id: 3, label: "Texas Tribune - Texas banking chief issues rules on Bitcoin (April 11, 2014): Daniel Wood - \"I would say this is the first memorandum to offer specific guidance on how Bitcoin and cryptocurrency fit into the current regulatory scheme from a state\"; \"some motivation to get out there quickly and help guide the national discussion\"", url: "https://www.texastribune.org/2014/04/11/texas-banking-chief-issues-rules-bitcoin" },
  { id: 4, label: "CoinDesk - New Texas memorandum outlines initial Bitcoin exchange guidelines (April 3, 2014): Wood - \"Our statutes define money and currency very narrowly\"; New York had begun taking BitLicense applications March 11", url: "https://www.coindesk.com/markets/2014/04/03/new-texas-memorandum-outlines-initial-bitcoin-exchange-guidelines/" },
  { id: 5, label: "Texas Department of Banking - Supervisory Memorandum 1037, April 1, 2019 revision (PDF): supersedes the January 2, 2019 revision; fiat-pegged stablecoins \"may be considered a claim that can be converted into currency and thus fall within the definition of money or monetary value\"; names Tether", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/New-Actions/sm1037.pdf" },
  { id: 6, label: "CoinDesk - Stablecoin issuers may need licenses in Texas, unlike most crypto startups (January 4, 2019): Texas \"one of the nation's most permissive\" jurisdictions", url: "https://www.coindesk.com/markets/2019/01/04/stablecoin-issuers-may-need-licenses-in-texas-unlike-most-crypto-startups" },
  { id: 7, label: "Texas Department of Banking - Supervisory Memorandum 1037, January 28, 2025 revision (PDF): \"Regulatory Treatment of Virtual Currencies Under the Money Services Modernization Act\"; the five-activity list removed for \"case-by-case\" analysis; the statutory stablecoin definition; an unbacked peg \"does not remove that stablecoin from the regulatory ambit\"", url: "https://dob.texas.gov/sites/default/files/files/consumer-information/sm1037.pdf" },
  { id: 8, label: "Texas Department of Banking - Industry Notice 2021-03, June 10, 2021 (PDF): \"Texas state-chartered banks may provide customers with virtual currency custody services, so long as the bank has adequate protocols in place\"; authority \"already exists pursuant to Texas Finance Code § 32.001\"; fiduciary or bailee", url: "https://www.dob.texas.gov/sites/default/files/files/news/Industrynotices/in2021-03.pdf" },
  { id: 9, label: "Texas Department of Banking - Commissioner Cooper's response to the House Pensions, Investments and Financial Services Committee (August 25, 2022, PDF): \"Texas was the first state to publish such guidance and the Memorandum served as a template for guidance published in other states\"; the custody notice drew \"a significant number of inquiries\"", url: "https://www.dob.texas.gov/sites/default/files/files/news/Testimony/2022/082522t.pdf" },
  { id: 10, label: "Texas Department of Banking - Industry Notice 2023-03, August 22, 2023 (PDF): the Money Services Modernization Act (SB 895) and HB 1666's digital-asset service provider reports; \"The Department was a significant contributor in developing the Model Law\"", url: "https://www.dob.texas.gov/sites/default/files/files/news/Industrynotices/in2023-03.pdf" },
  { id: 11, label: "Texas Legislature Online - SB 895 (88R) bill analysis: the Money Services Modernization Act, Finance Code Chapter 152, effective September 1, 2023, replacing Chapter 151", url: "https://capitol.texas.gov/tlodocs/88R/analysis/html/SB00895S.htm" },
  { id: 12, label: "Texas Legislature Online - HB 1666 (88R) enrolled text: Finance Code Chapter 160; a digital asset service provider \"maintains custody of the customer's digital assets\"; no commingling; annual attested report to the Department; suspension or revocation of the money-transmission license", url: "https://capitol.texas.gov/tlodocs/88R/billtext/html/HB01666F.htm" },
  { id: 13, label: "Texas Department of Banking - Order 2021-016, Cash Cloud dba Coin Cloud (October 12, 2021, PDF): unlicensed money transmission by exchanging stablecoin for cash at kiosks; $5,925", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2021-016.pdf" },
  { id: 14, label: "Texas Department of Banking - press release, December 5, 2022: the November 18 emergency order and December 1 consent order against FTX US - cease unlicensed money transmission and refuse Texas customers' funds", url: "https://www.dob.texas.gov/sites/default/files/files/news/press-releases/2022/12-05-22pr.pdf" },
  { id: 15, label: "Texas Department of Banking - Order 2022-035, Voyager Digital (December 20, 2022, PDF): the same consent structure as FTX", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2022-035.pdf" },
  { id: 16, label: "Texas Department of Banking - Order 2023-008a, Nexo Capital (March 13, 2023, PDF): unlicensed transmission of fiat and stablecoin; $212,264.15 in four installments, the Department's share of the $22.5 million state term sheet", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2023-008a.pdf" },
  { id: 17, label: "Texas Department of Banking - Order 2023-022, GPD Holdings dba CoinFlip (July 19, 2023, PDF): unlicensed transmission via stablecoin at kiosks; $31,600", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2023-022.pdf" },
  { id: 18, label: "Texas Department of Banking - press release, October 28, 2024: Order 2024-034, Kraken (Payward) - unlicensed transmission of fiat and stablecoin; $250,000; a $48 million capital injection maintained; operations continue while the application is reviewed", url: "https://www.dob.texas.gov/sites/default/files/files/news/press-releases/2024/10-28-24pr.pdf" },
  { id: 19, label: "Texas Department of Banking - Order 2025-002, Block, Inc. (January 15, 2025, PDF): the multistate Bank Secrecy Act settlement; Texas share $1,647,395.84 of $79,075,000", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2025-002.pdf" },
  { id: 20, label: "Texas Department of Banking - Order 2025-004, Plutus Financial dba Abra and William Barhydt (February 28, 2025, PDF): never licensed in Texas; a June 1, 2020 no-action letter, after which Abra added a hosted stablecoin wallet \"without notification to the Department\"", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2025-004.pdf" },
  { id: 21, label: "Conference of State Bank Supervisors - State financial regulators settle with Abra, return cryptocurrency assets (June 26, 2024): 25 states; Texas among the eight on the working group; up to $82.1 million returned; each state forgoes a $250,000 penalty", url: "https://www.csbs.org/newsroom/state-financial-regulators-settle-abra-return-cryptocurrency-assets" },
  { id: 22, label: "Texas Department of Banking - Order 2025-009, River Financial (May 5, 2025, PDF): holding customers' dollars pending a bitcoin purchase is money transmission; $56,544.68; River had applied on its own after Chapter 160", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2025-009.pdf" },
  { id: 23, label: "Texas Department of Banking - press release, May 7, 2025: Order 2025-010, Foris DAX (Crypto.com) - unlicensed money transmission; $87,108.63", url: "https://www.dob.texas.gov/sites/default/files/files/news/press-releases/2025/05-07-25apr.pdf" },
  { id: 24, label: "Texas Department of Banking - Order 2026-001, CoinFlip (February 24, 2026, PDF): an affiliate sold stablecoin through an order desk from February 2024 to October 2025 while unlicensed; $40,839.75; the May 2024 license application still pending", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2026-001.pdf" },
  { id: 25, label: "Texas Department of Banking - Order 2026-017, OKX, Inc. (September 11, 2026, PDF): 2018 to 2024 unlicensed receipt of \"sovereign currency and stablecoin for transmission\"; \"Respondent asserts that this activity in Texas was inadvertent\"; $95,000", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/orders/2026-017.pdf" },
  { id: 26, label: "Texas Department of Banking - enforcement orders index: the Department's money-services orders by number, 2016–2026", url: "https://dob.texas.gov/laws-regulations/enforcement-orders" },
  { id: 27, label: "CoinDesk - Texas objects to Celsius plan to fund operations with stablecoin sales (September 29, 2022): the Securities Board and the Department of Banking, with Vermont - \"troublingly broad permission\"", url: "https://www.coindesk.com/policy/2022/09/29/texas-objects-to-celsius-plan-to-fund-operations-with-stablecoin-sales" },
  { id: 28, label: "Decrypt - Celsius Earn assets belong to the estate, judge rules (January 4, 2023): Judge Glenn - the debtors \"may sell stablecoins outside of the ordinary course of business\"", url: "https://decrypt.co/118433/celsius-earn-account-ruling-estate-user-funds" },
  { id: 29, label: "CoinDesk - Voyager–Binance.US deal benefits halved if Alameda loan claim succeeds, Texas regulators say (February 27, 2023): the joint objection; \"Binance.US abandoned its Texas license application after failing to provide sufficient financial documentation\"", url: "https://www.coindesk.com/policy/2023/02/27/1bn-voyager-binance-deal-benefits-halved-if-alameda-loan-claim-succeeds-texas-regulators" },
  { id: 30, label: "Texas Department of Banking - Commissioner Cooper's testimony to Senate Business and Commerce (June 24, 2026, PDF): \"Texas does not currently have a substantially similar framework in place\" for the GENIUS Act; two-party fiat-for-Bitcoin kiosk sales \"not subject to Chapter 152\"; \"the Department was prepared to supervise and regulate the activity as required\"; Coinbase's $15.2 billion annualized Texas volume; 197 money-services businesses", url: "https://www.dob.texas.gov/sites/default/files/files/news/Testimony/2026/06-24-26t.pdf" },
  { id: 31, label: "Texas Department of Banking - GENIUS Act, non-depository page: the Department \"currently licenses and regulates issuers of fiat-currency backed stablecoin as money transmitters\" and \"intends to continue\"; interpretive guidance under § 152.059", url: "https://dob.texas.gov/money-services-business/genius-act-non-depository" },
  { id: 32, label: "Texas Department of Banking - Deputy Commissioner Saucillo's testimony to House Homeland Security, Public Safety and Veterans' Affairs (July 30, 2026, PDF): $440 billion in annualized Texas money-services volume; Circle and Coinbase as stablecoin examples; the kiosk position restated", url: "https://www.dob.texas.gov/sites/default/files/files/news/Testimony/2026/07-30-26t.pdf" },
  { id: 33, label: "KXAN - Crypto kiosks linked to $56.8M in losses for Texans; lawmakers examine scams (July 30, 2026): Saucillo - \"typically, they're sending it to an unhosted wallet ... it gets into a mixer ... it's very hard to get any of that back\"", url: "https://www.kxan.com/news/texas-politics/crypto-kiosks-linked-to-56-8m-in-losses-for-texans-lawmakers-examine-scams/" },
  { id: 34, label: "Texas Tribune - Texans lost $56.8 million to cryptocurrency kiosk scams (July 8, 2026): 1,179 complaints, the most of any state; about 4,000 kiosks; \"Texas regulators currently have no oversight over the kiosks\"; AARP's Andrea Earl - \"The state of Texas is behind other states on this, and then really lost momentum last session\"", url: "https://www.texastribune.org/2026/07/08/texas-cryptocurrency-kiosk-bitcoin-atm-scam-fraud/" },
  { id: 35, label: "Texas Legislature Online - SB 1705 (89R) bill history: Parker; kiosk registration with the Department under a new Finance Code Chapter 161; passed the Senate May 15, 2025; reported by House committee 8–0 May 22; placed on the calendar May 27; died at sine die", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1705" },
  { id: 36, label: "Texas Department of Banking - Commissioner Cooper biography: appointed by the Finance Commission December 1, 2008; FDIC examiner from 1970; CSBS chairman 2016; Texas Bankers Hall of Fame 2025", url: "https://www.dob.texas.gov/about-us/commissioner-cooper-bio" },
  { id: 37, label: "Texas Legislature Online - SB 614 (86R) enrolled text: the Finance Commission, the Department of Banking, and Savings and Mortgage Lending continued to September 1, 2031", url: "https://capitol.texas.gov/tlodocs/86R/billtext/html/SB00614F.HTM" },
  { id: 38, label: "Texas Department of Banking - Commissioner Cooper's testimony to House Pensions, Investments and Financial Services (March 3, 2025, PDF): \"Increasing demand for stablecoins which is a regulated MSB activity in Texas\"; license counts rising \"partly due to the rise in cryptocurrency usage\"", url: "https://www.dob.texas.gov/sites/default/files/files/news/Testimony/2025/03-03-25t.pdf" },
];

// The Department's crypto-related money-services orders, from its own
// index (September 2026). Penalties as stated in the orders or releases.
export const bankingOrders: { date: string; who: string; what: string; penalty: string; kiosk?: boolean }[] = [
  { date: "Nov 17, 2020", who: "Bitstamp", what: "unlicensed transmission via fiat stored value", penalty: "$120,708" },
  { date: "Oct 12, 2021", who: "Coin Cloud", what: "stablecoin-for-cash at kiosks", penalty: "$5,925", kiosk: true },
  { date: "Dec 1, 2022", who: "FTX US", what: "emergency order Nov 18, consent Dec 1 · refuse Texas funds", penalty: "none stated" },
  { date: "Dec 20, 2022", who: "Voyager Digital", what: "consent order, same structure as FTX", penalty: "none stated" },
  { date: "Mar 13, 2023", who: "Nexo Capital", what: "fiat and stablecoin transmission and custody", penalty: "$212,264" },
  { date: "Jul 19, 2023", who: "CoinFlip", what: "stablecoin at kiosks", penalty: "$31,600", kiosk: true },
  { date: "Oct 18, 2024", who: "Kraken (Payward)", what: "fiat and stablecoin transmission · $48M capital held", penalty: "$250,000" },
  { date: "Jan 15, 2025", who: "Block, Inc.", what: "multistate BSA/AML settlement · Texas share", penalty: "$1,647,396" },
  { date: "Feb 28, 2025", who: "Abra / Barhydt", what: "never licensed · assets returned · penalty forgone", penalty: "$0 of $250,000" },
  { date: "May 5, 2025", who: "River Financial", what: "dollars held pending bitcoin purchase", penalty: "$56,545" },
  { date: "May 5, 2025", who: "Crypto.com (Foris DAX)", what: "unlicensed money transmission", penalty: "$87,109" },
  { date: "Feb 24, 2026", who: "CoinFlip (second)", what: "stablecoin order desk, Feb 2024–Oct 2025", penalty: "$40,840", kiosk: true },
  { date: "Sep 11, 2026", who: "OKX", what: "2018–2024 fiat and stablecoin · \"inadvertent\"", penalty: "$95,000" },
];

export type BankingTimelineKind = "memo" | "notice" | "orders" | "gap" | "watch";

// The arc: the memo → the notice → the orders → the kiosks → the GENIUS
// Act.
export interface BankingEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: BankingTimelineKind;
  sourceIds: number[];
}

export const bankingTimeline: BankingEvent[] = [
  {
    date: "2014-04-03",
    dateLabel: "April 3, 2014",
    title: "Supervisory Memorandum 1037: \"not money\"",
    detail:
      "Commissioner Charles Cooper, six years into a tenure that has now lasted eighteen, issues a memorandum to \"All Virtual Currency Companies Operating or Desiring to Operate in Texas.\" Its holding: a cryptocurrency \"is not currency,\" \"is also not a claim,\" and \"cannot be considered money or monetary value under the Money Services Act.\" Five activities follow - a two-party sale is \"essentially a sale of goods\"; crypto-for-crypto is nothing; transfer and custody alone are nothing; an exchange that escrows dollars \"is generally money transmission\"; a machine \"usually but not always\" is. Cooper's release: Bitcoin is \"best viewed like a speculative investment, not as money.\" New York had opened BitLicense applications three weeks earlier; the Department's Daniel Wood: \"There was some motivation to get out there quickly and help guide the national discussion.\"",
    kind: "memo",
    sourceIds: [1, 2, 3, 4],
  },
  {
    date: "2019-01-02",
    dateLabel: "January 2 → April 1, 2019",
    title: "The second life: stablecoins become money",
    detail:
      "The memo is revised to meet \"the widespread introduction of stablecoins to the market.\" A coin pegged to a sovereign currency, backed by a reserve, and redeemable \"may be considered a claim that can be converted into currency and thus fall within the definition of money or monetary value\" - and receiving one for transmission \"may be money transmission.\" It names Tether. Bitcoin's status is unchanged. CoinDesk, the same week: Texas remains \"one of the nation's most permissive\" crypto jurisdictions, and now the one where a stablecoin issuer needs a license.",
    kind: "memo",
    sourceIds: [5, 6],
  },
  {
    date: "2021-06-10",
    dateLabel: "June 10, 2021",
    title: "Industry Notice 2021-03: the banks may hold the keys",
    detail:
      "Five days before Abbott signs HB 4474, the Department \"affirms that Texas state-chartered banks may provide customers with virtual currency custody services, so long as the bank has adequate protocols in place\" - authority it says \"already exists pursuant to Texas Finance Code § 32.001.\" A bank may store a customer's keys or take control under its own, as fiduciary or as bailee. The Department later tells the Legislature it \"fielded a significant number of inquiries from the industry\"; it has never named a bank that took it up.",
    kind: "notice",
    sourceIds: [8, 9],
  },
  {
    date: "2022-12-20",
    dateLabel: "September → December 2022",
    title: "The collapses: objections, an emergency order, two consents",
    detail:
      "With the Securities Board, the Department objects in the New York bankruptcy court to Celsius selling its stablecoins - \"troublingly broad permission\" - and to Voyager's disclosure statement; a judge will overrule the Celsius objection in January. On November 18 it enters an emergency order against FTX US for unlicensed money transmission, converted December 1 into a consent order requiring FTX to refuse Texans' funds and post the order on its bankruptcy claims site; on December 20 the same order goes to Voyager. Neither carries a penalty. Cooper to the Legislature that fall: \"Texas was the first state to publish such guidance and the Memorandum served as a template for guidance published in other states.\"",
    kind: "orders",
    sourceIds: [27, 28, 14, 15, 9],
  },
  {
    date: "2023-09-01",
    dateLabel: "March → September 2023",
    title: "Nexo, Binance.US, and two statutes: Chapter 152 and Chapter 160",
    detail:
      "Nexo consents to $212,264 for the Department's share of a multistate settlement; in February the Department and the Securities Board tell the Voyager court that Binance.US \"abandoned its Texas license application after failing to provide sufficient financial documentation.\" On September 1 the Money Services Modernization Act, SB 895, replaces the 2005 statute with Finance Code Chapter 152, which the Department helped draft as the CSBS model and which writes the 2019 stablecoin reading into law - and HB 1666 adds Chapter 160, the commingling ban, with annual attested reports from digital-asset custodians to the Department and the power to pull their licenses. How many have filed, the Department has not said.",
    kind: "orders",
    sourceIds: [16, 29, 11, 10, 12],
  },
  {
    date: "2025-01-28",
    dateLabel: "October 2024 → May 2025",
    title: "The third life of the memo, and the exchanges pay",
    detail:
      "Kraken consents to $250,000 in October 2024 for years of unlicensed transmission, keeps a $48 million capital injection in place, and keeps operating while its application is reviewed. On January 28, 2025 the memo is rewritten for Chapter 152: the five-activity list is gone, replaced by \"case-by-case\" analysis; the statutory stablecoin definition is adopted; an issuer that does not actually hold the reserve \"does not remove that stablecoin from the regulatory ambit\"; and \"non-stablecoin virtual currency is not money or monetary value\" still. Block's Cash App settlement brings Texas $1.65 million; Abra returns its customers' assets and the Department forgoes its $250,000; River Financial pays $56,545 for holding dollars while it bought bitcoin; Crypto.com pays $87,109.",
    kind: "memo",
    sourceIds: [18, 7, 19, 20, 22, 23],
  },
  {
    date: "2025-06-02",
    dateLabel: "May → June 2025",
    title: "The kiosk bill the Department was \"prepared\" for dies on the calendar",
    detail:
      "SB 1705, Tan Parker's bill to register crypto kiosks with the Department under a new Chapter 161 - quarterly reports, blockchain analytics, $5,000 a violation - passes the Senate on May 15, clears the House committee 8–0 on May 22, is placed on the calendar May 27, and dies at sine die on June 2. A House companion dies in the Senate. The Department offers no located testimony on either. By its own reading, a kiosk selling bitcoin for cash to one customer, with no stablecoin and no third party, is outside its statute.",
    kind: "gap",
    sourceIds: [35, 30],
  },
  {
    date: "2026-07-30",
    dateLabel: "June → July 2026",
    title: "$56.8 million, and the commissioner explains the gap",
    detail:
      "The Tribune reports Texans lost $56.8 million to kiosk scams in 2025 across 1,179 complaints, the most of any state, on some 4,000 machines, and that \"Texas regulators currently have no oversight over the kiosks.\" Cooper, to the Senate on June 24: \"unless the kiosk supports stablecoin and/or involves a third party ... the transaction between the kiosk operator and customer is not subject to Chapter 152\"; the Department \"was prepared to supervise and regulate the activity as required\" and will be again. Deputy Commissioner Saucillo, to the House on July 30, on why the money is gone: \"typically, they're sending it to an unhosted wallet ... it gets into a mixer ... it's very hard to get any of that back.\" The same testimony reports Coinbase moving $15.2 billion a year through Texas under a Department license, of $440 billion in licensed volume.",
    kind: "gap",
    sourceIds: [34, 30, 33, 32],
  },
  {
    date: "2026-09-11",
    dateLabel: "June → September 2026",
    title: "GENIUS, OKX, and a framework Texas does not have",
    detail:
      "Cooper tells the Senate the federal GENIUS Act will require states that want to regulate payment-stablecoin issuers to be certified as \"substantially similar,\" and that \"Texas does not currently have a substantially similar framework in place. The Department looks forward to working with the Legislature to establish such a framework in the upcoming session.\" Its website says it licenses stablecoin issuers as money transmitters now and \"intends to continue.\" On September 11 OKX consents to $95,000 for six years of unlicensed Texas activity it calls \"inadvertent,\" with its application pending - the thirteenth crypto order under a commissioner appointed in 2008 who has signed every one.",
    kind: "watch",
    sourceIds: [30, 31, 25, 36],
  },
];
