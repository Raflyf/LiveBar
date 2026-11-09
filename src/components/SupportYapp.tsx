import React from 'react';
import { Translation } from '../types/content';
import { Heart, ExternalLink, Coffee, ArrowUpRight } from 'lucide-react';

interface SupportYappProps {
  t: Translation;
}

export const SupportYapp: React.FC<SupportYappProps> = ({ t }) => {
  return (
    <section id="support" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="support-shell rounded-3xl border border-burnt/30 bg-surface p-5 sm:p-8 md:p-12">
        <div data-reveal className="flex flex-col md:flex-row md:items-end gap-6 mb-9">
          <div className="min-w-0 flex-1 space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg tracking-tight">
              {t.support.title}
            </h2>
            <p className="max-w-2xl text-base text-fg/80 leading-relaxed">
              {t.support.subtitle}
            </p>
          </div>
          <div className="hidden lg:flex shrink-0 items-center gap-2 pb-1" aria-hidden="true">
            <img src="/icons/wallpaperlive.png" alt="" width="44" height="44" loading="lazy" className="h-11 w-11 object-contain" />
            <span className="text-fg/40">+</span>
            <img src="/icons/transparentbar.png" alt="" width="44" height="44" loading="lazy" className="h-11 w-11 object-contain" />
          </div>
        </div>

        <div className="motion-sequence grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            aria-labelledby="support-yapp-title support-yapp-action"
            className="support-platform support-platform-yapp motion-card group relative isolate min-w-0 flex flex-col overflow-hidden rounded-3xl border border-ink/15 p-6 sm:p-8"
          >
            <div className="support-card-art" aria-hidden="true">
              <Heart className="support-card-symbol" strokeWidth={1} />
            </div>
            <div className="relative mb-8 flex items-center gap-2 break-all text-xs font-mono text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-burnt" />
              yapp.ink/raflyf
            </div>
            <h3 id="support-yapp-title" className="relative font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink">Yapp<span className="text-burnt">.</span></h3>
            <p className="relative mt-4 mb-8 max-w-[27ch] text-sm text-ink/80 leading-relaxed">{t.support.yappDesc}</p>
            <span id="support-yapp-action" className="relative mt-auto flex min-h-12 flex-wrap items-center justify-between gap-3 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-cream group-hover:bg-burnt group-hover:text-ink transition-colors">
              {t.support.yappBtn}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </span>
          </a>

          <a
            href="https://saweria.co/BuyMatcha"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            aria-labelledby="support-saweria-title support-saweria-action"
            className="support-platform support-platform-saweria motion-card group relative isolate min-w-0 flex flex-col overflow-hidden rounded-3xl border border-burnt/40 p-6 sm:p-8"
          >
            <div className="support-card-art" aria-hidden="true">
              <Coffee className="support-card-symbol" strokeWidth={1} />
            </div>
            <div className="relative mb-8 flex items-center gap-2 break-all text-xs font-mono text-cream/70">
              <span className="h-1.5 w-1.5 rounded-full bg-burnt" />
              saweria.co/BuyMatcha
            </div>
            <h3 id="support-saweria-title" className="relative font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">Saweria<span className="text-burnt">.</span></h3>
            <p className="relative mt-4 mb-8 max-w-[27ch] text-sm text-cream/80 leading-relaxed">{t.support.saweriaDesc}</p>
            <span id="support-saweria-action" className="relative mt-auto flex min-h-12 flex-wrap items-center justify-between gap-3 rounded-xl bg-burnt px-5 py-3 text-sm font-bold text-ink group-hover:bg-burnt-hover transition-colors">
              {t.support.saweriaBtn}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div data-reveal className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-t border-fg/10 pt-6">
          <p className="max-w-xl text-xs sm:text-sm text-fg/70 leading-relaxed">{t.support.desc}</p>
          <p className="flex shrink-0 items-center gap-2 text-xs text-fg/70">
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-accent-text" aria-hidden="true" />
            {t.support.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
};
