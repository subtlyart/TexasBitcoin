// Texas Bitcoin mining map — the dataset.
//
// PHILOSOPHY: Same as the events directory — verified entries only, every
// datable claim sourced. Capacity figures are the operator's own published
// numbers (or reputable trade press) and carry the caveat in `mwLabel`.
// Sites that pivoted to AI/HPC stay on the map: the arc from ASIC to GPU is
// part of the Texas story, not a departure from it.
//
// Dataset verified July 2026. Re-verify quarterly with the cornerstone.

export const MAP_LAST_VERIFIED = "August 30, 2026";

export type SiteStatus = "mining" | "hybrid" | "ai" | "announced" | "historic";

export const STATUS_LABELS: Record<SiteStatus, string> = {
  mining: "Bitcoin mining",
  hybrid: "Mining + AI/HPC pivot underway",
  ai: "AI/HPC data center",
  announced: "Announced / in development",
  historic: "Historic site",
};

export interface MiningSource {
  id: number;
  label: string;
  url: string;
}

export interface MiningSite {
  id: string;
  name: string;
  operator: string;
  location: string; // "Town · County"
  lat: number;
  lng: number;
  /** Headline capacity used for pin sizing (MW). */
  mw: number;
  /** Human caveat — what the number actually is. */
  mwLabel: string;
  /**
   * Year the site first came online — for a mine, the year it first mined
   * Bitcoin; for an AI-native or announced campus, the year it enters (or is
   * expected to enter) service. Drives the timeline scrubber.
   */
  yearOnline: number;
  status: SiteStatus;
  /** True for campuses purpose-built for AI that never mined Bitcoin. */
  aiNative?: boolean;
  /** Year the AI/HPC pivot began, for hybrid/ai sites. */
  pivotYear?: number;
  story: string;
  sourceIds: number[];
}

