module.exports = function (eleventyConfig) {
  // Passthrough copy: mantém todos os arquivos existentes no output
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.JPG");
  eleventyConfig.addPassthroughCopy("*.JPEG");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("netlify");
  eleventyConfig.addPassthroughCopy("proposta-atmosfera");
  eleventyConfig.addPassthroughCopy("images");

  // Coleção de posts: pega todos os .md em _posts/, ordena do mais recente
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("_posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Filtro de data em português
  eleventyConfig.addFilter("ptDate", function (dateVal) {
    const d = new Date(dateVal);
    return d.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
  };
};
