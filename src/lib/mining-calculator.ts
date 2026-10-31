// Bitcoin mining profitability calculator — the model and its inputs.
//
// PHILOSOPHY: Same rules as every other page. The network assumptions below
// are dated, sourced, and editable constants — not a live API call. The site
// is static HTML that must read without JavaScript (see CONTENT-TEMPLATE.md),
// so the page ships a worked example baked from these numbers; the interactive
// calculator is progressive enhancement layered on top. Re-verify the network
// block quarterly with the cornerstone and bump NETWORK_AS_OF.
//
// The model is deliberately an *operating* estimate. It covers the revenue a
// machine earns from the block subsidy and the cost of the power it draws. It
// does NOT model transaction fees, cooling and immersion overhead, hosting or
// colocation margin, repairs, firmware/pool downtime beyond the uptime slider,
// hardware depreciation, financing, taxes, or the ERCOT demand-response and
// curtailment credits that dominate a real Texas miner's economics in a spike
// month (see /bitcoin-mining-ercot). Those are named on the page, not hidden.

export const NETWORK_AS_OF = "October 31, 2026";

/**
 * Network-wide assumptions. These are the numbers that turn one machine's
 * hashrate into a share of the daily issuance. They move constantly; the
 * calculator exposes every one of them as an editable field so a reader can
 * drop in the current value from mempool.space or any block explorer.
 */
export interface NetworkAssumptions {
  /** Spot BTC price in USD. */
  btcPrice: number;
  /** Total network hashrate in EH/s (exahash per second). */
  networkHashrateEh: number;
  /** Block subsidy in BTC. 3.125 since the April 20, 2024 halving. */
  blockSubsidyBtc: number;
  /** Average blocks per day (Bitcoin targets 144). */
  blocksPerDay: number;
}

export const DEFAULT_NETWORK: NetworkAssumptions = {
  btcPrice: 77_450,
  networkHashrateEh: 1_070,
  blockSubsidyBtc: 3.125,
  blocksPerDay: 144,
};

/**
 * Texas electricity reference points ($/kWh). Mining economics live or die on
 * this number, and Texas is the reason the industry moved here. Residential
 * rates are the retail meter; the "miner" rates are the single- and low-digit
 * cents an industrial flexible load contracts for in the ERCOT energy-only
 * market. Reference only — your PPA is your PPA.
 */
export interface RatePoint {
  label: string;
  rate: number;
  note: string;
}

export const TEXAS_RATES: RatePoint[] = [
  { label: "Industrial PPA (low)", rate: 0.03, note: "A competitive West Texas flexible-load power contract." },
  { label: "Industrial PPA (typical)", rate: 0.045, note: "A representative ERCOT large-load all-in energy rate." },
  { label: "Commercial", rate: 0.085, note: "ERCOT commercial average, grid-tied without a mining PPA." },
  { label: "Texas residential", rate: 0.15, note: "Residential retail — a home hobby miner's real cost." },
];

/**
 * ASIC presets. Specs are the manufacturer's published rated hashrate (TH/s)
 * and wall power (W) at stock — not overclocked, not immersion-tuned. A reader
 * can always choose "Custom" and type their own. Prices are rough street
 * figures for new units and age fast; they drive payback only, not profit.
 */
export interface MinerPreset {
  id: string;
  name: string;
  /** Rated hashrate in TH/s. */
  hashrateTh: number;
  /** Wall power draw in watts. */
  watts: number;
  /** Approximate new-unit street price in USD (for payback only). */
  priceUsd: number;
  /** Rated efficiency in J/TH (watts / hashrate), precomputed for display. */
  efficiency: number;
}

function withEfficiency(m: Omit<MinerPreset, "efficiency">): MinerPreset {
  return { ...m, efficiency: Math.round((m.watts / m.hashrateTh) * 10) / 10 };
}

export const MINER_PRESETS: MinerPreset[] = [
  withEfficiency({ id: "s21xp-hyd", name: "Bitmain Antminer S21 XP Hydro", hashrateTh: 473, watts: 5676, priceUsd: 10_500 }),
  withEfficiency({ id: "s21xp", name: "Bitmain Antminer S21 XP", hashrateTh: 270, watts: 3645, priceUsd: 6_200 }),
  withEfficiency({ id: "s21-hyd", name: "Bitmain Antminer S21 Hydro", hashrateTh: 335, watts: 5360, priceUsd: 5_500 }),
  withEfficiency({ id: "s21pro", name: "Bitmain Antminer S21 Pro", hashrateTh: 234, watts: 3510, priceUsd: 4_400 }),
  withEfficiency({ id: "s19xp", name: "Bitmain Antminer S19 XP", hashrateTh: 141, watts: 3010, priceUsd: 1_500 }),
  withEfficiency({ id: "a15pro", name: "Canaan Avalon A15 Pro", hashrateTh: 235, watts: 3620, priceUsd: 4_200 }),
  withEfficiency({ id: "m66s", name: "MicroBT Whatsminer M66S+", hashrateTh: 318, watts: 5247, priceUsd: 5_000 }),
];

