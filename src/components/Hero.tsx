import React from 'react';
import { Translation } from '../types/content';
import { Download, Heart, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import type { ProductReleases } from '../releases';

interface HeroProps {
  t: Translation;
  releases: ProductReleases;
}

export const Hero: React.FC<HeroProps> = ({ t, releases }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Top Tag */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fg/5 border border-fg/10 text-xs font-mono text-fg/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-burnt animate-pulse"></span>
          <span>{t.hero.badge}</span>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-fg leading-[1.08]">
          {t.hero.titlePart1} <br />
          <span className="text-burnt italic font-normal underline decoration-burnt/30 decoration-wavy decoration-2">
            {t.hero.titlePart2}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-fg/75 leading-relaxed max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={scrollToSection('download')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-burnt text-ink font-semibold text-sm hover:bg-burnt-hover transition-all transform hover:-translate-y-0.5 shadow-md shadow-burnt/20 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 opacity-75" />
          </button>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-inverse text-on-inverse font-semibold text-sm hover:bg-inverse/90 transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            <Heart className="w-4 h-4 text-burnt fill-burnt" />
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        <p className="text-xs font-mono text-fg/70 pt-1">
          WallpaperLive {releases.WallpaperLive.version ?? '—'} · TransparentBar {releases.TransparentBar.version ?? '—'} · {t.hero.metaInfo}
          {(releases.WallpaperLive.status !== 'ready' || releases.TransparentBar.status !== 'ready') && (
            <span className="block mt-1">{releases.WallpaperLive.status === 'unavailable' || releases.TransparentBar.status === 'unavailable'
              ? t.download.releaseUnavailable : t.download.releaseLoading}</span>
          )}
        </p>
      </div>

      {/* 3 Value Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 pt-8 border-t border-fg/10">
        <div className="bg-surface p-5 rounded-2xl border border-fg/8 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-fg/5 text-accent-text">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl text-fg">
              {t.hero.stat1}
            </div>
            <div className="text-xs text-fg/70 font-medium mt-0.5">
              {t.hero.stat1Sub}
            </div>
          </div>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-fg/8 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-fg/5 text-accent-text">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl text-fg">
              {t.hero.stat2}
            </div>
            <div className="text-xs text-fg/70 font-medium mt-0.5">
              {t.hero.stat2Sub}
            </div>
          </div>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-fg/8 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-fg/5 text-accent-text">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl text-fg">
              {t.hero.stat3}
            </div>
            <div className="text-xs text-fg/70 font-medium mt-0.5">
              {t.hero.stat3Sub}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
