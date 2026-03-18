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

// module.exports = async function (eleventyConfig) {
// 	const { HtmlBasePlugin } = await import("@11ty/eleventy");

// 	eleventyConfig.addPlugin(HtmlBasePlugin);
// };

// module.exports.config = {
// 	pathPrefix: "/daves-portfolio/",
// }
