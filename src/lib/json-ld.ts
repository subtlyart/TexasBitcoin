/**
 * Serialize structured data for an inline <script type="application/ld+json">.
 * JSON.stringify alone lets a "</script>" or "<!--" inside a string break out of
 * the script element; escaping "<" (and the U+2028/U+2029 line separators for
 * older parsers) keeps the block inert regardless of content.
 */
const BS = String.fromCharCode(92); // backslash
const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);

export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .split("<").join(BS + "u003c")
    .split(LS).join(BS + "u2028")
    .split(PS).join(BS + "u2029");
}
