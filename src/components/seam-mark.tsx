import Link from "next/link";
import { LoneStar } from "./lone-star";

/**
 * A waypoint on the seam — the hidden journey that threads the site.
 *
 * Renders a small, quiet lone star at the end of a load-bearing sentence.
 * Each step rotates the star another fifth of a turn (72°); by the terminal
 * page the star has come full circle. Not a nav element and never prominent:
 * discovery is the point. Real link, keyboard-focusable, labeled for screen
 * readers.
 *
 * Trail (see SEAM.md): home → law timeline → case tracker → mining map →
 * Rockdale → /the-seam.
 */
export function SeamMark({ to, step }: { to: string; step: 0 | 1 | 2 | 3 | 4 }) {
  return (
    <Link
      href={to}
      aria-label="Follow the seam"
      title="The seam runs through here."
      className="group ml-1.5 inline-flex align-baseline text-muted-2/50 transition-colors duration-300 hover:text-accent focus-visible:text-accent"
    >
      <LoneStar
        className="h-2.5 w-2.5 transition-transform duration-500 group-hover:scale-125"
        style={{ transform: `rotate(${step * 72}deg)` }}
      />
    </Link>
  );
}
