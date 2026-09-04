import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  CUSTODY_LAST_VERIFIED,
  custodyMandate,
  custodySources,
  custodyStatus,
  custodyTimeline,
} from "@/lib/custody";

const pageUrl = `${site.url}/who-holds-the-texas-bitcoin-reserve`;

export const metadata: Metadata = {
  title: "Who Holds the Texas Bitcoin Reserve?",
  description:
    "The custody watch on the Texas Strategic Bitcoin Reserve — who actually holds the state's $10M, the custodian search, the 60-day ETF-to-keys conversion, and what Texas owns vs. what it controls. Updated against the primary record.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Who Holds the Texas Bitcoin Reserve?",
    description:
      "The living record of the reserve's custody: RFP 908-26-1778WS, the unnamed custodian, the 60-day conversion clock, and the coming public holdings website.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Who is the custodian of the Texas Bitcoin reserve?",
    a: "No custodian has been named yet. As of September 1, 2026, the Texas Comptroller's custody-and-liquidity RFP (908-26-1778WS) shows no award, and the late-August 2026 target for contract execution has passed. Until a contract executes, the reserve's $10 million sits in the iShares Bitcoin Trust, where BlackRock's ETF custodian holds the underlying coin.",
  },
  {
    q: "Does Texas hold its own Bitcoin keys?",
    a: "Not yet. Texas currently holds $10 million of Bitcoin exposure through a spot ETF, meaning the underlying coin is held by the fund's custodian, not the state. The custody contract now in procurement requires the winning firm to hold Bitcoin directly in the name of the State of Texas, converting the ETF position within 60 days of execution.",
  },
  {
    q: "Who legally controls the Texas Strategic Bitcoin Reserve?",
    a: "The Texas Comptroller of Public Accounts manages the reserve as a dedicated fund (Fund 1018) held outside the state treasury, guided by a five-member advisory committee the Comptroller chairs. Since August 1, 2026 that Comptroller is Don Huffines, appointed after Kelly Hancock resigned. The custody procurement runs through the Comptroller on behalf of the Texas Treasury Safekeeping Trust Company, the state's investment arm.",
  },
  {
    q: "How will the public see what the reserve holds?",
    a: "Two ways. The custody RFP requires the winning firm to build a dedicated public website displaying the reserve's holdings and valuations, and Senate Bill 21 separately requires the Comptroller to publish biennial reports on the fund's value and administration. Neither the website nor the first report exists yet.",
  },
  {
    q: "When does the Texas reserve convert its ETF to real Bitcoin?",
    a: "Within 60 days of the custody contract executing. The procurement targeted execution for late August 2026, so on that schedule the $10 million iShares Bitcoin Trust position would convert to directly held Bitcoin by roughly late October 2026. No award had been posted as of September 1, 2026, so the clock has not started.",
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

// custody-figs:start
// Five figures, one per chapter, generated from the custody dataset and the
// dates the page cites (Sept 2026). Server-rendered SVG, no client JS.
function CustodyChainFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 330" role="img" aria-label="The chain of custody: how many links stand between Texas and its Bitcoin, now and after the contract">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE CHAIN OF CUSTODY · HOW MANY HANDS STAND BETWEEN TEXAS AND ITS BITCOIN</text>
<text x="28" y="56" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">NOW · A CLAIM</text>
<text x="28" y="72" fontSize="10.5" fill="var(--muted-2)">four hands, and the state holds shares</text>
<rect x="28" y="86" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="103.0" y="108" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Texas</text>
<text x="103.0" y="124" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Fund 1018, outside the treasury</text>
<line x1="182" x2="200" y1="115.0" y2="115.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M196,111.0 L200,115.0 L196,119.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="204" y="86" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="var(--muted)" strokeWidth="1.25"/>
<text x="279.0" y="108" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">ETF shares</text>
<text x="279.0" y="124" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">iShares Bitcoin Trust</text>
<line x1="358" x2="376" y1="115.0" y2="115.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M372,111.0 L376,115.0 L372,119.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="380" y="86" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="var(--muted)" strokeWidth="1.25"/>
<text x="455.0" y="108" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">The fund</text>
<text x="455.0" y="124" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">BlackRock&apos;s structure and rules</text>
<line x1="534" x2="552" y1="115.0" y2="115.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M548,111.0 L552,115.0 L548,119.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="556" y="86" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="var(--muted-2)" strokeWidth="1.25"/>
<text x="631.0" y="108" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Its custodian</text>
<text x="631.0" y="124" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">holds the coin</text>
<text x="28" y="186" fontSize="11" fontWeight="600" letterSpacing="2" fill="#6f9e6a">AFTER THE CONTRACT · THE KEYS</text>
<text x="28" y="202" fontSize="10.5" fill="var(--muted-2)">one contractor, coin in the state&apos;s own name</text>
<rect x="28" y="216" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="103.0" y="238" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Texas</text>
<text x="103.0" y="254" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Fund 1018, outside the treasury</text>
<line x1="182" x2="200" y1="245.0" y2="245.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M196,241.0 L200,245.0 L196,249.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="204" y="216" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="#6f9e6a" strokeWidth="1.25"/>
<text x="279.0" y="238" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">The custodian</text>
<text x="279.0" y="254" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">under RFP 908-26-1778WS</text>
<line x1="358" x2="376" y1="245.0" y2="245.0" stroke="var(--muted-2)" strokeWidth="1.5"/>
<path d="M372,241.0 L376,245.0 L372,249.0" fill="none" stroke="var(--muted-2)" strokeWidth="1.5"/>
<rect x="380" y="216" width="150" height="58" rx="8" fill="var(--surface-2)" stroke="#6f9e6a" strokeWidth="1.25"/>
<text x="455.0" y="238" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Bitcoin</text>
<text x="455.0" y="254" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">in the State of Texas&apos;s name</text>
<text x="405.0" y="320" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">an ETF share is real exposure, governed by the fund; direct custody is ownership, governed by the contract · schematic</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The chain of custody. Today the state holds ETF shares: its Bitcoin exposure runs through the fund, the fund&apos;s rules, and the fund&apos;s custodian. After the contract, one contractor holds coin in the name of the State of Texas. The procurement this page tracks exists to remove the links in between.
      </figcaption>
    </figure>
  );
}

function CustodyMandateFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The custodian's mandate: six duties from the RFP scope">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE MANDATE · WHAT THE WINNING FIRM IS ON THE HOOK FOR, FROM THE RFP SCOPE</text>
<rect x="28" y="50" width="246" height="104" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="42" y="72" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">01</text>
<text x="42" y="94" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Hold the coin in the name of</text>
<text x="42" y="110" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">the State of Texas</text>
<text x="42" y="126" fontSize="9.5" fill="var(--muted-2)">Custody the reserve&apos;s Bitcoin directly in</text>
<text x="42" y="139" fontSize="9.5" fill="var(--muted-2)">the state&apos;s name – not as a fund share,…</text>
<rect x="286" y="50" width="246" height="104" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="300" y="72" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">02</text>
<text x="300" y="94" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Retire the ETF placeholder</text>
<text x="300" y="110" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">within 60 days</text>
<text x="300" y="126" fontSize="9.5" fill="var(--muted-2)">Transition the full $10 million IBIT</text>
<text x="300" y="139" fontSize="9.5" fill="var(--muted-2)">position into directly custodied Bitcoin…</text>
<rect x="544" y="50" width="246" height="104" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="558" y="72" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">03</text>
<text x="558" y="94" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Run cold storage with layered</text>
<text x="558" y="110" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">controls</text>
<text x="558" y="126" fontSize="9.5" fill="var(--muted-2)">The RFP&apos;s security scope names cold</text>
<text x="558" y="139" fontSize="9.5" fill="var(--muted-2)">storage, encryption, and multifactor…</text>
<rect x="28" y="166" width="246" height="104" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="42" y="188" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">04</text>
<text x="42" y="210" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Provide liquidity both ways</text>
<text x="42" y="226" fontSize="9.5" fill="var(--muted-2)">Support purchases and sales for the</text>
<text x="42" y="239" fontSize="9.5" fill="var(--muted-2)">reserve – SB 21 lets the fund grow by…</text>
<rect x="286" y="166" width="246" height="104" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="300" y="188" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">05</text>
<text x="300" y="210" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Build the public transparency</text>
<text x="300" y="226" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">website</text>
<text x="300" y="242" fontSize="9.5" fill="var(--muted-2)">Stand up a dedicated public-facing site</text>
<text x="300" y="255" fontSize="9.5" fill="var(--muted-2)">displaying the reserve&apos;s Bitcoin and…</text>
<rect x="544" y="166" width="246" height="104" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="558" y="188" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">06</text>
<text x="558" y="210" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Support legislative reporting</text>
<text x="558" y="226" fontSize="9.5" fill="var(--muted-2)">Provide standard and custom reporting and</text>
<text x="558" y="239" fontSize="9.5" fill="var(--muted-2)">support legislative inquiries – the…</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">RFP 908-26-1778WS scope, as summarized in the dataset this page renders · six duties, one contractor</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The mandate. Six duties from the RFP&apos;s scope: hold the coin in the state&apos;s own name, retire the ETF placeholder within 60 days, run cold storage with layered controls, provide liquidity both ways, build the public transparency website, and support the statute&apos;s reporting. Vaulting keys is the smallest part of it.
      </figcaption>
    </figure>
  );
}

function CustodyWindowFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 260" role="img" aria-label="The procurement window, day by day: posted May 7, closed July 10, late-August target, and where September 1 falls">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE WINDOW, DAY BY DAY · RFP 908-26-1778WS AGAINST ITS OWN CALENDAR</text>
<rect x="86.5" y="106" width="219.2" height="24" rx="4" fill="var(--star)" fillOpacity="0.22"/>
<rect x="435.8" y="106" width="47.9" height="24" rx="4" fill="var(--accent)" fillOpacity="0.28"/>
<rect x="483.8" y="106" width="3.4" height="24" fill="#c98a4e" fillOpacity="0.35"/>
<line x1="66" x2="744" y1="118" y2="118" stroke="var(--muted-2)" strokeWidth="1.5"/>
<line x1="66.0" x2="66.0" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="66.0" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">May</text>
<line x1="172.2" x2="172.2" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="172.2" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Jun</text>
<line x1="274.9" x2="274.9" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="274.9" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Jul</text>
<line x1="381.0" x2="381.0" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="381.0" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Aug</text>
<line x1="487.2" x2="487.2" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="487.2" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Sep</text>
<line x1="589.9" x2="589.9" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="589.9" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Oct</text>
<line x1="696.1" x2="696.1" y1="114" y2="122" stroke="var(--muted-2)"/>
<text x="696.1" y="158" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">Nov</text>
<line x1="86.5" x2="86.5" y1="104" y2="96" stroke="var(--muted-2)"/>
<circle cx="86.5" cy="118" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="86.5" y="54" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Posted</text>
<text x="86.5" y="68" fontSize="10" textAnchor="middle" fill="var(--muted-2)">May 7</text>
<line x1="220.1" x2="220.1" y1="132" y2="140" stroke="var(--muted-2)"/>
<circle cx="220.1" cy="118" r="5" fill="var(--muted-2)" stroke="var(--surface)" strokeWidth="2"/>
<text x="220.1" y="176" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Original deadline</text>
<text x="220.1" y="190" fontSize="10" textAnchor="middle" fill="var(--muted-2)">June 15 · extended</text>
<line x1="305.7" x2="305.7" y1="104" y2="96" stroke="var(--muted-2)"/>
<circle cx="305.7" cy="118" r="5" fill="var(--star)" stroke="var(--surface)" strokeWidth="2"/>
<text x="305.7" y="54" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Proposals close</text>
<text x="305.7" y="68" fontSize="10" textAnchor="middle" fill="var(--muted-2)">July 10 · 2:00 p.m.</text>
<line x1="381.0" x2="381.0" y1="132" y2="200" stroke="var(--muted-2)"/>
<circle cx="381.0" cy="118" r="5" fill="var(--accent-soft)" stroke="var(--surface)" strokeWidth="2"/>
<text x="381.0" y="212" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Huffines sworn in</text>
<text x="381.0" y="226" fontSize="10" textAnchor="middle" fill="var(--muted-2)">Aug 1 · the desk changes</text>
<line x1="459.8" x2="459.8" y1="104" y2="96" stroke="var(--muted-2)"/>
<circle cx="459.8" cy="118" r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="2"/>
<text x="459.8" y="54" fontSize="12" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Target: execution</text>
<text x="459.8" y="68" fontSize="10" textAnchor="middle" fill="var(--muted-2)">late August</text>
<line x1="487.2" x2="487.2" y1="132" y2="140" stroke="var(--muted-2)"/>
<circle cx="487.2" cy="118" r="5" fill="#c98a4e" stroke="var(--surface)" strokeWidth="2"/>
<text x="495.2" y="176" fontSize="12" fontWeight="600" textAnchor="start" fill="var(--foreground)" fontFamily="var(--font-display)">Today</text>
<text x="495.2" y="190" fontSize="10" textAnchor="start" fill="var(--muted-2)">Sept 1 · 53 days since close</text>
<line x1="487.2" x2="744" y1="118" y2="118" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4"/>
<text x="740.0" y="96" fontSize="10.5" textAnchor="end" fill="var(--muted)">once signed: +60 days to convert,</text>
<text x="740.0" y="110" fontSize="10.5" textAnchor="end" fill="var(--muted)">and the public website goes live</text>
<text x="405.0" y="250" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas SmartBuy ESBD; Crypto Briefing on the target · to scale by day · the red band is the overdue window</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The window, day by day. The solicitation was open nine weeks, closed July 10 after a deadline extension, and targeted execution for late August. The red band is the overdue window; the dashed tail is what starts the day the award posts: a 60-day conversion clock and the public holdings website.
      </figcaption>
    </figure>
  );
}

function CustodyWatchersFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 320" role="img" aria-label="Who decides and who watches: the Comptroller, the advisory committee, and the statute">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHO DECIDES, WHO WATCHES · THE SIGNATURE, THE BENCH, AND THE STATUTE</text>
<rect x="285" y="80" width="240" height="84" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.5"/>
<text x="405" y="102" fontSize="10.5" fontWeight="600" letterSpacing="2" textAnchor="middle" fill="var(--accent)">DECIDES · THE COMPTROLLER</text>
<text x="405" y="124" fontSize="14" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Don Huffines · since Aug 1, 2026</text>
<text x="405" y="142" fontSize="10" textAnchor="middle" fill="var(--muted-2)">signs the award · SB 21 § 403.703 custody · Hancock opened the search</text>
<text x="405" y="156" fontSize="10" textAnchor="middle" fill="var(--muted-2)">on behalf of the Texas Treasury Safekeeping Trust Company</text>
<rect x="28" y="190" width="370" height="106" rx="10" fill="var(--surface-2)" stroke="var(--star)"/>
<text x="42" y="212" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="var(--star)">WATCHES · THE ADVISORY COMMITTEE (5)</text>
<text x="42" y="234" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">the Comptroller</tspan><tspan fill="var(--muted-2)"> · by office</tspan></text>
<text x="42" y="253" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Laurie Dotter</tspan><tspan fill="var(--muted-2)"> · investment</tspan></text>
<text x="42" y="272" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Jamie McAvity</tspan><tspan fill="var(--muted-2)"> · Cormint · mining</tspan></text>
<text x="226" y="234" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Carla Reyes</tspan><tspan fill="var(--muted-2)"> · SMU · law</tspan></text>
<text x="226" y="253" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Gary Vecchiarelli</tspan><tspan fill="var(--muted-2)"> · CleanSpark</tspan></text>
<rect x="412" y="190" width="370" height="106" rx="10" fill="var(--surface-2)" stroke="#6f9e6a"/>
<text x="426" y="212" fontSize="10.5" fontWeight="600" letterSpacing="2" fill="#6f9e6a">WATCHES · THE STATUTE AND THE CONTRACT</text>
<text x="426" y="234" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Biennial report</tspan><tspan fill="var(--muted-2)"> · SB 21 § 403.708 · first due Dec 31, 2026</tspan></text>
<text x="426" y="253" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Fund 1018</tspan><tspan fill="var(--muted-2)"> · its own line in the manual of accounts</tspan></text>
<text x="426" y="272" fontSize="10.5"><tspan fill="var(--foreground)" fontWeight="600">Public holdings website</tspan><tspan fill="var(--muted-2)"> · required of the custodian by the RFP</tspan></text>
<line x1="345" x2="213" y1="164" y2="190" stroke="var(--muted-2)"/>
<line x1="465" x2="597" y1="164" y2="190" stroke="var(--muted-2)"/>
<text x="405.0" y="310" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SB 21 enrolled text; Comptroller release of May 28, 2026; RFP scope · the committee advises, the statute compels, the contract publishes</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        Who decides, who watches. The Comptroller signs the award and holds the reserve by statute; a five-seat committee that counts custody standards in its portfolio advises; and three fixed watchers sit outside anyone&apos;s discretion: the biennial report, the fund&apos;s own line in the accounts, and the public website the contract requires.
      </figcaption>
    </figure>
  );
}

function CustodyTradeFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The trade: what Texas gives up and takes on by moving from an ETF to direct custody">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE TRADE · WHAT CHANGES HANDS WHEN A CLAIM BECOMES THE KEYS</text>
<rect x="28" y="52" width="370" height="200" rx="10" fill="var(--surface-2)" stroke="var(--muted)" strokeWidth="1.25"/>
<text x="44" y="76" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--muted)">IN THE ETF · BLACKROCK&apos;S PROBLEM</text>
<circle cx="50" cy="100" r="3.5" fill="var(--muted)"/>
<text x="62" y="104" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Key management</text>
<text x="62" y="117" fontSize="10" fill="var(--muted-2)">the fund&apos;s custodian holds and secures the coin</text>
<circle cx="50" cy="136" r="3.5" fill="var(--muted)"/>
<text x="62" y="140" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Security engineering</text>
<text x="62" y="153" fontSize="10" fill="var(--muted-2)">the fund&apos;s controls, the fund&apos;s audits</text>
<circle cx="50" cy="172" r="3.5" fill="var(--muted)"/>
<text x="62" y="176" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Operational failure</text>
<text x="62" y="189" fontSize="10" fill="var(--muted-2)">backstopped by a $10 trillion balance sheet</text>
<text x="44" y="240" fontSize="10.5" fill="var(--muted)">Texas owns shares. Someone else owns the risk.</text>
<rect x="412" y="52" width="370" height="200" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="428" y="76" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">AFTER CONVERSION · TEXAS&apos;S PROBLEM</text>
<circle cx="434" cy="100" r="3.5" fill="var(--accent)"/>
<text x="446" y="104" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Cold storage, layered controls</text>
<text x="446" y="117" fontSize="10" fill="var(--muted-2)">encryption, multifactor authentication</text>
<circle cx="434" cy="136" r="3.5" fill="var(--accent)"/>
<text x="446" y="140" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Reporting and a public window</text>
<text x="446" y="153" fontSize="10" fill="var(--muted-2)">the website, the biennial report</text>
<circle cx="434" cy="172" r="3.5" fill="var(--accent)"/>
<text x="446" y="176" fontSize="12" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A contractor the state must supervise</text>
<text x="446" y="189" fontSize="10" fill="var(--muted-2)">and a committee seated to watch it</text>
<text x="428" y="240" fontSize="10.5" fill="var(--muted)">Texas owns the coin. Texas owns the risk – by design.</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">RFP 908-26-1778WS scope; SB 21 · direct custody is the stronger form of ownership, and the stronger form of responsibility</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The trade. In the ETF, keys, security, and operational failure are BlackRock&apos;s problems, backstopped by a balance sheet in the trillions. After conversion they are Texas&apos;s, outsourced to a contractor the state supervises under the controls the RFP spells out. The stronger ownership carries the stronger responsibility.
      </figcaption>
    </figure>
  );
}
// custody-figs:end
export default function CustodyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Who Holds the Texas Bitcoin Reserve?",
    description:
      "The custody watch on the Texas Strategic Bitcoin Reserve — the custodian search, the 60-day ETF-to-keys conversion, and what Texas owns vs. what it controls.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
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
        item: `${site.url}/texas-strategic-bitcoin-reserve`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Who Holds the Texas Bitcoin Reserve?",
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
          /{" "}
          <Link
            href="/texas-strategic-bitcoin-reserve"
            className="hover:text-accent-soft"
          >
            Texas Strategic Bitcoin Reserve
          </Link>{" "}
          / Custody
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Living record · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Who holds the Texas Bitcoin reserve?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The operational sequel to{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              the reserve explainer
            </Link>
            : not what the law built, but whose hands the coin sits in – the
            custodian search, the conversion clock, and the difference between
            what Texas owns and what Texas controls. Updated as the record
            moves.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 30, 2026 · Updated{" "}
            {CUSTODY_LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            No one holds Bitcoin for Texas yet – not directly. The Texas
            Strategic Bitcoin Reserve&apos;s $10 million sits in the iShares
            Bitcoin Trust, a spot ETF whose custodian holds the underlying
            coin. The Texas Comptroller&apos;s custody RFP closed July 10,
            2026, with contract execution targeted for late August 2026; the
            winning firm, still unannounced, must convert the ETF position to
            Bitcoin held in the name of the State of Texas within 60 days.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              As of August 30, 2026, no custodian for the Texas Strategic
              Bitcoin Reserve has been announced and no award appears on the
              state&apos;s procurement site.<C n={1} />
            </li>
            <li>
              RFP 908-26-1778WS – custody and liquidity services for the
              reserve – was posted May 7, 2026, and its response deadline,
              first set for June 15, closed July 10, 2026.<C n={1} />
            </li>
            <li>
              The procurement runs through the Comptroller of Public Accounts
              on behalf of the Texas Treasury Safekeeping Trust Company, the
              state&apos;s investment arm.<C n={1} /><C n={5} />
            </li>
            <li>
              The winning custodian must convert the reserve&apos;s $10
              million iShares Bitcoin Trust position into directly held
              Bitcoin within 60 days of contract execution.<C n={3} />
            </li>
            <li>
              The custodian must hold the Bitcoin in the name of the State of
              Texas and build a public website displaying the reserve&apos;s
              holdings and valuations.<C n={3} /><C n={5} />
            </li>
            <li>
              Contract execution was targeted for late August 2026 – the
              window open as this page is written.<C n={4} />
            </li>
          </ul>
        </div>

        {/* The custody watch — who holds what, right now */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              The custody watch
            </h2>
            <span className="text-xs text-muted-2">
              As of {CUSTODY_LAST_VERIFIED}
            </span>
          </div>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {custodyStatus.map((row) => (
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

        {/* Procurement timeline */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            From placeholder to keys
          </h2>
          <ol className="mt-5 space-y-4">
            {custodyTimeline.map((e) => (
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
                    {e.done ? "Done" : "Watching"}
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
          <h2>What does Texas actually own today?</h2>
          <p>
            A claim, not coin. The reserve&apos;s full{" "}
            <strong>$10 million appropriation</strong> is deployed into the{" "}
            <strong>iShares Bitcoin Trust</strong> – a position begun with a
            roughly $5 million purchase on November 20, 2025 and described by
            the Comptroller&apos;s office from day one as a placeholder.
            <C n={7} /><C n={4} /> An ETF share is real Bitcoin exposure, but
            the underlying coin sits with the fund&apos;s custodian, in the
            fund&apos;s structure, governed by the fund&apos;s rules. The
            state owns shares the way any brokerage account does. The entire
            point of the procurement this page tracks is to close that gap –
            to move from owning a claim on Bitcoin to controlling Bitcoin held
            in the name of the State of Texas.<C n={3} />
          </p>

          <CustodyChainFigure />

          <h2>Who is Texas hiring, and to do what?</h2>
          <p>
            A single <strong>custody-and-liquidity partner</strong>, selected
            through <strong>RFP 908-26-1778WS</strong> – posted to the Texas
            SmartBuy ESBD on May 7, 2026 by the Comptroller of Public
            Accounts on behalf of the{" "}
            <strong>Texas Treasury Safekeeping Trust Company</strong>, the
            special-purpose entity that invests state funds.<C n={1} /><C n={5} />{" "}
            The mandate is broader than vaulting keys. The winner acquires,
            holds, manages, and reports the state&apos;s Bitcoin; runs the
            trading desk for purchases and sales; and stands up the public
            window into the fund. The full scope:
          </p>
          <ul>
            {custodyMandate.map((m) => (
              <li key={m.title}>
                <strong>{m.title}.</strong> {m.detail}{" "}
                {m.sourceIds.map((n) => (
                  <C key={n} n={n} />
                ))}
              </li>
            ))}
          </ul>

          <CustodyMandateFigure />

          <h2>Why has no custodian been announced yet?</h2>
          <p>
            The procurement is simply still inside its own window – with the
            caveat that the window is closing. Proposals came due{" "}
            <strong>July 10, 2026</strong> (the deadline was extended from the
            original June 15), and the state targeted{" "}
            <strong>contract execution for late August 2026</strong>.
            <C n={1} /><C n={4} /> As of September 1, the target window has
            closed: the ESBD lists the solicitation as closed with no award
            posted, and the
            Comptroller&apos;s office has issued no custodian announcement
            since the May 28 release that opened the search.<C n={1} /><C n={2} />{" "}
            None of that is a red flag – state procurement routinely runs to
            the end of its target window and past it – but it means the most
            important fact about the reserve&apos;s next chapter is still
            blank. When the award posts, it becomes the first entry this page
            adds.
          </p>

          <CustodyWindowFigure />

          <h2>Who decides, and who watches the decision?</h2>
          <p>
            The <strong>Comptroller</strong> runs the fund and the
            procurement – and the Comptroller changed mid-procurement. Acting
            Comptroller <Link href="/kelly-hancock-bitcoin">Kelly Hancock</Link>{" "}
            opened the custody search on May 28, 2026 – the same day he
            completed the reserve&apos;s five-member{" "}
            <strong>advisory committee</strong>, which counts custody
            standards squarely in its portfolio.<C n={2} /> The committee
            pairs institutional investment experience (Laurie Dotter) with
            people who mine, teach, and account for Bitcoin for a living
            (Cormint&apos;s Jamie McAvity, SMU law professor Carla Reyes,
            CleanSpark&apos;s Gary Vecchiarelli).<C n={2} /> Hancock resigned
            effective July 31, 2026, and{" "}
            <Link href="/don-huffines-bitcoin">Don Huffines</Link> – who put a
            state Bitcoin reserve in his 2022 campaign platform for governor –
            was sworn in on August 1; under SB 21 custody of the reserve and
            the comptroller&apos;s committee seat pass with the office, so the
            award is his to sign.<C n={10} /><C n={11} /><C n={12} /> Statute
            adds the second layer of watching: SB 21 requires{" "}
            <strong>biennial public reports</strong> on the fund&apos;s value
            and administration, and the reserve lives as its own line – Fund
            1018 – in the Comptroller&apos;s manual of accounts.<C n={6} /><C n={9} /><C n={8} />
          </p>

          <CustodyWatchersFigure />

          <h2>What happens after the contract executes?</h2>
          <p>
            Two clocks start. The first is the{" "}
            <strong>60-day conversion window</strong>: the custodian must
            retire the $10 million IBIT placeholder for directly held Bitcoin
            within 60 days of execution – on the late-August target, that
            would have landed the conversion by roughly late October 2026, and
            every week without an award pushes it back.<C n={3} /> The
            second is transparency: the RFP requires a{" "}
            <strong>dedicated public website</strong> showing the
            reserve&apos;s holdings and valuations, which would make Texas the
            first state whose Bitcoin position is publicly visible as a matter
            of contract, not just biennial report.<C n={3} /><C n={5} /> And
            behind both sits the 90th Legislature, convening January 2027,
            which will decide whether $10 million was the seed or the size –
            the appropriations fight previewed in{" "}
            <Link href="/texas-bitcoin-bills-that-died">
              the bills that died
            </Link>
            .
          </p>

          <h2>The honest counterweight</h2>
          <p>
            Direct custody is the stronger form of ownership, and it carries
            the stronger form of responsibility. In the ETF, key management,
            security engineering, and operational failure are BlackRock&apos;s
            problems; after conversion, they are Texas&apos;s problems,
            outsourced to a contractor the state must supervise. That is
            precisely why the RFP reads the way it does – cold storage,
            encryption, multifactor authentication, reporting, a named public
            window<C n={5} /> – and why the committee seated to watch it
            includes people who handle keys professionally. The state is not
            underestimating the job. But it is worth saying plainly: the move
            from claim to keys trades away a custodian of last resort with a
            $10 trillion balance sheet, and the record on this page is how
            Texans will be able to check that the trade is being managed well.
          </p>

          <CustodyTradeFigure />
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
            Primary record first: the ESBD solicitation and the Texas
            Comptroller, then trade press and legal analysis. This is a
            research and reference article, not financial, investment, or
            legal advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {custodySources.map((s) => (
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
