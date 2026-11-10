import { escapeHtml } from './docs/render.ts';

export const siteOrigin = 'https://livelydesk.vercel.app';
export type PageLanguage = 'en' | 'id';

export function renderPageMetadata({ title, description, lang, paths, schema, image = '/icons/livelydesk.png' }: {
  title: string; description: string; lang: PageLanguage;
  paths: Record<PageLanguage, string>; schema: Record<string, unknown>; image?: string;
}) {
  const canonical = siteOrigin + paths[lang];
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  return [
    '<title>' + escapeHtml(title) + '</title>',
    '<meta name="description" content="' + escapeHtml(description) + '" />',
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
    '<link rel="canonical" href="' + canonical + '" />',
    ...(['en', 'id'] as const).map(locale => '<link rel="alternate" hreflang="' + locale + '" href="' + siteOrigin + paths[locale] + '" />'),
    '<link rel="alternate" hreflang="x-default" href="' + siteOrigin + paths.en + '" />',
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="LivelyDesk" />',
    '<meta property="og:locale" content="' + (lang === 'id' ? 'id_ID' : 'en_US') + '" />',
    '<meta property="og:title" content="' + escapeHtml(title) + '" />',
    '<meta property="og:description" content="' + escapeHtml(description) + '" />',
    '<meta property="og:url" content="' + canonical + '" />',
    '<meta property="og:image" content="' + siteOrigin + image + '" />',
    '<meta name="twitter:card" content="summary" />',
    '<meta name="twitter:title" content="' + escapeHtml(title) + '" />',
    '<meta name="twitter:description" content="' + escapeHtml(description) + '" />',
    '<meta name="twitter:image" content="' + siteOrigin + image + '" />',
    '<script type="application/ld+json">' + json + '</script>',
  ].join('\n');
}

export function renderHomeMetadata(lang: PageLanguage) {
  const title = lang === 'id'
    ? 'Wallpaper Bergerak & Taskbar Transparan Windows | LivelyDesk'
    : 'Live Wallpaper & Transparent Taskbar for Windows | LivelyDesk';
  const description = lang === 'id'
    ? 'WallpaperLive memutar video dan GIF lokal sebagai wallpaper. TransparentBar membuat taskbar transparan. Unduh aplikasi dan panduan Windows 10/11 x64.'
    : 'Use your own videos and GIFs as live wallpapers with WallpaperLive. Make the taskbar transparent with TransparentBar. Free apps for Windows 10/11 x64.';
  const paths = { en: '/', id: '/id' };
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': siteOrigin + '/#website', name: 'LivelyDesk', url: siteOrigin + '/', inLanguage: ['en', 'id'], sameAs: 'https://github.com/Raflyf/LivelyDesk' },
      { '@type': 'CollectionPage', '@id': siteOrigin + paths[lang] + '#webpage', url: siteOrigin + paths[lang], name: title, description, inLanguage: lang,
        isPartOf: { '@id': siteOrigin + '/#website' },
        about: ['wallpaperlive', 'transparentbar'].map(slug => ({ '@type': 'SoftwareApplication', name: slug === 'wallpaperlive' ? 'WallpaperLive' : 'TransparentBar', url: siteOrigin + '/' + slug + (lang === 'id' ? '/id' : '') })) },
    ],
  };
  return renderPageMetadata({ title, description, lang, paths, schema });
}
