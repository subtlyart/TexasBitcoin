import Link from "next/link";
import { nav } from "@/lib/site";
import { Monogram } from "./monogram";
import { CommandPalette } from "./command-palette";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-3 sm:px-5">
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
          {/* Lockup: framed monogram + serif wordmark. The frame uses
              foreground alpha so light and dark stay equally quiet. */}
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-foreground/10 bg-surface text-accent transition-colors group-hover:border-accent/40 sm:h-9 sm:w-9">
            <Monogram className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" />
          </span>
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
          <div className="ml-1 flex items-center gap-1 border-l border-border pl-2">
            <CommandPalette />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
