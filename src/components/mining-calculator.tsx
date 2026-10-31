"use client";

import { useMemo, useState } from "react";
import {
  computeMining,
  DEFAULT_NETWORK,
  MINER_PRESETS,
  NETWORK_AS_OF,
  TEXAS_RATES,
  type CalcInputs,
} from "@/lib/mining-calculator";

const usd = (n: number, dp = 2) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: dp, maximumFractionDigits: dp });

const num = (n: number, dp = 0) =>
  n.toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });

interface FieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  suffix?: string;
  hint?: string;
}

function Field({ label, value, onChange, step = 1, min = 0, suffix, hint }: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted">{label}</span>
      <div className="mt-1 flex items-center rounded-lg border border-border bg-background focus-within:border-accent">
        <input
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : ""}
          min={min}
          step={step}
          onChange={(e) => onChange(e.target.valueAsNumber)}
          className="w-full bg-transparent px-3 py-2 text-sm text-foreground outline-none"
        />
        {suffix && <span className="shrink-0 pr-3 text-xs text-muted-2">{suffix}</span>}
      </div>
      {hint && <span className="mt-1 block text-[11px] leading-snug text-muted-2">{hint}</span>}
    </label>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "pos" | "neg" }) {
  const color = tone === "pos" ? "text-accent-soft" : tone === "neg" ? "text-red-400" : "text-foreground";
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-2">{label}</p>
      <p className={`mt-1 font-display text-xl font-semibold tabular-nums ${color}`}>{value}</p>
    </div>
  );
}

