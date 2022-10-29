const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {

  const commonWebpackConfigHook = require('./webpack.common');
  const commonWebpackConfig = commonWebpackConfigHook(env);

  const productionWebpackConfig = {
    ...commonWebpackConfig,

    mode: "production",

    plugins: [
      ...commonWebpackConfig.plugins,

      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
      })
    ],

    module: {
      rules: [
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: [
            "ts-loader",
          ]
        },
      ],
    }
  }

  return productionWebpackConfig;
};
