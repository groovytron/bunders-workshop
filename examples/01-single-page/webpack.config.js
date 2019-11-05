const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  watch: process.env.NODE_ENV !== 'production',
  devServer: {
    contentBase: path.join(__dirname, 'assets'),
    watchContentBase: true,
    // hot: true,
    compress: false,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
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
