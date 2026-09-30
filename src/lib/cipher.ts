// Cipher Digital (formerly Cipher Mining) and Texas - the sourced dataset.
//
// PHILOSOPHY: the fourth company page. The subject is Cipher - the
// Bitfury spin-out that went public through a SPAC in August 2021 with
// its parent holding 83% of the stock, built its first real mine at
// Odessa on a fixed-price power contract it was sued over before the
// site was finished, learned that the contract was worth more resold
// than mined, and then, in fourteen months from September 2025, leased
// every new megawatt it had in West Texas to Fluidstack, Google, Amazon,
// and an unnamed AI lab, borrowed six billion dollars to build the
// buildings, and dropped the word "Mining" from its name. Its Texas
// record is the widest of any company in the wing: eleven sites from the
// Permian to the Brazos, 3.2 gigawatts conditionally classed by ERCOT in
// September 2026, the founder of the Texas Blockchain Council on its
// payroll, and a county commissioner in Waco saying its transparency is
// "not very good right now." The honest counterweight is the ledger and
// the neighbors: an $822 million loss in 2025, a hashrate cut in half by
// the conversions, a controlling shareholder that sold down from 83% to
// 15%, and communities in Riesel and Colorado City that learned of the
// sites from the paper or the water outage.
//
// Verified September 30, 2026. Re-verify at the Q3 2026 results
// (November), when the Barber Lake data halls deliver (Q4 2026 to Q1
// 2027), when the Odessa power contract expires (July 2027), and after
// the Batch Zero audit filing (December 10, 2026).

export const CIPHER_LAST_VERIFIED = "September 30, 2026";

