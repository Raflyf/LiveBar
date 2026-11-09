import React from 'react';
import { Translation } from '../types/content';
import type { ProductReleases } from '../releases';
import { Download, Github, Monitor, Terminal, ExternalLink } from 'lucide-react';

interface DownloadHubProps {
  t: Translation;
  releases: ProductReleases;
}

export const DownloadHub: React.FC<DownloadHubProps> = ({ t, releases }) => {
  const wl = releases.WallpaperLive;
  const tb = releases.TransparentBar;
  const statusLabel = (status: string) => status === 'loading' ? t.download.releaseLoading : t.download.releaseUnavailable;

  return (
    <section id="download" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burnt/10 border border-burnt/20 text-xs font-mono text-accent-text font-semibold">
          <Download className="w-3.5 h-3.5" />
          <span>{t.download.badge}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg tracking-tight">
          {t.download.title}
        </h2>
        <p className="text-sm sm:text-base text-fg/70 leading-relaxed">
          {t.download.subtitle}
        </p>
      </div>

      {/* Two Main Cards: WallpaperLive & TransparentBar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Card 1: WallpaperLive */}
        <div className="bg-surface p-8 rounded-3xl border border-fg/10 flex flex-col justify-between shadow-xs hover:border-burnt/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-inverse text-on-inverse text-xs font-mono font-semibold">
                {wl.version ? `${wl.version} ${t.download.latest}` : statusLabel(wl.status)}
              </span>
              <span className="text-xs font-mono text-fg/70">GPL-3.0 License</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img src="/icons/wallpaperlive.png" alt="WallpaperLive logo" width="64" height="64" loading="lazy" className="h-16 w-16 shrink-0 object-contain" />
              <h3 className="font-display text-2xl font-bold text-fg">{t.download.wpTitle}</h3>
            </div>
            <p className="text-sm text-fg/75 mb-6 leading-relaxed">
              {t.download.wpDesc}
            </p>

            {/* Feature Checklist */}
            <ul className="text-xs font-mono text-fg/70 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt"></span>
                Video player (MP4, WebM), GIF, and JPG/PNG
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt"></span>
                3x3 Thumbnail library with instant cache
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt"></span>
                Auto pause on fullscreen applications
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-fg/10">
            {/* Direct dynamic download link to latest .exe */}
            <a
              href={wl.downloadUrl ?? 'https://github.com/Raflyf/WallpaperLive/releases/latest'}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-burnt text-ink font-semibold text-xs sm:text-sm hover:bg-burnt-hover transition-all transform hover:-translate-y-0.5 shadow-md shadow-burnt/20"
            >
              <Download className="w-4 h-4" />
              <span>{wl.downloadUrl ? t.download.installerBtn : t.download.latestRelease}</span>
            </a>

            {/* Nusa Style Dynamic Version, Size & Download Counter Metric */}
            <div className="text-center py-0.5">
              <div className="text-[11px] text-fg/70 font-mono">
                {wl.version ? <>{t.download.version} {wl.version.replace(/^v/, '')}{wl.sizeMb && <>, {t.download.about} {wl.sizeMb}</>}.</> : statusLabel(wl.status)}
              </div>
              <div className="text-xs font-mono text-fg/80 mt-0.5">
                {wl.downloads !== null ? <><strong className="text-fg font-bold text-sm">{wl.downloads.toLocaleString()}</strong> {t.download.downloadsSoFar}</> : t.download.downloadsUnavailable}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/Raflyf/WallpaperLive/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-fg/5 hover:bg-fg/10 text-fg border border-fg/10 text-xs font-medium transition-colors"
              >
                <span>Releases</span>
                <ExternalLink className="w-3 h-3 text-fg/70" />
              </a>

              <a
                href="https://github.com/Raflyf/WallpaperLive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-inverse text-on-inverse text-xs font-medium hover:bg-inverse/90 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: TransparentBar */}
        <div className="bg-surface p-8 rounded-3xl border border-fg/10 flex flex-col justify-between shadow-xs hover:border-burnt/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-burnt text-ink text-xs font-mono font-semibold">
                {tb.version ? `${tb.version} ${t.download.latest}` : statusLabel(tb.status)}
              </span>
              <span className="text-xs font-mono text-fg/70">MIT License</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img src="/icons/transparentbar.png" alt="TransparentBar logo" width="64" height="64" loading="lazy" className="h-16 w-16 shrink-0 object-contain" />
              <h3 className="font-display text-2xl font-bold text-fg">{t.download.tbTitle}</h3>
            </div>
            <p className="text-sm text-fg/75 mb-6 leading-relaxed">
              {t.download.tbDesc}
            </p>

            {/* Feature Checklist */}
            <ul className="text-xs font-mono text-fg/70 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt"></span>
                Zero background bloat (1.6 MB RAM)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt"></span>
                100% True transparency via Windows DWM hooks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burnt"></span>
                Native tray menu with startup at sign-in
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-fg/10">
            {/* Direct dynamic download link to latest .exe */}
            <a
              href={tb.downloadUrl ?? 'https://github.com/Raflyf/TransparentBar/releases/latest'}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-inverse text-on-inverse font-semibold text-xs sm:text-sm hover:bg-inverse/90 transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              <Download className="w-4 h-4 text-burnt" />
              <span>{tb.downloadUrl ? t.download.installerBtn : t.download.latestRelease}</span>
            </a>

            {/* Nusa Style Dynamic Version, Size & Download Counter Metric */}
            <div className="text-center py-0.5">
              <div className="text-[11px] text-fg/70 font-mono">
                {tb.version ? <>{t.download.version} {tb.version.replace(/^v/, '')}{tb.sizeMb && <>, {t.download.about} {tb.sizeMb}</>}.</> : statusLabel(tb.status)}
              </div>
              <div className="text-xs font-mono text-fg/80 mt-0.5">
                {tb.downloads !== null ? <><strong className="text-fg font-bold text-sm">{tb.downloads.toLocaleString()}</strong> {t.download.downloadsSoFar}</> : t.download.downloadsUnavailable}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/Raflyf/TransparentBar/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-fg/5 hover:bg-fg/10 text-fg border border-fg/10 text-xs font-medium transition-colors"
              >
                <span>Releases</span>
                <ExternalLink className="w-3 h-3 text-fg/70" />
              </a>

              <a
                href="https://github.com/Raflyf/TransparentBar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-inverse text-on-inverse text-xs font-medium hover:bg-inverse/90 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* System Requirements and Security Banner */}
      <div className="bg-fg/5 p-5 rounded-2xl border border-fg/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-fg/70">
        <div className="flex items-center gap-2.5">
          <Monitor className="w-4 h-4 text-accent-text shrink-0" />
          <span>{t.download.requirements}</span>
        </div>
        <div className="flex items-center gap-2 text-fg/70">
          <Terminal className="w-4 h-4 shrink-0" />
          <span>{t.download.checksumNote}</span>
        </div>
      </div>

    </section>
  );
};
