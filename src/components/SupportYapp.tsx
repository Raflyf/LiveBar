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
      <div className="bg-[#FAF7F2] rounded-3xl border-2 border-[#D9541E]/30 p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
        
        {/* Decorative corner tag */}
        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9541E]/10 border border-[#D9541E]/20 text-xs font-mono font-semibold text-[#D9541E]">
          <Heart className="w-3.5 h-3.5 fill-[#D9541E]" />
          <span>Yapp.ink Creator</span>
        </div>

        <div className="max-w-2xl space-y-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#111111] text-[#F3EEE3] text-[11px] font-mono uppercase tracking-wider">
            {t.support.badge}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            {t.support.title}
          </h2>

          <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-medium">
            {t.support.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-[#111111]/65 leading-relaxed">
            {t.support.desc}
          </p>
        </div>

        {/* Tip Tiers Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-[#111111]/10 hover:border-[#D9541E] hover:shadow-md transition-all text-center group"
          >
            <div className="font-display font-bold text-lg text-[#111111] group-hover:text-[#D9541E] transition-colors">
              {t.support.tier1}
            </div>
            <div className="text-[11px] text-[#111111]/60 font-mono mt-1">Dukungan Harian</div>
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border-2 border-[#D9541E] shadow-sm hover:shadow-md transition-all text-center relative group"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#D9541E] text-white text-[9px] font-mono font-bold uppercase tracking-wider">
              Favorit
            </div>
            <div className="font-display font-bold text-lg text-[#D9541E]">
              {t.support.tier2}
            </div>
            <div className="text-[11px] text-[#111111]/60 font-mono mt-1">Bahan Bakar Koding</div>
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-[#111111]/10 hover:border-[#D9541E] hover:shadow-md transition-all text-center group"
          >
            <div className="font-display font-bold text-lg text-[#111111] group-hover:text-[#D9541E] transition-colors">
              {t.support.tier3}
            </div>
            <div className="text-[11px] text-[#111111]/60 font-mono mt-1">Sponsor Pengujian</div>
          </a>
        </div>

        {/* Direct Action to Yapp */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#111111]/10">
          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#D9541E] text-white font-bold text-sm hover:bg-[#c24615] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#D9541E]/25"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>{t.support.yappBtn}</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>

          <div className="text-xs text-[#111111]/60 font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D9541E]" />
            <span>{t.support.guarantee}</span>
          </div>
        </div>

      </div>

    </section>
  );
};
