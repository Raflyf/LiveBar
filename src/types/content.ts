export type Language = 'id' | 'en';

export interface Translation {
  nav: {
    simulator: string;
    features: string;
    benchmark: string;
    download: string;
    support: string;
    downloadBtn: string;
    supportBtn: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metaInfo: string;
    stat1: string;
    stat1Sub: string;
    stat2: string;
    stat2Sub: string;
    stat3: string;
    stat3Sub: string;
  };
  simulator: {
    title: string;
    subtitle: string;
    tag: string;
    tabs: {
      desktop: string;
      library: string;
      taskbar: string;
      telemetry: string;
    };
    captions: {
      desktopTitle: string;
      desktopDesc: string;
      libraryTitle: string;
      libraryDesc: string;
      taskbarTitle: string;
      taskbarDesc: string;
      telemetryTitle: string;
      telemetryDesc: string;
    };
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      f1Title: string;
      f1Desc: string;
      f2Title: string;
      f2Desc: string;
      f3Title: string;
      f3Desc: string;
      f4Title: string;
      f4Desc: string;
      f5Title: string;
      f5Desc: string;
      f6Title: string;
      f6Desc: string;
    };
  };
  benchmark: {
    badge: string;
    title: string;
    subtitle: string;
    stateCol: string;
    ramCol: string;
    cpuCol: string;
    notesCol: string;
    row1State: string;
    row1Ram: string;
    row1Cpu: string;
    row1Notes: string;
    row2State: string;
    row2Ram: string;
    row2Cpu: string;
    row2Notes: string;
    row3State: string;
    row3Ram: string;
    row3Cpu: string;
    row3Notes: string;
    row4State: string;
    row4Ram: string;
    row4Cpu: string;
    row4Notes: string;
    tbRowState: string;
    tbRowRam: string;
    tbRowCpu: string;
    tbRowNotes: string;
    disclaimer: string;
    contextTitle: string;
  };
  download: {
    badge: string;
    title: string;
    subtitle: string;
    wpTitle: string;
    wpDesc: string;
    tbTitle: string;
    tbDesc: string;
    installerBtn: string;
    portableBtn: string;
    sourceBtn: string;
    requirements: string;
    checksumNote: string;
    downloadsSoFar: string;
    latest: string;
    latestRelease: string;
    version: string;
    about: string;
    releaseLoading: string;
    releaseUnavailable: string;
    downloadsUnavailable: string;
  };
  support: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    tier1: string;
    tier2: string;
    tier3: string;
    customTip: string;
    yappBtn: string;
    guarantee: string;
  };
  faq: {
    badge: string;
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  footer: {
    rights: string;
    byDeveloper: string;
    licensedUnder: string;
    openSourcePromise: string;
  };
}

