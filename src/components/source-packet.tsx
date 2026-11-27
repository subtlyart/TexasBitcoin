/**
 * The primary document for one cornerstone claim, sitting next to the prose
 * rather than only in the footnote list.
 */
export function SourcePacket({
  claim,
  items,
}: {
  claim: string;
  items: { label: string; href: string }[];
}) {
  return (
    <aside className="mt-8 rounded-2xl border border-foreground/[0.06] border-l-2 border-l-accent bg-card p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">
        Primary source
      </p>
      <p className="mt-2 font-display text-lg font-semibold leading-snug">{claim}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <li key={item.href}>
              <a
                href={item.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-accent-soft underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
