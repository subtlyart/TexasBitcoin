import { datasetJson } from "@/lib/dataset";

// JSON distribution of the case-tracker dataset, served at
// /texas-bitcoin-case-tracker/dataset.json. Statically generated at build time
// (the dataset is fixed per build and regenerates on the nightly redeploy), so
// it is a plain cacheable file.
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(datasetJson(), null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "content-disposition":
        'inline; filename="texas-crypto-cases.json"',
    },
  });
}
