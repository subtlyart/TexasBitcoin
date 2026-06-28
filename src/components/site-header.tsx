import Link from "next/link";
import { nav } from "@/lib/site";
import { LoneStar } from "./lone-star";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <LoneStar className="h-6 w-6 text-accent transition-transform group-hover:rotate-[18deg]" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Texas<span className="text-accent">Bitcoin</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#newsletter"
            className="ml-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-medium text-accent-soft transition-colors hover:bg-accent/20"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
