// Fetch illustration assets for blog posts.
//
// Usage:
//   node scripts/blog-image.mjs xkcd <id> <name>
//     Downloads the xkcd comic to public/images/blog/<name>.png and prints
//     the MDX snippet with attribution.
//   node scripts/blog-image.mjs meme <template> <name> [top] [bottom]
//     Builds a meme via memegen.link (e.g. template "ds", "buzz") and prints
//     the MDX snippet. Text is plain words; the API handles encoding.
//   node scripts/blog-image.mjs xkcd-search <words...>
//     Prints candidate comics by title match from the local xkcd index cache
//     (fetched once from explainxkcd).

import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
mkdirSync(outDir, { recursive: true });

const [command, ...args] = process.argv.slice(2);

const download = async (url, file) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  console.log(`saved ${file}`);
};

const snippet = (src, alt, caption) => `
![${alt}](${src})

*${caption}*
`;

if (command === 'xkcd') {
  const [id, name] = args;
  if (!id || !name) {
    console.error('usage: blog-image.mjs xkcd <id> <name>');
    process.exit(1);
  }
  const info = await (await fetch(`https://xkcd.com/${id}/info.0.json`)).json();
  const ext = path.extname(new URL(info.img).pathname) || '.png';
  const file = path.join(outDir, `${name}${ext}`);
  await download(info.img, file);
  console.log(
    snippet(
      `/images/blog/${name}${ext}`,
      `xkcd ${info.num}: ${info.title}. ${info.alt}`,
      `[${info.title}](https://xkcd.com/${info.num}/) by Randall Munroe, [CC BY-NC 2.5](https://creativecommons.org/licenses/by-nc/2.5/), via xkcd.`
    )
  );
} else if (command === 'meme') {
  const [template, name, top = '', bottom = ''] = args;
  if (!template || !name) {
    console.error('usage: blog-image.mjs meme <template> <name> [top] [bottom]');
    process.exit(1);
  }
  const enc = (s) => encodeURIComponent(s).replace(/%20/g, '_');
  const url = `https://api.memegen.link/images/${template}/${enc(top)}/${enc(bottom)}.png`;
  const file = path.join(outDir, `${name}.png`);
  await download(url, file);
  console.log(
    snippet(
      `/images/blog/${name}.png`,
      `${top} ${bottom}`.trim() || template,
      `Made with [memegen.link](https://memegen.link), template \`${template}\`.`
    )
  );
} else if (command === 'xkcd-search') {
  // Uses the explainxkcd category index; good enough for title keyword hunting.
  const words = args.map((w) => w.toLowerCase());
  if (words.length === 0) {
    console.error('usage: blog-image.mjs xkcd-search <words...>');
    process.exit(1);
  }
  const api = 'https://www.explainxkcd.com/wiki/api.php?action=query&list=allpages&aplimit=500&apnamespace=0&format=json';
  const titles = [];
  let from = '';
  while (titles.length < 3000) {
    const data = await (await fetch(api + (from ? `&apfrom=${encodeURIComponent(from)}` : ''))).json();
    const pages = data.query?.allpages ?? [];
    if (pages.length === 0) break;
    for (const p of pages) titles.push(p.title);
    from = data.continue?.apcontinue;
    if (!from) break;
  }
  const hits = titles.filter((t) => {
    const m = /^(\d+):\s*(.+)$/.exec(t);
    return m && words.every((w) => m[2].toLowerCase().includes(w));
  });
  console.log(hits.slice(0, 15).join('\n') || 'no matches');
} else {
  console.error('commands: xkcd <id> <name> | meme <template> <name> [top] [bottom] | xkcd-search <words...>');
  process.exit(1);
}
