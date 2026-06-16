/* ═══════════════════════════════════════════════════════════
   VISHAL SONEJI — GAMEPLAY ENGINEER PORTFOLIO
   script.js
═══════════════════════════════════════════════════════════ */

'use strict';

// ── Project data ──────────────────────────────────────────────
const projects = [
  {
    id: 'tank-a-boom',
    title: 'Tank-A-Boom',
    type: 'Multiplayer Action',
    role: 'Solo Developer & Programmer',
    engine: 'Unreal Engine',
    language: 'Blueprints',
    description: 'A fast-paced multiplayer tank battle game with explosive combat, destructible environments, and strategic power-ups. Built entirely solo — from vehicle physics to the full combat loop.',
    devNotes: 'Built the entire game solo — from vehicle movement and combat to health/damage systems. The trickiest part was syncing gun recoil animations to the exact firing moment; getting that timing right is what made the combat feel alive rather than floaty. An early project that taught me how much small details in animation timing define the player\'s perception of impact.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: '',
    github: 'https://github.com/VishalSoneji7/Tank-A-Boom',
    featured: true
  },
  {
    id: 'prop-hunt',
    title: 'Prop Hunt',
    type: 'Multiplayer Party Game',
    role: 'Developer & Gameplay Engineer',
    engine: 'Unreal Engine',
    language: 'Blueprints',
    description: 'A hide-and-seek multiplayer game where players morph into environment props to evade hunters. Features dynamic prop conversion with per-object collision recalculation.',
    devNotes: 'The core challenge was converting a third-person character mesh into a static prop — reassigning collision, recalculating bounds, and scaling correctly so it blends into the environment. Getting the size and collision seamless taught me how Unreal handles pawns vs. actors, and what it really takes to make a mechanic feel convincing to both sides of the game.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: '',
    github: 'https://github.com/VishalSoneji7/PropHunt',
    featured: false
  },
  {
    id: 'maze-rewired',
    title: 'Maze Rewired',
    type: 'Puzzle Platformer',
    role: 'Developer & Gameplay Engineer',
    engine: 'Unity 3D',
    language: 'C#',
    description: 'A procedural puzzle game where walls rotate and shift to create new paths. Each level introduces and reinforces mechanics needed for the next, building player intuition progressively.',
    devNotes: 'Built the wall rotation mechanic from scratch — making rotations feel smooth and intentional while keeping a valid path open via pathfinding check after every rotation. Carefully engineered pickup and power-up placement so difficulty scales naturally and each level teaches the player exactly the mechanics they\'ll need for the next one.',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: '',
    github: 'https://github.com/VishalSoneji7',
    featured: false
  },
  {
    id: 'particle-system',
    title: 'Particle System',
    type: 'Engine Tech / VFX',
    role: 'Solo Developer',
    engine: 'Custom Renderer',
    language: 'C#',
    description: 'A custom real-time particle VFX engine built from low-level rendering principles. Features configurable emitters, color blending, and runtime parameter tweaking via an in-app menu.',
    devNotes: 'A solo deep-dive built off what I learned from Prime Engine — a renderer from low-level systems up, then using it to simulate and render particles in real time. The interesting challenges were color blending between particle states and managing pool/buffer sizes correctly so particles behave predictably at scale. A live menu for tweaking mid-run made it a sandbox for understanding how VFX systems really work.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: '',
    github: 'https://github.com/VishalSoneji7',
    featured: false
  },
  {
    id: 'frustum-culling',
    title: 'Frustum Culling',
    type: 'Graphics / Optimization',
    role: '[ADD YOUR ROLE]',
    engine: 'Prime Engine',
    language: 'C++',
    description: '[ADD YOUR DESCRIPTION — what is this, what does it demonstrate, what problem does it solve?]',
    devNotes: '[ADD YOUR DEV NOTES — hardest part, what you learned, key decisions made]',
    image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: 'https://youtu.be/YZ59rATL484',
    github: 'https://github.com/VishalSoneji7',
    featured: false
  },
  {
    id: 'physics-system',
    title: 'Physics System',
    type: 'Engine Tech / Simulation',
    role: '[ADD YOUR ROLE]',
    engine: 'Prime Engine',
    language: 'C++',
    description: '[ADD YOUR DESCRIPTION — what is this, what does it demonstrate, what problem does it solve?]',
    devNotes: '[ADD YOUR DEV NOTES — hardest part, what you learned, key decisions made]',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: 'https://youtu.be/QBd2p1pTwB4',
    github: 'https://github.com/VishalSoneji7',
    featured: false
  },
  {
    id: 'animation-blending',
    title: 'Animation Blending',
    type: 'Engine Tech / Animation',
    role: '[ADD YOUR ROLE]',
    engine: 'Prime Engine',
    language: 'C++',
    description: '[ADD YOUR DESCRIPTION — what is this, what does it demonstrate, what problem does it solve?]',
    devNotes: '[ADD YOUR DEV NOTES — hardest part, what you learned, key decisions made]',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: '',
    github: 'https://github.com/VishalSoneji7',
    featured: false
  },
  {
    id: 'character-behaviour',
    title: 'Character Behaviour',
    type: 'AI / Systems',
    role: '[ADD YOUR ROLE]',
    engine: 'Prime Engine',
    language: 'C++',
    description: '[ADD YOUR DESCRIPTION — what is this, what does it demonstrate, what problem does it solve?]',
    devNotes: '[ADD YOUR DEV NOTES — hardest part, what you learned, key decisions made]',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    video: 'https://youtu.be/LJcZGbpixHw',
    github: 'https://github.com/VishalSoneji7',
    featured: false
  }
];

