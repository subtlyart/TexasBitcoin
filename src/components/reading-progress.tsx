"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

// True only after hydration, without calling setState in an effect — lets the
// portal mount on the client while rendering nothing on the server.
const subscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

/**
 * A thin accent bar pinned to the very top of the viewport that fills as the
 * reader moves through the <article>. Progress is measured against the article
 * element (not the whole document), so it reaches 100% at the end of the piece
 * rather than the foot of the page.
 *
 * It renders through a portal into <body> so it sits above the sticky site
 * header's stacking context instead of being trapped inside <main>. Purely
 * decorative and aria-hidden; adds nothing for no-JS readers and never blocks
 * content.
 */
export function ReadingProgress() {
  const hydrated = useHydrated();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const update = () => {
      const top = article.getBoundingClientRect().top + window.scrollY;
      const span = article.offsetHeight - window.innerHeight;
      const ratio = span > 0 ? (window.scrollY - top) / span : 0;
      setProgress(Math.max(0, Math.min(1, ratio)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!hydrated) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>,
    document.body
  );
}
