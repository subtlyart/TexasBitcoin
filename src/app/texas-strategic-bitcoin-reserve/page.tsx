import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  RESERVE_LAST_VERIFIED,
  reserveSources,
  reserveStatus,
  reserveTimeline,
} from "@/lib/reserve";

const pageUrl = `${site.url}/texas-strategic-bitcoin-reserve`;

export const metadata: Metadata = {
  title: "The Texas Strategic Bitcoin Reserve",
  description:
    "How the Texas Strategic Bitcoin Reserve works and where it stands — SB 21, the $10M appropriation, the $500B floor, and the road to direct custody.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Texas Strategic Bitcoin Reserve",
    description:
      "The sourced reference on Texas's state Bitcoin reserve — SB 21, funding, the $500B floor, the first purchase, and the road to direct custody. Tracked and updated.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Does Texas own Bitcoin?",
    a: "Yes, though indirectly so far. The reserve holds $10 million in the iShares Bitcoin Trust — a spot Bitcoin ETF — as an explicit placeholder, a position begun with a ~$5 million purchase on November 20, 2025 and built to the full appropriation by May 2026. A custody contract targeted for late August 2026 will move the state from that ETF proxy into directly held Bitcoin.",
  },
  {
    q: "How much money is in the Texas Bitcoin Reserve?",
    a: "The Legislature appropriated $10 million for the reserve (a $21 million Senate rider was trimmed to $10 million), and the full amount is now deployed into a spot Bitcoin ETF, beginning with a roughly $5 million purchase in November 2025. SB 21 also lets the reserve grow through open-market purchases, forks, and airdrops.",
  },
  {
    q: "Who manages the Texas Strategic Bitcoin Reserve?",
    a: "The Texas Comptroller of Public Accounts manages the reserve, holding it outside the state treasury. A five-member advisory committee guides administration — the Comptroller chairs it, joined by four outside experts named on May 28, 2026. The Comptroller must publish biennial reports on the fund's value and management.",
  },
  {
    q: "What can the Texas reserve hold besides Bitcoin?",
    a: "Only digital assets averaging at least $500 billion in market capitalization over the most recent 24 months. That threshold is a bar only Bitcoin currently clears, so in practice the reserve is Bitcoin-only — though the door is left open if another asset ever qualifies.",
  },
  {
    q: "Is Texas the only state with a Bitcoin reserve?",
    a: "No. Arizona and New Hampshire also enacted cryptocurrency-reserve laws. Texas's is distinguished as the first standalone, publicly funded Bitcoin reserve held outside the state treasury in a dedicated vehicle, rather than as a line item inside an existing fund.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#r${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

// reserve-figs:start
// Six figures, one per chapter, generated from the dates and counts the page
// cites (Sept 2026). Server-rendered SVG, site tokens, no client JS.
function ReserveClaimToKeysFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="From a claim to the keys: the custody transition of the Texas Strategic Bitcoin Reserve">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">FROM A CLAIM TO THE KEYS · WHERE THE $10 MILLION STANDS, SEPTEMBER 2026</text>
<rect x="28" y="60" width="182" height="190" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="2"/>
<text x="42" y="84" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="var(--accent)">NOW</text>
<text x="42" y="108" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A claim on Bitcoin</text>
<text x="42" y="136" fontSize="10.5" fill="var(--muted-2)">$10M in the iShares Trust</text>
<text x="42" y="154" fontSize="10.5" fill="var(--muted-2)">BlackRock&apos;s custodian holds coin</text>
<text x="42" y="172" fontSize="10.5" fill="var(--muted-2)">Texas holds ETF shares</text>
<path d="M211,155.0 L219,155.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M215,151.0 L219,155.0 L215,159.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="220" y="60" width="182" height="190" rx="10" fill="var(--surface-2)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="234" y="84" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="var(--accent-soft)">THE CONTRACT</text>
<text x="234" y="108" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">The custody RFP</text>
<text x="234" y="136" fontSize="10.5" fill="var(--muted-2)">908-26-1778WS · closed Jul 10</text>
<text x="234" y="154" fontSize="10.5" fill="var(--muted-2)">late-August target passed</text>
<text x="234" y="172" fontSize="10.5" fill="var(--muted-2)">award pending · Huffines</text>
<path d="M403,155.0 L411,155.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M407,151.0 L411,155.0 L407,159.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="412" y="60" width="182" height="190" rx="10" fill="var(--surface-2)" stroke="var(--muted)" strokeWidth="1.25"/>
<text x="426" y="84" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="var(--muted)">+60 DAYS</text>
<text x="426" y="108" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">The conversion</text>
<text x="426" y="136" fontSize="10.5" fill="var(--muted-2)">custodian retires the ETF</text>
<text x="426" y="154" fontSize="10.5" fill="var(--muted-2)">coin bought in Texas&apos;s name</text>
<text x="426" y="172" fontSize="10.5" fill="var(--muted-2)">cold storage, layered controls</text>
<path d="M595,155.0 L603,155.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M599,151.0 L603,155.0 L599,159.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="604" y="60" width="182" height="190" rx="10" fill="var(--surface-2)" stroke="#6f9e6a" strokeWidth="1.25"/>
<text x="618" y="84" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="#6f9e6a">THEN</text>
<text x="618" y="108" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">The keys, in public</text>
<text x="618" y="136" fontSize="10.5" fill="var(--muted-2)">coin in the State&apos;s own name</text>
<text x="618" y="154" fontSize="10.5" fill="var(--muted-2)">a public holdings website</text>
<text x="618" y="172" fontSize="10.5" fill="var(--muted-2)">report due Dec 31, 2026</text>
<rect x="234" y="266" width="156" height="20" rx="10" fill="var(--surface)" stroke="var(--accent)"/>
<text x="312" y="280" fontSize="9.5" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--accent)">YOU ARE HERE · AWARD</text>
<text x="405.0" y="320" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">the difference between owning a claim on Bitcoin and owning the keys · tracked live on the custody watch</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        From a claim to the keys. Texas holds its $10 million as ETF shares today; the custody contract converts that into Bitcoin held in the state&apos;s own name within 60 days of execution, with a public holdings website behind it. The award is the step the reserve is waiting on.
      </figcaption>
    </figure>
  );
}

function ReservePositionFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 240" role="img" aria-label="The reserve position: what Texas paid and what it was worth">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE POSITION · WHAT TEXAS PAID, AND WHAT IT WAS WORTH</text>
<text x="236" y="80" fontSize="12.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Bought · Nov 20, 2025</text>
<rect x="250" y="64" width="260.0" height="24" rx="4" fill="var(--accent)"/>
<text x="520.0" y="80" fontSize="11" fill="var(--muted)">~$5.0M · IBIT at $51.87 · Bitcoin near $91,300</text>
<text x="236" y="124" fontSize="12.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Bought · Dec 15, 2025</text>
<rect x="250" y="108" width="260.0" height="24" rx="4" fill="var(--accent-soft)"/>
<text x="520.0" y="124" fontSize="11" fill="var(--muted)">~$5.0M · Bitcoin near $87,000</text>
<text x="236" y="168" fontSize="12.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Marked · Mar 2, 2026</text>
<rect x="250" y="152" width="405.6" height="24" rx="4" fill="var(--star)"/>
<text x="260" y="168" fontSize="11" fontWeight="600" fill="var(--surface)">~$7.8M · under water in month four</text>
<line x1="770.0" x2="770.0" y1="56" y2="186" stroke="var(--muted-2)" strokeDasharray="3 3"/>
<text x="770.0" y="50" fontSize="10" textAnchor="middle" fill="var(--muted-2)">$10M cost</text>
<text x="405.0" y="230" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">The Bond Buyer, Nov 2025; Dallas Morning News, Mar 2, 2026 · bars to scale · a ten-year argument, in month four</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The position, to scale. Two purchases of about $5 million each in November and December 2025, and the mark on March 2, 2026, when the $10 million placeholder was worth about $7.8 million. The reserve was written for a ten-year horizon; this is what month four looked like.
      </figcaption>
    </figure>
  );
}

function ReserveGrowthFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="How the reserve is funded and how it can grow">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">HOW THE RESERVE GROWS · THE SEED, AND THE FOUR DOORS THE STATUTE LEAVES OPEN</text>
<rect x="28" y="56" width="230" height="150" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.5"/>
<text x="44" y="80" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SEED</text>
<text x="44" y="108" fontSize="22" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">$10 million</text>
<text x="44" y="128" fontSize="10.5" fill="var(--muted-2)">appropriated by the 89th Legislature</text>
<text x="44" y="150" fontSize="10.5" fill="var(--muted)"><tspan textDecoration="line-through" fill="var(--muted-2)">$21 million</tspan> · the Senate rider,</text>
<text x="44" y="166" fontSize="10.5" fill="var(--muted)">trimmed in conference</text>
<text x="44" y="190" fontSize="10.5" fill="var(--muted-2)">fully deployed by May 2026</text>
<path d="M258,130 C272,130 272,68 286,68" fill="none" stroke="var(--accent)" strokeWidth="1.25" strokeDasharray=""/>
<circle cx="292" cy="68" r="4" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.5"/>
<text x="304" y="72" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Appropriations</text>
<text x="414.8" y="72" fontSize="10.5" fill="var(--muted-2)">the Legislature can add in 2027</text>
<path d="M258,130 C272,130 272,106 286,106" fill="none" stroke="var(--accent-soft)" strokeWidth="1.25" strokeDasharray=""/>
<circle cx="292" cy="106" r="4" fill="var(--accent-soft)" stroke="var(--accent-soft)" strokeWidth="1.5"/>
<text x="304" y="110" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Open-market purchases</text>
<text x="465.20000000000005" y="110" fontSize="10.5" fill="var(--muted-2)">the Comptroller may buy more</text>
<path d="M258,130 C272,130 272,144 286,144" fill="none" stroke="var(--star)" strokeWidth="1.25" strokeDasharray=""/>
<circle cx="292" cy="144" r="4" fill="var(--star)" stroke="var(--star)" strokeWidth="1.5"/>
<text x="304" y="148" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Forks and airdrops</text>
<text x="443.6" y="148" fontSize="10.5" fill="var(--muted-2)">anything that lands in the state&apos;s addresses</text>
<path d="M258,130 C272,130 272,182 286,182" fill="none" stroke="var(--muted-2)" strokeWidth="1.25" strokeDasharray="4 4"/>
<circle cx="292" cy="182" r="4" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="1.5"/>
<text x="304" y="186" fontSize="13" fontWeight="600" fill="var(--muted-2)" fontFamily="var(--font-display)" textDecoration="line-through">Donations</text>
<text x="378.8" y="186" fontSize="10.5" fill="var(--muted-2)">in SB 778 and the House version; removed in conference</text>
<text x="405.0" y="240" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SB 21 enrolled text; Texas Policy Research on the $10M; Texas Observer on the conference · a fund designed to accumulate</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        How the reserve grows. A $10 million seed, trimmed from a $21 million Senate rider, and three doors the statute leaves open: further appropriations, open-market purchases by the Comptroller, and any forks or airdrops that land in the state&apos;s addresses. The fourth door, private donations, was in the early drafts and removed in conference.
      </figcaption>
    </figure>
  );
}

function ReserveFloorFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 280" role="img" aria-label="The $500 billion market-cap floor: which assets clear it">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE $500 BILLION FLOOR · WHAT THE STATUTE ADMITS, AS OF OCTOBER 10, 2025</text>
<line x1="64" x2="560" y1="180.5" y2="180.5" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="6 4"/>
<text x="56" y="184.5" fontSize="10" textAnchor="end" fill="var(--accent)">$500B</text>
<line x1="64" x2="560" y1="145.1" y2="145.1" stroke="var(--border)" strokeWidth="1" strokeDasharray=""/>
<text x="56" y="149.1" fontSize="10" textAnchor="end" fill="var(--muted-2)">$1000B</text>
<line x1="64" x2="560" y1="109.6" y2="109.6" stroke="var(--border)" strokeWidth="1" strokeDasharray=""/>
<text x="56" y="113.6" fontSize="10" textAnchor="end" fill="var(--muted-2)">$1500B</text>
<line x1="64" x2="560" y1="74.2" y2="74.2" stroke="var(--border)" strokeWidth="1" strokeDasharray=""/>
<text x="56" y="78.2" fontSize="10" textAnchor="end" fill="var(--muted-2)">$2000B</text>
<rect x="124.0" y="74.2" width="120" height="141.8" rx="4" fill="var(--accent)"/>
<text x="184" y="234" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Bitcoin</text>
<text x="184" y="250" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">≈ $2.0T · clears it, with room</text>
<rect x="354.0" y="181.0" width="120" height="35.0" rx="4" fill="var(--star)"/>
<text x="414" y="234" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Ether</text>
<text x="414" y="250" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">≈ $494B · just under, and not for 24 months</text>
<text x="566" y="184.5" fontSize="10.5" fontWeight="600" fill="var(--accent)">the floor: $500B, averaged over 24 months</text>
<text x="566" y="200.5" fontSize="10.5" fill="var(--muted-2)">Ether has held it only briefly – about a month</text>
<text x="566" y="214.5" fontSize="10.5" fill="var(--muted-2)">in 2021, then August–October 2025</text>
<text x="566" y="236.5" fontSize="10.5" fill="var(--muted)">“A statutory door, not a plan.”</text>
<text x="405.0" y="270" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Cointelegraph, October 10, 2025 (Schwertner interview); SB 21 § 403 · bars to scale</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The $500 billion floor, to scale. Only an asset averaging half a trillion dollars in market capitalization over 24 months is eligible. Bitcoin clears it several times over; ether has crossed it only briefly. The threshold is asset-neutral in wording and Bitcoin-only in effect.
      </figcaption>
    </figure>
  );
}

function ReserveNextFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="What comes next for the reserve: September 2026 to January 2027">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT COMES NEXT · SEPTEMBER 2026 → JANUARY 2027</text>
<line x1="66" x2="744" y1="120" y2="120" stroke="var(--accent)" strokeWidth="2"/>
<line x1="66.0" x2="66.0" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="66.0" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Sep 2026</text>
<line x1="198.9" x2="198.9" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="198.9" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Oct 2026</text>
<line x1="336.3" x2="336.3" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="336.3" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Nov 2026</text>
<line x1="469.3" x2="469.3" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="469.3" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Dec 2026</text>
<line x1="606.6" x2="606.6" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="606.6" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Jan 2027</text>
<line x1="744.0" x2="744.0" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="744.0" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Feb 2027</text>
<line x1="66.0" x2="66.0" y1="114" y2="76" stroke="var(--muted-2)"/>
<circle cx="66.0" cy="120" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="66.0" y="48" fontSize="12" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Custody award</text>
<text x="66.0" y="62" fontSize="10" textAnchor="start" fill="var(--muted-2)">overdue against its late-August target</text>
<line x1="256.5" x2="256.5" y1="126" y2="186" stroke="var(--muted-2)"/>
<circle cx="256.5" cy="120" r="5" fill="var(--muted)" stroke="var(--surface)" strokeWidth="2"/>
<text x="256.5" y="200" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">+60 days (floats)</text>
<text x="256.5" y="214" fontSize="10" textAnchor="middle" fill="var(--muted-2)">ETF placeholder converts to coin, once under contract</text>
<line x1="345.2" x2="345.2" y1="114" y2="112" stroke="var(--muted-2)"/>
<circle cx="345.2" cy="120" r="5" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="2"/>
<text x="345.2" y="84" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">The general</text>
<text x="345.2" y="98" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Huffines vs. Eckhardt for the Comptroller&apos;s full term</text>
<line x1="602.2" x2="602.2" y1="126" y2="146" stroke="var(--muted-2)"/>
<circle cx="602.2" cy="120" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="602.2" y="160" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">First biennial report</text>
<text x="602.2" y="174" fontSize="10" textAnchor="middle" fill="var(--muted-2)">due under SB 21 § 403.708</text>
<line x1="655.4" x2="655.4" y1="114" y2="76" stroke="var(--muted-2)"/>
<circle cx="655.4" cy="120" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="655.4" y="48" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">The 90th convenes</text>
<text x="655.4" y="62" fontSize="10" textAnchor="end" fill="var(--muted-2)">does $10M stay the seed, or become the size?</text>
<text x="405.0" y="240" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">the conversion date floats with the award · everything else is on the statute or the calendar</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What comes next. The custody award is overdue against its own target and starts a 60-day conversion clock whenever it lands; the November 3 general decides who holds the desk for a full term; the first biennial report is due December 31; the 90th Legislature convenes January 12, 2027 with the appropriation question open.
      </figcaption>
    </figure>
  );
}

function ReserveStatesFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="Three state reserve laws compared: Texas, New Hampshire, Arizona">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">FIRST IN STRUCTURE · THREE STATE RESERVE LAWS, 2025</text>
<rect x="28" y="52" width="246" height="236" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.5"/>
<text x="44" y="80" fontSize="16" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Texas</text>
<text x="44" y="98" fontSize="10.5" fontWeight="600" fill="var(--accent)">SB 21 · June 20, 2025</text>
<circle cx="50" cy="122" r="3" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="62" y="126" fontSize="10.5" fill="var(--muted)">Standalone fund outside the treasury</text>
<circle cx="50" cy="152" r="3" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="62" y="156" fontSize="10.5" fill="var(--muted)">$10M of taxpayer money appropriated</text>
<circle cx="50" cy="182" r="3" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="62" y="186" fontSize="10.5" fill="var(--muted)">Bought Nov 20, 2025 – first state to buy</text>
<circle cx="50" cy="212" r="3" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="62" y="216" fontSize="10.5" fill="var(--muted)">Advisory committee; biennial report</text>
<circle cx="50" cy="242" r="3" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="62" y="246" fontSize="10.5" fill="var(--muted)">Custody in the state&apos;s own name (pending)</text>
<rect x="286" y="52" width="246" height="236" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1"/>
<text x="302" y="80" fontSize="16" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">New Hampshire</text>
<text x="302" y="98" fontSize="10.5" fontWeight="600" fill="var(--star)">HB 302 · May 2025</text>
<circle cx="308" cy="122" r="3" fill="var(--star)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="320" y="126" fontSize="10.5" fill="var(--muted)">Authority, not a fund: up to 5% of funds</text>
<circle cx="308" cy="152" r="3" fill="var(--surface)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="320" y="156" fontSize="10.5" fill="var(--muted-2)">No appropriation; treasurer&apos;s discretion</text>
<circle cx="308" cy="182" r="3" fill="var(--star)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="320" y="186" fontSize="10.5" fill="var(--muted)">Assets over $500B market cap – Bitcoin</text>
<circle cx="308" cy="212" r="3" fill="var(--star)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="320" y="216" fontSize="10.5" fill="var(--muted)">Custody via multisig, custodian, or ETF</text>
<circle cx="308" cy="242" r="3" fill="var(--surface)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="320" y="246" fontSize="10.5" fill="var(--muted-2)">First to sign; not the first to buy</text>
<rect x="544" y="52" width="246" height="236" rx="10" fill="var(--surface-2)" stroke="var(--accent-soft)" strokeWidth="1"/>
<text x="560" y="80" fontSize="16" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Arizona</text>
<text x="560" y="98" fontSize="10.5" fontWeight="600" fill="var(--accent-soft)">HB 2749 · May 7, 2025</text>
<circle cx="566" cy="122" r="3" fill="var(--accent-soft)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="578" y="126" fontSize="10.5" fill="var(--muted)">A fund of abandoned digital assets</text>
<circle cx="566" cy="152" r="3" fill="var(--surface)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="578" y="156" fontSize="10.5" fill="var(--muted-2)">No taxpayer money – SB 1025 was vetoed</text>
<circle cx="566" cy="182" r="3" fill="var(--accent-soft)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="578" y="186" fontSize="10.5" fill="var(--muted)">Grows by airdrops and staking rewards</text>
<circle cx="566" cy="212" r="3" fill="var(--accent-soft)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="578" y="216" fontSize="10.5" fill="var(--muted)">10% to the general fund on approval</text>
<circle cx="566" cy="242" r="3" fill="var(--surface)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="578" y="246" fontSize="10.5" fill="var(--muted-2)">Unclaimed property, not a reserve buy</text>
<text x="405.0" y="320" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online; The Hill and Bitcoin Magazine on HB 302; Arizona Senate fact sheet on HB 2749 · filled dots: what the law affirmatively does</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        First in structure. New Hampshire signed first, giving its treasurer authority to allocate up to 5% of certain funds; Arizona built a fund out of abandoned digital assets after its governor vetoed the taxpayer-funded version. Texas appropriated public money into a standalone reserve outside the treasury, with a committee and a reporting duty, and was the first state to actually buy.
      </figcaption>
    </figure>
  );
}
// reserve-figs:end
export default function ReservePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Strategic Bitcoin Reserve",
    description:
      "How Texas's state Bitcoin reserve works and where it stands — SB 21, funding, the $500B market-cap floor, the first purchase, and the move to direct custody.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-09",
    dateModified: "2026-09-01",
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
        name: "Texas Strategic Bitcoin Reserve",
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
          / Texas Strategic Bitcoin Reserve
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Strategic Bitcoin Reserve
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The nation&apos;s first standalone, publicly funded state Bitcoin
            reserve — what the law built, what the state has actually bought, and
            where it goes next. Tracked against the primary record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 9, 2026 · Updated{" "}
            {RESERVE_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The Texas Strategic Bitcoin Reserve is a state-owned Bitcoin fund
            created by Senate Bill 21, signed June 20, 2025. The Comptroller
            manages it outside the treasury and may hold only digital assets
            averaging at least $500 billion in market cap over 24 months — a bar
            only Bitcoin clears. The Legislature appropriated $10 million, all of
            it now deployed into a spot Bitcoin ETF as a placeholder — a position
            begun November 20, 2025 — with a custody contract targeted for late
            August 2026 to convert it to directly held Bitcoin.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Senate Bill 21 was signed June 20, 2025 and took effect
              immediately, creating the first standalone, publicly funded state
              Bitcoin reserve.<C n={1} /><C n={3} />
            </li>
            <li>
              The reserve may hold only digital assets averaging at least $500
              billion in market capitalization over 24 months — a threshold only
              Bitcoin currently clears.<C n={2} />
            </li>
            <li>
              The Legislature appropriated $10 million for the reserve.<C n={7} />
            </li>
            <li>
              On November 20, 2025, the reserve made its first purchase — about
              $5 million in the iShares Bitcoin Trust, held as a placeholder.
              <C n={4} />
            </li>
            <li>
              The ETF position has reached the full $10 million appropriation,
              per the custody RFP filed in May 2026.<C n={8} /><C n={9} />
            </li>
            <li>
              On May 28, 2026, the Comptroller completed the five-seat advisory
              committee and opened a custody-and-liquidity RFP; contract
              execution is targeted for late August 2026.<C n={5} /><C n={9} />
            </li>
          </ul>
        </div>

        <ReserveClaimToKeysFigure />

        {/* Status tracker — where the reserve stands right now */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Reserve status
            </h2>
            <span className="text-xs text-muted-2">
              As of {RESERVE_LAST_VERIFIED}
            </span>
          </div>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {reserveStatus.map((row) => (
              <div key={row.label} className="bg-surface p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {row.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {row.value}{" "}
                  {row.sourceIds.map((n) => (
                    <C key={n} n={n} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Reserve timeline */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            From statute to ledger
          </h2>
          <ol className="mt-5 space-y-4">
            {reserveTimeline.map((e) => (
              <li
                key={e.date}
                className="relative rounded-xl border border-border bg-surface p-5 pl-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                  style={{
                    background: e.done ? "var(--accent)" : "#6f9e6a",
                  }}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <time dateTime={e.date} className="text-xs tabular-nums text-muted-2">
                    {e.dateLabel}
                  </time>
                  <span
                    className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      color: e.done ? "var(--accent)" : "#6f9e6a",
                      borderColor: e.done
                        ? "color-mix(in srgb, var(--accent) 45%, transparent)"
                        : "color-mix(in srgb, #6f9e6a 55%, transparent)",
                    }}
                  >
                    {e.done ? "Done" : "In progress"}
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
            ))}
          </ol>
        </section>

        <div className="prose-tx mt-12">
          <h2>What is the Texas Strategic Bitcoin Reserve?</h2>
          <p>
            It is a state-owned Bitcoin fund created by{" "}
            <strong>Senate Bill 21</strong>, authored by{" "}
            <Link href="/charles-schwertner-bitcoin">Senator Charles Schwertner</Link>{" "}
            and signed by{" "}
            <Link href="/greg-abbott-bitcoin">Governor Greg Abbott</Link> on
            June 20, 2025, effective immediately.<C n={1} /><C n={3} /> Its defining trait is
            structural: the reserve sits <em>outside</em> the state treasury,
            managed by the Texas Comptroller as a dedicated vehicle rather than a
            line item in an existing fund, and shielded from the routine sweeps
            that pull idle balances back into general revenue.<C n={2} /> Texas
            did not merely permit the state to own Bitcoin — it built a strategic
            reserve and named it one. The fuller legislative arc, from the 2014
            &ldquo;not money&rdquo; memo forward, lives on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
          </p>

          <h2>How much Bitcoin does Texas actually own?</h2>
          <p>
            As of its first move, Texas holds Bitcoin <em>exposure</em>, not yet
            self-custodied coin. On <strong>November 20, 2025</strong>, the
            Comptroller&apos;s office bought roughly $5 million of the{" "}
            <strong>iShares Bitcoin Trust</strong> — a spot Bitcoin ETF — at
            $51.8694 a share, with Bitcoin near $91,300, and described the
            position as a temporary placeholder.<C n={4} /> By the time the
            custody RFP was filed in May 2026, the position had grown to the
            full <strong>$10 million appropriation</strong>, all of it in
            IBIT – a second purchase of about $5 million on December 15, 2025
            completed it, and by March 2, 2026 the position was marked at
            roughly $7.8 million.<C n={8} /><C n={9} /><C n={13} /> The state deliberately started with an
            ETF to establish a position while it built the plumbing to hold the
            asset itself. That plumbing is the custody question below — and it
            is the difference between owning a claim on Bitcoin and owning the
            keys.
          </p>

            <ReservePositionFigure />

          <h2>How is the reserve funded?</h2>
          <p>
            The Legislature appropriated <strong>$10 million</strong> to seed the
            reserve. The number is its own small piece of Capitol history: a
            Senate budget rider had floated $21 million to &ldquo;kick
            start&rdquo; the fund before the final figure settled at $10
            million.<C n={7} /> A donation channel written into the early drafts
            was removed in conference.<C n={12} /> Beyond that appropriation, SB 21 lets the reserve
            grow three more ways — open-market purchases by the state, and any{" "}
            <strong>forks or airdrops</strong> that land in the state&apos;s
            cryptocurrency addresses.<C n={2} /> It is a fund designed to
            accumulate, not just to hold a one-time allocation.
          </p>

            <ReserveGrowthFigure />

          <h2>What can the reserve hold?</h2>
          <p>
            Only a digital asset averaging at least{" "}
            <strong>$500 billion in market capitalization over the most recent
            24 months</strong> is eligible.<C n={2} /> The threshold is the
            policy in miniature: it is high enough that, today, only Bitcoin
            clears it, so the &ldquo;reserve&rdquo; is Bitcoin in all but the
            statute&apos;s careful, asset-neutral wording. The 24-month averaging
            window is deliberate too — it screens out anything that spikes to a
            half-trillion for a week, demanding durability, not a moment –
            ether, at roughly $494 billion in October 2025, has crossed the
            line only briefly.<C n={11} /> It is
            the same hard-money instinct that runs through{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            .
          </p>

            <ReserveFloorFigure />

          <h2>Who runs it, and who is on the advisory committee?</h2>
          <p>
            The <strong>Texas Comptroller of Public Accounts</strong> manages the
            reserve, and must publish <strong>biennial reports</strong> on its
            value and administration.<C n={2} /> A five-member advisory committee
            guides that work, and it is complete: on{" "}
            <strong>May 28, 2026</strong>, then-Acting Comptroller{" "}
            <Link href="/kelly-hancock-bitcoin">Kelly Hancock</Link> — the
            comptroller sits on the committee by office — named the four outside seats:
            Laurie Dotter, Cormint CEO Jamie McAvity, SMU law professor Carla
            Reyes, and CleanSpark CFO Gary Vecchiarelli — a bench that pairs
            institutional investment experience with people who mine and account
            for Bitcoin for a living.<C n={5} /> The same announcement opened the
            request for proposals for the custody-and-liquidity partner.
            <C n={5} /> The office itself changed hands on August 1, 2026,
            when <Link href="/don-huffines-bitcoin">Don Huffines</Link> was
            sworn in after Hancock&apos;s resignation; custody of the reserve,
            the committee seat, and the pending custody award passed with it.
            <C n={10} />
          </p>

          <h2>How does Texas compare to other states?</h2>
          <p>
            Texas is not alone in law — <strong>Arizona</strong> and{" "}
            <strong>New Hampshire</strong> also enacted cryptocurrency-reserve
            statutes — but it is first in structure.<C n={4} /><C n={14} /><C n={15} /><C n={14} /><C n={15} /> Where others
            authorized crypto exposure inside existing funds, Texas stood up a
            standalone, publicly funded reserve held outside the treasury, with
            its own committee, its own reporting cadence, and its own line in the
            Comptroller&apos;s manual of accounts.<C n={6} /> The design is the
            statement: a reserve is something a state builds on purpose and
            reports on, not a position it happens to carry.
          </p>

            <ReserveStatesFigure />

          <h2>What comes next for the reserve?</h2>
          <p>
            The near-term story is <strong>custody</strong> — and it is at the
            wire. The RFP for a custody-and-liquidity firm closed July 10, 2026
            (extended from June 15), with{" "}
            <strong>contract execution targeted for late August 2026</strong>;
            the selected partner will retire the $10 million ETF placeholder for
            Bitcoin held directly in the name of the State of Texas — the move
            from a claim to the keys.<C n={8} /><C n={9} /> That handoff now has
            its own living record:{" "}
            <Link href="/who-holds-the-texas-bitcoin-reserve">
              who holds the Texas Bitcoin reserve
            </Link>{" "}
            tracks the custodian search, the 60-day conversion clock, and the
            coming public holdings website. After that come the questions both
            pages keep tracking: what the first biennial report shows, and
            whether the 90th Legislature, convening January 2027, adds to the
            fund. None of these are threats to the record above — they are its
            next entries, and we update against the primary record as they
            land.
          </p>

          <ReserveNextFigure />
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
            Primary record first: the SB 21 bill history and the Texas
            Comptroller, then legal analysis and trade press. This is a research
            and reference article, not financial, investment, or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {reserveSources.map((s) => (
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
