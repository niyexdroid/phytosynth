# Phytosynth Bioscience — project notes

Next.js 16 marketing site, static export, deployed to Namecheap shared hosting.

## Build

- `next.config.js` uses `output: "export"` → static site in `out/`.
- `npm run build` runs `next build` then `postbuild` (`scripts/rename-next.js`),
  which renames `out/_next` → `out/next` and rewrites `/_next/` → `/next/` in all
  HTML. This is required because LiteSpeed/Namecheap blocks folders that start
  with an underscore (otherwise CSS/JS 404 and the site loads unstyled).

## Deploy

- GitHub Actions: `.github/workflows/deploy.yml`, triggered on push to `main`.
  Builds, then runs `scripts/deploy.js` (basic-ftp) to upload `out/` →
  `public_html/`. Credentials come from repo secrets `NAMECHEAP_FTP_HOST`,
  `NAMECHEAP_FTP_USER`, `NAMECHEAP_FTP_PASS`.
- `scripts/deploy.js` logs the FTP login dir, counts uploaded files, verifies
  `public_html/index.html` exists on the server, and exits non-zero on failure.
  Supports `FTP_REMOTE_DIR` (set to `.` if the FTP account lands inside the web
  root) — currently the account lands at `/` and `public_html` is the web root.

## Rendering gotchas (learned the hard way, June 2026)

- **`trailingSlash: true` is required** in `next.config.js`. The export emits a
  `route/` directory for each page (segment-data `__next.*.txt` files). Without
  trailingSlash, the page itself is a flat `route.html` and the `route/` dir has
  no `index.html`, so Apache's DirectorySlash redirects `/route` → `/route/` and
  serves a bare directory listing ("Index of /route/"). trailingSlash puts
  `index.html` inside every route folder so `DirectoryIndex` resolves it.
- **Content must not depend on JS to become visible.** Sections were marked
  `reveal opacity-0` (invisible) and only un-hidden by a React `useEffect`
  IntersectionObserver. If the bundle failed to hydrate, every page rendered
  styled-but-blank. Fix in `layout.tsx`: a vanilla inline script sets
  `data-reveal="ready"` and runs the observer independent of React; `globals.css`
  has a fail-safe (`html:not([data-reveal="ready"]) .reveal { opacity:1 }`) so
  content is visible by default if JS is disabled/blocked/crashes.

## Local dev gotcha

- On Windows, a running `next dev` locks `out/`, so `next build` fails with
  `EBUSY: resource busy or locked, rmdir '...\out'`. Stop the dev server before
  building/deploying.

## Deploy gotchas (learned the hard way, June 2026)

- **Wrong-account FTP secrets are silent.** `phytosynth.co.uk` resolves to the
  shared IP `192.64.117.250`, which hosts many cPanel accounts. FTP routes by
  username, web routes by Host header — so a deploy can "succeed" into a
  `public_html` that the live domain does NOT serve from. Symptom: green deploy,
  but the live site never changes. Verify by uploading a uniquely-named marker
  file and fetching it over HTTP, or confirm the FTP `public_html` actually
  contains the live content. The secrets MUST point to the account whose
  `public_html` is the one served for this domain.
- A stray character once made `deploy.yml` invalid YAML → the run failed in `0s`
  and nothing deployed. Validate the workflow before pushing.
- `basic-ftp` must stay committed in `package.json`/`package-lock.json` or CI
  `npm ci` and the deploy script fail.
- The `.htaccess` lives in `public/.htaccess` (copied to `out/` on build) and
  includes `DirectoryIndex index.html`, an `_next` → `next` rewrite, www→non-www,
  force-HTTPS, and extensionless-URL rewrites.
