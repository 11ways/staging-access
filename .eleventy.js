module.exports = function (eleventyConfig) {
    // Watch for SCSS changes
    eleventyConfig.addWatchTarget('./scss/');

    // Pass-through file copy for compiled CSS
    eleventyConfig.addPassthroughCopy('_site/css');

    // Pass-through file copy for images
    eleventyConfig.addPassthroughCopy('images');

    return {
        dir: {
            input: '.',
            output: '_site',
        },
    };
};
