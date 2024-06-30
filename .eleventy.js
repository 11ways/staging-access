module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode('left', function (content) {
        return `<div class="left">${content}</div>`;
    });
    eleventyConfig.addShortcode('right', function (content) {
        return `<div class="right">${content}</div>`;
    });

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
