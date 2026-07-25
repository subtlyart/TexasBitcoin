// Lone Star mark — Texas motif rendered as a five-point star with a Bitcoin-orange fill.
export function LoneStar({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1.5l2.95 6.4 7.05.62-5.32 4.65 1.6 6.83L12 16.9 5.72 20.5l1.6-6.83L2 9.02l7.05-.62L12 1.5z" />
    </svg>
  );
}
