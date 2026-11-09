<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="88" height="88">
    <rect width="100" height="100" rx="24" fill="#111111"/>
    <rect x="12" y="12" width="76" height="76" rx="16" fill="#F3EEE3"/>
    <path d="M30 68 L50 32 L70 68 Z" fill="#D9541E"/>
    <circle cx="50" cy="54" r="6" fill="#111111"/>
  </svg>
</p>

<h1 align="center">Desktop Suite Web</h1>
<p align="center">
  <strong>Your desktop, alive and transparent.</strong><br>
  Official interactive showcase for <a href="https://github.com/Raflyf/WallpaperLive">WallpaperLive</a> and <a href="https://github.com/Raflyf/TransparentBar">TransparentBar</a>.
</p>

<p align="center">
  <a href="https://github.com/Raflyf/desktop-suite-web/actions"><img src="https://img.shields.io/badge/Vercel-Production%20Ready-111111?style=flat&logo=vercel" alt="Vercel Ready"></a>
  <a href="https://github.com/Raflyf/WallpaperLive"><img src="https://img.shields.io/github/v/release/Raflyf/WallpaperLive?color=D9541E" alt="WallpaperLive"></a>
  <a href="https://github.com/Raflyf/TransparentBar"><img src="https://img.shields.io/github/v/release/Raflyf/TransparentBar?color=111111" alt="TransparentBar"></a>
  <a href="https://yapp.ink/raflyf"><img src="https://img.shields.io/badge/Support-Yapp.ink-ff4b4b?style=flat&logo=ko-fi" alt="Yapp.ink"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/Raflyf/LiveBar?color=586575" alt="LiveBar MIT license"></a>
</p>

<p align="center">
  <a href="#product-showcase">Showcase</a> ·
  <a href="#real-world-task-manager-data">Real Test Data</a> ·
  <a href="#features">Features</a> ·
  <a href="#design-identity">Design Identity</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#deploy-to-vercel">Vercel Deploy</a> ·
  <a href="#support">Support</a>
</p>

---

## Overview

