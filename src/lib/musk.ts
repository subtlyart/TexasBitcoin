// Elon Musk, Tesla, Bitcoin, and energy — the sourced dataset.
//
// PHILOSOPHY: same standard as the rest of the site. Every dollar figure and
// corporate date is drawn from Tesla's own SEC filings (10-K / 10-Q); tweets,
// earnings-call lines, and energy science are attributed to primary bodies
// (Cambridge CCAF, IEA, EIA, DOE) or the reputable outlet that reported them.
// The energy debate is presented with its honest counterweight intact.
//
// Verified August 2026. Live figures (the Cambridge index, Tesla's mark-to-
// market value) move; re-verify with the quarterly cornerstone pass.

export const MUSK_LAST_VERIFIED = "August 19, 2026";

export interface MuskSource {
  id: number;
  label: string;
  url: string;
}

// Numbered, primary-first: Tesla's SEC filings, then Musk/Tesla statements as
// reported, then the energy science, the AI/data-center record, and the grid.
export const muskSources: MuskSource[] = [
  {
    id: 1,
    label:
      "Tesla, Inc. — Form 10-K for FY2020 (SEC, filed Feb 8, 2021): the $1.5B Bitcoin purchase, the 'alternative reserve asset' policy, and the intent to accept Bitcoin for products",
    url: "https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.htm",
  },
  {
    id: 2,
    label:
      "Tesla, Inc. — Form 10-Q, Q1 2021 (SEC, filed Apr 28, 2021): began accepting Bitcoin; $272M proceeds and $128M gain on the first sale; $27M impairment",
    url: "https://www.sec.gov/Archives/edgar/data/1318605/000095017021000046/tsla-20210331.htm",
  },
  {
    id: 3,
    label:
      "CoinDesk — Elon Musk's Tesla sold Bitcoin in Q1 for proceeds of $272M; Musk says the sale was 'essentially to prove liquidity' (Apr 26, 2021)",
    url: "https://www.coindesk.com/business/2021/04/26/elon-musks-tesla-sold-bitcoin-in-q1-for-proceeds-of-272m",
  },
  {
    id: 4,
    label:
      "Forbes — Tesla will stop accepting Bitcoin as payment over environmental concerns; full text of Musk's May 12, 2021 statement (coal, fossil fuels)",
    url: "https://www.forbes.com/sites/joewalsh/2021/05/12/tesla-will-stop-accepting-bitcoin-as-payment-due-to-environmental-worries-musk-says/",
  },
  {
    id: 5,
    label:
      "CNBC — Musk: Tesla will accept Bitcoin again when miners confirm '~50% clean energy usage... with positive future trend' (Jun 13, 2021)",
    url: "https://www.cnbc.com/2021/06/13/musk-tesla-will-accept-bitcoin-when-miners-use-clean-energy.html",
  },
  {
    id: 6,
    label:
      "Tesla, Inc. — Form 10-Q, Q2 2022 (SEC, filed Jul 25, 2022): converted ~75% of Bitcoin to fiat for $936M; $218M carrying value remaining",
    url: "https://www.sec.gov/Archives/edgar/data/1318605/000095017022012936/tsla-20220630.htm",
  },
  {
    id: 7,
    label:
      "Tesla, Inc. — Form 10-Q, Q2 2026 (SEC, filed Jul 23, 2026): 11,509 Bitcoin at $386M acquisition cost, marked to $674M fair value at June 30, 2026",
    url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049270/tsla-20260630.htm",
  },
  {
    id: 8,
    label:
      "Tesla, Inc. — Form 10-K for FY2024 (SEC, filed Jan 30, 2025): early-adopted the crypto fair-value standard (ASU 2023-08) effective Jan 1, 2024; $589M of net unrealized Bitcoin gains recognized in 2024",
    url: "https://www.sec.gov/Archives/edgar/data/1318605/000162828025003063/tsla-20241231.htm",
  },
  {
    id: 9,
    label:
      "Tesla Q2 2022 earnings call transcript (The Motley Fool, Jul 20, 2022): Musk on selling Bitcoin to 'maximize our cash position' amid China lockdowns — 'not... some verdict on bitcoin'; kept its Dogecoin",
    url: "https://www.fool.com/earnings/call-transcripts/2022/07/21/tesla-tsla-q2-2022-earnings-call-transcript/",
  },
  {
    id: 10,
    label:
      "CoinDesk — At 'The B Word,' Musk says 'I do own Bitcoin, Tesla owns Bitcoin, SpaceX owns Bitcoin'; discloses SpaceX's holdings (Jul 21, 2021)",
    url: "https://www.coindesk.com/markets/2021/07/21/elon-musk-says-spacex-holds-bitcoin-at-b-word-conference",
  },
  {
    id: 11,
    label:
      "Cambridge Bitcoin Electricity Consumption Index (cbeci.org) — the live model run by the Cambridge Centre for Alternative Finance, Cambridge Judge Business School",
    url: "https://ccaf.io/cbnsi/cbeci",
  },
  {
    id: 12,
    label:
      "University of Cambridge Judge Business School — Cambridge Digital Mining Industry Report (Apr 28, 2025): 52.4% sustainable-energy mix (up from 37.6% in 2022), coal down 36.6%→8.9%, ~138 TWh/yr, ~0.5% of global electricity, ~39.8 MtCO2e",
    url: "https://www.jbs.cam.ac.uk/2025/cambridge-study-sustainable-energy-rising-in-bitcoin-mining/",
  },
  {
    id: 13,
    label:
      "Fortune — Bitcoin falls as Musk shares a Cambridge index chart and calls Bitcoin's energy usage trend 'insane' (May 13, 2021)",
    url: "https://fortune.com/2021/05/13/bitcoin-price-falls-elon-musk-energy-use-insane",
  },
  {
    id: 14,
    label:
      "Forbes — Elon Musk and Michael Saylor lead miners to form the Bitcoin Mining Council (May 24, 2021)",
    url: "https://www.forbes.com/sites/ninabambysheva/2021/05/24/elon-musk-and-michael-saylor-lead-effort-by-bitcoin-miners-to-address-environmental-concerns/",
  },
  {
    id: 15,
    label:
      "Digiconomist — Bitcoin Energy Consumption Index (Alex de Vries): higher-end estimates of Bitcoin's carbon footprint (~98 Mt CO2/yr) and e-waste",
    url: "https://digiconomist.net/bitcoin-energy-consumption/",
  },
  {
    id: 16,
    label:
      "United Nations University — UN study on Bitcoin mining's water and land footprint (Chamanara et al., Earth's Future, 2023): ~1.65 km3 water, >1,870 km2 land, 2020–2021",
    url: "https://unu.edu/press-release/un-study-reveals-hidden-environmental-impacts-bitcoin-carbon-not-only-harmful-product",
  },
  {
    id: 17,
    label:
      "U.S. Energy Information Administration — Tracking electricity consumption from U.S. cryptocurrency mining (Feb 1, 2024): estimated 0.6%–2.3% of U.S. electricity in 2023; 137 facilities identified",
    url: "https://www.eia.gov/todayinenergy/detail.php?id=61364",
  },
  {
    id: 18,
    label:
      "International Energy Agency — Energy and AI / Key Questions on Energy and AI (Apr 2025): global data-center electricity roughly doubles from 485 TWh (2025) to 950 TWh (2030), ~3% of world electricity",
    url: "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary",
  },
  {
    id: 19,
    label:
      "U.S. Department of Energy / Lawrence Berkeley National Laboratory — 2024 Report on U.S. Data Center Energy Use (Dec 20, 2024): 4.4% of U.S. electricity in 2023, rising to 6.7%–12% by 2028",
    url: "https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers",
  },
  {
    id: 20,
    label:
      "HPCwire — xAI's Colossus reaches 200,000 GPUs as Musk ramps up AI ambitions (May 13, 2025)",
    url: "https://www.hpcwire.com/2025/05/13/colossus-ai-hits-200000-gpus-as-musk-ramps-up-ai-ambitions/",
  },
  {
    id: 21,
    label:
      "Tom's Hardware — Colossus fully operational with 200,000 GPUs, backed by Tesla Megapack batteries; Phase 2 to draw ~300 MW",
    url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/musks-colossus-is-fully-operational-with-200-000-gpus-backed-by-tesla-batteries-phase-2-to-consume-300-mw-enough-to-power-300-000-homes",
  },
  {
    id: 22,
    label:
      "NAACP — NAACP sues xAI over illegal pollution from a data-center power plant; Clean Air Act claims over gas turbines near Memphis (Apr 14, 2026)",
    url: "https://naacp.org/articles/naacp-sues-xai-illegal-pollution-data-center-power-plant",
  },
  {
    id: 23,
    label:
      "CNN — Southern Environmental Law Center says thermal imaging shows xAI running dozens of gas turbines in Memphis; ~420 MW, thousands of tons of NOx (May 19, 2025)",
    url: "https://www.cnn.com/2025/05/19/climate/xai-musk-memphis-turbines-pollution",
  },
  {
    id: 24,
    label:
      "Utility Dive — ERCOT's large-load interconnection queue jumped almost 300% in a year to ~226 GW (Nov 2025), ~77% data centers",
    url: "https://www.utilitydive.com/news/ercots-large-load-queue-jumped-almost-300-last-year-official/808820/",
  },
  {
    id: 25,
    label:
      "Utility Dive — Texas Senate Bill 6 gives ERCOT authority to disconnect large loads during grid emergencies (signed Jun 21, 2025)",
    url: "https://www.utilitydive.com/news/texas-law-gives-grid-operator-power-to-disconnect-data-centers-during-crisi/751587/",
  },
  {
    id: 26,
    label:
      "CNBC — Tesla moves its headquarters from California to Texas (announced Oct 7, 2021)",
    url: "https://www.cnbc.com/2021/10/07/tesla-moves-its-headquarters-from-california-to-texas.html",
  },
  {
    id: 27,
    label:
      "Texas Standard — Tesla shareholders approve reincorporating the company from Delaware to Texas (Jun 13, 2024)",
    url: "https://www.texasstandard.org/stories/tesla-reincorporation-texas-delaware-musk-shareholders/",
  },
  {
    id: 28,
    label:
      "U.S. Energy Information Administration — Solar, storage and crypto: how large flexible loads are reshaping ERCOT (Today in Energy #63344): crypto mining up to ~2,600 MW, curtailing at peak",
    url: "https://www.eia.gov/todayinenergy/detail.php?id=63344",
  },
];

