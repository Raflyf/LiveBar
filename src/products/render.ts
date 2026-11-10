import { products, type ProductSlug } from './content.ts';
import { escapeHtml, renderBlock, renderSiteHeader, renderSiteFooter } from '../docs/render.ts';
import { docSources } from '../docs/content.ts';
import { renderPageMetadata, siteOrigin, type PageLanguage } from '../seo.ts';

export function renderProductPage(slug: ProductSlug, lang: PageLanguage) {
  const product = products[slug];
  const copy = product.copy[lang];
  const id = lang === 'id';
  const paths = { en: '/' + slug, id: '/' + slug + '/id' };
  const home = id ? '/id' : '/';
  const guide = id ? '/doc/id' : '/doc';
  const canonical = siteOrigin + paths[lang];
  const source = docSources.find(item => item.name === product.name)!;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': canonical + '#page', url: canonical, name: copy.title, description: copy.description, inLanguage: lang,
        isPartOf: { '@id': siteOrigin + '/#website' }, mainEntity: { '@id': canonical + '#app' } },
      { '@type': 'SoftwareApplication', '@id': canonical + '#app', name: product.name, url: canonical, description: copy.intro,
        operatingSystem: 'Windows 10, Windows 11 (x64)', applicationCategory: 'UtilitiesApplication', isAccessibleForFree: true,
        image: siteOrigin + product.icon, downloadUrl: product.repository + '/releases/latest', sameAs: product.repository,
        license: product.license === 'MIT' ? 'https://opensource.org/license/mit' : 'https://www.gnu.org/licenses/gpl-3.0.html',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: product.repository + '/releases/latest' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LivelyDesk', item: siteOrigin + home },
        { '@type': 'ListItem', position: 2, name: product.name, item: canonical },
      ] },
    ],
  };
  const head = renderPageMetadata({title:copy.title,description:copy.description,lang,paths,schema,image:product.icon});
  const sections = copy.sections.map(section => '<section data-reveal class="docs-section" id="' + section.id + '"><h2>' + escapeHtml(section.title) + '</h2>' + section.blocks.map(block => renderBlock(block, section.title)).join('') + '</section>').join('');
  const media = slug === 'wallpaperlive'
    ? { width: 1917, height: 883, url: 'https://raw.githubusercontent.com/Raflyf/WallpaperLive/46dad013e6498a963350840e13f6c445e09be5ce/assets/screenshots/cache-ready-v0.1.6.png',
        label: id ? 'Library WallpaperLive dengan thumbnail dan kontrol pemutaran, cuplikan v0.1.6.' : 'WallpaperLive Library with thumbnails and playback controls, v0.1.6 capture.' }
    : { width: 1440, height: 1110, url: 'https://raw.githubusercontent.com/Raflyf/TransparentBar/2ccb731a63a1079ad650690a02ab0aee8724b9b9/assets/desktop-preview.png',
        label: id ? 'Pratinjau desktop Windows 11 dengan detail taskbar transparan.' : 'Windows 11 desktop preview with transparent taskbar detail.' };
  const body = '<a class="docs-skip" href="#docs-main">' + (id ? 'Langsung ke isi' : 'Skip to content') + '</a>' + renderSiteHeader(lang, paths) +
    '<main id="docs-main" tabindex="-1" class="product-page">' +
    '<nav class="docs-breadcrumbs" aria-label="Breadcrumb"><a href="' + home + '">LivelyDesk</a><span aria-hidden="true">/</span><span aria-current="page">' + product.name + '</span></nav>' +
    '<div data-reveal class="product-intro hero-line"><div><p class="product-name">' + product.name + '</p><h1>' + escapeHtml(copy.heading) + '</h1><p>' + escapeHtml(copy.intro) + '</p></div><img class="product-page-icon" src="' + product.icon + '" alt="" width="128" height="128" /></div>' +
    '<p data-reveal class="product-license">Windows 10/11 x64 · ' + (id ? 'Gratis' : 'Free') + ' · ' + product.license + '</p>' +
    '<div data-reveal class="product-actions"><a class="product-download motion-button" href="' + product.repository + '/releases/latest">' + (id ? 'Unduh ' : 'Download ') + product.name + '</a><a href="' + guide + '#' + copy.guideSection + '">' + (id ? 'Panduan penggunaan' : 'Read the user guide') + '</a><a href="' + product.repository + '">GitHub</a></div>' +
    '<aside data-reveal class="docs-note"><p>' + escapeHtml(copy.boundary) + '</p><p>' + (id ? 'Installer belum ditandatangani. Ikuti kebijakan keamanan perangkat; jangan menonaktifkan antivirus atau proteksi Windows.' : 'Installers are unsigned. Follow your device security policy; do not disable antivirus or Windows protection.') + '</p></aside>' +
    '<nav data-reveal class="product-contents" aria-label="' + (id ? 'Pada halaman ini' : 'On this page') + '">' + copy.sections.map(section => '<a href="#' + section.id + '">' + escapeHtml(section.title) + '</a>').join('') + '</nav>' +
    '<figure data-reveal class="product-preview"><img class="motion-card" src="' + media.url + '" alt="' + escapeHtml(media.label) + '" width="' + media.width + '" height="' + media.height + '" loading="lazy" /><figcaption>' + escapeHtml(media.label) + ' ' + (id ? 'Artwork bukan bagian unduhan aplikasi.' : 'Artwork is not included in the app download.') + '</figcaption></figure>' +
    '<div class="product-copy">' + sections +
    '<section data-reveal class="docs-section" id="help"><h2>' + (id ? 'Panduan dan bantuan' : 'Guides and help') + '</h2><div class="docs-links"><a href="' + guide + '#' + copy.guideSection + '">' + (id ? 'Instalasi dan penggunaan ' : 'Install and use ') + product.name + '</a><a href="' + guide + '#troubleshooting">' + (id ? 'Pemecahan masalah' : 'Troubleshooting') + '</a><a href="' + product.repository + '/issues">' + (id ? 'Laporkan masalah' : 'Report an issue') + '</a><a href="' + source.url + '">' + (id ? 'Dokumentasi sumber' : 'Source documentation') + '</a></div></section></div></main>' + renderSiteFooter(lang);
  return {head,body};
}