// ── YouTube helpers ───────────────────────────────────────────
function getYTId(url) {
  if (!url) return '';
  const m = url.match(/youtu\.be\/([\w-]{6,})/i)
    || url.match(/[?&]v=([\w-]{6,})/i)
    || url.match(/embed\/([\w-]{6,})/i);
  return m ? m[1] : '';
}

// Mosaic card grid spans: [colSpan, rowSpan] per project index
const MOSAIC_SPANS = [
  [2, 2], // Tank-A-Boom
  [1, 1], // Prop Hunt
  [1, 2], // Maze Rewired — tall
  [1, 1], // Particle System
  [1, 1], // Frustum Culling
  [2, 1], // Physics System — wide
  [1, 1], // Animation Blending
  [4, 1], // Character Behaviour — full width
];

// ── Build mosaic card (image + name only) ─────────────────────
function buildMosaicCard(p, idx, colSpan, rowSpan) {
  const ytId = getYTId(p.video);
  const imgSrc = ytId
    ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
    : p.image;

  const el = document.createElement('div');
  el.className = 'mosaic-card';
  el.style.gridColumn = `span ${colSpan}`;
  el.style.gridRow    = `span ${rowSpan}`;
  el.dataset.col = colSpan;
  el.dataset.idx = idx;

  el.innerHTML = `
    <img class="win-img" src="${imgSrc}" alt="${p.title}" loading="lazy" />
    <div class="win-label">
      <span class="win-label-name">${p.title.toUpperCase()}</span>
      <span class="win-label-type">${p.type}</span>
    </div>`;

  return el;
}

// ── Populate projects ─────────────────────────────────────────
function populateProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'mosaic-grid';

  projects.forEach((p, i) => {
    const [col, row] = MOSAIC_SPANS[i] || [1, 1];
    grid.appendChild(buildMosaicCard(p, i, col, row));
  });

  container.appendChild(grid);
}

// ── Project modal ─────────────────────────────────────────────
let modalEl = null;

function buildModalDOM() {
  const el = document.createElement('div');
  el.className = 'proj-modal';
  el.id = 'projModal';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="proj-modal-inner" role="dialog" aria-modal="true">
      <button class="modal-close" id="modalClose" aria-label="Close">✕ CLOSE</button>
      <div class="modal-media" id="modalMedia"></div>
      <div class="modal-body">
        <div class="modal-header">
          <h2 class="modal-title" id="modalTitle"></h2>
          <span class="modal-type-badge" id="modalType"></span>
        </div>
        <p class="modal-role" id="modalRole"></p>
        <div class="modal-chips" id="modalChips"></div>
        <p class="modal-desc" id="modalDesc"></p>
        <details class="modal-notes" id="modalNotes">
          <summary>DEV NOTES</summary>
          <div class="modal-notes-body" id="modalNotesBody"></div>
        </details>
        <div class="modal-links" id="modalLinks"></div>
      </div>
    </div>`;
  document.body.appendChild(el);
  return el;
}

function openModal(project) {
  if (!modalEl) modalEl = buildModalDOM();

  const ytId = getYTId(project.video);

  // Media area: image + play overlay, or just image
  const mediaEl = modalEl.querySelector('#modalMedia');
  if (ytId) {
    const thumb = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
    mediaEl.innerHTML = `
      <img class="modal-media-img" src="${thumb}" alt="${project.title}" />
      <div class="modal-play-wrap">
        <button class="modal-play-btn" data-ytid="${ytId}" aria-label="Play video">
          <svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>`;
  } else {
    mediaEl.innerHTML = `<img class="modal-media-img" src="${project.image}" alt="${project.title}" />`;
  }

  modalEl.querySelector('#modalTitle').textContent = project.title;
  modalEl.querySelector('#modalType').textContent  = project.type;
  modalEl.querySelector('#modalRole').textContent  = project.role;
  modalEl.querySelector('#modalDesc').textContent  = project.description;

  modalEl.querySelector('#modalChips').innerHTML =
    `<span class="modal-chip">${project.engine}</span>
     <span class="modal-chip">${project.language}</span>`;

  const notesEl = modalEl.querySelector('#modalNotes');
  if (project.devNotes) {
    notesEl.style.display = '';
    notesEl.removeAttribute('open');
    modalEl.querySelector('#modalNotesBody').textContent = project.devNotes;
  } else {
    notesEl.style.display = 'none';
  }

  let links = '';
  if (project.github) links += `<a href="${project.github}" target="_blank" rel="noopener" class="modal-link link-accent">GITHUB ↗</a>`;
  if (ytId)           links += `<a href="${project.video}"  target="_blank" rel="noopener" class="modal-link">VIDEO ↗</a>`;
  modalEl.querySelector('#modalLinks').innerHTML = links;

  // Reset scroll
  modalEl.querySelector('.proj-modal-inner').scrollTop = 0;

  modalEl.setAttribute('aria-hidden', 'false');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Stop video by wiping media contents
  const mediaEl = modalEl.querySelector('#modalMedia');
  const iframe = mediaEl.querySelector('iframe');
  if (iframe) iframe.src = '';
}

function initModal() {
  // Open on mosaic card click
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.mosaic-card');
    if (card) {
      const idx = parseInt(card.dataset.idx, 10);
      if (!isNaN(idx) && projects[idx]) openModal(projects[idx]);
      return;
    }

    // Play button inside modal
    const playBtn = e.target.closest('.modal-play-btn');
    if (playBtn) {
      const ytId = playBtn.dataset.ytid;
      const mediaEl = playBtn.closest('.modal-media');
      if (!ytId || !mediaEl) return;
      mediaEl.innerHTML = `<iframe
        src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1"
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
      return;
    }

    // Close via X button or backdrop
    if (e.target.closest('#modalClose') || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
}

