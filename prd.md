# Product Requirements Document (PRD)
## Proyek: WallpaperLive + TransparentBar Unified Web
**Target Deploy:** Vercel  
**Developer Profile:** [yapp.ink/raflyf](https://yapp.ink/raflyf)  
**Referensi Desain & UX:** [rama2555.github.io/nusa](https://rama2555.github.io/nusa)  
**Inspirasi Estetika:** Editorial Warm Minimalist (Cream, Ink Black, Burnt Orange)

---

## 1. Identitas Visual & Color Palette

Berdasarkan spesifikasi desain:
- **Cream (Latar Utama & Kartu Terang):** `#F3EEE3`
- **Ink Black (Tipografi Utama, Dark Cards, Frame Mockup):** `#111111`
- **Burnt Orange (Aksen Tombol Utama, Badge Sorotan, Active States):** `#D9541E`
- **Warna Pendukung:**
  - Cream Muted / Border: `rgba(17, 17, 17, 0.08)`
  - Dark Muted: `#1A1A1A`
  - Text Secondary: `#666666`

---

## 2. Visi Produk & Ringkasan

Menyatukan dua utilitas Windows open-source karya Raflyf ke dalam satu landing page web yang interaktif:
1. **WallpaperLive** (Video / GIF / Image Desktop Engine)
2. **TransparentBar** (Native Rust Windows Taskbar Transparency)

Web berfungsi sebagai:
- **Showcase Interaktif:** Pengunjung dapat mencoba simulator desktop (mengganti animasi wallpaper dan mode transparansi taskbar secara real-time langsung di browser).
- **Portal Unduhan:** Distribusi binary installer dan portable zip resmi dari GitHub Releases.
- **Kanal Dukungan Finansial:** Integrasi kartu donasi dan tip langsung ke **Yapp.ink/raflyf**.

---

## 3. Fitur Utama Web

### 3.1 Header & Navigasi
- Brand identifier ("WallpaperLive & TransparentBar").
- Anchor links: Simulator, Fitur, Benchmark, Download, Dukung.
- Language Switcher (EN / ID).
- CTA Cepat: Tombol "Download" dan tombol "Dukung di Yapp".

### 3.2 Hero Section
- Status Tag: `Windows 10 & 11 · 64-bit · Native & Lightweight`.
- Headline besar dengan sentuhan editorial: `Desktop Anda, Hidup dan Transparan.`
- Sub-headline ringkas mengenai sinergi WallpaperLive + TransparentBar.
- Tombol aksi utama (Burnt Orange) untuk mengunduh dan secondary link ke Yapp.

### 3.3 Interactive Desktop Simulator (Fitur Utama ala Nusa)
Frame monitor desktop Windows 11 interaktif:
1. **Wallpaper Canvas Simulator:**
   - 3 preset visual hidup (Wave Minimalist, Cyber Glow, Sunset Horizon).
   - Play/Pause state, indikator simulasi RAM (~18 MB).
2. **TransparentBar Simulator:**
   - Selector 4 mode taskbar:
     - `Clear` (Transparan 100% tembus wallpaper).
     - `Blur` (Kaca kabur / Frosted glass).
     - `Acrylic` (Tekstur akrilik Windows).
     - `Opaque` (Taskbar pekat default).
   - Taskbar mockup interaktif di bagian bawah frame dengan icon Windows dan jam live.
3. **Floating Controls Bar:**
   - Switch wallpaper dan switch mode taskbar langsung di atas simulator.

### 3.4 Bento Grid Fitur Terpadu
1. **Performa Native Rust & Win32:** Zero overhead, startup instan di tray.
2. **Smart Battery & Game Detect:** Wallpaper pause otomatis saat ada jendela fullscreen.
3. **Multi-Display Independence:** Taskbar dan wallpaper adaptif di layar ganda.
4. **Local & Private:** Tanpa koneksi internet background, tanpa telemetri pihak ketiga.

### 3.5 Resource Benchmark (Komparasi RAM & CPU)
- Diagram batang interaktif:
  - WallpaperLive + TransparentBar: **~20 MB RAM | 0.0% CPU Idle**.
  - Wallpaper Engine + TranslucentTB: **~250 MB+ RAM**.

### 3.6 Download Hub
- Tab rilis untuk masing-masing aplikasi atau paket unduhan gabungan:
  - Installer Windows (`.exe`)
  - Portable Archive (`.zip`)
  - Link Source Code GitHub (`Raflyf/WallpaperLive` & `Raflyf/TransparentBar`)
  - Checksum SHA-256 dan persyaratan sistem minimum (Windows 10 1903+ / Windows 11).

### 3.7 Integrasi Donasi Yapp (Support Developer)
- Kartu khusus profil Raflyf.
- Deskripsi kontribusi open-source.
- Tombol direct external link menuju `https://yapp.ink/raflyf`.

### 3.8 Footer
- Lisensi proyek (GPL-3.0 & MIT).
- Link repository GitHub, changelog, dan report issue.

---

## 4. Alur & Spesifikasi Teknis Pembuatan

1. **Inisialisasi Project:** React + TypeScript + Vite + Tailwind CSS.
2. **Palette Configuration:** Daftarkan `cream (#F3EEE3)`, `ink (#111111)`, dan `burnt (#D9541E)` pada konfigurasi Tailwind / CSS variables.
3. **State Management:** React useState untuk state simulator (pilihan wallpaper, taskbar mode, pause state) dan bahasa (EN/ID).
4. **Vercel Deployment:** Konfigurasi Vercel build script (`npm run build` -> output `dist`).
