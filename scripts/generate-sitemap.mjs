import { writeFileSync } from 'fs';
import { globSync } from 'glob';
import prettier from 'prettier';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Determine output directory based on EXPORT environment variable
const outputFolder = process.env.EXPORT ? 'out' : 'public';

async function generateSitemap() {
  // Import site metadata to get the site URL
  const siteMetadataPath = path.join(projectRoot, 'data', 'siteMetadata.js');
  const { default: siteMetadata } = await import(siteMetadataPath);
  const baseUrl = siteMetadata.siteUrl;
  
  console.log(`Generating sitemap for ${baseUrl}`);
  
  // Get all static pages from the app directory (excluding dynamic routes and API routes)
  const pages = globSync([
    'app/**/page.tsx',
    '!app/**/[**]/**/page.tsx', // Exclude dynamic routes
    '!app/api/**/*',
  ], { cwd: projectRoot });
  
  // Get all blog posts from contentlayer if available
  let blogs = [];
  try {
    // Try to import the blog data from contentlayer
    const contentlayerPath = path.join(projectRoot, '.contentlayer/generated/index.mjs');
    const { allBlogs } = await import(contentlayerPath);
    blogs = allBlogs.map(post => `/blog/${post.slug}`);
    console.log(`Found ${blogs.length} blog posts to include in sitemap`);
  } catch (error) {
    console.warn('Could not import blog data from contentlayer, continuing without blog data');
  }

  // Combine all routes
  const allRoutes = [
    ...pages.map(page => {
      const path = page
        .replace('app/', '/')
        .replace('/page.tsx', '')
        .replace(/\/\(.*\)/, ''); // Remove route groups
      
      return path === '//' ? '/' : path;
    }),
    ...blogs,
    // Add additional static routes that might not be captured by the page detection
    '/projects'
  ];

  // Filter out dynamic routes and duplicates
  const uniqueRoutes = [...new Set(
    allRoutes.filter(route => !route.includes('[') && !route.includes(']'))
  )];

  console.log(`Generating sitemap with ${uniqueRoutes.length} routes`);

  // Generate sitemap XML
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${uniqueRoutes.map(route => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  // Format with prettier
  const formatted = await prettier.format(sitemap, {
    parser: 'html',
  });

  // Write the sitemap to the appropriate directory based on EXPORT environment variable
  const sitemapPath = path.join(projectRoot, outputFolder, 'sitemap.xml');
  writeFileSync(sitemapPath, formatted);

  console.log(`Sitemap generated successfully at ${sitemapPath}`);
}

generateSitemap().catch(error => {
  console.error('Error generating sitemap:', error);
  process.exit(1);
});
