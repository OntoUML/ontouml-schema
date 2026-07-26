# Agent guidelines

Guidance for AI agents (and humans) working in this repository.

## Schema source of truth

- The schema is authored in [`src/ontouml-schema.yaml`](src/ontouml-schema.yaml). **All schema changes must be made there.**
- [`dist/ontouml-schema.json`](dist/ontouml-schema.json) is **generated** — never edit it by hand. Run `npm run generate` to rebuild it (this also runs automatically on commit and before publish).
- `npm test` validates the generated schema.

## Releasing / version bumps

**Every merged PR is released automatically** by [`.github/workflows/release.yml`](.github/workflows/release.yml): it bumps the version, commits, tags `vX.Y.Z`, creates a GitHub Release, and triggers the npm publish. Do not bump versions in PRs.

The bump type defaults to **patch**. To release a different bump, either label the PR `release:major` / `release:minor`, or use a conventional-commit PR title (`feat: …` → minor; `feat!: …` or a title containing `BREAKING` → major).

The version is kept **in sync across all three** of these (done by [`scripts/bump-version.mjs`](scripts/bump-version.mjs) — use it for any manual bump too):

1. `version` in [`package.json`](package.json)
2. The schema `$id` in [`src/ontouml-schema.yaml`](src/ontouml-schema.yaml) — `https://w3id.org/ontouml/schema/vX.Y.Z`
3. Any matching URI reference in [`README.md`](README.md)

This applies even to docs-only patch releases: the schema's identity URI must track the release version. Grep `schema/vX.Y.Z` to find the references.

Published npm versions are immutable — a mistake in a release requires a new version, not a re-publish.

## Publishing

Publishing to npm runs in [`.github/workflows/publish.yml`](.github/workflows/publish.yml) using npm Trusted Publishing (OIDC — no token). It fires on a published GitHub Release or a manual `workflow_dispatch`; the release workflow dispatches it explicitly, because Releases created with the workflow `GITHUB_TOKEN` do not trigger other workflows' `release` events.
