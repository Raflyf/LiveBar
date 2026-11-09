import React from 'react';
import { Translation } from '../types/content';
import { Github, Heart } from 'lucide-react';

interface FooterProps {
  t: Translation;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-fg/10 bg-surface text-fg pt-12 pb-10 px-4 sm:px-6">
      <div data-reveal className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="LivelyDesk" width="32" height="32" loading="lazy" className="h-8 w-8 shrink-0" />
          <div>
            <div className="font-display font-bold text-sm text-fg">
              WallpaperLive &amp; TransparentBar
            </div>
            <div className="text-[11px] font-mono text-fg/70">
              {t.footer.licensedUnder}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-fg/70">
          <a
            href="https://github.com/Raflyf/WallpaperLive"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-text transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>WallpaperLive</span>
          </a>

          <a
            href="https://github.com/Raflyf/TransparentBar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-text transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>TransparentBar</span>
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-text transition-colors flex items-center gap-1.5 text-accent-text font-bold"
          >
            <Heart className="w-3.5 h-3.5 fill-burnt" />
            <span>yapp.ink/raflyf</span>
          </a>
          <a
            href="https://saweria.co/BuyMatcha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-text transition-colors flex items-center gap-1.5 text-accent-text font-bold"
          >
            <Heart className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Saweria</span>
          </a>
        </div>

        {/* Open source promise */}
        <div className="text-xs font-mono text-fg/70 text-center md:text-right">
          {t.footer.openSourcePromise}
        </div>

      </div>

      <div data-reveal className="max-w-6xl mx-auto text-center mt-8 pt-6 border-t border-fg/5 text-[11px] font-mono text-fg/70">
        {t.footer.rights}
      </div>
    </footer>
  );
};
