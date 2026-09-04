import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  DEAD_BILLS_LAST_VERIFIED,
  deadBillSources,
  deadBills89,
  cutFromSB21,
  type DeathPlace,
} from "@/lib/dead-bills";

const pageUrl = `${site.url}/texas-bitcoin-bills-that-died`;

export const metadata: Metadata = {
  title: "The Dead File: Texas Bitcoin Bills That Didn't Become Law",
  description:
    "The 89th Legislature's Bitcoin dead file, verified against the official record: the constitutional right-to-transact amendment that passed the House (HJR 175), the kiosk bills both chambers approved but never reconciled (SB 1705, HB 2798), the rival reserve designs (HB 1598, HB 4258, SB 778) - and what each one leaves on the 90th's agenda.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "The Dead File: Texas Bitcoin Bills That Didn't Become Law",
    description:
      "SB 21 got the headlines. This is everything else - the Bitcoin measures the 89th Legislature declined, where each one actually stopped, and why the dead file reads like the next session's agenda.",
    url: pageUrl,
  },
};

// FAQ - rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Which Texas Bitcoin bills failed in 2025?",
    a: "The notable failures of the 89th Legislature: HJR 175, a constitutional right-to-transact amendment that passed the House and was left pending in a Senate committee; SB 1705 and HB 2798, kiosk consumer-protection bills that each passed one chamber but never both; HB 1598, Capriglione's in-treasury reserve design; HB 4258, a $250 million comptroller and local-government investment bill; and SB 778, superseded by SB 21.",
  },
  {
    q: "Did Texas pass a constitutional right to use Bitcoin?",
    a: "No - but it came close. HJR 175, proposing a constitutional amendment establishing the right to own, hold, and use a mutually agreed medium of exchange including digital currency, passed the full Texas House on May 9, 2025. It was heard in Senate Business & Commerce on May 15 and left pending there, so it never reached the November ballot.",
  },
  {
    q: "Does Texas regulate Bitcoin ATMs?",
    a: "Not yet, and the gap is expensive. The 89th Legislature produced two kiosk bills - SB 1705 passed the Senate and HB 2798 passed the House - but neither cleared both chambers before sine die on June 2, 2025. Reporting in 2025-2026 put Texans' losses to crypto kiosk scams at roughly $57 million a year, making kiosk regulation the most likely early mover of the 90th session.",
  },
  {
    q: "What was cut from SB 21 before it passed?",
    a: "Two things of note. Staking authority - earlier drafts let the reserve earn yield on eligible assets - was removed before the final vote. And the appropriation shrank: a Senate budget rider had floated $21 million to kick-start the fund, trimmed to the $10 million that became law.",
  },
  {
    q: "Will these bills come back in the next session?",
    a: "The 90th Legislature convenes in January 2027, and the dead file is the natural starting agenda: kiosk regulation with two one-chamber majorities already on record, HJR 175's right-to-transact amendment five committee votes from a ballot, and reserve expansions - a bigger appropriation, local-government authority, donation channels - already drafted in the failed bills of 2025.",
  },
];

