"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import {
  miningSites,
  STATUS_LABELS,
  YEAR_MAX,
  YEAR_MIN,
  type MiningSite,
  type SiteStatus,
} from "@/lib/mining-sites";

// --- Geography ---------------------------------------------------------------
// Equirectangular projection scaled for Texas's mid-latitude (~31°N), so
// distances read true and site pins sit at their real coordinates.
const LNG_W = -106.65;
const LAT_N = 36.6;
const KX = 53.27; // px per degree longitude (62.3 * cos 31°)
const KY = 62.2; // px per degree latitude

function px(lat: number, lng: number): [number, number] {
  return [(lng - LNG_W) * KX, (LAT_N - lat) * KY];
}

// Simplified Texas border, clockwise from the panhandle's NW corner.
const BORDER: [number, number][] = [
  [36.5, -103.04], [36.5, -100.0], [34.56, -100.0], [34.31, -99.38],
  [34.08, -98.55], [33.85, -98.02], [33.74, -97.15], [33.87, -96.6],
  [33.85, -95.75], [33.72, -94.9], [33.55, -94.04], [33.02, -94.04],
  [32.2, -94.04], [31.9, -93.9], [31.4, -93.7], [31.0, -93.53],
  [30.6, -93.62], [30.12, -93.7], [29.77, -93.9], [29.68, -93.84],
  [29.5, -94.35], [29.28, -94.78], [28.95, -95.35], [28.6, -95.95],
  [28.2, -96.5], [27.83, -97.05], [27.35, -97.35], [26.8, -97.35],
  [26.2, -97.2], [25.96, -97.15], [25.88, -97.45], [26.05, -98.05],
  [26.23, -98.55], [26.55, -99.1], [27.0, -99.44], [27.5, -99.5],
  [28.05, -100.0], [28.7, -100.5], [29.1, -100.78], [29.36, -100.9],
  [29.6, -101.4], [29.77, -102.0], [29.55, -102.55], [29.18, -102.85],
  [29.0, -103.15], [29.3, -103.6], [29.56, -104.05], [29.9, -104.55],
  [30.35, -104.85], [30.85, -104.98], [31.2, -105.5], [31.55, -106.15],
  [31.78, -106.53], [32.0, -106.62], [32.0, -103.06],
];