export type LedgerKind = "buy" | "sell" | "pause" | "rule" | "hold";

export interface LedgerEntry {
  date: string;
  dateLabel: string;
  title: string;
  detail: string;
  kind: LedgerKind;
  sourceIds: number[];
}

// Tesla's Bitcoin, move by move — every figure from the filings, every quote
// from the record. Rendered as the "Tesla's Bitcoin ledger" timeline.
export const teslaLedger: LedgerEntry[] = [
  {
    date: "2021-02-08",
    dateLabel: "Feb 8, 2021",
    title: "Tesla discloses a $1.5 billion Bitcoin bet",
    detail:
      "In its FY2020 annual report, Tesla reveals it invested $1.5 billion in Bitcoin under a new policy to hold 'alternative reserve assets,' and calls the holdings 'highly liquid.'",
    kind: "buy",
    sourceIds: [1],
  },
  {
    date: "2021-03-24",
    dateLabel: "Mar 24, 2021",
    title: "'You can now buy a Tesla with Bitcoin'",
    detail:
      "Tesla starts taking Bitcoin for vehicles in the U.S., with Musk saying the coins paid to Tesla will be kept as Bitcoin, not converted to dollars.",
    kind: "buy",
    sourceIds: [2],
  },
  {
    date: "2021-04-26",
    dateLabel: "Apr 26, 2021",
    title: "Sells 10% 'to prove liquidity'",
    detail:
      "Tesla sells about a tenth of its Bitcoin for $272 million in proceeds and a $128 million gain - a move Musk says was 'essentially to prove liquidity of Bitcoin as an alternative to holding cash.'",
    kind: "sell",
    sourceIds: [2, 3],
  },
  {
    date: "2021-05-12",
    dateLabel: "May 12, 2021",
    title: "Suspends Bitcoin payments over energy",
    detail:
      "Musk halts Bitcoin car payments, citing 'rapidly increasing use of fossil fuels for Bitcoin mining... especially coal.' The next day he shares a Cambridge energy-index chart and calls the trend 'insane.'",
    kind: "pause",
    sourceIds: [4, 13],
  },
  {
    date: "2021-06-13",
    dateLabel: "Jun 13, 2021",
    title: "Sets a clean-energy condition to resume",
    detail:
      "Musk says Tesla will take Bitcoin again once there is 'confirmation of reasonable (~50%) clean energy usage by miners with positive future trend.' As of 2026, it never has.",
    kind: "pause",
    sourceIds: [5],
  },
  {
    date: "2022-07-20",
    dateLabel: "Q2 2022",
    title: "Sells ~75% for $936 million",
    detail:
      "Tesla converts about 75% of its Bitcoin to fiat for $936 million, blaming uncertainty over China's COVID lockdowns and a need to 'maximize our cash position.' Musk calls it no 'verdict on Bitcoin'; Tesla keeps its Dogecoin.",
    kind: "sell",
    sourceIds: [6, 9],
  },
  {
    date: "2024-01-01",
    dateLabel: "Jan 1, 2024",
    title: "Starts marking Bitcoin to market",
    detail:
      "Tesla early-adopts new fair-value accounting, booking Bitcoin at market price instead of writing it down. The switch adds $589 million to 2024 income as Bitcoin climbs.",
    kind: "rule",
    sourceIds: [8],
  },
  {
    date: "2026-06-30",
    dateLabel: "Jun 30, 2026",
    title: "Still holds 11,509 BTC",
    detail:
      "Tesla's 11,509 Bitcoin, bought for $386 million, have sat unchanged since 2022, marked at $674 million at mid-2026. The company neither bought nor sold; it just lets the value float.",
    kind: "hold",
    sourceIds: [7],
  },
];
