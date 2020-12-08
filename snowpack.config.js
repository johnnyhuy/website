/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dist: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    ['@snowpack/plugin-run-script', { cmd: 'eleventy', watch: '$1 --watch' }],
  ],
  installOptions: {
    sourceMap: true,
  },
  devOptions: {
    // Wait for 11ty to start
    hmrDelay: 1000,
    port: 3000,
    out: "build"
  },
  buildOptions: {
    sourceMaps: true,
    clean: true
  },
  exclude: [
    '**/manifest.json',
    '**/robots.txt',
    '**/plugins/**',
    '**/layouts/**',
    '**/components/**',
    '**/*.md'
  ],
};
