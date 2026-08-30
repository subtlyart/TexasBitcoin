import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// DISCRETION: sitemap-only, like the Exposure Map and /bitcoin-mining-ercot.
// Indexed and in llms.txt, but no inbound links from the shell or sibling
// pages. Outbound links are fine.
//
// YMYL care: this page states what statutes, constitutional amendments, and
// IRS guidance SAY — it never advises. Every section is the sourced, neutral
// version of what Texas estate lawyers are already writing.

const pageUrl = `${site.url}/bitcoin-estate-planning-texas`;

export const metadata: Metadata = {
  title: "Bitcoin Estate Planning in Texas: Buy, Hold, Die",
  description:
    "What the record says about owning Bitcoin across a Texas lifetime — buying without a state license, no state income or death taxes, the $15M federal exemption, community property, the stepped-up basis, and why Texas's digital-asset law cannot open a hardware wallet.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: "Bitcoin Estate Planning in Texas: Buy, Hold, Die",
    description:
      "The sourced reference on Bitcoin across a Texas lifetime — taxes, community property, TRUFADAA, and the self-custody inheritance problem no statute solves.",
    url: pageUrl,
  },
};

const LAST_VERIFIED = "August 30, 2026";

const sources = [
  { id: 1, label: "Texas Department of Banking — Supervisory Memorandum 1037 (PDF): exchanging cryptocurrency you own is not money transmission under the Texas Money Services Act", url: "https://www.dob.texas.gov/sites/default/files/files/Laws-Regulations/New-Actions/sm1037.pdf" },
  { id: 2, label: "IRS — Notice 2014-21: virtual currency is treated as property for federal tax purposes (PDF)", url: "https://www.irs.gov/pub/irs-drop/n-14-21.pdf" },
  { id: 3, label: "Ballotpedia — Texas Proposition 4 (2019): constitutional prohibition on a state individual income tax, approved November 5, 2019 (74–26)", url: "https://ballotpedia.org/Texas_Proposition_4,_Prohibit_State_Income_Tax_on_Individuals_Amendment_(2019)" },
  { id: 4, label: "Texas Comptroller — Effective September 1, 2015, the Texas inheritance tax (Tax Code Chapter 211) was repealed (SB 752, 84th Legislature)", url: "https://content.govdelivery.com/accounts/TXCOMPT/bulletins/11679ec" },
  { id: 5, label: "Ballotpedia — Texas Proposition 8 (2025): constitutional prohibition on state estate, inheritance, and death taxes, approved November 4, 2025", url: "https://ballotpedia.org/Texas_Proposition_8,_Prohibit_Estate_Taxes_and_New_Taxes_on_Estate_Transfers,_Inheritances,_and_Gifts_Amendment_(2025)" },
  { id: 6, label: "Morgan Lewis — Estate Tax Alert: the One Big Beautiful Bill Act (signed July 4, 2025) sets a permanent $15 million per-person federal estate and gift tax exemption from January 1, 2026, inflation-indexed", url: "https://www.morganlewis.com/pubs/2025/08/estate-tax-alert-new-15-million-federal-exemption-becomes-law" },
  { id: 7, label: "26 U.S.C. § 1014 — basis of property acquired from a decedent; § 1014(b)(6) extends the date-of-death basis to both halves of community property", url: "https://www.law.cornell.edu/uscode/text/26/1014" },
  { id: 8, label: "IRS — Publication 555, Community Property: federal tax treatment of community property states, including Texas", url: "https://www.irs.gov/publications/p555" },
  { id: 9, label: "Texas Family Code § 3.003 — property possessed by either spouse during or on dissolution of marriage is presumed community property", url: "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.3.htm" },
  { id: 10, label: "Texas Estates Code Chapter 2001 — Texas Revised Uniform Fiduciary Access to Digital Assets Act (TRUFADAA), effective September 1, 2017", url: "https://statutes.capitol.texas.gov/Docs/ES/htm/ES.2001.htm" },
  { id: 11, label: "Gerry W. Beyer (Texas Tech) — The Texas Revised Uniform Fiduciary Access to Digital Assets Act: A Primer for Estate Planners (SSRN)", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3038052" },
  { id: 12, label: "Texas Legislature Online — HB 4474 (87R) bill history: virtual currency written into the Texas UCC, signed June 15, 2021, effective September 1, 2021", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=87R&Bill=HB4474" },
  { id: 13, label: "Your Legacy Legal Care — Probate and cryptocurrency: what Texas executors must inventory at date-of-death fair market value", url: "https://www.yourlegacylegalcare.com/probate-cryptocurrency-texas/" },
];

const faqs = [
  {
    q: "Does Texas tax Bitcoin gains?",
    a: "No. Texas has no individual income tax — the Texas Constitution has prohibited one since voters approved Proposition 4 in November 2019 — so there is no state capital gains tax on Bitcoin. Federal tax still applies in full: the IRS has treated virtual currency as property since Notice 2014-21, so selling, spending, or trading Bitcoin is a federally taxable event for Texans.",
  },
  {
    q: "Is there an inheritance tax on Bitcoin in Texas?",
    a: "No. Texas repealed its inheritance tax effective September 1, 2015, and in November 2025 voters went further, approving Proposition 8 — a constitutional amendment prohibiting any state estate, inheritance, or death tax. Only the federal estate tax can apply, and from January 1, 2026 its exemption is $15 million per person ($30 million per married couple), permanent and inflation-indexed.",
  },
  {
    q: "Does inherited Bitcoin get a stepped-up basis?",
    a: "Yes. Bitcoin is property under IRS Notice 2014-21, so under 26 U.S.C. § 1014 an heir's cost basis resets to fair market value at the owner's death. Texas community property adds a further feature: under § 1014(b)(6), both halves of community-property Bitcoin — including the surviving spouse's own half — receive the date-of-death basis, not just the decedent's half.",
  },
  {
    q: "Is Bitcoin community property in Texas?",
    a: "By default, yes, if acquired during marriage. Texas Family Code § 3.003 presumes property possessed by either spouse during marriage is community property, and the spouse claiming Bitcoin as separate property — owned before marriage, or received by gift or inheritance — bears the burden of proving it. Which wallet or exchange account holds the coin does not decide the question; acquisition timing and funds do.",
  },
  {
    q: "Can my executor access my Bitcoin under Texas law?",
    a: "Only partly. The Texas Revised Uniform Fiduciary Access to Digital Assets Act (Estates Code Chapter 2001, effective September 1, 2017) lets executors, trustees, agents, and guardians compel custodians — exchanges, email providers, cloud services — to grant access, and works best when that authority is granted expressly in a will, trust, or power of attorney. But it binds custodians. Self-custodied Bitcoin has no custodian: no statute can compel access to a hardware wallet whose seed phrase died with its owner.",
  },
  {
    q: "Do I need a license to sell my own Bitcoin in Texas?",
    a: "No. Texas Department of Banking Supervisory Memorandum 1037 holds that exchanging cryptocurrency you own for dollars is not money transmission under the Texas Money Services Act, so no state license is required to buy or sell your own coin. Operating a business that transmits other people's money is different — and federal law, including 18 U.S.C. § 1960, applies regardless.",
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

export default function EstatePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bitcoin Estate Planning in Texas: Buy, Hold, Die",
    description:
      "What the record says about owning Bitcoin across a Texas lifetime — taxes, community property, TRUFADAA, the stepped-up basis, and the self-custody inheritance problem.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-08-30",
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
        name: "Bitcoin Estate Planning in Texas",
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
          / Bitcoin Estate Planning in Texas
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reference · The money law
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Buy, hold, die: Bitcoin across a Texas lifetime
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            What the primary record – statutes, constitutional amendments,
            and IRS guidance – says about acquiring Bitcoin in Texas, holding
            it through a marriage, and passing it on. Including the one
            problem no legislature has solved: a seed phrase answers to no
            statute.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published August 30, 2026 · Updated {LAST_VERIFIED}
          </p>
        </header>

        {/* Direct Answer — self-contained, extractable */}
        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            Texas is among the most favorable states in which to own and pass
            on Bitcoin: no state income tax on gains, no state license to
            sell your own coin, and – since Proposition 8 passed in November
            2025 – a constitutional ban on any state death tax. Federal law
            still applies: the IRS taxes Bitcoin as property, and estates
            above the $15 million per-person federal exemption owe estate
            tax. The hard part is not tax but access: Texas&apos;s
            digital-asset law binds custodians, and self-custodied Bitcoin
            has none.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              Texas has no individual income tax – prohibited by the Texas
              Constitution since voters approved Proposition 4 on November 5,
              2019 – so Bitcoin gains face no state capital gains tax.
              <C n={3} />
            </li>
            <li>
              The IRS has treated virtual currency as property since Notice
              2014-21, making sales, trades, and purchases with Bitcoin
              federally taxable events.<C n={2} />
            </li>
            <li>
              Texas repealed its inheritance tax effective September 1, 2015,
              and Proposition 8 – approved November 4, 2025 – wrote a ban on
              state estate, inheritance, and death taxes into the Texas
              Constitution.<C n={4} /><C n={5} />
            </li>
            <li>
              From January 1, 2026, the federal estate and gift tax exemption
              is a permanent, inflation-indexed $15 million per person ($30
              million per married couple), set by the One Big Beautiful Bill
              Act signed July 4, 2025.<C n={6} />
            </li>
            <li>
              Under 26 U.S.C. § 1014(b)(6), both halves of community-property
              Bitcoin receive a stepped-up basis at death – a feature of
              community property states like Texas.<C n={7} /><C n={8} />
            </li>
            <li>
              The Texas Revised Uniform Fiduciary Access to Digital Assets
              Act (Estates Code Chapter 2001) took effect September 1, 2017 –
              it compels custodians, not hardware wallets.<C n={10} /><C n={11} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-12">
          <h2>Buying: what does Texas require?</h2>
          <p>
            Less than almost any state. Buying, selling, and holding Bitcoin
            is legal in Texas, and under{" "}
            <strong>Supervisory Memorandum 1037</strong> – the Texas
            Department of Banking&apos;s foundational 2014 guidance –
            exchanging cryptocurrency you own for dollars is not money
            transmission, so <strong>no state license is required to sell
            your own coin</strong>.<C n={1} /> The full legal picture,
            including the federal § 1960 seam that still applies to anyone
            transmitting <em>other people&apos;s</em> money, lives on{" "}
            <Link href="/what-texas-law-says-about-bitcoin">
              what Texas law says about Bitcoin
            </Link>
            . The tax side is equally clean at the state line: Texas has{" "}
            <strong>no individual income tax</strong>, constitutionally
            prohibited since Proposition 4 passed 74–26 in November 2019, so
            there is no state tax on Bitcoin gains.<C n={3} /> The federal
            side is the whole tax story: since <strong>IRS Notice
            2014-21</strong>, virtual currency is <strong>property</strong>{" "}
            for federal purposes – every sale, trade, or purchase made with
            appreciated Bitcoin is a taxable event, with capital gains
            computed against cost basis.<C n={2} /> A Texan&apos;s Bitcoin
            taxes are federal taxes; the state simply declines to add any.
          </p>

          <h2>Holding: what do you actually own, and who else owns it?</h2>
          <p>
            Texas answered the first question in statute before most states
            thought to ask it. <strong>House Bill 4474</strong> (signed June
            15, 2021, effective September 1, 2021) wrote virtual currency
            into the Texas Uniform Commercial Code – defining it,
            establishing what <strong>&ldquo;control&rdquo;</strong> of it
            means, and clarifying how security interests in it are
            perfected.<C n={12} /> The second question is where Texas gets
            distinctive: it is a <strong>community property</strong> state.
            Under Family Code § 3.003, property possessed by either spouse
            during marriage is <strong>presumed community property</strong>,
            and the spouse claiming otherwise bears the burden of proof.
            <C n={9} /> Applied to Bitcoin: coin bought with income earned
            during the marriage is presumptively half your spouse&apos;s,
            regardless of whose exchange account or hardware wallet holds
            it; coin owned before the marriage, or received by gift or
            inheritance, can be separate property – if its history can be
            traced. The blockchain, for once, is on the record-keeper&apos;s
            side: acquisition dates and flows are provable in a way
            commingled cash never was.
          </p>

          <h2>Dying: what taxes apply to inherited Bitcoin in Texas?</h2>
          <p>
            At the state level: none, twice over. Texas{" "}
            <strong>repealed its inheritance tax effective September 1,
            2015</strong>,<C n={4} /> and on November 4, 2025 voters approved{" "}
            <strong>Proposition 8</strong>, amending the Texas Constitution
            to prohibit any state estate, inheritance, or death tax – making
            the absence permanent in the strongest form state law offers.
            <C n={5} /> That leaves only the federal estate tax, and its
            threshold is high: the <strong>One Big Beautiful Bill Act</strong>{" "}
            (signed July 4, 2025) set the exemption at a permanent,
            inflation-indexed <strong>$15 million per person – $30 million
            per married couple – from January 1, 2026</strong>.<C n={6} />{" "}
            Below that line, the dominant tax fact is the{" "}
            <strong>stepped-up basis</strong>: because Bitcoin is property,
            26 U.S.C. § 1014 resets an heir&apos;s cost basis to fair market
            value at death – unrealized gains accrued over the
            decedent&apos;s lifetime are never income-taxed.<C n={7} /><C n={2} />{" "}
            And community property adds the quiet Texas advantage: under
            § 1014(b)(6), <strong>both halves</strong> of community-property
            Bitcoin – including the surviving spouse&apos;s own half – take
            the date-of-death basis, a double step-up unavailable in
            common-law states.<C n={7} /><C n={8} /> Executors carry the
            paperwork: Texas probate requires the estate inventory to state
            fair market value at death, which also fixes the heirs&apos; new
            basis.<C n={13} />
          </p>

          <h2>The access problem: why a statute cannot open a hardware wallet</h2>
          <p>
            Here the law runs out of reach, and honesty requires saying so
            plainly. Texas adopted the{" "}
            <strong>Revised Uniform Fiduciary Access to Digital Assets
            Act</strong> (TRUFADAA, Estates Code Chapter 2001) effective
            September 1, 2017 – a genuinely useful statute that lets
            executors, trustees, agents under a power of attorney, and
            guardians compel <strong>custodians</strong> to grant access to a
            decedent&apos;s digital assets, with the strongest authority
            flowing to fiduciaries whose documents grant it expressly.
            <C n={10} /><C n={11} /> For Bitcoin on an exchange, that works:
            the exchange is a custodian, and a properly drafted will or trust
            reaches it. But <strong>self-custodied Bitcoin has no
            custodian</strong>. A seed phrase is knowledge, not an account;
            there is no company to serve, no password to reset, no statute to
            invoke. Coin whose keys die with the owner is not tied up in
            probate – it is gone, permanently, while remaining visible on
            the blockchain forever. The estate-planning literature&apos;s
            entire toolkit – letters of instruction, multisignature
            arrangements, dead-man switches, corporate custodians –
            exists because TRUFADAA cannot reach a steel plate in a safe.
            The same property that makes Bitcoin seizure-resistant in life
            makes it loss-prone at death. That is not a flaw in Texas law;
            it is the asset&apos;s deepest design choice, showing up in
            inheritance. Even the state met it from the other side: the{" "}
            <Link href="/texas-strategic-bitcoin-reserve">
              Strategic Bitcoin Reserve
            </Link>{" "}
            exists precisely because holding real coin means solving custody
            deliberately, in advance, with named responsible parties.
          </p>

          <h2>The honest counterweight</h2>
          <p>
            The friendly numbers above describe the state; they do not make
            the personal problem easy. Community property cuts both ways –
            the presumption that favors a surviving spouse in a step-up also
            means Bitcoin a spouse believed was solely theirs is likely
            half-owned already, and tracing separate property through years
            of transactions is real forensic work. The stepped-up basis
            rewards holding until death, which sits oddly with an asset
            whose owners are told to plan meticulously for access at death.
            And every mechanism that solves the access problem – sharing
            keys with family, multisig with a lawyer, a custodian – trades
            away some of the self-sovereignty that motivated self-custody in
            the first place. Texas law removed the state-level friction; the
            remaining decisions are genuinely hard, personal, and worth a
            licensed professional&apos;s time. This page is the map, not the
            counsel.
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
            Primary record first: Texas statutes and constitutional
            amendments, IRS guidance, and the U.S. Code, then legal
            scholarship and practitioner analysis. This is a research and
            reference article – not legal, tax, financial, or investment
            advice, and not a substitute for a licensed Texas attorney or
            tax professional.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sources.map((s) => (
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
