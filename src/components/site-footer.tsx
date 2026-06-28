import Link from "next/link";
import { site } from "@/lib/site";
import { LoneStar } from "./lone-star";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <LoneStar className="h-5 w-5 text-accent" />
              <span className="font-display text-base font-semibold">
                Texas<span className="text-accent">Bitcoin</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="mb-3 font-medium text-foreground">Read</h4>
              <ul className="space-y-2 text-muted">
                <li>
                  <Link href="/history-of-bitcoin-in-texas" className="hover:text-accent-soft">
                    History of Bitcoin in Texas
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent-soft">
                    About &amp; Editorial Standards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-medium text-foreground">Legal</h4>
              <ul className="space-y-2 text-muted">
                <li>
                  <Link href="/disclaimer" className="hover:text-accent-soft">
                    Disclosures
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-2">
          <p>
            <strong className="text-muted">Not financial advice.</strong>{" "}
            {site.positioning} Bitcoin and other digital assets are volatile and
            carry risk of total loss. Always do your own research and consult a
            qualified professional before making financial or legal decisions.
          </p>
          <p className="mt-3">
            © {site.name}. Independent research, not affiliated with any
            government agency, exchange, or mining company.
          </p>
        </div>
      </div>
    </footer>
  );
}
