import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { renderHomeMetadata, renderPageMetadata, siteOrigin } from './src/seo.ts';
import { products } from './src/products/content.ts';

const pairs = [['/', '/id'], ['/wallpaperlive', '/wallpaperlive/id'], ['/transparentbar', '/transparentbar/id'], ['/doc', '/doc/id']];
const paths = pairs.flat();
const htmlFor = route => readFileSync(join('dist', route === '/' ? '' : route.slice(1), 'index.html'), 'utf8');
const pages = new Map(paths.map(route => [route, htmlFor(route)]));
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, paths.length);
const schemaFrom = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
const titles = new Set();
for (const pair of pairs) {
  for (const [index, route] of pair.entries()) {
    const lang = index === 0 ? 'en' : 'id';
    const html = pages.get(route);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), 'Each page needs its own title: ' + route);
    titles.add(title);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
    assert.ok(html.includes('<html lang="' + lang + '"'), route);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, route);
    assert.ok(html.includes('rel="canonical" href="' + siteOrigin + route + '"'), route);
    assert.ok(html.includes('name="description" content="'), route);
    assert.ok(!html.includes('noindex') && !html.includes('name="keywords"'), route);
    assert.ok(!html.includes(String.fromCharCode(0x2014)), 'Avoid em dash: ' + route);
    assert.ok(!/<!--(?:HOME|DOC|PRODUCT)_/.test(html), 'Unrendered template: ' + route);
    assert.ok(sitemap.includes('<loc>' + siteOrigin + route + '</loc>'), route);
    for (const [locale, alternate] of [['en', pair[0]], ['id', pair[1]], ['x-default', pair[0]]]) {
      assert.ok(html.includes('hreflang="' + locale + '" href="' + siteOrigin + alternate + '"'), route);
    }
    assert.ok(schemaFrom(html).length > 0, route);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs: ' + route);
    for (const match of html.matchAll(/\bhref="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (!href.startsWith('/') && !href.startsWith('#') && !href.startsWith(siteOrigin)) continue;
      const url = new URL(href, siteOrigin + route);
      if (url.origin !== siteOrigin) continue;
      if (!pages.has(url.pathname)) {
        assert.ok(existsSync(join('dist', url.pathname.slice(1))), 'Broken internal link: ' + href);
        continue;
      }
      if (url.hash) assert.ok(pages.get(url.pathname).includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), 'Broken section link: ' + href);
    }
  }
}
for (const [lang, route] of [['en', '/'], ['id', '/id']]) {
  const html = pages.get(route);
  assert.ok(html.includes('id="root" data-language="' + lang + '"'));
  for (const section of ['download', 'features', 'support', 'faq']) assert.ok(html.includes('id="' + section + '"'));
  for (const product of ['wallpaperlive', 'transparentbar']) assert.ok(html.includes('href="/' + product + (lang === 'id' ? '/id' : '') + '"'));
  const graph = schemaFrom(renderHomeMetadata(lang))[0]['@graph'];
  assert.ok(graph.some(item => item['@type'] === 'WebSite' && item.name === 'LivelyDesk'));
  assert.ok(!graph.some(item => item['@type'] === 'SoftwareApplication' && item.name === 'LivelyDesk'));
  assert.ok(!html.includes('aggregateRating'));
}
for (const [slug, product] of Object.entries(products)) {
  assert.deepEqual(product.copy.en.sections.map(s => s.id), product.copy.id.sections.map(s => s.id));
  for (const lang of ['en', 'id']) {
    const route = '/' + slug + (lang === 'id' ? '/id' : '');
    const html = pages.get(route);
    const graph = schemaFrom(html)[0]['@graph'];
    const app = graph.find(item => item['@type'] === 'SoftwareApplication');
    assert.equal(app.name, product.name);
    assert.equal(app.downloadUrl, product.repository + '/releases/latest');
    assert.equal(app.offers.price, '0');
    assert.equal(app.review, undefined);
    assert.equal(app.aggregateRating, undefined);
    assert.ok(html.includes('href="' + app.downloadUrl + '"'));
    assert.ok(html.includes('Windows 10') && html.includes('Windows 11'));
  }
}
const injection = renderPageMetadata({title:'<unsafe>',description:'"<unsafe>',lang:'en',paths:{en:'/',id:'/id'},schema:{name:'</script><script>alert(1)</script>'}});
assert.ok(injection.includes('&lt;unsafe&gt;'));
assert.ok(!injection.includes('</script><script>'));
assert.equal(schemaFrom(injection)[0].name, '</script><script>alert(1)</script>');
assert.equal(readFileSync('dist/google462b52e1b6cba12b.html','utf8').trim(),'google-site-verification: google462b52e1b6cba12b.html');
assert.equal(readFileSync('dist/robots.txt','utf8'),readFileSync('public/robots.txt','utf8'));
const routes = JSON.parse(readFileSync('vercel.json','utf8')).rewrites;
assert.deepEqual(routes.map(route => route.source).sort(), paths.filter(route => route !== '/').sort());
for (const route of routes) assert.ok(existsSync(join('dist', route.destination.slice(1))));
console.log('PASS: eight crawlable pages, unique metadata, reciprocal language links, product schema, internal anchors, escaping, and exact routes.');
