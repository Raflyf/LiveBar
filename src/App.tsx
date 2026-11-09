import { useState, useEffect } from 'react';
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

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('lang');
        if (saved === 'en' || saved === 'id') return saved;
      } catch {
        // Storage may be blocked; English still works in this tab.
      }
    }
    return 'en';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  );
  const [releases, setReleases] = useState<ProductReleases>({
    WallpaperLive: emptyRelease, TransparentBar: emptyRelease,
  });
  const t = translations[lang];

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
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // The selected theme remains active when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Clean any #hash from address bar on mount while preserving scroll target
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Immediately strip the #hash from the address bar
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
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
          setLang(l);
          try { localStorage.setItem('lang', l); } catch { /* Keep the choice in this tab. */ }
        }}
      />
      <main className="flex-1">
        <Hero t={t} releases={releases} />
        <DesktopSimulator t={t} />
        <Features t={t} />
        <Benchmark t={t} />
        <DownloadHub t={t} releases={releases} />
        <SupportYapp t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