const deathStyle: Record<DeathPlace, { color: string; label: string }> = {
  calendar: { color: "#c98a4e", label: "Died on the calendar" },
  pending: { color: "var(--star)", label: "Left pending" },
  "no-hearing": { color: "var(--accent)", label: "No hearing" },
  superseded: { color: "#7a9e6a", label: "Superseded" },
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

// dead-figs:start
// Five figures, one per chapter, generated from the dead-file dataset and the
// dates the page cites (Sept 2026). Server-rendered SVG, no client JS.
function DeadPipelineFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 380" role="img" aria-label="Where the six dead bills of the 89th Legislature stopped, on the path from filing to the governor">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHERE THEY DIED · SIX BILLS ON THE ROAD TO THE GOVERNOR, 89TH LEGISLATURE</text>
<line x1="190.0" x2="190.0" y1="52" y2="322" stroke="var(--border)"/>
<text x="190.0" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Filed</text>
<line x1="272.9" x2="272.9" y1="52" y2="322" stroke="var(--border)"/>
<text x="272.9" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Committee</text>
<line x1="355.7" x2="355.7" y1="52" y2="322" stroke="var(--border)"/>
<text x="355.7" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Heard</text>
<line x1="438.6" x2="438.6" y1="52" y2="322" stroke="var(--border)"/>
<text x="438.6" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Floor</text>
<line x1="521.4" x2="521.4" y1="52" y2="322" stroke="var(--border)"/>
<text x="521.4" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Passed</text>
<text x="521.4" y="73" fontSize="9" textAnchor="middle" fill="var(--muted-2)">chamber</text>
<line x1="604.3" x2="604.3" y1="52" y2="322" stroke="var(--border)"/>
<text x="604.3" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Other</text>
<text x="604.3" y="73" fontSize="9" textAnchor="middle" fill="var(--muted-2)">chamber</text>
<text x="604.3" y="84" fontSize="9" textAnchor="middle" fill="var(--muted-2)">committee</text>
<line x1="687.1" x2="687.1" y1="52" y2="322" stroke="var(--border)"/>
<text x="687.1" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Other</text>
<text x="687.1" y="73" fontSize="9" textAnchor="middle" fill="var(--muted-2)">floor</text>
<line x1="770.0" x2="770.0" y1="52" y2="322" stroke="var(--border)"/>
<text x="770.0" y="62" fontSize="9" textAnchor="middle" fill="var(--muted-2)">Governor</text>
<text x="176" y="112" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">SB 1705</text>
<text x="176" y="125" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">kiosk registration</text>
<line x1="190.0" x2="687.1" y1="108" y2="108" stroke="#c98a4e" strokeWidth="3" strokeLinecap="round"/>
<line x1="687.1" x2="770.0" y1="108" y2="108" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 4"/>
<circle cx="687.1" cy="108" r="6" fill="var(--surface)" stroke="#c98a4e" strokeWidth="2"/>
<line x1="683.6" x2="690.6" y1="104.5" y2="111.5" stroke="#c98a4e" strokeWidth="1.5"/><line x1="683.6" x2="690.6" y1="111.5" y2="104.5" stroke="#c98a4e" strokeWidth="1.5"/>
<text x="675.1" y="125" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">on the House calendar, May 27</text>
<text x="176" y="154" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">HJR 175</text>
<text x="176" y="167" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">right to transact</text>
<line x1="190.0" x2="604.3" y1="150" y2="150" stroke="#c98a4e" strokeWidth="3" strokeLinecap="round"/>
<line x1="604.3" x2="770.0" y1="150" y2="150" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 4"/>
<circle cx="604.3" cy="150" r="6" fill="var(--surface)" stroke="#c98a4e" strokeWidth="2"/>
<line x1="600.8" x2="607.8" y1="146.5" y2="153.5" stroke="#c98a4e" strokeWidth="1.5"/><line x1="600.8" x2="607.8" y1="153.5" y2="146.5" stroke="#c98a4e" strokeWidth="1.5"/>
<text x="592.3" y="167" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">left pending in Senate committee, May 15</text>
<text x="176" y="196" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">HB 2798</text>
<text x="176" y="209" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">kiosk disclosures</text>
<line x1="190.0" x2="604.3" y1="192" y2="192" stroke="#c98a4e" strokeWidth="3" strokeLinecap="round"/>
<line x1="604.3" x2="770.0" y1="192" y2="192" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 4"/>
<circle cx="604.3" cy="192" r="6" fill="var(--surface)" stroke="#c98a4e" strokeWidth="2"/>
<line x1="600.8" x2="607.8" y1="188.5" y2="195.5" stroke="#c98a4e" strokeWidth="1.5"/><line x1="600.8" x2="607.8" y1="195.5" y2="188.5" stroke="#c98a4e" strokeWidth="1.5"/>
<text x="592.3" y="209" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">died in Senate committee after House passage</text>
<text x="176" y="238" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">SB 778</text>
<text x="176" y="251" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">the first reserve bill</text>
<line x1="190.0" x2="272.9" y1="234" y2="234" stroke="var(--muted-2)" strokeWidth="3" strokeLinecap="round"/>
<line x1="272.9" x2="770.0" y1="234" y2="234" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 4"/>
<circle cx="272.9" cy="234" r="6" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<line x1="269.4" x2="276.4" y1="230.5" y2="237.5" stroke="var(--muted-2)" strokeWidth="1.5"/><line x1="269.4" x2="276.4" y1="237.5" y2="230.5" stroke="var(--muted-2)" strokeWidth="1.5"/>
<text x="284.9" y="251" fontSize="9.5" textAnchor="start" fill="var(--muted-2)">superseded by SB 21; left in Finance</text>
<text x="176" y="280" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">HB 1598</text>
<text x="176" y="293" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">reserve inside the treasury</text>
<line x1="190.0" x2="272.9" y1="276" y2="276" stroke="var(--muted-2)" strokeWidth="3" strokeLinecap="round"/>
<line x1="272.9" x2="770.0" y1="276" y2="276" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 4"/>
<circle cx="272.9" cy="276" r="6" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<line x1="269.4" x2="276.4" y1="272.5" y2="279.5" stroke="var(--muted-2)" strokeWidth="1.5"/><line x1="269.4" x2="276.4" y1="279.5" y2="272.5" stroke="var(--muted-2)" strokeWidth="1.5"/>
<text x="284.9" y="293" fontSize="9.5" textAnchor="start" fill="var(--muted-2)">no hearing</text>
<text x="176" y="322" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">HB 4258</text>
<text x="176" y="335" fontSize="9.5" textAnchor="end" fill="var(--muted-2)">comptroller investment authority</text>
<line x1="190.0" x2="272.9" y1="318" y2="318" stroke="var(--muted-2)" strokeWidth="3" strokeLinecap="round"/>
<line x1="272.9" x2="770.0" y1="318" y2="318" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3 4"/>
<circle cx="272.9" cy="318" r="6" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<line x1="269.4" x2="276.4" y1="314.5" y2="321.5" stroke="var(--muted-2)" strokeWidth="1.5"/><line x1="269.4" x2="276.4" y1="321.5" y2="314.5" stroke="var(--muted-2)" strokeWidth="1.5"/>
<text x="284.9" y="335" fontSize="9.5" textAnchor="start" fill="var(--muted-2)">no hearing</text>
<line x1="792" x2="792" y1="96" y2="322" stroke="var(--accent)" strokeWidth="2"/>
<text x="788" y="336" fontSize="9.5" textAnchor="end" fill="var(--accent)">sine die · June 2, 2025</text>
<text x="405.0" y="370" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">no bill above lost a vote · the calendar is the veto · from the dead-file dataset</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Where they died. Six bills on the road from filing to the governor, each stopped where the calendar caught it: one on a House floor calendar, two in the other chamber&apos;s committee after passing their own, three never heard. None lost a vote. When the 89th adjourned sine die on June 2, 2025, everything still pending lapsed at once.
      </figcaption>
    </figure>
  );
}

