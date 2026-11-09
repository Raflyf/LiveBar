import React from 'react';
import { Translation } from '../types/content';
import { Zap, CheckCircle2 } from 'lucide-react';

interface BenchmarkProps {
  t: Translation;
}

export const Benchmark: React.FC<BenchmarkProps> = ({ t }) => {
  return (
    <section id="benchmark" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Container with Ink Black Contrast Background */}
      <div className="bg-[#111111] text-[#F3EEE3] rounded-3xl p-6 sm:p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Glow background accent */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#D9541E]/20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#D9541E] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.benchmark.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#F3EEE3]">
            {t.benchmark.title}
          </h2>
          <p className="text-sm sm:text-base text-[#F3EEE3]/70 leading-relaxed">
            {t.benchmark.subtitle}
          </p>
        </div>

        {/* Visual Benchmark Bars */}
        <div className="space-y-8 mb-12">
          
          {/* 1. RAM Footprint Comparison */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex justify-between items-center text-sm font-mono">
              <span className="text-white/80 font-bold">{t.benchmark.ramFootprint}</span>
              <span className="text-xs text-white/50">Lebih rendah lebih baik</span>
            </div>

            {/* Our Suite */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#D9541E] font-bold">{t.benchmark.suiteName}</span>
                <span className="text-[#D9541E] font-bold">~20 MB RAM</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div className="bg-[#D9541E] h-full rounded-full w-[8%]"></div>
              </div>
            </div>

            {/* Competitor */}
            <div className="space-y-1.5 opacity-60">
              <div className="flex justify-between text-xs font-mono text-white/70">
                <span>{t.benchmark.competitorName}</span>
                <span>~260 MB RAM</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div className="bg-white/50 h-full rounded-full w-[60%]"></div>
              </div>
            </div>

            {/* Electron Apps */}
            <div className="space-y-1.5 opacity-40">
              <div className="flex justify-between text-xs font-mono text-white/70">
                <span>{t.benchmark.electronName}</span>
                <span>~450 MB RAM</span>
              </div>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div className="bg-red-400 h-full rounded-full w-[95%]"></div>
              </div>
            </div>
          </div>

          {/* 2. Side-by-side Technical Metrics Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white/50">
                  <th className="py-3 px-4">Metrik</th>
                  <th className="py-3 px-4 text-[#D9541E] font-bold">WallpaperLive + TransparentBar</th>
                  <th className="py-3 px-4">Wallpaper Engine + TranslucentTB</th>
                  <th className="py-3 px-4">Aplikasi Web / Electron</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">{t.benchmark.ramFootprint}</td>
                  <td className="py-3 px-4 text-[#D9541E] font-bold">~18 MB + ~2 MB</td>
                  <td className="py-3 px-4">~220 MB + ~40 MB</td>
                  <td className="py-3 px-4">350 - 500 MB</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">{t.benchmark.cpuIdle}</td>
                  <td className="py-3 px-4 text-[#D9541E] font-bold">0.0% (Auto Suspend)</td>
                  <td className="py-3 px-4">1.5% - 3.0%</td>
                  <td className="py-3 px-4">2.0% - 6.0%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">{t.benchmark.packageSize}</td>
                  <td className="py-3 px-4 text-[#D9541E] font-bold">&lt; 5 MB</td>
                  <td className="py-3 px-4">~350 MB</td>
                  <td className="py-3 px-4">~120 MB</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">{t.benchmark.startupTime}</td>
                  <td className="py-3 px-4 text-[#D9541E] font-bold">&lt; 0.2 detik</td>
                  <td className="py-3 px-4">~3.5 detik</td>
                  <td className="py-3 px-4">~5.2 detik</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Conclusion Badge */}
        <div className="bg-[#D9541E]/15 border border-[#D9541E]/30 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm font-medium text-[#F3EEE3]">
          <CheckCircle2 className="w-5 h-5 text-[#D9541E] shrink-0" />
          <span>{t.benchmark.conclusion}</span>
        </div>

      </div>

    </section>
  );
};
