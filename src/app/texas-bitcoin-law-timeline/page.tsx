import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { LAW_LAST_VERIFIED, lawMilestones, lawSources } from "@/lib/law-timeline";
import { LawTimeline } from "@/components/law-timeline";
import { SeamMark } from "@/components/seam-mark";

export const metadata: Metadata = {
  title: "The Texas Bitcoin Law Timeline",
  description:
    "The interactive timeline of Bitcoin law in Texas — from the 2014 'not money' memo to the 2025 Strategic Bitcoin Reserve, every bill and memo verified.",
  alternates: { canonical: `${site.url}/texas-bitcoin-law-timeline` },
  openGraph: {
    type: "article",
    title: "The Texas Bitcoin Law Timeline",
    description:
      "Every Bitcoin law, memo, and failed bill in Texas on one interactive timeline — from the 2014 'not money' memo to the 2025 Strategic Bitcoin Reserve, sourced end to end.",
    url: `${site.url}/texas-bitcoin-law-timeline`,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Bitcoin legal in Texas?",
    a: "Yes. Bitcoin is legal to buy, sell, hold, and mine in Texas. Supervisory Memorandum 1037, issued April 3, 2014, holds that Bitcoin is not 'money' under the Texas Money Services Act, so selling your own bitcoin does not by itself require a state license. Federal FinCEN registration still applies to exchange businesses.",
  },
  {
    q: "Does Texas have a Strategic Bitcoin Reserve?",
    a: "Yes — and as of late 2025 it is funded. Senate Bill 21, signed by Governor Greg Abbott on June 20, 2025 and effective immediately, created the Texas Strategic Bitcoin Reserve — the first standalone, publicly funded state Bitcoin reserve, managed by the Texas Comptroller outside the state treasury with a $500 billion market-cap floor that only Bitcoin currently clears. The Comptroller made the reserve's first purchase on November 20, 2025 — about $5 million in a spot Bitcoin ETF, held as a placeholder — and in May 2026 named an advisory committee and opened a custody RFP to move into directly held Bitcoin.",
  },
  {
    q: "What is the Texas proof-of-reserves law?",
    a: "House Bill 1666, signed June 9, 2023 and effective September 1, 2023, requires digital asset service providers operating in Texas to segregate customer funds from company assets and to file auditor-attested proof-of-reserves reports with the Texas Department of Banking.",
  },
  {
    q: "What Bitcoin bills have failed in Texas?",
    a: "The biggest was Senate Bill 1751 in 2023, which would have capped Bitcoin miners' participation in ERCOT demand-response programs at 10% and stripped their tax abatements. It passed the Texas Senate 30–1 on April 12, 2023, then died in a Texas House committee in May 2023 without reaching a floor vote.",
  },
  {
    q: "Is Bitcoin legal tender in Texas?",
    a: "No. Bitcoin is legal to own and use in Texas, but it is not legal tender. House Bill 1056, signed June 22, 2025, recognizes gold and silver specie as legal tender and directs a metal-backed transactional currency — while Senate Bill 21 holds Bitcoin as a state reserve asset instead.",
  },
  {
    q: "Can Texas banks hold Bitcoin for customers?",
    a: "Yes. Industry Notice 2021-03, issued by the Texas Department of Banking on June 10, 2021, confirmed that Texas state-chartered banks may provide virtual currency custody services under existing authority in Texas Finance Code § 32.001, provided they manage the risks and comply with applicable law.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#lt${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

// law-figs:start
// Six figures, one per chapter, generated from the milestones and dead-bill
// datasets the page cites (Sept 2026). Server-rendered SVG, no client JS.
function LawTwoMapsFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="Two maps: what Texas asks of a Bitcoin business, and what Washington asks">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">TWO MAPS · IS BITCOIN LEGAL IN TEXAS? YES – AND THE STATE IS NOT THE WHOLE MAP</text>
<rect x="28" y="52" width="370" height="196" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="44" y="76" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--star)">THE STATE MAP · TEXAS</text>
<text x="44" y="94" fontSize="10.5" fill="var(--muted-2)">Supervisory Memorandum 1037 (2014) and the Money Services Act</text>
<circle cx="50" cy="118" r="3.5" fill="var(--star)"/>
<text x="62" y="122" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Bitcoin is not “money”</text>
<text x="62" y="136" fontSize="10.5" fill="var(--muted-2)">“best viewed like a speculative investment” – Commissioner Cooper</text>
<circle cx="50" cy="158" r="3.5" fill="var(--star)"/>
<text x="62" y="162" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">No license to sell your own coin</text>
<text x="62" y="176" fontSize="10.5" fill="var(--muted-2)">or to exchange crypto for crypto</text>
<circle cx="50" cy="198" r="3.5" fill="var(--star)"/>
<text x="62" y="202" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A license when fiat moves for others</text>
<text x="62" y="216" fontSize="10.5" fill="var(--muted-2)">sovereign currency in a transmitting capacity</text>
<rect x="412" y="52" width="370" height="196" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="428" y="76" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE FEDERAL MAP · WASHINGTON</text>
<text x="428" y="94" fontSize="10.5" fill="var(--muted-2)">FinCEN registration and 18 U.S.C. § 1960</text>
<circle cx="434" cy="118" r="3.5" fill="var(--accent)"/>
<text x="446" y="122" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Cash-to-bitcoin for customers is an MSB</text>
<text x="446" y="136" fontSize="10.5" fill="var(--muted-2)">register with FinCEN, whatever Texas says</text>
<circle cx="434" cy="158" r="3.5" fill="var(--accent)"/>
<text x="446" y="162" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Unlicensed transmission is a federal crime</text>
<text x="446" y="176" fontSize="10.5" fill="var(--muted-2)">§ 1960 – a registration offense, not fraud</text>
<circle cx="434" cy="198" r="3.5" fill="var(--accent)"/>
<text x="446" y="202" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Enforced in four Texas districts</text>
<text x="446" y="216" fontSize="10.5" fill="var(--muted-2)">every case, nightly, on the case tracker</text>
<text x="405.0" y="274" fontSize="12" textAnchor="middle" fill="var(--muted)">Legal to buy, sell, hold, and mine – and always has been. The state’s clarity is real; it is one of two maps.</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Department of Banking, SM 1037 (2014, rev. 2019, 2025); FinCEN; 18 U.S.C. § 1960 · schematic, not legal advice</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two maps. What Texas asks of a Bitcoin business, drawn from the 2014 memo and the Money Services Act, beside what Washington asks under FinCEN registration and the federal unlicensed-transmission statute. Bitcoin is legal in Texas; the seam between the maps is where people get hurt.
      </figcaption>
    </figure>
  );
}

