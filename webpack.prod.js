const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(html|css|js)(\?.*)?$/i
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      gifsicle: {
        optimizationLevel: 9
      },
      pngquant: {
        quality: "75"
      },
      plugins: [
        imageminMozjpeg({
          quality: "75"
        })
      ]
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/images/icon.svg",
      icons: {
        twitter: true,
        windows: true
      }
    }),
    new OfflinePlugin()
  ]
});
