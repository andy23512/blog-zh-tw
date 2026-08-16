# CLAUDE.md

## What this is

Traditional Chinese (zh-TW) edition of Tangent Chang's personal blog about
CharaChorder and Forge input devices. It's a Hexo static site whose posts are
generated from notes fetched out of HackMD (via the HackMD API) rather than
written directly as markdown in this repo in the normal Hexo way. There is a
sibling English-language repo (`blog`, linked as `otherLanguage` in
`site.config.ts`) that mirrors this one.

## Tech stack

- Hexo 7 static site generator (theme: `hexo-theme-next`), TypeScript tooling
  run via `tsx`, Yarn 1 as the package manager (`packageManager` pinned in
  `package.json`), Node 20 (per `.gitlab-ci.yml` / `.github/workflows/pages.yml`).

## Key commands

- `yarn install` — install deps.
- `yarn start` — full pipeline: fetch HackMD notes → fetch the note table →
  generate posts → `hexo server -o` (opens a local dev server).
- `yarn build` — `hexo generate`, outputs static site to `public/`.
- `yarn clean` — `hexo clean`.
- `yarn server` — `hexo server -o` only (no regeneration of posts).
- `yarn og` — `tsx bin/generate-og-image.ts`, renders/commits the Open Graph
  image referenced by `site.config.ts` → `ogImage`.
- `yarn deploy` — `hexo deploy`.
- No test script and no `lint` script in `package.json`; `.eslintrc.js`
  exists (`eslint:recommended` + `@typescript-eslint/recommended`) but there
  is no `eslint` devDependency or npm script wired to it, so linting isn't
  runnable out of the box.

## Architecture / content pipeline

1. `bin/fetch-hackmd-notes.ts` — pulls notes tagged `CC / Forge` from the
   HackMD API (needs `token.json` with a `hackmd` token; gitignored, not in
   repo) into `res/hackmd-note-data.json`.
2. `bin/fetch-note-table.ts` — pulls a published Google Sheet (URL in
   `config.json`, gitignored) into `res/note-table-data.json`. This sheet is
   the source of truth for which HackMD notes belong to *this* language
   edition (filtered by `noteCategories` in `site.config.ts`).
3. `bin/generate-posts.ts` — cross-references the two JSON files and writes
   Hexo markdown posts into `source/_posts/`, rewriting internal HackMD links
   into `{% post_path %}` tags and downloading referenced images into
   `source/images/`.
4. `hexo generate` (via `yarn build`) then renders `source/` into `public/`
   using `hexo-theme-next` and config in `_config.yml` / `_config.next.yml`.
5. `bin/generate-og-image.ts` uses Puppeteer to render a social-share image
   from `site.config.ts` → `ogImage` fields.

`model/` holds the TS interfaces for HackMD notes and note-table rows;
`util/` has small shared helpers (`slugify.ts`, `normalize-headings.ts`).

## Non-obvious conventions / gotchas

- **Cross-repo parity constraint**: the header comment in `site.config.ts`
  states that everything under `bin/`, `model/`, `util/`, and `scripts/` is
  meant to be byte-identical between this repo and the English `blog` repo —
  only `site.config.ts` itself should hold per-language differences. Keep
  that in mind before editing those directories: changes likely need to be
  mirrored in the sibling repo.
- **Posts are generated, not hand-authored**: don't hand-edit files under
  `source/_posts/` expecting them to persist — they get overwritten by
  `generate-posts.ts` on the next run. Edit the HackMD note or the note-table
  sheet instead, or edit `bin/generate-posts.ts` if the generation logic
  itself needs to change.
- Several files required for the fetch scripts are gitignored and not
  present in a fresh checkout: `token.json` (HackMD API token) and
  `config.json` (Google Sheet URL) — both already exist in this working copy.
  `res/hackmd-note-data.json`, `res/note-table-data.json`, `db.json`,
  and `public/` are also gitignored generated/cache artifacts.
- Site is deployed to `https://andy23512.github.io/blog-zh-tw/` with
  `root: /blog-zh-tw/` set in `_config.yml` — it's served from a subpath, not
  domain root.
- CI: `.github/workflows/pages.yml` builds with `npm install && npm run build`
  and deploys `public/` to GitHub Pages on push to `main`; a separate
  `.gitlab-ci.yml` does an equivalent GitLab Pages build using npm (not yarn).