function LawJune2021Figure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 230" role="img" aria-label="June 2021: three moves in eight days, weeks after China banned mining">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">EIGHT DAYS IN JUNE 2021 · THE WELCOME MAT, WRITTEN INTO STATUTE</text>
<line x1="66" x2="744" y1="120" y2="120" stroke="var(--muted-2)" strokeWidth="1.5"/>
<line x1="66.0" x2="66.0" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="66.0" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">mid-May</text>
<line x1="316.6" x2="316.6" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="316.6" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">June 1</text>
<line x1="522.9" x2="522.9" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="522.9" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">June 15</text>
<line x1="744.0" x2="744.0" y1="116" y2="124" stroke="var(--muted-2)"/>
<text x="744.0" y="138" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">June 30</text>
<line x1="154.4" x2="154.4" y1="114" y2="78" stroke="var(--muted-2)"/>
<circle cx="154.4" cy="120" r="5" fill="#c98a4e" stroke="var(--surface)" strokeWidth="2"/>
<text x="154.4" y="54" fontSize="12" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">China bans mining</text>
<text x="154.4" y="68" fontSize="10" textAnchor="start" fill="var(--muted-2)">the hashrate goes looking for a home</text>
<line x1="405.0" x2="405.0" y1="126" y2="162" stroke="var(--muted-2)"/>
<circle cx="405.0" cy="120" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="397.0" y="176" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">HB 1576 signed</text>
<text x="397.0" y="190" fontSize="10" textAnchor="end" fill="var(--muted-2)">the Work Group on Blockchain Matters</text>
<line x1="449.2" x2="449.2" y1="114" y2="78" stroke="var(--muted-2)"/>
<circle cx="449.2" cy="120" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="449.2" y="54" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Industry Notice 2021-03</text>
<text x="449.2" y="68" fontSize="10" textAnchor="middle" fill="var(--muted-2)">state banks may custody Bitcoin</text>
<line x1="522.9" x2="522.9" y1="126" y2="162" stroke="var(--muted-2)"/>
<circle cx="522.9" cy="120" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="530.9" y="176" fontSize="12" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">HB 4474 signed</text>
<text x="530.9" y="190" fontSize="10" textAnchor="start" fill="var(--muted-2)">virtual currency enters the Texas UCC</text>
<rect x="405.0" y="110" width="117.9" height="20" rx="4" fill="var(--accent)" fillOpacity="0.12"/>
<text x="405.0" y="220" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online; Texas Department of Banking · to scale by day</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Eight days in June 2021. Seventeen days after China banned mining, Texas made three moves in eight: a blockchain work group, a banking notice allowing state banks to custody Bitcoin, and the commercial-code definition that gave lenders and purchasers certainty. The timing was not a coincidence.
      </figcaption>
    </figure>
  );
}

function LawSessionsFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 356" role="img" aria-label="Three sessions: what passed and what died, 2021, 2023, 2025">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THREE SESSIONS · RECOGNITION, PROTECTION, RESERVE – AND WHAT DIED ALONG THE WAY</text>
<rect x="28" y="52" width="246" height="270" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="44" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Recognition</text>
<text x="44" y="94" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">87th · 2021</text>
<text x="44" y="120" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="#6f9e6a">ENACTED</text>
<text x="44" y="138" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">HB 1576</tspan><tspan fill="var(--muted-2)"> · work group</tspan></text>
<text x="44" y="155" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">HB 4474</tspan><tspan fill="var(--muted-2)"> · virtual currency in the UCC</tspan></text>
<rect x="286" y="52" width="246" height="270" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="302" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Protection</text>
<text x="302" y="94" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">88th · 2023</text>
<text x="302" y="120" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="#6f9e6a">ENACTED</text>
<text x="302" y="138" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">SB 895</tspan><tspan fill="var(--muted-2)"> · money-services modernization</tspan></text>
<text x="302" y="155" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">HB 591</tspan><tspan fill="var(--muted-2)"> · flared-gas mining exemption</tspan></text>
<text x="302" y="172" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">HB 1666</tspan><tspan fill="var(--muted-2)"> · proof of reserves</tspan></text>
<text x="302" y="197" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="#c98a4e">DIED</text>
<text x="302" y="215" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">SB 1751</tspan><tspan fill="var(--muted-2)"> · the 10% demand-response cap</tspan></text>
<rect x="544" y="52" width="246" height="270" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="560" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Reserve</text>
<text x="560" y="94" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">89th · 2025</text>
<text x="560" y="120" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="#6f9e6a">ENACTED</text>
<text x="560" y="138" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">SB 21</tspan><tspan fill="var(--muted-2)"> · the Strategic Bitcoin Reserve</tspan></text>
<text x="560" y="155" fontSize="11"><tspan fill="var(--foreground)" fontWeight="600">HB 1056</tspan><tspan fill="var(--muted-2)"> · gold and silver, digital</tspan></text>
<text x="560" y="180" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="#c98a4e">DIED</text>
<text x="560" y="198" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">SB 1705</tspan><tspan fill="var(--muted-2)"> · Regulation of virtual currency k…</tspan></text>
<text x="560" y="215" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">HJR 175</tspan><tspan fill="var(--muted-2)"> · Right to own, hold, and use a mu…</tspan></text>
<text x="560" y="232" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">HB 2798</tspan><tspan fill="var(--muted-2)"> · Virtual currency kiosk transacti…</tspan></text>
<text x="560" y="249" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">HB 1598</tspan><tspan fill="var(--muted-2)"> · A bitcoin reserve within the sta…</tspan></text>
<text x="560" y="266" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">HB 4258</tspan><tspan fill="var(--muted-2)"> · Comptroller and local-government…</tspan></text>
<text x="560" y="283" fontSize="11"><tspan fill="var(--muted)" fontWeight="600" textDecoration="line-through">SB 778</tspan><tspan fill="var(--muted-2)"> · The original Texas Strategic Bit…</tspan></text>
<text x="405.0" y="346" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online bill histories · the 89th’s dead file is kept in full on its own page</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Three sessions. Recognition in 2021, protection in 2023, the reserve in 2025, each session moving further than the last, and beside each what died: the demand-response cap in 2023, and in 2025 the right-to-transact amendment, the kiosk bills, and the reserve designs not chosen.
      </figcaption>
    </figure>
  );
}

