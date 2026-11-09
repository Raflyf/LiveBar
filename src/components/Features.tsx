import React from 'react';
import { Translation } from '../types/content';
import { Video, Cpu, BatteryMedium, MonitorCheck, Lock, SlidersHorizontal } from 'lucide-react';

interface FeaturesProps {
  t: Translation;
}

export const Features: React.FC<FeaturesProps> = ({ t }) => {
  const icons = [
    <Video className="w-5 h-5 text-accent-text" />,
    <Cpu className="w-5 h-5 text-accent-text" />,
    <BatteryMedium className="w-5 h-5 text-accent-text" />,
    <MonitorCheck className="w-5 h-5 text-accent-text" />,
    <Lock className="w-5 h-5 text-accent-text" />,
    <SlidersHorizontal className="w-5 h-5 text-accent-text" />
  ];

  const featureItems = [
    { title: t.features.items.f1Title, desc: t.features.items.f1Desc },
    { title: t.features.items.f2Title, desc: t.features.items.f2Desc },
    { title: t.features.items.f3Title, desc: t.features.items.f3Desc },
    { title: t.features.items.f4Title, desc: t.features.items.f4Desc },
    { title: t.features.items.f5Title, desc: t.features.items.f5Desc },
    { title: t.features.items.f6Title, desc: t.features.items.f6Desc },
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fg/5 border border-fg/10 text-xs font-mono text-fg">
          <span>{t.features.badge}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg tracking-tight">
          {t.features.title}
        </h2>
        <p className="text-sm sm:text-base text-fg/70 leading-relaxed">
          {t.features.subtitle}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featureItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-surface p-7 rounded-3xl border border-fg/8 hover:border-burnt/40 transition-all transform hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-fg/5 flex items-center justify-center mb-5">
                {icons[idx]}
              </div>
              <h3 className="font-display text-lg font-bold text-fg mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-fg/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-fg/5 flex items-center justify-between text-[11px] font-mono text-fg/70">
              <span>0{idx + 1} / 06</span>
              <span className="text-accent-text font-medium">Native Win32</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
