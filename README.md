<p align="center">
  <img src="public/favicon.svg" alt="LivelyDesk" width="88" height="88">
</p>

<h1 align="center">LivelyDesk</h1>
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

**LivelyDesk** is the official unified web portal for two high-performance, native Windows desktop utilities created by [@Raflyf](https://github.com/Raflyf):

1. **[WallpaperLive](https://github.com/Raflyf/WallpaperLive):** Native Windows live wallpaper engine. Plays local videos (MP4, WebM, GIF, MKV) with hardware-accelerated D3D11 decoding via native libmpv and an in-app 3x3 thumbnail library. Playback auto-pauses for maximized or fullscreen apps; resource-use snapshots are documented below.
2. **[TransparentBar](https://github.com/Raflyf/TransparentBar):** Native Rust taskbar transparency with legacy and XAML taskbar support. The tray controls an optional maximized-window connector, its grid pattern and color transitions, startup at sign-in (off by default), and GitHub release checks.

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

The website displays these values in the table only; the source crop is retained for attribution.

| Host process memory | CPU | Disk | Network |
| ---: | ---: | ---: | ---: |
| 3.9 MB | 0% | 0 MB/s | 0 Mbps |

Values follow the [updated TransparentBar README](https://github.com/Raflyf/TransparentBar/blob/e6c17bf9f730921666fb74a82517669e2fdcd056/README.md#resource-use) and its [v0.2.4 Task Manager crop](<public/images/transparentbar-resource-use-v0.2.4.png>). The row covers the host process only, **excluding the bridge loaded inside Explorer**. CPU is rounded; these are capture-time values, not a benchmark or upper limit. The two projects were captured separately.

TransparentBar requires Windows 10 or 11 on x64; ARM64 is not supported. Its connector supports primary and secondary bottom-docked taskbars with auto-hide off. Fullscreen windows hide the connector; display sleep and session lock pause sampling. Keep the portable executable and its versioned bridge DLL together. Select **Exit** to restore the saved taskbar appearance.

---

## Product Showcase

The first tab keeps the existing desktop demo video. Other tabs show the v0.1.6 native library, TransparentBar detail, and the retained v0.1.5 Task Manager tray/auto-pause figure. The [updated figure](<public/images/resource-use-orange.png>) uses the author’s Burnt Orange metric annotations; Task Manager photo bands and measurements are unchanged. It is bundled locally and displayed at its native aspect ratio. [Photo provenance](<public/images/SOURCES.md>). Capture versions remain historical, not the current download version.

---

## Features

- **Interaction motion:** Repeat-on-entry scroll reveals for all content groups, including headings, cards, bars, controls, and footer, desktop hover lifts, button press feedback, animated showcase captions, and smooth FAQ expansion. Reveal uses CSS and two IntersectionObserver boundaries: enter 32px inside the viewport, reset only 160px outside. This prevents moving elements from repeatedly restarting at the edge. Elements fade from zero opacity and move 44px (56px for the headline), without nested reveal transforms. Motion stays enabled regardless of device reduced-motion preference by product choice. CSS animations pause while the page is hidden. Only the outer reveal group animates, preventing nested transform conflicts. The demo video pauses when offscreen, hidden by another tab, or the window loses focus; visibility resumes playback from the current position. Manual pause remains respected while scrolling.
- **Smooth scrolling:** Lenis smooths wheel input and section navigation with one shared scroll engine. Touch scrolling stays native. Its frame loop runs only during input/inertia, stops when idle, and is canceled while the page is hidden. Keyboard scrolling can interrupt inertia. No canvas, blur, or scroll-linked React state.
- **Light and dark themes:** Navbar switch keeps Cream `#F3EEE3`, Ink Black `#111111`, and Burnt Orange `#D9541E`. Dark is the default; an explicitly saved light theme is preserved when browser storage is available.
- **Official product icons:** Current WallpaperLive and TransparentBar logos are bundled unchanged, including their original colors. [Icon sources](<public/icons/SOURCES.md>).
- **Resource usage:** Task Manager captures cover cache preparation, desktop playback, and auto-pause.
- **Bilingual Support (ID / EN):** Indonesian and English have separate URLs. The language switch follows the selected page language.
- **Shared release metadata:** Hero versions and download cards use the same GitHub `/releases/latest` response on page load. Drafts and prereleases are excluded from the current version. Installer links and decimal MB sizes follow that release; cumulative counts include `.exe` and `.zip` assets across paginated public releases. API errors show unavailable status and link to GitHub’s latest release, never an invented or hardcoded fallback version. No continuous polling.
- **Support options:** Separate [Yapp](https://yapp.ink/raflyf) and [Saweria](https://saweria.co/BuyMatcha) cards with cream and ink surfaces inside a shared frame, side by side on wider screens and stacked on phones. The navbar Support button scrolls to these cards rather than opening a payment platform. Each card opens its own platform, where the contribution amount is chosen.

---

## Design Identity

The [LivelyDesk mark](<public/favicon.svg>) uses layered desktop panels, copper-colored edges, a wallpaper wave, and a translucent taskbar. Browser icons, header, and footer share the design. WallpaperLive and TransparentBar retain their own product icons.

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

## Documentation

The [English guide](https://livelydesk.vercel.app/doc) and [Indonesian guide](https://livelydesk.vercel.app/doc/id) cover installation, local media, playback, taskbar controls, updates, data handling, and troubleshooting. The Docs link in the navbar and footer follows the selected language.

[Guide content](<src/docs/content.ts>) records the upstream README revisions in `docSources`. Update both languages together when those instructions change. Vite renders the content into HTML at build time using [the documentation renderer](<src/docs/render.ts>); it does not fetch remote documentation during a build. Both guides remain readable without JavaScript. The shared static-page script handles saved theme, language preference, and the mobile table of contents. Product pages and Docs use the homepage's reveal and Lenis smooth-scroll modules, including repeated reveals, hover/press feedback, idle/hidden-page suspension, and native touch scrolling. In-page links retain their hash and keyboard focus, the sidebar scrolls independently, and print output stays visible. Back/forward cache restores motion without duplicate listeners. Video and release-fetch code stays on the homepage.

The guide routes `/doc` and `/doc/id` use explicit rewrites in [vercel.json](<vercel.json>), alongside the home and product language routes. Unknown paths retain normal 404 behavior; the Google verification file is unchanged. Local Vite serves directory pages with a trailing slash, including `/doc/` and `/doc/id/`.

## Search visibility

- Home: [English](https://livelydesk.vercel.app/) and [Indonesia](https://livelydesk.vercel.app/id).
- WallpaperLive: [English](https://livelydesk.vercel.app/wallpaperlive) and [Indonesia](https://livelydesk.vercel.app/wallpaperlive/id), covering live wallpaper apps for Windows 10/11 and local video/GIF playback.
- TransparentBar: [English](https://livelydesk.vercel.app/transparentbar) and [Indonesia](https://livelydesk.vercel.app/transparentbar/id), covering transparent taskbar setup and compatibility.

Vite renders the homepage from the same React components it hydrates in the browser. The route selects the language; saved theme and live release data load after hydration. Returning to `/` with a saved Indonesian preference opens `/id`; choosing EN explicitly clears that preference before navigation. Fresh visitors receive the same English HTML regardless of user agent. Product and guide pages keep static HTML and enhance it with the shared theme and motion script. Content remains visible when JavaScript is unavailable. Crawlers and visitors receive the same content; no user-agent routing, invented reviews, or hidden keyword lists. Canonicals, reciprocal language alternatives, product schema, internal links, and [sitemap.xml](<public/sitemap.xml>) use the published URLs.

Query wording was checked against public Google autocomplete on 10 November 2026: [live wallpaper Windows](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=live%20wallpaper%20windows), [transparent taskbar](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=transparent%20taskbar), [wallpaper bergerak](https://suggestqueries.google.com/complete/search?client=firefox&hl=id&gl=id&q=wallpaper%20bergerak), and [taskbar transparan](https://suggestqueries.google.com/complete/search?client=firefox&hl=id&gl=id&q=taskbar%20transparan). These suggestions establish phrasing, not search volume, difficulty, or current rankings. The app pages do not promise downloadable wallpaper collections or a taskbar solution without running an app.

After publishing, review Search Console indexing and queries for the new URLs. Compare impressions, clicks, and position over time; neither a sitemap nor these changes guarantees indexing or a top result. See [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=en).

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

Run `node seo-check.mjs` after `bun run build` to check the eight generated pages, metadata, product schema, language alternatives, and internal links without network requests.

Run `node docs-check.mjs` after `bun run build` to check guide parity, static output, section links, metadata, escaping, and source references without external API requests.

Run `node motion-check.mjs` for repeat reveals, video visibility, shared Docs/product anchor navigation, keyboard focus, modifier keys, and back/forward-cache lifecycle cleanup.

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
4. Push to `main` and verify the resulting deployment SHA and [production website](https://livelydesk.vercel.app/).

The native Git integration handles deployment; no parallel Actions deployment or CLI upload is needed. Creating a GitHub environment alone does not deploy the website.

---

## Support

WallpaperLive and TransparentBar are free, open-source Windows apps.

If you find these projects helpful, consider supporting their ongoing development:

<p align="center">
  <a href="https://yapp.ink/raflyf">
    <img src="https://img.shields.io/badge/Support%20on%20Yapp-D9541E?style=for-the-badge&logo=heart&logoColor=white" alt="Support on Yapp">
  </a>
</p>

- Tip directly via QRIS, Card, E-Wallet, or USDT at **[yapp.ink/raflyf](https://yapp.ink/raflyf)**.
- Support through **[Saweria (BuyMatcha)](https://saweria.co/BuyMatcha)**.

---

## License

LiveBar’s original website code and documentation are licensed under [MIT](<LICENSE>). Copyright (c) 2026 Raflyf.

The showcased applications remain separately licensed:
- [WallpaperLive](https://github.com/Raflyf/WallpaperLive): [GPL-3.0-or-later](https://github.com/Raflyf/WallpaperLive/blob/main/LICENSE).
- [TransparentBar](https://github.com/Raflyf/TransparentBar): [MIT](https://github.com/Raflyf/TransparentBar/blob/main/LICENSE.md).

Third-party dependencies retain their own licenses. Product logos, screenshots, demo videos, and wallpaper artwork are not automatically covered by LiveBar’s MIT license; their original rights and permissions remain in force. See [icon sources](<public/icons/SOURCES.md>) and [figure sources](<public/images/SOURCES.md>).
