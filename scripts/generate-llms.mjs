import { writeFileSync, mkdirSync, readdirSync, rmSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const outputFolder = process.env.EXPORT ? 'out' : 'public';

async function generateLlms() {
  const siteMetadataPath = path.join(projectRoot, 'data', 'siteMetadata.js');
  const { default: siteMetadata } = await import(siteMetadataPath);
  const baseUrl = siteMetadata.siteUrl;

  const contentlayerPath = path.join(projectRoot, '.contentlayer/generated/index.mjs');
  const { allBlogs, allDevlogs } = await import(contentlayerPath);
  const posts = [...allBlogs]
    .filter((p) => p.draft !== true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const entries = [...(allDevlogs || [])]
    .filter((n) => n.draft !== true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Markdown versions of each post at /blog/<slug>.md
  const blogOutDir = path.join(projectRoot, outputFolder, 'blog');
  mkdirSync(blogOutDir, { recursive: true });
  for (const post of posts) {
    const body = post.body.raw
      .split('\n')
      .filter((line) => !/^import\s/.test(line) && !/^export\s/.test(line))
      .join('\n')
      .trim();
    const md = [
      `# ${post.title}`,
      '',
      `Published: ${post.date}`,
      ...(post.tags?.length ? [`Tags: ${post.tags.join(', ')}`] : []),
      '',
      body,
      '',
    ].join('\n');
    writeFileSync(path.join(blogOutDir, `${post.slug}.md`), md);
  }

  // Markdown versions of each entry at /devlog/<slug>.md
  const devlogOutDir = path.join(projectRoot, outputFolder, 'devlog');
  mkdirSync(devlogOutDir, { recursive: true });
  // Remove generated markdown for entries that were withdrawn or deleted.
  const publishedMarkdown = new Set(entries.map((entry) => `${entry.slug}.md`));
  for (const filename of readdirSync(devlogOutDir)) {
    if (filename.endsWith('.md') && !publishedMarkdown.has(filename)) {
      rmSync(path.join(devlogOutDir, filename), { force: true });
    }
  }
  for (const entry of entries) {
    const body = entry.body.raw
      .split('\n')
      .filter((line) => !/^import\s/.test(line) && !/^export\s/.test(line))
      .join('\n')
      .trim();
    const md = [
      `# ${entry.title}`,
      '',
      `Published: ${entry.date}`,
      ...(entry.tags?.length ? [`Tags: ${entry.tags.join(', ')}`] : []),
      '',
      body,
      '',
    ].join('\n');
    writeFileSync(path.join(devlogOutDir, `${entry.slug}.md`), md);
  }

  const llms = [
    '# Johnny Huynh',
    '',
    `> ${siteMetadata.description}`,
    '',
    'Personal blog of Johnny Huynh, a builder of platforms and tools. Posts cover software engineering, AI tooling, and ways of working.',
    '',
    '## Devlog',
    'Short, self-contained, actionable write-ups. Each one is something a reader could act on, or would otherwise have to rediscover.',
    '',
    ...entries.map((n) => `- [${n.title}](${baseUrl}/devlog/${n.slug}.md): ${n.summary ?? ''}`),
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.title}](${baseUrl}/blog/${p.slug}.md): ${p.summary ?? ''}`),
    '',
    '## Pages',
    `- [Home](${baseUrl})`,
    `- [Devlog index](${baseUrl}/devlog)`,
    `- [Blog index](${baseUrl}/blog)`,
    `- [Projects](${baseUrl}/projects)`,
    `- [Site version archive](${baseUrl}/archive)`,
    `- [Source code](${siteMetadata.siteRepo})`,
    '',
  ];
  writeFileSync(path.join(projectRoot, outputFolder, 'llms.txt'), llms.join('\n'));
  console.log(
    `llms.txt, ${posts.length} markdown posts and ${entries.length} markdown entries generated in ${outputFolder}/`
  );
}

generateLlms().catch((error) => {
  console.error('Error generating llms.txt:', error);
  process.exit(1);
});