// ── Custom cursor ─────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || !window.matchMedia('(pointer: fine)').matches) {
    if (cursor) cursor.style.display = 'none';
    return;
  }

  let mx = -100, my = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function moveCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    requestAnimationFrame(moveCursor);
  }
  requestAnimationFrame(moveCursor);

  // Glow on interactive elements
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, summary, [role="button"]')) {
      cursor.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, summary, [role="button"]')) {
      cursor.classList.remove('hovering');
    }
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}

// ── Typewriter effect ─────────────────────────────────────────
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const titles = ['Gameplay Engineer', 'Systems Developer', 'Game Dev'];
  let ti = 0, ci = 0, deleting = false;

  function tick() {
    const current = titles[ti];
    el.textContent = deleting
      ? current.substring(0, ci - 1)
      : current.substring(0, ci + 1);

    if (deleting) ci--;
    else ci++;

    if (!deleting && ci === current.length) {
      setTimeout(() => { deleting = true; tick(); }, 2200);
      return;
    }
    if (deleting && ci === 0) {
      deleting = false;
      ti = (ti + 1) % titles.length;
    }

    setTimeout(tick, deleting ? 45 : 95);
  }

  setTimeout(tick, 900);
}

// ── Stats counter ─────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  let start = null;

  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function initStats() {
  const statsRow = document.querySelector('.stats-row');
  if (!statsRow) return;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      statsRow.querySelectorAll('.stat-value').forEach(animateCounter);
      obs.disconnect();
    }
  }, { threshold: 0.5 });

  obs.observe(statsRow);
}

// ── Scroll reveal ─────────────────────────────────────────────
function initReveal() {
  const sections = document.querySelectorAll('.reveal-section');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(s => obs.observe(s));
}

// ── Smooth scroll (nav + hero CTA) ───────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('.nav-link, .drawer-link, .btn-primary[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const offset = target.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      closeDrawer();
    });
  });
}

// ── Mobile drawer ─────────────────────────────────────────────
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerMask').classList.add('open');
  document.getElementById('drawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  const d = document.getElementById('drawer');
  const m = document.getElementById('drawerMask');
  if (!d || !m) return;
  d.classList.remove('open');
  m.classList.remove('open');
  d.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initDrawer() {
  const burger = document.getElementById('navBurger');
  const mask   = document.getElementById('drawerMask');
  if (burger) burger.addEventListener('click', openDrawer);
  if (mask)   mask.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
}

// ── Nav: highlight active section ─────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => {
          l.style.color = l.getAttribute('href') === `#${id}`
            ? 'var(--accent)'
            : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
}

// ── Nav: add background on scroll ─────────────────────────────
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(0,255,135,0.1)'
      : 'var(--border)';
  }, { passive: true });
}

// ── Featured trailer (click-to-play) ─────────────────────────
function initFeaturedTrailer() {
  const wrap = document.getElementById('ldTrailer');
  if (!wrap) return;
  wrap.addEventListener('click', () => {
    const id = wrap.dataset.ytid;
    if (!id) return;
    wrap.innerHTML = `<iframe
      src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
      title="Lucky Duckies trailer"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
  initModal();
  initCursor();
  initTypewriter();
  initStats();
  initReveal();
  initSmoothScroll();
  initDrawer();
  initActiveNav();
  initNavScroll();
  initFeaturedTrailer();
});
