import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const app = readFileSync('src/App.tsx', 'utf8');
assert.ok(app.includes('releases={releases}'), 'Hero and DownloadHub must receive one shared release state');
const { parseLatestRelease, loadRelease } = await import('./src/releases.ts');
const repo = 'WallpaperLive';
const installer = { name: 'wallpaperlivesetup-v9.0.0.exe', size: 3491969, download_count: 7, browser_download_url: 'https://github.com/Raflyf/WallpaperLive/releases/download/v9.0.0/wallpaperlivesetup-v9.0.0.exe' };
const release = { tag_name: 'v9.0.0', draft: false, prerelease: false, assets: [installer] };
assert.equal(parseLatestRelease(repo, release).version, 'v9.0.0');
assert.equal(parseLatestRelease(repo, release).downloadUrl, installer.browser_download_url);
assert.equal(parseLatestRelease(repo, { ...release, assets: [] }).downloadUrl, null);
assert.throws(() => parseLatestRelease(repo, { ...release, prerelease: true }));
assert.throws(() => parseLatestRelease(repo, { ...release, assets: [{ ...installer, browser_download_url: 'https://evil.example/setup.exe' }] }));
const originalFetch = globalThis.fetch;
const calls = [];
globalThis.fetch = async url => {
  calls.push(String(url));
  if (String(url).endsWith('/latest')) return new Response(JSON.stringify(release));
  return new Response(JSON.stringify([{ ...release, assets: [installer, { ...installer, name: 'SHA256SUMS.txt', download_count: 999 }] }]));
};
const state = await loadRelease(repo, new AbortController().signal);
assert.equal(state.version, 'v9.0.0');
assert.equal(state.downloads, 7, 'Counts installers/portable archives, not checksum downloads');
assert.ok(calls.some(url => url.endsWith('/releases/latest')));
globalThis.fetch = async url => String(url).endsWith('/latest') ? new Response(JSON.stringify(release)) : new Response('', { status: 403 });
assert.equal((await loadRelease(repo, new AbortController().signal)).downloads, null);
globalThis.fetch = async () => new Response('', { status: 403 });
await assert.rejects(loadRelease(repo, new AbortController().signal));
globalThis.fetch = async url => {
  if (String(url).endsWith('/latest')) return new Response(JSON.stringify(release));
  const page = new URL(String(url)).searchParams.get('page');
  return new Response(JSON.stringify(page === '1'
    ? Array.from({ length: 100 }, () => ({ ...release, assets: [{ ...installer, download_count: 0 }] }))
    : [{ ...release, assets: [installer] }]));
};
assert.equal((await loadRelease(repo, new AbortController().signal)).downloads, 7);
globalThis.fetch = originalFetch;
const { runInNewContext } = await import('node:vm');
const bootstrap = readFileSync('index.html', 'utf8').match(/<script id="theme-init">([\s\S]*?)<\/script>/)[1];
for (const [saved, expected] of [[null, 'light'], ['dark', 'dark'], ['light', 'light'], ['invalid', 'light']]) {
  const document = { documentElement: { dataset: {} } };
  runInNewContext(bootstrap, { document, localStorage: { getItem: () => saved } });
  assert.equal(document.documentElement.dataset.theme, expected);
}
const document = { documentElement: { dataset: {} } };
runInNewContext(bootstrap, { document, localStorage: { getItem: () => { throw new Error('Blocked'); } } });
assert.equal(document.documentElement.dataset.theme, 'light');
assert.ok(readFileSync('src/components/Navbar.tsx', 'utf8').includes('role="switch"'));
console.log('PASS: shared latest releases, safe links, pagination, API failures, and saved-theme bootstrap.');
