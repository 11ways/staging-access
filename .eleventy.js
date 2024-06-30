module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode(
        'leftAlign',
        function (content, className) {
            return `<div class="left">${content}</div>`;
        },
    );

    eleventyConfig.addPairedShortcode(
        'rightAlign',
        function (content, className) {
            return `<div class="right">${content}</div>`;
        },
    );

    // Watch for SCSS changes
    eleventyConfig.addWatchTarget('./scss/');

    // Pass-through file copy for images
    eleventyConfig.addPassthroughCopy('images');

    // Pass-through file copy for images
    eleventyConfig.addPassthroughCopy('scripts');

    return {
        dir: {
            input: '.',
            output: '_site',
        },
    };
};
