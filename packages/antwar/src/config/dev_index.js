const path = require("path");
const merge = require("webpack-merge");

module.exports = function(config) {
  const getCommon = require("./common");

  config.buildDev = config.buildDev || 0; // eslint-disable-line no-param-reassign

  return getCommon(config).then(function(commonConfig) {
    const buildConfig = {
      node: {
        fs: "empty"
      },
      name: "server",
      target: "node",
      entry: {
        site: path.join(__dirname, "../build/site.js")
      },
      output: {
        path: path.join(process.cwd(), "./.antwar/build/"),
        filename: "[name].js",
        publicPath: "/",
        libraryTarget: "commonjs2"
      }
    };

    return merge(commonConfig, buildConfig, config.webpack);
  });
};
