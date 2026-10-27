import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { citations } from "@/lib/citation";
import { ogImages } from "@/lib/og";

const pageUrl = `${site.url}/texas-crypto-kiosk-scams`;

export const metadata: Metadata = {
  title: "Texas Crypto Kiosks: The Ledger, Not the Advice",
  description:
    "FBI IC3, 2025: Texas, 1,179 kiosk-involved complaints, $56,802,197 in adjusted losses — the largest dollar loss of any state. Florida filed more complaints. SB 1705 and HB 2798 each passed one chamber and died. Not advice.",
  alternates: { canonical: pageUrl },
  openGraph: {
    images: ogImages("Texas Crypto Kiosks: The Ledger, Not the Advice"),
    type: "article",
    title: "Texas Crypto Kiosks: The Ledger, Not the Advice",
    description:
      "What a kiosk is under the Banking memo, what the two 2025 bills would have done, and what no law does. The FBI table, not a list of machines.",
    url: pageUrl,
  },
};

const sources = [
  {
    id: "s1",
    label:
      "FBI Internet Crime Complaint Center — IC3 Cryptocurrency Kiosk Complaint Data By State, supplement to the 2025 Internet Crime Report (PSA, 2026): Texas 1,179 complaints and $56,802,197 adjusted losses; Florida 1,213 complaints and $32,765,444; national 13,460 complaints and $388,981,267; losses are not solely attributable to kiosks",
    url: "https://www.ic3.gov/PSA/2026/PSA260515-2",
  },
  {
    id: "s2",
    label:
      "Texas Tribune — Crypto kiosks were used to scam $56 million from Texans last year (July 8, 2026): about 4,000 machines; no state oversight; Adam Colby of the Financial Crimes Intelligence Center; AARP's Andrea Earl",
    url: "https://www.texastribune.org/2026/07/08/texas-cryptocurrency-kiosk-bitcoin-atm-scam-fraud/",
  },
  {
    id: "s3",
    label:
      "Texas Legislature Online — SB 1705 (89R) House committee analysis: registration with the Department of Banking, disclosures, blockchain analytics, a daily transaction limit, Finance Commission rulemaking; effective date would have been September 1, 2025",
    url: "https://capitol.texas.gov/tlodocs/89R/analysis/html/SB01705H.htm",
  },
  {
    id: "s4",
    label:
      "Texas Legislature Online — SB 1705 (89R) bill history: passed the Senate May 15, 2025; reported by House committee; died on the calendar at sine die",
    url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=SB1705",
  },
  {
    id: "s5",
    label:
      "Texas Legislature Online — HB 2798 (89R) bill history: passed the House April 25, 2025; died in Senate committee",
    url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB2798",
  },
  {
    id: "s6",
    label:
      "Texas Department of Banking — Commissioner Cooper's testimony to Senate Business and Commerce (June 24, 2026): a two-party kiosk sale of bitcoin for cash is not subject to Chapter 152 unless the kiosk supports stablecoin or involves a third party",
    url: "https://www.dob.texas.gov/sites/default/files/files/news/Testimony/2026/06-24-26t.pdf",
  },
  {
    id: "s7",
    label:
      "Texas Legislative Reference Library — first-day-of-prefiling statistics: pre-filing opens the Monday following the November general election; November 9, 2026 for the 90th Legislature",
    url: "https://lrl.texas.gov/whatsNew/client/index.cfm/2024/11/15/First-Day-of-Prefiling-Statistics-89th-Regular-Session",
  },
];

const faqs = [
  {
    q: "How much did Texans lose to crypto-kiosk scams in 2025?",
    a: "The FBI's IC3 recorded 1,179 Texas complaints involving cryptocurrency kiosks and $56,802,197 in adjusted losses for 2025, the largest dollar loss of any state. Florida filed more complaints, 1,213, for $32,765,444. The IC3 says those losses cannot be attributed solely to the kiosk.",
  },
  {
    q: "Are crypto kiosks regulated in Texas?",
    a: "Not by a kiosk statute. SB 1705 passed the Senate on May 15, 2025 and died on the House calendar. HB 2798 passed the House on April 25, 2025 and died in a Senate committee. Commissioner Cooper told the Senate in June 2026 that a two-party sale of bitcoin for cash is not money transmission under Chapter 152.",
  },
  {
    q: "What would SB 1705 have required?",
    a: "Registration of each kiosk with the Texas Department of Banking before it could operate, quarterly location reports, on-screen risk disclosures, a written fraud warning, receipts, blockchain analytics, a compliance officer, a daily transaction cap, and Finance Commission rules. It did not become law. Its effective date would have been September 1, 2025.",
  },
  {
    q: "Does the Attorney General sue kiosk operators?",
    a: "No kiosk suit by the Texas Attorney General was located for this page. The Tribune's July 8, 2026 account names the FBI, the Department of Banking, and local prosecutors. The office's own record is on the Attorney General page. This page is not a list of machines and not advice about using one.",
  },
  {
    q: "Is every kiosk transaction a scam?",
    a: "No. The IC3 table counts complaints in which a kiosk was used, and says the complaint may also include other transactions. Operators told the Tribune they want a uniform framework and already post some warnings. The scam pattern the FBI describes is unsolicited contact, a cash withdrawal, a QR code, and a payment to a wallet the victim does not control.",
  },
];

