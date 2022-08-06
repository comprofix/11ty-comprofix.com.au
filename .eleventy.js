const blogTools = require("eleventy-plugin-blog-tools");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addWatchTarget('./src/css');
  eleventyConfig.addWatchTarget('./src/components');

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setTemplateFormats("html,njk,md");

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md')
  });

  eleventyConfig.addPlugin(blogTools);


  return {
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      includes: '_includes',
      output: "_site"
    }
  };
}
