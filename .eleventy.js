module.exports = function (config) {
  config.addPassthroughCopy('./src/robots.txt')
  config.addPassthroughCopy('./src/manifest.json')
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
