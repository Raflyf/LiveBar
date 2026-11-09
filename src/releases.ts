export type ProductRepo = 'WallpaperLive' | 'TransparentBar';

export interface ReleaseState {
  status: 'loading' | 'ready' | 'unavailable';
  version: string | null;
  downloadUrl: string | null;
  sizeMb: string | null;
  downloads: number | null;
}
export type ProductReleases = Record<ProductRepo, ReleaseState>;

export const emptyRelease: ReleaseState = {
  status: 'loading', version: null, downloadUrl: null, sizeMb: null, downloads: null,
};

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid GitHub release response');
  return value as Record<string, unknown>;
}

export function parseLatestRelease(repo: ProductRepo, value: unknown): ReleaseState {
  const release = record(value);
  if (typeof release.tag_name !== 'string' || !release.tag_name.trim() || release.draft !== false || release.prerelease !== false || !Array.isArray(release.assets)) {
    throw new Error('Invalid latest stable release');
  }
  const installer = release.assets.map(record).find(asset => typeof asset.name === 'string' && /(?:setup|installer).*\.exe$/i.test(asset.name));
  let downloadUrl: string | null = null;
  let sizeMb: string | null = null;
  if (installer) {
    if (typeof installer.browser_download_url !== 'string' || typeof installer.size !== 'number' || !Number.isSafeInteger(installer.size) || installer.size <= 0) throw new Error('Invalid installer metadata');
    const url = new URL(installer.browser_download_url);
    if (url.protocol !== 'https:' || url.hostname !== 'github.com' || url.username || url.password || !url.pathname.startsWith('/Raflyf/' + repo + '/releases/download/')) throw new Error('Unexpected installer URL');
    downloadUrl = url.href;
    sizeMb = (installer.size / 1_000_000).toFixed(1) + ' MB';
  }
  return { status: 'ready', version: release.tag_name, downloadUrl, sizeMb, downloads: null };
}

async function githubJson(url: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetch(url, {
    signal: AbortSignal.any([signal, AbortSignal.timeout(12000)]),
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!response.ok) throw new Error('GitHub HTTP ' + response.status);
  return response.json();
}

async function downloadCount(repo: ProductRepo, signal: AbortSignal): Promise<number> {
  let total = 0;
  for (let page = 1; ; page++) {
    const releases = await githubJson('https://api.github.com/repos/Raflyf/' + repo + '/releases?per_page=100&page=' + page, signal);
    if (!Array.isArray(releases)) throw new Error('Invalid release list');
    for (const value of releases) {
      const release = record(value);
      if (release.draft === true) continue;
      if (!Array.isArray(release.assets)) throw new Error('Invalid release assets');
      for (const value of release.assets) {
        const asset = record(value);
        if (typeof asset.name !== 'string' || !/\.(exe|zip)$/i.test(asset.name)) continue;
        if (typeof asset.download_count !== 'number' || !Number.isSafeInteger(asset.download_count) || asset.download_count < 0) throw new Error('Invalid download count');
        total += asset.download_count;
        if (!Number.isSafeInteger(total)) throw new Error('Download count too large');
      }
    }
    if (releases.length < 100) return total;
  }
}

export async function loadRelease(repo: ProductRepo, signal: AbortSignal): Promise<ReleaseState> {
  const [latest, downloads] = await Promise.all([
    githubJson('https://api.github.com/repos/Raflyf/' + repo + '/releases/latest', signal).then(value => parseLatestRelease(repo, value)),
    downloadCount(repo, signal).catch(() => null),
  ]);
  return { ...latest, downloads };
}
