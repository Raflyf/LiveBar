import React from 'react';
import { Translation, Language } from '../types/content';
import { Heart, Download, Moon, Sun, BookOpen } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

interface NavbarProps {
  t: Translation;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, lang, onToggleLang, isDark, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-fg/10 transition-colors">
      <div data-reveal className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          onClick={scrollToSection('top')}
          aria-label="LivelyDesk: WallpaperLive & TransparentBar"
          className="flex min-w-0 items-center gap-2.5 group cursor-pointer text-left"
        >
          <img src="/favicon.svg" alt="" width="36" height="36" className="h-9 w-9 shrink-0 group-hover:scale-105 transition-transform" />
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-fg leading-none">
              LivelyDesk
            </span>
            <span className="text-[10px] text-fg/70 font-mono tracking-wider uppercase mt-0.5">
              WallpaperLive <span className="text-accent-text font-normal">&amp;</span> TransparentBar
            </span>
          </div>
        </button>

        {/* Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-fg/80">
          <button 
            onClick={scrollToSection('simulator')} 
            className="hover:text-accent-text transition-colors cursor-pointer"
          >
            {t.nav.simulator}
          </button>
          <button 
            onClick={scrollToSection('features')} 
            className="hover:text-accent-text transition-colors cursor-pointer"
          >
            {t.nav.features}
          </button>
          <button 
            onClick={scrollToSection('benchmark')} 
            className="hover:text-accent-text transition-colors cursor-pointer"
          >
            {t.nav.benchmark}
          </button>
          <button 
            onClick={scrollToSection('download')} 
            className="hover:text-accent-text transition-colors cursor-pointer"
          >
            {t.nav.download}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={lang === 'id' ? '/doc/id' : '/doc'}
            aria-label={t.nav.docs}
            className="motion-button min-h-11 min-w-10 inline-flex items-center justify-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-fg/80 hover:text-accent-text"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Docs</span>
          </a>
          {/* Language Switcher */}
          <div className="flex items-center bg-fg/5 rounded-lg p-0.5 border border-fg/10 text-xs font-mono">
            <button
              onClick={() => onToggleLang('id')}
              className={`min-h-9 min-w-9 px-2 py-1 rounded-md transition-all cursor-pointer ${
                lang === 'id' 
                  ? 'bg-inverse text-on-inverse font-bold shadow-sm'
                  : 'text-fg/70 hover:text-fg'
              }`}
              aria-pressed={lang === 'id'}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`min-h-9 min-w-9 px-2 py-1 rounded-md transition-all cursor-pointer ${
                lang === 'en' 
                  ? 'bg-inverse text-on-inverse font-bold shadow-sm'
                  : 'text-fg/70 hover:text-fg'
              }`}
              aria-pressed={lang === 'en'}
              title="English"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={lang === 'id' ? 'Mode gelap' : 'Dark mode'}
            title={lang === 'id'
              ? (isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap')
              : (isDark ? 'Switch to light mode' : 'Switch to dark mode')}
            onClick={onToggleTheme}
            className="flex h-11 w-14 shrink-0 cursor-pointer items-center justify-center rounded-lg hover:bg-fg/5"
          >
            <span aria-hidden="true" className={
              `relative h-7 w-12 rounded-full border border-fg/20 ${isDark ? 'bg-burnt' : 'bg-fg/15'}`
            }>
              <span className={
                `theme-switch-thumb absolute top-[3px] left-[3px] flex h-5 w-5 items-center justify-center rounded-full bg-ink text-cream ${isDark ? 'translate-x-5' : ''}`
              }>
                {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={scrollToSection('support')}
            className="motion-button hidden min-h-11 sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-burnt/30 text-xs font-semibold text-accent-text hover:bg-burnt/10 transition-colors cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-burnt" aria-hidden="true" />
            <span>{t.nav.supportBtn}</span>
          </button>

          {/* Primary Download CTA Button (Clean Scroll) */}
          <button
            onClick={scrollToSection('download')}
            aria-label={t.nav.downloadBtn}
            className="motion-button min-h-11 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-inverse text-on-inverse text-xs font-semibold hover:bg-burnt hover:text-ink transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.nav.downloadBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
