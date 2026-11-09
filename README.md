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
  <a href="https://github.com/Raflyf/WallpaperLive"><img src="https://img.shields.io/badge/WallpaperLive-v0.1.6-D9541E?style=flat&logo=windows" alt="WallpaperLive"></a>
  <a href="https://github.com/Raflyf/TransparentBar"><img src="https://img.shields.io/badge/TransparentBar-v0.2.3-285ac7?style=flat&logo=rust" alt="TransparentBar"></a>
  <a href="https://yapp.ink/raflyf"><img src="https://img.shields.io/badge/Support-Yapp.ink-ff4b4b?style=flat&logo=ko-fi" alt="Yapp.ink"></a>
  <a href="#license"><img src="https://img.shields.io/badge/license-GPL--3.0%20%7C%20MIT-586575" alt="License"></a>
</p>

<p align="center">
  <a href="#interactive-simulator">Simulator</a> ·
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

1. **[WallpaperLive](https://github.com/Raflyf/WallpaperLive):** Native Windows live wallpaper engine. Plays local videos (MP4, WebM, GIF, MKV) with hardware-accelerated D3D11 decoding via native libmpv and an in-app 3x3 thumbnail library. When an app is maximized or fullscreen, auto-pause drops RAM to 4.5 MB.
2. **[TransparentBar](https://github.com/Raflyf/TransparentBar):** Pure native Windows taskbar transparency utility written in Rust. Hooks directly into Windows DWM to remove taskbar opacity without blur or bulky UI runtimes (1.6 MB memory footprint). Includes an optional maximized-window connector strip.

Inspired by [Nusa](https://rama2555.github.io/nusa), this landing page features an in-browser **Interactive Desktop Simulator**, allowing users to experience live dynamic wallpapers and toggle taskbar features before downloading.

---

## Real-World Task Manager Data (Measured Evidence)

No synthetic benchmarks or exaggerated marketing numbers. Below are the author-documented Windows 11 x64 Task Manager captures recorded on **8 November 2026** directly from the official repositories.

### 1. WallpaperLive Resource Usage (v0.1.5 capture)

| State captured in Task Manager | Memory shown | CPU shown | What the row includes |
| :--- | ---: | ---: | :--- |
| **Background cache preparation** | **348.9 MB – 409.3 MB** | **42.5% – 50.3%** | App plus background cache worker (temporary SDR display cache conversion) |
| **Cache ready, panel open** | **43.1 MB – 45.4 MB** | **1.3% – 2.6%** | WallpaperLive app with library and controls visible |
| **Minimized to tray (live playback)** | **20.3 MB** | **0.5%** | WallpaperLive actively rendering live wallpaper on desktop (Disk: 0.5 MB/s, Net: 0) |
| **Fullscreen/maximized auto-pause** | **4.5 MB** | **0%** | Playback paused automatically, resident pages trimmed down |

> **Author context note:** The temporary peak around 350–410 MB occurs during initial cache conversion where two decoder/encoder processes run concurrently. Once cached and minimized to tray, memory settles to **20.3 MB / 0.5% CPU**, and drops to **4.5 MB / 0% CPU** on auto-pause. Task Manager rounds live values; media, codec, display resolution, and GPU driver affect usage.

### 2. TransparentBar Resource Usage (Capture time)

| Host Process Memory | CPU | Disk | Network |
| :--- | :--- | :--- | :--- |
| **1.6 MB** | **0%** | **0 MB/s** | **0 Mbps** |

> **Author context note:** The highlighted row covers the host process. Usage varies with Windows version and desktop activity. Pure native Rust with zero webview or bundled browser engine.

---

## Interactive Simulator

The website provides a 60 FPS procedural desktop canvas demonstrating both utilities in action:
- **Procedural Wallpapers:** Warm Sunset Mesh, Cyberpunk Horizon Grid, and Minimal Aurora Wave.
- **Taskbar Modes:** Transparent (Clear background), Maximized-Window Connector Strip, and Default Windows Opaque.
- **Interactive HUD:** Displays real-time Task Manager metrics (20.3 MB active, 4.5 MB auto-paused, 1.6 MB taskbar).

---

## Features

- **Editorial Warm Minimalist Aesthetic:** Curated color palette (Cream `#F3EEE3`, Ink Black `#111111`, Burnt Orange `#D9541E`).
- **Factual Presentation:** Complete transparency on resource metrics (acknowledging initial conversion peaks alongside resting tray efficiency).
- **Bilingual Support (ID / EN):** One-click language switching between Indonesian and English.
- **Download Hub:** Direct GitHub Releases links for installers (`.exe`), portable archives (`.zip`), and source code repositories.
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

### Build for Production
```bash
bun run build
# or
npm run build
```

---

## Deploy to Vercel

1. Push your repository to GitHub.
2. Open [vercel.com/new](https://vercel.com/new).
3. Import `Raflyf/desktop-suite-web`.
4. Vercel automatically detects the preset from `vercel.json` (Framework: **Vite**, Output Directory: `dist`).
5. Click **Deploy**.

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

- [WallpaperLive](https://github.com/Raflyf/WallpaperLive) is licensed under [GPL-3.0-or-later](https://github.com/Raflyf/WallpaperLive/blob/main/LICENSE).
- [TransparentBar](https://github.com/Raflyf/TransparentBar) is licensed under [MIT](https://github.com/Raflyf/TransparentBar/blob/main/LICENSE.md).
- This website presentation is open source.
