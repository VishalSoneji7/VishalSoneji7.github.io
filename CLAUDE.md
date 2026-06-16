# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vishal Soneji's game developer portfolio — a static single-page website with no build tools, frameworks, or package managers.

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

Three core files:

- **`index.html`** — Full page structure: custom cursor, navbar + mobile drawer, hero, about, skills, projects, dev diary, contact, footer. The projects grid is an empty `#projectsContainer` populated by JS; the project modal is built in JS on first open.
- **`script.js`** — All JavaScript logic:
  - `projects` array (8 entries) — add/edit entries here to update the portfolio
  - Mosaic project grid (`buildMosaicCard` / `populateProjects`) with per-index spans in `MOSAIC_SPANS`
  - Click-to-open project modal (`buildModalDOM` / `openModal`) with lazy YouTube iframe embeds
  - YouTube thumbnail/ID helpers (`getYTId`)
  - Custom crosshair cursor (desktop/fine-pointer only)
  - Hero typewriter, animated stat counters, scroll reveal, smooth anchor scroll
  - Mobile drawer toggle, active-nav highlighting, nav-on-scroll border
- **`style.css`** — Full styling:
  - CSS variables in `:root` (backgrounds, text, accent, borders, fonts, spacing, easing)
  - SVG noise grain overlay, faint grid, custom-cursor styles
  - Responsive breakpoints for desktop/tablet/mobile

## Key Patterns

**Adding a project**: Add a new object to the `projects` array in `script.js`. Each project has `id`, `title`, `type`, `role`, `engine`, `language`, `description`, `devNotes`, `image`, `video` (YouTube URL — empty string if none), `github`, and `featured`. Cards are generated dynamically from this array. When adding an entry, also add a matching `[colSpan, rowSpan]` pair to `MOSAIC_SPANS` (same index) to control its grid footprint.

**Media**: If a project has a `video` (YouTube) URL, the card/modal uses the YouTube thumbnail and the modal shows a play button that swaps in a lazy-loaded iframe; otherwise it falls back to `image`.

**Scroll animations**: Sections use the `.reveal-section` class; an `IntersectionObserver` adds `.visible` to trigger CSS reveals.

**Static assets**: `Vishal_Soneji_GameDev.docx` (resume download), `FE-FONT.TTF`, `github.png` / `GitHub-Light.png`. Fonts are loaded from Google Fonts; project images come from Unsplash URLs.

## Publishing

The live site is a GitHub Pages user site at **https://vishalsoneji7.github.io**, served from the repo `VishalSoneji7/VishalSoneji7.github.io` (local clone at `V:\VishalSoneji7.github.io`, branch `main`). This working folder (`V:\PORTFOLIO\vishal`) is **not** that repo and has no git remote of its own — to publish changes, copy the edited files into the github.io clone and `git commit` + `git push` there. Pages redeploys automatically on push.
