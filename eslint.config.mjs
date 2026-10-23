import next from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

// eslint-config-next v16 ships native flat configs (arrays of Linter.Config),
// spread directly — the old FlatCompat.extends() wrapper is gone and creates a
// circular-structure error against the v16 plugin.
const eslintConfig = [
  // Never lint generated build output or vendored deps — bare `eslint` (unlike
  // the removed `next lint`) does not exclude these by default.
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", "next-env.d.ts"] },
  ...next,
  ...nextTypescript,
];

export default eslintConfig;
