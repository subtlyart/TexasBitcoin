import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosures",
  description:
    "Editorial, financial, and affiliate disclosures for TexasBitcoin. Not financial, investment, legal, or tax advice.",
  alternates: { canonical: `${site.url}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Disclosures
      </h1>

      <div className="prose-tx mt-10">
        <h2>Not financial, investment, legal, or tax advice</h2>
        <p>
          {site.name} publishes research, reference, and journalism for
          educational purposes. Nothing on this site is, or should be construed
          as, financial, investment, legal, accounting, or tax advice, or a
          recommendation to buy, sell, or hold any asset. Bitcoin and other
          digital assets are volatile and carry a risk of total loss. Always do
          your own research and consult a qualified, licensed professional before
          making financial or legal decisions.
        </p>

        <h2>No money services</h2>
        <p>
          We do not custody, transmit, exchange, or facilitate transactions in
          Bitcoin or any other digital asset. We are not a bank, broker-dealer,
          exchange, wallet provider, money transmitter, or money-services
          business. We do not solicit investments and we do not offer
          securities.
        </p>

        <h2>Affiliate &amp; advertising disclosure</h2>
        <p>
          Some links on this site may be affiliate links: if you click through
          and take an action, we may earn a commission at no additional cost to
          you. Consistent with U.S. Federal Trade Commission guidance, we
          disclose these relationships clearly. Affiliate arrangements never
          determine our editorial conclusions. Sponsored content, where it
          appears, is labeled as sponsored.
        </p>

        <h2>Accuracy &amp; corrections</h2>
        <p>
          We work to source every factual claim and to keep information current,
          but laws, programs, and market facts change. Content is provided
          &ldquo;as is&rdquo; without warranties of any kind. If you believe
          something is inaccurate, contact us and we will review and correct it.
        </p>

        <h2>No professional relationship</h2>
        <p>
          Using this site does not create an advisory, fiduciary, attorney-client,
          or other professional relationship between you and {site.name}.
        </p>
      </div>
    </article>
  );
}