export interface CipherSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: the company's own SEC filings, releases, and
// offering documents; the Legislature; ERCOT; then the trade and local
// press.
export const cipherSources: CipherSource[] = [
  { id: 1, label: "CoinDesk - Bitfury unit to merge with SPAC to create Bitcoin mining company with $2 billion enterprise value (March 5, 2021): Good Works Acquisition Corp.; $595 million of expected proceeds including a $425 million PIPE", url: "https://www.coindesk.com/markets/2021/03/05/bitfury-unit-to-merge-with-spac-to-create-bitcoin-mining-company-with-2b-enterprise-value" },
  { id: 2, label: "SEC - Cipher Mining Form 424B3 (November 2021): the business combination consummated August 27, 2021; Bitfury Top HoldCo and Bitfury Holding at about 83.4% at the close", url: "https://www.sec.gov/Archives/edgar/data/1819989/000119312521333260/d262832d424b3.htm" },
  { id: 3, label: "SEC - Cipher Mining Form 10-K for 2021: a net loss of $72.2 million for the eleven months to December 31; \"Bitfury Group has control of the Company\"", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095017022002861/cifr-20211231.htm" },
  { id: 4, label: "SEC - Cipher Mining Form 10-K for 2022 (March 2023): Bitfury at 81.2%, a \"controlled company\"; Alborz near Happy, 40 MW on the Astra wind project; Bear and Chief near Andrews; Odessa from November 2022; the Luminant suit of November 18, 2022 in Dallas County over $6.7 million of payments; the Bitfury master services agreement with a U.S. mining non-compete; 26 employees", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095017023007793/cifr-20221231.htm" },
  { id: 5, label: "SEC - Cipher Mining fourth quarter and full year 2022 business update (March 14, 2023): revenue $3.0 million; net loss $39.1 million; about 5.2 EH/s; $5.06 million from the \"reduction of scheduled power\"", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095017023007705/cifr-ex99_1.htm" },
  { id: 6, label: "GlobeNewswire - Cipher Mining commences bitcoin mining at Odessa data center (November 29, 2022): \"just 10 months after we broke ground\"; about 2.7 cents a kilowatt-hour; a fixed-price contract valued at $78.9 million with the flexibility \"to either mine bitcoin or resell power\"", url: "https://www.globenewswire.com/news-release/2022/11/29/2564500/0/en/Cipher-Mining-Commences-Bitcoin-Mining-at-Odessa-Data-Center.html" },
  { id: 7, label: "The Block - Cipher Mining completes 40-megawatt wind-powered site in Texas (August 9, 2022): Alborz; a five-year fixed contract at 2.73 cents; Page - \"an average price of power of roughly $17 per megawatt-hour\"", url: "https://www.theblock.co/post/162413/cipher-mining-completes-40-megawatt-wind-powered-site-in-texas" },
  { id: 8, label: "SEC - Cipher Mining Form 8-K (August 23, 2023): the Luminant settlement - a fourth amendment to the power purchase agreement, curtailment notice cut from two hours to \"at most, ten minutes\"; the Odessa lease extended through July 2027", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095017023045092/cifr-20230823.htm" },
  { id: 9, label: "Yahoo Finance - Bitfury Group announces sale of 10 million shares of Cipher Mining (November 9, 2023): at $2.95; Bitfury retains about 75.4%", url: "https://finance.yahoo.com/news/bitfury-group-announces-sale-10-141000527.html" },
  { id: 10, label: "SEC - Cipher Mining Form 8-K exhibit (November 8, 2023): the Black Pearl purchase in Winkler County, at least 50 acres, paid in about 2.4 million shares; ERCOT conditional approval up to 300 MW", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095017023060676/cifr-ex99_1.htm" },
  { id: 11, label: "GlobeNewswire - Cipher Mining fourth quarter and full year 2023 business update (March 5, 2024): revenue $126.8 million; net loss $25.8 million; power sales $9.9 million; 7.4 EH/s", url: "https://www.globenewswire.com/news-release/2024/03/05/2840268/0/en/Cipher-Mining-Provides-Fourth-Quarter-and-Full-Year-2023-Business-Update.html" },
  { id: 12, label: "SEC - Cipher Mining Form 10-K for 2023: 796 bitcoin held at December 31, 2023", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095017024025442/cifr-20231231.htm" },
  { id: 13, label: "The Energy Mag - Bitcoin miner Cipher to acquire new 300 MW site in Texas (August 27, 2024): $67.5 million cash plus $3 a megawatt-hour for five years; 250 acres; an energized substation", url: "https://theenergymag.com/news/2024-08-27/bitcoin-cipher-mining-texas-300mw" },
  { id: 14, label: "GlobeNewswire - Cipher Mining closes acquisition of the Barber Lake 300 MW site (September 24, 2024): Page - \"we have already received interest in the site from multiple hyperscalers\"", url: "https://www.globenewswire.com/news-release/2024/09/24/2952270/0/en/Cipher-Mining-Announces-the-Closing-of-its-Acquisition-of-Barber-Lake-300-MW-Data-Center-Site.html" },
  { id: 15, label: "Investing.com - Bitfury completes share distribution plan for Cipher Mining (September 11, 2024): 9.6 million shares to employees and advisers; the stake toward 15%", url: "https://www.investing.com/news/company-news/bitfury-completes-share-distribution-plan-for-cipher-mining-93CH-3611569" },
  { id: 16, label: "GlobeNewswire - Cipher Mining fourth quarter and full year 2024 business update (February 25, 2025): revenue $151.3 million; net loss $44.6 million; about 13.5 EH/s; 337 more acres at Barber Lake; a 2.8 GW pipeline", url: "https://www.globenewswire.com/news-release/2025/02/25/3031863/0/en/cipher-mining-provides-fourth-quarter-and-full-year-2024-business-update.html" },
  { id: 17, label: "SEC - Cipher Mining Form 10-K for 2024: 43 employees; Reveille at Cotulla, 70 MW; Stingray, 100 MW conditional; Black Pearl's 300 MW approval", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998925000005/cifr-20241231.htm" },
  { id: 18, label: "SEC - Cipher Mining 2025 proxy statement (April 21, 2025): Page's 2024 compensation $17.3 million; Bitfury-affiliated entities at 26.6%", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998925000027/cifr-20250421.htm" },
  { id: 19, label: "SEC - Cipher Mining signs 168 MW, ten-year AI hosting agreement with Fluidstack (September 25, 2025): Barber Lake; about $3.0 billion over ten years; Google's $1.4 billion backstop and warrants for about 5.4%; delivery September 2026; Page - \"we look forward to welcoming Google as an investor in Cipher\"", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095010325012168/dp234624_ex9901.htm" },
  { id: 20, label: "Investing.com - Cipher Mining issues $1.3 billion in convertible notes due 2031 (September 30, 2025): zero coupon; upsized from $800 million", url: "https://www.investing.com/news/sec-filings/cipher-mining-issues-13-billion-in-convertible-notes-due-2031-93CH-4265705" },
  { id: 21, label: "SEC - Cipher Mining third quarter 2025 business update (November 3, 2025): revenue $72 million; the AWS lease - fifteen years, 300 MW, about $5.5 billion, at Black Pearl; Colchis, a 1 GW joint venture with an AEP interconnection; about $8.5 billion of AI contracts", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998925000110/nov3_earningspressreleasex.htm" },
  { id: 22, label: "SEC - Cipher Mining third quarter 2025 presentation (November 3, 2025): about 23.6 EH/s; Odessa 11.3 EH/s, 56% of production; Black Pearl 150 MW and 10.1 EH/s; the wind joint ventures 120 MW", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998925000110/ciphermining_businessupd.htm" },
  { id: 23, label: "CoinDesk - Cipher Mining surges 19% on $5.5 billion Amazon Web Services deal (November 3, 2025): Page - hyperscalers \"would turn to Cipher and to non-traditional areas in Texas\"", url: "https://www.coindesk.com/business/2025/11/03/cipher-mining-surges-19-usd5-5b-amazon-web-services-deal" },
  { id: 24, label: "SEC - Cipher Mining signs additional 56 MW, ten-year AI hosting agreement with Fluidstack (November 20, 2025): about $830 million; Google's backstop to $1.73 billion; Barber Lake fully leased", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095010325015073/dp237633_ex9901.htm" },
  { id: 25, label: "GlobeNewswire - Cipher welcomes industry veterans Lee Bratcher and Drew Armstrong (January 6, 2026): Bratcher as head of policy and government affairs, to \"represent Cipher in its ERCOT membership\"", url: "https://www.globenewswire.com/news-release/2026/01/06/3213649/0/en/Cipher-Welcomes-Industry-Veterans-Lee-Bratcher-and-Drew-Armstrong.html" },
  { id: 26, label: "GlobeNewswire - Cipher Mining prices $2.0 billion of senior secured notes (February 4, 2026): 6.125% due 2031, to finance the rest of Black Pearl", url: "https://www.globenewswire.com/news-release/2026/02/04/3232548/0/en/Cipher-Mining-Inc-Announces-Pricing-of-2-0-Billion-of-Senior-Secured-Notes.html" },
  { id: 27, label: "SEC - Cipher Mining Form 8-K (February 20, 2026): the charter amendment renaming the company Cipher Digital Inc.; the ticker unchanged", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998926000007/cifr-20260220.htm" },
  { id: 28, label: "The Block - Canaan acquires Cipher's stake in West Texas Bitcoin mining projects in a $40 million deal (February 23, 2026): the Alborz, Bear, and Chief joint ventures, 120 MW and 4.4 EH/s, paid in Canaan stock", url: "https://www.theblock.co/news/business/2026-02-23-canaan-cipher-mining-west-texas-bitcoin-mining-390926" },
  { id: 29, label: "GlobeNewswire - Cipher Digital fourth quarter and full year 2025 business update (February 24, 2026): revenue $223.9 million; net loss $822.2 million; long-term debt $2.71 billion; 405 million shares", url: "https://www.globenewswire.com/news-release/2026/02/24/3243381/0/en/Cipher-Digital-Provides-Fourth-Quarter-and-Full-Year-2025-Business-Update.html" },
  { id: 30, label: "CoinDesk - Cipher Digital rebrands as it pivots from bitcoin mining to HPC; shares slide (February 24, 2026): fourth-quarter revenue $60 million against an $84.4 million estimate; 19% of the float sold short", url: "https://www.coindesk.com/markets/2026/02/24/cipher-digital-rebrands-as-it-pivots-from-bitcoin-mining-to-hpc-shares-slide" },
  { id: 31, label: "SEC - Cipher Digital Form 10-K for 2025 (February 2026): headquarters at One Vanderbilt, New York; 66 employees; the Luminant contract at about 2.8 cents, take-or-pay on two-thirds of 207 MW, through at least July 2027; Black Pearl mining ceased February 2026; McLennan, Mikeska, and Milsing at 500 MW each; Colchis 1 GW for 2028; \"not a party to any material pending legal proceedings\"", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998926000009/cifr-20251231.htm" },
  { id: 32, label: "SEC - Cipher Digital 2026 proxy statement (April 20, 2026): Page's 2025 compensation $15.0 million; a pay ratio of 24.6 to 1 on a median employee at $608,805; Bitfury-affiliated entities at 15.1%", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998926000016/cifr-20260420.htm" },
  { id: 33, label: "SEC - Cipher Digital first quarter 2026 business update (May 5, 2026): revenue $35 million; net loss $114.3 million; a third lease with an unnamed \"investment-grade hyperscale tenant\"; Barber Lake topped out; Page - \"2026 is the year of execution\"", url: "https://www.sec.gov/Archives/edgar/data/0001819989/000181998926000025/exh991q1fy26_earningsxprvf.htm" },
  { id: 34, label: "Waco Bridge - Second Waco-area data center proposal troubles residents (May 27, 2026): the McLennan site at Riesel, about 300 acres bought October 2025, up to 500 MW; Commissioner Wilson - transparency \"not very good right now\"", url: "https://wacobridge.org/2026/05/27/waco-data-center-cipher-riesel-mclennan-county/" },
  { id: 35, label: "SEC - Stingray Compute LLC offering materials (June 2026): Andrews, Texas; 100 MW gross, 70 MW IT; tenant Amazon Data Services with an Amazon.com guarantee; rent from spring 2027", url: "https://www.sec.gov/Archives/edgar/data/0001819989/000095010326008635/dp248110_ex9901.htm" },
  { id: 36, label: "Yahoo Finance / Blockspace - Cipher Digital SEC filing reveals AWS as tenant at Stingray site (June 8, 2026): $810 million of notes due 2031", url: "https://finance.yahoo.com/markets/stocks/articles/cipher-digital-sec-filing-reveals-140653972.html" },
  { id: 37, label: "ERCOT - Market notice M-A080326-01, update regarding Batch Zero timelines (August 3, 2026): the Governor's directive requires \"a verification process before advancing any data center Large Loads\"", url: "https://www.ercot.com/services/comm/mkt_notices/M-A080326-01" },
  { id: 38, label: "GlobeNewswire - Cipher Digital second quarter 2026 business update (August 4, 2026): revenue $24.8 million; net loss $267.5 million; long-term debt $5.4 billion; Black Pearl's first capacity delivered two months early with rent commenced; the Apollo option, 900 MW near San Antonio", url: "https://www.globenewswire.com/news-release/2026/08/04/3338166/0/en/Cipher-Digital-Provides-Second-Quarter-2026-Business-Update.html" },
  { id: 39, label: "SEC - Cipher Digital second quarter 2026 presentation (August 4, 2026): about 11.6 EH/s at Odessa; about $11.4 billion contracted; about 5.3 GW across eleven sites; total debt $6.016 billion", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998926000038/cipherdigital_businessup.htm" },
  { id: 40, label: "Investing.com - Cipher Digital second quarter 2026 earnings call transcript (August 4, 2026): Page - \"encouraged by the level of interest we're seeing in conversion of Odessa to an HPC site\"; \"We don't anticipate additional capital investment\" in mining; on the Governor's letter, \"Cipher is going to be at the front of it\"", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-cipher-digital-q2-2026-misses-forecasts-shares-fall-93CH-4834562" },
  { id: 41, label: "SEC - Cipher Digital Form 10-Q for the second quarter of 2026: about 646 bitcoin at June 30, 2026 against 1,433 at December 31, 2025; $6.0155 billion of principal; no material legal proceedings", url: "https://www.sec.gov/Archives/edgar/data/0001819989/000181998926000041/cifr-20260630.htm" },
  { id: 42, label: "Utility Dive - ERCOT aims to complete the Governor's data center audit by December (August 21, 2026): about 300 projects in Batch Zero; a December 10 target", url: "https://www.utilitydive.com/news/ercot-texas-puc-data-center-audit/828472/" },
  { id: 43, label: "Yahoo Finance / Blockspace - All of the former Bitcoin miners who received Batch Zero classifications (September 10, 2026): Cipher at 3.2 GW conditional", url: "https://finance.yahoo.com/energy/articles/former-btc-miners-received-batch-231310545.html" },
  { id: 44, label: "San Angelo LIVE - Data center and AI companies pay to upgrade Colorado City's water system (September 11, 2026): the Colorado City Infrastructure Fund with Fluidstack and Anthropic; Barber Lake on non-potable water; the July well-pump outage", url: "https://sanangelolive.com/news/business/2026-09-11/data-center-ai-companies-pay-upgrade-colorado-citys-water-system" },
  { id: 45, label: "Stocktwits - CIFR rebounds after ERCOT conditionally clears 3.2 GW (September 16, 2026): conditional base load for Colchis 1 GW and Stingray 100 MW; conditional studied load for Apollo 900, Mikeska 500, McLennan 500, and Stingray II 200; the $10 million Colorado City pledge; Page - \"Being a good neighbor means showing up for the issues that matter most\"", url: "https://www.stocktwits.com/news-articles/markets/equity/cifr-stock-snaps-2-day-slide-after-ercot-conditional-nod-for-2-major-data-center-projects-in-texas/cZtYZOQRBPB" },
  { id: 46, label: "CoinCentral - Cipher Digital stock jumps 14% as Texas data centers secure power approval (September 16, 2026): 807 MW operational - Barber Lake 300, Black Pearl 300, Odessa 207", url: "https://coincentral.com/cipher-digital-cifr-stock-jumps-14-as-texas-data-centers-secure-power-approval" },
  { id: 47, label: "Yahoo News / KLST - What is the Colchis site? Cipher Digital briefs commissioners (September 22, 2026): Tom Green County, off US 67 northeast of San Angelo; 300-plus acres owned with options to 600; no abatement requested; Bratcher - \"you won't be able to hear this data center from the property line\"", url: "https://www.yahoo.com/news/us/articles/colchis-cipher-digital-briefs-commissioners-201328943.html" },
  { id: 48, label: "San Angelo LIVE - Red Creek power substation one of a kind (September 23, 2026): AEP's 345-kV station; Cipher's $17 million interconnection fee; construction from the first quarter of 2027; \"regulatory limbo pending Governor Abbott's large-load audit\"", url: "https://sanangelolive.com/news/business/2026-09-23/red-creek-power-substation-one-kind" },
  { id: 49, label: "GlobeNewswire - Cipher Digital expands Barber Lake lease term to 20 years, increasing revenue to over $9 billion (September 25, 2026): a Fluidstack amendment and a binding ten-year follow-on with an unnamed \"leading AI lab\"; data halls in the fourth quarter of 2026 and first of 2027", url: "https://www.globenewswire.com/news-release/2026/09/25/3369064/0/en/cipher-digital-expands-barber-lake-lease-term-to-20-years-increasing-revenue-over-9-billion.html" },
  { id: 50, label: "Texas Legislature Online - SB 1751 witness list, Senate Business & Commerce, March 28, 2023: no Cipher witness; Riot and US Bitcoin against; the Texas Blockchain Council on", url: "https://capitol.texas.gov/tlodocs/88R/witlistmtg/html/C5102023032808301.HTM" },
  { id: 51, label: "Blockspace - Bitcoin hashrate drops 8% as U.S. miners curtail during Winter Storm Fern (January 2026): the industry-wide curtailment across ERCOT; no company figures", url: "https://blockspace.media/insight/bitcoin-hashrate-drops-8-as-us-miners-curtail-during-winter-storm-fern/" },
];

// The Texas portfolio, for the sites figure: megawatts by site and what
// each is doing, as of September 2026. Gross MW where the company
// reports gross; "conditional" is ERCOT's Batch Zero designation.
export interface CipherSite {
  name: string;
  county: string;
  mw: number;
  use: "mining" | "ai" | "conditional";
  note: string;
}

export const cipherSites: CipherSite[] = [
  { name: "Odessa", county: "Ector", mw: 207, use: "mining", note: "Luminant PPA to July 2027 · conversion \"interest\"" },
  { name: "Black Pearl", county: "Winkler", mw: 300, use: "ai", note: "AWS · 15 yr · ~$5.5B · rent from Aug 2026" },
  { name: "Barber Lake", county: "Mitchell", mw: 300, use: "ai", note: "Fluidstack + AI lab · 20 yr · >$9B · Google backstop" },
  { name: "Stingray", county: "Andrews", mw: 100, use: "ai", note: "AWS · conditional base load · rent 2027" },
  { name: "Colchis", county: "Tom Green", mw: 1000, use: "conditional", note: "conditional base load · AEP Red Creek · 2028" },
  { name: "Apollo", county: "near San Antonio", mw: 900, use: "conditional", note: "conditional studied load · option" },
  { name: "McLennan", county: "Riesel", mw: 500, use: "conditional", note: "conditional studied load" },
  { name: "Mikeska", county: "West Texas", mw: 500, use: "conditional", note: "conditional studied load" },
];

export type CipherTimelineKind = "bitfury" | "odessa" | "hyperscaler" | "texas" | "watch";

// The arc: the Bitfury child → the Odessa contract → the hyperscalers
// → the state and the counties → the audit.
export interface CipherEvent {
  date: string; // ISO
  dateLabel: string;
  title: string;
  detail: string;
  kind: CipherTimelineKind;
  sourceIds: number[];
}

export const cipherTimeline: CipherEvent[] = [
  {
    date: "2021-08-27",
    dateLabel: "March → August 2021",
    title: "Bitfury's child goes public with Bitfury holding 83%",
    detail:
      "Cipher Mining Technologies, formed out of the Amsterdam mining-hardware company Bitfury, announces a merger with Good Works Acquisition Corp. on March 5, 2021 at a $2 billion enterprise value and $595 million of expected proceeds. The combination closes August 27 and CIFR lists on Nasdaq with Tyler Page as chief executive, a New York headquarters, no operating mine, and Bitfury holding about 83% of the stock - a \"controlled company\" in the filings' words. The day before the close it signs a seven-year master services agreement with its parent that includes a Bitfury non-compete in U.S. mining. The eleven-month loss for 2021 is $72.2 million.",
    kind: "bitfury",
    sourceIds: [1, 2, 3, 4],
  },
  {
    date: "2022-11-29",
    dateLabel: "February → November 2022",
    title: "Alborz, Bear, Chief, and Odessa: four Texas mines and one 2.7-cent contract",
    detail:
      "The first machines hash in February 2022 at Alborz, a 40-megawatt site near Happy in the Panhandle run entirely off a wind farm through a joint venture with WindHQ, on a five-year contract at 2.73 cents - \"an average price of power of roughly $17 per megawatt-hour,\" Page says. Bear and Chief follow near Andrews in October. On November 29 Odessa, 207 megawatts in Ector County on a fixed-price contract with Luminant at about 2.7 cents, begins mining \"just 10 months after we broke ground,\" with a contract the company values at $78.9 million and describes as giving it the flexibility \"to either mine bitcoin or resell power.\" Eleven days earlier Luminant had sued it in Dallas County over $6.7 million of payments.",
    kind: "odessa",
    sourceIds: [4, 7, 6],
  },
  {
    date: "2023-08-23",
    dateLabel: "March → December 2023",
    title: "The power is worth more than the hashrate, and the parent starts selling",
    detail:
      "The 2022 numbers show what the contract is: $3.0 million of mining revenue against $5.06 million from the \"reduction of scheduled power\" - the company earned more in its first year by not running Odessa than by running it. The Luminant suit settles on August 23, 2023: the notice Cipher must give before curtailing drops from two hours to at most ten minutes, and the Odessa lease is extended through July 2027. In November Bitfury sells ten million shares at $2.95, the first step down from 83%, and Cipher buys the Black Pearl site in Winkler County, at least fifty acres with ERCOT approval for 300 megawatts, for about 2.4 million shares. Revenue for 2023 is $126.8 million, power sales $9.9 million, the net loss $25.8 million.",
    kind: "odessa",
    sourceIds: [5, 8, 9, 10, 11],
  },
  {
    date: "2024-09-24",
    dateLabel: "August → September 2024",
    title: "Barber Lake: a substation bought with hyperscalers already calling",
    detail:
      "On September 24, 2024 Cipher closes on Barber Lake, 250 acres with an energized substation at Colorado City in Mitchell County, for $67.5 million in cash and $3 a megawatt-hour for five years after energization. It is bought as a 300-megawatt mine and pitched, the same day, as something else: \"Large sites with these characteristics are extremely rare, and we have already received interest in the site from multiple hyperscalers.\" The same month Bitfury completes a distribution of shares to its own staff that takes it toward 15%. The company ends 2024 with $151.3 million of revenue, a $44.6 million loss, 13.5 exahash, and a 2.8-gigawatt pipeline that includes options on three 500-megawatt sites in McLennan County, West Texas, and East Texas. Page's compensation for the year is $17.3 million.",
    kind: "hyperscaler",
    sourceIds: [13, 14, 15, 16, 18],
  },
  {
    date: "2025-11-20",
    dateLabel: "September → November 2025",
    title: "Fluidstack, Google, and Amazon: $8.5 billion in eight weeks",
    detail:
      "On September 25, 2025 Cipher leases 168 megawatts of IT load at Barber Lake to Fluidstack for ten years, about $3.0 billion, with Google backstopping $1.4 billion of the tenant's obligations and taking warrants for about 5.4% of the company; five days later it sells $1.3 billion of zero-coupon convertible notes. On November 3 it announces a fifteen-year, 300-megawatt lease of Black Pearl - a site that was hashing at 10 exahash a month earlier - to Amazon Web Services for about $5.5 billion, and a 1-gigawatt joint venture called Colchis with a direct AEP interconnection; the stock rises 19%. On November 20 Fluidstack takes the rest of Barber Lake, another $830 million with Google's backstop raised to $1.73 billion. Page on why hyperscalers came: they \"would turn to Cipher and to non-traditional areas in Texas.\"",
    kind: "hyperscaler",
    sourceIds: [19, 20, 21, 23, 24],
  },
  {
    date: "2026-02-24",
    dateLabel: "January → February 2026",
    title: "The council's founder joins, the mines are sold, and the name loses a word",
    detail:
      "On January 6, 2026 Cipher hires Lee Bratcher, the founder and outgoing president of the Texas Blockchain Council, as head of policy and government affairs, to \"represent Cipher in its ERCOT membership.\" In February it sells $2.0 billion of 6.125% notes to finish Black Pearl, stops mining there, sells its share of the three wind-farm mines to Canaan for $39.75 million in Canaan stock, and on February 20 amends its charter to become Cipher Digital Inc. The 2025 results four days later: revenue $223.9 million, a net loss of $822.2 million, long-term debt of $2.71 billion, and a fourth-quarter miss that sends the shares down with 19% of the float sold short. The 10-K reports 66 employees, a New York headquarters, no material litigation, and options exercised on McLennan, Mikeska, and Milsing at 500 megawatts each.",
    kind: "texas",
    sourceIds: [25, 26, 28, 27, 29, 30, 31],
  },
  {
    date: "2026-06-08",
    dateLabel: "April → June 2026",
    title: "A third tenant that turns out to be Amazon again, and a county that learned from the paper",
    detail:
      "In May Cipher reports a third lease with an unnamed \"investment-grade hyperscale tenant\" and a $114.3 million first-quarter loss; Page: \"2026 is the year of execution.\" In June offering documents for $810 million of notes name the tenant - Amazon Data Services, at Stingray near Andrews, 70 megawatts of IT load for fifteen years with an Amazon.com guarantee. On May 27 the Waco Bridge reports that the McLennan site is about 300 acres at Riesel, bought in October 2025 for up to 500 megawatts, and that a county commissioner rates the company's transparency \"not very good right now.\" The 2026 proxy shows Page at $15.0 million for 2025 and Bitfury's affiliates at 15.1%.",
    kind: "texas",
    sourceIds: [33, 35, 36, 34, 32],
  },
  {
    date: "2026-08-04",
    dateLabel: "August 2026",
    title: "Black Pearl delivers early, the Governor pauses the queue, and Odessa is up for conversion",
    detail:
      "On August 3 the Governor's directive halts ERCOT's Batch Zero pending verification. On August 4 Cipher reports the second quarter: $24.8 million of revenue, a $267.5 million loss, $5.4 billion of long-term debt, about 646 bitcoin left from 1,433 at year-end, and the first Black Pearl capacity delivered to Amazon two months early with rent begun. It adds an option on Apollo, 900 megawatts near San Antonio. Odessa, at 11.6 exahash, is the last mine, and Page tells analysts he is \"encouraged by the level of interest we're seeing in conversion of Odessa to an HPC site,\" that the company does not \"anticipate additional capital investment\" in mining, and that on the Governor's audit \"Cipher is going to be at the front of it.\"",
    kind: "watch",
    sourceIds: [37, 38, 41, 39, 40],
  },
  {
    date: "2026-09-25",
    dateLabel: "September 2026",
    title: "3.2 gigawatts conditionally classed, a water fund, and a twenty-year lease",
    detail:
      "ERCOT's conditional Batch Zero designations arrive in the second week of September: base load for Colchis's 1 gigawatt and Stingray's 100 megawatts, studied load for Apollo, McLennan, Mikeska, and a second Stingray phase - 3.2 gigawatts in all, on top of the 807 operating at Barber Lake, Black Pearl, and Odessa. The shares rise 14%. The same week Cipher, Fluidstack, and Anthropic put $10 million into a fund to fix Colorado City's water system after a July pump failure; Bratcher briefs Tom Green County's commissioners on Colchis, 300 acres with options to 600 and a $17 million AEP interconnection fee, promising \"you won't be able to hear this data center from the property line\" and asking for no abatement. On September 25 the Barber Lake lease is extended to twenty years with a binding follow-on from an unnamed AI lab, taking the site's contracted revenue past $9 billion.",
    kind: "watch",
    sourceIds: [43, 45, 46, 44, 47, 48, 49],
  },
];
