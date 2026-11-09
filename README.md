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
  <a href="https://github.com/Raflyf/TransparentBar"><img src="https://img.shields.io/badge/TransparentBar-Rust%20Native-285ac7?style=flat&logo=rust" alt="TransparentBar"></a>
  <a href="https://yapp.ink/raflyf"><img src="https://img.shields.io/badge/Support-Yapp.ink-ff4b4b?style=flat&logo=ko-fi" alt="Yapp.ink"></a>
  <a href="#license"><img src="https://img.shields.io/badge/license-GPL--3.0%20%7C%20MIT-586575" alt="License"></a>
</p>

<p align="center">
  <a href="#interactive-simulator">Simulator</a> ·
  <a href="#features">Features</a> ·
  <a href="#design-identity">Design Identity</a> ·
  <a href="#performance">Performance</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#deploy-to-vercel">Vercel Deploy</a> ·
  <a href="#support">Support</a>
</p>

---

## Overview

**Desktop Suite Web** is the official unified web portal for two high-performance, ultra-lightweight Windows desktop tools created by [@Raflyf](https://github.com/Raflyf):

1. **[WallpaperLive](https://github.com/Raflyf/WallpaperLive):** Native Windows engine playing local videos (MP4, WebM) and GIFs as desktop wallpaper with hardware-accelerated Direct3D decoding and an interactive 3x3 thumbnail manager.
2. **[TransparentBar](https://github.com/Raflyf/TransparentBar):** Pure native Windows taskbar transparency utility written in Rust. Strips the opaque background via direct DWM API hooks while taking less than 2 MB of RAM.

Inspired by [Nusa](https://rama2555.github.io/nusa), this landing page features an in-browser **Interactive Desktop Simulator**, allowing users to experience dynamic live wallpapers and switch taskbar transparency modes (`Clear`, `Blur`, `Acrylic`, `Opaque`) in real time before downloading.

---

## Interactive Simulator

The website includes a live 60 FPS procedural desktop canvas:
- **Wallpaper Presets:** Warm Fluid Mesh, Cyberpunk Horizon Grid, and Minimal Aurora Wave.
- **Dynamic Taskbar Switching:** Instantly alters taskbar transparency styles (`Clear`, `Blur`, `Acrylic`, `Opaque`) with live Windows 11 icons, system tray, and real-time clock.
- **Smart Game Suspend Simulation:** Pauses background canvas rendering when full-screen applications are simulated, demonstrating 0.0% idle CPU behavior.

---

## Features

- **Editorial Warm Minimalist Aesthetic:** Curated color palette (Cream `#F3EEE3`, Ink Black `#111111`, Burnt Orange `#D9541E`).
- **Interactive Live Preview:** Full browser simulation of native Windows utilities.
- **Bilingual Support (ID / EN):** One-click language switching between Indonesian and English without page reload.
- **Resource Footprint Visualizer:** Evidence-backed benchmark charts comparing memory and CPU load against heavy Electron alternatives.
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

## Performance

| Metric | WallpaperLive + TransparentBar | Wallpaper Engine + TranslucentTB | Web / Electron Utilities |
| :--- | :--- | :--- | :--- |
| **RAM Footprint** | **~20 MB** (~18 MB + ~2 MB) | ~260 MB | 350 MB – 500 MB |
| **Idle CPU Usage** | **0.0%** (Auto-suspend) | 1.5% – 3.0% | 2.0% – 6.0% |
| **Installation Size** | **< 5 MB** | ~350 MB | ~120 MB |
| **Startup Overhead** | **< 0.2s** | ~3.5s | ~5.2s |

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

### Prerequisites
- Node.js 20+ or [Bun](https://bun.sh/)

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/Raflyf/desktop-suite-web.git
cd desktop-suite-web

# Install dependencies (Bun or NPM)
bun install
# or
npm install

# Start development server
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
2. Go to [vercel.com/new](https://vercel.com/new).
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
