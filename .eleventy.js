module.exports = function(eleventyConfig) {
    // Copy the "images" and "css" directory to the output
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk"
    };
};
