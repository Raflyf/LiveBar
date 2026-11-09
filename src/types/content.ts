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
    wpVersionSize: string;
    tbVersionSize: string;
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
      badge: "Data Nyata Task Manager v0.1.5 · Windows 11 x64",
      titlePart1: "Desktop Anda,",
      titlePart2: "hidup dan transparan.",
      subtitle: "WallpaperLive memutar video dan GIF lokal dengan dekoder libmpv native. TransparentBar menghapus latar taskbar melalui hook Win32 DWM murni berbasis Rust. Ringan, transparan, dan tanpa overclaim.",
      ctaPrimary: "Unduh Gratis (Windows)",
      ctaSecondary: "Dukung di Yapp.ink",
      metaInfo: "WallpaperLive v0.1.6 · TransparentBar v0.2.3 · 100% Bebas Iklan",
      stat1: "20.3 MB",
      stat1Sub: "RAM WallpaperLive di Tray (0.5% CPU)",
      stat2: "1.6 MB",
      stat2Sub: "RAM Host TransparentBar (0% CPU)",
      stat3: "4.5 MB",
      stat3Sub: "RAM Saat Fullscreen Auto-Pause (0% CPU)",
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
        libraryDesc: "Antarmuka native Rust/Win32 dengan filter folder, pemilihan multi-file, kontrol FPS (24/30/45/60), dan pengelolaan cache lokal.",
        taskbarTitle: "Taskbar Transparan Windows 11 Murni",
        taskbarDesc: "Wallpaper tetap terlihat jelas di balik icon aplikasi Windows 11 tanpa efek blur berat. Mengait langsung ke DWM API.",
        telemetryTitle: "Tangkapan Layar Task Manager Asli",
        telemetryDesc: "Bukti memori nyata: 20.3 MB saat aktif di tray (0.5% CPU) dan turun ke 4.5 MB (0% CPU) saat aplikasi lain fullscreen.",
      },
    },
    features: {
      badge: "Spesifikasi Nyata",
      title: "Arsitektur Native Tanpa Runtime Web.",
      subtitle: "Dibangun murni dengan Rust dan Win32 API. Tanpa Chromium, tanpa Node.js di desktop, tanpa akun wajib.",
      items: {
        f1Title: "Playback Video Lokal & Cache Background",
        f1Desc: "Mendukung MP4, WebM, GIF, MKV, MOV, APNG. Video langsung diputar sementara cache resolusi layar disiapkan di latar belakang.",
        f2Title: "Taskbar Transparan 1.6 MB RAM",
        f2Desc: "TransparentBar mengaitkan langsung ke DWM Windows. Host process tercatat hanya memakan 1.6 MB memori di Task Manager.",
        f3Title: "Auto-Pause Otomatis (Turun ke 4.5 MB)",
        f3Desc: "Saat game atau aplikasi fullscreen dibuka, WallpaperLive melepas halaman residen RAM hingga tersisa 4.5 MB dan 0% CPU.",
        f4Title: "Maximized-Window Connector Strip",
        f4Desc: "Fitur opsional strip gradasi lembut di tepi bawah jendela yang dimaksimalkan, mengambil sampel 4 piksel pada 16ms/64ms.",
        f5Title: "Framerate Cap 24 / 30 / 45 / 60 FPS",
        f5Desc: "Pengaturan FPS langsung dari menu Placement tanpa konversi ulang file atau intervensi frame interpolation buatan.",
        f6Title: "Privasi Penuh & Zero Telemetry",
        f6Desc: "Seluruh berkas media dan piksel berada di memori lokal. Jaringan hanya digunakan jika pengguna memilih cek update GitHub.",
      },
    },
    benchmark: {
      badge: "Hasil Pengujian Riil (8 November 2026)",
      title: "Data Hasil Uji Task Manager Sebenarnya.",
      subtitle: "Bukan angka klaim sintetis. Ini adalah hasil tangkapan layar Task Manager asli pada Windows 11 x64 yang dicatat oleh pembuat proyek.",
      stateCol: "Kondisi / Status Aplikasi",
      ramCol: "Memori (Task Manager)",
      cpuCol: "Beban CPU",
      notesCol: "Keterangan Proses",
      row1State: "Konversi Awal Cache Wallpaper",
      row1Ram: "348.9 MB – 409.3 MB",
      row1Cpu: "42.5% – 50.3%",
      row1Notes: "Aplikasi + background cache worker (konversi sementara; ~350 MB pada 1080p, dan puncak hingga ~409 MB khusus saat konversi media 4K).",
      row2State: "Panel Kontrol Terbuka (Library 3x3)",
      row2Ram: "43.1 MB – 45.4 MB",
      row2Cpu: "1.3% – 2.6%",
      row2Notes: "Antarmuka native terbuka menampilkan thumbnail library dan pengaturan placement.",
      row3State: "Minimize ke Tray (Playback Aktif)",
      row3Ram: "20.3 MB",
      row3Cpu: "0.5%",
      row3Notes: "Wallpaper aktif merender di desktop via D3D11VA, panel ditutup ke system tray. Disk: 0.5 MB/s, Net: 0.",
      row4State: "Auto-Pause (Fullscreen / Maximized)",
      row4Ram: "4.5 MB",
      row4Cpu: "0%",
      row4Notes: "Pemutaran dijeda otomatis saat ada aplikasi lain fullscreen. Memori dipangkas menjadi 4.5 MB.",
      tbRowState: "TransparentBar (Host Process Aktif)",
      tbRowRam: "1.6 MB",
      tbRowCpu: "0%",
      tbRowNotes: "Tercatat di Task Manager: 1.6 MB RAM, 0% CPU, 0 MB/s disk, 0 Mbps network pada Windows 11.",
      disclaimer: "Puncak memori konversi awal (~350 MB untuk 1080p dan hingga ~409 MB khusus saat konversi wallpaper 4K) bersifat sementara saat proses encoding display cache. Setelah selesai dan diminimalkan ke tray, pemutaran aktif hanya memakai 20.3 MB (0.5% CPU) dan turun ke 4.5 MB (0% CPU) saat auto-pause. Angka CPU dibulatkan oleh Windows Task Manager; resolusi layar, codec video, dan driver GPU mempengaruhi penggunaan aktual.",
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
      wpVersionSize: "Versi 0.1.6, sekitar 4.8 MB",
      tbVersionSize: "Versi 0.2.3, sekitar 1.2 MB",
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
      a1: "Saat pertama kali mengimpor video, proses konversi cache sementara memakan sekitar 348–409 MB RAM. Setelah cache siap dan aplikasi diminimalkan ke tray, penggunaan RAM turun ke 20.3 MB (CPU ~0.5%). Ketika Anda bermain game atau aplikasi lain fullscreen, auto-pause memangkas RAM hingga 4.5 MB (0% CPU).",
      q2: "Berapa penggunaan RAM untuk TransparentBar?",
      a2: "Berdasarkan pengujian nyata di Task Manager Windows 11, proses host TransparentBar tercatat hanya memakan 1.6 MB RAM dengan 0% CPU.",
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
      badge: "Real Task Manager v0.1.5 Data · Windows 11 x64",
      titlePart1: "Your desktop,",
      titlePart2: "alive and transparent.",
      subtitle: "WallpaperLive plays local videos and GIFs with a native libmpv decoder. TransparentBar removes the taskbar background via pure Rust Win32 DWM hooks. Lightweight, transparent, zero overclaim.",
      ctaPrimary: "Download for Windows",
      ctaSecondary: "Support on Yapp.ink",
      metaInfo: "WallpaperLive v0.1.6 · TransparentBar v0.2.3 · 100% Ad-Free",
      stat1: "20.3 MB",
      stat1Sub: "WallpaperLive in Tray (0.5% CPU)",
      stat2: "1.6 MB",
      stat2Sub: "TransparentBar Host RAM (0% CPU)",
      stat3: "4.5 MB",
      stat3Sub: "Fullscreen Auto-Paused RAM (0% CPU)",
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
        libraryDesc: "Pure Win32/Rust control panel featuring folder filters, multi-file selection, placement controls, and frame caps (24/30/45/60 FPS).",
        taskbarTitle: "True Windows 11 Taskbar Transparency",
        taskbarDesc: "Wallpaper remains fully visible behind pinned icons without artificial blur overlays. Powered by native DWM hooks.",
        telemetryTitle: "Original Task Manager Evidence",
        telemetryDesc: "Direct memory verification: 20.3 MB in tray playback (0.5% CPU), dropping to 4.5 MB (0% CPU) when auto-paused.",
      },
    },
    features: {
      badge: "Factual Specifications",
      title: "Native Architecture Without Web Runtimes.",
      subtitle: "Engineered purely with Rust and Win32 APIs. No Chromium webviews, no Node runtimes on desktop, no mandatory accounts.",
      items: {
        f1Title: "Local Playback & Background Cache",
        f1Desc: "Supports MP4, WebM, GIF, MKV, MOV, APNG. Video starts immediately while an optimized display-sized SDR cache builds in the background.",
        f2Title: "1.6 MB RAM Taskbar Transparency",
        f2Desc: "TransparentBar communicates directly with Windows DWM. Host process takes just 1.6 MB of RAM in Task Manager.",
        f3Title: "Auto-Pause (Drops to 4.5 MB)",
        f3Desc: "When a game or fullscreen window opens, WallpaperLive trims resident pages down to 4.5 MB and 0% CPU.",
        f4Title: "Maximized-Window Connector Strip",
        f4Desc: "Optional soft gradient strip that follows the bottom edge of maximized windows, sampling 4 pixels at 16ms to 64ms.",
        f5Title: "Selectable 24 / 30 / 45 / 60 FPS",
        f5Desc: "Runtime FPS cap under Placement without re-encoding or synthetic frame interpolation.",
        f6Title: "Full Privacy & Zero Telemetry",
        f6Desc: "All files and sampled screen pixels remain in local memory. Network access is strictly used only when checking GitHub Releases.",
      },
    },
    benchmark: {
      badge: "Real Test Results (8 November 2026)",
      title: "Real Task Manager Benchmark Data.",
      subtitle: "No synthetic or inflated marketing numbers. These are the verified Windows 11 x64 Task Manager captures documented by the author.",
      stateCol: "Application State",
      ramCol: "Memory (Task Manager)",
      cpuCol: "CPU Utilization",
      notesCol: "Process Notes",
      row1State: "Initial Wallpaper Cache Preparation",
      row1Ram: "348.9 MB – 409.3 MB",
      row1Cpu: "42.5% – 50.3%",
      row1Notes: "App plus background cache worker (temporary conversion; ~350 MB on 1080p, up to ~409 MB peak specifically when converting 4K media).",
      row2State: "Panel Open (3x3 Thumbnail Library)",
      row2Ram: "43.1 MB – 45.4 MB",
      row2Cpu: "1.3% – 2.6%",
      row2Notes: "Native control panel open with 4 visible thumbnails and placement controls.",
      row3State: "Minimized to Tray (Live Playback)",
      row3Ram: "20.3 MB",
      row3Cpu: "0.5%",
      row3Notes: "Wallpaper actively rendering on desktop via D3D11VA, panel closed to tray. Disk: 0.5 MB/s, Net: 0.",
      row4State: "Auto-Paused (Fullscreen / Maximized)",
      row4Ram: "4.5 MB",
      row4Cpu: "0%",
      row4Notes: "Playback auto-suspended on fullscreen apps. Resident pages trimmed down to 4.5 MB.",
      tbRowState: "TransparentBar (Host Process)",
      tbRowRam: "1.6 MB",
      tbRowCpu: "0%",
      tbRowNotes: "Task Manager capture: 1.6 MB memory, 0% CPU, 0 MB/s disk, 0 Mbps network on Windows 11.",
      disclaimer: "Initial conversion memory peaks (~350 MB for 1080p and up to ~409 MB specifically when converting 4K media) are strictly temporary while encoding the background display cache. Once prepared and minimized to the tray, playback uses only 20.3 MB (0.5% CPU), dropping to 4.5 MB (0% CPU) when auto-paused. Task Manager rounds live CPU values; display resolution, codec, driver, and cache state affect usage.",
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
      wpVersionSize: "Version 0.1.6, about 4.8 MB",
      tbVersionSize: "Version 0.2.3, about 1.2 MB",
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
      a1: "Initial wallpaper import temporarily peaks at 348–409 MB while generating the display cache. Once ready and minimized to the tray, RAM drops to 20.3 MB (CPU ~0.5%). When you maximize an app or play games, auto-pause trims RAM down to 4.5 MB (0% CPU).",
      q2: "What is TransparentBar's RAM footprint?",
      a2: "As shown in verified Windows 11 Task Manager captures, the TransparentBar host process takes 1.6 MB of RAM at 0% CPU.",
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