function LawSb1751Figure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 220" role="img" aria-label="SB 1751 in 2023: passed the Senate 30 to 1, died in a House committee">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">SB 1751, 2023 · HOW FAR THE COUNTERWEIGHT GOT</text>
<line x1="70.0" x2="204.0" y1="100" y2="100" stroke="#6f9e6a" strokeWidth="2" strokeDasharray=""/>
<circle cx="70.0" cy="100" r="7" fill="#6f9e6a" stroke="#6f9e6a" strokeWidth="2"/>
<text x="70.0" y="78" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Filed</text>
<text x="70.0" y="126" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Sen. Kolkhorst</text>
<line x1="204.0" x2="338.0" y1="100" y2="100" stroke="#6f9e6a" strokeWidth="2" strokeDasharray=""/>
<circle cx="204.0" cy="100" r="7" fill="#6f9e6a" stroke="#6f9e6a" strokeWidth="2"/>
<text x="204.0" y="78" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Senate committee</text>
<text x="204.0" y="126" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Business &amp; Commerce</text>
<line x1="338.0" x2="472.0" y1="100" y2="100" stroke="#6f9e6a" strokeWidth="2" strokeDasharray=""/>
<circle cx="338.0" cy="100" r="7" fill="#6f9e6a" stroke="#6f9e6a" strokeWidth="2"/>
<text x="338.0" y="78" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Senate floor</text>
<text x="338.0" y="126" fontSize="10" textAnchor="middle" fill="var(--muted-2)">passed 30–1 · Apr 12, 2023</text>
<line x1="472.0" x2="606.0" y1="100" y2="100" stroke="var(--muted-2)" strokeWidth="2" strokeDasharray="4 4"/>
<circle cx="472.0" cy="100" r="7" fill="#c98a4e" stroke="#c98a4e" strokeWidth="2"/>
<line x1="468.0" x2="476.0" y1="96" y2="104" stroke="var(--surface)" strokeWidth="2"/><line x1="468.0" x2="476.0" y1="104" y2="96" stroke="var(--surface)" strokeWidth="2"/>
<text x="472.0" y="78" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">House committee</text>
<text x="472.0" y="126" fontSize="10" textAnchor="middle" fill="var(--muted-2)">stalled · May 2023</text>
<line x1="606.0" x2="740.0" y1="100" y2="100" stroke="var(--muted-2)" strokeWidth="2" strokeDasharray="4 4"/>
<circle cx="606.0" cy="100" r="5" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<text x="606.0" y="78" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--muted-2)" fontFamily="var(--font-display)">House floor</text>
<text x="606.0" y="126" fontSize="10" textAnchor="middle" fill="var(--muted-2)">never reached</text>
<circle cx="740.0" cy="100" r="5" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<text x="740.0" y="78" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--muted-2)" fontFamily="var(--font-display)">Governor</text>
<text x="740.0" y="126" fontSize="10" textAnchor="middle" fill="var(--muted-2)">–</text>
<text x="405.0" y="184" fontSize="11.5" textAnchor="middle" fill="var(--muted)">A 10% cap on miners in demand response and the end of their abatements: 30 of 31 senators voted yes. Only the House kept it from law.</text>
<text x="405.0" y="210" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online, SB 1751 (88R); Cointelegraph, Apr 12, 2023; CoinDesk, May 30, 2023</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        How far the counterweight got. Senate Bill 1751 cleared committee and passed the Texas Senate 30 to 1 in April 2023, then stalled in a House committee and died without a floor vote. Texas friendliness to mining has a boundary, and this is where the record shows it.
      </figcaption>
    </figure>
  );
}

function LawStaircaseFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="What Bitcoin is to Texas law, step by step from 2014 to 2026">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT BITCOIN IS TO TEXAS · ELEVEN YEARS, FIVE POSTURES</text>
<rect x="28.0" y="196" width="144.8" height="30" rx="6" fill="var(--muted-2)" fillOpacity="0.16" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="40.0" y="166" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">2014</text>
<text x="40.0" y="183" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Not money</text>
<text x="40.0" y="244" fontSize="9.5" fill="var(--muted-2)">a speculative investment</text>
<text x="40.0" y="257" fontSize="9.5" fill="var(--muted-2)">SM 1037</text>
<rect x="178.8" y="166" width="144.8" height="60" rx="6" fill="var(--star)" fillOpacity="0.26" stroke="var(--star)" strokeWidth="1"/>
<text x="190.8" y="136" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--star)">2021</text>
<text x="190.8" y="153" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Property</text>
<text x="190.8" y="244" fontSize="9.5" fill="var(--muted-2)">defined in the UCC</text>
<text x="190.8" y="257" fontSize="9.5" fill="var(--muted-2)">banks may custody</text>
<rect x="329.6" y="136" width="144.8" height="90" rx="6" fill="var(--star)" fillOpacity="0.36" stroke="var(--star)" strokeWidth="1"/>
<text x="341.6" y="106" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--star)">2023</text>
<text x="341.6" y="123" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Regulated custody</text>
<text x="341.6" y="244" fontSize="9.5" fill="var(--muted-2)">proof of reserves</text>
<text x="341.6" y="257" fontSize="9.5" fill="var(--muted-2)">flared-gas mining</text>
<rect x="480.4" y="106" width="144.8" height="120" rx="6" fill="var(--accent)" fillOpacity="0.46" stroke="var(--accent)" strokeWidth="1"/>
<text x="492.4" y="76" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">2025</text>
<text x="492.4" y="93" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Reserve asset</text>
<text x="492.4" y="244" fontSize="9.5" fill="var(--muted-2)">SB 21</text>
<text x="492.4" y="257" fontSize="9.5" fill="var(--muted-2)">a fund outside the treasury</text>
<rect x="631.2" y="76" width="144.8" height="150" rx="6" fill="var(--accent)" fillOpacity="0.56" stroke="var(--accent)" strokeWidth="1"/>
<text x="643.2" y="46" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">2026</text>
<text x="643.2" y="63" fontSize="13.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Held</text>
<text x="643.2" y="244" fontSize="9.5" fill="var(--muted-2)">$10M bought</text>
<text x="643.2" y="257" fontSize="9.5" fill="var(--muted-2)">the keys pending</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">from “not money” to a reserve asset of the state itself · each step is a milestone on the spine above</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What Bitcoin is to Texas, in five steps. Not money in 2014; property with a commercial-code definition and bank custody in 2021; a regulated, proof-of-reserves asset in 2023; a reserve asset of the state in 2025; and, since November 2025, one the state actually holds.
      </figcaption>
    </figure>
  );
}

function LawNextFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 240" role="img" aria-label="What comes next: the road to the 90th Legislature, September 2026 to May 2027">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT COMES NEXT · THE ROAD TO THE 90TH, SEPTEMBER 2026 → MAY 2027</text>
<line x1="66" x2="744" y1="122" y2="122" stroke="var(--accent)" strokeWidth="2"/>
<line x1="66.0" x2="66.0" y1="118" y2="126" stroke="var(--muted-2)"/>
<text x="66.0" y="140" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Sep 2026</text>
<line x1="140.5" x2="140.5" y1="118" y2="126" stroke="var(--muted-2)"/>
<line x1="217.5" x2="217.5" y1="118" y2="126" stroke="var(--muted-2)"/>
<line x1="292.0" x2="292.0" y1="118" y2="126" stroke="var(--muted-2)"/>
<text x="292.0" y="140" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Dec 2026</text>
<line x1="369.0" x2="369.0" y1="118" y2="126" stroke="var(--muted-2)"/>
<line x1="446.0" x2="446.0" y1="118" y2="126" stroke="var(--muted-2)"/>
<line x1="515.5" x2="515.5" y1="118" y2="126" stroke="var(--muted-2)"/>
<text x="515.5" y="140" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Mar 2027</text>
<line x1="592.5" x2="592.5" y1="118" y2="126" stroke="var(--muted-2)"/>
<line x1="667.0" x2="667.0" y1="118" y2="126" stroke="var(--muted-2)"/>
<line x1="744.0" x2="744.0" y1="118" y2="126" stroke="var(--muted-2)"/>
<text x="744.0" y="140" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Jun 2027</text>
<line x1="66.0" x2="66.0" y1="116" y2="78" stroke="var(--muted-2)"/>
<circle cx="66.0" cy="122" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="66.0" y="50" fontSize="12" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Gold tender in force</text>
<text x="66.0" y="64" fontSize="10" textAnchor="start" fill="var(--muted-2)">HB 1056 § 2116.101 · Sept 1, 2026</text>
<line x1="237.4" x2="237.4" y1="128" y2="186" stroke="var(--muted-2)"/>
<circle cx="237.4" cy="122" r="5" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="2"/>
<text x="237.4" y="196" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Pre-filing opens</text>
<text x="237.4" y="210" fontSize="10" textAnchor="middle" fill="var(--muted-2)">the first 90th-session bills</text>
<line x1="366.5" x2="366.5" y1="116" y2="112" stroke="var(--muted-2)"/>
<circle cx="366.5" cy="122" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="366.5" y="86" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">First reserve report</text>
<text x="366.5" y="100" fontSize="10" textAnchor="middle" fill="var(--muted-2)">SB 21 § 403.708</text>
<line x1="396.3" x2="396.3" y1="128" y2="148" stroke="var(--muted-2)"/>
<circle cx="396.3" cy="122" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="396.3" y="160" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">The 90th convenes</text>
<text x="396.3" y="174" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Jan 12, 2027</text>
<line x1="542.8" x2="542.8" y1="128" y2="186" stroke="var(--muted-2)"/>
<circle cx="542.8" cy="122" r="5" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="2"/>
<text x="542.8" y="196" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Filing deadline</text>
<text x="542.8" y="210" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Mar 12, 2027</text>
<line x1="667.0" x2="667.0" y1="116" y2="112" stroke="var(--muted-2)"/>
<circle cx="667.0" cy="122" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="667.0" y="86" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Bullion currency live</text>
<text x="667.0" y="100" fontSize="10" textAnchor="middle" fill="var(--muted-2)">HB 1056 takes full effect</text>
<line x1="741.5" x2="741.5" y1="116" y2="78" stroke="var(--muted-2)"/>
<circle cx="741.5" cy="122" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="741.5" y="50" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Sine die</text>
<text x="741.5" y="64" fontSize="10" textAnchor="end" fill="var(--muted-2)">May 31, 2027</text>
<text x="405.0" y="230" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislative Council session calendar; SB 21 and HB 1056 enrolled texts · to scale by month</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The road to the 90th. Gold tender in force on September 1, 2026; pre-filing on November 9; the reserve&apos;s first statutory report by December 31; the Legislature convening January 12, 2027 with a March 12 filing deadline; the Bullion Depository&apos;s currency live May 1; sine die May 31.
      </figcaption>
    </figure>
  );
}
// law-figs:end
export default function LawTimelinePage() {
  const pageUrl = `${site.url}/texas-bitcoin-law-timeline`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Texas Bitcoin Law Timeline",
    description:
      "The interactive, sourced timeline of Bitcoin law in Texas — every bill, memo, and failed vote from Supervisory Memorandum 1037 (2014) to the Strategic Bitcoin Reserve (2025).",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-22",
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
        name: "Texas Bitcoin Law Timeline",
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
          / Texas Bitcoin Law Timeline
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Interactive · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Texas Bitcoin Law Timeline
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every law, memo, and failed bill that shaped Bitcoin in Texas —
            from a 2014 banking memo to the nation&apos;s first publicly funded
            state Bitcoin reserve. Scroll the spine; every node is verified
            against the primary record.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 22, 2026 · Updated September 1, 2026
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Bitcoin is legal in Texas, and the law keeps compounding in its
            favor. Supervisory Memorandum 1037 (April 2014) holds that Bitcoin
            is not &ldquo;money&rdquo; under the Texas Money Services Act, so
            selling your own bitcoin requires no state license. HB 4474 (2021)
            wrote virtual currency into the Texas UCC, HB 1666 (2023) required
            proof of reserves, and Senate Bill 21 (June 2025) created the first
            publicly funded state Bitcoin reserve.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              On April 3, 2014, the Texas Department of Banking issued
              Supervisory Memorandum 1037, holding that Bitcoin is not
              &ldquo;money&rdquo; under the Texas Money Services Act.
              <C n={10} />
            </li>
            <li>
              House Bill 4474, effective September 1, 2021, made Texas one of
              the first states to write virtual currency into its Uniform
              Commercial Code.<C n={3} /><C n={17} />
            </li>
            <li>
              Senate Bill 1751 passed the Texas Senate 30&ndash;1 on April 12,
              2023, then died in a Texas House committee in May 2023.
              <C n={14} /><C n={15} />
            </li>
            <li>
              House Bill 1666, signed June 9, 2023, requires digital asset
              providers in Texas to file auditor-attested proof-of-reserves
              reports, effective September 1, 2023.<C n={8} /><C n={20} />
            </li>
            <li>
              On June 20, 2025, Governor Greg Abbott signed Senate Bill 21 —
              effective immediately — making Texas the first state with a
              standalone, publicly funded Strategic Bitcoin Reserve.<C n={1} />
              <C n={21} />
            </li>
            <li>
              The reserve made its first purchase on November 20, 2025 — about
              $5 million in a spot Bitcoin ETF, held as a placeholder — and by
              May 2026 had an advisory committee and an open custody RFP to move
              into directly held Bitcoin.<C n={23} /><C n={24} />
            </li>
          </ul>
        </div>

        {/* The timeline */}
        <div className="mt-10">
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The law timeline, year by year
          </h2>
          <LawTimeline />
        </div>

        <div className="prose-tx mt-10">
          <h2>Is Bitcoin legal in Texas?</h2>
          <p>
            Yes — Bitcoin is legal to buy, sell, hold, and mine in Texas, and
            it always has been. The full legal-status reference — licensing,
            custody, legal tender, taxes, and the federal seam in one place —
            is{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law actually says about Bitcoin
            </Link>
            . The clearest statement is the oldest document
            on this timeline: <strong>Supervisory Memorandum 1037</strong>,
            issued by the Texas Department of Banking on April 3, 2014, which
            holds that cryptocurrency is not &ldquo;money&rdquo; under the
            Texas Money Services Act because it is not government-issued legal
            tender.<C n={10} /> Banking Commissioner Charles G. Cooper framed
            it at the time as &ldquo;best viewed like a speculative investment,
            not as money.&rdquo;<C n={11} /> The practical consequence: selling
            your own bitcoin, or exchanging crypto for crypto, does not by
            itself trigger a state money-transmission license — the license
            attaches only when sovereign currency moves in a transmitting
            capacity.<C n={13} /> Federal law is a separate map — a business
            converting cash to bitcoin for customers must still register with
            FinCEN — a seam explored in depth in{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            , our cornerstone account of how the 2014 memo set everything else
            in motion. To watch that federal map get enforced in practice, see{" "}
            <Link href="/texas-bitcoin-case-tracker">
              the Texas Bitcoin case tracker
            </Link>{" "}
            — every § 1960 and crypto prosecution announced in Texas&apos;s
            four federal districts, rebuilt nightly from the DOJ record.
            <SeamMark to="/texas-bitcoin-case-tracker" step={1} />
          </p>

          <LawTwoMapsFigure />

          <h2>How did Texas law make room for Bitcoin?</h2>
          <p>
            Texas made room for Bitcoin in one remarkable June: three moves in
            eight days of 2021. On June 7, Governor Greg Abbott signed{" "}
            <strong>House Bill 1576</strong>, creating the 16-member Work Group
            on Blockchain Matters to draft a master plan for the industry.
            <C n={4} /> On June 10, the Department of Banking issued{" "}
            <strong>Industry Notice 2021-03</strong>, confirming that
            state-chartered banks may custody virtual currency under existing
            authority in Texas Finance Code § 32.001.<C n={12} /><C n={16} />{" "}
            And on June 15, Abbott signed <strong>House Bill 4474</strong>,
            which wrote virtual currency into the Texas Uniform Commercial Code
            — defining the asset, establishing what &ldquo;control&rdquo; of it
            means, and giving lenders and purchasers commercial-law certainty
            no handshake could.<C n={3} /><C n={17} /> The timing was not a
            coincidence: China banned Bitcoin mining that same spring, and
            Texas was writing the welcome mat into statute just as the
            world&apos;s hashrate went looking for a home — the migration
            mapped site by site on{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>
            .
          </p>

          <LawJune2021Figure />

          <h2>What did the 2023 session change?</h2>
          <p>
            The 88th Legislature in 2023 built the consumer-protection and
            energy layers. <strong>Senate Bill 895</strong>, signed May 29,
            2023, replaced the state&apos;s aging money-transmission statute
            with the multistate <strong>Money Services Modernization Act</strong>{" "}
            framework, effective September 1, 2023.<C n={6} /><C n={18} />{" "}
            <strong>House Bill 591</strong>, signed June 2, 2023, exempted
            otherwise-flared natural gas from severance tax when consumed near
            the wellhead — a tailored invitation to the Permian Basin&apos;s
            off-grid miners.<C n={7} /><C n={19} /> And{" "}
            <strong>House Bill 1666</strong>, signed June 9, 2023, made Texas an
            early proof-of-reserves state: digital asset providers must
            segregate customer funds and file auditor-attested reserve reports
            with the Department of Banking.<C n={8} /><C n={20} /> Written
            months after FTX&apos;s collapse, HB 1666 is the Texas posture in
            one law — pro-Bitcoin and anti-trust-me, demanding the receipts
            that self-custody never needed.
          </p>

          <LawSessionsFigure />

          <h2>What Bitcoin bills failed in Texas?</h2>
          <p>
            The most consequential failure — and the honest counterweight on
            this timeline — is <strong>Senate Bill 1751</strong>. Authored by
            Senator Lois Kolkhorst in 2023, it would have capped Bitcoin
            miners&apos; participation in ERCOT demand-response programs —
            which pay large loads to power down when the grid is stressed — at
            10%, and stripped miners&apos; tax abatements. It was no fringe
            effort: SB 1751 passed the Texas Senate <strong>30&ndash;1</strong>{" "}
            on April 12, 2023.<C n={14} /> A lopsided Senate vote against the
            industry&apos;s interests is part of the record, and it stays on
            the spine. The bill then stalled in a Texas House committee in May
            2023 and died without a floor vote.<C n={5} /><C n={15} /> The
            episode marks the real boundary of Texas friendliness: the state
            embraces miners as flexible grid assets, but a majority of its
            senators were willing to cap the subsidy — and only the House kept
            the cap from becoming law. The 89th session&apos;s full roster of
            failures — the right-to-transact amendment, the kiosk stalemate,
            the reserve designs not chosen — is kept in{" "}
            <Link href="/texas-bitcoin-bills-that-died">
              the dead file: Texas Bitcoin bills that didn&apos;t become law
            </Link>
            .
          </p>

          <LawSb1751Figure />

          <h2>What is the Texas Strategic Bitcoin Reserve?</h2>
          <p>
            The Texas Strategic Bitcoin Reserve is a state-owned Bitcoin fund
            created by <strong>Senate Bill 21</strong>, authored by{" "}
            <Link href="/charles-schwertner-bitcoin">Senator Charles Schwertner</Link>{" "}
            and signed by Governor Greg Abbott on June 20,
            2025, effective immediately.<C n={1} /><C n={21} /> It made Texas
            the first state to establish a standalone, publicly funded Bitcoin
            reserve — held outside the state treasury, managed by the Texas
            Comptroller, and restricted to digital assets averaging at least
            $500 billion in market capitalization over the trailing 24 months,
            a threshold only Bitcoin clears.<C n={21} /><C n={22} /> The
            structure is the message: Texas did not add Bitcoin to a pension
            allocation or an ETF line item; it built a dedicated vehicle,
            shielded from routine fund sweeps, and named it strategic. Eleven
            years separate the reserve from Supervisory Memorandum 1037 —
            Texas spent them moving from &ldquo;Bitcoin is not money&rdquo; to
            Bitcoin as a reserve asset of the state itself.
          </p>
          <p>
            And the reserve is no longer only on paper. On November 20, 2025,
            the Comptroller&apos;s office made its first purchase — roughly $5
            million in shares of the iShares Bitcoin Trust, bought at $51.8694 a
            share with Bitcoin near $91,300 — and called the ETF position a
            temporary placeholder until a dedicated custodian is in place.
            <C n={23} /> In May 2026, Acting Comptroller Kelly Hancock named the
            reserve&apos;s advisory committee — including Cormint&apos;s Jamie
            McAvity, SMU law professor Carla Reyes, and CleanSpark CFO Gary
            Vecchiarelli — and opened a request for proposals for the custody and
            liquidity partner that will carry the state from an ETF proxy into
            directly held Bitcoin.<C n={24} /> On August 1, 2026, Don Huffines
            was sworn in as Comptroller after Hancock&apos;s resignation,
            inheriting the reserve with its custodian still unnamed.<C n={25} />{" "}
            The statute has become a standing order at the trading desk — funding, custody, the committee, and the
            reserve&apos;s current status are tracked in full on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve
            </Link>{" "}
            page.
          </p>

          <LawStaircaseFigure />

          <h2>Does Texas have its own digital currency?</h2>
          <p>
            Not a central bank digital currency — Texas chose older collateral.{" "}
            <strong>House Bill 1056</strong>, carried in the Senate by Senator
            Bryan Hughes and signed June 22, 2025, recognizes gold and silver
            specie as legal tender in Texas and directs the Comptroller to
            stand up a transactional currency fully backed by metal in the
            Texas Bullion Depository.<C n={2} /><C n={9} /> The rollout is
            deliberate: the act takes effect May 1, 2027, with its Section
            2116.101 arriving September 1, 2026.<C n={2} /> Set beside SB 21,
            the pattern is unmistakable — in the same June, Texas wrote both of
            hard money&apos;s traditions into law: the digital-native kind
            secured by proof-of-work, and the ancient kind secured by bullion
            in a vault. Bitcoin is not legal tender in Texas; it holds the
            arguably stronger position of reserve asset.
          </p>

          <h2>What comes next for Bitcoin law in Texas?</h2>
          <p>
            The pattern on this spine points forward. Every regular session
            since 2021 has moved Bitcoin law further than the one before —
            recognition in 2021, protection in 2023, reserve in 2025 — and the
            90th Legislature convenes in January 2027 with live questions
            queued: how quickly the reserve accumulates now that its first
            position is on the books, how the Bullion Depository&apos;s
            transactional currency launches by its May 2027 deadline, and how a
            grid absorbing AI data centers treats its original flexible load. The frontier framing matters here: none of
            these are threats to the record above — they are its next entries.
            We re-verify this timeline after every session, the same cadence as{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>{" "}
            and{" "}
            <Link href="/history-of-bitcoin-in-texas">
              the history of Bitcoin in Texas
            </Link>
            . Dataset last verified {LAW_LAST_VERIFIED}, covering{" "}
            {lawMilestones.length} milestones across twelve years of Texas law.
          </p>

          <LawNextFigure />
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
            Primary record first: Texas Legislature Online bill histories and
            Texas Department of Banking documents, then trade and legal press.
            This is a research and reference article, not financial or legal
            advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {lawSources.map((s) => (
              <li key={s.id} id={`lt${s.id}`} className="flex scroll-mt-24 gap-2">
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
