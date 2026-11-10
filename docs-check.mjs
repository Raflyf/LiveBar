import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { docs, docSources } from './src/docs/content.ts';
import { escapeHtml, renderBlock, renderDocumentation } from './src/docs/render.ts';

assert.equal(escapeHtml('<script>"&' + String.fromCharCode(39)), '&lt;script&gt;&quot;&amp;&#39;');
assert.equal(renderBlock({kind: 'p', text: '<script>alert(1)</script>'}, ''), '<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>');
assert.throws(() => renderBlock({kind:'links', items:[{label:'Unsafe', url:'javascript:alert(1)'}]}, ''), /HTTPS/);
assert.throws(() => renderBlock({kind:'links', items:[{label:'Unsafe', url:'https://user:password@example.com'}]}, ''), /HTTPS/);
assert.equal(docSources.length, 2);
for (const source of docSources) {
  assert.match(source.revision, /^[a-f0-9]{40}$/);
  assert.ok(source.url.includes(source.revision));
}
const ids = docs.en.sections.map(section => section.id);
assert.equal(new Set(ids).size, ids.length);
assert.ok(ids.length >= 12);
assert.deepEqual(docs.id.sections.map(section => section.id), ids);
const map = readFileSync('public/sitemap.xml', 'utf8');
for (const lang of ['en', 'id']) {
  const content = docs[lang];
  const page = renderDocumentation(lang);
  const html = readFileSync(lang === 'id' ? 'dist/doc/id/index.html' : 'dist/doc/index.html', 'utf8');
  const route = lang === 'id' ? '/doc/id' : '/doc';
  assert.ok(html.includes('<html lang="' + lang + '"'));
  assert.ok(html.includes('href="https://livelydesk.vercel.app' + route + '"'));
  assert.ok(map.includes('<loc>https://livelydesk.vercel.app' + route + '</loc>'));
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.ok(!html.includes('<!--DOC_'));
  assert.ok(page.body.includes('data-reveal'));
  assert.ok(!page.body.includes('reveal-ready'), 'Static guide stays visible before JavaScript runs');
  assert.ok(!JSON.stringify(content).includes(String.fromCharCode(0x2014)), 'No em dash in guide copy');
  const allIds = [...page.body.matchAll(/ id="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(allIds).size, allIds.length);
  for (const match of page.body.matchAll(/href="#([^"]+)"/g)) assert.ok(allIds.includes(match[1]), 'Missing section ' + match[1]);
  const schema = JSON.parse(page.head.split('<script type="application/ld+json">')[1].split('</script>')[0]);
  assert.equal(schema['@type'], 'TechArticle');
  assert.equal(schema.inLanguage, lang);
  for (const [index, section] of content.sections.entries()) {
    assert.match(section.id, /^[a-z][a-z0-9-]+$/);
    assert.ok(section.group in content.groups);
    assert.equal(section.group, docs.en.sections[index].group);
    assert.deepEqual(section.blocks.map(block => block.kind), docs.en.sections[index].blocks.map(block => block.kind));
    assert.ok(html.includes('id="' + section.id + '"'));
    assert.ok(html.includes(escapeHtml(section.title)));
    for (const block of section.blocks) {
      if (block.kind === 'table') for (const row of block.rows) assert.equal(row.length, block.headings.length);
      if (block.kind === 'links') for (const link of block.items) assert.equal(new URL(link.url).protocol, 'https:');
    }
  }
  assert.ok(page.body.includes('https://github.com/Raflyf/WallpaperLive/releases/latest'));
  assert.ok(page.body.includes('https://github.com/Raflyf/TransparentBar/releases/latest'));
  assert.ok(page.body.includes('startup.log') && page.body.includes('--diagnose'));
  assert.ok(page.body.includes('16 GiB') && page.body.includes('ARM64'));
}
const routes = JSON.parse(readFileSync('vercel.json', 'utf8')).rewrites;
assert.deepEqual(routes.filter(route => route.source === '/doc' || route.source === '/doc/id'), [{source:'/doc',destination:'/doc/index.html'}, {source:'/doc/id',destination:'/doc/id/index.html'}]);
assert.equal(readFileSync('dist/google462b52e1b6cba12b.html','utf8').trim(), 'google-site-verification: google462b52e1b6cba12b.html');
console.log('PASS: bilingual guide structure, static HTML, section links, escaping, sources, metadata, and verification file.');
