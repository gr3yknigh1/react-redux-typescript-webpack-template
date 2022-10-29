const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const commonWebpackConfig = {
  entry: path.join(__dirname, "src", "index.tsx"),

  plugins: [
    new HTMLWebpackPlugin({
      template: path.join("public", "index.html")
    }),
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },

  resolve: {
    extensions: ['.js', '.jsx', ".ts", ".tsx", ".css",'.scss'],
    plugins: [new TsconfigPathsPlugin()]
  },
};

module.exports = (env) => {

  const isProfiling = env.profile;
  if (isProfiling) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    commonWebpackConfig.plugins.push(
      new BundleAnalyzerPlugin(),
    );
  }

  return commonWebpackConfig;
};
