/**
 * A citation a reader can select and paste: title, update date, canonical URL.
 * `select-all` so one drag or triple-click takes the whole line.
 */
export function CiteLine({
  title,
  updated,
  url,
}: {
  title: string;
  updated: string;
  url: string;
}) {
  const line = `${title}. TexasBitcoin. Updated ${updated}. ${url}`;
  return (
    <p className="mt-2 text-sm leading-relaxed text-muted-2">
      <span className="font-medium text-foreground">Cite. </span>
      <span className="select-all">{line}</span>
    </p>
  );
}