// Numbered, primary-first. Rendered on-page; every site points here.
export const miningSources: MiningSource[] = [
  { id: 1, label: "Riot Platforms — Rockdale facility (700 MW developed)", url: "https://www.riotplatforms.com/bitcoin-mining/rockdale/" },
  { id: 2, label: "Riot Platforms — January 2025 Production and Operations Update (SEC exhibit): Corsicana 400 MW mining, 1 GW approved, AI/HPC evaluation", url: "https://www.sec.gov/Archives/edgar/data/1167419/000155837025000282/riot-20250121xex99d1.htm" },
  { id: 3, label: "Fortune — Inside Whinstone/Riot's Rockdale mine (March 2022)", url: "https://fortune.com/2022/03/08/crypto-bitcoin-mining-texas-whinstone-riot-chad-harris/" },
  { id: 4, label: "CNBC — Bitcoin mining giants Bitdeer, Riot in Rockdale, Texas (October 2021)", url: "https://www.cnbc.com/2021/10/31/bitcoin-mining-giants-bitdeer-riot-blockchain-in-rockdale-texas.html" },
  { id: 5, label: "Global Energy Monitor — Bitdeer Rockdale facility profile", url: "https://www.gem.wiki/BitDeer_Douglas_County_facility" },
  { id: 6, label: "MARA (GlobeNewswire) — Definitive agreement to acquire two mining sites for $178.6M, 390 MW total (December 2023)", url: "https://www.globenewswire.com/news-release/2023/12/19/2798469/0/en/Marathon-Digital-Holdings-Enters-Definitive-Agreement-To-Acquire-Multiple-Bitcoin-Mining-Sites-for-179-Million.html" },
  { id: 7, label: "Blockspace — Nine Texas residents sue MARA, expanding Granbury noise fight (2026)", url: "https://blockspace.media/insight/nine-texas-residents-sue-mara-expanding-granbury-bitcoin-mine-noise-fight/" },
  { id: 8, label: "Earthjustice — Granbury residents sue local Bitcoin mine over noise (October 2024)", url: "https://earthjustice.org/press/2024/granbury-residents-sue-local-bitcoin-mine-over-health-threatening-noise-pollution" },
  { id: 9, label: "Cipher Mining — business update (SEC exhibit): Odessa 207 MW", url: "https://www.sec.gov/Archives/edgar/data/1819989/000181998925000034/exh992ciphermining_busin.htm" },
  { id: 10, label: "Data Center Dynamics — Cipher launches Black Pearl Bitcoin mining site in Winkler County (2025)", url: "https://www.datacenterdynamics.com/en/news/cipher-mining-launches-150mw-black-pearl-bitcoin-mining-site-in-texas/" },
  { id: 11, label: "The Block — Galaxy delivers 133 MW of critical IT load to CoreWeave as Helios turns AI hub (July 2026)", url: "https://www.theblock.co/post/407396/galaxy-delivers-133-mw-of-critical-it-load-to-coreweave-as-helios-bitcoin-mine-turns-ai-hub" },
  { id: 12, label: "Cleanview — Hut 8 King Mountain data center, Upton County (280 MW, operational 2022)", url: "https://cleanview.co/data-centers/texas/2806/hut-8-king-mountain-crypto-mining" },
  { id: 13, label: "Core Scientific — $1.2B CoreWeave expansion at Denton brings critical IT load to ~260 MW (February 2025)", url: "https://investors.corescientific.com/news-events/press-releases/detail/110/core-scientific-and-coreweave-announce-1-2-billion-expansion-at-denton-tx-site" },
  { id: 14, label: "CoStar — Core Scientific converts Denton Bitcoin campus to $6.1B data center hub", url: "https://www.costar.com/article/394849102/core-scientific-converts-texas-bitcoin-campus-to-61-billion-data-center-hub-as-ai-industry-surges" },
  { id: 15, label: "The Block — Peter Thiel-backed Layer1 begins mining at its West Texas facility (February 2020)", url: "https://www.theblock.co/post/56337/peter-thiel-texas-bitcoin-mine-goes-live" },
  { id: 16, label: "Forbes — Why is this Peter Thiel-backed startup mining Bitcoin in West Texas? (February 2020)", url: "https://www.forbes.com/sites/christopherhelman/2020/02/28/why-is-this-peter-thiel-backed-startup-mining-bitcoin-in-west-texas/" },
  { id: 17, label: "CNBC — Texas paid Riot $31.7 million to shut down during August 2023 heat wave", url: "https://www.cnbc.com/2023/09/06/texas-paid-bitcoin-miner-riot-31point7-million-to-shut-down-in-august.html" },
  { id: 18, label: "Baxtel — MARA Granbury, TX data center profile (~300 MW)", url: "https://baxtel.com/data-center/marathon-digital-granbury-tx" },
  { id: 19, label: "CoinGeek — ERCOT's large-load interconnection queue reaches ~226 GW, dominated by AI data centers (2026)", url: "https://coingeek.com/ercots-queue-creates-challenges-for-texas-btc-miners/" },
  { id: 20, label: "The Block — Texas orders an audit of all data centers in ERCOT's interconnection queue; 'Batch Zero' paused, queue ~474 GW, ~90% data centers (August 4, 2026)", url: "https://www.theblock.co/news/ecosystems/2026-08-04-bernstein-texas-data-center-audit-410545" },
  { id: 21, label: "Hut 8 — Fully Commercializes 1 GW Beacon Point AI Data Center Campus (Nueces County) with two 15-year, 352 MW leases; $19.6B base-term value (2026)", url: "https://www.prnewswire.com/news-releases/hut-8-fully-commercializes-1-gw-beacon-point-ai-data-center-campus-with-second-352-mw-it-lease-bringing-campus-level-base-term-contract-value-to-19-6-billion-302829514.html" },
  { id: 22, label: "MARA (via StockTitan) — 8-K: agreement with HIF to acquire a Matagorda County powered-land site, up to 2 GW, milestone payments up to $600M (July 2026)", url: "https://www.stocktitan.net/news/MARA/mara-signs-agreement-with-hif-to-acquire-strategic-powered-land-site-nqvuby8e4d46.html" },
  { id: 23, label: "Cipher Mining — Form 8-K: Barber Lake (Mitchell County) 300 MW site leased to Fluidstack, ~$3B, Google backstop (2025)", url: "https://www.sec.gov/Archives/edgar/data/1819989/000095010325012168/dp234624_8k.htm" },
  { id: 24, label: "Bitdeer Technologies Group — September 2025 Production and Operations Update (AI/HPC conversion pipeline, including the Rockdale campus)", url: "https://ir.bitdeer.com/news-releases/news-release-details/bitdeer-announces-september-2025-production-and-operations" },
  { id: 25, label: "Riot Platforms — Q2 2026 results (August 10, 2026): 20-year, 191 MW Rockdale data center lease with a leading frontier AI lab, $9.1B initial term (~$16.1B with extensions); AMD signed January 16, 2026 as first tenant, 50 MW contracted; 1,587 BTC mined in Q2", url: "https://www.riotplatforms.com/riot-platforms-reports-second-quarter-2026-financial-results-and-strategic-highlights/" },
  { id: 26, label: "Blockspace — Riot's full 1 GW Corsicana campus under a non-binding LOI to a single tenant; analysts (KBW) identify the Rockdale frontier-lab tenant as Anthropic (August 2026)", url: "https://blockspace.media/insight/riot-corsicana-loi-756mw-ai-data-center/" },
];

