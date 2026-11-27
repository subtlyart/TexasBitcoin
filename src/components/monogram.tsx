/**
 * Wordmark monogram: a five-point Texas star with a simple Bitcoin “B”.
 * Stroke only, so it stays quiet in both themes. Used in the header lockup
 * and beside the hero kicker — not as decoration elsewhere.
 */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 2.2l3.55 7.7 8.48.75-6.4 5.58 1.92 8.2L16 20.55 8.45 24.43l1.92-8.2L3.97 10.65l8.48-.75L16 2.2z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 12.1h3.15c1.15 0 1.9.62 1.9 1.48 0 .7-.4 1.18-1.05 1.38.78.18 1.28.74 1.28 1.55 0 1-.82 1.64-2.12 1.64H13.2V12.1zm1.35 2.35v-1.15h1.55c.48 0 .78.22.78.58s-.3.57-.78.57h-1.55zm0 2.5h1.78c.55 0 .88.24.88.64s-.33.64-.9.64H14.55v-1.28z"
        fill="currentColor"
      />
      <path
        d="M15.15 11.15v1.05M15.15 19.05v1.05M17.35 11.15v1.05M17.35 19.05v1.05"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
