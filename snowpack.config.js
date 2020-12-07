/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dist: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    ['@snowpack/plugin-run-script', { cmd: 'eleventy', watch: '$1 --watch' }],
  ],
  installOptions: {
    sourceMap: true,
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
  },
  buildOptions: {
    sourceMaps: true,
  },
};
