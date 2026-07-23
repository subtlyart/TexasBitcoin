"use client";

import { useEffect, useRef, useState } from "react";
import {
  lawMilestones,
  OUTCOME_LABELS,
  type MilestoneOutcome,
} from "@/lib/law-timeline";

// Outcome-coded node colors, keyed to the site palette.
const OUTCOME_COLORS: Record<MilestoneOutcome, string> = {
  enacted: "var(--accent)",
  adopted: "var(--accent-soft)",
  guidance: "var(--star)",
  died: "#a0554b", // muted brick — a failure, stated plainly, not shouted
};

const LEGEND_ORDER: MilestoneOutcome[] = [
  "enacted",
  "guidance",
  "died",
  "adopted",
];

/**
 * Vertical scroll timeline of Texas Bitcoin law milestones.
 *
 * Progressive enhancement, strictly additive: the server-rendered HTML shows
 * every milestone in full (no opacity-0 in the initial markup), so the page
 * reads completely without JavaScript. After mount — and only when
 * IntersectionObserver exists and the reader hasn't asked for reduced
 * motion — nodes below the fold are faded down and revealed as they scroll
 * into view. Content is never removed from the DOM.
 */
export function LawTimeline() {
  // Ids currently held faded-out, awaiting their scroll-in moment.
  // Starts empty: everything visible on the server and for no-JS readers.
  const [hidden, setHidden] = useState<ReadonlySet<string>>(() => new Set());
  const nodeRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return; // stay visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only fade nodes that are below the viewport right now — nothing the
    // reader can already see ever blinks out.
    const foldLine = window.innerHeight * 0.92;
    const below = new Set<string>();
    nodeRefs.current.forEach((el, id) => {
      if (el.getBoundingClientRect().top > foldLine) below.add(id);
    });
    if (below.size === 0) return;
    setHidden(below);

    const observer = new IntersectionObserver(
      (entries) => {
        const revealed: string[] = [];
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("data-milestone-id");
          if (id) revealed.push(id);
          observer.unobserve(entry.target);
        }
        if (revealed.length === 0) return;
        setHidden((prev) => {
          const next = new Set(prev);
          for (const id of revealed) next.delete(id);
          return next;
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    below.forEach((id) => {
      const el = nodeRefs.current.get(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const outcomesUsed = new Set(lawMilestones.map((m) => m.outcome));

  return (
    <figure className="law-timeline">
      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted">
        {LEGEND_ORDER.filter((o) => outcomesUsed.has(o)).map((o) => (
          <span key={o} className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: OUTCOME_COLORS[o] }}
            />
            {OUTCOME_LABELS[o]}
          </span>
        ))}
      </div>

      {/* The spine and its nodes */}
      <div className="relative mt-6">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[11px] top-0 w-px bg-border sm:left-1/2"
        />

        {lawMilestones.map((m, i) => {
          const year = m.date.slice(0, 4);
          const prevYear = i > 0 ? lawMilestones[i - 1].date.slice(0, 4) : null;
          const onLeft = i % 2 === 0;
          const color = OUTCOME_COLORS[m.outcome];
          const isHidden = hidden.has(m.id);

          return (
            <div key={m.id}>
              {year !== prevYear && (
                <div className="relative z-10 flex py-6 sm:justify-center">
                  <span className="rounded-full border border-border bg-surface-2 px-3.5 py-1 font-display text-sm font-semibold tracking-wide text-muted">
                    {year}
                  </span>
                </div>
              )}

              <article
                data-milestone-id={m.id}
                ref={(el) => {
                  if (el) nodeRefs.current.set(m.id, el);
                  else nodeRefs.current.delete(m.id);
                }}
                className="relative pb-8 pl-10 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:pl-0"
                style={{
                  opacity: isHidden ? 0 : 1,
                  transform: isHidden ? "translateY(20px)" : "none",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {/* Node dot on the spine */}
                <span
                  aria-hidden="true"
                  className="absolute left-1 top-2 z-10 h-3.5 w-3.5 rounded-full border-2 border-background sm:left-1/2 sm:-translate-x-1/2"
                  style={{ background: color }}
                />

                <div
                  className={
                    onLeft
                      ? "sm:col-start-1 sm:text-right"
                      : "sm:col-start-2 sm:text-left"
                  }
                >
                  <div className="rounded-xl border border-border bg-surface p-5">
                    <div
                      className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${
                        onLeft ? "sm:justify-end" : ""
                      }`}
                    >
                      <time
                        dateTime={m.date}
                        className="text-xs tabular-nums text-muted-2"
                      >
                        {m.dateLabel}
                      </time>
                      <span
                        className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          color,
                          borderColor: `color-mix(in srgb, ${color} 45%, transparent)`,
                        }}
                      >
                        {OUTCOME_LABELS[m.outcome]}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                      {m.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-2">{m.actor}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {m.summary}{" "}
                      {m.sourceIds.map((n) => (
                        <sup key={n}>
                          <a
                            href={`#lt${n}`}
                            aria-label={`Source ${n}`}
                            className="px-px text-[0.7em] text-accent-soft no-underline hover:text-accent"
                          >
                            [{n}]
                          </a>
                        </sup>
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <figcaption className="mt-2 text-xs text-muted-2">
        Every milestone verified against capitol.texas.gov or dob.texas.gov —
        sources below.
      </figcaption>
    </figure>
  );
}
