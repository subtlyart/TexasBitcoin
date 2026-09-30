import Link from "next/link";

// The institutions wing, cross-linked. Mounted on every institution and
// company page just above the FAQ, so the wing reads as one shelf. The
// current page is omitted. Descriptors are the pages' own subtitles.
const INSTITUTIONS = [
  { href: "/texas-comptroller-bitcoin", name: "The Comptroller", line: "The office that holds it" },
  { href: "/texas-attorney-general-bitcoin", name: "The Attorney General", line: "One suit, no opinions" },
  { href: "/texas-state-securities-board-bitcoin", name: "The State Securities Board", line: "The first state to act" },
  { href: "/texas-department-of-banking-bitcoin", name: "The Department of Banking", line: "The memo that said it wasn't money" },
  { href: "/texas-public-utility-commission-bitcoin", name: "The Public Utility Commission", line: "The list it keeps" },
  { href: "/ercot-bitcoin", name: "ERCOT", line: "The load it counts as a resource" },
  { href: "/texas-blockchain-council", name: "The Texas Blockchain Council", line: "The lobby that outgrew its name" },
];

const COMPANIES = [
  { href: "/riot-platforms-bitcoin", name: "Riot Platforms", line: "The miner that became a landlord" },
  { href: "/mara-holdings-bitcoin", name: "MARA Holdings", line: "The mine the neighbors could hear" },
  { href: "/core-scientific-bitcoin", name: "Core Scientific", line: "The dimmer switch that became a data center" },
  { href: "/cipher-mining-bitcoin", name: "Cipher", line: "The miner that dropped the word" },
  { href: "/bitdeer-bitcoin", name: "Bitdeer", line: "The mine next door" },
  { href: "/lancium-bitcoin", name: "Lancium", line: "The landlord who patented the switch" },
];

function Shelf({
  title,
  items,
  current,
}: {
  title: string;
  items: { href: string; name: string; line: string }[];
  current: string;
}) {
  const rows = items.filter((i) => i.href !== current);
  if (rows.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {title}
      </p>
      <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        {rows.map((i) => (
          <li key={i.href} className="leading-snug">
            <Link
              href={i.href}
              className="font-semibold text-foreground underline decoration-accent/40 underline-offset-2 hover:text-accent-soft"
            >
              {i.name}
            </Link>
            <span className="text-muted-2"> · {i.line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InstitutionsBlock({ current }: { current: string }) {
  return (
    <aside
      aria-label="The institutions wing"
      className="mt-14 space-y-6 rounded-xl border border-border bg-surface p-6"
    >
      <Shelf title="The institutions" items={INSTITUTIONS} current={current} />
      <Shelf title="The companies" items={COMPANIES} current={current} />
      <p className="text-xs leading-relaxed text-muted-2">
        The institutional record of Bitcoin in Texas, one office at a time.
        Each page is sourced to the agency&apos;s own documents first; the
        cornerstone they sit inside is{" "}
        <Link href="/history-of-bitcoin-in-texas" className="underline decoration-accent/30 underline-offset-2 hover:text-accent-soft">
          the history of Bitcoin in Texas
        </Link>
        .
      </p>
    </aside>
  );
}
