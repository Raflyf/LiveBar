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
  assert.ok(t.simulator.captions.telemetryDesc.includes('20.3 MB'));
  assert.ok(!t.simulator.captions.telemetryDesc.includes('37.8 MB'));
  assert.ok(t.simulator.captions.telemetryDesc.includes('v0.1.5'));
}
const current = readFileSync('src/components/DesktopSimulator.tsx', 'utf8');
assert.ok(current.includes('src="/video/1109.mp4"'));
assert.ok(current.includes('cache-ready-v0.1.6.png'));
assert.ok(current.includes("image: '/images/resource-use-v0.1.5.png',"), 'Task Manager image must use the bundled asset');
const image = readFileSync('public/images/resource-use-v0.1.5.png');
assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
assert.equal(createHash('sha256').update(image).digest('hex'), 'cd60990214fb034dbf28039684a9870b10fe9a9c15879739d0e156e017b795bc');
const hash = path => createHash('sha256').update(readFileSync(path)).digest('hex');
assert.equal(hash('public/video/1109.mp4'), '350d9fe805f905d7ce4fbf1df9fc72d89c08d80bccbfc99b7fc74fdf5d2bc7c6');
assert.ok(!/348|409|43\.1|45\.4|procedural desktop canvas/.test(readme));
console.log('PASS: both locales and README match source rows; history scoped; showcase images current; published video unchanged.');
