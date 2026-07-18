import { writeFileSync, mkdirSync } from 'fs';
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
  const { allBlogs } = await import(contentlayerPath);
  const posts = [...allBlogs].sort((a, b) => new Date(b.date) - new Date(a.date));

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

  const llms = [
    '# Johnny Huynh',
    '',
    `> ${siteMetadata.description}`,
    '',
    'Personal blog of Johnny Huynh, a builder of platforms and tools. Posts cover software engineering, AI tooling, and ways of working.',
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.title}](${baseUrl}/blog/${p.slug}.md): ${p.summary ?? ''}`),
    '',
    '## Pages',
    `- [Home](${baseUrl})`,
    `- [Blog index](${baseUrl}/blog)`,
    `- [Site version archive](${baseUrl}/archive)`,
    `- [Source code](${siteMetadata.siteRepo})`,
    '',
  ];
  writeFileSync(path.join(projectRoot, outputFolder, 'llms.txt'), llms.join('\n'));
  console.log(`llms.txt and ${posts.length} markdown posts generated in ${outputFolder}/`);
}

generateLlms().catch((error) => {
  console.error('Error generating llms.txt:', error);
  process.exit(1);
});
