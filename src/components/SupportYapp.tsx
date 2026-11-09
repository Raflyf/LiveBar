import React from 'react';
import { Translation } from '../types/content';
import { Heart, ExternalLink, ShieldCheck } from 'lucide-react';

interface SupportYappProps {
  t: Translation;
}

export const SupportYapp: React.FC<SupportYappProps> = ({ t }) => {
  return (
    <section id="support" className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Editorial Card in Warm Cream & Burnt Orange Accent */}
      <div className="bg-surface rounded-3xl border-2 border-burnt/30 p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
        
        {/* Decorative corner tag */}
        <div data-reveal className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-burnt/10 border border-burnt/20 text-xs font-mono font-semibold text-accent-text">
          <Heart className="w-3.5 h-3.5 fill-burnt" />
          <span>Yapp · Saweria</span>
        </div>

        <div data-reveal className="max-w-2xl space-y-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-inverse text-on-inverse text-[11px] font-mono uppercase tracking-wider">
            {t.support.badge}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg tracking-tight">
            {t.support.title}
          </h2>

          <p className="text-base sm:text-lg text-fg/80 leading-relaxed font-medium">
            {t.support.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-fg/70 leading-relaxed">
            {t.support.desc}
          </p>
        </div>

        {/* Tip Tiers Showcase */}
        <div className="motion-sequence grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="motion-card p-4 rounded-2xl bg-surface border border-fg/10 hover:border-burnt hover:shadow-md transition-all text-center group"
          >
            <div className="font-display font-bold text-lg text-fg group-hover:text-accent-text transition-colors">
              {t.support.tier1}
            </div>
            <div className="text-[11px] text-fg/70 font-mono mt-1">Dukungan Harian</div>
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="motion-card p-4 rounded-2xl bg-surface border-2 border-burnt shadow-sm hover:shadow-md transition-all text-center relative group"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-burnt text-ink text-[9px] font-mono font-bold uppercase tracking-wider">
              Favorit
            </div>
            <div className="font-display font-bold text-lg text-accent-text">
              {t.support.tier2}
            </div>
            <div className="text-[11px] text-fg/70 font-mono mt-1">Bahan Bakar Koding</div>
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="motion-card p-4 rounded-2xl bg-surface border border-fg/10 hover:border-burnt hover:shadow-md transition-all text-center group"
          >
            <div className="font-display font-bold text-lg text-fg group-hover:text-accent-text transition-colors">
              {t.support.tier3}
            </div>
            <div className="text-[11px] text-fg/70 font-mono mt-1">Sponsor Pengujian</div>
          </a>
        </div>

        {/* Support links */}
        <div data-reveal className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 pt-4 border-t border-fg/10">
          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-burnt text-ink font-bold text-sm hover:bg-burnt-hover transition-all shadow-lg shadow-burnt/25"
          >
            <Heart className="w-4 h-4 fill-ink" />
            <span>{t.support.yappBtn}</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>

          <a
            href="https://saweria.co/BuyMatcha"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-burnt/50 bg-surface text-fg font-bold text-sm hover:bg-burnt/10 transition-colors"
          >
            <Heart className="w-4 h-4 text-accent-text" aria-hidden="true" />
            <span>{t.support.saweriaBtn}</span>
            <ExternalLink className="w-4 h-4 opacity-75" aria-hidden="true" />
          </a>

          <div className="w-full text-xs text-fg/70 font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-text" />
            <span>{t.support.guarantee}</span>
          </div>
        </div>

      </div>

    </section>
  );
};
