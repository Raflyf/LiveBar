import React from 'react';
import { Translation, Language } from '../types/content';
import { Monitor, Heart, Download } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

interface NavbarProps {
  t: Translation;
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, lang, onToggleLang }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#F3EEE3]/90 backdrop-blur-md border-b border-[#111111]/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          onClick={scrollToSection('top')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center text-[#F3EEE3] shadow-sm group-hover:scale-105 transition-transform">
            <Monitor className="w-5 h-5 text-[#D9541E]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-[#111111] leading-none">
              WallpaperLive <span className="text-[#D9541E] font-normal">&amp;</span> TransparentBar
            </span>
            <span className="text-[10px] text-[#111111]/60 font-mono tracking-wider uppercase mt-0.5">
              Windows Suite
            </span>
          </div>
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#111111]/80">
          <button 
            onClick={scrollToSection('simulator')} 
            className="hover:text-[#D9541E] transition-colors cursor-pointer"
          >
            {t.nav.simulator}
          </button>
          <button 
            onClick={scrollToSection('features')} 
            className="hover:text-[#D9541E] transition-colors cursor-pointer"
          >
            {t.nav.features}
          </button>
          <button 
            onClick={scrollToSection('benchmark')} 
            className="hover:text-[#D9541E] transition-colors cursor-pointer"
          >
            {t.nav.benchmark}
          </button>
          <button 
            onClick={scrollToSection('download')} 
            className="hover:text-[#D9541E] transition-colors cursor-pointer"
          >
            {t.nav.download}
          </button>
          <button 
            onClick={scrollToSection('support')} 
            className="hover:text-[#D9541E] transition-colors cursor-pointer"
          >
            {t.nav.support}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#111111]/5 rounded-lg p-0.5 border border-[#111111]/10 text-xs font-mono">
            <button
              onClick={() => onToggleLang('id')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                lang === 'id' 
                  ? 'bg-[#111111] text-[#F3EEE3] font-bold shadow-sm' 
                  : 'text-[#111111]/60 hover:text-[#111111]'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                lang === 'en' 
                  ? 'bg-[#111111] text-[#F3EEE3] font-bold shadow-sm' 
                  : 'text-[#111111]/60 hover:text-[#111111]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Support Button (External Yapp Link) */}
          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9541E]/30 text-xs font-semibold text-[#D9541E] hover:bg-[#D9541E]/10 transition-colors"
          >
            <Heart className="w-3.5 h-3.5 fill-[#D9541E]" />
            <span>Support</span>
          </a>

          {/* Primary Download CTA Button (Clean Scroll) */}
          <button
            onClick={scrollToSection('download')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#111111] text-[#F3EEE3] text-xs font-semibold hover:bg-[#D9541E] transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.downloadBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
