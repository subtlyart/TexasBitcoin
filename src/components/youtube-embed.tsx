import type { ReactNode } from "react";

// Privacy-first YouTube embed. Uses youtube-nocookie.com (no tracking cookies
// set until the viewer hits play), lazy-loads the iframe, and keeps a fixed
// 16:9 frame so the page never reflows as the player loads. Server component —
// it renders to a plain iframe with no client JS.
export function YouTubeEmbed({
  id,
  title,
  caption,
}: {
  id: string;
  title: string;
  caption?: ReactNode;
}) {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-video w-full bg-background">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted-2">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
