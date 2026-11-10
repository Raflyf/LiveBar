import React, { useState, useEffect } from 'react';
import { Language, translations } from './types/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DesktopSimulator } from './components/DesktopSimulator';
import { Features } from './components/Features';
import { Benchmark } from './components/Benchmark';
import { DownloadHub } from './components/DownloadHub';
import { SupportYapp } from './components/SupportYapp';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { emptyRelease, loadRelease, type ProductReleases, type ProductRepo } from './releases';
import { setupMotion } from './motion';
import { setupSmoothScroll, scrollToSection } from './utils/scroll';

export default function App({ initialLang = 'en' }: { initialLang?: Language }): React.JSX.Element {
  const lang = initialLang;
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [themeReady, setThemeReady] = useState(false);
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    setThemeReady(true);
    try { localStorage.setItem('lang', lang); } catch { /* The URL still selects the language. */ }
  }, [lang]);
  const [releases, setReleases] = useState<ProductReleases>({
    WallpaperLive: emptyRelease, TransparentBar: emptyRelease,
  });
  const t = translations[lang];

  useEffect(setupSmoothScroll, []);
  useEffect(setupMotion, []);

  useEffect(() => {
    const controller = new AbortController();
    for (const repo of ['WallpaperLive', 'TransparentBar'] as ProductRepo[]) {
      loadRelease(repo, controller.signal).then(
        release => { if (!controller.signal.aborted) setReleases(current => ({ ...current, [repo]: release })); },
        () => { if (!controller.signal.aborted) setReleases(current => ({ ...current, [repo]: { ...emptyRelease, status: 'unavailable' } })); },
      );
    }
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // The selected theme remains active when storage is unavailable.
    }
  }, [theme, themeReady]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Clean any #hash from address bar on mount while preserving scroll target
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      const timer = window.setTimeout(() => scrollToSection(id)(), 100);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-canvas text-fg flex flex-col font-sans selection:bg-burnt selection:text-ink">
      <Navbar
        t={t}
        lang={lang}
        isDark={theme === 'dark'}
        onToggleTheme={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
        onToggleLang={l => {
          try { localStorage.setItem('lang', l); } catch { /* Keep the choice in this tab. */ }
        }}
      />
      <main className="flex-1">
        <Hero t={t} releases={releases} />
        <DesktopSimulator t={t} />
        <Features t={t} />
        <Benchmark t={t} />
        <DownloadHub t={t} releases={releases} lang={lang} />
        <SupportYapp t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}
