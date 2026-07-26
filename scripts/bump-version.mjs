// Bumps the release version everywhere it must stay in sync (see AGENTS.md):
// package.json, package-lock.json, the schema $id in src/ontouml-schema.yaml,
// and the schema URI in README.md. Prints the new version to stdout.
// dist/ontouml-schema.json is regenerated from the YAML via `npm run generate`.
import { readFileSync, writeFileSync } from 'node:fs';

const bump = process.argv[2];
if (!['major', 'minor', 'patch'].includes(bump)) {
  console.error('Usage: node scripts/bump-version.mjs <major|minor|patch>');
  process.exit(1);
}

const root = new URL('..', import.meta.url);
const pkgPath = new URL('package.json', root);
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const [major, minor, patch] = pkg.version.split('.').map(Number);
const next =
  bump === 'major'
    ? `${major + 1}.0.0`
    : bump === 'minor'
    ? `${major}.${minor + 1}.0`
    : `${major}.${minor}.${patch + 1}`;

function replaceInFile(path, from, to) {
  const content = readFileSync(path, 'utf8');
  if (!content.includes(from)) {
    console.error(`No occurrence of "${from}" in ${path.pathname}`);
    process.exit(1);
  }
  writeFileSync(path, content.replaceAll(from, to));
}

replaceInFile(pkgPath, `"version": "${pkg.version}"`, `"version": "${next}"`);

const lockPath = new URL('package-lock.json', root);
const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
lock.version = next;
lock.packages[''].version = next;
writeFileSync(lockPath, JSON.stringify(lock, null, 2) + '\n');

const uri = v => `schema/v${v}`;
replaceInFile(
  new URL('src/ontouml-schema.yaml', root),
  uri(pkg.version),
  uri(next)
);
replaceInFile(new URL('README.md', root), uri(pkg.version), uri(next));

console.log(next);
