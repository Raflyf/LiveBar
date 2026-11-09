import React, { useState } from 'react';
import { Translation } from '../types/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  t: Translation;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      
      <div className="text-center mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fg/5 border border-fg/10 text-xs font-mono text-fg">
          <HelpCircle className="w-3.5 h-3.5 text-accent-text" />
          <span>{t.faq.badge}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-fg tracking-tight">
          {t.faq.title}
        </h2>
      </div>

      <div className="space-y-3.5">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-surface rounded-2xl border border-fg/8 overflow-hidden transition-all shadow-xs"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-fg hover:text-accent-text transition-colors"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 text-fg/70 ${
                  openIdx === idx ? 'rotate-180 text-accent-text' : ''
                }`}
              />
            </button>

            {openIdx === idx && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-fg/75 leading-relaxed border-t border-fg/5 pt-3">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
