const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const outputDir = path.resolve(__dirname, 'public/build');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    './assets/js/app.js',
  ],
  output: {
    path: outputDir,
    filename: 'js/[name].[contenthash].js'
  },
  // watch: process.env.WEBPACK_MODE !== 'production',
  plugins: [
    new ManifestPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'babel-loader' },
          // {
          //   loader: 'file-loader',
          //   options: {
          //       name: 'js/[name].[contenthash].js',
          //   }
          // },
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          {
            loader: 'file-loader',
            options: {
                name: 'css/[name].[contenthash].css',
            }
          },
          'extract-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  }
};
