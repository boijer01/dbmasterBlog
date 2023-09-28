module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src", //src på var filerna är
            output: "public"
        }
    };

}