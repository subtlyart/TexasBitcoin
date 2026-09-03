import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  SNI_LAST_VERIFIED,
  sniSources,
  sniTimeline,
  type SniTimelineKind,
} from "@/lib/sni";

const pageUrl = `${site.url}/satoshi-nakamoto-institute`;

export const metadata: Metadata = {
  title: "The Satoshi Nakamoto Institute: The Canon Was Written in Austin",
  description:
    "The sourced history of the Satoshi Nakamoto Institute, the Austin nonprofit founded in November 2013 by Michael Goldstein, Daniel Krawisz, and Pierre Rochard out of a University of Texas reading group: the Complete Satoshi archive, the cypherpunk Library, the Mempool essays that coined 'hyperbitcoinization' and 'speculative attack,' the co-founder who left for BSV, and the 2024 relaunch as a 501(c)(3) with OpenSats funding.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Satoshi Nakamoto Institute: The Canon Was Written in Austin",
    description:
      "Hyperbitcoinization, speculative attack, everyone's a scammer - the Bitcoin-only canon came out of a UT Austin reading group. The Institute's history, the schism, and the relaunch.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "What is the Satoshi Nakamoto Institute?",
    a: "The Satoshi Nakamoto Institute is an Austin, Texas nonprofit founded in November 2013 to advance and preserve knowledge of Bitcoin's history, economics, and technology. It maintains the Complete Satoshi - every known writing of Bitcoin's pseudonymous creator from 2008 to 2012 - a Library of the cypherpunk and monetary works Bitcoin descends from, and the Mempool, an essay archive. It became a Texas 501(c)(3) public charity in 2024.",
  },
  {
    q: "Who founded the Satoshi Nakamoto Institute?",
    a: "Michael Goldstein, Daniel Krawisz, and Pierre Rochard, three members of the Mises Circle, an Austrian-economics reading group Goldstein ran at the University of Texas at Austin. Goldstein has been president since the founding; Krawisz was director of research until his essays stopped in January 2017; Rochard later became Riot Platforms' Vice President of Research and founded The Bitcoin Bond Company.",
  },
  {
    q: "Who coined the term hyperbitcoinization?",
    a: "Daniel Krawisz, in a Satoshi Nakamoto Institute essay titled 'Hyperbitcoinization' published March 29, 2014. He defined it as a voluntary transition from an inferior currency to a superior one, carried out as a series of individual acts of entrepreneurship rather than by a single monopolist. Pierre Rochard's 'Speculative Attack' followed on July 4, 2014, and Michael Goldstein's 'Everyone's a Scammer' on September 11, 2014.",
  },
  {
    q: "Why did Daniel Krawisz leave the Nakamoto Institute?",
    a: "Over the block-size war. His last Institute essay ran January 8, 2017; by August 2017 he was publicly favoring forks over Bitcoin Core's development model, and he later became a Bitcoin SV advocate. In 2020 he said he had lost the allies he started the Institute with because they 'bought into core ideas,' and that 'BTC betrayed me.' The Institute still hosts all thirty-four of his essays.",
  },
  {
    q: "Is the Satoshi Nakamoto Institute still active?",
    a: "Yes, and more than at any point since 2014. It incorporated as a Texas 501(c)(3) in March 2024, raised 21 million sats to redesign its site, launched a translation community, received OpenSats Education Initiative funding in July 2024 to rebuild the archive to Library of Congress preservation standards, shipped the new site on July 26, 2024, and started The Reorg podcast in February 2025. Fiscal 2024 revenue was about $138,000.",
  },
];

const kindStyle: Record<SniTimelineKind, { color: string; label: string }> = {
  circle: { color: "var(--star)", label: "The circle" },
  canon: { color: "var(--accent)", label: "The canon" },
  schism: { color: "#c98a4e", label: "The schism" },
  institution: { color: "#8a7fb5", label: "The institution" },
};

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#r${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

// One original visual: the lineage and the room. The Library's canon
// converges on an Austin reading group; the room emits the three 2014
// essays; the line then forks - one founder out to BSV, the Institute
// into a 501(c)(3). Server-rendered inline SVG, CSS-only animation,
// disabled under prefers-reduced-motion.
const LIBRARY: { y: number; who: string; what: string; satoshi?: boolean }[] = [
  { y: 62, who: "Chaum 1982", what: "blind signatures" },
  { y: 92, who: "May 1988", what: "crypto-anarchist manifesto" },
  { y: 122, who: "Hughes 1993", what: "cypherpunk manifesto" },
  { y: 152, who: "Szabo 1994–2005", what: "smart contracts, Bit Gold" },
  { y: 182, who: "Dai 1998", what: "b-money" },
  { y: 212, who: "Back 2002", what: "hashcash" },
  { y: 242, who: "Finney 2004", what: "reusable proofs of work" },
  { y: 272, who: "Satoshi 2008", what: "the whitepaper", satoshi: true },
];
const CANON: { y: number; title: string; date: string }[] = [
  { y: 104, title: "Hyperbitcoinization", date: "Krawisz · March 29, 2014" },
  { y: 166, title: "Speculative Attack", date: "Rochard · July 4, 2014" },
  { y: 228, title: "Everyone's a Scammer", date: "Goldstein · September 11, 2014" },
];

