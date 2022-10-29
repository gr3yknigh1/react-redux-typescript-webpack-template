const path = require("path");


module.exports = (env) => {

  const commonWebpackConfigHook = require('./webpack.common');
  const commonWebpackConfig = commonWebpackConfigHook(env);

  console.info("Running in [DEV] mode");

  const developmentWebpackConfig = {
    ...commonWebpackConfig,

    mode: "development",
    devtool: "source-map",

    plugins: [
      ...commonWebpackConfig.plugins,
    ],

    module: {
      rules: [
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    }
  }

  return developmentWebpackConfig;
};