export function MiningCalculator() {
  const [presetId, setPresetId] = useState(MINER_PRESETS[1].id);
  const preset = MINER_PRESETS.find((m) => m.id === presetId) ?? null;

  const [inputs, setInputs] = useState<CalcInputs>({
    hashrateTh: MINER_PRESETS[1].hashrateTh,
    watts: MINER_PRESETS[1].watts,
    electricityRate: 0.045,
    poolFeePct: 1,
    uptimePct: 98,
    hardwareCostUsd: MINER_PRESETS[1].priceUsd,
    quantity: 1,
    network: { ...DEFAULT_NETWORK },
  });

  const set = <K extends keyof CalcInputs>(key: K, value: CalcInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const setNet = (key: keyof CalcInputs["network"], value: number) =>
    setInputs((prev) => ({ ...prev, network: { ...prev.network, [key]: value } }));

  const choosePreset = (id: string) => {
    setPresetId(id);
    const m = MINER_PRESETS.find((p) => p.id === id);
    if (m) {
      setInputs((prev) => ({
        ...prev,
        hashrateTh: m.hashrateTh,
        watts: m.watts,
        hardwareCostUsd: m.priceUsd,
      }));
    }
  };

  const r = useMemo(() => computeMining(inputs), [inputs]);
  const profitable = r.netProfitDay >= 0;

  return (
    <section
      aria-label="Bitcoin mining profitability calculator"
      className="not-prose rounded-2xl border border-accent/30 bg-surface p-5 sm:p-7"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Mining profitability calculator
        </h2>
        <span className="text-[11px] text-muted-2">
          Baseline network figures as of {NETWORK_AS_OF} — edit any of them below.
        </span>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* ── Inputs ─────────────────────────────────────────── */}
        <div className="space-y-5">
          <div>
            <span className="text-xs font-medium text-muted">Machine</span>
            <select
              value={preset ? presetId : "custom"}
              onChange={(e) => (e.target.value === "custom" ? setPresetId("custom") : choosePreset(e.target.value))}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
            >
              {MINER_PRESETS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} — {num(m.hashrateTh)} TH/s · {num(m.watts)} W · {m.efficiency} J/TH
                </option>
              ))}
              <option value="custom">Custom machine…</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Hashrate" value={inputs.hashrateTh} onChange={(v) => { setPresetId("custom"); set("hashrateTh", v); }} step={1} suffix="TH/s" />
            <Field label="Power draw" value={inputs.watts} onChange={(v) => { setPresetId("custom"); set("watts", v); }} step={10} suffix="W" />
          </div>

          <div>
            <Field
              label="Electricity rate"
              value={inputs.electricityRate}
              onChange={(v) => set("electricityRate", v)}
              step={0.005}
              suffix="$/kWh"
              hint="Power cost is the number that decides Texas mining."
            />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {TEXAS_RATES.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => set("electricityRate", p.rate)}
                  title={p.note}
                  className={`rounded-full border px-2.5 py-1 text-[11px] transition-colors ${
                    Math.abs(inputs.electricityRate - p.rate) < 1e-9
                      ? "border-accent bg-accent/15 text-accent-soft"
                      : "border-border text-muted hover:border-accent/50"
                  }`}
                >
                  {p.label} · {num(p.rate * 100, 1)}¢
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Pool fee" value={inputs.poolFeePct} onChange={(v) => set("poolFeePct", v)} step={0.25} suffix="%" />
            <Field label="Uptime" value={inputs.uptimePct} onChange={(v) => set("uptimePct", v)} step={1} suffix="%" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Hardware cost / unit" value={inputs.hardwareCostUsd} onChange={(v) => { setPresetId("custom"); set("hardwareCostUsd", v); }} step={50} suffix="$" hint="0 to skip payback." />
            <Field label="Units" value={inputs.quantity} onChange={(v) => set("quantity", v)} step={1} min={1} suffix="×" />
          </div>

          <details className="rounded-lg border border-border bg-background/60 p-3">
            <summary className="cursor-pointer text-xs font-medium text-muted">
              Network assumptions (edit to match the live chain)
            </summary>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Field label="BTC price" value={inputs.network.btcPrice} onChange={(v) => setNet("btcPrice", v)} step={100} suffix="$" />
              <Field label="Network hashrate" value={inputs.network.networkHashrateEh} onChange={(v) => setNet("networkHashrateEh", v)} step={5} suffix="EH/s" />
              <Field label="Block subsidy" value={inputs.network.blockSubsidyBtc} onChange={(v) => setNet("blockSubsidyBtc", v)} step={0.0625} suffix="BTC" />
              <Field label="Blocks / day" value={inputs.network.blocksPerDay} onChange={(v) => setNet("blocksPerDay", v)} step={1} suffix="blk" />
            </div>
          </details>
        </div>

        {/* ── Results ────────────────────────────────────────── */}
        <div className="space-y-4">
          <div
            className={`rounded-xl border p-5 ${
              profitable ? "border-accent/40 bg-accent/[0.06]" : "border-red-500/40 bg-red-500/[0.06]"
            }`}
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-2">Net profit</p>
            <p className={`mt-1 font-display text-3xl font-semibold tabular-nums ${profitable ? "text-accent-soft" : "text-red-400"}`}>
              {usd(r.netProfitDay)}<span className="text-base font-normal text-muted"> / day</span>
            </p>
            <p className="mt-1 text-xs text-muted">
              {num(r.marginPct, 1)}% margin · {usd(r.profitPerWattDay, 4)} per watt / day
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Stat label="BTC mined / day" value={`₿ ${num(r.btcPerDay, 6)}`} />
            <Stat label="Gross revenue / day" value={usd(r.grossRevenueDay)} />
            <Stat label="Power cost / day" value={usd(r.powerCostDay)} tone="neg" />
            <Stat label="Pool fee / day" value={usd(r.poolFeeDay)} tone="neg" />
            <Stat
              label="Break-even power"
              value={`${num(r.breakEvenRate * 100, 1)}¢ / kWh`}
              tone={inputs.electricityRate <= r.breakEvenRate ? "pos" : "neg"}
            />
            <Stat
              label="Hardware payback"
              value={r.paybackDays == null ? "—" : `${num(r.paybackDays, 0)} days`}
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-2 text-left text-[11px] uppercase tracking-wide text-muted-2">
                  <th className="px-4 py-2 font-medium">Period</th>
                  <th className="px-4 py-2 text-right font-medium">Net profit</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {([
                  ["Day", r.periods.day],
                  ["Week", r.periods.week],
                  ["Month", r.periods.month],
                  ["Year", r.periods.year],
                ] as const).map(([label, v]) => (
                  <tr key={label} className="border-t border-border">
                    <td className="px-4 py-2 text-muted">{label}</td>
                    <td className={`px-4 py-2 text-right ${v >= 0 ? "text-foreground" : "text-red-400"}`}>{usd(v)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-border pt-4 text-[11px] leading-relaxed text-muted-2">
        Operating estimate only. Covers block-subsidy revenue minus power and pool fees. It excludes
        transaction-fee revenue, cooling and immersion overhead, hosting margin, repairs, depreciation,
        financing, and taxes — and it excludes the ERCOT demand-response and curtailment credits that can
        outweigh hashrate revenue in a Texas spike month. Difficulty rises over time, so forward results
        drift. Not financial or investment advice.
      </p>
    </section>
  );
}
