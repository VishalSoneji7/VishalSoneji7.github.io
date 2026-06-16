# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vishal Soneji's game developer portfolio — a static single-page website with no build tools, frameworks, or package managers. This repository (`VishalSoneji7/VishalSoneji7.github.io`) is the live site; see **Publishing** below.

## Running the Site

No installation or build step required. Serve `index.html` with any static HTTP server:

```bash
python -m http.server 8000
# or
npx http-server
```

Then open `http://localhost:8000` in a browser.

Design language is a dark "game engine aesthetic": near-black background (`#0B0D0E`), a single neon-green accent (`#00FF87`), Space Mono (display) + DM Sans (body). Dark only — there is no light/dark toggle.

## Architecture

Three core files plus a media folder:

- **`index.html`** — Full page structure. Sections in order, numbered 01–07: hero (01), about (02), **featured / Lucky Duckies (03)**, skills (04), projects (05), dev diary (06), contact (07), footer. Plus custom cursor, fixed navbar, and mobile drawer. The projects grid is an empty `#projectsContainer` populated by JS; the project modal is built in JS on first open. The Featured section is hand-authored HTML (not data-driven).
- **`script.js`** — All JavaScript logic:
  - `projects` array (8 entries) — add/edit entries here to update the projects grid
  - Mosaic project grid (`buildMosaicCard` / `populateProjects`) with per-index spans in `MOSAIC_SPANS`
  - Click-to-open project modal (`buildModalDOM` / `openModal`) with lazy YouTube iframe embeds
  - YouTube thumbnail/ID helpers (`getYTId`)
  - `initFeaturedTrailer` — click-to-play handler for the Lucky Duckies trailer
  - Custom crosshair cursor (desktop/fine-pointer only)
  - Hero typewriter, animated stat counters, scroll reveal, smooth anchor scroll
  - Mobile drawer toggle, active-nav highlighting, nav-on-scroll border
- **`style.css`** — Full styling:
  - CSS variables in `:root` (backgrounds, text, accent, borders, fonts, spacing, easing)
  - SVG noise grain overlay, faint grid, custom-cursor styles
  - Featured/Lucky Duckies section styles (prefixed `.ld-*`)
  - Responsive breakpoints for desktop/tablet/mobile
- **`LuckyDuckies/`** — media for the Featured section (currently `key-art.png`).

## Key Patterns

**Adding a project**: Add a new object to the `projects` array in `script.js`. Each project has `id`, `title`, `type`, `role`, `engine`, `language`, `description`, `devNotes`, `image`, `video` (YouTube URL — empty string if none), `github`, and `featured`. Cards are generated dynamically from this array. When adding an entry, also add a matching `[colSpan, rowSpan]` pair to `MOSAIC_SPANS` (same index) to control its grid footprint.

**Project media**: If a project has a `video` (YouTube) URL, the card/modal uses the YouTube thumbnail and the modal shows a play button that swaps in a lazy-loaded iframe; otherwise it falls back to `image`.

**Featured section (Lucky Duckies)**: Hand-authored HTML in `index.html` under `#featured` (class `.ld`), not generated from data. It contains: header (title/role/tags), a media row (`.ld-keyart` image + `.ld-trailer` click-to-play trailer), a summary, a `.ld-stats` strip, a `.ld-tech` grid of "what I built" cards, a `.ld-gallery` grid, and a `.ld-cta` button row.
  - **Trailer**: the `#ldTrailer` element carries `data-ytid`; `initFeaturedTrailer` swaps in an autoplay iframe on click. To change the trailer, edit `data-ytid` and the thumbnail/`href`.
  - **Gallery**: add screenshots by dropping files in `LuckyDuckies/` and adding `<div class="ld-shot"><img src="LuckyDuckies/<file>" ... /></div>` (an example is commented in place). `.ld-shot.ld-shot-empty` renders an `[ ADD SCREENSHOT ]` placeholder slot.
  - **Steam button**: currently points to a Steam *search* as a safe placeholder — there is a `TODO` comment to replace it with the exact store page URL once available.

**Resume button**: The hero "VIEW MY RESUME" button links to `Vishal_Soneji_Resume.pdf` with `target="_blank"` and **no** `download` attribute, so it opens inline in the browser's PDF viewer rather than downloading. (Whether a PDF opens inline vs. downloads also depends on the visitor's own browser PDF setting — the site cannot force inline viewing; Chrome's default is to open inline.)

**Scroll animations**: Sections use the `.reveal-section` class; an `IntersectionObserver` adds `.visible` to trigger CSS reveals.

**Static assets**: `Vishal_Soneji_Resume.pdf` (current resume, opened in a new tab) and `LuckyDuckies/key-art.png`. Fonts load from Google Fonts; the projects grid uses YouTube thumbnails + Unsplash images; the GitHub icon is an inline SVG. `Vishal_Soneji_GameDev.docx` is the *old* resume and is no longer linked from the site.

## Publishing

This repository **is** the live site: a GitHub Pages user site at **https://vishalsoneji7.github.io**, repo `VishalSoneji7/VishalSoneji7.github.io`, branch `main`, local clone at `V:\VishalSoneji7.github.io`. Edit files here and push — Pages redeploys automatically. After publishing, hard-refresh (Ctrl+Shift+R) to bypass browser/CDN cache.

- **Git workflow**: Vishal commits and pushes himself, using commit messages Claude supplies. Do not run `git commit` / `git push` on his behalf unless he asks.
- **Auth**: pushes must authenticate as `VishalSoneji7` (the repo owner) via the Windows credential store. A different cached account (e.g. `vsoneji7`) will be rejected with a 403.
- **Stale duplicate**: `V:\PORTFOLIO\vishal` contains an older copy of these files and has no git remote of its own — do **not** edit there; it does not publish anywhere.

## Change Log & Decisions

Notable changes and the reasons behind them (most recent first):

- **2026-06-16 — Added the Featured / Lucky Duckies showcase (section 03).** Spotlights Vishal's shipped Steam title (built at USC Games) with key art, a click-to-play trailer, a tech breakdown (split-screen co-op, occlusion silhouette, cosmetic skin system, lighting optimization, bug fixing — all sourced from his resume), a stats strip, and a gallery. Added a `FEATURED` nav entry (desktop + drawer) and renumbered Skills→04, Projects→05, Dev Diary→06, Contact→07. *Reason:* it's the strongest proof of work and was previously absent from the site.
- **2026-06-16 — Resume button changed from download to inline view.** Text "DOWNLOAD RESUME" → "VIEW MY RESUME"; now links to `Vishal_Soneji_Resume.pdf` (the latest resume) with `target="_blank"` and no `download` attribute. *Reason:* Vishal wanted the resume to open in the browser's PDF viewer for recruiters rather than force a download.
- **2026-06-16 — Brought the resume and CLAUDE.md into this repo.** The repo previously tracked only `index.html`, `script.js`, `style.css`, and `README.md`, so the resume link was broken on the live site. *Reason:* fix the broken download and keep project guidance version-controlled with the site.
