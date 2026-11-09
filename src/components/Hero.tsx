import React from 'react';
import { Translation } from '../types/content';
import { Download, Heart, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  t: Translation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Top Tag */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111]/5 border border-[#111111]/10 text-xs font-mono text-[#111111]/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#D9541E] animate-pulse"></span>
          <span>{t.hero.badge}</span>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
          {t.hero.titlePart1} <br />
          <span className="text-[#D9541E] italic font-normal underline decoration-[#D9541E]/30 decoration-wavy decoration-2">
            {t.hero.titlePart2}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#111111]/75 leading-relaxed max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D9541E] text-white font-semibold text-sm hover:bg-[#c24615] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#D9541E]/20"
          >
            <Download className="w-4 h-4" />
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 opacity-75" />
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-[#F3EEE3] font-semibold text-sm hover:bg-[#1a1a1a] transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            <Heart className="w-4 h-4 text-[#D9541E] fill-[#D9541E]" />
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        <p className="text-xs font-mono text-[#111111]/50 pt-1">
          {t.hero.metaInfo}
        </p>
      </div>

      {/* 3 Value Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 pt-8 border-t border-[#111111]/10">
        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#111111]/8 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#111111]/5 text-[#D9541E]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl text-[#111111]">
              {t.hero.stat1}
            </div>
            <div className="text-xs text-[#111111]/70 font-medium mt-0.5">
              {t.hero.stat1Sub}
            </div>
          </div>
        </div>

        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#111111]/8 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#111111]/5 text-[#D9541E]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl text-[#111111]">
              {t.hero.stat2}
            </div>
            <div className="text-xs text-[#111111]/70 font-medium mt-0.5">
              {t.hero.stat2Sub}
            </div>
          </div>
        </div>

        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#111111]/8 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#111111]/5 text-[#D9541E]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-2xl text-[#111111]">
              {t.hero.stat3}
            </div>
            <div className="text-xs text-[#111111]/70 font-medium mt-0.5">
              {t.hero.stat3Sub}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
