import React, { useState, useEffect } from 'react';
import { Translation } from '../types/content';
import { Download, Github, Monitor, Terminal, ExternalLink } from 'lucide-react';

interface DownloadHubProps {
  t: Translation;
}

interface ReleaseState {
  version: string;
  downloadUrl: string;
  sizeMb: string;
  downloads: number;
}

export const DownloadHub: React.FC<DownloadHubProps> = ({ t }) => {
  // Baseline initial state (graceful fallback if offline or GitHub rate-limited)
  const [wl, setWl] = useState<ReleaseState>({
    version: 'v0.1.5',
    downloadUrl: 'https://github.com/Raflyf/WallpaperLive/releases/download/v0.1.5/wallpaperlivesetup-v0.1.5.exe',
    sizeMb: '3.1 MB',
    downloads: 37,
  });

  const [tb, setTb] = useState<ReleaseState>({
    version: 'v0.2.3',
    downloadUrl: 'https://github.com/Raflyf/TransparentBar/releases/download/v0.2.3/TransparentBar-setup-v0.2.3.exe',
    sizeMb: '2.2 MB',
    downloads: 66,
  });

  // Automated fetch from GitHub API on every page visit
  useEffect(() => {
    async function syncLatestReleases() {
      try {
        const [resWl, resTb] = await Promise.all([
          fetch('https://api.github.com/repos/Raflyf/WallpaperLive/releases'),
          fetch('https://api.github.com/repos/Raflyf/TransparentBar/releases'),
        ]);

        if (resWl.ok) {
          const releasesWl = await resWl.json();
          if (Array.isArray(releasesWl) && releasesWl.length > 0) {
            const latest = releasesWl[0];
            const exeAsset = latest.assets?.find((a: any) => a.name.endsWith('.exe')) || latest.assets?.[0];
            let totalDl = 0;
            for (const rel of releasesWl) {
              for (const a of rel.assets || []) {
                totalDl += a.download_count || 0;
              }
            }

            setWl({
              version: latest.tag_name || 'v0.1.5',
              downloadUrl: exeAsset?.browser_download_url || 'https://github.com/Raflyf/WallpaperLive/releases/latest',
              sizeMb: exeAsset?.size ? `${(exeAsset.size / (1024 * 1024)).toFixed(1)} MB` : '3.1 MB',
              downloads: totalDl > 0 ? totalDl : 37,
            });
          }
        }

        if (resTb.ok) {
          const releasesTb = await resTb.json();
          if (Array.isArray(releasesTb) && releasesTb.length > 0) {
            const latest = releasesTb[0];
            const exeAsset = latest.assets?.find((a: any) => a.name.endsWith('.exe')) || latest.assets?.[0];
            let totalDl = 0;
            for (const rel of releasesTb) {
              for (const a of rel.assets || []) {
                totalDl += a.download_count || 0;
              }
            }

            setTb({
              version: latest.tag_name || 'v0.2.3',
              downloadUrl: exeAsset?.browser_download_url || 'https://github.com/Raflyf/TransparentBar/releases/latest',
              sizeMb: exeAsset?.size ? `${(exeAsset.size / (1024 * 1024)).toFixed(1)} MB` : '2.2 MB',
              downloads: totalDl > 0 ? totalDl : 66,
            });
          }
        }
      } catch {
        // Keeps verified baseline silently if network error
      }
    }

    syncLatestReleases();
  }, []);

  return (
    <section id="download" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9541E]/10 border border-[#D9541E]/20 text-xs font-mono text-[#D9541E] font-semibold">
          <Download className="w-3.5 h-3.5" />
          <span>{t.download.badge}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
          {t.download.title}
        </h2>
        <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed">
          {t.download.subtitle}
        </p>
      </div>

      {/* Two Main Cards: WallpaperLive & TransparentBar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Card 1: WallpaperLive */}
        <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#111111]/10 flex flex-col justify-between shadow-xs hover:border-[#D9541E]/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#111111] text-[#F3EEE3] text-xs font-mono font-semibold">
                {wl.version} Latest
              </span>
              <span className="text-xs font-mono text-[#111111]/50">GPL-3.0 License</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#111111] mb-2">
              {t.download.wpTitle}
            </h3>
            <p className="text-sm text-[#111111]/75 mb-6 leading-relaxed">
              {t.download.wpDesc}
            </p>

            {/* Feature Checklist */}
            <ul className="text-xs font-mono text-[#111111]/70 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
                Video player (MP4, WebM), GIF, and JPG/PNG
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
                3x3 Thumbnail library with instant cache
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
                Auto pause on fullscreen applications
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#111111]/10">
            {/* Direct dynamic download link to latest .exe */}
            <a
              href={wl.downloadUrl}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#D9541E] text-white font-semibold text-xs sm:text-sm hover:bg-[#c24615] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#D9541E]/20"
            >
              <Download className="w-4 h-4" />
              <span>{t.download.installerBtn}</span>
            </a>

            {/* Nusa Style Dynamic Version, Size & Download Counter Metric */}
            <div className="text-center py-0.5">
              <div className="text-[11px] text-[#111111]/50 font-mono">
                Version {wl.version.replace(/^v/, '')}, about {wl.sizeMb}.
              </div>
              <div className="text-xs font-mono text-[#111111]/80 mt-0.5">
                <strong className="text-[#111111] font-bold text-sm">{wl.downloads.toLocaleString()}</strong> {t.download.downloadsSoFar}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/Raflyf/WallpaperLive/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white text-[#111111] border border-[#111111]/10 text-xs font-medium transition-colors"
              >
                <span>Releases</span>
                <ExternalLink className="w-3 h-3 text-[#111111]/50" />
              </a>

              <a
                href="https://github.com/Raflyf/WallpaperLive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#111111] text-[#F3EEE3] text-xs font-medium hover:bg-[#1a1a1a] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: TransparentBar */}
        <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#111111]/10 flex flex-col justify-between shadow-xs hover:border-[#D9541E]/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#D9541E] text-white text-xs font-mono font-semibold">
                {tb.version} Latest
              </span>
              <span className="text-xs font-mono text-[#111111]/50">MIT License</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#111111] mb-2">
              {t.download.tbTitle}
            </h3>
            <p className="text-sm text-[#111111]/75 mb-6 leading-relaxed">
              {t.download.tbDesc}
            </p>

            {/* Feature Checklist */}
            <ul className="text-xs font-mono text-[#111111]/70 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
                Zero background bloat (1.6 MB RAM)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
                100% True transparency via Windows DWM hooks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]"></span>
                Native tray menu with startup at sign-in
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#111111]/10">
            {/* Direct dynamic download link to latest .exe */}
            <a
              href={tb.downloadUrl}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#111111] text-[#F3EEE3] font-semibold text-xs sm:text-sm hover:bg-[#1a1a1a] transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#D9541E]" />
              <span>{t.download.installerBtn}</span>
            </a>

            {/* Nusa Style Dynamic Version, Size & Download Counter Metric */}
            <div className="text-center py-0.5">
              <div className="text-[11px] text-[#111111]/50 font-mono">
                Version {tb.version.replace(/^v/, '')}, about {tb.sizeMb}.
              </div>
              <div className="text-xs font-mono text-[#111111]/80 mt-0.5">
                <strong className="text-[#111111] font-bold text-sm">{tb.downloads.toLocaleString()}</strong> {t.download.downloadsSoFar}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/Raflyf/TransparentBar/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white text-[#111111] border border-[#111111]/10 text-xs font-medium transition-colors"
              >
                <span>Releases</span>
                <ExternalLink className="w-3 h-3 text-[#111111]/50" />
              </a>

              <a
                href="https://github.com/Raflyf/TransparentBar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#111111] text-[#F3EEE3] text-xs font-medium hover:bg-[#1a1a1a] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* System Requirements and Security Banner */}
      <div className="bg-[#111111]/5 p-5 rounded-2xl border border-[#111111]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#111111]/70">
        <div className="flex items-center gap-2.5">
          <Monitor className="w-4 h-4 text-[#D9541E] shrink-0" />
          <span>{t.download.requirements}</span>
        </div>
        <div className="flex items-center gap-2 text-[#111111]/60">
          <Terminal className="w-4 h-4 shrink-0" />
          <span>{t.download.checksumNote}</span>
        </div>
      </div>

    </section>
  );
};
