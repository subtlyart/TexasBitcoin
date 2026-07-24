"use client";

import { useMemo, useState } from "react";
import {
  formatDate,
  formatUsd,
  shortDistrict,
  themeLabel,
  type TrackedCase,
} from "@/lib/case-tracker";

/**
 * Filterable case list for the § 1960 tracker.
 *
 * Progressive enhancement: every case row is in the server-rendered HTML
 * (filters default to "all"), so the page reads completely without
 * JavaScript. Filtering only ever hides rows client-side.
 */
export function CaseTracker({ cases }: { cases: TrackedCase[] }) {
  const [district, setDistrict] = useState("");
  const [year, setYear] = useState("");
  const [theme, setTheme] = useState("");

  const { districts, years, themes } = useMemo(() => {
    const districtSet = new Set<string>();
    const yearSet = new Set<string>();
    const themeCounts = new Map<string, number>();
    for (const c of cases) {
      districtSet.add(c.district);
      if (c.date) yearSet.add(c.date.slice(0, 4));
      for (const t of c.themes) {
        themeCounts.set(t, (themeCounts.get(t) ?? 0) + 1);
      }
    }
    return {
      districts: [...districtSet].sort(),
      years: [...yearSet].sort().reverse(),
      // Themes are free-form enrichment output with many one-offs; only
      // offer themes shared by 2+ cases so the dropdown stays usable.
      themes: [...themeCounts.entries()]
        .filter(([, n]) => n >= 2)
        .map(([t]) => t)
        .sort(),
    };
  }, [cases]);

  const filtered = cases.filter((c) => {
    if (district && c.district !== district) return false;
    if (year && (!c.date || c.date.slice(0, 4) !== year)) return false;
    if (theme && !c.themes.includes(theme)) return false;
    return true;
  });

  const selectClass =
    "max-w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-accent/60 focus:outline-none";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        <select
          aria-label="Filter by district"
          className={selectClass}
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          <option value="">All districts</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {shortDistrict(d)}
            </option>
          ))}
        </select>
        <select
          aria-label="Filter by year"
          className={selectClass}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">All years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          aria-label="Filter by theme"
          className={selectClass}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="">All themes</option>
          {themes.map((t) => (
            <option key={t} value={t}>
              {themeLabel(t)}
            </option>
          ))}
        </select>
        {(district || year || theme) && (
          <button
            type="button"
            onClick={() => {
              setDistrict("");
              setYear("");
              setTheme("");
            }}
            className="rounded-lg border border-border px-3 py-2 text-sm text-muted hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-muted-2">
        {filtered.length} of {cases.length} cases shown · newest first
      </p>

      <div className="mt-2 divide-y divide-border border-y border-border">
        {filtered.map((c) => (
          <article key={c.id} className="py-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
              <h3 className="font-semibold leading-snug">
                <a
                  href={c.doj_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-soft"
                >
                  {c.title}
                </a>
              </h3>
              <span className="text-xs whitespace-nowrap text-muted-2">
                {formatDate(c.date)}
              </span>
              <span className="rounded bg-accent/15 px-2 py-0.5 text-[0.7rem] font-semibold whitespace-nowrap text-accent-soft">
                {shortDistrict(c.district)}
              </span>
            </div>
            {c.summary && (
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {c.summary}
              </p>
            )}
            {(c.statutes.length > 0 || c.themes.length > 0) && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {c.statutes.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-surface px-2 py-0.5 text-[0.7rem] text-muted"
                  >
                    {s}
                  </span>
                ))}
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-surface-2 px-2 py-0.5 text-[0.7rem] text-muted-2"
                  >
                    {themeLabel(t)}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-2.5 text-xs text-muted-2">
              {c.forfeiture_usd > 0 && (
                <span>
                  Forfeiture:{" "}
                  <span className="text-star">{formatUsd(c.forfeiture_usd)}</span>
                  {" · "}
                </span>
              )}
              <a
                href={c.doj_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
              >
                DOJ press release
              </a>
            </p>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-sm text-muted-2 italic">
            No cases match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
