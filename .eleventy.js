module.exports = function (config) {
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/components');
  config.addPassthroughCopy('./src/styles');

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