export interface CalcInputs {
  /** Per-unit hashrate in TH/s. */
  hashrateTh: number;
  /** Per-unit wall power in watts. */
  watts: number;
  /** Electricity price in $/kWh. */
  electricityRate: number;
  /** Pool fee as a percentage (e.g. 1 for 1%). */
  poolFeePct: number;
  /** Uptime as a percentage (e.g. 98 for 98%). */
  uptimePct: number;
  /** Per-unit hardware cost in USD (0 to skip payback). */
  hardwareCostUsd: number;
  /** Number of identical units. */
  quantity: number;
  network: NetworkAssumptions;
}

export interface CalcResult {
  btcPerDay: number;
  grossRevenueDay: number;
  poolFeeDay: number;
  powerCostDay: number;
  netProfitDay: number;
  /** Net profit as a percentage of gross revenue. */
  marginPct: number;
  /** Net profit per watt of draw, per day, in USD. */
  profitPerWattDay: number;
  /** Electricity price ($/kWh) at which daily net profit hits zero. */
  breakEvenRate: number;
  /** Days to recover hardware cost at the current net profit (null if never). */
  paybackDays: number | null;
  /** Total fleet draw in kW. */
  totalKw: number;
  periods: {
    day: number;
    week: number;
    month: number;
    year: number;
  };
}

/**
 * The core model. Pure function, no I/O — the same math runs server-side to
 * bake the page's static worked example and client-side in the live widget.
 *
 * BTC mined per day = (your hashrate / network hashrate) × daily issuance.
 * Daily issuance = blockSubsidy × blocksPerDay. Fees are excluded by design.
 */
export function computeMining(inputs: CalcInputs): CalcResult {
  const { network } = inputs;
  const uptime = Math.max(0, Math.min(100, inputs.uptimePct)) / 100;
  const poolFee = Math.max(0, inputs.poolFeePct) / 100;
  const qty = Math.max(0, inputs.quantity);

  // Hashrate share of the network. TH/s → EH/s is a factor of 1e6.
  const fleetHashrateTh = inputs.hashrateTh * qty * uptime;
  const fleetHashrateEh = fleetHashrateTh / 1_000_000;
  const networkEh = network.networkHashrateEh > 0 ? network.networkHashrateEh : DEFAULT_NETWORK.networkHashrateEh;
  const share = fleetHashrateEh / networkEh;

  const dailyIssuanceBtc = network.blockSubsidyBtc * network.blocksPerDay;
  const btcPerDay = share * dailyIssuanceBtc;

  const grossRevenueDay = btcPerDay * network.btcPrice;
  const poolFeeDay = grossRevenueDay * poolFee;

  // Power. Watts → kW → kWh/day (×24). Uptime scales energy drawn too.
  const totalKw = (inputs.watts * qty) / 1000;
  const kwhDay = totalKw * 24 * uptime;
  const powerCostDay = kwhDay * Math.max(0, inputs.electricityRate);

  const netProfitDay = grossRevenueDay - poolFeeDay - powerCostDay;
  const marginPct = grossRevenueDay > 0 ? (netProfitDay / grossRevenueDay) * 100 : 0;
  const totalWatts = inputs.watts * qty * uptime;
  const profitPerWattDay = totalWatts > 0 ? netProfitDay / totalWatts : 0;

  // Break-even electricity price: the $/kWh where net profit = 0.
  // 0 = gross − poolFee − kWh×rate  ⇒  rate = (gross − poolFee) / kWh
  const revenueAfterFee = grossRevenueDay - poolFeeDay;
  const breakEvenRate = kwhDay > 0 ? revenueAfterFee / kwhDay : 0;

  const hardwareCost = Math.max(0, inputs.hardwareCostUsd) * qty;
  const paybackDays = netProfitDay > 0 && hardwareCost > 0 ? hardwareCost / netProfitDay : null;

  return {
    btcPerDay,
    grossRevenueDay,
    poolFeeDay,
    powerCostDay,
    netProfitDay,
    marginPct,
    profitPerWattDay,
    breakEvenRate: Math.max(0, breakEvenRate),
    paybackDays,
    totalKw,
    periods: {
      day: netProfitDay,
      week: netProfitDay * 7,
      month: netProfitDay * (365 / 12),
      year: netProfitDay * 365,
    },
  };
}

export interface CalcSource {
  id: number;
  label: string;
  url: string;
}

export const CALC_SOURCES: CalcSource[] = [
  { id: 1, label: "Bitcoin.org — the protocol's fixed block subsidy and the roughly 10-minute (144 blocks/day) target", url: "https://bitcoin.org/bitcoin.pdf" },
  { id: 2, label: "mempool.space — live network hashrate, difficulty, block height, and subsidy", url: "https://mempool.space/" },
  { id: 3, label: "Bitmain — Antminer S21 XP / S21 Pro published hashrate and power specifications", url: "https://www.bitmain.com/" },
  { id: 4, label: "Canaan — Avalon A15 series product specifications", url: "https://www.canaan.io/" },
  { id: 5, label: "MicroBT — Whatsminer M66S series specifications", url: "https://www.microbt.com/" },
  { id: 6, label: "U.S. Energy Information Administration — Texas electricity prices by sector (industrial, commercial, residential)", url: "https://www.eia.gov/electricity/state/texas/" },
  { id: 7, label: "TexasBitcoin — Bitcoin Mining and ERCOT: demand response, curtailment credits, and 4CP (why Texas operating economics differ from this baseline)", url: "https://texasbitcoin.com/bitcoin-mining-ercot" },
];