export const miningSites: MiningSite[] = [
  {
    id: "riot-rockdale",
    name: "Riot Rockdale (Whinstone)",
    operator: "Riot Platforms",
    location: "Rockdale · Milam County",
    lat: 30.655,
    lng: -97.001,
    mw: 700,
    mwLabel: "700 MW developed · 241 MW IT contracted",
    yearOnline: 2020,
    status: "hybrid",
    pivotYear: 2026,
    story:
      "The flagship, now living its own third act. Built by Whinstone on the grounds of Alcoa's shuttered aluminum smelter, acquired by Riot in May 2021 for roughly $651 million, and expanded to 700 MW — the largest single Bitcoin mine in North America. In 2026 the AI turn reached it: AMD signed as first data-center tenant in January (50 MW contracted), and on August 10 Riot announced a 20-year, 191 MW lease with a leading frontier AI lab worth $9.1 billion over the initial term. The mine still hashes while the campus converts.",
    sourceIds: [1, 3, 25],
  },
  {
    id: "bitdeer-rockdale",
    name: "Bitdeer Rockdale",
    operator: "Bitdeer",
    location: "Rockdale · Milam County",
    lat: 30.61,
    lng: -97.065,
    mw: 170,
    mwLabel: "~170 MW operating (reported)",
    yearOnline: 2019,
    status: "mining",
    story:
      "Next door to Riot on the same former Alcoa land — the campus where Bitmain first broke ground in 2019, making Rockdale the town where industrial-scale Texas mining began.",
    sourceIds: [4, 5],
  },
  {
    id: "riot-corsicana",
    name: "Riot Corsicana",
    operator: "Riot Platforms",
    location: "Corsicana · Navarro County",
    lat: 32.095,
    lng: -96.468,
    mw: 400,
    mwLabel: "400 MW mining · 1 GW approved",
    yearOnline: 2024,
    status: "hybrid",
    pivotYear: 2025,
    story:
      "Riot's second Texas gigasite, with a full gigawatt approved by ERCOT. 400 MW mines Bitcoin today; in 2025 Riot halted further mining expansion to evaluate AI/HPC uses for the remaining 600 MW, and by August 2026 the entire campus was reported under a non-binding letter of intent to a single AI tenant.",
    sourceIds: [2, 26],
  },
  {
    id: "mara-granbury",
    name: "MARA Granbury",
    operator: "MARA Holdings",
    location: "Granbury · Hood County",
    lat: 32.442,
    lng: -97.794,
    mw: 300,
    mwLabel: "~300 MW behind-the-meter",
    yearOnline: 2022,
    status: "mining",
    story:
      "Runs behind-the-meter at the 1,115 MW Wolf Hollow gas plant. MARA bought it in January 2024 in a $178.6 million two-site deal — and its cooling-fan noise made Granbury the center of the state's hardest local fight over mining.",
    sourceIds: [6, 7, 8, 18],
  },
  {
    id: "corz-denton",
    name: "Core Scientific Denton",
    operator: "Core Scientific / CoreWeave",
    location: "Denton · Denton County",
    lat: 33.215,
    lng: -97.13,
    mw: 260,
    mwLabel: "~260 MW critical IT (AI conversion)",
    yearOnline: 2022,
    status: "ai",
    pivotYear: 2024,
    story:
      "A city-partnered Bitcoin campus that became the template for the AI pivot: a $6.1 billion conversion to high-performance computing for CoreWeave, which then agreed to acquire Core Scientific outright.",
    sourceIds: [13, 14],
  },
  {
    id: "cipher-odessa",
    name: "Cipher Odessa",
    operator: "Cipher Mining",
    location: "Odessa · Ector County",
    lat: 31.845,
    lng: -102.367,
    mw: 207,
    mwLabel: "207 MW",
    yearOnline: 2022,
    status: "mining",
    story:
      "Cipher's Permian Basin workhorse — 207 MW in the middle of oil-and-gas country, where drilling rigs and hashboards share the same skyline.",
    sourceIds: [9],
  },
  {
    id: "cipher-black-pearl",
    name: "Cipher Black Pearl",
    operator: "Cipher Mining",
    location: "Wink · Winkler County",
    lat: 31.751,
    lng: -103.16,
    mw: 300,
    mwLabel: "300 MW",
    yearOnline: 2025,
    status: "hybrid",
    pivotYear: 2025,
    story:
      "Came online mining Bitcoin in 2025 and almost immediately became something bigger: the site is now leased to Amazon for AI infrastructure, with mining winding down as GPUs move in.",
    sourceIds: [10],
  },
  {
    id: "galaxy-helios",
    name: "Galaxy Helios",
    operator: "Galaxy Digital",
    location: "Dickens County",
    lat: 33.616,
    lng: -100.837,
    mw: 800,
    mwLabel: "800 MW approved · 133 MW live for AI",
    yearOnline: 2022,
    status: "ai",
    pivotYear: 2023,
    story:
      "Built as Argo's flagship mine, bought by Galaxy for $65 million in December 2022 out of Argo's distress, and reborn as an AI campus: on July 6, 2026 Galaxy delivered its first 133 MW to CoreWeave under a 15-year, 526 MW lease.",
    sourceIds: [11],
  },
  {
    id: "hut8-king-mountain",
    name: "Hut 8 King Mountain",
    operator: "Hut 8",
    location: "McCamey · Upton County",
    lat: 31.13,
    lng: -102.24,
    mw: 280,
    mwLabel: "280 MW",
    yearOnline: 2022,
    status: "mining",
    story:
      "280 MW co-located with the King Mountain wind farm on a West Texas mesa — proof of the Texas thesis that miners are buyers of last resort for renewable power in the middle of nowhere.",
    sourceIds: [12],
  },
  {
    id: "layer1-ward",
    name: "Layer1 (historic)",
    operator: "Layer1 Technologies",
    location: "Ward County",
    lat: 31.53,
    lng: -103.1,
    mw: 100,
    mwLabel: "100 MW substation (2020)",
    yearOnline: 2020,
    status: "historic",
    story:
      "The Peter Thiel-backed pioneer. In February 2020 — before Riot, before the China ban — Layer1 was mining in liquid-cooled containers off its own 100 MW West Texas substation and selling power back to the grid when prices spiked. The playbook everyone else later ran.",
    sourceIds: [15, 16],
  },
  // --- The AI frontier: miner-built campuses that never mined Bitcoin -------
  // Kept distinct (aiNative / announced) so they read as the next step of the
  // Texas arc, not as operating mines. Excluded from the developed-capacity
  // headline below; capacity here is contracted/approved, not yet built out.
  {
    id: "hut8-beacon-point",
    name: "Hut 8 Beacon Point",
    operator: "Hut 8",
    location: "Nueces County",
    lat: 27.78,
    lng: -97.66,
    mw: 1000,
    mwLabel: "1 GW campus · 704 MW leased",
    yearOnline: 2026,
    status: "ai",
    aiNative: true,
    story:
      "Not a converted mine but Hut 8's purpose-built answer to the AI turn. The 1 GW campus is fully contracted across two 15-year, 352 MW leases — base-term value $19.6 billion — to a single high-grade tenant reported to be Nvidia, built to Nvidia's DSX reference design on interconnection secured with AEP Texas. The clearest sign that a Texas grid connection is now the prize.",
    sourceIds: [21],
  },
  {
    id: "cipher-barber-lake",
    name: "Cipher Barber Lake",
    operator: "Cipher Mining",
    location: "Colorado City · Mitchell County",
    lat: 32.41,
    lng: -100.87,
    mw: 300,
    mwLabel: "300 MW · leased to Fluidstack",
    yearOnline: 2026,
    status: "ai",
    aiNative: true,
    story:
      "Cipher built Barber Lake straight for AI. The entire 300 MW site is leased to Fluidstack under a roughly $3 billion, ten-year deal that Google agreed to backstop, with power slated to start flowing in October 2026. It never mined a block — the West Texas mining playbook, applied to GPUs.",
    sourceIds: [23],
  },
  {
    id: "mara-matagorda",
    name: "MARA Matagorda",
    operator: "MARA Holdings",
    location: "Matagorda County",
    lat: 28.72,
    lng: -96.0,
    mw: 2000,
    mwLabel: "up to 2 GW · phased 2027–28",
    yearOnline: 2027,
    status: "announced",
    story:
      "MARA's coastal megasite-in-waiting. In July 2026 it signed to acquire a 1,200-acre Matagorda County site from HIF carrying up to 2 GW of power, paid in milestones — land, permits, and grid authorization among them — for a campus blending high-performance computing with flexible Bitcoin mining. Initial power is targeted for late 2027, making it exactly the kind of speculative gigawatt the August 2026 queue audit exists to test.",
    sourceIds: [22],
  },
];

// The AI-frontier campuses (aiNative or announced) are mapped and told, but
// they're not operating mines — keep them out of the developed/approved
// headlines so those figures keep describing the working mining backbone.
function isOperatingMine(s: MiningSite): boolean {
  return s.status !== "historic" && s.status !== "announced" && !s.aiNative;
}

/** MW developed/operating today across operating mines (uses live AI-load for converted sites). */
export const developedMw = miningSites.reduce((sum, s) => {
  if (s.id === "galaxy-helios") return sum + 133; // delivered, not approved
  if (!isOperatingMine(s)) return sum;
  return sum + s.mw;
}, 0);

/** MW including ERCOT-approved expansion headroom at operating tracked sites. */
export const approvedMw = miningSites.reduce((sum, s) => {
  if (s.id === "riot-corsicana") return sum + 1000;
  if (!isOperatingMine(s)) return sum;
  return sum + s.mw;
}, 0);

export const YEAR_MIN = 2019;
// 2027 reaches the announced coastal megasite (MARA Matagorda's first power);
// the map defaults to the present and treats the final year as the horizon.
export const YEAR_MAX = 2027;
