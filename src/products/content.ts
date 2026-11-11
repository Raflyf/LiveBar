import type { DocBlock } from '../docs/content.ts';

export type ProductSlug = 'wallpaperlive' | 'transparentbar';
interface ProductCopy {
  title: string;
  heading: string;
  description: string;
  intro: string;
  boundary: string;
  guideSection: string;
  sections: { id: string; title: string; blocks: DocBlock[] }[];
}
interface Product {
  name: string;
  icon: string;
  license: string;
  repository: string;
  copy: Record<'en' | 'id', ProductCopy>;
}

export const products: Record<ProductSlug, Product> = {
  wallpaperlive: {
    name: 'WallpaperLive', icon: '/icons/wallpaperlive.png', license: 'GPL-3.0-or-later', repository: 'https://github.com/Raflyf/WallpaperLive',
    copy: {
      en: {
        title: 'WallpaperLive: Live Wallpaper App for Windows 11 & 10 | LivelyDesk',
        heading: 'Live wallpaper for Windows 11 and Windows 10',
        description: 'Turn your own videos, GIFs, and images into Windows live wallpapers with WallpaperLive. Per-display controls, FPS limits, auto-pause, and installation guide.',
        intro: 'WallpaperLive is a native Windows app for playing local media behind your desktop icons. Import files you already have, choose a monitor, and apply a wallpaper without changing the other displays.',
        boundary: 'The download is the application, not a wallpaper collection. Wallpapers and the libmpv decoder are not bundled. Use files from creators you trust and respect their licenses.',
        guideSection: 'wallpaperlive-first-wallpaper',
        sections: [
          { id: 'features', title: 'Control your desktop wallpaper', blocks: [
            {kind:'ul',items:[
              'Use videos, animated GIFs, or still images. The file picker accepts MP4, WebM, MKV, MOV, GIF, APNG, PNG, JPG, and other documented formats; decoding depends on libmpv and your GPU.',
              'Import individual files or folders and browse nine thumbnails per page. Search filenames, filter by folder, and assign the same file to All displays or different files per monitor.',
              'Choose Fill or Fit, cap playback at 24, 30, 45, or 60 FPS, and enable audio for at most one wallpaper. Audio is off by default.',
              'Auto-pause for fullscreen or maximized apps on the affected monitor. Battery power, session lock, and display sleep also pause playback. Manual Pause/Resume applies to every wallpaper.',
              'Keep playback in the system tray. Start with Windows is optional; Check for updates opens a newer release page only after confirmation.'
            ]},
            {kind:'p',text:'WallpaperLive uses Rust and Win32 for its interface and libmpv for decoding. It is a separate project from Lively Wallpaper and does not supply an online wallpaper gallery.'}
          ]},
          { id:'setup',title:'How to set a video or GIF as your wallpaper',blocks:[
            {kind:'ol',items:[
              'Open the official Releases page and choose the Windows x64 installer. Follow your device security policy when reviewing the unsigned installer.',
              'Run Setup for your user account. If no matching local decoder is available, Setup asks before downloading libmpv. Follow the decoder instructions in the guide.',
              'Save a compatible video, GIF, or image on your PC. Choose Add wallpaper or Add folder in WallpaperLive.',
              'Select its thumbnail, choose the target display or All displays, then select Set wallpaper. Choosing a thumbnail alone only changes the preview.',
              'Adjust Placement, FPS, and Sound. Use Stop to remove live playback or Exit to close the app.'
            ]},
            {kind:'p',text:'Where to find wallpapers opens a panel of third-party browsing links. Those sites provide their own media and terms; WallpaperLive does not download their wallpapers for you.'}
          ]},
          { id:'requirements',title:'Requirements, cache, and resource use',blocks:[
            {kind:'table',headings:['Item','What to know'],rows:[['Operating system','Windows 10 or Windows 11 on an x64 PC.'],['Decoder','Separate libmpv decoder, reused locally when compatible or downloaded with consent during Setup.'],['Cache','Oversized SDR videos can use display-sized cached copies. Originals remain in place. Cache preparation costs more than steady playback.'],['Multiple displays','Each active display has its own decoder. More screens can increase memory and GPU use.'],['Pause','The last frame and decoder remain attached for resume; pause does not mean all memory or VRAM is released.']]},
            {kind:'p',text:'A historical v0.1.6 desktop snapshot showed 37.8 MB and 1.5% CPU. The 4K cache-preparation snapshot showed 437.5 MB and 42.4% CPU for the app and worker together. These are separate observations, not expected limits for your PC.'}
          ]},
          {id:'questions',title:'Common questions before installing',blocks:[
            {kind:'note',title:'Can I use it without downloaded wallpaper packs?',text:'Yes. You bring your own compatible media. Imported library entries point to your local files; removing an entry from the Library does not delete the original.'},
            {kind:'note',title:'Why did the wallpaper stop moving?',text:'Check manual pause, fullscreen or maximized windows, battery power, and display sleep first. The guide covers playback and decoder troubleshooting.'},
            {kind:'note',title:'Can I change FPS without converting again?',text:'Yes. The runtime FPS cap changes on running players without a reload. It is a cap, not frame interpolation and not a playback-speed control.'}
          ]}
        ]
      },
      id: {
        title: 'WallpaperLive: Aplikasi Wallpaper Bergerak Windows 11 & 10 | LivelyDesk',
        heading: 'Wallpaper bergerak untuk Windows 11 dan Windows 10',
        description: 'Jadikan video, GIF, dan gambar milik Anda sebagai wallpaper bergerak di Windows. WallpaperLive mendukung banyak monitor, batas FPS, auto-pause, dan cache lokal.',
        intro: 'WallpaperLive adalah aplikasi Windows untuk memutar media lokal di belakang ikon desktop. Impor berkas yang sudah Anda miliki, pilih monitor, lalu terapkan wallpaper tanpa mengganti tampilan monitor lain.',
        boundary: 'Unduhan ini berisi aplikasi, bukan koleksi wallpaper. Media dan decoder libmpv tidak disertakan. Gunakan berkas dari kreator yang Anda percaya dan perhatikan lisensinya.',
        guideSection: 'wallpaperlive-first-wallpaper',
        sections: [
          {id:'features',title:'Atur wallpaper desktop Anda',blocks:[
            {kind:'ul',items:[
              'Gunakan video, GIF animasi, atau gambar. Pemilih berkas menerima MP4, WebM, MKV, MOV, GIF, APNG, PNG, JPG, dan format lain dalam dokumentasi; dukungan codec bergantung pada libmpv dan GPU.',
              'Impor berkas atau folder dan telusuri sembilan thumbnail per halaman. Cari nama berkas, filter folder, lalu pilih All displays atau berkas berbeda untuk setiap monitor.',
              'Pilih Fill atau Fit, batasi pemutaran pada 24, 30, 45, atau 60 FPS, dan aktifkan suara untuk paling banyak satu wallpaper. Suara mati secara default.',
              'Auto-pause berlaku saat aplikasi fullscreen atau dimaksimalkan pada monitor terkait. Daya baterai, sesi terkunci, dan layar tidur juga menjeda pemutaran. Pause/Resume manual berlaku pada semua wallpaper.',
              'Pemutaran tetap berjalan di system tray. Start with Windows bersifat opsional; Check for updates membuka halaman rilis baru setelah dikonfirmasi.'
            ]},
            {kind:'p',text:'Antarmuka WallpaperLive memakai Rust dan Win32, sedangkan decoding ditangani libmpv. Proyek ini berbeda dari Lively Wallpaper dan tidak menyediakan galeri wallpaper online.'}
          ]},
          {id:'setup',title:'Cara memasang wallpaper bergerak di PC atau laptop',blocks:[
            {kind:'ol',items:[
              'Buka halaman Releases resmi dan pilih installer Windows x64. Ikuti kebijakan keamanan perangkat saat memeriksa installer yang belum ditandatangani.',
              'Jalankan Setup untuk akun Anda. Jika tidak tersedia decoder lokal yang sesuai, Setup meminta persetujuan sebelum mengunduh libmpv. Ikuti petunjuk decoder dalam panduan.',
              'Simpan video, GIF, atau gambar yang kompatibel di PC. Pilih Add wallpaper atau Add folder di WallpaperLive.',
              'Pilih thumbnail, tentukan monitor atau All displays, lalu tekan Set wallpaper. Memilih thumbnail saja hanya mengganti pratinjau.',
              'Sesuaikan Placement, FPS, dan Sound. Gunakan Stop untuk menghentikan wallpaper aktif atau Exit untuk menutup aplikasi.'
            ]},
            {kind:'p',text:'Where to find wallpapers membuka panel tautan situs pihak ketiga. Media dan ketentuannya berasal dari situs tersebut; WallpaperLive tidak mengunduh wallpaper dari sana untuk Anda.'}
          ]},
          {id:'requirements',title:'Kebutuhan sistem, cache, dan penggunaan sumber daya',blocks:[
            {kind:'table',headings:['Bagian','Yang perlu diketahui'],rows:[['Sistem operasi','Windows 10 atau Windows 11 pada PC x64.'],['Decoder','libmpv terpisah, digunakan dari berkas lokal yang sesuai atau diunduh atas persetujuan selama Setup.'],['Cache','Video SDR besar dapat memakai salinan cache sesuai layar. Berkas asli tetap ada. Persiapan cache memakai lebih banyak sumber daya daripada pemutaran stabil.'],['Banyak monitor','Setiap layar aktif memiliki decoder sendiri. Tambahan layar dapat meningkatkan penggunaan memori dan GPU.'],['Pause','Frame terakhir dan decoder tetap terpasang untuk melanjutkan pemutaran; pause bukan berarti seluruh memori atau VRAM dilepas.']]},
            {kind:'p',text:'Cuplikan desktop v0.1.6 menunjukkan 37.8 MB dan 1.5% CPU. Cuplikan persiapan cache 4K menunjukkan 437.5 MB dan 42.4% CPU untuk aplikasi dan worker. Angka tersebut berasal dari momen berbeda, bukan batas penggunaan pada PC Anda.'}
          ]},
          {id:'questions',title:'Pertanyaan sebelum memasang aplikasi',blocks:[
            {kind:'note',title:'Apakah perlu mengunduh paket wallpaper?',text:'Tidak. Anda menggunakan media kompatibel milik sendiri. Entri Library merujuk ke berkas lokal; menghapus entri dari Library tidak menghapus berkas aslinya.'},
            {kind:'note',title:'Kenapa wallpaper berhenti bergerak?',text:'Periksa pause manual, jendela fullscreen atau dimaksimalkan, daya baterai, dan status layar tidur. Panduan menjelaskan masalah pemutaran dan decoder.'},
            {kind:'note',title:'Apakah mengganti FPS perlu konversi ulang?',text:'Tidak. Batas FPS diterapkan pada pemutar aktif tanpa reload. Pengaturan ini membatasi FPS, bukan menambah frame atau mengubah kecepatan video.'}
          ]}
        ]
      }
    }
  },
  transparentbar: {
    name:'TransparentBar',icon:'/icons/transparentbar.png',license:'MIT',repository:'https://github.com/Raflyf/TransparentBar',
    copy: {
      en: {
        title:'TransparentBar: Transparent Taskbar App for Windows 11 & 10 | LivelyDesk',
        heading:'A transparent taskbar for Windows 11 and Windows 10',
        description:'Make your Windows taskbar transparent with TransparentBar, a free Rust app with tray controls, optional startup, and a maximized-window connector.',
        intro:'TransparentBar removes the taskbar background while keeping Windows icons and system controls in place. Your wallpaper stays visible behind pinned apps, with settings available from a native tray menu.',
        boundary:'This is a Windows x64 application, not a registry-only tweak. It supports legacy and XAML taskbar paths. Windows updates and other shell tools can affect compatibility.',
        guideSection:'transparentbar-install',
        sections:[
          {id:'features',title:'Taskbar transparency with tray controls',blocks:[
            {kind:'ul',items:[
              'Apply a clear taskbar background without blur or color effects, while preserving the existing Windows icons and controls.',
              'Optionally enable a connector strip along the visible bottom edge of a maximized window. Its colors follow nearby content; fullscreen windows hide the strip.',
              'Use Taskbar connector, Connector pattern, and Reduce connector animation in the tray to control the strip and its transitions.',
              'Enable Run at sign-in if you want startup with Windows. This option is off by default.',
              'Check GitHub Releases automatically or from the tray, then open the release page when an update is available. The app does not handle donation payments.'
            ]},
            {kind:'p',text:'The interface is built with Rust and Windows APIs, without a browser engine. Screen samples for the connector stay in memory rather than being saved or uploaded.'}
          ]},
          {id:'setup',title:'How to make the Windows taskbar transparent',blocks:[
            {kind:'ol',items:[
              'Choose the installer or portable ZIP from the official Releases page. Normal use does not require administrator access.',
              'For portable use, extract the entire ZIP into a permanent folder. Keep the executable and versioned bridge DLL together.',
              'Close other taskbar customization tools, then open TransparentBar. Find its tray icon near the clock or in the tray overflow menu.',
              'Use Taskbar connector to enable or disable the maximized-window strip. Set Run at sign-in only if you want it.',
              'Choose Exit from the tray to restore the saved taskbar appearance. If Windows rejects restoration, the app reports an error and retains its saved state.'
            ]}
          ]},
          {id:'requirements',title:'Compatibility and connector limits',blocks:[
            {kind:'table',headings:['Item','Supported scope'],rows:[['Operating system','Windows 10 or Windows 11 on x64. ARM64 is not supported.'],['Taskbar','Separate legacy and XAML paths. Compatibility can change after Windows updates.'],['Connector','Primary and secondary bottom-docked taskbars with auto-hide off. Other placements and fullscreen windows hide it.'],['Screen sampling','A thin band above the overlay, not a capture of the whole application. Display sleep and session lock pause sampling.'],['Portable updates','Keep EXE and versioned bridge DLL together. If you move the folder, disable and re-enable startup from the new location.']]},
            {kind:'p',text:'The v0.2.4 Task Manager capture showed 3.9 MB for the host and 0% rounded CPU, excluding the bridge inside Explorer. It is one snapshot, not a fixed memory budget or a guarantee for other Windows setups.'}
          ]},
          {id:'questions',title:'Common taskbar questions',blocks:[
            {kind:'note',title:'Why is the taskbar still opaque?',text:'Close other taskbar tools and check whether a Windows update or shell modification changed the taskbar. The guide includes startup logs and the --diagnose command for a bug report.'},
            {kind:'note',title:'Can I use this without installing an app?',text:'TransparentBar must run to manage transparency. The portable ZIP avoids an installer but still runs the application and its bridge.'},
            {kind:'note',title:'What happens when I exit?',text:'Exit attempts to restore the saved appearance. The XAML bridge also watches for the host process to exit. A restoration failure is reported rather than discarded.'}
          ]}
        ]
      },
      id: {
        title:'TransparentBar: Aplikasi Taskbar Transparan Windows 11 & 10 | LivelyDesk',
        heading:'Taskbar transparan untuk Windows 11 dan Windows 10',
        description:'Buat taskbar Windows transparan dengan TransparentBar. Aplikasi Rust gratis dengan menu tray, startup opsional, dan konektor untuk jendela yang dimaksimalkan.',
        intro:'TransparentBar menghapus latar taskbar tanpa menghilangkan ikon dan kontrol Windows. Wallpaper tetap terlihat di belakang aplikasi yang disematkan, dengan pengaturan melalui menu tray native.',
        boundary:'Ini aplikasi Windows x64, bukan perubahan registry tanpa aplikasi. TransparentBar mendukung taskbar legacy dan XAML. Pembaruan Windows serta alat shell lain dapat memengaruhi kompatibilitas.',
        guideSection:'transparentbar-install',
        sections:[
          {id:'features',title:'Taskbar transparan dengan pengaturan tray',blocks:[
            {kind:'ul',items:[
              'Terapkan latar taskbar bening tanpa blur atau efek warna, dengan ikon dan kontrol Windows tetap di tempatnya.',
              'Aktifkan strip konektor opsional pada tepi bawah jendela yang dimaksimalkan. Warnanya mengikuti konten terdekat; jendela fullscreen menyembunyikan strip.',
              'Gunakan Taskbar connector, Connector pattern, dan Reduce connector animation di tray untuk mengatur strip dan transisi warnanya.',
              'Aktifkan Run at sign-in jika ingin aplikasi berjalan bersama Windows. Pilihan ini mati secara default.',
              'Periksa GitHub Releases secara otomatis atau dari tray, lalu buka halaman rilis saat pembaruan tersedia. Aplikasi tidak memproses pembayaran dukungan.'
            ]},
            {kind:'p',text:'Antarmuka memakai Rust dan API Windows tanpa mesin browser. Sampel layar untuk konektor berada di memori, tidak disimpan atau diunggah.'}
          ]},
          {id:'setup',title:'Cara membuat taskbar transparan di Windows',blocks:[
            {kind:'ol',items:[
              'Pilih installer atau ZIP portable dari halaman Releases resmi. Pemakaian normal tidak memerlukan hak administrator.',
              'Untuk versi portable, ekstrak seluruh ZIP ke folder permanen. Simpan EXE dan DLL bridge berversi bersama.',
              'Tutup alat kustomisasi taskbar lain, lalu buka TransparentBar. Cari ikon tray di dekat jam atau pada menu ikon tersembunyi.',
              'Gunakan Taskbar connector untuk mengaktifkan atau mematikan strip jendela. Pilih Run at sign-in hanya jika diperlukan.',
              'Pilih Exit dari tray untuk memulihkan tampilan taskbar yang tersimpan. Jika Windows menolak pemulihan, aplikasi menampilkan error dan mempertahankan status tersimpan.'
            ]}
          ]},
          {id:'requirements',title:'Kompatibilitas dan batas konektor',blocks:[
            {kind:'table',headings:['Bagian','Cakupan dukungan'],rows:[['Sistem operasi','Windows 10 atau Windows 11 x64. ARM64 tidak didukung.'],['Taskbar','Jalur legacy dan XAML terpisah. Kompatibilitas dapat berubah setelah pembaruan Windows.'],['Konektor','Taskbar bawah pada monitor utama dan sekunder, dengan auto-hide dimatikan. Posisi lain dan fullscreen menyembunyikan konektor.'],['Sampling layar','Pita tipis di atas overlay, bukan tangkapan seluruh aplikasi. Layar tidur dan sesi terkunci menjeda sampling.'],['Pembaruan portable','Simpan EXE dan DLL bridge berversi bersama. Jika folder dipindah, matikan lalu aktifkan startup dari lokasi baru.']]},
            {kind:'p',text:'Cuplikan Task Manager v0.2.4 menunjukkan host sebesar 3.9 MB dan CPU dibulatkan 0%, tanpa bridge di dalam Explorer. Ini satu cuplikan, bukan anggaran memori tetap atau jaminan untuk sistem Windows lain.'}
          ]},
          {id:'questions',title:'Pertanyaan tentang taskbar',blocks:[
            {kind:'note',title:'Kenapa taskbar belum transparan?',text:'Tutup alat taskbar lain dan periksa apakah pembaruan Windows atau modifikasi shell mengubah taskbar. Panduan menjelaskan log startup dan perintah --diagnose untuk laporan masalah.'},
            {kind:'note',title:'Bisa dipakai tanpa memasang aplikasi?',text:'TransparentBar harus berjalan untuk mengatur transparansi. ZIP portable tidak membutuhkan installer, tetapi tetap menjalankan aplikasi beserta bridge-nya.'},
            {kind:'note',title:'Apa yang terjadi saat keluar?',text:'Exit mencoba memulihkan tampilan tersimpan. Bridge XAML juga memantau keluarnya proses host. Kegagalan pemulihan ditampilkan, bukan diabaikan.'}
          ]}
        ]
      }
    }
  }
};
