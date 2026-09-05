import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

const pageUrl = `${site.url}/what-texas-law-says-about-bitcoin`;

// The metadata carries the high-volume query ("is bitcoin legal in Texas");
// the H1 carries the brand register. That split is deliberate — see
// CONTENT-TEMPLATE and the headline-register editorial rule.
export const metadata: Metadata = {
  title: "What Texas Law Actually Says About Bitcoin",
  description:
    "Is Bitcoin legal in Texas? Yes — to buy, sell, hold, and mine, with no state license to sell your own coin. What the statutes and the § 1960 seam say.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "What Texas Law Actually Says About Bitcoin",
    description:
      "The legal status of Bitcoin in Texas, stated from the primary record: the 2014 'not money' memo, licensing, custody, legal tender, mining, and the federal § 1960 seam.",
    url: pageUrl,
  },
};

// FAQ — rendered on-page and mirrored 1:1 in FAQPage JSON-LD (never schema-only).
const faqs = [
  {
    q: "Is Bitcoin legal in Texas?",
    a: "Yes. Bitcoin is legal to buy, sell, hold, and mine in Texas, and always has been. Supervisory Memorandum 1037, issued by the Texas Department of Banking on April 3, 2014, holds that Bitcoin is not 'money' under the Texas Money Services Act, so selling your own bitcoin does not by itself require a state license.",
  },
  {
    q: "Do I need a license to sell my own bitcoin in Texas?",
    a: "No state license is required to sell bitcoin you own. Under Supervisory Memorandum 1037, exchanging your own cryptocurrency — or crypto for crypto — does not trigger Texas money-transmission licensing. Operating a business that transmits money for others is different: it requires federal FinCEN registration, and a § 1960 federal charge is what reaches people who skip it.",
  },
  {
    q: "Is Bitcoin legal tender in Texas?",
    a: "No. Texas recognizes gold and silver specie as legal tender under House Bill 1056 (signed June 22, 2025), while Senate Bill 21 (signed June 20, 2025) holds Bitcoin as a state reserve asset instead. Bitcoin is legal property you can freely transact with — it simply is not legal tender.",
  },
  {
    q: "Does Texas tax Bitcoin gains?",
    a: "Texas has no personal income tax, so the state levies no tax on capital gains from selling bitcoin. Federal capital-gains tax still applies. Miners consuming otherwise-flared natural gas near the wellhead also received a targeted severance-tax exemption under House Bill 591 (2023). This is research-grade information, not tax advice — confirm specifics with a licensed Texas CPA.",
  },
  {
    q: "Is Bitcoin mining legal in Texas?",
    a: "Yes — industrial and home mining are both legal, and state policy has actively courted miners: demand-response programs pay large flexible loads to curtail, and the one serious attempt to cap miners' participation (Senate Bill 1751 in 2023) died in a Texas House committee after passing the Senate.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#wl${n}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

const sources = [
  { id: 1, label: "Texas Department of Banking — Supervisory Memorandum 1037 (PDF)", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/New-Actions/sm1037.pdf" },
  { id: 2, label: "Texas Department of Banking — Virtual Currency Guidance", url: "https://www.dob.texas.gov/consumer-information/virtual-currency-guidance" },
  { id: 3, label: "Texas Department of Banking — Industry Notice 2021-03: Authority of Texas State-Chartered Banks to Provide Virtual Currency Custody Services (PDF)", url: "https://www.dob.texas.gov/sites/default/files/files/news/Industrynotices/in2021-03.pdf" },
  { id: 4, label: "Texas Legislature Online — HB 4474 (87R) bill history: signed June 15, 2021, effective September 1, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 5, label: "Texas Legislature Online — SB 895 (88R) bill history: signed May 29, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB895" },
  { id: 6, label: "Texas Legislature Online — HB 1666 (88R) bill history: signed June 9, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1666" },
  { id: 7, label: "Texas Legislature Online — HB 591 (88R) bill history: signed June 2, 2023, effective September 1, 2023", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB591" },
  { id: 8, label: "Texas Legislature Online — SB 21 (89R) bill history: signed June 20, 2025, effective immediately", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB21" },
  { id: 9, label: "Texas Legislature Online — HB 1056 (89R) bill history: signed June 22, 2025", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB1056" },
  { id: 10, label: "Texas Legislature Online — SB 1751 (88R) bill history", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=SB1751" },
  { id: 11, label: "18 U.S.C. § 1960 — Prohibition of unlicensed money transmitting businesses (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/18/1960" },
  { id: 12, label: "FinCEN — FIN-2013-G001: Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies", url: "https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering" },
  { id: 13, label: "Texas Comptroller of Public Accounts — Texas taxes overview (no personal income tax)", url: "https://comptroller.texas.gov/taxes/" },
];

// legal-figs:start
// Five figures, one per chapter, drawn from the documents the page cites
// (Sept 2026). Server-rendered SVG, no client JS. Research, not legal advice.
function LegalActivityFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 400" role="img" aria-label="What you can do with bitcoin in Texas, and which activities need a state license or federal registration">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT YOU CAN DO · WHICH ACTIVITIES NEED A TEXAS LICENSE, AND WHICH NEED FINCEN</text>
<text x="390" y="64" fontSize="10" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--star)">TEXAS LICENSE</text>
<text x="520" y="64" fontSize="10" fontWeight="600" letterSpacing="1.5" textAnchor="middle" fill="var(--accent)">FINCEN MSB</text>
<line x1="28" x2="782" y1="74" y2="74" stroke="var(--border)"/>
<text x="326" y="101" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Hold bitcoin</text>
<text x="390" y="101" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="390" y="114" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="520" y="101" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="520" y="114" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="600" y="101" fontSize="9.5" fill="var(--muted-2)"></text>
<line x1="28" x2="782" y1="126" y2="126" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="326" y="143" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Buy or sell your own coin</text>
<text x="390" y="143" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="390" y="156" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="520" y="143" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="520" y="156" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="600" y="143" fontSize="9.5" fill="var(--muted-2)">including peer-to-peer, for your own account</text>
<line x1="28" x2="782" y1="168" y2="168" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="326" y="185" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Exchange crypto for crypto</text>
<text x="390" y="185" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="390" y="198" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="520" y="185" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--accent)">it depends</text>
<text x="520" y="198" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">exchanger status</text>
<text x="600" y="185" fontSize="9.5" fill="var(--muted-2)">a Texas license attaches only when fiat moves</text>
<line x1="28" x2="782" y1="210" y2="210" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="326" y="227" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Mine, at any scale</text>
<text x="390" y="227" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="390" y="240" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="520" y="227" fontSize="14" fontWeight="600" textAnchor="middle" fill="#6f9e6a">✓</text>
<text x="520" y="240" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">no license</text>
<text x="600" y="227" fontSize="9.5" fill="var(--muted-2)">courted, not licensed – HB 591, ERCOT programs</text>
<line x1="28" x2="782" y1="252" y2="252" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="326" y="269" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Custody for others as a state bank</text>
<text x="390" y="269" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--star)">existing charter</text>
<text x="390" y="282" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)"></text>
<text x="520" y="269" fontSize="11" fontWeight="600" textAnchor="middle" fill="var(--accent)">bank rules</text>
<text x="520" y="282" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)"></text>
<text x="600" y="269" fontSize="9.5" fill="var(--muted-2)">Industry Notice 2021-03</text>
<line x1="28" x2="782" y1="294" y2="294" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="326" y="311" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Exchange or transmit for customers</text>
<text x="390" y="311" fontSize="14" fontWeight="600" textAnchor="middle" fill="#c98a4e">✕</text>
<text x="390" y="324" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">required</text>
<text x="520" y="311" fontSize="14" fontWeight="600" textAnchor="middle" fill="#c98a4e">✕</text>
<text x="520" y="324" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">required</text>
<text x="600" y="311" fontSize="9.5" fill="var(--muted-2)">sovereign currency moving for a third party</text>
<line x1="28" x2="782" y1="336" y2="336" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="326" y="353" fontSize="12" fontWeight="600" textAnchor="end" fill="var(--foreground)" fontFamily="var(--font-display)">Take dollars to deliver value elsewhere</text>
<text x="390" y="353" fontSize="14" fontWeight="600" textAnchor="middle" fill="#c98a4e">✕</text>
<text x="390" y="366" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">required</text>
<text x="520" y="353" fontSize="14" fontWeight="600" textAnchor="middle" fill="#c98a4e">✕</text>
<text x="520" y="366" fontSize="8.5" textAnchor="middle" fill="var(--muted-2)">required</text>
<text x="600" y="353" fontSize="9.5" fill="var(--muted-2)">money transmission in both maps</text>
<line x1="28" x2="782" y1="378" y2="378" stroke="var(--border)" strokeOpacity="0.6"/>
<text x="405.0" y="390" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">SM 1037 and DoB guidance; FinCEN FIN-2013-G001 · research, not legal advice · when in doubt, a Texas attorney</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        What you can do. Seven activities against the two questions that matter: does Texas require a money-transmission license, and does FinCEN require registration as a money services business. Holding, trading your own coin, and mining sit outside both; moving value for other people sits inside both. Research, not legal advice.
      </figcaption>
    </figure>
  );
}

function LegalTriggerFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="The Texas license trigger as three questions: does sovereign currency move, for a third party, in a transmitting capacity">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE TRIGGER · WHEN A TEXAS MONEY-TRANSMISSION LICENSE ATTACHES, IN THREE QUESTIONS</text>
<rect x="28" y="70" width="176" height="74" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="116.0" y="100" fontSize="11.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Does sovereign currency move?</text>
<text x="116.0" y="120" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">dollars, not bitcoin – SM 1037</text>
<line x1="208" x2="238" y1="107.0" y2="107.0" stroke="#c98a4e" strokeWidth="1.5"/>
<text x="224.0" y="101.0" fontSize="9.5" textAnchor="middle" fill="#c98a4e">yes</text>
<line x1="116.0" x2="116.0" y1="146" y2="184" stroke="#6f9e6a" strokeWidth="1.5"/>
<text x="124.0" y="170" fontSize="9.5" fill="#6f9e6a">no</text>
<rect x="244" y="70" width="176" height="74" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="332.0" y="100" fontSize="11.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">For someone else?</text>
<text x="332.0" y="120" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">a third party, not your own account</text>
<line x1="424" x2="454" y1="107.0" y2="107.0" stroke="#c98a4e" strokeWidth="1.5"/>
<text x="440.0" y="101.0" fontSize="9.5" textAnchor="middle" fill="#c98a4e">yes</text>
<line x1="332.0" x2="332.0" y1="146" y2="184" stroke="#6f9e6a" strokeWidth="1.5"/>
<text x="340.0" y="170" fontSize="9.5" fill="#6f9e6a">no</text>
<rect x="460" y="70" width="176" height="74" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="548.0" y="100" fontSize="11.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">In a transmitting capacity?</text>
<text x="548.0" y="120" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">value taken here, delivered there</text>
<line x1="640" x2="670" y1="107.0" y2="107.0" stroke="#c98a4e" strokeWidth="1.5"/>
<text x="656.0" y="101.0" fontSize="9.5" textAnchor="middle" fill="#c98a4e">yes</text>
<line x1="548.0" x2="548.0" y1="146" y2="184" stroke="#6f9e6a" strokeWidth="1.5"/>
<text x="556.0" y="170" fontSize="9.5" fill="#6f9e6a">no</text>
<rect x="28" y="190" width="608" height="44" rx="10" fill="#6f9e6a" fillOpacity="0.12" stroke="#6f9e6a"/>
<text x="332.0" y="208" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">No Texas license</text>
<text x="332.0" y="224" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">your coin, your account, crypto for crypto, mining</text>
<rect x="662" y="70" width="120" height="74" rx="10" fill="#c98a4e" fillOpacity="0.12" stroke="#c98a4e"/>
<text x="722.0" y="100" fontSize="12.5" fontWeight="600" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-display)">Texas license</text>
<text x="722.0" y="120" fontSize="9.5" textAnchor="middle" fill="var(--muted-2)">under SB 895 · since Sept 1, 2023</text>
<text x="405.0" y="268" fontSize="11.5" textAnchor="middle" fill="var(--muted)">SB 895 replaced the old statute on September 1, 2023 without moving the line the 2014 memo drew.</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Department of Banking, SM 1037 (2014; rev. 2019, 2025); SB 895 (88R) · schematic of the state test only</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The trigger, in three questions. A Texas money-transmission license attaches only when sovereign currency moves, for someone else, in a transmitting capacity. Answer no at any step and you are outside the Money Services Act; the 2023 modernization kept that line exactly where the 2014 memo drew it.
      </figcaption>
    </figure>
  );
}

function LegalFincenFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="FinCEN's three categories: users, exchangers, administrators, and which must register">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE FEDERAL MAP · FINCEN’S THREE CATEGORIES, AND THE STATUTE BEHIND THEM</text>
<rect x="28" y="52" width="246" height="150" rx="10" fill="var(--surface-2)" stroke="#6f9e6a" strokeWidth="1.25"/>
<text x="44" y="80" fontSize="16" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">User</text>
<text x="44" y="104" fontSize="10.5" fill="var(--muted-2)">obtains virtual currency to buy</text>
<text x="44" y="118" fontSize="10.5" fill="var(--muted-2)">goods or services, or holds it</text>
<text x="44" y="178" fontSize="11.5" fontWeight="600" fill="#6f9e6a">not an MSB</text>
<rect x="286" y="52" width="246" height="150" rx="10" fill="var(--surface-2)" stroke="#c98a4e" strokeWidth="1.25"/>
<text x="302" y="80" fontSize="16" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Exchanger</text>
<text x="302" y="104" fontSize="10.5" fill="var(--muted-2)">exchanges virtual currency for real</text>
<text x="302" y="118" fontSize="10.5" fill="var(--muted-2)">currency or other virtual currency,</text>
<text x="302" y="132" fontSize="10.5" fill="var(--muted-2)">as a business</text>
<text x="302" y="178" fontSize="11.5" fontWeight="600" fill="#c98a4e">an MSB · must register</text>
<rect x="544" y="52" width="246" height="150" rx="10" fill="var(--surface-2)" stroke="#c98a4e" strokeWidth="1.25"/>
<text x="560" y="80" fontSize="16" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Administrator</text>
<text x="560" y="104" fontSize="10.5" fill="var(--muted-2)">issues virtual currency and can</text>
<text x="560" y="118" fontSize="10.5" fill="var(--muted-2)">redeem it</text>
<text x="560" y="178" fontSize="11.5" fontWeight="600" fill="#c98a4e">an MSB · must register</text>
<rect x="28" y="216" width="754" height="44" rx="10" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="44" y="234" fontSize="11.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">18 U.S.C. § 1960 · operating an unlicensed money transmitting business</text>
<text x="44" y="250" fontSize="10" fill="var(--muted-2)">a registration offense – no fraud, no victim required · up to five years · no Texas memo can waive it</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">FinCEN FIN-2013-G001 (March 18, 2013); 18 U.S.C. § 1960 · the seam where people get hurt</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The federal map. FinCEN&apos;s 2013 guidance sorts everyone into users, exchangers, and administrators; the last two are money services businesses and must register, whatever Texas says. Operating unregistered is its own federal crime, a registration offense with no fraud required, which is how a peer-to-peer educator in Dallas came to be prosecuted.
      </figcaption>
    </figure>
  );
}

function LegalPlumbingFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 290" role="img" aria-label="The institutional plumbing of 2021 and 2023: custody, commercial code, proof of reserves, and whom each protects">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">THE PLUMBING · THREE LAYERS BUILT IN 2021 AND 2023, AND WHOM EACH ONE PROTECTS</text>
<rect x="28" y="52" width="246" height="190" rx="10" fill="var(--surface-2)" stroke="var(--star)" strokeWidth="1.25"/>
<text x="44" y="76" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--star)">CUSTODY</text>
<text x="44" y="98" fontSize="14" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Industry Notice 2021-03</text>
<text x="44" y="114" fontSize="10" fill="var(--muted-2)">June 10, 2021</text>
<text x="44" y="138" fontSize="10.5" fill="var(--muted)">state-chartered banks may hold</text>
<text x="44" y="152" fontSize="10.5" fill="var(--muted)">virtual currency under existing</text>
<text x="44" y="166" fontSize="10.5" fill="var(--muted)">Finance Code authority</text>
<text x="44" y="196" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--star)">PROTECTS</text>
<text x="44" y="212" fontSize="10.5" fill="var(--foreground)">the banks, and their depositors</text>
<rect x="286" y="52" width="246" height="190" rx="10" fill="var(--surface-2)" stroke="var(--accent-soft)" strokeWidth="1.25"/>
<text x="302" y="76" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent-soft)">COMMERCIAL CODE</text>
<text x="302" y="98" fontSize="14" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">HB 4474</text>
<text x="302" y="114" fontSize="10" fill="var(--muted-2)">signed June 15, 2021</text>
<text x="302" y="138" fontSize="10.5" fill="var(--muted)">virtual currency defined in the</text>
<text x="302" y="152" fontSize="10.5" fill="var(--muted)">Texas UCC; “control” established</text>
<text x="302" y="196" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent-soft)">PROTECTS</text>
<text x="302" y="212" fontSize="10.5" fill="var(--foreground)">lenders and purchasers – certainty</text>
<text x="302" y="225" fontSize="10.5" fill="var(--foreground)">no handshake could give</text>
<rect x="544" y="52" width="246" height="190" rx="10" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.25"/>
<text x="560" y="76" fontSize="10.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">PROOF OF RESERVES</text>
<text x="560" y="98" fontSize="14" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">HB 1666</text>
<text x="560" y="114" fontSize="10" fill="var(--muted-2)">signed June 9, 2023</text>
<text x="560" y="138" fontSize="10.5" fill="var(--muted)">providers segregate customer funds</text>
<text x="560" y="152" fontSize="10.5" fill="var(--muted)">and file auditor-attested reserve</text>
<text x="560" y="166" fontSize="10.5" fill="var(--muted)">reports</text>
<text x="560" y="196" fontSize="9.5" fontWeight="600" letterSpacing="1.5" fill="var(--accent)">PROTECTS</text>
<text x="560" y="212" fontSize="10.5" fill="var(--foreground)">customers – written months after FTX</text>
<text x="405.0" y="280" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">Texas Department of Banking; Texas Legislature Online · pro-Bitcoin and anti-trust-me, in three statutes</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The plumbing. Three layers built in two sessions, each protecting someone specific: bank custody for depositors, a commercial-code definition for lenders and purchasers, and proof-of-reserves reporting for customers. Pro-Bitcoin and anti-trust-me is the consistent Texas posture.
      </figcaption>
    </figure>
  );
}

