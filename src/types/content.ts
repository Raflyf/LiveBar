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
    presetLabel: string;
    taskbarLabel: string;
    modes: {
      clear: string;
      blur: string;
      acrylic: string;
      opaque: string;
    };
    presets: {
      sunset: string;
      cyber: string;
      nature: string;
    };
    controls: {
      playing: string;
      paused: string;
      speed: string;
      ramUsage: string;
      cpuUsage: string;
    };
    mockWindow: {
      title: string;
      status: string;
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
    suiteName: string;
    competitorName: string;
    electronName: string;
    ramFootprint: string;
    cpuIdle: string;
    packageSize: string;
    startupTime: string;
    conclusion: string;
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
      benchmark: "Performa",
      download: "Unduh",
      support: "Dukungan",
      downloadBtn: "Unduh Suite",
      supportBtn: "Traktir di Yapp",
    },
    hero: {
      badge: "Windows 10 & 11 · 64-bit · Native & Ringan",
      titlePart1: "Desktop Anda,",
      titlePart2: "hidup dan transparan.",
      subtitle: "WallpaperLive menghidupkan latar belakang dengan video lokal dan GIF favorit Anda. TransparentBar membebaskan taskbar Windows Anda dengan transparansi sejati berbasis Rust native. Bersatu dalam satu harmoni.",
      ctaPrimary: "Unduh Gratis (Windows)",
      ctaSecondary: "Dukung di Yapp.ink",
      metaInfo: "Versi stabil v0.1.6 · Ukuran total < 5 MB · 100% Bebas Iklan",
      stat1: "~20 MB",
      stat1Sub: "Total Penggunaan RAM",
      stat2: "0.0%",
      stat2Sub: "Beban CPU saat Idle",
      stat3: "Rust & C++",
      stat3Sub: "Performa Native Tanpa Bloat",
    },
    simulator: {
      title: "Interactive Desktop Experience",
      subtitle: "Coba simulasi langsung di bawah ini. Ganti animasi wallpaper dan ubah mode taskbar secara real-time.",
      tag: "Live Interactive Preview",
      presetLabel: "Preset Wallpaper:",
      taskbarLabel: "Mode Taskbar:",
      modes: {
        clear: "Transparan Penuh (Clear)",
        blur: "Kaca Buram (Blur)",
        acrylic: "Akrilik Fluent",
        opaque: "Default Windows (Opaque)",
      },
      presets: {
        sunset: "Warm Fluid Mesh",
        cyber: "Cyberpunk Horizon",
        nature: "Minimal Aurora Wave",
      },
      controls: {
        playing: "Memutar",
        paused: "Dijeda (Otomatis saat Fullscreen)",
        speed: "Kecepatan Render: 60 FPS",
        ramUsage: "Memori: 18.4 MB",
        cpuUsage: "CPU: 0.1%",
      },
      mockWindow: {
        title: "WallpaperLive Control Center",
        status: "Berjalan di System Tray · Hardware Accelerated",
      },
    },
    features: {
      badge: "Kekuatan Dua Aplikasi",
      title: "Dirancang untuk Pengguna yang Menghargai Performa.",
      subtitle: "Tanpa runtime Electron, tanpa JavaScript di desktop, tanpa langganan berbayar. Utilitas Windows sebagaimana mestinya.",
      items: {
        f1Title: "Wallpaper Video & GIF Lokal",
        f1Desc: "Putar file MP4, WebM, GIF, dan gambar langsung dari penyimpanan lokal Anda dengan cache thumbnail 3x3 yang sangat cepat.",
        f2Title: "Taskbar Transparan Berbasis Rust",
        f2Desc: "TransparentBar menghilangkan latar kaku Windows taskbar dengan memanggil API Windows DWM secara langsung. RAM kurang dari 2MB.",
        f3Title: "Smart Game & Battery Detection",
        f3Desc: "Wallpaper otomatis berhenti ketika Anda membuka game atau aplikasi fullscreen (Chrome, Premiere, Game), menghemat daya baterai hingga 100%.",
        f4Title: "Multi-Monitor Ready",
        f4Desc: "Dukungan layar ganda dan multi-monitor dengan konfigurasi independen untuk setiap layar yang terpasang.",
        f5Title: "Privasi Total & 100% Offline",
        f5Desc: "Tidak ada pengiriman data ke server mana pun. Seluruh operasi berjalan di mesin lokal Anda tanpa perlu akun atau login.",
        f6Title: "Kontrol Tray & Hotkeys Terintegrasi",
        f6Desc: "Akses cepat melalui ikon system tray dan tombol pintas keyboard untuk jeda, ganti wallpaper, atau atur intensitas transparansi.",
      },
    },
    benchmark: {
      badge: "Uji Performa Terbuka",
      title: "Mengapa RAM Anda Pantas Mendapatkan yang Lebih Baik.",
      subtitle: "Perbandingan langsung WallpaperLive + TransparentBar melawan utilitas kustomisasi populer berbasis web tech.",
      suiteName: "WallpaperLive + TransparentBar",
      competitorName: "Wallpaper Engine + TranslucentTB",
      electronName: "Aplikasi Alternatif (Electron)",
      ramFootprint: "Konsumsi RAM Latar",
      cpuIdle: "Beban CPU saat Idle",
      packageSize: "Ukuran Instalasi",
      startupTime: "Waktu Boot / Startup",
      conclusion: "Kombinasi kami menghemat hingga 92% konsumsi RAM dan 0% CPU saat tidak digunakan.",
    },
    download: {
      badge: "Pusat Unduhan",
      title: "Mulai Percantik Desktop Anda Hari Ini.",
      subtitle: "Unduh aplikasi secara gratis dan mandiri. Tersedia installer otomatis atau versi portable zip.",
      wpTitle: "WallpaperLive",
      wpDesc: "Engine wallpaper video & GIF ringan dengan cache lokal dan akselerasi hardware.",
      tbTitle: "TransparentBar",
      tbDesc: "Utilitas taskbar transparan native ultra-cepat yang dibangun dengan bahasa Rust.",
      installerBtn: "Unduh Installer (.exe)",
      portableBtn: "Unduh Portable (.zip)",
      sourceBtn: "Source Code di GitHub",
      requirements: "Kebutuhan Sistem: Windows 10 (versi 1903+) atau Windows 11 (64-bit).",
      checksumNote: "Setiap rilis ditandatangani dan diverifikasi oleh GitHub Actions CI workflow.",
    },
    support: {
      badge: "Dukung Proyek Ini",
      title: "Bantu Pengembang Tetap Berkarya.",
      subtitle: "Aplikasi ini gratis dan open-source selamanya. Jika utilitas ini membuat hari Anda lebih menyenangkan di depan PC, traktir kopi di Yapp!",
      desc: "Setiap rupiah atau dolar dari Anda digunakan untuk menyewa sertifikat kode Windows, pengujian monitor resolusi tinggi, dan rilis fitur baru.",
      tier1: "☕ Traktir Kopi ($2)",
      tier2: "🍕 Traktir Pizza ($5)",
      tier3: "🚀 Sponsor Server ($10)",
      customTip: "Beri Tip Sukarela di Yapp",
      yappBtn: "Buka Profil Yapp (raflyf)",
      guarantee: "Pembayaran aman & instan via Yapp.ink dengan QRIS, E-Wallet, Card, atau Kripto USDT.",
    },
    faq: {
      badge: "Pertanyaan Umum",
      title: "Hal yang Sering Ditanyakan",
      q1: "Apakah aplikasi ini memperlambat performa gaming?",
      a1: "Tidak sama sekali. WallpaperLive mendeteksi jendela fullscreen (seperti saat Anda main game atau menonton film) dan langsung men-suspend proses decoding video ke 0.0% CPU.",
      q2: "Mengapa antivirus kadang memberi peringatan saat instalasi?",
      a2: "Karena ini adalah aplikasi open-source independen yang belum membeli sertifikat komersial Microsoft EV Certificate bernilai ribuan dollar. File binary kami 100% bersih dan kode sumbernya terbuka untuk diaudit di GitHub.",
      q3: "Apakah bisa berjalan otomatis saat komputer menyala?",
      a3: "Bisa! Cukup centang 'Start with Windows' pada menu klik kanan ikon di system tray.",
      q4: "Bisa untuk Windows 10 dan Windows 11?",
      a4: "Ya, mendukung penuh Windows 10 (build 1903 ke atas) dan Windows 11 pada arsitektur 64-bit (x64).",
    },
    footer: {
      rights: "Hak Cipta © 2026 Raflyf. Dibuat dengan dedikasi untuk pengguna Windows.",
      byDeveloper: "Proyek oleh Raflyf",
      licensedUnder: "WallpaperLive berlisensi GPL-3.0 · TransparentBar berlisensi MIT.",
      openSourcePromise: "Tanpa spyware · Tanpa iklan · 100% Open Source",
    },
  },
  en: {
    nav: {
      simulator: "Simulator",
      features: "Features",
      benchmark: "Benchmark",
      download: "Download",
      support: "Support",
      downloadBtn: "Download Suite",
      supportBtn: "Tip on Yapp",
    },
    hero: {
      badge: "Windows 10 & 11 · 64-bit · Native & Ultra-Light",
      titlePart1: "Your desktop,",
      titlePart2: "alive and transparent.",
      subtitle: "WallpaperLive brings your screen alive with favorite local videos and GIFs. TransparentBar frees your taskbar with true native Rust transparency. United in one lightweight harmony.",
      ctaPrimary: "Download for Windows",
      ctaSecondary: "Support on Yapp.ink",
      metaInfo: "Latest stable v0.1.6 · Combined size < 5 MB · 100% Ad-Free",
      stat1: "~20 MB",
      stat1Sub: "Total Memory Usage",
      stat2: "0.0%",
      stat2Sub: "Idle CPU Utilization",
      stat3: "Rust & C++",
      stat3Sub: "Native Performance, Zero Bloat",
    },
    simulator: {
      title: "Interactive Desktop Experience",
      subtitle: "Test the live simulator below. Switch dynamic wallpaper presets and toggle taskbar modes in real-time.",
      tag: "Live Interactive Preview",
      presetLabel: "Wallpaper Preset:",
      taskbarLabel: "Taskbar Mode:",
      modes: {
        clear: "100% Clear Transparent",
        blur: "Frosted Glass Blur",
        acrylic: "Fluent Acrylic",
        opaque: "Windows Default Opaque",
      },
      presets: {
        sunset: "Warm Fluid Mesh",
        cyber: "Cyberpunk Horizon",
        nature: "Minimal Aurora Wave",
      },
      controls: {
        playing: "Rendering",
        paused: "Suspended (Auto on Fullscreen)",
        speed: "Render Target: 60 FPS",
        ramUsage: "Memory: 18.4 MB",
        cpuUsage: "CPU: 0.1%",
      },
      mockWindow: {
        title: "WallpaperLive Control Center",
        status: "Running in System Tray · Hardware Accelerated",
      },
    },
    features: {
      badge: "Dual Utility Suite",
      title: "Crafted for Users Who Care About Every Megabyte.",
      subtitle: "No Electron bloat, no Node runtimes on your desktop, no subscriptions. Native Windows utilities built right.",
      items: {
        f1Title: "Local Video & GIF Engine",
        f1Desc: "Play MP4, WebM, animated GIFs, and stills right from your local drive with an ultra-responsive 3x3 thumbnail library.",
        f2Title: "Pure Rust Taskbar Transparency",
        f2Desc: "TransparentBar strips the opaque taskbar backdrop by directly communicating with Windows DWM APIs. Uses less than 2MB of RAM.",
        f3Title: "Smart Game & Battery Detection",
        f3Desc: "Wallpaper auto-pauses when any game or fullscreen window opens, preserving 100% of your GPU and laptop battery.",
        f4Title: "Multi-Monitor Independence",
        f4Desc: "Full support for dual and triple monitors with granular display control per connected monitor.",
        f5Title: "Strictly Private & Offline",
        f5Desc: "Zero analytics, zero telemetry, zero cloud pinging. Runs completely isolated on your PC.",
        f6Title: "Tray Menu & Keyboard Hotkeys",
        f6Desc: "Effortlessly control playback, pause, or switch wallpapers using tray menu options and customizable hotkeys.",
      },
    },
    benchmark: {
      badge: "Measured Evidence",
      title: "Why Your System Memory Deserves Better.",
      subtitle: "Direct side-by-side comparison of WallpaperLive + TransparentBar against popular alternatives.",
      suiteName: "WallpaperLive + TransparentBar",
      competitorName: "Wallpaper Engine + TranslucentTB",
      electronName: "Electron Alternative Apps",
      ramFootprint: "Background RAM Footprint",
      cpuIdle: "Idle CPU Load",
      packageSize: "Disk / Binary Size",
      startupTime: "Boot & Startup Time",
      conclusion: "Our native duo saves up to 92% RAM memory and operates at 0% idle CPU overhead.",
    },
    download: {
      badge: "Download Hub",
      title: "Upgrade Your Windows Desktop Now.",
      subtitle: "Free, open-source, and ready to run. Choose automated installers or portable standalone archives.",
      wpTitle: "WallpaperLive",
      wpDesc: "High-performance video & GIF live wallpaper player with local cache and hardware decode.",
      tbTitle: "TransparentBar",
      tbDesc: "Instant taskbar transparency written in Rust with system tray management.",
      installerBtn: "Download Installer (.exe)",
      portableBtn: "Download Portable (.zip)",
      sourceBtn: "Source Code on GitHub",
      requirements: "System Requirements: Windows 10 (1903+) or Windows 11 (64-bit architecture).",
      checksumNote: "All binaries are automated and verified via GitHub Actions CI pipelines.",
    },
    support: {
      badge: "Support Independent Dev",
      title: "Keep Open Source Alive & Thriving.",
      subtitle: "These utilities are completely free and open source forever. If they make your workstation cleaner and faster, send a tip on Yapp!",
      desc: "Community donations directly help cover Windows developer tools, multi-monitor hardware testing, and frequent updates.",
      tier1: "☕ Buy a Coffee ($2)",
      tier2: "🍕 Buy a Pizza ($5)",
      tier3: "🚀 Server Sponsor ($10)",
      customTip: "Send Any Tip on Yapp",
      yappBtn: "Open Yapp Profile (raflyf)",
      guarantee: "Secure transaction powered by Yapp.ink. Supports card, digital wallets, QRIS, and crypto USDT.",
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      q1: "Will this slow down my games or heavy apps?",
      a1: "Not at all. The engine detects fullscreen windows and automatically suspends rendering, freeing 100% of GPU and CPU resources for your game.",
      q2: "Why might Windows SmartScreen show a warning?",
      a2: "As an indie open-source developer, buying an expensive Microsoft commercial signing certificate is cost-prohibitive. The binaries are 100% transparent and compiled directly on GitHub Actions.",
      q3: "Can it launch automatically at system startup?",
      a3: "Yes. Simply right-click the system tray icon and enable 'Start with Windows'.",
      q4: "Does it support both Windows 10 and Windows 11?",
      a4: "Yes, fully tested and supported on both Windows 10 (version 1903+) and Windows 11 64-bit.",
    },
    footer: {
      rights: "Copyright © 2026 Raflyf. Built for clean and productive Windows desktops.",
      byDeveloper: "A project by Raflyf",
      licensedUnder: "WallpaperLive licensed under GPL-3.0 · TransparentBar licensed under MIT.",
      openSourcePromise: "Zero spyware · Zero ads · 100% Open Source",
    },
  },
};
