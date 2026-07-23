# Agent guidelines

Guidance for AI agents (and humans) working in this repository.

## Schema source of truth

- The schema is authored in [`src/ontouml-schema.yaml`](src/ontouml-schema.yaml). **All schema changes must be made there.**
- [`dist/ontouml-schema.json`](dist/ontouml-schema.json) is **generated** — never edit it by hand. Run `npm run generate` to rebuild it (this also runs automatically on commit and before publish).
- `npm test` validates the generated schema.

## Releasing / version bumps

When bumping the release version, keep the version **in sync across all three** of these:

1. `version` in [`package.json`](package.json)
2. The schema `$id` in [`src/ontouml-schema.yaml`](src/ontouml-schema.yaml) — `https://w3id.org/ontouml/schema/vX.Y.Z`
3. Any matching URI reference in [`README.md`](README.md)

This applies even to docs-only patch releases: the schema's identity URI must track the release version. Grep `schema/vX.Y.Z` to find the references.

Published npm versions are immutable — a mistake in a release requires a new version, not a re-publish.

## Publishing

Publishing to npm is automated via [`.github/workflows/publish.yml`](.github/workflows/publish.yml), which runs on a published GitHub Release using npm Trusted Publishing (OIDC — no token). To release: bump the version (see above), tag `vX.Y.Z`, and create a GitHub Release from that tag.
