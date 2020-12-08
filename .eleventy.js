const production = process.env.NODE_ENV !== 'development'
const terser = require('rollup-plugin-terser').terser
const { typescript } = require('@rollup/plugin-typescript')

module.exports = function (config) {
  config.addPassthroughCopy('./src/robots.txt')
  config.addPassthroughCopy('./src/manifest.json')
  config.addPlugin(require('./src/plugins/eleventy-plugin-svelte/.eleventy.js'), {
    assetDir: '_dist_',
    rollupPluginSvelteSSROptions: {
      dev: !production,
    },
    rollupPluginSvelteClientOptions: {
      dev: !production,
      emitCss: true,
    },
    rollupClientPlugins: [
      production && terser(),
      typescript()
    ]
  })
  config.addWatchTarget('./src')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
  }
}
