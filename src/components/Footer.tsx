import React from 'react';
import { Translation } from '../types/content';
import { Monitor, Github, Heart } from 'lucide-react';

interface FooterProps {
  t: Translation;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-[#111111]/10 bg-[#FAF7F2] text-[#111111] pt-12 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-[#D9541E]">
            <Monitor className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-[#111111]">
              WallpaperLive &amp; TransparentBar
            </div>
            <div className="text-[11px] font-mono text-[#111111]/50">
              {t.footer.licensedUnder}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#111111]/70">
          <a
            href="https://github.com/Raflyf/WallpaperLive"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D9541E] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>WallpaperLive</span>
          </a>

          <a
            href="https://github.com/Raflyf/TransparentBar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D9541E] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>TransparentBar</span>
          </a>

          <a
            href="https://yapp.ink/raflyf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D9541E] transition-colors flex items-center gap-1.5 text-[#D9541E] font-bold"
          >
            <Heart className="w-3.5 h-3.5 fill-[#D9541E]" />
            <span>yapp.ink/raflyf</span>
          </a>
        </div>

        {/* Open source promise */}
        <div className="text-xs font-mono text-[#111111]/50 text-center md:text-right">
          {t.footer.openSourcePromise}
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center mt-8 pt-6 border-t border-[#111111]/5 text-[11px] font-mono text-[#111111]/40">
        {t.footer.rights}
      </div>
    </footer>
  );
};
