import Link from "next/link";
import { nav } from "@/lib/site";
import { LoneStar } from "./lone-star";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-3 sm:px-5">
        <Link href="/" className="group flex items-center gap-2 sm:gap-2.5">
          <LoneStar className="h-5 w-5 text-accent transition-transform group-hover:rotate-[18deg] sm:h-6 sm:w-6" />
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            Texas<span className="text-accent">Bitcoin</span>
          </span>
        </Link>
        <nav className="flex items-center gap-0 text-[0.8rem] sm:gap-1 sm:text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1.5 py-1.5 whitespace-nowrap text-muted transition-colors hover:bg-surface-2 hover:text-foreground sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