function SniLineageFigure() {
  // Geometry (viewBox 810 x 384): library labels right-aligned to x=278,
  // their dots at x=290; the room spans x=370..532; canon dots at x=626.
  const dotL = 290;
  const boxL = 370;
  const boxR = 532;
  const boxMid = 166;
  const boxCx = (boxL + boxR) / 2;
  const dotR = 626;
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
      <svg
        viewBox="0 0 810 384"
        role="img"
        aria-labelledby="sni-fig-title sni-fig-desc"
        className="h-auto w-full min-w-[660px]"
      >
        <title id="sni-fig-title">The lineage and the room</title>
        <desc id="sni-fig-desc">
          Eight works from the Institute&apos;s Library, from Chaum in 1982 to
          the Bitcoin whitepaper in 2008, converge on a box labeled Austin:
          the Satoshi Nakamoto Institute, founded November 2013 out of a
          University of Texas reading group. From the box, three lines run
          to the 2014 essays: Hyperbitcoinization, Speculative Attack, and
          Everyone&apos;s a Scammer. Below the box the line forks: a dashed
          branch to the schism, Krawisz to Bitcoin Cash and BSV, and a solid
          branch to the relaunch as a 501(c)(3) in 2024.
        </desc>
        <style>{`
          .sni-flow {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
            animation: sni-draw 2s ease-out forwards;
          }
          .sni-flow.in { animation-delay: 0.2s; }
          .sni-flow.out { animation-delay: 1.1s; }
          .sni-flow.fork { animation-delay: 1.9s; }
          @keyframes sni-draw { to { stroke-dashoffset: 0; } }
          @media (prefers-reduced-motion: reduce) {
            .sni-flow { animation: none; stroke-dashoffset: 0; }
          }
        `}</style>

        {/* Column headers */}
        <text x="28" y="34" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">
          THE LIBRARY · 1982–2008
        </text>
        <text x={boxL} y="34" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">
          THE ROOM · 2013
        </text>
        <text x={dotR} y="34" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">
          THE CANON · 2014
        </text>

        {/* Upstream: the library converges on the room */}
        {LIBRARY.map((n) => (
          <g key={n.who}>
            <path
              className="sni-flow in"
              d={`M${dotL},${n.y} C${dotL + 40},${n.y} ${boxL - 30},${boxMid} ${boxL},${boxMid}`}
              fill="none"
              stroke={n.satoshi ? "var(--accent)" : "var(--muted-2)"}
              strokeWidth={n.satoshi ? 2 : 1.25}
              strokeOpacity={n.satoshi ? 0.9 : 0.6}
            />
            <circle
              cx={dotL}
              cy={n.y}
              r={n.satoshi ? 5 : 3.5}
              fill={n.satoshi ? "var(--accent)" : "var(--muted)"}
              stroke="var(--surface)"
              strokeWidth="2"
            />
            <text x={dotL - 12} y={n.y + 4} fontSize="12" textAnchor="end">
              <tspan fill="var(--muted-2)">{n.what} · </tspan>
              <tspan fill={n.satoshi ? "var(--accent)" : "var(--foreground)"} fontWeight="600">
                {n.who}
              </tspan>
            </text>
          </g>
        ))}

        {/* The room */}
        <rect
          x={boxL}
          y="108"
          width={boxR - boxL}
          height="116"
          rx="12"
          fill="var(--surface-2)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text x={boxCx} y="132" fontSize="11" fontWeight="600" letterSpacing="2" textAnchor="middle" fill="var(--accent)">
          AUSTIN
        </text>
        <text x={boxCx} y="157" fontSize="16" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">
          Satoshi Nakamoto
        </text>
        <text x={boxCx} y="176" fontSize="16" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">
          Institute
        </text>
        <text x={boxCx} y="197" fontSize="11" textAnchor="middle" fill="var(--muted)">
          Nov 2013 · a UT reading group
        </text>
        <text x={boxCx} y="213" fontSize="11" textAnchor="middle" fill="var(--muted-2)">
          Goldstein · Krawisz · Rochard
        </text>

        {/* Downstream: the room emits the canon */}
        {CANON.map((c) => (
          <g key={c.title}>
            <path
              className="sni-flow out"
              d={`M${boxR},${boxMid} C${boxR + 50},${boxMid} ${dotR - 40},${c.y} ${dotR},${c.y}`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeOpacity="0.9"
            />
            <circle cx={dotR} cy={c.y} r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />
            <text x={dotR + 12} y={c.y - 2} fontSize="14" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">
              {c.title}
            </text>
            <text x={dotR + 12} y={c.y + 14} fontSize="11" fill="var(--muted-2)">
              {c.date}
            </text>
          </g>
        ))}

        {/* The fork below the room */}
        <path
          className="sni-flow fork"
          d={`M${boxL + 40},224 C${boxL + 40},272 ${boxL},326 ${dotL},326`}
          fill="none"
          stroke="var(--muted-2)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <circle cx={dotL} cy="326" r="4" fill="var(--muted-2)" stroke="var(--surface)" strokeWidth="2" />
        <text x={dotL - 12} y="330" fontSize="12" textAnchor="end">
          <tspan fill="var(--muted)" fontWeight="600">The schism</tspan>
        </text>
        <text x={dotL - 12} y="346" fontSize="11" textAnchor="end" fill="var(--muted-2)">
          Krawisz out · 2017 forks · BSV by 2020
        </text>

        <path
          className="sni-flow fork"
          d={`M${boxR - 40},224 C${boxR - 40},272 ${boxR},326 ${dotR},326`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        <circle cx={dotR} cy="326" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2" />
        <text x={dotR + 12} y="330" fontSize="12">
          <tspan fill="var(--accent)" fontWeight="600">The relaunch</tspan>
        </text>
        <text x={dotR + 12} y="346" fontSize="11" fill="var(--muted-2)">
          501(c)(3) · OpenSats · 2024
        </text>

        <text x={boxCx} y="374" fontSize="11" textAnchor="middle" fill="var(--muted-2)">
          reads left to right, then down · not to scale
        </text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The lineage and the room. The Library&apos;s canon – Chaum to Satoshi
        – converges on an Austin reading group that became the Institute in
        November 2013; the room emits the three 2014 essays that named the
        Bitcoin-only worldview; then the line forks – one founder out to BSV,
        the Institute into a 501(c)(3). Every node is sourced in the article
        below.
      </figcaption>
    </figure>
  );
}

// Three data figures, generated from the same counts the article cites
// (Mempool index, newsletter archive, Complete Satoshi index; Sept 2026).
function SniMempoolFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The Mempool by year">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE MEMPOOL · 76 ESSAYS BY YEAR, 2012–2024</text>
<rect x="28" y="42" width="10" height="10" rx="2" fill="var(--star)"/>
<text x="42" y="51" fontSize="10.5" fill="var(--muted)">Krawisz</text>
<rect x="100.69999999999999" y="42" width="10" height="10" rx="2" fill="var(--accent-soft)"/>
<text x="114.69999999999999" y="51" fontSize="10.5" fill="var(--muted)">Rochard · Goldstein</text>
<rect x="246.59999999999997" y="42" width="10" height="10" rx="2" fill="var(--accent)"/>
<text x="260.59999999999997" y="51" fontSize="10.5" fill="var(--muted)">Parker Lewis</text>
<rect x="349.79999999999995" y="42" width="10" height="10" rx="2" fill="var(--muted-2)"/>
<text x="363.79999999999995" y="51" fontSize="10.5" fill="var(--muted)">Everyone else</text>
<line x1="64" x2="796" y1="182.9" y2="182.9" stroke="var(--border)" strokeWidth="1"/>
<text x="56" y="186.9" fontSize="10" textAnchor="end" fill="var(--muted-2)">10</text>
<line x1="64" x2="796" y1="119.8" y2="119.8" stroke="var(--border)" strokeWidth="1"/>
<text x="56" y="123.8" fontSize="10" textAnchor="end" fill="var(--muted-2)">20</text>
<line x1="64" x2="796" y1="246" y2="246" stroke="var(--muted-2)" strokeWidth="1"/>
<rect x="75.2" y="239.7" width="34" height="6.3" fill="var(--accent-soft)"/>
<rect x="75.2" y="233.4" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="92.2" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2012</text>
<text x="92.2" y="227.4" fontSize="10.5" textAnchor="middle" fill="var(--muted)">2</text>
<rect x="131.5" y="195.5" width="34" height="50.5" fill="var(--star)"/>
<rect x="131.5" y="176.6" width="34" height="18.9" fill="var(--accent-soft)"/>
<rect x="131.5" y="170.3" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="148.5" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2013</text>
<text x="148.5" y="164.3" fontSize="10.5" textAnchor="middle" fill="var(--muted)">12</text>
<rect x="187.8" y="119.8" width="34" height="126.2" fill="var(--star)"/>
<rect x="187.8" y="100.9" width="34" height="18.9" fill="var(--accent-soft)"/>
<rect x="187.8" y="82.0" width="34" height="18.9" fill="var(--muted-2)"/>
<text x="204.8" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2014</text>
<text x="204.8" y="76.0" fontSize="10.5" textAnchor="middle" fill="var(--muted)">26</text>
<rect x="244.1" y="233.4" width="34" height="12.6" fill="var(--star)"/>
<rect x="244.1" y="227.1" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="261.1" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2015</text>
<text x="261.1" y="221.1" fontSize="10.5" textAnchor="middle" fill="var(--muted)">3</text>
<rect x="300.4" y="227.1" width="34" height="18.9" fill="var(--star)"/>
<rect x="300.4" y="220.8" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="317.4" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2016</text>
<text x="317.4" y="214.8" fontSize="10.5" textAnchor="middle" fill="var(--muted)">4</text>
<rect x="356.7" y="239.7" width="34" height="6.3" fill="var(--star)"/>
<rect x="356.7" y="220.8" width="34" height="18.9" fill="var(--muted-2)"/>
<text x="373.7" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2017</text>
<text x="373.7" y="214.8" fontSize="10.5" textAnchor="middle" fill="var(--muted)">4</text>
<rect x="413.0" y="239.7" width="34" height="6.3" fill="var(--accent-soft)"/>
<rect x="413.0" y="227.1" width="34" height="12.6" fill="var(--muted-2)"/>
<text x="430.0" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2018</text>
<text x="430.0" y="221.1" fontSize="10.5" textAnchor="middle" fill="var(--muted)">3</text>
<rect x="469.3" y="176.6" width="34" height="69.4" fill="var(--accent)"/>
<rect x="469.3" y="170.3" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="486.3" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2019</text>
<text x="486.3" y="164.3" fontSize="10.5" textAnchor="middle" fill="var(--muted)">12</text>
<rect x="525.6" y="214.5" width="34" height="31.5" fill="var(--accent)"/>
<text x="542.6" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2020</text>
<text x="542.6" y="208.5" fontSize="10.5" textAnchor="middle" fill="var(--muted)">5</text>
<rect x="581.9" y="239.7" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="598.9" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2021</text>
<text x="598.9" y="233.7" fontSize="10.5" textAnchor="middle" fill="var(--muted)">1</text>
<rect x="638.2" y="239.7" width="34" height="6.3" fill="var(--accent-soft)"/>
<rect x="638.2" y="233.4" width="34" height="6.3" fill="var(--muted-2)"/>
<text x="655.2" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2022</text>
<text x="655.2" y="227.4" fontSize="10.5" textAnchor="middle" fill="var(--muted)">2</text>
<rect x="694.5" y="239.7" width="34" height="6.3" fill="var(--accent-soft)"/>
<text x="711.5" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2023</text>
<text x="711.5" y="233.7" fontSize="10.5" textAnchor="middle" fill="var(--muted)">1</text>
<rect x="750.8" y="239.7" width="34" height="6.3" fill="var(--accent-soft)"/>
<text x="767.8" y="262" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">2024</text>
<text x="767.8" y="233.7" fontSize="10.5" textAnchor="middle" fill="var(--muted)">1</text>
<text x="234.76923076923077" y="86" fontSize="11.5" fontWeight="600" textAnchor="start" fill="var(--foreground)">The canon year: 26 essays, 20 of them Krawisz</text>
<text x="460.3076923076923" y="150" fontSize="11" fontWeight="400" textAnchor="end" fill="var(--muted)">2015–2018: the quiet years</text>
<text x="460.3076923076923" y="164" fontSize="10.5" fontWeight="400" textAnchor="end" fill="var(--muted-2)">14 essays in four years; Krawisz&apos;s last, Jan 2017</text>
<text x="516.3076923076924" y="112" fontSize="11.5" fontWeight="600" textAnchor="start" fill="var(--foreground)">Parker Lewis&apos;s 16-part</text>
<text x="516.3076923076924" y="128" fontSize="11" fontWeight="400" textAnchor="start" fill="var(--muted)">Gradually, Then Suddenly (2019–20)</text>
<text x="711.5384615384615" y="190" fontSize="10.5" fontWeight="400" textAnchor="middle" fill="var(--muted-2)">2021–24: one or two a year;</text>
<text x="711.5384615384615" y="204" fontSize="10.5" fontWeight="400" textAnchor="middle" fill="var(--muted-2)">the work moves to the archive</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">essays by publication year · counted from the Mempool index, September 2026</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The Mempool by year. Seventy-six essays over thirteen years, and the shape of the story is in the bars: the 2014 canon year, the 2015–2018 trough after the director of research fell silent, the 2019–2020 rise when Parker Lewis published his sixteen-part series on the shelf, then the archival years before the 2024 relaunch. Counted from the Institute&apos;s index, September 2026.
      </figcaption>
    </figure>
  );
}

function SniRelaunchFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The relaunch, March 2024 to February 2025">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">GOING INSTITUTIONAL · MARCH 2024 → FEBRUARY 2025</text>
<line x1="66" x2="690" y1="150" y2="150" stroke="var(--accent)" strokeWidth="2"/>
<line x1="690" x2="724" y1="150" y2="150" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4"/>
<text x="726" y="142" fontSize="10" fill="var(--muted-2)">→ Jan 2026</text>
<text x="726" y="155" fontSize="10" fill="var(--muted-2)">annual dinner</text>
<line x1="66.0" x2="66.0" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="66.0" y="168" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Mar 2024</text>
<line x1="119.0" x2="119.0" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="170.3" x2="170.3" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="223.3" x2="223.3" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="223.3" y="168" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Jun 2024</text>
<line x1="274.6" x2="274.6" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="327.6" x2="327.6" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="380.6" x2="380.6" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="380.6" y="168" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Sep 2024</text>
<line x1="431.9" x2="431.9" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="484.8" x2="484.8" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="536.1" x2="536.1" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="536.1" y="168" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Dec 2024</text>
<line x1="589.1" x2="589.1" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="642.1" x2="642.1" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<line x1="690.0" x2="690.0" y1="146" y2="154" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="690.0" y="168" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Mar 2025</text>
<line x1="71.1" x2="71.1" y1="144" y2="80" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="71.1" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="71.1" y="46" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Going institutional</text>
<text x="71.1" y="59" fontSize="10" textAnchor="middle" fill="var(--muted-2)">a Texas 501(c)(3) public charity</text>
<text x="71.1" y="72" fontSize="10" textAnchor="middle" fill="var(--accent)">Mar 4, 2024</text>
<line x1="144.6" x2="144.6" y1="156" y2="220" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="144.6" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="144.6" y="242" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Redesign fundraiser</text>
<text x="144.6" y="255" fontSize="10" textAnchor="middle" fill="var(--muted-2)">opens</text>
<text x="144.6" y="228" fontSize="10" textAnchor="middle" fill="var(--accent)">Apr 16, 2024</text>
<line x1="168.6" x2="168.6" y1="144" y2="128" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="168.6" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="168.6" y="94" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Translation community</text>
<text x="168.6" y="107" fontSize="10" textAnchor="middle" fill="var(--muted-2)">15+ languages</text>
<text x="168.6" y="120" fontSize="10" textAnchor="middle" fill="var(--accent)">Apr 30, 2024</text>
<line x1="214.7" x2="214.7" y1="156" y2="172" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="214.7" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="214.7" y="194" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">21 million sats</text>
<text x="214.7" y="207" fontSize="10" textAnchor="middle" fill="var(--muted-2)">redesign fund closes</text>
<text x="214.7" y="180" fontSize="10" textAnchor="middle" fill="var(--accent)">May 27, 2024</text>
<line x1="281.4" x2="281.4" y1="144" y2="80" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="281.4" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="281.4" y="46" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">OpenSats</text>
<text x="281.4" y="59" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Education Initiative grant</text>
<text x="281.4" y="72" fontSize="10" textAnchor="middle" fill="var(--accent)">Jul 5, 2024</text>
<line x1="317.3" x2="317.3" y1="156" y2="220" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="317.3" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="317.3" y="242" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">The new SNI</text>
<text x="317.3" y="255" fontSize="10" textAnchor="middle" fill="var(--muted-2)">“Gradually, Then Suddenly”</text>
<text x="317.3" y="228" fontSize="10" textAnchor="middle" fill="var(--accent)">Jul 26, 2024</text>
<line x1="351.5" x2="351.5" y1="144" y2="128" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="351.5" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="351.5" y="94" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">P2P Research emails</text>
<text x="351.5" y="107" fontSize="10" textAnchor="middle" fill="var(--muted-2)">added to the archive</text>
<text x="351.5" y="120" fontSize="10" textAnchor="middle" fill="var(--accent)">Aug 15, 2024</text>
<line x1="660.9" x2="660.9" y1="156" y2="172" stroke="var(--muted-2)" strokeWidth="1"/>
<circle cx="660.9" cy="150" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="660.9" y="194" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">The Reorg</text>
<text x="660.9" y="207" fontSize="10" textAnchor="middle" fill="var(--muted-2)">podcast: re-reading the archive</text>
<text x="660.9" y="180" fontSize="10" textAnchor="middle" fill="var(--accent)">Feb 12, 2025</text>
<text x="405.0" y="292" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">dated from the Institute’s newsletter archive · to scale by month</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Going institutional. Eleven months from a newsletter post announcing tax-exempt status to a podcast re-reading the archive, with the redesign fund, the translation community, the OpenSats grant, and the new site in between. Dated from the Institute&apos;s own newsletter archive; drawn to scale by month.
      </figcaption>
    </figure>
  );
}

function SniSatoshiFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Satoshi's public record by month, October 2008 to December 2010">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE COMPLETE SATOSHI · 543 FORUM POSTS AND 39 LIST EMAILS, BY MONTH</text>
<rect x="600" y="44" width="10" height="10" rx="2" fill="var(--accent)"/><text x="614" y="53" fontSize="10.5" fill="var(--muted)">forum posts</text>
<rect x="700" y="44" width="10" height="10" rx="2" fill="var(--star)"/><text x="714" y="53" fontSize="10.5" fill="var(--muted)">list emails</text>
<line x1="64" x2="672" y1="179.8" y2="179.8" stroke="var(--border)" strokeWidth="1"/>
<text x="56" y="183.8" fontSize="10" textAnchor="end" fill="var(--muted-2)">50</text>
<line x1="64" x2="672" y1="123.5" y2="123.5" stroke="var(--border)" strokeWidth="1"/>
<text x="56" y="127.5" fontSize="10" textAnchor="end" fill="var(--muted-2)">100</text>
<line x1="64" x2="672" y1="236" y2="236" stroke="var(--muted-2)" strokeWidth="1"/>
<rect x="67.4" y="234.5" width="15.8" height="1.5" fill="var(--star)"/>
<line x1="64.0" x2="64.0" y1="236" y2="242" stroke="var(--muted-2)"/>
<text x="68.0" y="254" fontSize="10.5" fill="var(--muted-2)">2008</text>
<rect x="89.9" y="220.2" width="15.8" height="15.8" fill="var(--star)"/>
<rect x="112.4" y="234.5" width="15.8" height="1.5" fill="var(--star)"/>
<rect x="134.9" y="227.0" width="15.8" height="9.0" fill="var(--star)"/>
<line x1="131.6" x2="131.6" y1="236" y2="242" stroke="var(--muted-2)"/>
<text x="135.6" y="254" fontSize="10.5" fill="var(--muted-2)">2009</text>
<rect x="157.5" y="232.6" width="15.8" height="3.4" fill="var(--accent)"/>
<rect x="157.5" y="224.8" width="15.8" height="7.9" fill="var(--star)"/>
<rect x="180.0" y="234.5" width="15.8" height="1.5" fill="var(--star)"/>
<rect x="337.6" y="234.5" width="15.8" height="1.5" fill="var(--star)"/>
<rect x="360.1" y="224.8" width="15.8" height="11.2" fill="var(--accent)"/>
<rect x="382.6" y="221.4" width="15.8" height="14.6" fill="var(--accent)"/>
<rect x="382.6" y="219.9" width="15.8" height="1.5" fill="var(--star)"/>
<rect x="405.2" y="223.6" width="15.8" height="12.4" fill="var(--accent)"/>
<line x1="401.8" x2="401.8" y1="236" y2="242" stroke="var(--muted-2)"/>
<text x="405.8" y="254" fontSize="10.5" fill="var(--muted-2)">2010</text>
<rect x="427.7" y="182.0" width="15.8" height="54.0" fill="var(--accent)"/>
<rect x="450.2" y="223.6" width="15.8" height="12.4" fill="var(--accent)"/>
<rect x="495.2" y="218.0" width="15.8" height="18.0" fill="var(--accent)"/>
<rect x="517.7" y="183.1" width="15.8" height="52.9" fill="var(--accent)"/>
<rect x="540.3" y="74.0" width="15.8" height="162.0" fill="var(--accent)"/>
<rect x="540.3" y="71.8" width="15.8" height="2.2" fill="var(--star)"/>
<rect x="562.8" y="92.0" width="15.8" height="144.0" fill="var(--accent)"/>
<rect x="562.8" y="90.5" width="15.8" height="1.5" fill="var(--star)"/>
<rect x="585.3" y="193.2" width="15.8" height="42.8" fill="var(--accent)"/>
<rect x="607.8" y="203.4" width="15.8" height="32.6" fill="var(--accent)"/>
<rect x="630.3" y="211.2" width="15.8" height="24.8" fill="var(--accent)"/>
<rect x="652.9" y="211.2" width="15.8" height="24.8" fill="var(--accent)"/>
<rect x="652.9" y="209.0" width="15.8" height="2.2" fill="var(--star)"/>
<text x="103.8" y="120" fontSize="11.5" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Oct 31, 2008</text>
<text x="103.8" y="134" fontSize="10" fontWeight="400" textAnchor="start" fill="var(--muted-2)">the whitepaper email; a month of</text>
<text x="103.8" y="146" fontSize="10" fontWeight="400" textAnchor="start" fill="var(--muted-2)">argument on the cryptography list</text>
<text x="148.8" y="176" fontSize="11.5" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Jan 2009</text>
<text x="148.8" y="190" fontSize="10" fontWeight="400" textAnchor="start" fill="var(--muted-2)">genesis block; v0.1 released</text>
<text x="368.0" y="204" fontSize="11.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Nov 2009</text>
<text x="368.0" y="218" fontSize="10" fontWeight="400" textAnchor="middle" fill="var(--muted-2)">the forum opens</text>
<text x="513.6" y="66" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Summer 2010 · 272 posts in two months</text>
<text x="513.6" y="80" fontSize="10" fontWeight="400" textAnchor="end" fill="var(--muted-2)">exchanges, Slashdot, the first GPU miners;</text>
<text x="513.6" y="92" fontSize="10" fontWeight="400" textAnchor="end" fill="var(--muted-2)">the peak is July: 144 posts</text>
<text x="676.7" y="176" fontSize="11.5" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Dec 12, 2010</text>
<text x="676.7" y="190" fontSize="10" fontWeight="400" textAnchor="start" fill="var(--muted-2)">the last forum post;</text>
<text x="676.7" y="202" fontSize="10" fontWeight="400" textAnchor="start" fill="var(--muted-2)">one more in March 2014:</text>
<text x="676.7" y="214" fontSize="10" fontWeight="400" textAnchor="start" fill="var(--muted-2)">“I am not Dorian Nakamoto”</text>
<text x="405.0" y="292" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">counted from the Complete Satoshi index, September 2026 · the whitepaper, the code, and private correspondence are archived separately</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What the archive holds, by month. Every public word: 39 mailing-list emails from the whitepaper announcement on October 31, 2008, and 543 forum posts from February 2009 to the last on December 12, 2010, with the busy summer of 2010 at the center. Counted from the Complete Satoshi index, September 2026.
      </figcaption>
    </figure>
  );
}

export default function SatoshiNakamotoInstitutePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Satoshi Nakamoto Institute: The Canon Was Written in Austin",
    description:
      "The sourced history of the Austin nonprofit that archives Satoshi's writings and published the essays that coined hyperbitcoinization and speculative attack: the UT reading group, the 2014 canon, the co-founder who left for BSV, and the 2024 relaunch.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Organization", name: "Satoshi Nakamoto Institute", url: "https://nakamotoinstitute.org/" },
      { "@type": "Person", name: "Michael Goldstein" },
      { "@type": "Person", name: "Pierre Rochard" },
      { "@type": "Person", name: "Daniel Krawisz" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Satoshi Nakamoto Institute",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[articleJsonLd, faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / The Satoshi Nakamoto Institute
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The builders
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Satoshi Nakamoto Institute: The Canon Was Written in Austin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Before Texas had a mining boom, a reserve, or a single Bitcoin
            statute, three students in an Austrian-economics reading group at
            the University of Texas started writing down why Bitcoin would
            win. The words they used – hyperbitcoinization, speculative
            attack, everyone&apos;s a scammer – became the working vocabulary
            of the Bitcoin-only worldview, and the archive they built became
            the closest thing the network has to a library. This is the
            record of the Satoshi Nakamoto Institute: the reading group, the
            canon, the co-founder who walked out the other door, and the
            relaunch that turned a website into an institution.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published September 1, 2026 · Updated{" "}
            {SNI_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Satoshi Nakamoto Institute is an Austin, Texas nonprofit
            founded in November 2013 by Michael Goldstein, Daniel Krawisz,
            and Pierre Rochard, three members of a University of Texas
            Austrian-economics reading group. It maintains the Complete
            Satoshi archive, a Library of Bitcoin&apos;s cypherpunk and
            monetary canon, and the Mempool essays that coined
            &ldquo;hyperbitcoinization.&rdquo; It became a 501(c)(3) in 2024
            and relaunched with OpenSats funding.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The Satoshi Nakamoto Institute was founded in November 2013 by
              Michael Goldstein, Daniel Krawisz, and Pierre Rochard.
              <C n={1} /><C n={2} />
            </li>
            <li>
              Daniel Krawisz coined &ldquo;hyperbitcoinization&rdquo; in an
              Institute essay published March 29, 2014.<C n={6} />
            </li>
            <li>
              Pierre Rochard&apos;s &ldquo;Speculative Attack&rdquo; was
              published July 4, 2014, and Michael Goldstein&apos;s
              &ldquo;Everyone&apos;s a Scammer&rdquo; on September 11, 2014.
              <C n={5} /><C n={7} />
            </li>
            <li>
              Krawisz&apos;s last Institute essay ran January 8, 2017; by
              2020 he was a Bitcoin SV advocate saying &ldquo;BTC betrayed
              me.&rdquo;<C n={6} /><C n={13} />
            </li>
            <li>
              The Institute became a Texas 501(c)(3) in March 2024, raised 21
              million sats for a redesign, and shipped its new site July 26,
              2024.<C n={14} /><C n={17} />
            </li>
            <li>
              OpenSats funded the Institute on July 5, 2024, with 213 million
              sats in total support; fiscal 2024 revenue was about $138,000.
              <C n={16} /><C n={17} />
            </li>
          </ul>
        </div>

        <SniLineageFigure />

        {/* Timeline - the arc, in order */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              From the reading group to the institution
            </h2>
            <span className="text-xs text-muted-2">2012 → 2025</span>
          </div>
          <ol className="mt-5 space-y-4">
            {sniTimeline.map((e) => {
              const s = kindStyle[e.kind];
              return (
                <li
                  key={e.date}
                  className="relative rounded-xl border border-border bg-surface p-5 pl-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                    style={{ background: s.color }}
                  />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <time dateTime={e.date} className="text-xs tabular-nums text-muted-2">
                      {e.dateLabel}
                    </time>
                    <span
                      className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        color: s.color,
                        borderColor: `color-mix(in srgb, ${s.color} 50%, transparent)`,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {e.detail}{" "}
                    {e.sourceIds.map((n) => (
                      <C key={n} n={n} />
                    ))}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="prose-tx mt-12">
          <h2>What is the Satoshi Nakamoto Institute, and why is it in Austin?</h2>
          <p>
            Because it began as a University of Texas reading group. Michael
            Goldstein ran the Mises Circle, an Austrian-economics study group
            on the Austin campus, and when Bitcoin reached it the group
            started writing – Pierre Rochard, a UT accounting student, from
            December 2012; Daniel Krawisz with a four-part series on
            crypto-anarchy in the spring of 2013.<C n={5} /><C n={6} />
            <C n={19} /><C n={3} /> In November 2013 the three launched the
            Institute under a name Goldstein says began as a joke in
            conversation – &ldquo;a Nakamoto Institute for Bitcoin&rdquo; –
            with a mission that has not changed since: &ldquo;to advance and
            preserve knowledge of Bitcoin&apos;s history, economics, and
            technology.&rdquo;<C n={1} /><C n={2} /><C n={3} /> The reading
            group posted the invitation to its successor in May 2014.
            <C n={4} /> Austin at the time had a Bitcoin meetup that drew a
            few dozen people on a good month; the Institute was the part of
            that room that wrote things down.<C n={3} /> The wider city story
            is in{" "}
            <Link href="/texas-crypto-archive">the Texas crypto archive</Link>.
          </p>

          <h2>What did the Institute write that the network still quotes?</h2>
          <p>
            Three essays in six months of 2014, and a vocabulary. On March
            29, Krawisz published <strong>&ldquo;Hyperbitcoinization&rdquo;</strong>{" "}
            – a voluntary transition from an inferior currency to a superior
            one, made of &ldquo;a series of individual acts of
            entrepreneurship rather than a single monopolist that games the
            system.&rdquo;<C n={6} /> On July 4, Rochard published{" "}
            <strong>&ldquo;Speculative Attack&rdquo;</strong>: Bitcoin
            overtakes weak currencies &ldquo;through speculative attacks and
            currency crises, not through the careful evaluation of tech
            journalists&rdquo; – borrow the weak money, buy the hard
            one.<C n={5} /> On September 11, Goldstein published{" "}
            <strong>&ldquo;Everyone&apos;s a Scammer&rdquo;</strong>:
            &ldquo;There is a war going on for your bitcoins, and willpower
            is your only defense.&rdquo;<C n={7} /> Around them sat the
            anti-altcoin line – &ldquo;The Problem with Altcoins,&rdquo;
            &ldquo;Appcoins Are Snake Oil,&rdquo; &ldquo;The Coming Demise of
            the Altcoins&rdquo; – years before the position had a slur to go
            with it, and Krawisz&apos;s &ldquo;The Legacy of the Dread Pirate
            Roberts,&rdquo; the Institute&apos;s reading of the case told on{" "}
            <Link href="/ross-ulbricht-silk-road-bitcoin">
              the Ross Ulbricht page
            </Link>
            .<C n={6} /> The Mempool then became the shelf the next
            generation published on: all sixteen parts of Parker
            Lewis&apos;s &ldquo;Gradually, Then Suddenly&rdquo; in 2019 and
            2020, Ross Ulbricht&apos;s &ldquo;Bitcoin Equals Freedom&rdquo; in
            2019, Gigi&apos;s &ldquo;Bitcoin is Time&rdquo; in 2021, and
            Goldstein&apos;s own return in 2022 and 2023 – seventy-six essays
            in all, counted in September 2026.<C n={8} />
          </p>

          <SniMempoolFigure />

          <h2>What does the archive actually hold?</h2>
          <p>
            Two reference works. <strong>The Complete Satoshi</strong> is the
            whitepaper, every known email and forum post, the original code,
            the curated quotes, and the PGP key of the pseudonymous author,
            spanning 2008 to 2012, published under a Creative Commons
            license – the copy of record that other archives cite.<C n={9} />{" "}
            <strong>The Library</strong> is the argument that Bitcoin has a
            lineage: David Chaum&apos;s blind signatures (1982), Tim
            May&apos;s crypto-anarchist manifesto (1988), Eric Hughes&apos;s
            cypherpunk manifesto (1993), Nick Szabo&apos;s smart contracts,
            &ldquo;Shelling Out,&rdquo; and Bit Gold, Wei Dai&apos;s b-money,
            Adam Back&apos;s hashcash, Hal Finney&apos;s reusable proofs of
            work – shelved beside Mises, Hayek, and Rothbard.<C n={10} /> Its
            first sentence is the Institute&apos;s thesis: &ldquo;Bitcoin was
            not forged in a vacuum.&rdquo;<C n={10} /> The site&apos;s own
            telling of that lineage, and of Texas&apos;s place in it, is{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            .
          </p>

          <SniSatoshiFigure />

          <h2>The honest counterweight: the co-founder who left, and the years nobody was home</h2>
          <p>
            The Institute&apos;s most prolific author ended up on the other
            side of its central argument. Krawisz wrote thirty-four of the
            Mempool&apos;s seventy-six essays; the last ran on January 8,
            2017.<C n={6} /><C n={8} />{" "}
            Seven months later, with Bitcoin Cash forking off, he told
            Bitcoin.com &ldquo;I don&apos;t like altcoins, but I like
            forks&rdquo; – forks put investors, not developers, in
            control.<C n={12} /> By 2020 he was a Bitcoin SV advocate:
            &ldquo;BTC betrayed me,&rdquo; and &ldquo;I lost the allies with
            whom I started the Satoshi Nakamoto Institute because they bought
            into &lsquo;core&rsquo; ideas&rdquo; – a think tank, he said,
            that should also have been a mining pool.<C n={13} /> The second
            criticism is quieter: between roughly 2017 and 2023 the Institute
            was a website, not an organization – new essays arrived, but the
            founders were elsewhere, Goldstein consulting and podcasting,
            Rochard at Kraken and then Riot.<C n={7} /><C n={18} /> And a
            third, which this site is in a position to notice: the canon
            described hyperbitcoinization as individual acts, not state
            policy – and the state that got there first was Texas, by
            statute, with{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              a $10 million reserve
            </Link>{" "}
            the essays never imagined.
          </p>
          <p>
            The fair reading is that all three are the record working as
            designed. The Institute did not delete Krawisz when he left; his
            thirty-four essays are online with the rest, which is what an
            archive is for.<C n={6} /> The dormant years still produced the shelf
            Parker Lewis and Gigi published on.<C n={8} /> And a state reserve
            is a speculative attack by another name – a treasury borrowing
            against the dollar to hold the harder asset – which is closer to
            Rochard&apos;s 2014 essay than to anything its critics predicted.
            The Institute&apos;s own podcast now grades these arguments
            against a decade of hindsight, episode by episode.<C n={15} />
          </p>

          <h2>What changed in 2024?</h2>
          <p>
            It became an institution in fact as well as name. On March 4,
            2024 the newsletter announced &ldquo;Going Institutional&rdquo;:
            a Texas 501(c)(3) public charity, with an IRS ruling that
            year.<C n={14} /><C n={17} /> A redesign fundraiser opened in
            April and closed on May 27 at 21 million sats; a translation
            community launched April 30 in more than fifteen
            languages.<C n={14} /><C n={3} /> On July 5, OpenSats funded the
            Institute under its Education Initiative – 213 million sats in
            total support – to rebuild the archive &ldquo;using the same
            preservation standards that govern the Library of
            Congress.&rdquo;<C n={16} /> On July 26 the new site shipped
            under a title borrowed from an Austin neighbor&apos;s essay
            series: &ldquo;The New SNI: Gradually, Then Suddenly.&rdquo;
            <C n={14} /> In February 2025 came The Reorg, Goldstein&apos;s
            re-reading of the archive, opening with Rochard on his 2013
            argument that Bitcoin competes with fiat.<C n={15} /> Fiscal
            2024 revenue was about $138,000; the first annual dinner was
            announced for early 2026.<C n={17} /><C n={14} />
          </p>

          <SniRelaunchFigure />

          <h2>Where does the Institute stand in the Texas story?</h2>
          <p>
            As the intellectual origin of the builder scene the rest of this
            site covers. Rochard, the speculative-attack theorist, became
            Vice President of Research at Riot Platforms – the company that
            owns{" "}
            <Link href="/rockdale-texas-bitcoin">the Rockdale mine</Link> –
            and then founded The Bitcoin Bond Company.<C n={18} /> Parker
            Lewis wrote his series on the Institute&apos;s shelf while
            building Unchained in Austin.<C n={8} /> A few miles away,{" "}
            <Link href="/jimmy-song-bitcoin">Jimmy Song</Link> was teaching
            the protocol at the same university the reading group came from.
            The officeholders who wrote Texas&apos;s Bitcoin law are on their
            own pages; this one is the room where the reasons were written
            first.
          </p>
        </div>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold">Sources</h2>
          <p className="mt-2 text-sm text-muted">
            Primary record first: the Institute&apos;s own site – About, the
            author pages and their essay dates, the Mempool, the Complete
            Satoshi, the Library, the newsletter archive; the founders in
            their own words on Epicenter, TFTC, and in the BSV press; the
            funder and the IRS record via ProPublica; trade press for the
            careers. This is a research and reference article, not
            financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sniSources.map((s) => (
              <li key={s.id} id={`r${s.id}`} className="flex scroll-mt-24 gap-2">
                <span className="shrink-0 text-muted-2">[{s.id}]</span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </>
  );
}
