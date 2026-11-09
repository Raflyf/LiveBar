import React from 'react';
import { Translation } from '../types/content';
import { Zap, AlertCircle } from 'lucide-react';

interface BenchmarkProps {
  t: Translation;
}

export const Benchmark: React.FC<BenchmarkProps> = ({ t }) => {
  return (
    <section id="benchmark" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Container with Ink Black Background */}
      <div className="media-frame bg-ink text-cream rounded-3xl p-6 sm:p-10 md:p-12 border border-cream/10 shadow-2xl relative overflow-hidden">
        
        {/* Glow background accent */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-burnt/20 blur-3xl pointer-events-none"></div>

        <div data-reveal className="relative z-10 max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/10 border border-cream/15 text-xs font-mono text-accent-text mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.benchmark.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-cream">
            {t.benchmark.title}
          </h2>
          <p className="text-sm sm:text-base text-cream/70 leading-relaxed">
            {t.benchmark.subtitle}
          </p>
        </div>

        {/* Real Task Manager Captured Data Table */}
        <div data-reveal data-lenis-prevent-horizontal className="overflow-x-auto mb-10">
          <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
            <thead>
              <tr className="border-b border-cream/15 text-cream/70 text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4">{t.benchmark.stateCol}</th>
                <th className="py-3 px-4 text-accent-text">{t.benchmark.ramCol}</th>
                <th className="py-3 px-4">{t.benchmark.cpuCol}</th>
                <th className="py-3 px-4 hidden md:table-cell">{t.benchmark.notesCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream/5 text-cream/80">
              {/* Row 1: Cache prep */}
              <tr className="hover:bg-cream/5 transition-colors">
                <td className="py-3.5 px-4 font-sans font-medium text-cream">{t.benchmark.row1State}</td>
                <td className="py-3.5 px-4 font-bold text-cream">{t.benchmark.row1Ram}</td>
                <td className="py-3.5 px-4 text-cream font-bold">{t.benchmark.row1Cpu}</td>
                <td className="py-3.5 px-4 text-cream/70 text-xs hidden md:table-cell">{t.benchmark.row1Notes}</td>
              </tr>

              {/* Row 2: Panel Open */}
              <tr className="hover:bg-cream/5 transition-colors">
                <td className="py-3.5 px-4 font-sans font-medium text-cream">{t.benchmark.row2State}</td>
                <td className="py-3.5 px-4 font-bold text-cream/90">{t.benchmark.row2Ram}</td>
                <td className="py-3.5 px-4 text-cream/90 font-bold">{t.benchmark.row2Cpu}</td>
                <td className="py-3.5 px-4 text-cream/70 text-xs hidden md:table-cell">{t.benchmark.row2Notes}</td>
              </tr>

              {/* Row 3: Desktop playback */}
              <tr className="bg-burnt/10 border-l-2 border-burnt hover:bg-burnt/15 transition-colors">
                <td className="py-3.5 px-4 font-sans font-bold text-cream">{t.benchmark.row3State}</td>
                <td className="py-3.5 px-4 font-bold text-accent-text text-base">{t.benchmark.row3Ram}</td>
                <td className="py-3.5 px-4 text-accent-text font-bold text-base">{t.benchmark.row3Cpu}</td>
                <td className="py-3.5 px-4 text-cream/80 text-xs hidden md:table-cell">{t.benchmark.row3Notes}</td>
              </tr>

              {/* Row 4: Auto-pause */}
              <tr className="hover:bg-cream/5 transition-colors">
                <td className="py-3.5 px-4 font-sans font-medium text-cream">{t.benchmark.row4State}</td>
                <td className="py-3.5 px-4 font-bold text-cream text-base">{t.benchmark.row4Ram}</td>
                <td className="py-3.5 px-4 text-cream font-bold text-base">{t.benchmark.row4Cpu}</td>
                <td className="py-3.5 px-4 text-cream/70 text-xs hidden md:table-cell">{t.benchmark.row4Notes}</td>
              </tr>

              {/* Row 5: TransparentBar */}
              <tr className="bg-cream/5 border-l-2 border-burnt hover:bg-cream/10 transition-colors">
                <td className="py-3.5 px-4 font-sans font-bold text-cream">{t.benchmark.tbRowState}</td>
                <td className="py-3.5 px-4 font-bold text-cream text-base">{t.benchmark.tbRowRam}</td>
                <td className="py-3.5 px-4 text-cream font-bold text-base">{t.benchmark.tbRowCpu}</td>
                <td className="py-3.5 px-4 text-cream/80 text-xs hidden md:table-cell">{t.benchmark.tbRowNotes}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer / Context Box directly echoing author's note */}
        <div data-reveal className="bg-cream/5 border border-cream/10 rounded-2xl p-5 flex items-start gap-3.5 text-xs font-mono text-cream/70 leading-relaxed">
          <AlertCircle className="w-5 h-5 text-cream shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-cream block mb-1">{t.benchmark.contextTitle}</span>
            <span>{t.benchmark.disclaimer}</span>
          </div>
        </div>

      </div>

    </section>
  );
};
