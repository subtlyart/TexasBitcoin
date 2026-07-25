import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// The terminal of the hidden trail. Deliberately unlisted: no nav, no
// sitemap, no llms.txt, noindex. You only get here by following the star.
export const metadata: Metadata = {
  title: "The Seam",
  description: "You followed the star all the way around.",
  robots: { index: false, follow: true },
};

// The five stops, in the order the traveler walked them.
const stanzas = [
  {
    numeral: "I",
    title: "The Memo",
    date: "April 3, 2014",
    href: "/texas-bitcoin-law-timeline",
    back: "the timeline",
    body: "A banking department in Austin looked at the strangest money ever invented and wrote, calmly, that it was not money at all. No license needed to sell what is yours. Eleven words of restraint did more for Texas than a thousand pages of ambition. The seam begins where the state stepped back.",
  },
  {
    numeral: "II",
    title: "The Docket",
    date: "18 U.S.C. § 1960",
    href: "/texas-bitcoin-case-tracker",
    back: "the docket",
    body: "But there are two maps of the same territory, and the other one is federal. Where the maps disagree, a seam — and seams have teeth. The docket is where the teeth show: every case a coordinate, every press release a survey stake. Some who walked the seam believed the state map was the whole map. One of them taught the rest of us the difference.",
  },
  {
    numeral: "III",
    title: "The Grid",
    date: "Summer 2021",
    href: "/bitcoin-mining-map-texas",
    back: "the map",
    body: "An empire banned the machines and the machines came here, because the seam runs through the physical world too — between stranded gigawatts and the money that could finally reach them. Watch the map bloom: wind that had nowhere to go, gas that burned into the sky, wires waiting since the smelter days. The grid didn't tolerate the miners. It had been expecting them.",
  },
  {
    numeral: "IV",
    title: "The Town",
    date: "Rockdale, Milam County",
    href: "/rockdale-texas-bitcoin",
    back: "the town",
    body: "Every seam surfaces somewhere. This one surfaces in a town of five and a half thousand that built aluminum for seventy years, went dark, and then heard the hum come back through the same substations. Different product, same wires. A mayor said 'there is a heartbeat,' and he was being precise, not poetic.",
  },
  {
    numeral: "V",
    title: "The Reserve",
    date: "June 20, 2025",
    href: "/history-of-bitcoin-in-texas",
    back: "the history",
    body: "Eleven years after the memo said not-money, the same state built a vault for it and called it strategic. The seam did not close — it was ratified. What began as an absence of permission ended as an act of reserve policy, and the whole arc is written down, sourced, end to end.",
  },
];

export default function TheSeamPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-2">
          You followed the star all the way around
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight">
          The Seam
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          Five stops. Five turns of the same star — 72 degrees at a time,
          full circle. This page is not in the navigation, the sitemap, or
          the index. It exists for the kind of reader who notices small
          things, which is the only kind this subject has ever rewarded.
        </p>
      </header>

      {/* The star, traced — five points, drawn in walking order. */}
      <div className="mt-12 flex justify-center">
        <svg
          viewBox="0 0 200 200"
          className="h-44 w-44"
          aria-hidden="true"
        >
          <path
            d="M100 15 L128.6 190 L18 82 L182 82 L71.4 190 Z"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeOpacity="0.55"
            strokeLinejoin="round"
            pathLength={1}
            className="seam-trace"
          />
          {[
            [100, 15],
            [128.6, 190],
            [18, 82],
            [182, 82],
            [71.4, 190],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="var(--accent)"
              opacity="0.8"
            />
          ))}
        </svg>
      </div>
      {/* Draw-on-load, stilled for reduced motion. Scoped to this page. */}
      <style>{`
        .seam-trace { stroke-dasharray: 1; stroke-dashoffset: 1; animation: seam-draw 6s ease-out forwards; }
        @keyframes seam-draw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) { .seam-trace { animation: none; stroke-dashoffset: 0; } }
      `}</style>

      <div className="mt-14 space-y-12">
        {stanzas.map((s) => (
          <section key={s.numeral} className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {s.numeral} · {s.title}
              <span className="ml-3 normal-case tracking-normal text-muted-2">
                {s.date}
              </span>
            </p>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            <p className="mt-2 text-sm">
              <Link
                href={s.href}
                className="text-muted-2 underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-soft"
              >
                return to {s.back}
              </Link>
            </p>
          </section>
        ))}
      </div>

      <footer className="mt-16 border-t border-border pt-10 text-center">
        <p className="leading-relaxed text-muted">
          One date on the seam repeats without a year, because the record
          itself doesn&apos;t give one: <strong>October 23</strong> — the day
          the seam came to a house in Richardson, and, some years later, the
          day another ledger was balanced with a pardon. We keep the date the
          way the record keeps it: exact, and open.
        </p>
        <p className="mt-8 font-display text-2xl font-semibold tracking-tight">
          The seam holds.
        </p>
        <p className="mt-6 text-xs text-muted-2">
          {site.name} · a research and reference publication ·{" "}
          <Link href="/doctor-bitcoin-interviews" className="underline decoration-accent/30 underline-offset-2 hover:text-accent-soft">
            the Tapes are the other hidden road
          </Link>
        </p>
      </footer>
    </article>
  );
}
