import { LoneStar } from "./lone-star";

// Owned distribution channel — captured from day one. Wire the action to an
// email provider (Buttondown / ConvertKit / Resend) before launch; for now it
// is a non-functional placeholder that does not post anywhere.
export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="mx-auto max-w-6xl scroll-mt-20 px-5"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-12">
        <LoneStar className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 text-accent/[0.06]" />
        <div className="relative max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Texas Bitcoin Weekly
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            One email. The signal from Texas.
          </h2>
          <p className="mt-4 text-muted">
            Mining and grid economics, the money law, and the programmable-money
            frontier — sourced and plainly explained. No hype, no token shilling.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            // TODO: connect to email provider before launch.
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-accent px-6 py-3 font-semibold text-[#1a1206] transition-colors hover:bg-accent-soft"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-2">
            Free. Unsubscribe anytime. We never sell your email.
          </p>
        </div>
      </div>
    </section>
  );
}
