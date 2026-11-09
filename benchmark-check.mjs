import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { translations } from './src/types/content.ts';

const source = 'https://raw.githubusercontent.com/Raflyf/WallpaperLive/2307daf3033084f3d4a4f3aa2d2abe85610d802a/README.md';
const response = await fetch(source);
assert.equal(response.status, 200);
const upstream = await response.text();
const rows = [
  ['row1Ram', 'row1Cpu', '437.5 MB', '42.4%'],
  ['row2Ram', 'row2Cpu', '41.4 MB – 47.4 MB', '1.3% – 2.5%'],
  ['row3Ram', 'row3Cpu', '37.8 MB', '1.5%'],
  ['row4Ram', 'row4Cpu', '4.5 MB', '0%'],
];
const readme = readFileSync('README.md', 'utf8');
const tbSource = 'https://raw.githubusercontent.com/Raflyf/TransparentBar/e6c17bf9f730921666fb74a82517669e2fdcd056/README.md';
const tbResponse = await fetch(tbSource);
assert.equal(tbResponse.status, 200);
const tbUpstream = await tbResponse.text();
assert.ok(tbUpstream.includes('| **3.9 MB** | **0%** | **0 MB/s** | **0 Mbps** |'));
assert.ok(readme.includes('| 3.9 MB | 0% | 0 MB/s | 0 Mbps |'));
assert.ok(!readme.includes('1.6 MB'));
assert.ok(!readFileSync('src/components/DownloadHub.tsx', 'utf8').includes('1.6 MB'));
for (const [ramKey, cpuKey, memory, cpu] of rows) {
  assert.ok(upstream.includes('| ' + memory + ' | ' + cpu + ' |'));
  assert.ok(readme.includes('| ' + memory + ' | ' + cpu + ' |'));
  for (const locale of ['en', 'id']) {
    assert.equal(translations[locale].benchmark[ramKey], memory);
    assert.equal(translations[locale].benchmark[cpuKey], cpu);
  }
}
for (const locale of ['en', 'id']) {
  const t = translations[locale];
  assert.equal(t.hero.stat1, '37.8 MB');
  assert.ok(t.hero.stat1Sub.includes('v0.1.6'));
  assert.ok(t.benchmark.row4State.includes('v0.1.5'));
  assert.ok(t.faq.a1.includes('437.5 MB') && t.faq.a1.includes('37.8 MB'));
  assert.ok(t.faq.a1.includes('v0.1.5'));
  assert.ok(t.benchmark.disclaimer.includes('VRAM'));
  assert.ok(t.benchmark.tbRowNotes.includes('Explorer'));
  assert.equal(t.hero.stat2, '3.9 MB');
  assert.equal(t.benchmark.tbRowRam, t.hero.stat2);
  assert.equal(t.benchmark.tbRowCpu, '0%');
  for (const text of [t.features.items.f2Desc, t.benchmark.tbRowNotes, t.faq.a2]) {
    assert.ok(text.includes(t.hero.stat2));
  }
  assert.ok(t.hero.stat2Sub.includes('v0.2.4'));
  assert.ok(!JSON.stringify(t).includes('1.6 MB'));
  assert.ok(t.download.tbCompatibility.includes('ARM64') && t.download.tbCompatibility.includes('auto-hide'));
  assert.ok(t.simulator.captions.telemetryDesc.includes('20.3 MB'));
  assert.ok(!t.simulator.captions.telemetryDesc.includes('37.8 MB'));
  assert.ok(t.simulator.captions.telemetryDesc.includes('v0.1.5'));
}
const current = readFileSync('src/components/DesktopSimulator.tsx', 'utf8');
assert.ok(current.includes('src="/video/1109.mp4"'));
assert.ok(current.includes('cache-ready-v0.1.6.png'));
assert.ok(current.includes("image: '/images/resource-use-orange.png',"), 'Task Manager image must use the bundled asset');
const image = readFileSync('public/images/resource-use-orange.png');
assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
assert.equal(createHash('sha256').update(image).digest('hex'), '03f5bc5e6280fc799e106af939a3d6edc9c6f9338e5758bba8b3f9e774e5f96d');
const hash = path => createHash('sha256').update(readFileSync(path)).digest('hex');
assert.equal(hash('public/images/transparentbar-resource-use-v0.2.4.png'), '1e36f81ff7794f1a7d87be97c49c2f37320309482b596b8386f6edb18f5d5fd4');
const benchmark = readFileSync('src/components/Benchmark.tsx', 'utf8');
assert.ok(!benchmark.includes('transparentbar-resource-use-v0.2.4.png'), 'Do not duplicate the TransparentBar table with a photo');
assert.ok(benchmark.includes('{t.benchmark.tbRowRam}') && benchmark.includes('{t.benchmark.tbRowCpu}'));
assert.equal(hash('public/video/1109.mp4'), '350d9fe805f905d7ce4fbf1df9fc72d89c08d80bccbfc99b7fc74fdf5d2bc7c6');
assert.equal(hash('public/icons/wallpaperlive.png'), 'cbc08f661ef21af58736157a2e9342cd52a7075655cc0bcd760cbe3395127279');
assert.equal(hash('public/icons/transparentbar.png'), '94c4c4161ac25d3df881a58045120cdfe7b268639d13a336352db92c1799321e');
assert.ok(!/348|409|43\.1|45\.4|procedural desktop canvas/.test(readme));
console.log('PASS: both locales and README match source rows; history scoped; showcase images current; published video unchanged.');
