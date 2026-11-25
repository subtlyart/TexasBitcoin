"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Printer } from "lucide-react";

interface HeadingItem {
  id: string;
  text: string;
}

export function MobileReadingBar() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("main h2[id]"));
    const items = nodes
      .map((el) => ({
        id: el.id,
        text: (el.textContent ?? "").trim(),
      }))
      .filter((item) => item.id && item.text);
    queueMicrotask(() => setHeadings(items));
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-xs xl:hidden">
      <details className="group w-full">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-medium text-foreground">
          <span className="flex items-center gap-1.5">
            <ChevronDown className="h-3.5 w-3.5 text-muted transition-transform group-open:rotate-180" />
            On this page ({headings.length})
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.print();
            }}
            className="inline-flex items-center gap-1 rounded border border-border bg-surface-2 px-2 py-1 text-[11px] text-muted transition-colors hover:text-foreground"
          >
            <Printer className="h-3 w-3" />
            PDF
          </button>
        </summary>
        <ul className="mt-2.5 space-y-1.5 border-t border-border pt-2.5">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="block text-muted transition-colors hover:text-accent"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
