"use client";

/** Opens the header command palette without adding a nav item. */
export function OpenSearch({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("tx-open-search"))}
    >
      {children}
    </button>
  );
}
