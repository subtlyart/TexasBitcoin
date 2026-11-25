"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteIndex } from "@/lib/site-index";

interface HeadingItem {
  id: string;
  text: string;
}

export function ReadingRail({ wing }: { wing?: string }) {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("main h2[id]"));
    const items = nodes
      .map((el) => ({
        id: el.id,
        text: (el.textContent ?? "").trim(),
      }))
      .filter((item) => item.id && item.text);
    queueMicrotask(() => setHeadings(items));

    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0.1 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname]);

  const currentEntry = siteIndex.find((e) => e.href === pathname);
  const resolvedWing = wing ?? currentEntry?.wing;
  const siblings = resolvedWing
    ? siteIndex
        .filter((e) => e.wing === resolvedWing && e.href !== pathname)
        .slice(0, 6)
    : [];

  if (headings.length === 0 && siblings.length === 0) return null;

  return (
    <aside className="no-print hidden xl:block">
      <div className="sticky top-24 space-y-6 border-l border-border pl-5 text-xs">
        {headings.length > 0 && (
          <div>
            <p className="mb-2.5 font-semibold tracking-wider text-muted-2 uppercase">
              On this page
            </p>
            <ul className="space-y-1.5">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className={`block leading-snug transition-colors ${
                      activeId === h.id
                        ? "font-medium text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {siblings.length > 0 && (
          <div>
            <p className="mb-2.5 font-semibold tracking-wider text-muted-2 uppercase">
              {resolvedWing}
            </p>
            <ul className="space-y-1.5">
              {siblings.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block leading-snug text-muted transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
