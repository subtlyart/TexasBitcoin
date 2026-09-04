import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  MAP_LAST_VERIFIED,
  STATUS_LABELS,
  developedMw,
  miningSites,
  miningSources,
} from "@/lib/mining-sites";
import { MiningMap } from "@/components/mining-map";
import { SeamMark } from "@/components/seam-mark";

export const metadata: Metadata = {
  title: "Texas Bitcoin Mining Map — Every Major Mine",
  description:
    "The interactive, sourced map of industrial Bitcoin mining in Texas — Riot Rockdale, Corsicana, MARA Granbury, and the West Texas sites now turning to AI.",
  alternates: { canonical: `${site.url}/bitcoin-mining-map-texas` },
  openGraph: {
    type: "article",
    title: "Texas Bitcoin Mining Map",
    description:
      "Every major Bitcoin mine in Texas, mapped and sourced — from Rockdale's 700 MW flagship to the former mines becoming AI data centers.",
    url: `${site.url}/bitcoin-mining-map-texas`,
  },
};

const faqs = [
  {
    q: "What is the largest Bitcoin mine in Texas?",
    a: "Riot's Rockdale facility in Milam County is the largest Bitcoin mine in Texas, with 700 MW of developed capacity — the largest single Bitcoin mining facility in North America. It was built by Whinstone on the site of Alcoa's former aluminum smelter and acquired by Riot in May 2021 for roughly $651 million.",
  },
  {
    q: "Where are Bitcoin mines located in Texas?",
    a: "Texas Bitcoin mines cluster in two zones: central Texas industrial towns like Rockdale (Riot, Bitdeer), Corsicana (Riot), Granbury (MARA), and Denton (Core Scientific), and the wind- and gas-rich west — Odessa and Wink (Cipher), McCamey (Hut 8), and Dickens County (Galaxy Helios).",
  },
  {
    q: "Why are Texas Bitcoin mines becoming AI data centers?",
    a: "Because miners already hold what AI needs most: hundreds of megawatts of grid-approved power. Galaxy's Helios campus signed a 15-year CoreWeave lease and delivered its first 133 MW in July 2026, Core Scientific is converting Denton in a $6.1 billion buildout, and Cipher leased its new Black Pearl site to Amazon.",
  },
  {
    q: "Why is so much Bitcoin mining in West Texas?",
    a: "West Texas has abundant wind and solar generation, cheap land, and transmission that often carries more power than local demand can absorb. Miners act as flexible buyers of that stranded energy — Hut 8's 280 MW King Mountain site sits directly beside a wind farm — and power down when the grid needs the electrons back.",
  },
  {
    q: "Do Bitcoin mines strain the Texas grid?",
    a: "Large miners enroll with ERCOT as interruptible load and are paid to shut off during scarcity. In August 2023, Riot earned $31.7 million in power credits for curtailing during the heat wave. The real local friction has been noise, not power: MARA's Granbury mine faces nuisance lawsuits from neighbors over its cooling fans.",
  },
  {
    q: "What is the Texas data-center queue freeze?",
    a: "On August 4, 2026, Governor Abbott directed the Public Utility Commission and ERCOT to audit every data-center project in the state's interconnection queue, and ERCOT paused its 'Batch Zero' classification of large new loads. Data-center requests had reached roughly 90% of a 474 GW queue. The practical effect is to make already-approved power — including the Bitcoin miners' — more valuable.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#ms${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

// mining-figs:start
// Five figures, one per chapter, generated from lib/mining-sites.ts and the
// figures the chapters cite (Sept 2026). Server-rendered SVG, no client JS.
function MiningRankFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 448" role="img" aria-label="The mapped Texas sites ranked by capacity in megawatts">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SITES BY MEGAWATT · THE 13 MAPPED SITES, RANKED</text>
<rect x="28" y="42" width="10" height="10" rx="2" fill="var(--accent)" stroke="none"/>
<text x="42" y="51" fontSize="10.5" fill="var(--muted)">Bitcoin mining</text>
<rect x="143.39999999999998" y="42" width="10" height="10" rx="2" fill="var(--accent-soft)" stroke="none"/>
<text x="157.39999999999998" y="51" fontSize="10.5" fill="var(--muted)">mining + AI pivot underway</text>
<rect x="332.0" y="42" width="10" height="10" rx="2" fill="var(--muted)" stroke="none"/>
<text x="346.0" y="51" fontSize="10.5" fill="var(--muted)">AI/HPC data center</text>
<rect x="471.8" y="42" width="10" height="10" rx="2" fill="var(--muted-2)" stroke="none"/>
<text x="485.8" y="51" fontSize="10.5" fill="var(--muted)">historic</text>
<rect x="550.6" y="42" width="10" height="10" rx="2" fill="var(--border)" stroke="var(--muted-2)"/>
<text x="564.6" y="51" fontSize="10.5" fill="var(--muted)">announced</text>
<text x="238" y="83" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">MARA Matagorda</text>
<rect x="250" y="70" width="310.0" height="18" rx="3" fill="var(--border)" stroke="var(--muted-2)" strokeDasharray="3 3"/>
<text x="568.0" y="83" fontSize="10.5" fill="var(--muted)">2,000 MW</text>
<text x="627.2" y="83" fontSize="10" fill="var(--muted-2)">Matagorda County · online 2027</text>
<text x="238" y="109" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Hut 8 Beacon Point</text>
<rect x="250" y="96" width="155.0" height="18" rx="3" fill="var(--muted)"/>
<text x="413.0" y="109" fontSize="10.5" fill="var(--muted)">1,000 MW</text>
<text x="472.2" y="109" fontSize="10" fill="var(--muted-2)">Nueces County · online 2026</text>
<text x="238" y="135" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Galaxy Helios</text>
<rect x="250" y="122" width="124.0" height="18" rx="3" fill="var(--muted)"/>
<text x="382.0" y="135" fontSize="10.5" fill="var(--muted)">800 MW</text>
<text x="428.4" y="135" fontSize="10" fill="var(--muted-2)">Dickens County · online 2022</text>
<text x="238" y="161" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Riot Rockdale</text>
<rect x="250" y="148" width="108.5" height="18" rx="3" fill="var(--accent-soft)"/>
<text x="366.5" y="161" fontSize="10.5" fill="var(--muted)">700 MW</text>
<text x="412.9" y="161" fontSize="10" fill="var(--muted-2)">Rockdale · Milam County · online 2020</text>
<text x="238" y="187" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Riot Corsicana</text>
<rect x="250" y="174" width="62.0" height="18" rx="3" fill="var(--accent-soft)"/>
<text x="320.0" y="187" fontSize="10.5" fill="var(--muted)">400 MW</text>
<text x="366.4" y="187" fontSize="10" fill="var(--muted-2)">Corsicana · Navarro County · online 2024</text>
<text x="238" y="213" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">MARA Granbury</text>
<rect x="250" y="200" width="46.5" height="18" rx="3" fill="var(--accent)"/>
<text x="304.5" y="213" fontSize="10.5" fill="var(--muted)">300 MW</text>
<text x="350.9" y="213" fontSize="10" fill="var(--muted-2)">Granbury · Hood County · online 2022</text>
<text x="238" y="239" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Cipher Black Pearl</text>
<rect x="250" y="226" width="46.5" height="18" rx="3" fill="var(--accent-soft)"/>
<text x="304.5" y="239" fontSize="10.5" fill="var(--muted)">300 MW</text>
<text x="350.9" y="239" fontSize="10" fill="var(--muted-2)">Wink · Winkler County · online 2025</text>
<text x="238" y="265" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Cipher Barber Lake</text>
<rect x="250" y="252" width="46.5" height="18" rx="3" fill="var(--muted)"/>
<text x="304.5" y="265" fontSize="10.5" fill="var(--muted)">300 MW</text>
<text x="350.9" y="265" fontSize="10" fill="var(--muted-2)">Colorado City · Mitchell County · online 2026</text>
<text x="238" y="291" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Hut 8 King Mountain</text>
<rect x="250" y="278" width="43.4" height="18" rx="3" fill="var(--accent)"/>
<text x="301.4" y="291" fontSize="10.5" fill="var(--muted)">280 MW</text>
<text x="347.8" y="291" fontSize="10" fill="var(--muted-2)">McCamey · Upton County · online 2022</text>
<text x="238" y="317" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Core Scientific Denton</text>
<rect x="250" y="304" width="40.3" height="18" rx="3" fill="var(--muted)"/>
<text x="298.3" y="317" fontSize="10.5" fill="var(--muted)">260 MW</text>
<text x="344.7" y="317" fontSize="10" fill="var(--muted-2)">Denton · Denton County · online 2022</text>
<text x="238" y="343" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Cipher Odessa</text>
<rect x="250" y="330" width="32.1" height="18" rx="3" fill="var(--accent)"/>
<text x="290.1" y="343" fontSize="10.5" fill="var(--muted)">207 MW</text>
<text x="336.5" y="343" fontSize="10" fill="var(--muted-2)">Odessa · Ector County · online 2022</text>
<text x="238" y="369" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Bitdeer Rockdale</text>
<rect x="250" y="356" width="26.4" height="18" rx="3" fill="var(--accent)"/>
<text x="284.4" y="369" fontSize="10.5" fill="var(--muted)">170 MW</text>
<text x="330.8" y="369" fontSize="10" fill="var(--muted-2)">Rockdale · Milam County · online 2019</text>
<text x="238" y="395" fontSize="11.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Layer1</text>
<rect x="250" y="382" width="15.5" height="18" rx="3" fill="var(--muted-2)"/>
<text x="273.5" y="395" fontSize="10.5" fill="var(--muted)">100 MW</text>
<text x="319.9" y="395" fontSize="10" fill="var(--muted-2)">Ward County · online 2020</text>
<text x="405.0" y="438" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">operator-published capacity, developed or contracted · colored by 2026 status · not hashrate</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The sites by megawatt. The mapped sites ranked by developed or contracted capacity, colored by what each is doing in 2026: still mining, pivoting, converted to AI, or announced. Rockdale&apos;s 700 MW led the mining era; the gigawatt campuses now above it are the AI turn.
      </figcaption>
    </figure>
  );
}

function MiningCurtailFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Mine cheap, curtail high: how a Texas mine responds to a grid price spike">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">MINE CHEAP, CURTAIL HIGH · A HOT TEXAS DAY, SCHEMATICALLY</text>
<path d="M64.0,206.1 L180.0,212.7 L296.0,201.1 L412.0,184.5 L470.0,167.9 L499.0,109.8 L528.0,68.3 L557.0,60.0 L586.0,76.6 L615.0,126.4 L644.0,167.9 L702.0,196.1 L760.0,206.1" fill="none" stroke="var(--star)" strokeWidth="2"/>
<path d="M64.0,134.7 L499.0,134.7 L504.8,217.7 L615.0,217.7 L620.8,134.7 L760.0,134.7" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
<rect x="499.0" y="60" width="116.0" height="166" fill="var(--accent)" fillOpacity="0.08"/>
<text x="64.0" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">00:00</text>
<text x="238.0" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">06:00</text>
<text x="412.0" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">12:00</text>
<text x="586.0" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">18:00</text>
<text x="760.0" y="242" fontSize="10" textAnchor="middle" fill="var(--muted-2)">24:00</text>
<line x1="64" x2="760" y1="226" y2="226" stroke="var(--muted-2)"/>
<text x="151.0" y="123.1" fontSize="10.5" fontWeight="600" fill="var(--accent)">mine load · full</text>
<text x="151.0" y="192.8" fontSize="10.5" fontWeight="600" fill="var(--star)">wholesale price</text>
<text x="557.0" y="176.2" fontSize="11.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">curtailed</text>
<text x="557.0" y="189.5" fontSize="10" textAnchor="middle" fill="var(--muted-2)">power sold back or demand</text>
<text x="557.0" y="201.1" fontSize="10" textAnchor="middle" fill="var(--muted-2)">response paid by ERCOT</text>
<text x="557.0" y="52" fontSize="10.5" textAnchor="middle" fill="var(--star)">the evening peak</text>
<text x="64" y="268" fontSize="11" fill="var(--muted)">Layer1 ran this play in Ward County in 2020; Riot earned $31.7M doing it at Rockdale in August 2023 – more than its bitcoin that month.</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">schematic, not a real day · ERCOT demand-response and 4CP programs pay large loads to power down when the grid is stressed</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Mine cheap, curtail high, schematically. A Texas mine runs flat out on cheap overnight and midday power, then powers down through the evening peak, selling its electricity back or collecting demand-response payments from ERCOT. The playbook Layer1 proved in 2020 became the industry&apos;s standard grid pitch.
      </figcaption>
    </figure>
  );
}

function MiningAiTurnFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 262" role="img" aria-label="The AI turn in megawatts: mapped capacity by 2026 status, and the pivot timeline">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE AI TURN, IN MEGAWATTS · 6,817 MW MAPPED, BY WHAT IT IS DOING IN 2026</text>
<rect x="28.0" y="56" width="105.8" height="34" fill="var(--accent)"/>
<text x="80.9" y="77" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--surface)">957 MW</text>
<text x="80.9" y="106" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Bitcoin mining</text>
<rect x="133.8" y="56" width="154.8" height="34" fill="var(--accent-soft)"/>
<text x="211.3" y="77" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--surface)">1,400 MW</text>
<text x="211.3" y="106" fontSize="10" textAnchor="middle" fill="var(--muted-2)">mining + AI pivot underway</text>
<rect x="288.7" y="56" width="261.0" height="34" fill="var(--muted)"/>
<text x="419.2" y="77" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--foreground)">2,360 MW</text>
<text x="419.2" y="106" fontSize="10" textAnchor="middle" fill="var(--muted-2)">AI/HPC data center</text>
<rect x="549.7" y="56" width="11.1" height="34" fill="var(--muted-2)"/>
<text x="555.3" y="106" fontSize="10" textAnchor="middle" fill="var(--muted-2)">historic</text>
<rect x="560.8" y="56" width="221.2" height="34" fill="var(--border)" stroke="var(--muted-2)" strokeDasharray="3 3"/>
<text x="671.4" y="77" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--foreground)">2,000 MW</text>
<text x="671.4" y="106" fontSize="10" textAnchor="middle" fill="var(--muted-2)">announced</text>
<text x="28" y="146" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHEN EACH MINE TURNED</text>
<line x1="64" x2="760" y1="190" y2="190" stroke="var(--muted-2)"/>
<line x1="64.0" x2="64.0" y1="186" y2="194" stroke="var(--muted-2)"/>
<text x="64.0" y="208" fontSize="10" textAnchor="middle" fill="var(--muted-2)">2023</text>
<line x1="296.0" x2="296.0" y1="186" y2="194" stroke="var(--muted-2)"/>
<text x="296.0" y="208" fontSize="10" textAnchor="middle" fill="var(--muted-2)">2024</text>
<line x1="528.0" x2="528.0" y1="186" y2="194" stroke="var(--muted-2)"/>
<text x="528.0" y="208" fontSize="10" textAnchor="middle" fill="var(--muted-2)">2025</text>
<line x1="760.0" x2="760.0" y1="186" y2="194" stroke="var(--muted-2)"/>
<text x="760.0" y="208" fontSize="10" textAnchor="middle" fill="var(--muted-2)">2026</text>
<line x1="64.0" x2="64.0" y1="184" y2="182" stroke="var(--muted-2)"/>
<circle cx="64.0" cy="176" r="4" fill="var(--muted)" stroke="var(--surface)" strokeWidth="1.5"/>
<text x="74.0" y="180" fontSize="10.5" textAnchor="start" fill="var(--foreground)">Galaxy Helios</text>
<line x1="296.0" x2="296.0" y1="184" y2="182" stroke="var(--muted-2)"/>
<circle cx="296.0" cy="176" r="4" fill="var(--muted)" stroke="var(--surface)" strokeWidth="1.5"/>
<text x="306.0" y="180" fontSize="10.5" textAnchor="start" fill="var(--foreground)">Core Scientific Denton</text>
<line x1="528.0" x2="528.0" y1="184" y2="182" stroke="var(--muted-2)"/>
<circle cx="528.0" cy="176" r="4" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="1.5"/>
<text x="538.0" y="180" fontSize="10.5" textAnchor="start" fill="var(--foreground)">Riot Corsicana</text>
<line x1="528.0" x2="528.0" y1="184" y2="160" stroke="var(--muted-2)"/>
<circle cx="528.0" cy="154" r="4" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="1.5"/>
<text x="538.0" y="158" fontSize="10.5" textAnchor="start" fill="var(--foreground)">Cipher Black Pearl</text>
<line x1="760.0" x2="760.0" y1="184" y2="182" stroke="var(--muted-2)"/>
<circle cx="760.0" cy="176" r="4" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="1.5"/>
<text x="750.0" y="180" fontSize="10.5" textAnchor="end" fill="var(--foreground)">Riot Rockdale</text>
<text x="405.0" y="252" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">from the map dataset · pivot year = first AI/HPC tenant or conversion announced · Bitcoin remains the anchor tenant at hybrid sites</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The AI turn, in megawatts. Of the 6,817 MW on the map, the share still mining, the share pivoting with mining as anchor tenant, the share converted to AI, and the share announced, with the year each converting site turned. Not Bitcoin losing to AI: the power Bitcoin connected becoming the on-ramp.
      </figcaption>
    </figure>
  );
}

function MiningQueueFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 260" role="img" aria-label="ERCOT interconnection queue, early 2026 versus August 2026, against the mapped sites">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE QUEUE · WHAT THE AUGUST 2026 AUDIT IS SORTING</text>
<text x="218" y="76" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Queue, early 2026</text>
<rect x="230" y="60" width="257.5" height="24" rx="4" fill="var(--muted)"/>
<text x="497.5" y="76" fontSize="11" fill="var(--muted)">≈ 226 GW of interconnection requests</text>
<text x="218" y="120" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Queue, August 2026</text>
<rect x="230" y="104" width="540.0" height="24" rx="4" fill="var(--accent)"/>
<rect x="230" y="104" width="486.0" height="24" rx="4" fill="var(--surface)" fillOpacity="0.18"/>
<text x="240" y="120" fontSize="11" fontWeight="600" fill="var(--surface)">≈ 474 GW · about 90% data centers</text>
<text x="218" y="164" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">This map, developed + approved</text>
<rect x="230" y="148" width="5.5" height="24" rx="4" fill="var(--star)"/>
<text x="245.5" y="164" fontSize="11" fill="var(--muted)">≈ 4.8 GW · the sites already holding power</text>
<text x="230" y="198" fontSize="11" fill="var(--muted)">No grid can build 474 GW. An approved interconnection stops being paperwork and becomes the moat –</text>
<text x="230" y="216" fontSize="11" fill="var(--muted)">“if MWs are scarce, it makes sense to earn more per MW.”</text>
<text x="405.0" y="250" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">ERCOT queue figures as reported August 2026; Abbott’s audit order, Aug 4, 2026 · bars to scale</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The queue, to scale. ERCOT&apos;s interconnection requests roughly doubled in eight months to about 474 gigawatts, most of it data centers, against a few gigawatts of miner-built capacity already holding approved power. The August 2026 audit is the state sorting the real projects from the speculative ones.
      </figcaption>
    </figure>
  );
}

function MiningDealsFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="The deal board: contracted AI leases on Texas mining sites, by value">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE DEAL BOARD · AI LEASES ON MINER-BUILT POWER, BY CONTRACT VALUE</text>
<text x="218" y="72" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Hut 8 Beacon Point</text>
<text x="218" y="86" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">Nueces County · 2026</text>
<rect x="230" y="58" width="520.0" height="22" rx="4" fill="var(--accent)" fillOpacity="1.00"/>
<text x="758.0" y="73" fontSize="11.5" fontWeight="600" fill="var(--foreground)">$19.6B</text>
<text x="230" y="94" fontSize="10" fill="var(--muted-2)">1 GW · two 15-yr, 352 MW leases · reported Nvidia</text>
<text x="218" y="122" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Riot Rockdale</text>
<text x="218" y="136" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">Milam County · Aug 10, 2026</text>
<rect x="230" y="108" width="241.4" height="22" rx="4" fill="var(--accent)" fillOpacity="0.76"/>
<text x="479.4" y="123" fontSize="11.5" fontWeight="600" fill="var(--foreground)">$9.1B</text>
<text x="230" y="144" fontSize="10" fill="var(--muted-2)">191 MW · 20-yr lease, frontier AI lab · AMD first tenant</text>
<text x="218" y="172" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Core Scientific Denton</text>
<text x="218" y="186" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">Denton County · 2024 →</text>
<rect x="230" y="158" width="161.8" height="22" rx="4" fill="var(--accent)" fillOpacity="0.69"/>
<text x="399.8" y="173" fontSize="11.5" fontWeight="600" fill="var(--foreground)">$6.1B</text>
<text x="230" y="194" fontSize="10" fill="var(--muted-2)">campus conversion for CoreWeave</text>
<text x="218" y="222" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Cipher Barber Lake</text>
<text x="218" y="236" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">Mitchell County · 2026</text>
<rect x="230" y="208" width="79.6" height="22" rx="4" fill="var(--accent)" fillOpacity="0.62"/>
<text x="317.6" y="223" fontSize="11.5" fontWeight="600" fill="var(--foreground)">$3.0B</text>
<text x="230" y="244" fontSize="10" fill="var(--muted-2)">300 MW · Fluidstack, Google backstop</text>
<text x="405.0" y="270" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Hut 8, Riot, Core Scientific, and Cipher disclosures as cited on the map · Helios (133 MW to CoreWeave, over $1B a year projected) and Black Pearl (Amazon) not valued publicly</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The deal board. The four publicly valued AI leases on Texas mining sites, by contract value: Hut 8&apos;s gigawatt at Beacon Point, Riot&apos;s 191 megawatts at Rockdale, Core Scientific&apos;s Denton conversion, and Cipher&apos;s Barber Lake. The machines Bitcoin installed are why Texas is the front line of the AI power crunch.
      </figcaption>
    </figure>
  );
}
// mining-figs:end
export default function MiningMapPage() {
  const pageUrl = `${site.url}/bitcoin-mining-map-texas`;

  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Texas Bitcoin Mining Map",
    description:
      "Sourced dataset of major industrial Bitcoin mining facilities in Texas: operator, location, capacity, year online, and current status including AI/HPC conversions.",
    url: pageUrl,
    creator: { "@type": "Organization", name: site.name, url: site.url },
    license: "https://creativecommons.org/licenses/by/4.0/",
    temporalCoverage: "2019/2026",
    spatialCoverage: { "@type": "Place", name: "Texas, United States" },
    variableMeasured: [
      "operator",
      "location",
      "capacity (MW)",
      "year online",
      "status",
    ],
    dateModified: "2026-08-30",
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Texas Bitcoin Mining Map — Every Major Mine, Mapped",
    description:
      "The interactive, sourced map of industrial Bitcoin mining in Texas, from Rockdale's 700 MW flagship to the former mines becoming AI data centers.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-22",
    dateModified: "2026-08-30",
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
        name: "Texas Bitcoin Mining Map",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[datasetJsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd].map(
        (schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}

      <article className="mx-auto max-w-4xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Texas Bitcoin Mining Map
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Data asset · Interactive
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Bitcoin Mining Map
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every major industrial Bitcoin mine in Texas — where it is, how big
            it is, when it switched on, and what it&apos;s becoming. Drag the
            timeline and watch the buildout since 2019.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 22, 2026 · Updated{" "}
            {MAP_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas hosts the largest concentration of industrial Bitcoin mining
            in the United States. The biggest sites are Riot&apos;s 700 MW
            Rockdale facility in Milam County — the largest in North America —
            Riot&apos;s Corsicana campus, MARA&apos;s Granbury mine, and Hut
            8&apos;s 280 MW King Mountain site. Several former Bitcoin mines,
            led by Galaxy&apos;s Helios campus, are now converting to AI data
            centers, and the same operators are building AI-native campuses like
            Hut 8&apos;s 1 GW Beacon Point beside them.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Riot&apos;s Rockdale facility has 700 MW of developed capacity —
              the largest single Bitcoin mining facility in North America.
              <C n={1} />
            </li>
            <li>
              Riot&apos;s Corsicana campus has a full gigawatt approved by
              ERCOT, with 400 MW mining Bitcoin and the remaining 600 MW under
              AI/HPC evaluation since 2025.<C n={2} />
            </li>
            <li>
              On July 6, 2026, Galaxy delivered the first 133 MW of its former
              Helios Bitcoin mine to CoreWeave under a 15-year, 526 MW AI
              lease.<C n={11} />
            </li>
            <li>
              MARA bought its Granbury mine in January 2024 as part of a $178.6
              million, 390 MW two-site acquisition from Generate Capital.
              <C n={6} />
            </li>
            <li>
              In August 2023, ERCOT paid Riot $31.7 million in power credits to
              curtail mining during the Texas heat wave.<C n={17} />
            </li>
            <li>
              By August 2026, ERCOT&apos;s interconnection queue had reached
              about 474 GW — roughly 90% data centers — and the state ordered an
              audit that paused new large-load classifications.<C n={20} />
            </li>
          </ul>
        </div>

        {/* The map */}
        <div className="mt-10">
          <MiningMap />
        </div>

        <div className="prose-tx mt-10">
          <h2>What does this map show?</h2>
          <p>
            This map tracks {miningSites.length} of the most consequential
            industrial sites in Texas&apos;s Bitcoin-and-AI power story — the
            operating mines, roughly{" "}
            <strong>{Math.round(developedMw / 100) / 10} GW of developed
            capacity</strong> and more than 4 GW counting ERCOT-approved
            expansion, plus the miner-built AI campuses now rising beside them.
            Every capacity figure is the operator&apos;s own
            published number or reputable trade-press reporting, cited below.
            Smaller and off-grid operations — including the flare-gas miners of
            the Permian Basin — aren&apos;t pinned here, so treat this as the
            industrial backbone, not a census. The dataset was last verified{" "}
            {MAP_LAST_VERIFIED}, and we re-verify it quarterly alongside{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            .
          </p>

          <h2>Where are the biggest Bitcoin mines in Texas?</h2>
          <p>
            The biggest Bitcoin mines in Texas are Riot&apos;s Rockdale
            facility (700 MW developed) and Corsicana campus (400 MW mining, 1
            GW approved), MARA&apos;s Granbury site (~300 MW), Cipher&apos;s
            Black Pearl (300 MW) and Odessa (207 MW), and Hut 8&apos;s King
            Mountain (280 MW).<C n={1} /><C n={2} /><C n={9} /><C n={12} />{" "}
            Rockdale is where the industrial era began: Bitmain broke ground on
            the former Alcoa aluminum smelter land in 2019, Whinstone built the
            giant next door, and Riot bought it in May 2021 for roughly $651
            million.<C n={3} /><C n={4} /> One town in Milam County — hollowed
            out when the smelter closed — became the mining capital of the
            Western Hemisphere.
          </p>

          <MiningRankFigure />

          <h2>Why is Bitcoin mining concentrated in West Texas?</h2>
          <p>
            Because that&apos;s where the stranded power is. West Texas
            generates enormous wind and solar output that transmission lines
            can&apos;t always carry to the cities, and miners are the buyers of
            last resort for those electrons. Hut 8&apos;s King Mountain site
            sits directly beside a wind farm on a mesa outside McCamey.
            <C n={12} /> Layer1 proved the model first: in February 2020 —
            before Riot, before China&apos;s ban — the Peter Thiel-backed
            startup was mining in liquid-cooled containers off its own 100 MW
            substation in Ward County, powering down to sell energy back when
            prices spiked.<C n={15} /><C n={16} /> That playbook — mine cheap,
            curtail high — became standard practice through ERCOT&apos;s{" "}
            <strong>demand response</strong> programs, which pay large loads to
            power down when the grid is stressed.<C n={17} />
          </p>

          <MiningCurtailFigure />

          <h2>Why are Bitcoin mines turning into AI data centers?</h2>
          <p>
            Because the scarcest resource in computing is no longer chips —
            it&apos;s connected power, and miners spent a decade accumulating
            it. Galaxy bought the distressed Argo Helios mine in Dickens County
            for $65 million in December 2022; on July 6, 2026, it delivered the
            first 133 MW to CoreWeave under a 15-year lease projected to
            generate over $1 billion a year at full buildout.<C n={11} /> Core
            Scientific is converting its Denton campus in a $6.1 billion
            buildout.<C n={13} /><C n={14} /> Cipher&apos;s brand-new Black
            Pearl site leased straight to Amazon.<C n={10} /> ERCOT&apos;s
            interconnection queue swelled from roughly 226 GW in early 2026 to
            about 474 GW by that August — most of it AI — enough to force the
            state&apos;s hand.<C n={19} /><C n={20} /> This is not Bitcoin losing
            to AI — it&apos;s the
            infrastructure Bitcoin built becoming the on-ramp for the next
            compute frontier, while mining stays the anchor tenant at sites
            like Rockdale.
          </p>

          <MiningAiTurnFigure />

          <h2>What did Texas&apos;s August 2026 data-center audit change?</h2>
          <p>
            On August 4, 2026, Governor Greg Abbott ordered the Public Utility
            Commission and ERCOT to audit every data-center project in the
            state&apos;s interconnection queue, and ERCOT paused &ldquo;Batch
            Zero,&rdquo; the first classification of its largest new loads.
            <C n={20} /> The queue had swelled to roughly 474 gigawatts of
            requests — about 90% of it data centers — a figure no grid can
            physically build, so the audit is Texas sorting the real projects
            from the speculative ones. For the sites already on this map, that
            reframes the whole board: an ERCOT-approved interconnection stops
            being paperwork and becomes the moat. As Bernstein put it,
            &ldquo;if MWs are scarce, it makes sense to earn more per MW&rdquo;
            — and the operators with power already in hand, Riot&apos;s 700 MW
            at Rockdale and its approved gigawatt at Corsicana among them, are
            the ones holding it.<C n={20} />
          </p>

          <MiningQueueFigure />


          <p>
            What the audit is now screening is a Texas land-grab for
            miner-built AI capacity. Hut 8 has fully contracted its 1-gigawatt{" "}
            <strong>Beacon Point</strong> campus in Nueces County to a single
            high-grade tenant — reported to be Nvidia — across two 15-year, 352
            MW leases worth $19.6 billion.<C n={21} /> Cipher leased the
            entirety of its 300 MW <strong>Barber Lake</strong> site in Mitchell
            County to Fluidstack in a roughly $3 billion deal that Google agreed
            to backstop.<C n={23} /> MARA signed to acquire a{" "}
            <strong>Matagorda County</strong> site carrying up to 2 GW of power
            for a campus that will blend high-performance computing with
            flexible Bitcoin mining, paying out as milestones — grid
            authorization among them — are met.<C n={22} /> Even Bitdeer has
            flagged its Rockdale campus as a candidate for AI/HPC conversion in
            its operations updates.<C n={24} /> This is why we keep the mining
            map and the grid in the same frame: the machines Bitcoin installed
            are why Texas is now the front line of the AI power crunch — and why
            the state just hit pause to take inventory.
          </p>

          <MiningDealsFigure />

          <h2>The counterweight: Granbury&apos;s noise fight</h2>
          <p>
            The record isn&apos;t all triumph, and we keep the hard parts in.
            MARA&apos;s Granbury mine runs behind-the-meter at the 1,115 MW
            Wolf Hollow gas plant, and its cooling fans have made it the most
            litigated Bitcoin site in Texas: neighbors report sleep disruption
            and hearing problems, a Hood County constable issued 37 noise
            citations, and residents have filed nuisance suits in both state
            and federal court.<C n={7} /><C n={8} /> How MARA answers — with
            sound walls, immersion cooling, or a settlement — will shape how
            close to homes the next generation of sites gets built.
          </p>

          <h2>How to cite this map</h2>
          <p>
            This dataset is free to cite with attribution (CC BY 4.0):{" "}
            <em>
              TexasBitcoin, &ldquo;Texas Bitcoin Mining Map,&rdquo;
              texasbitcoin.com/bitcoin-mining-map-texas, updated{" "}
              {MAP_LAST_VERIFIED}.
            </em>{" "}
            Corrections and additions are welcome — reach us via{" "}
            <Link href="/about">the about page</Link>. Looking for the people
            behind the machines? Start with{" "}
            <Link href="/events">Texas Bitcoin meetups and conferences</Link>.
            <SeamMark to="/rockdale-texas-bitcoin" step={3} />
          </p>
        </div>

        {/* Server-rendered dataset — readable without JS */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            The dataset
          </h2>
          <p className="mt-2 text-sm text-muted-2">
            All {miningSites.length} tracked sites, verified{" "}
            {MAP_LAST_VERIFIED}.
          </p>
          <div className="mt-5 space-y-3">
            {miningSites.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">
                    {s.name}{" "}
                    <span className="font-normal text-muted-2">
                      · {s.operator}
                    </span>
                  </p>
                  <p className="text-xs text-muted-2">
                    {s.location} · online {s.yearOnline}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-soft">
                  {s.mwLabel} · {STATUS_LABELS[s.status]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.story}{" "}
                  {s.sourceIds.map((n) => (
                    <C key={n} n={n} />
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

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
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {miningSources.map((s) => (
              <li key={s.id} id={`ms${s.id}`} className="flex gap-2">
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
