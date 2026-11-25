"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { siteIndex, type SiteIndexEntry } from "@/lib/site-index";

const WINGS = [
  "All",
  "History & places",
  "Law & policy",
  "Enforcement",
  "The grid",
  "Base layer & frontier",
  "People — office",
  "People — Legislature",
  "Institutions",
  "Builders & culture",
  "Reference",
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [wingFilter, setWingFilter] = useState("All");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function openPalette() {
    setQuery("");
    setActive(0);
    setOpen(true);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) {
            setQuery("");
            setActive(0);
          }
          return !prev;
        });
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool =
      wingFilter === "All"
        ? siteIndex
        : siteIndex.filter((item) => item.wing === wingFilter);
    if (!q) return pool.slice(0, 14);
    return pool
      .filter((item) => {
        const hay = `${item.title} ${item.wing} ${item.keywords ?? ""}`.toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 14);
  }, [query, wingFilter]);

  function navigate(entry: SiteIndexEntry) {
    setOpen(false);
    router.push(entry.href);
  }

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((prev) => (results.length ? (prev + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((prev) =>
        results.length ? (prev - 1 + results.length) % results.length : 0
      );
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      navigate(results[active]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label="Search pages (Cmd+K)"
        title="Search pages (Cmd+K)"
        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2 text-xs text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Index</span>
        <kbd className="hidden rounded border border-border px-1 font-mono text-[10px] text-muted-2 md:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 border-b border-border px-3.5 py-3">
              <Search className="h-4 w-4 shrink-0 text-muted" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Jump to a page, wing, bill, or institution…"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-2 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="rounded p-1 text-muted hover:bg-surface-2 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex gap-1.5 overflow-x-auto border-b border-border px-3 py-2">
              {WINGS.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => {
                    setWingFilter(w);
                    setActive(0);
                  }}
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    wingFilter === w
                      ? "bg-accent text-[#1a1206]"
                      : "bg-surface-2 text-muted hover:text-foreground"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>

            <div className="max-h-80 overflow-y-auto p-1.5">
              {results.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-muted">
                  No matching pages.
                </p>
              ) : (
                results.map((item, idx) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => navigate(item)}
                    onMouseEnter={() => setActive(idx)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      idx === active
                        ? "bg-surface-2 text-foreground"
                        : "text-muted hover:bg-surface-2/60 hover:text-foreground"
                    }`}
                  >
                    <span className="font-medium">{item.title}</span>
                    <span className="ml-3 shrink-0 text-xs text-muted-2">
                      {item.wing}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
