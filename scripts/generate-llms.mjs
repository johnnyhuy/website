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
  const { allBlogs, allNotes } = await import(contentlayerPath);
  const posts = [...allBlogs]
    .filter((p) => p.draft !== true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const notes = [...(allNotes || [])]
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

  // Markdown versions of each note at /notes/<slug>.md
  const notesOutDir = path.join(projectRoot, outputFolder, 'notes');
  mkdirSync(notesOutDir, { recursive: true });
  for (const note of notes) {
    const body = note.body.raw
      .split('\n')
      .filter((line) => !/^import\s/.test(line) && !/^export\s/.test(line))
      .join('\n')
      .trim();
    const md = [
      `# ${note.title}`,
      '',
      `Published: ${note.date}`,
      ...(note.tags?.length ? [`Tags: ${note.tags.join(', ')}`] : []),
      '',
      body,
      '',
    ].join('\n');
    writeFileSync(path.join(notesOutDir, `${note.slug}.md`), md);
  }

  const llms = [
    '# Johnny Huynh',
    '',
    `> ${siteMetadata.description}`,
    '',
    'Personal blog of Johnny Huynh, a builder of platforms and tools. Posts cover software engineering, AI tooling, and ways of working.',
    '',
    '## Notes',
    'Short, self-contained, actionable write-ups. Each one is something a reader could act on, or would otherwise have to rediscover.',
    '',
    ...notes.map((n) => `- [${n.title}](${baseUrl}/notes/${n.slug}.md): ${n.summary ?? ''}`),
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.title}](${baseUrl}/blog/${p.slug}.md): ${p.summary ?? ''}`),
    '',
    '## Pages',
    `- [Home](${baseUrl})`,
    `- [Notes index](${baseUrl}/notes)`,
    `- [Blog index](${baseUrl}/blog)`,
    `- [Projects](${baseUrl}/projects)`,
    `- [Site version archive](${baseUrl}/archive)`,
    `- [Source code](${siteMetadata.siteRepo})`,
    '',
  ];
  writeFileSync(path.join(projectRoot, outputFolder, 'llms.txt'), llms.join('\n'));
  console.log(
    `llms.txt, ${posts.length} markdown posts and ${notes.length} markdown notes generated in ${outputFolder}/`
  );
}

generateLlms().catch((error) => {
  console.error('Error generating llms.txt:', error);
  process.exit(1);
});
