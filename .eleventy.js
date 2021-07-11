module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);
  eleventyConfig.addPassthroughCopy('./styles/main.css');
  eleventyConfig.addPassthroughCopy('./img');

  return {
    dir: {
      input: 'content',
      includes: '../templates',
      output: 'output',
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  }
}
