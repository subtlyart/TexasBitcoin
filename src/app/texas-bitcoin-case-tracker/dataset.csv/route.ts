import { datasetCsv } from "@/lib/dataset";

// CSV distribution of the case-tracker dataset, served at
// /texas-bitcoin-case-tracker/dataset.csv. Statically generated at build time
// (see the JSON route); a plain cacheable file.
export const dynamic = "force-static";

export function GET() {
  return new Response(datasetCsv(), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'inline; filename="texas-crypto-cases.csv"',
    },
  });
}
