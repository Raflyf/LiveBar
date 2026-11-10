import { docs, docSources, type DocBlock, type DocGroup } from './content.ts';

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]!));

const externalLink = (label: string, href: string) => {
  const url = new URL(href);
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Documentation links must use HTTPS without credentials');
  return '<a href="' + escapeHtml(url.href) + '">' + escapeHtml(label) + '</a>';
};

export function renderBlock(block: DocBlock, title: string): string {
  switch (block.kind) {
    case 'p': return '<p>' + escapeHtml(block.text) + '</p>';
    case 'ol':
    case 'ul': return '<' + block.kind + '>' + block.items.map(item => '<li>' + escapeHtml(item) + '</li>').join('') + '</' + block.kind + '>';
    case 'code': return '<pre class="docs-code" tabindex="0"><code class="language-' + block.language + '">' + escapeHtml(block.text) + '</code></pre>';
    case 'note': return '<aside class="docs-note"><strong>' + escapeHtml(block.title) + '</strong><p>' + escapeHtml(block.text) + '</p></aside>';
    case 'links': return '<div class="docs-links">' + block.items.map(link => externalLink(link.label, link.url)).join('') + '</div>';
    case 'table': return '<div class="docs-table-wrap" role="region" tabindex="0" aria-label="' + escapeHtml(title) + '"><table class="docs-table"><thead><tr>' + block.headings.map(heading => '<th scope="col">' + escapeHtml(heading) + '</th>').join('') + '</tr></thead><tbody>' + block.rows.map(row => '<tr>' + row.map(cell => '<td>' + escapeHtml(cell) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  }
}

export function renderSiteHeader(lang: 'en' | 'id', paths: Record<'en' | 'id', string>) {
  const id = lang === 'id';
  const home = id ? '/id' : '/';
  const labels = id
    ? {home:'Beranda',docs:'Navigasi',language:'Bahasa',theme:'Mode gelap',download:'Unduh'}
    : {home:'Home',docs:'Navigation',language:'Language',theme:'Dark mode',download:'Download'};
  return '<header class="docs-topbar"><div data-reveal class="docs-topbar-inner"><a href="' + home + '" class="docs-brand" aria-label="LivelyDesk: ' + labels.home + '"><img src="/favicon.svg" alt="" width="36" height="36" /><span>LivelyDesk</span></a>' +
    '<nav class="docs-controls" aria-label="' + labels.docs + '"><a href="' + home + '">' + labels.home + '</a><div class="docs-language" role="group" aria-label="' + labels.language + '">' +
    '<a href="' + paths.id + '" hreflang="id" lang="id" data-docs-language' + (id ? ' aria-current="page"' : '') + '>ID</a>' +
    '<a href="' + paths.en + '" hreflang="en" lang="en" data-docs-language' + (!id ? ' aria-current="page"' : '') + '>EN</a></div>' +
    '<button type="button" role="switch" aria-checked="true" aria-label="' + labels.theme + '" data-docs-theme disabled>' +
    '<svg class="docs-theme-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20.7 13.2A9 9 0 0 1 10.8 3.3a9 9 0 1 0 9.9 9.9Z"/></svg>' +
    '<svg class="docs-theme-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg></button>' +
    '<a class="docs-download" href="' + home + '#download">' + labels.download + '</a></nav></div></header>' ;
}

export function renderSiteFooter(lang: 'en' | 'id') {
  const id = lang === 'id';
  const suffix = id ? '/id' : '';
  return '<footer class="docs-footer"><div data-reveal><span>LivelyDesk</span><a href="/wallpaperlive' + suffix + '">WallpaperLive</a><a href="/transparentbar' + suffix + '">TransparentBar</a><a href="/doc' + suffix + '">' + (id ? 'Panduan' : 'User guide') + '</a><a href="' + (id ? '/id' : '/') + '#support">' + (id ? 'Dukung pengembangan' : 'Support development') + '</a><a href="#docs-main">' + (id ? 'Kembali ke atas' : 'Back to top') + '</a></div></footer>';
}

export function renderDocumentation(lang: 'en' | 'id') {
  const content = docs[lang];
  const id = lang === 'id';
  const origin = 'https://livelydesk.vercel.app';
  const canonical = origin + (id ? '/doc/id' : '/doc');
  const labels = id
    ? { home: 'Beranda', docs: 'Dokumentasi', contents: 'Daftar isi', skip: 'Langsung ke panduan', language: 'Bahasa', theme: 'Mode gelap', download: 'Unduh', source: 'Sumber panduan', section: 'Tautan ke', support: 'Dukung pengembangan' }
    : { home: 'Home', docs: 'Documentation', contents: 'On this page', skip: 'Skip to the guide', language: 'Language', theme: 'Dark mode', download: 'Download', source: 'Guide sources', section: 'Link to', support: 'Support development' };
  const title = labels.docs + ' | LivelyDesk';
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'TechArticle', headline: content.title,
    description: content.summary, inLanguage: lang, url: canonical,
    isPartOf: { '@type': 'WebSite', name: 'LivelyDesk', url: origin + '/' },
    citation: docSources.map(source => source.url),
  }).replace(/</g, '\\u003c');
  const head = [
    '<title>' + escapeHtml(title) + '</title>',
    '<meta name="description" content="' + escapeHtml(content.summary) + '" />',
    '<meta name="robots" content="index, follow" />',
    '<link rel="canonical" href="' + canonical + '" />',
    '<link rel="alternate" hreflang="en" href="' + origin + '/doc" />',
    '<link rel="alternate" hreflang="id" href="' + origin + '/doc/id" />',
    '<link rel="alternate" hreflang="x-default" href="' + origin + '/doc" />',
    '<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48 64x64" />',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />',
    '<meta property="og:type" content="article" />',
    '<meta property="og:site_name" content="LivelyDesk" />',
    '<meta property="og:title" content="' + escapeHtml(title) + '" />',
    '<meta property="og:description" content="' + escapeHtml(content.summary) + '" />',
    '<meta property="og:url" content="' + canonical + '" />',
    '<meta property="og:image" content="' + origin + '/icons/livelydesk.png" />',
    '<meta name="twitter:card" content="summary" />',
    '<meta name="twitter:title" content="' + escapeHtml(title) + '" />',
    '<meta name="twitter:description" content="' + escapeHtml(content.summary) + '" />',
    '<meta name="twitter:image" content="' + origin + '/icons/livelydesk.png" />',
    '<script type="application/ld+json">' + structuredData + '</script>',
    '<script>try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch{document.documentElement.dataset.theme="dark"}</script>',
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&amp;family=JetBrains+Mono:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />',
  ].join('\n');
  const toc = (Object.entries(content.groups) as [DocGroup, string][]).map(([group, name]) =>
    '<div data-reveal class="docs-toc-group"><p class="docs-toc-title">' + escapeHtml(name) + '</p><ul>' + content.sections.filter(section => section.group === group).map(section => '<li><a href="#' + escapeHtml(section.id) + '">' + escapeHtml(section.title) + '</a></li>').join('') + '</ul></div>'
  ).join('');
  const sections = content.sections.map(section => '<section data-reveal id="' + escapeHtml(section.id) + '" class="docs-section"><h2>' + escapeHtml(section.title) + '<a class="docs-heading-link" href="#' + escapeHtml(section.id) + '" aria-label="' + escapeHtml(labels.section + ' ' + section.title) + '">#</a></h2>' + section.blocks.map(block => renderBlock(block, section.title)).join('') + '</section>').join('\n');
  const body =
    '<a class="docs-skip" href="#docs-main">' + labels.skip + '</a>' +
    renderSiteHeader(lang, {en:'/doc',id:'/doc/id'}) +
    '<div class="docs-layout"><aside class="docs-sidebar" data-lenis-prevent-wheel><details class="docs-contents" open><summary>' + labels.contents + '</summary><nav aria-label="' + labels.contents + '">' + toc + '</nav></details></aside>' +
    '<main id="docs-main" tabindex="-1" class="docs-main"><nav class="docs-breadcrumbs" aria-label="Breadcrumb"><a href="' + (id ? '/id' : '/') + '">' + labels.home + '</a><span aria-hidden="true">/</span><span aria-current="page">' + labels.docs + '</span></nav>' +
    '<div data-reveal class="docs-intro hero-line"><h1>' + escapeHtml(content.title) + '</h1><p>' + escapeHtml(content.summary) + '</p><div class="docs-source-list"><span>' + labels.source + ':</span>' + docSources.map(source => externalLink(source.name + ' README', source.url)).join('') + '</div></div>' +
    sections + '</main></div>' +
    renderSiteFooter(lang);
  return { head, body };
}