function DeadHjr175Figure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 250" role="img" aria-label="HJR 175: the two-thirds path to the ballot, and where it stopped">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">HJR 175 · THE RIGHT TO TRANSACT, FIVE VOTES FROM THE BALLOT</text>
<line x1="90.0" x2="300.0" y1="110" y2="110" stroke="#6f9e6a" strokeWidth="2" strokeDasharray=""/>
<circle cx="90.0" cy="110" r="7" fill="#6f9e6a" stroke="#6f9e6a" strokeWidth="2"/>
<text x="90.0" y="88" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">House</text>
<text x="90.0" y="136" fontSize="10" textAnchor="middle" fill="var(--muted-2)">passed · May 9, 2025</text>
<line x1="300.0" x2="510.0" y1="110" y2="110" stroke="var(--muted-2)" strokeWidth="2" strokeDasharray="4 4"/>
<circle cx="300.0" cy="110" r="7" fill="#c98a4e" stroke="#c98a4e" strokeWidth="2"/>
<line x1="296.0" x2="304.0" y1="106" y2="114" stroke="var(--surface)" strokeWidth="2"/><line x1="296.0" x2="304.0" y1="114" y2="106" stroke="var(--surface)" strokeWidth="2"/>
<text x="300.0" y="88" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Senate committee</text>
<text x="300.0" y="136" fontSize="10" textAnchor="middle" fill="var(--muted-2)">heard May 15 · left pending</text>
<line x1="510.0" x2="720.0" y1="110" y2="110" stroke="var(--muted-2)" strokeWidth="2" strokeDasharray="4 4"/>
<circle cx="510.0" cy="110" r="5" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<text x="510.0" y="88" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--muted-2)" fontFamily="var(--font-display)">Senate floor</text>
<text x="510.0" y="136" fontSize="10" textAnchor="middle" fill="var(--muted-2)">two-thirds: 21 of 31</text>
<circle cx="720.0" cy="110" r="5" fill="var(--surface)" stroke="var(--muted-2)" strokeWidth="2"/>
<text x="720.0" y="88" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--muted-2)" fontFamily="var(--font-display)">November ballot</text>
<text x="720.0" y="136" fontSize="10" textAnchor="middle" fill="var(--muted-2)">voter approval</text>
<rect x="90" y="168" width="630" height="14" rx="3" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="90" y="168" width="426.8" height="14" rx="3" fill="var(--accent)" fillOpacity="0.35"/>
<line x1="516.8" x2="516.8" y1="162" y2="188" stroke="var(--accent)" strokeWidth="2"/>
<text x="522.8" y="179" fontSize="10" fill="var(--accent)">21 of 31 · the two-thirds line</text>
<text x="90" y="198" fontSize="10" fill="var(--muted-2)">a constitutional amendment needs two-thirds of each chamber, then the voters · it never reached the Senate floor</text>
<text x="405.0" y="240" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online, HJR 175 (89R) · the likeliest headline refile of the 90th</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Five votes from the ballot. The right-to-transact amendment passed the full House on May 9, 2025, was heard in Senate Business and Commerce on May 15, and was left pending there, short of the two-thirds Senate vote that would have put it before voters that November.
      </figcaption>
    </figure>
  );
}

function DeadKioskFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The kiosk bills: two one-chamber majorities that crossed and both died">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">TWO MAJORITIES, ZERO LAWS · THE KIOSK BILLS CROSSED IN THE MIDDLE</text>
<rect x="28" y="56" width="330" height="170" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<rect x="452" y="56" width="330" height="170" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="44" y="80" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE HOUSE</text>
<text x="468" y="80" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE SENATE</text>
<text x="44" y="110" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">HB 2798 · kiosk disclosures</text>
<text x="44" y="126" fontSize="10" fill="#6f9e6a">passed the House · April 25, 2025</text>
<path d="M358,118 C420,118 420,196 452,196" fill="none" stroke="#6f9e6a" strokeWidth="2"/>
<text x="468" y="200" fontSize="11.5" fontWeight="600" fill="#c98a4e">✕ died in Business &amp; Commerce</text>
<text x="468" y="110" fontSize="13" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">SB 1705 · kiosk registration</text>
<text x="468" y="126" fontSize="10" fill="#6f9e6a">passed the Senate · May 15, 2025</text>
<path d="M452,118 C390,118 390,196 358,196" fill="none" stroke="#6f9e6a" strokeWidth="2"/>
<text x="44" y="186" fontSize="10" fill="var(--muted)">cleared House committee without amendment</text>
<text x="44" y="204" fontSize="11.5" fontWeight="600" fill="#c98a4e">✕ died on the House calendar, May 27</text>
<text x="405.0" y="254" fontSize="12" textAnchor="middle" fill="var(--muted)">Each chamber passed its own kiosk bill; neither passed the other’s. Texans lose roughly $57 million a year to kiosk scams.</text>
<text x="405.0" y="280" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online, HB 2798 and SB 1705 (89R); scam-loss reporting through 2026 · the surest early mover of the 90th</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Two majorities, zero laws. The House passed its kiosk bill in April and the Senate passed its own in May; each crossed to the other chamber and died there, one in committee and one on a floor calendar the House never reached. Consumer protection with two one-chamber majorities on record is the surest early mover of the next session.
      </figcaption>
    </figure>
  );
}

function DeadReserveDesignsFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 320" role="img" aria-label="Four reserve designs of the 89th: the three that died beside the one enacted">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">FOUR RESERVE DESIGNS · THE THREE THAT DIED, BESIDE THE ONE THAT PASSED</text>
<rect x="28" y="52" width="183" height="226" rx="10" fill="var(--surface-2)" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="42" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">SB 778</text>
<text x="42" y="94" fontSize="10" fontWeight="600" fill="var(--muted-2)">the opening draft</text>
<circle cx="48" cy="118" r="3" fill="var(--muted-2)"/>
<text x="58" y="122" fontSize="10" fill="var(--muted)">donations from the public</text>
<circle cx="48" cy="146" r="3" fill="var(--muted-2)"/>
<text x="58" y="150" fontSize="10" fill="var(--muted)">appropriations capped at 1%</text>
<circle cx="48" cy="174" r="3" fill="var(--muted-2)"/>
<text x="58" y="178" fontSize="10" fill="var(--muted)">cold storage, regular audits</text>
<circle cx="48" cy="202" r="3" fill="#c98a4e"/>
<text x="58" y="206" fontSize="10" fill="#c98a4e">superseded by its successor</text>
<rect x="221" y="52" width="183" height="226" rx="10" fill="var(--surface-2)" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="235" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">HB 1598</text>
<text x="235" y="94" fontSize="10" fontWeight="600" fill="var(--muted-2)">custody-first</text>
<circle cx="241" cy="118" r="3" fill="var(--muted-2)"/>
<text x="251" y="122" fontSize="10" fill="var(--muted)">Bitcoin inside the state treasury</text>
<circle cx="241" cy="146" r="3" fill="var(--muted-2)"/>
<text x="251" y="150" fontSize="10" fill="var(--muted)">a minimum five-year hold</text>
<circle cx="241" cy="174" r="3" fill="var(--muted-2)"/>
<text x="251" y="178" fontSize="10" fill="var(--muted)">a donation channel</text>
<circle cx="241" cy="202" r="3" fill="#c98a4e"/>
<text x="251" y="206" fontSize="10" fill="#c98a4e">no hearing</text>
<rect x="414" y="52" width="183" height="226" rx="10" fill="var(--surface-2)" stroke="var(--muted-2)" strokeWidth="1"/>
<text x="428" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">HB 4258</text>
<text x="428" y="94" fontSize="10" fontWeight="600" fill="var(--muted-2)">the biggest number</text>
<circle cx="434" cy="118" r="3" fill="var(--muted-2)"/>
<text x="444" y="122" fontSize="10" fill="var(--muted)">comptroller authority ~$250M</text>
<circle cx="434" cy="146" r="3" fill="var(--muted-2)"/>
<text x="444" y="150" fontSize="10" fill="var(--muted)">up to $10M per city or county</text>
<circle cx="434" cy="174" r="3" fill="var(--muted-2)"/>
<text x="444" y="178" fontSize="10" fill="var(--muted)">Democratic authors</text>
<circle cx="434" cy="202" r="3" fill="#c98a4e"/>
<text x="444" y="206" fontSize="10" fill="#c98a4e">no hearing</text>
<rect x="607" y="52" width="183" height="226" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.5"/>
<text x="621" y="78" fontSize="15" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">SB 21</text>
<text x="621" y="94" fontSize="10" fontWeight="600" fill="var(--accent)">enacted · June 20, 2025</text>
<circle cx="627" cy="118" r="3" fill="var(--accent)"/>
<text x="637" y="122" fontSize="10" fill="var(--muted)">a fund outside the treasury</text>
<circle cx="627" cy="146" r="3" fill="var(--accent)"/>
<text x="637" y="150" fontSize="10" fill="var(--muted)">$10M appropriated</text>
<circle cx="627" cy="174" r="3" fill="var(--accent)"/>
<text x="637" y="178" fontSize="10" fill="var(--muted)">only assets over $500B market cap</text>
<circle cx="627" cy="202" r="3" fill="var(--accent)"/>
<text x="637" y="206" fontSize="10" fill="var(--muted)">no staking, no donations</text>
<text x="405.0" y="310" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Legislature Online bill texts; Austin American-Statesman, Jan 28, 2025 · the dead designs are the enacted reserve’s unbuilt wings</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Four reserve designs. Schwertner&apos;s opening draft, Capriglione&apos;s custody-first alternative with a five-year hold and a donation channel, the Reynolds and Plesa bill with the session&apos;s biggest number, and the one that passed. The hold period, the donation channel, and the local-government tier are the enacted reserve&apos;s unbuilt wings.
      </figcaption>
    </figure>
  );
}

function DeadCutsFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 196" role="img" aria-label="SB 21 as filed versus as enacted: what the Legislature cut">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT WAS CUT FROM SB 21 ITSELF · AS FILED, AS ENACTED</text>
<text x="250" y="60" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--muted-2)">AS FILED</text>
<text x="540" y="60" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">AS ENACTED</text>
<text x="236" y="92" fontSize="12.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Appropriation</text>
<text x="250" y="92" fontSize="11" fill="var(--muted)">$21 million · the Senate rider</text>
<line x1="478" x2="522" y1="88" y2="88" stroke="var(--muted-2)"/><path d="M516,84 L522,88 L516,92" fill="none" stroke="var(--muted-2)"/>
<text x="540" y="92" fontSize="11" fontWeight="600" fill="var(--accent)">$10 million</text>
<text x="236" y="126" fontSize="12.5" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Staking authority</text>
<text x="250" y="126" fontSize="11" fill="var(--muted)" textDecoration="line-through">yield on eligible assets</text>
<line x1="478" x2="522" y1="122" y2="122" stroke="var(--muted-2)"/><path d="M516,118 L522,122 L516,126" fill="none" stroke="var(--muted-2)"/>
<text x="540" y="126" fontSize="11" fontWeight="600" fill="#c98a4e">removed before the final vote</text>
<text x="405.0" y="164" fontSize="12" textAnchor="middle" fill="var(--muted)">A smaller, unstaked, plain-custody fund was the version that could pass with bipartisan cover – and did.</text>
<text x="405.0" y="186" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Policy Research on the appropriation; Texas Observer on the conference · the trimmed $11M and the staking authority sit on the table for the 90th</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What was cut from SB 21 itself. The $21 million Senate rider became $10 million, and staking authority left before the final vote. The Legislature bought certainty; both cuts are now on the table for the 90th.
      </figcaption>
    </figure>
  );
}
// dead-figs:end
export default function DeadBillsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Dead File: Texas Bitcoin Bills That Didn't Become Law",
    description:
      "The 89th Legislature's Bitcoin dead file, verified against the official record: HJR 175, SB 1705, HB 2798, HB 1598, HB 4258, SB 778 - where each stopped, and what each leaves on the 90th's agenda.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-28",
    dateModified: "2026-09-01",
    about: [
      { "@type": "Thing", name: "Bitcoin" },
      { "@type": "Thing", name: "Texas Legislature" },
      { "@type": "Thing", name: "Cryptocurrency regulation" },
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
        name: "Texas Bitcoin Bills That Died",
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
          / Texas Bitcoin Bills That Died
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The Dead File: Texas Bitcoin Bills That Didn&apos;t Become Law
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The record of a legislature is not just what it enacts - it is
            what it declines, defers, and runs out of calendar for. SB 21 got
            the headlines and{" "}
            <Link href="/texas-bitcoin-law-timeline">the law timeline</Link>{" "}
            got SB 21. This page keeps the rest of the 89th&apos;s Bitcoin
            record: a constitutional amendment five votes from the ballot, two
            kiosk bills that both chambers wanted and neither finished, and
            three reserve designs the state considered before choosing one.
            Read it as a map of the frontier the 90th Legislature inherits.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 28, 2026 · Updated{" "}
            {DEAD_BILLS_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer - self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            The 89th Texas Legislature (2025) passed SB 21&apos;s Bitcoin
            reserve but let its other Bitcoin measures die: HJR 175, a
            constitutional right-to-transact amendment, passed the House and
            stalled in a Senate committee; kiosk consumer-protection bills SB
            1705 and HB 2798 each passed one chamber but never both; and
            rival reserve designs HB 1598, HB 4258, and SB 778 died in
            committee. All lapsed at sine die on June 2, 2025.
          </p>
        </div>

        {/* Key facts - one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              HJR 175, proposing a Texas constitutional right to own, hold,
              and use a chosen medium of exchange including digital currency,
              passed the House on May 9, 2025 and was left pending in Senate
              Business &amp; Commerce on May 15.<C n={4} />
            </li>
            <li>
              SB 1705, the Senate&apos;s virtual-currency kiosk regulation,
              passed the Senate May 15, 2025 and died on the House General
              State Calendar - placed May 27, six days before sine die, never
              called up.<C n={6} />
            </li>
            <li>
              HB 2798, the House&apos;s kiosk-disclosure bill, passed the
              House April 25, 2025 and died in the Senate Business &amp;
              Commerce Committee.<C n={5} />
            </li>
            <li>
              HB 1598 (an in-treasury reserve with a five-year hold) and HB
              4258 (comptroller and local-government crypto investment,
              reported around $250 million) both died without hearings in the
              House Delivery of Government Efficiency committee.<C n={2} />
              <C n={3} />
            </li>
            <li>
              Staking authority was removed from SB 21 before the final vote,
              and its appropriation was trimmed from a floated $21 million to
              the $10 million enacted.<C n={8} /><C n={9} />
            </li>
            <li>
              Reporting in 2025-2026 put Texans&apos; losses to crypto kiosk
              scams at roughly $57 million a year - the running cost of the
              kiosk bills&apos; failure.<C n={11} /><C n={10} />
            </li>
          </ul>
        </div>

        {/* The dead file - ordered by distance traveled */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The dead file, by distance traveled
            </h2>
            <span className="text-xs text-muted-2">
              89th Legislature · sine die June 2, 2025
            </span>
          </div>
          <ol className="mt-5 space-y-4">
            {deadBills89.map((b) => {
              const s = deathStyle[b.died];
              return (
                <li
                  key={b.bill}
                  className="relative rounded-xl border border-border bg-surface p-5 pl-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                    style={{ background: s.color }}
                  />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-display text-base font-semibold">
                      {b.bill}
                    </span>
                    <span
                      className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        color: s.color,
                        borderColor: `color-mix(in srgb, ${s.color} 50%, transparent)`,
                      }}
                    >
                      {s.label}
                    </span>
                    <span className="text-xs text-muted-2">{b.authors}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {b.caption}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    <strong>What it would have done:</strong> {b.wouldHaveDone}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {b.story}{" "}
                    {b.sourceIds.map((n) => (
                      <C key={n} n={n} />
                    ))}
                  </p>
                  <p className="mt-1.5 text-xs text-muted-2">{b.diedLabel}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="prose-tx mt-12">
          <h2>How does a bill die in Texas without a no vote?</h2>
          <p>
            Almost none of the bills above lost a vote - that is the first
            thing the dead file teaches. The Texas Legislature meets 140 days
            every two years, and the calendar is the real veto: a bill dies
            when it is referred to committee and never heard, heard and
            &ldquo;left pending,&rdquo; or reported out and placed on a floor
            calendar the chamber never reaches. When the 89th adjourned sine
            die on June 2, 2025, everything still pending lapsed at once.
            <C n={1} /><C n={2} /><C n={4} /><C n={6} /> A death without a
            vote is also a death without a verdict, which is exactly why dead
            bills return: nothing above was rejected on the merits.
          </p>

          <DeadPipelineFigure />

          <h2>What was HJR 175, and how close did the right-to-transact come?</h2>
          <p>
            Closest of all. House Joint Resolution 175, by Representative
            Gerdes, proposed amending the Texas Constitution to establish the
            right of individuals to own, hold, and use a mutually agreed
            medium of exchange - cash, coin, bullion, digital currency - for
            trading and contracting.<C n={4} /> It passed the full House on
            May 9, 2025, and got its Senate Business &amp; Commerce hearing
            on May 15, where it was left pending: five committee votes short
            of the two-thirds path to the November ballot. It is the natural
            constitutional companion to the transactional groundwork already
            in statute, surveyed in{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            , and the likeliest headline refile of the 90th session.
          </p>

          <DeadHjr175Figure />

          <h2>Why did the kiosk bills fail if both chambers wanted one?</h2>
          <p>
            Because they wanted their own. The House passed HB 2798 (kiosk
            disclosures and fees) on April 25, 2025; it crossed to the Senate
            and sat in Business &amp; Commerce.<C n={5} /> The Senate passed
            SB 1705 (a full Finance Code Chapter 161 for kiosk registration
            and consumer protection) on May 15; it cleared its House
            committee without amendment and reached the General State
            Calendar on May 27 - where the clock beat it.<C n={6} />
            <C n={12} /> Two majorities, zero laws. The failure has a
            price tag: Texans lose roughly $57 million a year to kiosk
            scams, per reporting through 2026, and the Department of Banking
            still lacks a registration regime for the machines.<C n={11} />
            <C n={10} /> Consumer protection with two one-chamber majorities
            on record is as close to a sure early mover as the 90th session
            has.
          </p>

          <DeadKioskFigure />

          <h2>What were the reserve designs Texas didn&apos;t choose?</h2>
          <p>
            Three, and the differences are instructive. Senator{" "}
            <Link href="/charles-schwertner-bitcoin">Schwertner</Link>&apos;s
            SB 778 was the opening draft - filed January
            14, 2025, appropriation included - and died the procedural death
            of a bill superseded by its own successor, SB 21.<C n={1} />
            <C n={13} /> Representative Capriglione&apos;s HB 1598 was the
            custody-first alternative: Bitcoin inside the state treasury, a
            minimum five-year hold, and a donation channel for citizens and
            governmental entities - discipline SB 21&apos;s investment-first
            design does not impose.<C n={2} /><C n={7} /> And HB 4258, from
            Democratic Representatives Reynolds and Plesa, was the biggest
            number of the session: comptroller investment authority reported
            around $250 million plus up to $10 million for each municipality
            or county.<C n={3} /> The enacted reserve&apos;s full story lives
            on{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the Texas Strategic Bitcoin Reserve reference
            </Link>
            ; the dead designs are its unbuilt wings - the hold period, the
            donation channel, the local-government tier - each one a drafted,
            filed, and precedented idea waiting for a session that wants it.
          </p>

          <DeadReserveDesignsFigure />

          <h2>What was cut from SB 21 itself?</h2>
          {cutFromSB21.map((c) => (
            <p key={c.what}>
              <strong>{c.what}.</strong> {c.detail}{" "}
              {c.sourceIds.map((n) => (
                <C key={n} n={n} />
              ))}
            </p>
          ))}
          <p>
            Both cuts read as the Legislature buying certainty: a smaller,
            unstaked, plain-custody fund was the version that could pass with
            bipartisan cover - and did, told in{" "}
            <Link href="/dan-patrick-bitcoin">Dan Patrick and Bitcoin</Link>.
            The trimmed $11 million and the staking authority now sit in the
            same place as the dead bills: on the table for the 90th.
          </p>

          <DeadCutsFigure />

          <h2>What does the dead file predict for the 90th Legislature?</h2>
          <p>
            The 90th convenes in January 2027, and the file above is its
            draft agenda. Kiosk regulation returns with two one-chamber
            majorities and a $57-million-a-year reason.<C n={10} /> HJR 175
            returns five votes from a ballot line. The reserve - by then
            expected to hold directly custodied Bitcoin, now in the hands of a
            comptroller who proposed a state Bitcoin reserve back in 2022,
            told in{" "}
            <Link href="/don-huffines-bitcoin">
              Don Huffines and Bitcoin
            </Link>{" "}
            - invites exactly the expansions the dead designs drafted: a
            larger appropriation, a donation channel, local-government
            authority. And the grid-cost question that shadowed the session
            has since moved to the executive branch, chronicled in{" "}
            <Link href="/greg-abbott-bitcoin">Greg Abbott and Bitcoin</Link>.
            Nothing in the dead file was voted down. In Texas, that is not an
            ending - it is a queue.
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
            Primary record first: every bill status verified against its
            history page on capitol.texas.gov (Texas Legislature Online),
            then the Statesman and the Texas Tribune, then trade press. This
            is a research and reference article, not financial, investment,
            or legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {deadBillSources.map((s) => (
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
