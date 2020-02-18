const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const nextConfiguration = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    (config.node = {
      fs: "empty"
    }),
      config.module.rules.push(
        {
          test: /\.(svg|jpg|png|svg|gif|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        },
        {
          test: /\svg$/,
          use: ["@svgr/webpack"]
        },
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
      );

    return config;
  }
};
module.exports = withPlugins(
  [[withSass(withCss(withImages()))]],
  nextConfiguration
);
