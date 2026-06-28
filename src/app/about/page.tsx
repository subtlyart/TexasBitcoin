import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Editorial Standards",
  description:
    "Who is behind TexasBitcoin, how we source claims, and the standards that make this a reference worth trusting.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        About
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        About &amp; Editorial Standards
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        {site.name} is an independent research and reference publication about
        Bitcoin in Texas — the energy and mining base layer, the money law, and
        the programmable-money frontier built on top.
      </p>

      <div className="prose-tx mt-10">
        <h2>What we are</h2>
        <p>
          A focused authority on a single subject: how Bitcoin and Texas
          intersect in the real world. We stay Bitcoin-centric. We cover
          stablecoins and smart contracts specifically as layers that{" "}
          <strong>settle to Bitcoin</strong> — not as an excuse to drift into
          generic multi-chain or token coverage. The point is depth on a narrow
          subject, not breadth on a shallow one.
        </p>

        <h2>What we are not</h2>
        <p>
          We are not an exchange, a broker, a wallet, a mining company, or a
          money-services business. We do not custody, transmit, or facilitate
          transactions in any digital asset. We are not affiliated with any
          government agency. Nothing here is financial, investment, legal, or tax
          advice. See our{" "}
          <a href="/disclaimer">full disclosures</a>.
        </p>

        <h2>How we source claims</h2>
        <ul>
          <li>
            Every datable, legal, or legislative claim is tied to a primary or
            reputable secondary source, linked inline or in a Sources section.
          </li>
          <li>
            We prefer primary sources — bill text, agency memoranda, official
            filings — and use journalism to corroborate, not to substitute.
          </li>
          <li>
            When the record is uncertain or a claim could not be verified, we say
            so rather than imply false precision.
          </li>
          <li>
            Corrections are made openly. If you find an error, tell us and we
            will fix it and note the change.
          </li>
        </ul>

        <h2>Independence &amp; disclosure</h2>
        <p>
          When we link to a vendor, product, or service through an affiliate
          arrangement, we disclose it clearly and in line with FTC guidance. An
          affiliate relationship never determines our editorial conclusions, and
          we label sponsored content as sponsored. Our reference and research
          content is editorially independent of any commercial relationship.
        </p>

        <h2>Contact &amp; corrections</h2>
        <p>
          Story tips, data, and corrections are welcome. A contact channel will
          be published here at launch.
        </p>
      </div>
    </article>
  );
}
