const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDir = path.resolve(__dirname, 'public/build');

module.exports = {
  entry: {
    app: './assets/js/app.js',
    styles: './assets/scss/styles.scss',
  },
  output: {
    path: outputDir,
  },
  watch: true,
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
