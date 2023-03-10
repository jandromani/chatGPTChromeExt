const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    background: './src/background/background.js',
    content: './src/content_scripts/content.js',
    popup: './src/popup/index.js',
    options: './src/options/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
        { from: 'src/manifest.json', to: '' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/popup/index.html',
      filename: 'popup/index.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      template: './src/options/index.html',
      filename: 'options/index.html',
      chunks: ['options']
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};