const BORDER_PATH =
  BORDER.map(([lat, lng], i) => {
    const [x, y] = px(lat, lng);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") + " Z";

// Reference cities, for orientation only.
const CITIES: { name: string; lat: number; lng: number }[] = [
  { name: "Austin", lat: 30.267, lng: -97.743 },
  { name: "Dallas", lat: 32.777, lng: -96.797 },
  { name: "Houston", lat: 29.76, lng: -95.36 },
  { name: "San Antonio", lat: 29.424, lng: -98.49 },
  { name: "El Paso", lat: 31.76, lng: -106.49 },
];

// --- Rendering ---------------------------------------------------------------
const STATUS_COLORS: Record<SiteStatus, string> = {
  mining: "#f7931a",
  hybrid: "#ffb454",
  ai: "#6fc7b4",
  announced: "#8b93c9", // periwinkle — planned, not yet built
  historic: "#756f63",
};

/** Status as of a given map year — sites pivot color the year the GPUs arrive. */
function statusAt(site: MiningSite, year: number): SiteStatus {
  if (site.status === "historic") return "historic";
  if (site.status === "announced") return "announced";
  // AI-native campuses never mined — they show their status from the start.
  if (site.aiNative) return site.status;
  if (site.pivotYear && year >= site.pivotYear) return site.status;
  return "mining";
}

function pinRadius(mw: number) {
  return 3 + Math.sqrt(mw) * 0.45;
}

export function MiningMap() {
  // Default to the present; the final scrubber year reveals announced sites.
  const [year, setYear] = useState(2026);
  const [playing, setPlaying] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>("riot-rockdale");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setYear((y) => {
        if (y >= YEAR_MAX) {
          setPlaying(false);
          return y;
        }
        return y + 1;
      });
    }, 1100);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const visible = useMemo(
    () => miningSites.filter((s) => s.yearOnline <= year),
    [year]
  );
  const shownMw = visible.reduce((sum, s) => sum + s.mw, 0);
  const selected = miningSites.find((s) => s.id === selectedId) ?? null;
  const selectedVisible = selected && selected.yearOnline <= year;

  function togglePlay() {
    if (!playing && year >= YEAR_MAX) setYear(YEAR_MIN);
    setPlaying((p) => !p);
  }

  return (
    <figure className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause the timeline" : "Play the timeline from 2019"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-[#1a1206] transition-colors hover:bg-accent-soft"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
        </button>
        <input
          type="range"
          min={YEAR_MIN}
          max={YEAR_MAX}
          step={1}
          value={year}
          onChange={(e) => {
            setPlaying(false);
            setYear(Number(e.target.value));
          }}
          aria-label="Map year"
          className="h-1.5 min-w-40 flex-1 cursor-pointer appearance-none rounded-full bg-surface-2 accent-[#f7931a]"
        />
        <div className="flex items-baseline gap-3">
          <span className="font-display text-3xl font-semibold tabular-nums text-accent">
            {year}
          </span>
          <span className="text-xs text-muted-2 tabular-nums">
            {visible.length} site{visible.length === 1 ? "" : "s"} ·{" "}
            {shownMw.toLocaleString()} MW shown
          </span>
        </div>
      </div>

      {/* The map */}
      <svg
        viewBox="0 0 700 675"
        role="img"
        aria-label={`Map of Texas showing industrial Bitcoin mining and AI sites online or announced by ${year}`}
        className="mt-4 w-full"
      >
        <path
          d={BORDER_PATH}
          fill="var(--surface-2)"
          stroke="var(--border)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {CITIES.map((c) => {
          const [x, y] = px(c.lat, c.lng);
          return (
            <g key={c.name} aria-hidden="true">
              <circle cx={x} cy={y} r="2" fill="var(--muted-2)" />
              <text
                x={x}
                y={y + 14}
                textAnchor="middle"
                fontSize="10"
                fill="var(--muted-2)"
              >
                {c.name}
              </text>
            </g>
          );
        })}

        {miningSites.map((site) => {
          const [x, y] = px(site.lat, site.lng);
          const on = site.yearOnline <= year;
          const st = statusAt(site, year);
          const color = STATUS_COLORS[st];
          const isAnnounced = st === "announced";
          const r = pinRadius(site.mw);
          const isSelected = selectedId === site.id;
          return (
            <g
              key={site.id}
              className="mining-pin"
              style={{
                opacity: on ? 1 : 0,
                transform: on ? "scale(1)" : "scale(0.2)",
                transformOrigin: `${x}px ${y}px`,
                pointerEvents: on ? "auto" : "none",
              }}
            >
              {isSelected && on && (
                <circle
                  className="mining-pin-halo"
                  cx={x}
                  cy={y}
                  r={r + 6}
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                />
              )}
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={color}
                fillOpacity={isAnnounced ? 0.14 : 0.28}
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray={isAnnounced ? "4 2.5" : undefined}
                tabIndex={on ? 0 : -1}
                role="button"
                aria-label={`${site.name}, ${site.mwLabel}, online ${site.yearOnline}`}
                className="cursor-pointer outline-none focus-visible:stroke-[3]"
                onClick={() => setSelectedId(site.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(site.id);
                  }
                }}
              />
              <circle cx={x} cy={y} r="2.2" fill={color} pointerEvents="none" />
              {isSelected && on && (
                <text
                  x={x}
                  y={y - r - 6}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="var(--foreground)"
                  pointerEvents="none"
                >
                  {site.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted">
        {(Object.keys(STATUS_LABELS) as SiteStatus[]).map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: STATUS_COLORS[s] }}
            />
            {STATUS_LABELS[s]}
          </span>
        ))}
        <span className="text-muted-2">Pin size ∝ capacity</span>
      </div>

      {/* Selected site card */}
      {selected && selectedVisible && (
        <figcaption className="mt-4 rounded-xl border border-border bg-background p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-display text-lg font-semibold">{selected.name}</p>
            <p className="text-xs text-muted-2">
              {selected.location} · online {selected.yearOnline}
            </p>
          </div>
          <p className="mt-1 text-sm font-medium" style={{ color: STATUS_COLORS[statusAt(selected, year)] }}>
            {selected.mwLabel} · {STATUS_LABELS[statusAt(selected, year)]}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{selected.story}</p>
        </figcaption>
      )}
    </figure>
  );
}
