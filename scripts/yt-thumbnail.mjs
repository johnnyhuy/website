// Download YouTube video thumbnails as local files for blog post embeds.
//
//   node scripts/yt-thumbnail.mjs <id> [<id> ...]
//     Downloads each ID to public/images/blog/yt-<id>.jpg using
//     maxresdefault.jpg with hqdefault.jpg fallback.
//
//   node scripts/yt-thumbnail.mjs --post
//     Scans every data/blog/*.mdx for <YouTube id="..." /> references,
//     downloads any thumbnails that aren't already on disk, and prints
//     a summary.

import { writeFileSync, mkdirSync, existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
mkdirSync(outDir, { recursive: true });

const slug = (id) => path.join(outDir, `yt-${id}.jpg`);

const fetchIfMissing = async (id) => {
  const file = slug(id);
  if (existsSync(file)) {
    return { id, file, status: 'cached' };
  }
  const candidates = [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  ];
  for (const url of candidates) {
    const res = await fetch(url);
    if (!res.ok) continue;
    const buf = Buffer.from(await res.arrayBuffer());
    // maxresdefault returns a 120x90 grey placeholder for some videos;
    // sddefault (640x480) and hqdefault (480x360) are always real.
    if (url.includes('maxresdefault') && buf.length < 5000) continue;
    writeFileSync(file, buf);
    return { id, file, status: 'downloaded', bytes: buf.length };
  }
  return { id, file, status: 'failed' };
};

const scanPosts = async () => {
  const blogDir = path.join(__dirname, '..', 'data', 'blog');
  const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
  const re = /<YouTube\b[^>]*?\bid=["']([^"']+)["']/g;
  const ids = new Set();
  for (const f of files) {
    const body = readFileSync(path.join(blogDir, f), 'utf8');
    let m;
    while ((m = re.exec(body)) !== null) ids.add(m[1]);
  }
  return [...ids].sort();
};

const main = async () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('usage: yt-thumbnail.mjs <id> [...] | --post');
    process.exit(1);
  }

  let ids;
  if (args[0] === '--post') {
    ids = await scanPosts();
    console.log(`scanning posts: ${ids.length} unique id${ids.length === 1 ? '' : 's'}`);
  } else {
    ids = args;
  }

  for (const id of ids) {
    const r = await fetchIfMissing(id);
    console.log(`${r.status.padEnd(11)} ${id} -> ${path.relative(process.cwd(), r.file)}`);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});