**Desktop Suite Web** is the official unified web portal for two high-performance, native Windows desktop utilities created by [@Raflyf](https://github.com/Raflyf):

1. **[WallpaperLive](https://github.com/Raflyf/WallpaperLive):** Native Windows live wallpaper engine. Plays local videos (MP4, WebM, GIF, MKV) with hardware-accelerated D3D11 decoding via native libmpv and an in-app 3x3 thumbnail library. Playback auto-pauses for maximized or fullscreen apps; resource-use snapshots are documented below.
2. **[TransparentBar](https://github.com/Raflyf/TransparentBar):** Pure native Windows taskbar transparency utility written in Rust. Hooks directly into Windows DWM to remove taskbar opacity without blur or a browser engine. Includes an optional maximized-window connector strip.

The website presents a desktop demo video, native-app screenshots, and resource-use captures before download.

---

## Real-World Task Manager Data

Latest WallpaperLive captures were supplied on 9 November 2026. Values below reproduce the author's [resource-use documentation](https://github.com/Raflyf/WallpaperLive/blob/2307daf3033084f3d4a4f3aa2d2abe85610d802a/README.md#resource-use) and [screenshot source record](https://github.com/Raflyf/WallpaperLive/blob/2307daf3033084f3d4a4f3aa2d2abe85610d802a/assets/screenshots/SOURCES.md). They show separate moments on one Windows setup, not a controlled benchmark.

### WallpaperLive

| State captured in Task Manager | Memory shown | CPU shown | Scope |
| :--- | ---: | ---: | :--- |
| 4K cache preparation (v0.1.6) | 437.5 MB | 42.4% | App plus background cache worker during temporary conversion |
| Cache ready, 3x3 panel open (v0.1.6) | 41.4 MB – 47.4 MB | 1.3% – 2.5% | Two captures: 41.4 MB / 2.5% CPU and 47.4 MB / 1.3% CPU |
| Desktop live playback (v0.1.6) | 37.8 MB | 1.5% | Active wallpaper with Task Manager visible; disk 0 MB/s, network 0 Mbps |
| Fullscreen/maximized auto-pause (v0.1.5 capture) | 4.5 MB | 0% | Earlier paused snapshot reused in the latest documentation |

The earlier v0.1.5 tray-playback capture from 8 November 2026 shows **20.3 MB / 0.5% CPU**. It is not a new v0.1.6 measurement. The [retained source figure](https://github.com/Raflyf/WallpaperLive/blob/main/assets/screenshots/resource-use-v0.1.5.png) shows the original v0.1.5 tray and auto-pause captures unchanged.

Cache preparation is temporary; its app-and-worker row is not steady playback usage. Task Manager rounds CPU values, so displayed 0% does not prove zero work. Its Memory column does not establish total private allocation, all process-tree memory, or dedicated VRAM. Media, codec, display resolution, driver, and cache state affect usage. These captures do not measure GPU utilization or guarantee a RAM ceiling or GPU/VRAM savings.

### TransparentBar

| Host process memory | CPU | Disk | Network |
| ---: | ---: | ---: | ---: |
| 1.6 MB | 0% | 0 MB/s | 0 Mbps |

These are [displayed values at capture time](https://github.com/Raflyf/TransparentBar#resource-use), not a benchmark or upper limit. The row covers the host process only, **excluding the bridge loaded inside Explorer**. CPU is rounded. The two projects were captured separately; these figures are not a measured combined-suite total.

---

## Product Showcase

The first tab keeps the existing desktop demo video. Other tabs show the v0.1.6 native library, TransparentBar detail, and the retained v0.1.5 Task Manager tray/auto-pause figure. The [updated figure](<public/images/resource-use-orange.png>) uses the author’s Burnt Orange metric annotations; Task Manager photo bands and measurements are unchanged. It is bundled locally and displayed at its native aspect ratio. [Photo provenance](<public/images/SOURCES.md>). Capture versions remain historical, not the current download version.

---

## Features

- **Interaction motion:** Repeat-on-entry scroll reveals for all content groups, including headings, cards, bars, controls, and footer, desktop hover lifts, button press feedback, animated showcase captions, and smooth FAQ expansion. CSS and IntersectionObserver only; no animation dependency. Motion stays enabled regardless of device reduced-motion preference by product choice. CSS animations pause while the page is hidden. Only the outer reveal group animates, preventing nested transform conflicts. The demo video pauses when offscreen, hidden by another tab, or the window loses focus; visibility resumes playback from the current position. Manual pause remains respected while scrolling.
- **Light and dark themes:** Navbar switch keeps Cream `#F3EEE3`, Ink Black `#111111`, and Burnt Orange `#D9541E`. Dark is the default; an explicitly saved light theme is preserved when browser storage is available.
- **Official product icons:** Current WallpaperLive and TransparentBar logos are bundled unchanged, including their original colors. [Icon sources](<public/icons/SOURCES.md>).
- **Factual Presentation:** Complete transparency on resource metrics (acknowledging initial conversion peaks alongside resting tray efficiency).
- **Bilingual Support (ID / EN):** One-click language switching between Indonesian and English.
- **Shared release metadata:** Hero versions and download cards use the same GitHub `/releases/latest` response on page load. Drafts and prereleases are excluded from the current version. Installer links and decimal MB sizes follow that release; cumulative counts include `.exe` and `.zip` assets across paginated public releases. API errors show unavailable status and link to GitHub’s latest release, never an invented or hardcoded fallback version. No continuous polling.
- **Sponsorship Integration:** Direct tipping integration via [yapp.ink/raflyf](https://yapp.ink/raflyf).

---

## Design Identity

| Role | Color | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Cream** | Sand White | `#F3EEE3` | Main background, clean light cards, soft borders |
| **Ink Black** | Deep Charcoal | `#111111` | Editorial headings, dark surfaces, monitor bezels |
| **Burnt Orange** | Vibrant Accent | `#D9541E` | Action buttons, highlighted badges, active state indicators |

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono
- **Deployment:** [Vercel](https://vercel.com/) (Zero-config static deployment via `vercel.json`)

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Raflyf/desktop-suite-web.git
cd desktop-suite-web

# Install dependencies
bun install
# or
npm install

# Start local development server
bun run dev
# or
npm run dev
```

### Verification

Run `node motion-check.mjs` for repeat reveals, scroll direction, video visibility and focus, resume position, manual pause, and cleanup.

Run `node release-check.mjs` for release selection, link validation, pagination, error states, and theme bootstrap checks. Run `node benchmark-check.mjs` for source figures, both languages, and unchanged demo-video bytes. Node.js 22.18+ or 24 is required; the benchmark check also needs internet access.

### Build for Production
```bash
bun run build
# or
npm run build
```

---

## Deploy to Vercel

1. Connect `Raflyf/LiveBar` to the existing Vercel project `desktop-suite-web` with Production Branch `main`.
2. Use the **Vite** preset and output directory `dist`.
3. Enable GitHub deployment records in Project Settings > Git (`gitProviderOptions.createDeployments: "enabled"`). Vercel records deployment state and the production URL in GitHub.
4. Push to `main` and verify the resulting deployment SHA and [production website](https://livebar.vercel.app/).

The native Git integration handles deployment; no parallel Actions deployment or CLI upload is needed. Creating a GitHub environment alone does not deploy the website.

---

## Support

Both **WallpaperLive** and **TransparentBar** are completely free, open-source, and privacy-respecting (zero analytics, zero ads).

If you find these projects helpful, consider supporting their ongoing development:

<p align="center">
  <a href="https://yapp.ink/raflyf">
    <img src="https://img.shields.io/badge/Support%20on%20Yapp-D9541E?style=for-the-badge&logo=heart&logoColor=white" alt="Support on Yapp">
  </a>
</p>

- Tip directly via QRIS, Card, E-Wallet, or USDT at **[yapp.ink/raflyf](https://yapp.ink/raflyf)**.

---

## License

LiveBar’s original website code and documentation are licensed under [MIT](<LICENSE>). Copyright (c) 2026 Raflyf.

The showcased applications remain separately licensed:
- [WallpaperLive](https://github.com/Raflyf/WallpaperLive): [GPL-3.0-or-later](https://github.com/Raflyf/WallpaperLive/blob/main/LICENSE).
- [TransparentBar](https://github.com/Raflyf/TransparentBar): [MIT](https://github.com/Raflyf/TransparentBar/blob/main/LICENSE.md).

Third-party dependencies retain their own licenses. Product logos, screenshots, demo videos, and wallpaper artwork are not automatically covered by LiveBar’s MIT license; their original rights and permissions remain in force. See [icon sources](<public/icons/SOURCES.md>) and [figure sources](<public/images/SOURCES.md>).