function LegalStatusBoardFigure() {
  return (
    <figure className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-4 sm:p-6">
<svg className="h-auto w-full min-w-[640px]" viewBox="0 0 810 300" role="img" aria-label="What bitcoin is and is not under Texas law: a status board">
<text x="28" y="30" fontSize="11" fontWeight="600" letterSpacing="2" fill="var(--accent)">WHAT BITCOIN IS, AND ISN’T, UNDER TEXAS LAW · THE STATUS BOARD</text>
<rect x="28" y="50" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="70" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="69" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">“Money” under the Money Services Act</text>
<text x="766" y="69" fontSize="10" textAnchor="end" fill="var(--muted-2)">SM 1037, April 3, 2014</text>
<rect x="28" y="86" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="106" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="105" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Legal tender</text>
<text x="766" y="105" fontSize="10" textAnchor="end" fill="var(--muted-2)">that is gold and silver specie – HB 1056, 2025</text>
<rect x="28" y="122" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="142" fontSize="14" fontWeight="600" fill="#c98a4e">✕</text>
<text x="72" y="141" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Taxed by the state on gains</text>
<text x="766" y="141" fontSize="10" textAnchor="end" fill="var(--muted-2)">no personal income tax · federal capital gains still apply</text>
<rect x="28" y="158" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="178" fontSize="14" fontWeight="600" fill="#6f9e6a">✓</text>
<text x="72" y="177" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">Property with a commercial-code definition</text>
<text x="766" y="177" fontSize="10" textAnchor="end" fill="var(--muted-2)">HB 4474, in the Texas UCC since Sept 1, 2021</text>
<rect x="28" y="194" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="214" fontSize="14" fontWeight="600" fill="#6f9e6a">✓</text>
<text x="72" y="213" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A custodial asset at state banks</text>
<text x="766" y="213" fontSize="10" textAnchor="end" fill="var(--muted-2)">Industry Notice 2021-03</text>
<rect x="28" y="230" width="754" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border)"/>
<text x="48" y="250" fontSize="14" fontWeight="600" fill="#6f9e6a">✓</text>
<text x="72" y="249" fontSize="12.5" fontWeight="600" fill="var(--foreground)" fontFamily="var(--font-display)">A reserve asset of the state</text>
<text x="766" y="249" fontSize="10" textAnchor="end" fill="var(--muted-2)">SB 21 · the Strategic Bitcoin Reserve, June 20, 2025</text>
<text x="405.0" y="290" fontSize="10.5" textAnchor="middle" fill="var(--muted-2)">not money, not tender, not taxed by the state – and property, custodial, and a reserve asset · the arguably stronger position</text>
</svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-2">
        The status board. Under Texas law bitcoin is not money for licensing purposes, not legal tender, and not taxed by the state; it is property with a commercial-code definition, a custodial asset at state banks, and a reserve asset of the state itself. Not tender, but arguably the stronger position.
      </figcaption>
    </figure>
  );
}
// legal-figs:end
export default function TexasLawPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Texas Law Actually Says About Bitcoin",
    description:
      "The legal status of Bitcoin in Texas from the primary record: state licensing, custody, legal tender, taxes, mining, and the federal § 1960 seam.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-07-25",
    dateModified: "2026-07-25",
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
        name: "What Texas Law Actually Says About Bitcoin",
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
          / What Texas Law Actually Says About Bitcoin
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            What Texas Law Actually Says About Bitcoin
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Not the paraphrase, not the panic — the statutes, memos, and
            notices themselves, read plainly. One page for the question every
            Texan bitcoiner eventually asks, answered from the primary record
            and nothing else.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published July 25, 2026 · Updated July 25, 2026
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Bitcoin is legal to buy, sell, hold, and mine in Texas. Selling
            your own bitcoin requires no state license — the Texas Department
            of Banking settled that in 2014 by holding that Bitcoin is not
            &ldquo;money&rdquo; under the Money Services Act. The state has
            since written virtual currency into its commercial code, let banks
            custody it, required exchanges to prove reserves, and put Bitcoin
            in a state strategic reserve. The live risk sits on the federal
            side: transmitting money <em>for others</em> without FinCEN
            registration is a federal crime under 18 U.S.C. § 1960.
          </p>
        </div>

        {/* Key facts — one claim per sentence, each dated and sourced */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Supervisory Memorandum 1037 (April 3, 2014) holds that Bitcoin
              is not &ldquo;money&rdquo; under the Texas Money Services Act,
              so selling your own coin needs no state license.<C n={1} />
              <C n={2} />
            </li>
            <li>
              Industry Notice 2021-03 (June 10, 2021) confirmed Texas
              state-chartered banks may provide virtual-currency custody.
              <C n={3} />
            </li>
            <li>
              House Bill 4474 (effective September 1, 2021) wrote virtual
              currency into the Texas Uniform Commercial Code.<C n={4} />
            </li>
            <li>
              House Bill 1666 (effective September 1, 2023) requires digital
              asset providers to segregate customer funds and file
              auditor-attested proof-of-reserves reports.<C n={6} />
            </li>
            <li>
              Senate Bill 21 (June 20, 2025) created the Texas Strategic
              Bitcoin Reserve — the first standalone, publicly funded state
              Bitcoin reserve.<C n={8} />
            </li>
            <li>
              Operating an unlicensed money transmitting business remains a
              federal crime under 18 U.S.C. § 1960 regardless of Texas state
              law.<C n={11} /><C n={12} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <h2>Is Bitcoin legal in Texas?</h2>
          <p>
            Yes — and Texas answered earlier and more clearly than almost any
            state. On April 3, 2014, the Texas Department of Banking issued{" "}
            <strong>Supervisory Memorandum 1037</strong>, concluding that
            cryptocurrency is not &ldquo;money&rdquo; under the Texas Money
            Services Act because it is not sovereign legal tender.<C n={1} />{" "}
            The consequence is structural: activities that would be regulated
            money transmission when done with dollars are simply not licensed
            activities when done with bitcoin alone. Buying, selling, holding,
            and mining are all lawful, and no Texas statute has ever said
            otherwise. The full arc — every bill, memo, and failed attempt —
            runs on{" "}
            <Link href="/texas-bitcoin-law-timeline">
              the Texas Bitcoin law timeline
            </Link>
            .
          </p>

          <LegalActivityFigure />

          <h2>The state line: your coin, no license</h2>
          <p>
            Under SM 1037 and the Department&apos;s standing guidance, selling
            bitcoin you own — including peer-to-peer — and exchanging crypto
            for crypto do not by themselves trigger a Texas money-transmission
            license.<C n={1} /><C n={2} /> The license attaches only when
            sovereign currency moves in a transmitting capacity: taking
            dollars from one person to deliver value to another. In 2023 the
            state modernized the whole framework by adopting the multistate{" "}
            <strong>Money Services Modernization Act</strong> (SB 895,
            effective September 1, 2023), without disturbing that core
            holding.<C n={5} />
          </p>

          <LegalTriggerFigure />

          <h2>Where the federal map disagrees</h2>
          <p>
            Texas law is one map; federal law is another, and the seam between
            them is where people get hurt. A business that exchanges or
            transmits virtual currency for customers is a{" "}
            <strong>money services business</strong> under FinCEN&apos;s 2013
            guidance and must register federally<C n={12} /> — and operating
            unregistered is a standalone federal crime under{" "}
            <strong>18 U.S.C. § 1960</strong>, no fraud required.<C n={11} />{" "}
            No Texas memo can waive that. The prosecutions that result are
            catalogued, case by case, on{" "}
            <Link href="/texas-bitcoin-case-tracker">
              the Texas Bitcoin case tracker
            </Link>
            , and the cost of misreading the seam has a face:{" "}
            <Link href="/doctor-bitcoin">Mark &ldquo;Doctor Bitcoin&rdquo; Hopkins</Link>
            , the Dallas-area P2P educator prosecuted under § 1960 — a
            registration offense, not a fraud.
          </p>

          <LegalFincenFigure />

          <h2>Custody, commercial code, and proof of reserves</h2>
          <p>
            The 2021 and 2023 sessions built the institutional plumbing. In
            one June week of 2021, the Department of Banking confirmed
            state-chartered banks may custody virtual currency under existing
            Finance Code authority (Industry Notice 2021-03),<C n={3} /> and{" "}
            <strong>HB 4474</strong> wrote virtual currency into the Texas
            UCC — defining control and giving lenders commercial-law
            certainty.<C n={4} /> Two years later, months after FTX,{" "}
            <strong>HB 1666</strong> made Texas an early proof-of-reserves
            state: providers must segregate customer funds and file
            auditor-attested reserve reports with the Department of Banking.
            <C n={6} /> Pro-Bitcoin and anti-trust-me is the consistent Texas
            posture.
          </p>

          <LegalPlumbingFigure />

          <h2>Legal tender, the reserve, and what Bitcoin is instead</h2>
          <p>
            Bitcoin is not legal tender in Texas — that title belongs to gold
            and silver specie under <strong>HB 1056</strong> (signed June 22,
            2025).<C n={9} /> Bitcoin holds the arguably stronger position:{" "}
            <strong>SB 21</strong> (signed June 20, 2025, effective
            immediately) created the <Link href="/texas-strategic-bitcoin-reserve">Texas Strategic Bitcoin Reserve</Link>, managed
            by the Comptroller outside the state treasury and restricted by a
            $500 billion market-cap floor that only Bitcoin clears.<C n={8} />{" "}
            In the same June, Texas wrote both hard-money traditions into law
            — bullion as tender, Bitcoin as reserve.
          </p>

          <LegalStatusBoardFigure />

          <h2>Taxes and mining: the practical ground</h2>
          <p>
            Texas levies no personal income tax, so there is no state tax on
            bitcoin gains — federal capital-gains treatment still applies.
            <C n={13} /> Mining is lawful at every scale and actively courted:{" "}
            <strong>HB 591</strong> (2023) exempted otherwise-flared gas
            consumed at the wellhead from severance tax,<C n={7} /> and the
            one serious legislative attempt to cap miners&apos; role in ERCOT
            demand response — <strong>SB 1751</strong> — passed the Senate
            30&ndash;1 and then died in a House committee in May 2023.
            <C n={10} /> The industrial result is mapped, site by site, on{" "}
            <Link href="/bitcoin-mining-map-texas">
              the Texas Bitcoin mining map
            </Link>
            . This page is research, not legal or tax advice — for decisions
            with stakes, retain a licensed Texas attorney or CPA.
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
            Primary record first: Texas Department of Banking documents,
            Texas Legislature Online bill histories, the U.S. Code, and
            FinCEN guidance. This is a research and reference article, not
            financial, legal, or tax advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sources.map((s) => (
              <li key={s.id} id={`wl${s.id}`} className="flex scroll-mt-24 gap-2">
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
