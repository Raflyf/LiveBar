import React from 'react';
import { Translation } from '../types/content';
import { Heart, ExternalLink } from 'lucide-react';

interface SupportYappProps {
  t: Translation;
}

export const SupportYapp: React.FC<SupportYappProps> = ({ t }) => {
  return (
    <section id="support" className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div data-reveal className="max-w-2xl space-y-4 mb-10">
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

      <div className="motion-sequence grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="https://yapp.ink/raflyf"
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          className="motion-card group min-w-0 flex flex-col rounded-3xl border border-burnt/30 bg-surface p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="font-display text-2xl font-bold text-fg">Yapp</h3>
            <Heart className="w-5 h-5 text-accent-text" aria-hidden="true" />
          </div>
          <p className="text-xs font-mono text-fg/70 mb-5">yapp.ink/raflyf</p>
          <p className="text-sm text-fg/80 leading-relaxed mb-8">{t.support.yappDesc}</p>
          <span className="mt-auto inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-burnt px-4 py-3 text-sm font-bold text-ink group-hover:bg-burnt-hover transition-colors">
            {t.support.yappBtn}
            <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
          </span>
        </a>

        <a
          href="https://saweria.co/BuyMatcha"
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          className="motion-card group min-w-0 flex flex-col rounded-3xl border border-burnt/30 bg-surface p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="font-display text-2xl font-bold text-fg">Saweria</h3>
            <Heart className="w-5 h-5 text-accent-text" aria-hidden="true" />
          </div>
          <p className="text-xs font-mono text-fg/70 mb-5">saweria.co/BuyMatcha</p>
          <p className="text-sm text-fg/80 leading-relaxed mb-8">{t.support.saweriaDesc}</p>
          <span className="mt-auto inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-burnt px-4 py-3 text-sm font-bold text-ink group-hover:bg-burnt-hover transition-colors">
            {t.support.saweriaBtn}
            <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
          </span>
        </a>
      </div>

      <p data-reveal className="mt-6 text-xs text-fg/70 font-mono text-center">
        {t.support.guarantee}
      </p>
    </section>
  );
};
