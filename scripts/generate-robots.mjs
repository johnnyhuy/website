import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

/**
 * Generate robots.txt file
 * @param {Object} options - Configuration options
 * @param {string} options.baseUrl - Base URL of the website
 * @param {boolean} options.allowAll - Whether to allow all robots
 * @param {string[]} options.disallowPaths - Paths to disallow
 * @param {string[]} options.sitemaps - Sitemap URLs
 */
async function generateRobots({
  allowAll = true,
  disallowPaths = [],
  sitemaps = ['sitemap.xml'],
} = {}) {
  // Import site metadata to get the site URL
  const siteMetadataPath = path.join(projectRoot, 'data', 'siteMetadata.js');
  const { default: siteMetadata } = await import(siteMetadataPath);
  const baseUrl = siteMetadata.siteUrl;
  
  console.log(`Generating robots.txt for ${baseUrl}`);
  
  let content = '# robots.txt generated at ' + new Date().toISOString() + '\n\n';
  
  // Add user-agent rules
  content += 'User-agent: *\n';
  
  if (allowAll) {
    content += 'Allow: /\n';
  }
  
  // Add disallow paths if any
  if (disallowPaths.length > 0) {
    content += '\n# Disallowed paths\n';
    disallowPaths.forEach(path => {
      content += `Disallow: ${path}\n`;
    });
  }
  
  // Add sitemaps
  if (sitemaps.length > 0) {
    content += '\n# Sitemaps\n';
    sitemaps.forEach(sitemap => {
      const sitemapUrl = sitemap.startsWith('http') 
        ? sitemap 
        : `${baseUrl}/${sitemap.replace(/^\//, '')}`;
      content += `Sitemap: ${sitemapUrl}\n`;
    });
  }
  
  // Write the file
  const outputPath = path.join(projectRoot, 'public', 'robots.txt');
  writeFileSync(outputPath, content);
  console.log(`Robots.txt generated successfully at ${outputPath}`);
}

// Generate robots.txt with default settings
generateRobots().catch(error => {
  console.error('Error generating robots.txt:', error);
  process.exit(1);
});
