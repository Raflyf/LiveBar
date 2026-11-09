import React, { useState } from 'react';
import { Translation } from '../types/content';
import { Monitor, Image as ImageIcon, Sliders, CheckCircle2, ExternalLink } from 'lucide-react';

interface SimulatorProps {
  t: Translation;
}

type TabKey = 'desktop' | 'library' | 'taskbar' | 'telemetry';

export const DesktopSimulator: React.FC<SimulatorProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('desktop');

  const tabData = {
    desktop: {
      image: 'https://raw.githubusercontent.com/Raflyf/WallpaperLive/main/assets/screenshots/preview-v0.1.5.png',
      alt: 'WallpaperLive playing live video on Windows 11 with transparent taskbar and Task Manager',
      title: t.simulator.captions.desktopTitle,
      desc: t.simulator.captions.desktopDesc,
      tag: 'Windows 11 x64 · Live Playback (Video Asli)',
      repoLink: 'https://github.com/Raflyf/WallpaperLive',
    },
    library: {
      image: 'https://raw.githubusercontent.com/Raflyf/WallpaperLive/main/assets/screenshots/cache-ready-v0.1.6.png',
      alt: 'WallpaperLive native 3x3 thumbnail library and placement controls',
      title: t.simulator.captions.libraryTitle,
      desc: t.simulator.captions.libraryDesc,
      tag: 'WallpaperLive v0.1.6 · Rust / Win32',
      repoLink: 'https://github.com/Raflyf/WallpaperLive',
    },
    taskbar: {
      image: 'https://raw.githubusercontent.com/Raflyf/TransparentBar/main/assets/desktop-preview.png',
      alt: 'TransparentBar on Windows 11 desktop with enlarged taskbar detail',
      title: t.simulator.captions.taskbarTitle,
      desc: t.simulator.captions.taskbarDesc,
      tag: 'Pure Rust DWM Hook',
      repoLink: 'https://github.com/Raflyf/TransparentBar',
    },
    telemetry: {
      image: '/images/resource-use-v0.1.5.png',
      alt: 'Original v0.1.5 Task Manager captures: wallpaperlive.exe at 20.3 MB and 0.5 percent CPU in tray, and 4.5 MB and 0 percent CPU while auto-paused',
      title: t.simulator.captions.telemetryTitle,
      desc: t.simulator.captions.telemetryDesc,
      tag: 'Task Manager · v0.1.5',
      repoLink: 'https://github.com/Raflyf/WallpaperLive#resource-use',
    },
  };

  const current = tabData[activeTab];

  return (
    <section id="simulator" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9541E]/10 border border-[#D9541E]/20 text-xs font-mono text-[#D9541E] font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{t.simulator.tag}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
          {t.simulator.title}
        </h2>
        <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed">
          {t.simulator.subtitle}
        </p>
      </div>

      {/* Clean Interactive Tab Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab('desktop')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'desktop'
              ? 'bg-[#111111] text-[#F3EEE3] font-bold shadow-sm'
              : 'bg-[#FAF7F2] hover:bg-white text-[#111111]/80 border border-[#111111]/10'
          }`}
        >
          <Monitor className="w-4 h-4 text-[#D9541E]" />
          <span>{t.simulator.tabs.desktop}</span>
        </button>

        <button
          onClick={() => setActiveTab('library')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'library'
              ? 'bg-[#111111] text-[#F3EEE3] font-bold shadow-sm'
              : 'bg-[#FAF7F2] hover:bg-white text-[#111111]/80 border border-[#111111]/10'
          }`}
        >
          <Sliders className="w-4 h-4 text-[#D9541E]" />
          <span>{t.simulator.tabs.library}</span>
        </button>

        <button
          onClick={() => setActiveTab('taskbar')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'taskbar'
              ? 'bg-[#111111] text-[#F3EEE3] font-bold shadow-sm'
              : 'bg-[#FAF7F2] hover:bg-white text-[#111111]/80 border border-[#111111]/10'
          }`}
        >
          <ImageIcon className="w-4 h-4 text-[#D9541E]" />
          <span>{t.simulator.tabs.taskbar}</span>
        </button>

        <button
          onClick={() => setActiveTab('telemetry')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
            activeTab === 'telemetry'
              ? 'bg-[#111111] text-[#F3EEE3] font-bold shadow-sm'
              : 'bg-[#FAF7F2] hover:bg-white text-[#111111]/80 border border-[#111111]/10'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{t.simulator.tabs.telemetry}</span>
        </button>
      </div>

      {/* Authentic High-Res Frame */}
      <div className="rounded-3xl p-3 sm:p-5 bg-[#111111] shadow-2xl border border-[#111111]/20">
        
        {/* Frame Top Window Bar */}
        <div className="flex items-center justify-between px-3 py-2 text-white/50 text-xs font-mono border-b border-white/10 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-white/70 font-semibold">{current.tag}</span>
          </div>

          <a
            href={current.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#D9541E] hover:underline"
          >
            <span>Sumber Resmi GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* High-Resolution Video / Capture Display */}
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-white/5">
          {activeTab === 'desktop' ? (
            <video
              src="/video/1109.mp4"
              poster="https://raw.githubusercontent.com/Raflyf/WallpaperLive/main/assets/screenshots/preview-v0.1.5.png"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-contain select-none"
            >
              <source src="/video/1109.mp4" type="video/mp4" />
              <source src="/video/1109.mp4" type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          ) : (
            <img
              key={current.image}
              src={current.image}
              alt={current.alt}
              className="w-full h-full object-contain select-none animate-fade-in"
              loading="lazy"
            />
          )}
        </div>

        {/* Caption Bar */}
        <div className="mt-4 px-3 py-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
          <div>
            <h4 className="font-display font-bold text-sm text-[#F3EEE3] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
              {current.title}
            </h4>
            <p className="text-xs text-white/70 mt-0.5 leading-relaxed">
              {current.desc}
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#D9541E]/20 text-[#D9541E] text-[11px] font-mono shrink-0 font-medium">
            {activeTab === 'desktop' ? 'Dokumentasi v0.1.5 Asli' : t.simulator.tag}
          </span>
        </div>

      </div>

    </section>
  );
};
