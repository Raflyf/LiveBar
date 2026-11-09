import { useState } from 'react';
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

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const t = translations[lang];

  return (
    <div id="top" className="min-h-screen bg-[#F3EEE3] text-[#111111] flex flex-col font-sans selection:bg-[#D9541E] selection:text-white">
      <Navbar t={t} lang={lang} onToggleLang={setLang} />
      <main className="flex-1">
        <Hero t={t} />
        <DesktopSimulator t={t} />
        <Features t={t} />
        <Benchmark t={t} />
        <DownloadHub t={t} />
        <SupportYapp t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