export const translations: Record<Language, Translation> = {
  id: {
    nav: {
      simulator: "Simulator",
      features: "Fitur",
      benchmark: "Data Pengujian",
      download: "Unduh",
      support: "Dukungan",
      downloadBtn: "Unduh Suite",
      supportBtn: "Traktir di Yapp",
    },
    hero: {
      badge: "Tersedia untuk Windows 10 & 11 · 64-bit · Native Rust",
      titlePart1: "Desktop Anda,",
      titlePart2: "hidup dan transparan.",
      subtitle: "WallpaperLive memutar video dan GIF lokal dengan dekoder libmpv native. TransparentBar menghapus latar taskbar melalui hook Win32 DWM murni berbasis Rust. Ringan, transparan, dan tanpa overclaim.",
      ctaPrimary: "Unduh Gratis (Windows)",
      ctaSecondary: "Dukung di Yapp.ink",
      metaInfo: "Bebas Iklan",
      stat1: "37.8 MB",
      stat1Sub: "WallpaperLive desktop · cuplikan v0.1.6 (1.5% CPU)",
      stat2: "1.6 MB",
      stat2Sub: "Host TransparentBar · cuplikan (0% CPU)",
      stat3: "4.5 MB",
      stat3Sub: "Auto-pause · cuplikan v0.1.5 (0% CPU)",
    },
    simulator: {
      title: "Tampilan Antarmuka & Bukti Nyata",
      subtitle: "Tangkapan layar asli dari aplikasi yang berjalan di Windows 11. Tanpa animasi kanvas buatan, tanpa mockup fiktif.",
      tag: "Tangkapan Layar Resmi (Windows 11)",
      tabs: {
        desktop: "Desktop & Taskbar Transparan",
        library: "Panel Kontrol & Library 3x3",
        taskbar: "Detail TransparentBar",
        telemetry: "Bukti Task Manager",
      },
      captions: {
        desktopTitle: "Wallpaper Aktif dengan Taskbar Tembus Pandang",
        desktopDesc: "Tangkapan layar v0.1.5 asli pada 8 November 2026. WallpaperLive memutar video di latar belakang dan TransparentBar menghilangkan bilah taskbar.",
        libraryTitle: "Library Thumbnail 3x3 Asli",
        libraryDesc: "Antarmuka native Rust/Win32 v0.1.6 dengan grid library 3x3, filter folder, pemilihan multi-file, kontrol FPS (24/30/45/60), dan pengelolaan cache lokal.",
        taskbarTitle: "Taskbar Transparan Windows 11 Murni",
        taskbarDesc: "Wallpaper tetap terlihat jelas di balik icon aplikasi Windows 11 tanpa efek blur berat. Mengait langsung ke DWM API.",
        telemetryTitle: "Tangkapan Layar Task Manager Asli",
        telemetryDesc: "Cuplikan asli v0.1.5 yang dipertahankan di repo: wallpaperlive.exe menunjukkan 20.3 MB / 0.5% CPU di tray dan 4.5 MB / 0% CPU saat auto-pause. Diambil pada waktu berbeda, bukan pengujian baru v0.1.6.",
      },
    },
    features: {
      badge: "Spesifikasi Nyata",
      title: "Arsitektur Native Tanpa Runtime Web.",
      subtitle: "Dibangun murni dengan Rust dan Win32 API. Tanpa Chromium, tanpa Node.js di desktop, tanpa akun wajib.",
      items: {
        f1Title: "Playback Video Lokal & Cache Background",
        f1Desc: "Mendukung MP4, WebM, GIF, MKV, MOV, APNG. Video langsung diputar sementara cache resolusi layar disiapkan di latar belakang.",
        f2Title: "Taskbar Transparan Native",
        f2Desc: "Cuplikan Task Manager menunjukkan host TransparentBar memakai 1.6 MB. Angka ini tidak mencakup bridge di Explorer dan bukan batas memori.",
        f3Title: "Auto-Pause saat Fullscreen",
        f3Desc: "Pemutaran dijeda saat aplikasi fullscreen atau dimaksimalkan. Cuplikan v0.1.5 menunjukkan 4.5 MB dan 0% CPU, bukan batas penggunaan yang dijamin.",
        f4Title: "Maximized-Window Connector Strip",
        f4Desc: "Fitur opsional strip gradasi lembut di tepi bawah jendela yang dimaksimalkan, mengambil sampel 4 piksel pada 16ms/64ms.",
        f5Title: "Framerate Cap 24 / 30 / 45 / 60 FPS",
        f5Desc: "Pengaturan FPS langsung dari menu Placement tanpa konversi ulang file atau intervensi frame interpolation buatan.",
        f6Title: "Privasi Penuh & Zero Telemetry",
        f6Desc: "Seluruh berkas media dan piksel berada di memori lokal. Jaringan hanya digunakan jika pengguna memilih cek update GitHub.",
      },
    },
    benchmark: {
      badge: "Cuplikan WallpaperLive v0.1.6 · 9 November 2026",
      title: "Penggunaan Sumber Daya di Task Manager.",
      subtitle: "Data terbaru dari tangkapan penulis WallpaperLive di Windows 11, disertai cuplikan auto-pause sebelumnya dan proses host TransparentBar.",
      stateCol: "Kondisi / Status Aplikasi",
      ramCol: "Memori (Task Manager)",
      cpuCol: "Beban CPU",
      notesCol: "Keterangan Proses",
      contextTitle: "Konteks dan batas pengukuran",
      row1State: "Persiapan Cache 4K (v0.1.6)",
      row1Ram: "437.5 MB",
      row1Cpu: "42.4%",
      row1Notes: "Aplikasi + background cache worker (konversi sementara; persiapan awal media 4K resolusi tinggi).",
      row2State: "Cache Siap, Panel 3x3 Terbuka (v0.1.6)",
      row2Ram: "41.4 MB – 47.4 MB",
      row2Cpu: "1.3% – 2.5%",
      row2Notes: "Dua cuplikan panel: 41.4 MB / 2.5% CPU dan 47.4 MB / 1.3% CPU. Sembilan thumbnail per halaman.",
      row3State: "Pemutaran Desktop (v0.1.6)",
      row3Ram: "37.8 MB",
      row3Cpu: "1.5%",
      row3Notes: "Wallpaper aktif dengan Task Manager terlihat. Cuplikan menunjukkan disk 0 MB/s dan jaringan 0 Mbps.",
      row4State: "Auto-Pause (Cuplikan v0.1.5)",
      row4Ram: "4.5 MB",
      row4Cpu: "0%",
      row4Notes: "Cuplikan 8 November 2026 yang digunakan kembali dalam dokumentasi terbaru. Menunjukkan pemutaran dijeda, bukan hasil uji baru v0.1.6.",
      tbRowState: "TransparentBar (Host Process Aktif)",
      tbRowRam: "1.6 MB",
      tbRowCpu: "0%",
      tbRowNotes: "Cuplikan host: 1.6 MB, 0% CPU, disk 0 MB/s, jaringan 0 Mbps. Tidak mencakup bridge yang dimuat di Explorer.",
      disclaimer: "Persiapan cache 4K sementara mencakup aplikasi dan worker; panel serta desktop menampilkan kondisi lain. Cuplikan tray 20.3 MB / 0.5% CPU dan auto-pause 4.5 MB / 0% CPU berasal dari v0.1.5. Ini momen terpisah, bukan benchmark terkontrol. Task Manager membulatkan CPU; 0% bukan bukti nol aktivitas. Kolom Memory bukan total alokasi privat, seluruh process tree, atau VRAM. Host TransparentBar tidak mencakup bridge Explorer. Media, codec, resolusi, driver, dan status cache memengaruhi hasil; tidak ada batas RAM atau penghematan GPU/VRAM yang dijamin.",
    },
    download: {
      badge: "Pusat Unduhan",
      title: "Unduh Rilis Asli & Bebas Iklan.",
      subtitle: "Paket instalasi per-user tanpa hak administrator. Kode sumber terbuka dan diverifikasi oleh GitHub CI.",
      wpTitle: "WallpaperLive",
      wpDesc: "Engine wallpaper video & GIF dengan akselerasi libmpv hardware decoding dan cache lokal.",
      tbTitle: "TransparentBar",
      tbDesc: "Utilitas taskbar transparan native ultra-ringan yang dibangun dengan bahasa Rust.",
      installerBtn: "Unduh Installer (.exe)",
      portableBtn: "Unduh Portable (.zip)",
      sourceBtn: "Source Code di GitHub",
      requirements: "Kebutuhan Sistem: Windows 10 (versi 1903+) atau Windows 11 (64-bit). Setup unsigned.",
      checksumNote: "Dekoder libmpv diunduh terpisah saat instalasi sesuai ketentuan lisensi.",
      downloadsSoFar: "unduhan sejauh ini",
      latest: "Terbaru",
      latestRelease: "Lihat Rilis Terbaru",
      version: "Versi",
      about: "sekitar",
      releaseLoading: "Memuat rilis terbaru…",
      releaseUnavailable: "Info rilis tidak tersedia. Lihat GitHub.",
      downloadsUnavailable: "Jumlah unduhan tidak tersedia",
    },
    support: {
      badge: "Dukung Pengembang",
      title: "Dukung Proyek Bebas Iklan Ini.",
      subtitle: "WallpaperLive dan TransparentBar adalah proyek independen dan gratis. Jika membantu desktop Anda, traktir kopi di Yapp!",
      desc: "Donasi membantu riset kompatibilitas Windows updates, pengujian layar multi-monitor DPI, dan pemeliharaan repositori.",
      tier1: "☕ Traktir Kopi ($2)",
      tier2: "🍕 Traktir Pizza ($5)",
      tier3: "🚀 Sponsor Server ($10)",
      customTip: "Beri Tip Sukarela di Yapp",
      yappBtn: "Buka Profil Yapp (raflyf)",
      guarantee: "Pembayaran terpercaya via Yapp.ink dengan QRIS, E-Wallet, Card, atau Kripto USDT.",
    },
    faq: {
      badge: "Pertanyaan Umum",
      title: "Fakta Teknis yang Perlu Diketahui",
      q1: "Berapa penggunaan RAM sebenarnya saat video diputar?",
      a1: "Cuplikan v0.1.6 pada 9 November 2026 menunjukkan 437.5 MB / 42.4% CPU saat menyiapkan cache 4K, 41.4–47.4 MB / 1.3–2.5% CPU dengan panel terbuka, dan 37.8 MB / 1.5% CPU saat pemutaran desktop. Angka tray 20.3 MB / 0.5% CPU dan auto-pause 4.5 MB / 0% CPU berasal dari cuplikan v0.1.5. Pemakaian bisa berbeda sesuai media, perangkat, dan status cache.",
      q2: "Berapa penggunaan RAM untuk TransparentBar?",
      a2: "Cuplikan Task Manager menunjukkan host TransparentBar memakai 1.6 MB dan 0% CPU. Bridge di dalam Explorer tidak dihitung. CPU dibulatkan; angka ini bukan benchmark atau batas penggunaan.",
      q3: "Mengapa installer belum signed?",
      a3: "Sebagai proyek open source independen, membeli sertifikat komersial Microsoft Authenticode membutuhkan biaya tahunan yang besar. File diverifikasi langsung melalui workflow build GitHub Actions resmi.",
      q4: "Apakah TransparentBar merusak tema Windows saat ditutup?",
      a4: "Tidak. Klik menu 'Exit' di system tray untuk mengembalikan tampilan taskbar default Windows seperti semula.",
    },
    footer: {
      rights: "Hak Cipta © 2026 Raflyf. Dibuat dengan dedikasi untuk pengguna Windows.",
      byDeveloper: "Proyek oleh Raflyf",
      licensedUnder: "WallpaperLive berlisensi GPL-3.0 · TransparentBar berlisensi MIT.",
      openSourcePromise: "Tanpa bloatware · Tanpa spyware · Data pengujian diverifikasi dari repositori resmi",
    },
  },
  en: {
    nav: {
      simulator: "Simulator",
      features: "Features",
      benchmark: "Test Data",
      download: "Download",
      support: "Support",
      downloadBtn: "Download Suite",
      supportBtn: "Tip on Yapp",
    },
    hero: {
      badge: "Available for Windows 10 & 11 · 64-bit · Native Rust",
      titlePart1: "Your desktop,",
      titlePart2: "alive and transparent.",
      subtitle: "WallpaperLive plays local videos and GIFs with a native libmpv decoder. TransparentBar removes the taskbar background via pure Rust Win32 DWM hooks. Lightweight, transparent, zero overclaim.",
      ctaPrimary: "Download for Windows",
      ctaSecondary: "Support on Yapp.ink",
      metaInfo: "Ad-Free",
      stat1: "37.8 MB",
      stat1Sub: "WallpaperLive desktop · v0.1.6 snapshot (1.5% CPU)",
      stat2: "1.6 MB",
      stat2Sub: "TransparentBar host · snapshot (0% CPU)",
      stat3: "4.5 MB",
      stat3Sub: "Auto-pause · v0.1.5 snapshot (0% CPU)",
    },
    simulator: {
      title: "Authentic Interface & Verified Captures",
      subtitle: "Actual captures of both utilities running live on Windows 11. No simulated canvas gimmicks, no fabricated mockups.",
      tag: "Official Windows 11 Captures",
      tabs: {
        desktop: "Live Desktop & Transparent Taskbar",
        library: "Control Panel & 3x3 Library",
        taskbar: "TransparentBar Detail",
        telemetry: "Task Manager Evidence",
      },
      captions: {
        desktopTitle: "Active Live Wallpaper & Transparent Taskbar",
        desktopDesc: "Genuine v0.1.5 capture supplied on 8 November 2026. WallpaperLive renders video smoothly while TransparentBar removes the taskbar background.",
        libraryTitle: "Native 3x3 Thumbnail Library",
        libraryDesc: "Pure Win32/Rust v0.1.6 control panel featuring a 3x3 thumbnail library grid, folder filters, and placement controls.",
        taskbarTitle: "True Windows 11 Taskbar Transparency",
        taskbarDesc: "Wallpaper remains fully visible behind pinned icons without artificial blur overlays. Powered by native DWM hooks.",
        telemetryTitle: "Original Task Manager Evidence",
        telemetryDesc: "Original v0.1.5 captures retained by the repo: wallpaperlive.exe shows 20.3 MB / 0.5% CPU in tray and 4.5 MB / 0% CPU while auto-paused. Separate moments, not new v0.1.6 measurements.",
      },
    },
    features: {
      badge: "Factual Specifications",
      title: "Native Architecture Without Web Runtimes.",
      subtitle: "Engineered purely with Rust and Win32 APIs. No Chromium webviews, no Node runtimes on desktop, no mandatory accounts.",
      items: {
        f1Title: "Local Playback & Background Cache",
        f1Desc: "Supports MP4, WebM, GIF, MKV, MOV, APNG. Video starts immediately while an optimized display-sized SDR cache builds in the background.",
        f2Title: "Native Taskbar Transparency",
        f2Desc: "The Task Manager snapshot shows the TransparentBar host at 1.6 MB. This excludes its Explorer bridge and is not a memory ceiling.",
        f3Title: "Fullscreen Auto-Pause",
        f3Desc: "Playback pauses for fullscreen or maximized apps. The v0.1.5 snapshot shows 4.5 MB and 0% CPU, not a guaranteed resource limit.",
        f4Title: "Maximized-Window Connector Strip",
        f4Desc: "Optional soft gradient strip that follows the bottom edge of maximized windows, sampling 4 pixels at 16ms to 64ms.",
        f5Title: "Selectable 24 / 30 / 45 / 60 FPS",
        f5Desc: "Runtime FPS cap under Placement without re-encoding or synthetic frame interpolation.",
        f6Title: "Full Privacy & Zero Telemetry",
        f6Desc: "All files and sampled screen pixels remain in local memory. Network access is strictly used only when checking GitHub Releases.",
      },
    },
    benchmark: {
      badge: "WallpaperLive v0.1.6 captures · 9 November 2026",
      title: "Resource Use in Task Manager.",
      subtitle: "Latest author-supplied WallpaperLive captures on Windows 11, alongside an earlier auto-pause capture and the TransparentBar host snapshot.",
      stateCol: "Application State",
      ramCol: "Memory (Task Manager)",
      cpuCol: "CPU Utilization",
      notesCol: "Process Notes",
      contextTitle: "Measurement context and limits",
      row1State: "4K Cache Preparation (v0.1.6)",
      row1Ram: "437.5 MB",
      row1Cpu: "42.4%",
      row1Notes: "App plus background cache worker (temporary conversion; initial 4K media preparation).",
      row2State: "Cache Ready, 3x3 Panel Open (v0.1.6)",
      row2Ram: "41.4 MB – 47.4 MB",
      row2Cpu: "1.3% – 2.5%",
      row2Notes: "Two panel snapshots: 41.4 MB / 2.5% CPU and 47.4 MB / 1.3% CPU. Nine thumbnails per page.",
      row3State: "Desktop Live Playback (v0.1.6)",
      row3Ram: "37.8 MB",
      row3Cpu: "1.5%",
      row3Notes: "Active wallpaper with Task Manager visible. The snapshot shows 0 MB/s disk and 0 Mbps network.",
      row4State: "Auto-Paused (v0.1.5 Capture)",
      row4Ram: "4.5 MB",
      row4Cpu: "0%",
      row4Notes: "8 November 2026 snapshot reused in the latest documentation. Shows paused playback, not a new v0.1.6 measurement.",
      tbRowState: "TransparentBar (Host Process)",
      tbRowRam: "1.6 MB",
      tbRowCpu: "0%",
      tbRowNotes: "Host snapshot: 1.6 MB, 0% CPU, 0 MB/s disk, 0 Mbps network. Excludes the bridge loaded inside Explorer.",
      disclaimer: "Temporary 4K cache preparation includes the app and worker; panel and desktop rows show other states. The 20.3 MB / 0.5% CPU tray and 4.5 MB / 0% CPU auto-pause captures are from v0.1.5. These are separate moments, not a controlled benchmark. Task Manager rounds CPU; 0% does not prove zero work. Its Memory column is not total private allocation, all process-tree memory, or VRAM. TransparentBar host values exclude its Explorer bridge. Media, codec, resolution, driver, and cache state affect usage; no RAM ceiling or GPU/VRAM savings are guaranteed.",
    },
    download: {
      badge: "Download Hub",
      title: "Get The Authentic Builds.",
      subtitle: "Per-user installation without administrator privileges. Open-source code verified on GitHub CI.",
      wpTitle: "WallpaperLive",
      wpDesc: "High-performance video & GIF live wallpaper engine with libmpv hardware decode and local cache.",
      tbTitle: "TransparentBar",
      tbDesc: "Instant taskbar transparency utility built in Rust with system tray controls.",
      installerBtn: "Download Installer (.exe)",
      portableBtn: "Download Portable (.zip)",
      sourceBtn: "Source Code on GitHub",
      requirements: "System Requirements: Windows 10 (1903+) or Windows 11 (64-bit). Unsigned binaries.",
      checksumNote: "Native libmpv decoder is downloaded with user consent during setup per licensing rules.",
      downloadsSoFar: "downloads so far",
      latest: "Latest",
      latestRelease: "View Latest Release",
      version: "Version",
      about: "about",
      releaseLoading: "Loading latest releases…",
      releaseUnavailable: "Release info unavailable. See GitHub.",
      downloadsUnavailable: "Download count unavailable",
    },
    support: {
      badge: "Support Independent Dev",
      title: "Keep Free Software Alive.",
      subtitle: "Both utilities are free, open-source, and ad-free. If they improve your Windows desktop, consider sending a tip on Yapp!",
      desc: "Community donations help support Windows build tools, high-DPI multi-monitor testing, and active maintenance.",
      tier1: "☕ Buy a Coffee ($2)",
      tier2: "🍕 Buy a Pizza ($5)",
      tier3: "🚀 Server Sponsor ($10)",
      customTip: "Send Any Tip on Yapp",
      yappBtn: "Open Yapp Profile (raflyf)",
      guarantee: "Secure transaction powered by Yapp.ink. Supports card, digital wallets, QRIS, and USDT.",
    },
    faq: {
      badge: "FAQ",
      title: "Factual Questions Answered",
      q1: "What is the actual RAM usage during video playback?",
      a1: "The v0.1.6 captures from 9 November 2026 show 437.5 MB / 42.4% CPU during 4K cache preparation, 41.4–47.4 MB / 1.3–2.5% CPU with the panel open, and 37.8 MB / 1.5% CPU during desktop playback. Tray figures of 20.3 MB / 0.5% CPU and auto-pause figures of 4.5 MB / 0% CPU come from earlier v0.1.5 captures. Usage varies with media, hardware, and cache state.",
      q2: "What is TransparentBar's RAM footprint?",
      a2: "The Task Manager snapshot shows the TransparentBar host at 1.6 MB and 0% CPU. Its bridge inside Explorer is not included. CPU is rounded; these are neither benchmark results nor upper limits.",
      q3: "Why is the installer unsigned?",
      a3: "As an independent open-source project, purchasing an annual Microsoft Authenticode certificate is expensive. Binaries are compiled and published directly via public GitHub Actions CI workflows.",
      q4: "Does TransparentBar restore my taskbar when exiting?",
      a4: "Yes. Selecting 'Exit' from the system tray menu properly restores the default Windows taskbar appearance.",
    },
    footer: {
      rights: "Copyright © 2026 Raflyf. Built for clean and productive Windows desktops.",
      byDeveloper: "A project by Raflyf",
      licensedUnder: "WallpaperLive licensed under GPL-3.0 · TransparentBar licensed under MIT.",
      openSourcePromise: "Zero bloatware · Zero spyware · Verified test numbers from official repositories",
    },
  },
};