function C({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#${sources[n - 1].id}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

export default function KioskPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    citation: citations(sources),
    headline: "Texas Crypto Kiosks: The Ledger, Not the Advice",
    description:
      "FBI IC3 2025: Texas led the states in adjusted losses involving cryptocurrency kiosks, at $56,802,197 across 1,179 complaints. Florida filed more complaints. Two Texas bills died in 2025.",
    author: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: site.logo } },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
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
      { "@type": "ListItem", position: 2, name: "Crypto kiosks", item: pageUrl },
    ],
  };

  return (
    <>
      {[articleJsonLd, faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
      ))}

      <article className="mx-auto max-w-3xl px-5 py-16">
        <nav className="text-xs text-muted-2">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>{" "}
          / Crypto kiosks
        </nav>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Consumer reference · not advice
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Texas Crypto Kiosks: The Ledger, Not the Advice
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The dollar figure was buried in the dead file and the agency
            pages. The FBI table is the page. It is not a list of machines.
          </p>
          <p className="mt-4 text-sm text-muted-2">
            By {site.name} · Published October 26, 2026 · Updated October 26, 2026
          </p>
        </header>

        <div className="mt-8 rounded-xl border border-accent/30 bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The short answer
          </p>
          <p className="mt-3 leading-relaxed">
            In 2025 the FBI&apos;s Internet Crime Complaint Center recorded
            1,179 Texas complaints involving cryptocurrency kiosks and
            $56,802,197 in adjusted losses, the largest dollar loss of any
            state. Florida filed more complaints, 1,213, for $32,765,444.
            Nationally the IC3 counted 13,460 such complaints and
            $388,981,267. Those losses are not solely kiosk transactions.
            Texas still has no statewide kiosk statute.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key facts
          </p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
            <li>
              The FBI IC3&apos;s 2025 state table lists Texas at 1,179
              complaints and $56,802,197 in adjusted losses involving
              cryptocurrency kiosks.<C n={1} />
            </li>
            <li>
              Florida filed more complaints than Texas, 1,213, and reported
              $32,765,444 in adjusted losses — less money, more complaints.
              <C n={1} />
            </li>
            <li>
              Nationally the IC3 counted 13,460 kiosk-involved complaints and
              $388,981,267 in adjusted losses, and said more than half of
              the complaints involved people over 50.<C n={1} />
            </li>
            <li>
              The IC3 says a complaint may include other transaction types,
              so the loss totals cannot be attributed solely to kiosks.
              <C n={1} />
            </li>
            <li>
              SB 1705 passed the Senate on May 15, 2025 and died on the
              House calendar. HB 2798 passed the House on April 25, 2025 and
              died in Senate committee. Neither became law.<C n={4} /><C n={5} />
            </li>
            <li>
              Commissioner Charles Cooper told the Senate on June 24, 2026
              that a two-party kiosk sale of bitcoin for cash is not subject
              to Finance Code Chapter 152 unless the kiosk supports a
              stablecoin or involves a third party.<C n={6} />
            </li>
          </ul>
        </div>

        <div className="prose-tx mt-10">
          <p>
            This page is the consumer reference the{" "}
            <Link href="/texas-bitcoin-bills-that-died">dead file</Link> and
            the{" "}
            <Link href="/texas-attorney-general-bitcoin">
              Attorney General
            </Link>{" "}
            page were pointing at. It is not another bill history, not a
            directory of machines, and not advice about whether to use one.
            Pre-filing for the 90th Legislature opens November 9, 2026.
            <C n={7} /> The fight this page describes is the one most likely
            to be filed first. The{" "}
            <Link href="/texas-bitcoin-bills-2027">2027 bills page</Link>{" "}
            is where a filing will be logged.
          </p>

          <h2>What is a crypto kiosk under Texas law?</h2>
          <p>
            A machine that turns cash into bitcoin is not, by that fact
            alone, a money transmitter. Commissioner Charles Cooper told
            Senate Business and Commerce on June 24, 2026 that unless the
            kiosk supports a stablecoin or involves a third party, the
            transaction between the operator and the customer is not subject
            to Finance Code Chapter 152.<C n={6} /> That reading follows{" "}
            <Link href="/texas-department-of-banking-bitcoin">
              Supervisory Memorandum 1037
            </Link>
            : a two-party sale of bitcoin is a sale of goods, because
            bitcoin is not money under the Money Services Act.
          </p>
          <p>
            The Department has sanctioned kiosk operators when the product
            was a stablecoin. Those orders — Coin Cloud, CoinFlip — are on
            the Banking page. They are not orders against a machine for
            selling bitcoin. The Tribune reported on July 8, 2026 that Texas
            regulators had no oversight of the kiosks as kiosks, and that an
            estimated 4,000 of the machines were installed in stores and
            stations. Nobody, the Tribune wrote, knows the exact count.
            <C n={2} />
          </p>

          <h2>What did Texans report losing in 2025?</h2>
          <p>
            The primary table is the FBI&apos;s, not a rounded headline. As
            a supplement to the 2025 Internet Crime Report, the IC3 published
            cryptocurrency-kiosk complaints by state. Texas: 1,179
            complaints, $56,802,197 in adjusted losses.<C n={1} /> That is
            the largest dollar figure of any state on the table. It is not
            the largest complaint count. Florida filed 1,213 complaints and
            $32,765,444.<C n={1} />
          </p>
          <p>
            Nationally the IC3 counted 13,460 complaints and $388,981,267 in
            adjusted losses, a 23 percent increase in complaints and a 58
            percent increase in losses from 2024. More than half of the
            complaints involved people over 50, with losses over $302
            million in that age group.<C n={1} /> The IC3&apos;s own caveat
            sits on the same page: the statistics include complaints in
            which a kiosk was used, and the complaint may also include other
            transactions, so the losses cannot be attributed solely to
            kiosks.<C n={1} />
          </p>
          <p>
            The pattern the IC3 describes is not an investment pitch. In
            typical complaints, criminals give instructions: how to withdraw
            cash, how to find a kiosk, how to send the funds.<C n={1} /> The
            Tribune&apos;s July 8, 2026 account is the Texas reporting of
            that pattern — fake sheriffs, fake court papers, a QR code, a
            machine in a store.<C n={2} /> Adam Colby, executive director of
            the Texas Financial Crimes Intelligence Center, told a House
            committee, in the Tribune&apos;s quotation, that the kiosks
            &ldquo;serve no useful purpose.&rdquo;<C n={2} /> That is one
            official&apos;s view. It is not a finding that every transaction
            is a crime.
          </p>

          <h2>What would the 2025 bills have done?</h2>
          <p>
            Two bills, two chambers, no statute. Senate Bill 1705, by Tan
            Parker, would have amended the Finance Code so a kiosk could not
            operate in Texas unless the operator registered it with the
            Department of Banking and got approval before turning it on.
            <C n={3} /> The House committee analysis describes quarterly
            location reports, on-screen disclosures that virtual currency is
            not legal tender and not FDIC-insured, a separate written
            warning about fraud and impersonation, receipts, blockchain
            analytics aimed at wallets known to be tied to fraud, a written
            antifraud policy, a full-time compliance officer, a daily
            transaction limit, and Finance Commission rules.<C n={3} /> The
            analysis&apos;s effective date was September 1, 2025.<C n={3} />
            The bill passed the Senate on May 15, 2025 and died on the House
            calendar at sine die.<C n={4} />
          </p>
          <p>
            House Bill 2798 was the other design, a disclosure bill rather
            than a full registration chapter. It passed the House on April
            25, 2025 and died in Senate Business and Commerce.<C n={5} />
            The{" "}
            <Link href="/texas-bitcoin-bills-that-died">dead file</Link>{" "}
            keeps the vote path. This page keeps what the bills would have
            required, and what their death left in place: no statewide
            registration, no statutory daily cap, no required warning that
            law enforcement does not take payment at the machine.
          </p>

          <h2>The honest counterweight: the table is complaints, not a census</h2>
          <p>
            The IC3 number is the right number, and it is not a count of
            every dollar that moved through a Texas kiosk. The Bureau says
            so.<C n={1} /> A complaint can mix a kiosk with other
            transfers. People who do not report are not in the table. The
            Tribune noted that shame keeps victims quiet, which would make
            the reported total an undercount of the scam, not a measure of
            ordinary use.<C n={2} />
          </p>
          <p>
            Operators are not silent. The Tribune reported that CoinFlip&apos;s
            government-affairs director told a Senate committee the company
            supported consumer protections and wanted a uniform 2027
            framework, and that some operators already run hotlines and post
            warnings the state does not require.<C n={2} /> A page that
            quotes Colby and not that sentence would be a brief, not a
            record.
          </p>
          <p>
            This site does not list exchanges, and it does not list kiosks.
            If the first time a person meets Bitcoin is a stranger on the
            phone pointing at a machine, the FBI&apos;s instruction is the
            one to keep: no legitimate law-enforcement or government
            official demands payment through a cryptocurrency kiosk.
            <C n={1} /> That is a warning from the complaint center. It is
            not a recommendation to buy, sell, or avoid bitcoin itself.
          </p>

          <h2 id="faq">Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="sources">Sources</h2>
          <p className="text-sm text-muted">
            Every datable claim above is sourced below. This is a research
            and reference article, not financial, legal, or consumer advice.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-muted">
            {sources.map((s, i) => (
              <li key={s.id} id={s.id} className="scroll-mt-24">
                <span className="text-muted-2">[{i + 1}]</span>{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </>
  );
}
