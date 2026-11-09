export type DocGroup = 'start' | 'wallpaperlive' | 'transparentbar' | 'help';

export type DocBlock =
  | { kind: 'p'; text: string }
  | { kind: 'ol' | 'ul'; items: string[] }
  | { kind: 'table'; headings: string[]; rows: string[][] }
  | { kind: 'code'; language: 'powershell' | 'text'; text: string }
  | { kind: 'note'; title: string; text: string }
  | { kind: 'links'; items: { label: string; url: string }[] };

export interface DocSection {
  id: string;
  group: DocGroup;
  title: string;
  blocks: DocBlock[];
}

export interface DocContent {
  title: string;
  summary: string;
  groups: Record<DocGroup, string>;
  sections: DocSection[];
}

export const docs: Record<'en' | 'id', DocContent> = {
  "en": {
    "title": "LivelyDesk user guide",
    "summary": "Install WallpaperLive and TransparentBar, use your own media, and manage playback, taskbar appearance, updates, and troubleshooting.",
    "groups": {
      "start": "Before you start",
      "wallpaperlive": "WallpaperLive",
      "transparentbar": "TransparentBar",
      "help": "Help and source"
    },
    "sections": [
      {
        "id": "overview",
        "group": "start",
        "title": "Choose your desktop tool",
        "blocks": [
          {
            "kind": "p",
            "text": "WallpaperLive plays local videos, GIFs, and images as Windows desktop wallpapers. TransparentBar removes the taskbar background while leaving Windows icons and controls in place. This LivelyDesk guide covers their separate installers and controls."
          },
          {
            "kind": "p",
            "text": "WallpaperLive is a player, not a wallpaper download gallery. Its Library contains files you import, not supplied artwork. Create your own media or obtain files you have permission to use, save them locally, and import only trusted files. Download links below provide applications, not wallpapers."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "Download WallpaperLive from GitHub Releases",
                "url": "https://github.com/Raflyf/WallpaperLive/releases/latest"
              },
              {
                "label": "Download TransparentBar from GitHub Releases",
                "url": "https://github.com/Raflyf/TransparentBar/releases/latest"
              }
            ]
          }
        ]
      },
      {
        "id": "requirements",
        "group": "start",
        "title": "Check requirements and security",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Requirement",
              "WallpaperLive",
              "TransparentBar"
            ],
            "rows": [
              [
                "Windows",
                "Windows 10 or 11, x64",
                "Windows 10 or 11, x64; ARM64 is not supported"
              ],
              [
                "Permissions",
                "Per-user installation without administrator rights",
                "Normal use does not require administrator access"
              ],
              [
                "Playback components",
                "Separate libmpv decoder; wallpapers are not bundled",
                "Native app with a versioned bridge DLL"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Unsigned applications",
            "text": "The source READMEs describe unsigned releases. Windows may show an unknown-publisher or SmartScreen warning. Download from the official repositories and follow your organization's security policy. Keep antivirus and Windows protections enabled. Do not run as administrator to bypass desktop access errors."
          },
          {
            "kind": "p",
            "text": "WallpaperLive decodes media with your user privileges, without a sandbox. Malformed media can crash it. Windows builds, drivers, HDR, display reconnection, and third-party shells can affect desktop or taskbar behavior."
          }
        ]
      },
      {
        "id": "wallpaperlive-install",
        "group": "wallpaperlive",
        "title": "Install WallpaperLive and its decoder",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Open WallpaperLive Releases and download the installer. Keep it in a dedicated folder without unrelated DLLs.",
              "Run Setup as your normal Windows user. If a decoder is needed, review the download prompt before consenting. A matching installed decoder or matching local archive avoids that download.",
              "Finish Setup and open WallpaperLive from the Start menu. Installation does not apply a wallpaper or enable startup automatically.",
              "Open Settings and read Version. This identifies the executable build, independently of the installer filename or a browser-added download suffix."
            ]
          },
          {
            "kind": "note",
            "title": "Offline installation",
            "text": "For the installer described in the pinned README, download the linked upstream archive separately, rename it mpv-dev.7z, and place it beside the installer. Setup checks archive and DLL SHA256 values. Pair the archive with the matching release instructions; do not substitute an arbitrary decoder. Decoder binaries remain a separate download."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "Decoder archive referenced by the pinned README",
                "url": "https://github.com/shinchiro/mpv-winbuild-cmake/releases/download/20261107/mpv-dev-x86_64-20261107-git-9028187538.7z"
              }
            ]
          }
        ]
      },
      {
        "id": "wallpaperlive-first-wallpaper",
        "group": "wallpaperlive",
        "title": "Apply your first wallpaper",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Save a trusted video, GIF, or image on your PC. Check the creator's license before using it.",
              "Choose Add wallpaper for a file or Add folder to import a folder and its subfolders.",
              "Select a thumbnail in Library. Selection changes the preview, not the wallpaper already playing.",
              "Choose a display or All displays, select Placement, then choose Set wallpaper.",
              "Leave Sound off for silent playback, or enable it for a file with an audio track."
            ]
          },
          {
            "kind": "p",
            "text": "The picker accepts MP4, GIF, MKV, WebM, MOV, AVI, MPG, MPEG, M4V, APNG, PNG, JPG, JPEG, BMP, and WebP. An accepted extension does not establish codec compatibility; decoding still depends on libmpv and your GPU."
          },
          {
            "kind": "note",
            "title": "Local media only",
            "text": "URLs, network paths, playlists, and executable files are not accepted. Obtain compatible media separately before importing it."
          }
        ]
      },
      {
        "id": "wallpaperlive-library",
        "group": "wallpaperlive",
        "title": "Find and manage library entries",
        "blocks": [
          {
            "kind": "p",
            "text": "Library supports up to 4096 entries and shows nine thumbnails per page. Search filenames without case sensitivity within the current folder filter. Sort by newest imported, A-Z, or Z-A, then browse with Previous and Next. Library hotkeys include Space on the grid and the Left/Right Arrow keys."
          },
          {
            "kind": "table",
            "headings": [
              "Action",
              "What to expect"
            ],
            "rows": [
              [
                "Select all",
                "Selects entries within the current filter. Ctrl-click selects individual files."
              ],
              [
                "Remove",
                "Confirms the entry count, then removes library entries without deleting original media."
              ],
              [
                "Retry thumbnail",
                "Right-click a failed preview and retry its thumbnail."
              ],
              [
                "Where to find wallpapers",
                "Opens an in-app panel of third-party browsing links, not a downloader."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Third-party links open your browser and are not safety endorsements. Check media licenses and trust before importing. Back to Library or Escape returns from that panel with filters, selection, and page retained."
          }
        ]
      },
      {
        "id": "wallpaperlive-displays",
        "group": "wallpaperlive",
        "title": "Assign wallpapers to multiple displays",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Select a thumbnail and one display, then choose Set wallpaper to replace that display's assignment without stopping the others.",
              "Choose All displays and Set wallpaper when every display should use the same file.",
              "Repeat individual assignments when you want different files on different monitors."
            ]
          },
          {
            "kind": "note",
            "title": "Separate players",
            "text": "Each active display has its own decoder. More displays can increase memory and GPU use, even with the same file. Playback is not guaranteed to remain frame-perfect across displays."
          },
          {
            "kind": "p",
            "text": "Upgrades from settings versions 1-3 retain the saved monitor assignment, or use the primary display if no monitor name was saved. Migration does not enable All displays. Settings version 4 stores per-monitor assignments."
          }
        ]
      },
      {
        "id": "wallpaperlive-playback",
        "group": "wallpaperlive",
        "title": "Control placement, FPS, sound, and pause",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Control",
              "Behavior"
            ],
            "rows": [
              [
                "Fill / Fit",
                "Fill crops to cover the display. Fit shows the full frame."
              ],
              [
                "FPS",
                "Choose 24, 30, 45, or 60. Changes affect running players without a reload or another cache conversion."
              ],
              [
                "Sound: On/Off",
                "Sound starts off. At most one wallpaper stream plays audio; files without audio remain silent."
              ],
              [
                "Pause/Resume",
                "Manual playback control affects all displays."
              ],
              [
                "Stop",
                "Removes all live wallpapers without changing Windows static wallpaper settings."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "FPS is a cap, not interpolation or a playback-speed control. Compatible rendering and hardware decoding prefer a detected dedicated GPU, with fallback when needed."
          },
          {
            "kind": "note",
            "title": "Automatic pause",
            "text": "Fullscreen or maximized apps pause the wallpaper on their display independently. Battery power, session lock, display sleep, and system suspend also pause playback. The last frame and decoder stay attached for resume without reloading. Paused playback does not mean decoder allocations or dedicated VRAM have been released."
          }
        ]
      },
      {
        "id": "wallpaperlive-cache",
        "group": "wallpaperlive",
        "title": "Understand and manage video cache",
        "blocks": [
          {
            "kind": "p",
            "text": "Oversized SDR videos start from the original while one background worker creates display-sized H.264/AAC MP4 copies. Smaller sources are not upscaled. HDR and animated images use originals. Conversion preserves original files, audio, aspect ratio, and playback speed, but its compression is lossy."
          },
          {
            "kind": "table",
            "headings": [
              "Limit",
              "Value"
            ],
            "rows": [
              [
                "Eligible video",
                "Finite video up to one hour and 16 GiB"
              ],
              [
                "Conversion stop limits",
                "15 minutes or 512 MiB per output"
              ],
              [
                "Cache budget",
                "2 GiB; no automatic eviction"
              ],
              [
                "Cached rate profile",
                "Source rate capped at 60 FPS, separate from the runtime cap"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Settings shows live RAM and cache controls. Clear unused cache requires confirmation and protects imported media, active originals, and active or waiting cache outputs. If another copy cannot fit, original playback continues. Cache location:"
          },
          {
            "kind": "code",
            "language": "text",
            "text": "%LOCALAPPDATA%\\WallpaperLive\\video-cache"
          },
          {
            "kind": "p",
            "text": "Pause cancels or defers conversion. Unfinished work restarts after resume; completed copies wait at least two seconds before handoff near the current position. Partial cancelled files are not played. Preparation can use more resources than cached playback."
          }
        ]
      },
      {
        "id": "wallpaperlive-tray-updates",
        "group": "wallpaperlive",
        "title": "Use the tray, startup, and updates",
        "blocks": [
          {
            "kind": "p",
            "text": "Closing the panel keeps playback in the tray when the tray is available. Pause/Resume and Stop remain available there; Exit closes the app. The tray follows Windows light or dark appearance and uses the native system menu in high-contrast mode."
          },
          {
            "kind": "p",
            "text": "Start with Windows is opt-in. Enable it only when you want WallpaperLive to launch with Windows; Setup does not enable it for you."
          },
          {
            "kind": "ol",
            "items": [
              "Read your installed Version in Settings before checking an update.",
              "Choose Check for updates in the tray. The background check presents a native English result dialog.",
              "Confirm before opening a newer release page. Download and install the update yourself; the app does not do this automatically.",
              "Install an upgrade into the same folder so Setup can reuse a matching decoder."
            ]
          }
        ]
      },
      {
        "id": "wallpaperlive-data",
        "group": "wallpaperlive",
        "title": "Keep your media and plan removal",
        "blocks": [
          {
            "kind": "p",
            "text": "Imported originals stay where you stored them. Removing a Library entry is different from deleting its file. Cache copies are separate from originals. The documented settings migration keeps existing media, preferences, and cache directories in place."
          },
          {
            "kind": "ol",
            "items": [
              "Before removing the application, choose Stop to remove live wallpapers, then Exit to close it.",
              "Keep your original media and preserve data you want to retain. Do not delete media or configuration folders as a troubleshooting step."
            ]
          },
          {
            "kind": "note",
            "title": "Uninstall and data limits",
            "text": "The pinned README gives the cache location, but no complete settings-data path, WallpaperLive log path, or uninstall retention policy. Check release-specific removal instructions rather than assuming all data is deleted or preserved."
          }
        ]
      },
      {
        "id": "transparentbar-install",
        "group": "transparentbar",
        "title": "Install or run TransparentBar portable",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Package",
              "Use it for"
            ],
            "rows": [
              [
                "Installer",
                "Per-account installation with Start Menu integration and a standard uninstall entry."
              ],
              [
                "Portable ZIP",
                "Running without installation. Extract the entire archive to a permanent folder."
              ]
            ]
          },
          {
            "kind": "ol",
            "items": [
              "Open TransparentBar Releases and select the installer or Windows x64 portable ZIP.",
              "Close other taskbar customization tools, then open TransparentBar.",
              "Click its system tray icon near the clock. Open the tray overflow menu if the icon is hidden."
            ]
          },
          {
            "kind": "p",
            "text": "Keep the portable executable and its versioned bridge DLL together. Opening the application again opens the existing instance's menu. Tray labels are English, support keyboard navigation, and follow the Windows light or dark theme."
          },
          {
            "kind": "note",
            "title": "Compatibility",
            "text": "TransparentBar is an early release. Windows updates and third-party shells can change behavior. Check multiple-monitor behavior on your own Windows setup."
          }
        ]
      },
      {
        "id": "transparentbar-connector",
        "group": "transparentbar",
        "title": "Set the taskbar connector",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Tray option",
              "Effect"
            ],
            "rows": [
              [
                "Taskbar connector",
                "Turns the soft gradient strip for maximized windows on or off."
              ],
              [
                "Connector pattern",
                "Toggles the faint grid on the strip."
              ],
              [
                "Reduce connector animation",
                "Disables cross-fading, so colors snap to the new edge immediately."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "The connector follows a thin visible band at the bottom edge of a maximized window, including color changes during scrolling. It samples four rows and smooths nearby columns. This is a softened approximation, not a capture of the entire application. Sampled pixels stay in memory and are not saved or uploaded."
          },
          {
            "kind": "note",
            "title": "Supported placement",
            "text": "Primary and secondary taskbars must be bottom-docked with auto-hide off. Fullscreen windows and unsupported placements hide the connector. Monitor DPI controls sizing; height is capped at 55% of a thin taskbar and width at 1920 px."
          },
          {
            "kind": "p",
            "text": "Sampling pauses during display sleep or session lock. Disabling the connector also stops its inactive eligibility-check timer."
          }
        ]
      },
      {
        "id": "transparentbar-maintenance",
        "group": "transparentbar",
        "title": "Manage startup, updates, and restoration",
        "blocks": [
          {
            "kind": "p",
            "text": "Run at sign-in toggles startup and is off by default. After moving a portable folder, disable and re-enable startup from its new location."
          },
          {
            "kind": "p",
            "text": "TransparentBar checks GitHub Releases and notifies you through the tray. Check for updates starts a manual check; Update available opens the latest release page. About / license shows version and license information."
          },
          {
            "kind": "ol",
            "items": [
              "Choose Exit to restore the saved taskbar appearance before closing or removing the app.",
              "For an installer update, run the new installer. It closes the running instance, restores its saved appearance, and starts the new version afterward.",
              "For an installed package, use its standard uninstall entry when removing it. Keep portable package files together while still in use."
            ]
          },
          {
            "kind": "note",
            "title": "Restoration errors",
            "text": "If Windows rejects restoration, the app reports an error and retains the saved state. The XAML bridge stays loaded for that Explorer session; versioned DLLs permit updates without overwriting the loaded image. TransparentBar does not replace Windows system files."
          }
        ]
      },
      {
        "id": "troubleshooting",
        "group": "help",
        "title": "Match the symptom and collect diagnostics",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Symptom",
              "First check"
            ],
            "rows": [
              [
                "Preview changed, wallpaper did not",
                "Choose the intended display and Set wallpaper. Selection alone changes only the preview."
              ],
              [
                "Wallpaper is silent",
                "Check Sound: On/Off and whether the file contains audio. Only one stream can play sound."
              ],
              [
                "Wallpaper stopped moving",
                "Check manual pause, fullscreen or maximized windows, battery power, lock, and display sleep."
              ],
              [
                "Memory or CPU rises",
                "Check cache preparation and monitor count. Usage depends on media, resolution, and drivers; screenshots are not resource ceilings."
              ],
              [
                "Desktop access is blocked",
                "Leave playback stopped. Do not elevate the app or disable Windows protections."
              ],
              [
                "Transparency does not activate",
                "Close competing taskbar tools, confirm Windows x64, and record the exact error."
              ],
              [
                "Connector is missing",
                "Check Taskbar connector, bottom docking, auto-hide off, and whether the window is maximized rather than fullscreen."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "TransparentBar saves startup diagnostics here:"
          },
          {
            "kind": "code",
            "language": "text",
            "text": "%LOCALAPPDATA%\\TransparentBar\\startup.log"
          },
          {
            "kind": "p",
            "text": "From its application folder, this diagnostic command inspects XAML elements without changing their opacity:"
          },
          {
            "kind": "code",
            "language": "powershell",
            "text": ".\\transparentbar.exe --diagnose"
          },
          {
            "kind": "note",
            "title": "Review before sharing",
            "text": "Logs and paths may contain personal data, including usernames and local filenames. Review and redact a copy before sharing. Check screenshots for private information too; keep original diagnostics intact."
          }
        ]
      },
      {
        "id": "report-issue",
        "group": "help",
        "title": "Report a reproducible problem",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Check existing issues in the affected project before opening another report.",
              "Include the app version and Windows build from winver. For TransparentBar, specify installer or portable; portable BUILD.txt records version and source commit.",
              "Describe expected behavior, actual behavior, exact errors, and steps to reproduce. Include monitor count and other taskbar tools. For WallpaperLive, add GPU and media format.",
              "Attach only relevant, reviewed screenshots or diagnostics. Describe private media rather than uploading files you cannot share."
            ]
          },
          {
            "kind": "p",
            "text": "Mention whether behavior changed after a Windows update, display reconnection, or wallpaper change. These details help distinguish compatibility, media, and setup problems without discarding your data."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "WallpaperLive issues",
                "url": "https://github.com/Raflyf/WallpaperLive/issues"
              },
              {
                "label": "TransparentBar issues",
                "url": "https://github.com/Raflyf/TransparentBar/issues"
              }
            ]
          }
        ]
      },
      {
        "id": "licenses-build",
        "group": "help",
        "title": "Read licenses and build prerequisites",
        "blocks": [
          {
            "kind": "p",
            "text": "WallpaperLive uses GPL-3.0-or-later; TransparentBar uses MIT. WallpaperLive's license covers the application, not third-party wallpaper artwork. Review dependency notices and each creator's terms separately. libmpv remains a separate decoder download."
          },
          {
            "kind": "table",
            "headings": [
              "Project",
              "Source build prerequisites"
            ],
            "rows": [
              [
                "WallpaperLive",
                "Rust toolchain with Windows linker prerequisites. Follow the source build and decoder scripts in its README."
              ],
              [
                "TransparentBar",
                "Rust stable, x86_64-pc-windows-msvc, Visual Studio C++ build tools, and Windows SDK. Installer packaging also needs Inno Setup."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Source builds are optional for installer users. The linked READMEs describe packaging and contribution checks. Automated builds do not establish desktop compatibility. Optional donations do not unlock or restrict features; support pages open only when selected."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "WallpaperLive license",
                "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/LICENSE"
              },
              {
                "label": "WallpaperLive dependency notices",
                "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/THIRD_PARTY.md"
              },
              {
                "label": "WallpaperLive source build instructions",
                "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/README.md"
              },
              {
                "label": "TransparentBar license",
                "url": "https://github.com/Raflyf/TransparentBar/blob/2ccb731a63a1079ad650690a02ab0aee8724b9b9/LICENSE.md"
              },
              {
                "label": "TransparentBar source build instructions",
                "url": "https://github.com/Raflyf/TransparentBar/blob/2ccb731a63a1079ad650690a02ab0aee8724b9b9/README.md"
              }
            ]
          }
        ]
      }
    ]
  },
  "id": {
    "title": "Panduan pengguna LivelyDesk",
    "summary": "Pasang WallpaperLive dan TransparentBar, gunakan media milik Anda, lalu kelola pemutaran, tampilan taskbar, pembaruan, dan penanganan masalah.",
    "groups": {
      "start": "Sebelum memulai",
      "wallpaperlive": "WallpaperLive",
      "transparentbar": "TransparentBar",
      "help": "Bantuan dan sumber"
    },
    "sections": [
      {
        "id": "overview",
        "group": "start",
        "title": "Pilih alat untuk desktop Anda",
        "blocks": [
          {
            "kind": "p",
            "text": "WallpaperLive memutar video, GIF, dan gambar lokal sebagai wallpaper desktop Windows. TransparentBar menghilangkan latar taskbar tanpa memindahkan ikon dan kontrol Windows. Panduan LivelyDesk ini membahas pemasang serta kontrol masing-masing aplikasi."
          },
          {
            "kind": "p",
            "text": "WallpaperLive adalah pemutar, bukan galeri unduhan wallpaper. Library berisi file yang Anda impor, bukan karya yang disediakan aplikasi. Buat media sendiri atau peroleh file yang boleh Anda gunakan, simpan secara lokal, lalu impor hanya file tepercaya. Tautan unduhan berikut menyediakan aplikasi, bukan wallpaper."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "Unduh WallpaperLive dari GitHub Releases",
                "url": "https://github.com/Raflyf/WallpaperLive/releases/latest"
              },
              {
                "label": "Unduh TransparentBar dari GitHub Releases",
                "url": "https://github.com/Raflyf/TransparentBar/releases/latest"
              }
            ]
          }
        ]
      },
      {
        "id": "requirements",
        "group": "start",
        "title": "Periksa persyaratan dan keamanan",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Persyaratan",
              "WallpaperLive",
              "TransparentBar"
            ],
            "rows": [
              [
                "Windows",
                "Windows 10 atau 11, x64",
                "Windows 10 atau 11, x64; ARM64 tidak didukung"
              ],
              [
                "Hak akses",
                "Pemasangan per pengguna tanpa hak administrator",
                "Penggunaan biasa tidak memerlukan akses administrator"
              ],
              [
                "Komponen pemutaran",
                "Decoder libmpv terpisah; wallpaper tidak disertakan",
                "Aplikasi native dengan bridge DLL berversi"
              ]
            ]
          },
          {
            "kind": "note",
            "title": "Aplikasi tanpa tanda tangan digital",
            "text": "README sumber menjelaskan rilis yang belum ditandatangani. Windows dapat menampilkan peringatan penerbit tidak dikenal atau SmartScreen. Unduh dari repositori resmi dan ikuti kebijakan keamanan organisasi Anda. Biarkan antivirus serta perlindungan Windows aktif. Jangan jalankan sebagai administrator untuk melewati kesalahan akses desktop."
          },
          {
            "kind": "p",
            "text": "WallpaperLive memproses media dengan hak akses pengguna Anda, tanpa sandbox. Media rusak dapat membuat aplikasi berhenti. Build Windows, driver, HDR, penyambungan ulang layar, dan shell pihak ketiga dapat memengaruhi desktop atau taskbar."
          }
        ]
      },
      {
        "id": "wallpaperlive-install",
        "group": "wallpaperlive",
        "title": "Pasang WallpaperLive dan decoder",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Buka WallpaperLive Releases dan unduh pemasangnya. Simpan dalam folder khusus tanpa DLL lain yang tidak terkait.",
              "Jalankan Setup sebagai pengguna Windows biasa. Jika decoder diperlukan, baca permintaan unduhan sebelum menyetujuinya. Decoder terpasang atau arsip lokal yang cocok membuat unduhan tidak diperlukan.",
              "Selesaikan Setup dan buka WallpaperLive dari Start menu. Pemasangan tidak langsung menerapkan wallpaper atau mengaktifkan startup.",
              "Buka Settings dan baca Version. Nilai ini menunjukkan build aplikasi, bukan sekadar nama pemasang atau akhiran yang ditambahkan browser saat mengunduh."
            ]
          },
          {
            "kind": "note",
            "title": "Pemasangan offline",
            "text": "Untuk pemasang yang dijelaskan README pada revisi sumber, unduh arsip upstream berikut secara terpisah, ubah namanya menjadi mpv-dev.7z, lalu letakkan di samping pemasang. Setup memeriksa SHA256 arsip dan DLL. Cocokkan arsip dengan petunjuk rilis terkait; jangan menggantinya dengan decoder sembarang. Biner decoder tetap merupakan unduhan terpisah."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "Arsip decoder yang dirujuk README sumber",
                "url": "https://github.com/shinchiro/mpv-winbuild-cmake/releases/download/20261107/mpv-dev-x86_64-20261107-git-9028187538.7z"
              }
            ]
          }
        ]
      },
      {
        "id": "wallpaperlive-first-wallpaper",
        "group": "wallpaperlive",
        "title": "Terapkan wallpaper pertama",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Simpan video, GIF, atau gambar tepercaya di PC. Periksa lisensi pembuatnya sebelum digunakan.",
              "Pilih Add wallpaper untuk satu file atau Add folder untuk mengimpor folder beserta subfoldernya.",
              "Pilih thumbnail di Library. Pilihan ini mengubah pratinjau, bukan wallpaper yang sedang diputar.",
              "Pilih satu layar atau All displays, tentukan Placement, lalu pilih Set wallpaper.",
              "Biarkan Sound nonaktif untuk pemutaran senyap, atau aktifkan untuk file yang memiliki trek audio."
            ]
          },
          {
            "kind": "p",
            "text": "Pemilih file menerima MP4, GIF, MKV, WebM, MOV, AVI, MPG, MPEG, M4V, APNG, PNG, JPG, JPEG, BMP, dan WebP. Ekstensi yang diterima belum memastikan kompatibilitas codec; pemutaran tetap bergantung pada libmpv dan GPU Anda."
          },
          {
            "kind": "note",
            "title": "Hanya media lokal",
            "text": "URL, jalur jaringan, playlist, dan file executable tidak diterima. Peroleh media yang kompatibel secara terpisah sebelum mengimpornya."
          }
        ]
      },
      {
        "id": "wallpaperlive-library",
        "group": "wallpaperlive",
        "title": "Cari dan kelola isi Library",
        "blocks": [
          {
            "kind": "p",
            "text": "Library mendukung hingga 4096 entri dan menampilkan sembilan thumbnail per halaman. Pencarian nama file tidak membedakan huruf besar dan kecil dalam filter folder aktif. Urutkan menurut waktu impor terbaru, A-Z, atau Z-A, lalu gunakan Previous dan Next untuk berpindah halaman. Pintasan Library mencakup Space pada grid dan tombol panah kiri/kanan."
          },
          {
            "kind": "table",
            "headings": [
              "Tindakan",
              "Hasil"
            ],
            "rows": [
              [
                "Select all",
                "Memilih entri dalam filter aktif. Gunakan Ctrl-click untuk memilih file satu per satu."
              ],
              [
                "Remove",
                "Meminta konfirmasi jumlah entri, lalu menghapus entri Library tanpa menghapus media asli."
              ],
              [
                "Retry thumbnail",
                "Klik kanan pratinjau yang gagal, lalu coba lagi pembuatan thumbnail."
              ],
              [
                "Where to find wallpapers",
                "Membuka panel berisi tautan penelusuran pihak ketiga, bukan pengunduh."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Tautan pihak ketiga membuka browser dan bukan jaminan keamanan. Periksa lisensi serta asal media sebelum mengimpor. Back to Library atau Escape kembali dari panel tersebut dengan filter, pilihan, dan halaman tetap tersimpan."
          }
        ]
      },
      {
        "id": "wallpaperlive-displays",
        "group": "wallpaperlive",
        "title": "Atur wallpaper di beberapa layar",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Pilih thumbnail dan satu layar, lalu pilih Set wallpaper untuk mengganti wallpaper layar itu tanpa menghentikan layar lainnya.",
              "Pilih All displays dan Set wallpaper jika semua layar ingin menggunakan file yang sama.",
              "Ulangi pengaturan per layar jika setiap monitor ingin menggunakan file berbeda."
            ]
          },
          {
            "kind": "note",
            "title": "Pemutar terpisah",
            "text": "Setiap layar aktif memiliki decoder sendiri. Penambahan layar dapat meningkatkan penggunaan memori dan GPU, meskipun file sama. Pemutaran antar layar tidak dijamin selalu sinkron pada setiap frame."
          },
          {
            "kind": "p",
            "text": "Pembaruan dari versi pengaturan 1-3 mempertahankan monitor yang tersimpan, atau memakai layar utama jika nama monitor belum tersimpan. Migrasi tidak mengaktifkan All displays. Versi pengaturan 4 menyimpan penetapan wallpaper per monitor."
          }
        ]
      },
      {
        "id": "wallpaperlive-playback",
        "group": "wallpaperlive",
        "title": "Atur posisi, FPS, suara, dan jeda",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Kontrol",
              "Perilaku"
            ],
            "rows": [
              [
                "Fill / Fit",
                "Fill memotong gambar agar memenuhi layar. Fit menampilkan seluruh frame."
              ],
              [
                "FPS",
                "Pilih 24, 30, 45, atau 60. Perubahan berlaku pada pemutar aktif tanpa memuat ulang atau membuat cache baru."
              ],
              [
                "Sound: On/Off",
                "Suara awalnya nonaktif. Hanya satu aliran wallpaper yang memutar audio; file tanpa audio tetap senyap."
              ],
              [
                "Pause/Resume",
                "Kontrol pemutaran manual berlaku untuk semua layar."
              ],
              [
                "Stop",
                "Menghapus semua wallpaper bergerak tanpa mengubah pengaturan wallpaper statis Windows."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "FPS merupakan batas, bukan interpolasi atau pengatur kecepatan pemutaran. Rendering dan decoding perangkat keras yang kompatibel mengutamakan GPU dedicated yang terdeteksi, dengan jalur alternatif saat diperlukan."
          },
          {
            "kind": "note",
            "title": "Jeda otomatis",
            "text": "Aplikasi fullscreen atau maximized menjeda wallpaper pada layarnya secara terpisah. Daya baterai, penguncian sesi, layar tidur, dan sistem suspend juga menjeda pemutaran. Frame terakhir serta decoder tetap terpasang agar pemutaran dapat dilanjutkan tanpa memuat ulang. Jeda tidak berarti alokasi decoder atau VRAM dedicated sudah dilepaskan."
          }
        ]
      },
      {
        "id": "wallpaperlive-cache",
        "group": "wallpaperlive",
        "title": "Pahami dan kelola cache video",
        "blocks": [
          {
            "kind": "p",
            "text": "Video SDR beresolusi besar diputar dari file asli saat satu worker latar membuat salinan H.264/AAC MP4 sesuai ukuran layar. Sumber kecil tidak diperbesar. HDR dan gambar animasi memakai file asli. Konversi mempertahankan file asli, audio, rasio aspek, serta kecepatan pemutaran, tetapi kompresinya lossy."
          },
          {
            "kind": "table",
            "headings": [
              "Batas",
              "Nilai"
            ],
            "rows": [
              [
                "Video yang memenuhi syarat",
                "Video berdurasi terbatas hingga satu jam dan 16 GiB"
              ],
              [
                "Batas penghentian konversi",
                "15 menit atau 512 MiB per hasil"
              ],
              [
                "Kapasitas cache",
                "2 GiB; tidak ada penghapusan otomatis"
              ],
              [
                "Profil laju cache",
                "Laju sumber dibatasi 60 FPS, terpisah dari batas pemutaran"
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Settings menampilkan penggunaan RAM dan kontrol cache. Clear unused cache meminta konfirmasi serta melindungi media impor, file asli aktif, dan hasil cache aktif atau menunggu. Jika salinan baru tidak muat, file asli tetap diputar. Lokasi cache:"
          },
          {
            "kind": "code",
            "language": "text",
            "text": "%LOCALAPPDATA%\\WallpaperLive\\video-cache"
          },
          {
            "kind": "p",
            "text": "Jeda membatalkan atau menunda konversi. Pekerjaan yang belum selesai dimulai ulang setelah pemutaran dilanjutkan; salinan selesai menunggu sedikitnya dua detik sebelum beralih dekat posisi saat itu. File parsial yang dibatalkan tidak diputar. Persiapan dapat memakai lebih banyak sumber daya daripada pemutaran cache."
          }
        ]
      },
      {
        "id": "wallpaperlive-tray-updates",
        "group": "wallpaperlive",
        "title": "Gunakan tray, startup, dan pembaruan",
        "blocks": [
          {
            "kind": "p",
            "text": "Menutup panel mempertahankan pemutaran di tray jika tray tersedia. Pause/Resume dan Stop tetap tersedia di sana; Exit menutup aplikasi. Tray mengikuti tampilan terang atau gelap Windows dan memakai menu sistem native dalam mode kontras tinggi."
          },
          {
            "kind": "p",
            "text": "Start with Windows bersifat pilihan. Aktifkan hanya jika WallpaperLive perlu berjalan bersama Windows; Setup tidak mengaktifkannya untuk Anda."
          },
          {
            "kind": "ol",
            "items": [
              "Baca Version yang terpasang di Settings sebelum memeriksa pembaruan.",
              "Pilih Check for updates pada tray. Pemeriksaan latar menampilkan dialog hasil native dalam bahasa Inggris.",
              "Berikan konfirmasi sebelum membuka halaman rilis baru. Unduh dan pasang pembaruan sendiri; aplikasi tidak melakukannya secara otomatis.",
              "Pasang pembaruan ke folder yang sama agar Setup dapat memakai kembali decoder yang cocok."
            ]
          }
        ]
      },
      {
        "id": "wallpaperlive-data",
        "group": "wallpaperlive",
        "title": "Simpan media dan rencanakan penghapusan aplikasi",
        "blocks": [
          {
            "kind": "p",
            "text": "File asli yang diimpor tetap berada di tempat Anda menyimpannya. Menghapus entri Library berbeda dari menghapus file. Salinan cache terpisah dari file asli. Migrasi pengaturan yang dijelaskan sumber mempertahankan media, preferensi, dan direktori cache yang sudah ada."
          },
          {
            "kind": "ol",
            "items": [
              "Sebelum menghapus aplikasi, pilih Stop untuk menghentikan wallpaper bergerak, lalu Exit untuk menutup aplikasi.",
              "Simpan media asli dan data yang ingin dipertahankan. Jangan hapus folder media atau konfigurasi sebagai langkah penanganan masalah."
            ]
          },
          {
            "kind": "note",
            "title": "Batas informasi uninstall dan data",
            "text": "README sumber memberi lokasi cache, tetapi tidak merinci lokasi seluruh pengaturan, jalur log WallpaperLive, atau kebijakan penyimpanan data setelah uninstall. Periksa petunjuk penghapusan untuk rilis terkait; jangan menganggap semua data pasti dihapus atau dipertahankan."
          }
        ]
      },
      {
        "id": "transparentbar-install",
        "group": "transparentbar",
        "title": "Pasang atau jalankan TransparentBar portable",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Paket",
              "Kegunaan"
            ],
            "rows": [
              [
                "Installer",
                "Pemasangan per akun dengan integrasi Start Menu dan entri uninstall standar."
              ],
              [
                "Portable ZIP",
                "Berjalan tanpa pemasangan. Ekstrak seluruh arsip ke folder permanen."
              ]
            ]
          },
          {
            "kind": "ol",
            "items": [
              "Buka TransparentBar Releases, lalu pilih pemasang atau ZIP portable Windows x64.",
              "Tutup alat kustomisasi taskbar lain, lalu buka TransparentBar.",
              "Klik ikon system tray di dekat jam. Buka menu ikon tersembunyi jika ikon tidak terlihat."
            ]
          },
          {
            "kind": "p",
            "text": "Simpan executable portable bersama bridge DLL berversinya. Membuka aplikasi lagi akan membuka menu instance yang sudah berjalan. Label tray memakai bahasa Inggris, mendukung navigasi keyboard, dan mengikuti tema terang atau gelap Windows."
          },
          {
            "kind": "note",
            "title": "Kompatibilitas",
            "text": "TransparentBar masih merupakan rilis awal. Pembaruan Windows dan shell pihak ketiga dapat mengubah perilakunya. Periksa penggunaan beberapa monitor pada konfigurasi Windows Anda sendiri."
          }
        ]
      },
      {
        "id": "transparentbar-connector",
        "group": "transparentbar",
        "title": "Atur konektor taskbar",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Opsi tray",
              "Efek"
            ],
            "rows": [
              [
                "Taskbar connector",
                "Mengaktifkan atau menonaktifkan strip gradasi lembut untuk jendela maximized."
              ],
              [
                "Connector pattern",
                "Mengaktifkan atau menonaktifkan pola kisi tipis pada strip."
              ],
              [
                "Reduce connector animation",
                "Menonaktifkan cross-fade sehingga warna langsung mengikuti tepi terbaru."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Konektor mengikuti pita tipis yang terlihat di tepi bawah jendela maximized, termasuk perubahan warna saat menggulir. Konektor mengambil sampel empat baris dan menghaluskan kolom di sekitarnya. Hasilnya merupakan pendekatan lembut, bukan tangkapan seluruh aplikasi. Piksel sampel tetap di memori dan tidak disimpan atau diunggah."
          },
          {
            "kind": "note",
            "title": "Posisi yang didukung",
            "text": "Taskbar utama dan sekunder harus berada di bawah dengan auto-hide nonaktif. Jendela fullscreen dan posisi yang tidak didukung menyembunyikan konektor. DPI monitor menentukan ukurannya; tinggi dibatasi 55% dari taskbar tipis dan lebar hingga 1920 px."
          },
          {
            "kind": "p",
            "text": "Pengambilan sampel berhenti sementara saat layar tidur atau sesi terkunci. Menonaktifkan konektor juga menghentikan timer pemeriksaan kelayakan jendela saat konektor tidak aktif."
          }
        ]
      },
      {
        "id": "transparentbar-maintenance",
        "group": "transparentbar",
        "title": "Kelola startup, pembaruan, dan pemulihan",
        "blocks": [
          {
            "kind": "p",
            "text": "Run at sign-in mengatur startup dan awalnya nonaktif. Setelah memindahkan folder portable, nonaktifkan lalu aktifkan kembali startup dari lokasi barunya."
          },
          {
            "kind": "p",
            "text": "TransparentBar memeriksa GitHub Releases dan memberi pemberitahuan melalui tray. Check for updates memulai pemeriksaan manual; Update available membuka halaman rilis terbaru. About / license menampilkan versi dan informasi lisensi."
          },
          {
            "kind": "ol",
            "items": [
              "Pilih Exit untuk memulihkan tampilan taskbar yang tersimpan sebelum menutup atau menghapus aplikasi.",
              "Untuk memperbarui melalui pemasang, jalankan pemasang baru. Pemasang menutup instance aktif, memulihkan tampilan tersimpan, lalu menjalankan versi baru setelah selesai.",
              "Untuk paket terpasang, gunakan entri uninstall standar saat menghapusnya. Tetap simpan file paket portable bersama selama masih digunakan."
            ]
          },
          {
            "kind": "note",
            "title": "Kesalahan pemulihan",
            "text": "Jika Windows menolak pemulihan, aplikasi melaporkan kesalahan dan mempertahankan keadaan tersimpan. Bridge XAML tetap dimuat selama sesi Explorer tersebut; DLL berversi memungkinkan pembaruan tanpa menimpa biner yang sedang dimuat. TransparentBar tidak mengganti file sistem Windows."
          }
        ]
      },
      {
        "id": "troubleshooting",
        "group": "help",
        "title": "Cocokkan gejala dan kumpulkan diagnostik",
        "blocks": [
          {
            "kind": "table",
            "headings": [
              "Gejala",
              "Pemeriksaan awal"
            ],
            "rows": [
              [
                "Pratinjau berubah, wallpaper tidak",
                "Pilih layar tujuan dan Set wallpaper. Pemilihan thumbnail saja hanya mengubah pratinjau."
              ],
              [
                "Wallpaper tidak bersuara",
                "Periksa Sound: On/Off dan keberadaan audio pada file. Hanya satu aliran dapat mengeluarkan suara."
              ],
              [
                "Wallpaper berhenti bergerak",
                "Periksa jeda manual, jendela fullscreen atau maximized, baterai, penguncian sesi, dan layar tidur."
              ],
              [
                "Memori atau CPU meningkat",
                "Periksa persiapan cache dan jumlah monitor. Penggunaan bergantung pada media, resolusi, dan driver; tangkapan layar bukan batas sumber daya."
              ],
              [
                "Akses desktop diblokir",
                "Biarkan pemutaran berhenti. Jangan naikkan hak akses aplikasi atau menonaktifkan perlindungan Windows."
              ],
              [
                "Transparansi tidak aktif",
                "Tutup alat taskbar lain, pastikan Windows x64, dan catat pesan kesalahan lengkap."
              ],
              [
                "Konektor tidak terlihat",
                "Periksa Taskbar connector, posisi taskbar bawah, auto-hide nonaktif, dan jendela maximized, bukan fullscreen."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "TransparentBar menyimpan diagnostik startup di lokasi berikut:"
          },
          {
            "kind": "code",
            "language": "text",
            "text": "%LOCALAPPDATA%\\TransparentBar\\startup.log"
          },
          {
            "kind": "p",
            "text": "Dari folder aplikasi, perintah diagnostik berikut memeriksa elemen XAML tanpa mengubah opasitasnya:"
          },
          {
            "kind": "code",
            "language": "powershell",
            "text": ".\\transparentbar.exe --diagnose"
          },
          {
            "kind": "note",
            "title": "Periksa sebelum membagikan",
            "text": "Log dan jalur file dapat memuat data pribadi, termasuk nama pengguna serta nama file lokal. Periksa dan samarkan salinannya sebelum dibagikan. Periksa juga informasi pribadi pada tangkapan layar; pertahankan diagnostik asli."
          }
        ]
      },
      {
        "id": "report-issue",
        "group": "help",
        "title": "Laporkan masalah yang dapat diulang",
        "blocks": [
          {
            "kind": "ol",
            "items": [
              "Periksa issue yang sudah ada pada proyek terkait sebelum membuka laporan baru.",
              "Sertakan versi aplikasi dan build Windows dari winver. Untuk TransparentBar, sebutkan installer atau portable; BUILD.txt pada paket portable mencatat versi serta commit sumber.",
              "Jelaskan perilaku yang diharapkan, hasil yang terjadi, pesan kesalahan lengkap, dan langkah reproduksi. Sertakan jumlah monitor serta alat taskbar lain. Untuk WallpaperLive, tambahkan GPU dan format media.",
              "Lampirkan hanya tangkapan layar atau diagnostik relevan yang sudah diperiksa. Jelaskan media pribadi tanpa mengunggah file yang tidak boleh dibagikan."
            ]
          },
          {
            "kind": "p",
            "text": "Sebutkan apakah perilaku berubah setelah pembaruan Windows, penyambungan ulang layar, atau pergantian wallpaper. Rincian ini membantu membedakan masalah kompatibilitas, media, dan pemasangan tanpa membuang data Anda."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "Issue WallpaperLive",
                "url": "https://github.com/Raflyf/WallpaperLive/issues"
              },
              {
                "label": "Issue TransparentBar",
                "url": "https://github.com/Raflyf/TransparentBar/issues"
              }
            ]
          }
        ]
      },
      {
        "id": "licenses-build",
        "group": "help",
        "title": "Baca lisensi dan prasyarat build",
        "blocks": [
          {
            "kind": "p",
            "text": "WallpaperLive memakai GPL-3.0-or-later; TransparentBar memakai MIT. Lisensi WallpaperLive mencakup aplikasi, bukan karya wallpaper pihak ketiga. Baca pemberitahuan dependensi dan ketentuan tiap pembuat secara terpisah. libmpv tetap merupakan unduhan decoder terpisah."
          },
          {
            "kind": "table",
            "headings": [
              "Proyek",
              "Prasyarat build dari sumber"
            ],
            "rows": [
              [
                "WallpaperLive",
                "Toolchain Rust dengan prasyarat linker Windows. Ikuti skrip build dan decoder yang dijelaskan README."
              ],
              [
                "TransparentBar",
                "Rust stable, x86_64-pc-windows-msvc, Visual Studio C++ build tools, dan Windows SDK. Pembuatan pemasang juga memerlukan Inno Setup."
              ]
            ]
          },
          {
            "kind": "p",
            "text": "Pengguna pemasang tidak perlu membangun aplikasi dari sumber. README berikut menjelaskan pembuatan paket dan pemeriksaan kontribusi. Build otomatis tidak memastikan kompatibilitas desktop. Donasi bersifat pilihan dan tidak membuka atau membatasi fitur; halaman dukungan terbuka hanya saat dipilih."
          },
          {
            "kind": "links",
            "items": [
              {
                "label": "Lisensi WallpaperLive",
                "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/LICENSE"
              },
              {
                "label": "Pemberitahuan dependensi WallpaperLive",
                "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/THIRD_PARTY.md"
              },
              {
                "label": "Petunjuk build WallpaperLive",
                "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/README.md"
              },
              {
                "label": "Lisensi TransparentBar",
                "url": "https://github.com/Raflyf/TransparentBar/blob/2ccb731a63a1079ad650690a02ab0aee8724b9b9/LICENSE.md"
              },
              {
                "label": "Petunjuk build TransparentBar",
                "url": "https://github.com/Raflyf/TransparentBar/blob/2ccb731a63a1079ad650690a02ab0aee8724b9b9/README.md"
              }
            ]
          }
        ]
      }
    ]
  }
};

export const docSources = [
  {
    "name": "WallpaperLive",
    "revision": "46dad013e6498a963350840e13f6c445e09be5ce",
    "url": "https://github.com/Raflyf/WallpaperLive/blob/46dad013e6498a963350840e13f6c445e09be5ce/README.md"
  },
  {
    "name": "TransparentBar",
    "revision": "2ccb731a63a1079ad650690a02ab0aee8724b9b9",
    "url": "https://github.com/Raflyf/TransparentBar/blob/2ccb731a63a1079ad650690a02ab0aee8724b9b9/README.md"
  }
];
