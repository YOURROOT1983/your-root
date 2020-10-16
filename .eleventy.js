const pluginSass = require("eleventy-plugin-sass");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, { watch: ["src/_includes/styles/base.scss"] });
  eleventyConfig.addPassthroughCopy({"src/_assets": "/_assets"});
  eleventyConfig.addCollection("sortedSauce", function(collection) {
    return collection.getFilteredByTag("product").sort(function(a, b) {
        return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: 'src/',
      output: 'dist/'
    },
    passthroughFileCopy: true,
    templateFormats: ['js', 'njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: "njk"
  }
}
