const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader?cacheDirectory=true&babelrc=false',
      options: {
        presets: ['env', 'react'],
        plugins: ['transform-class-properties'],
      },
    },
    {
      test: /\.(scss|css)$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      ],
    },
    ],
  },
  resolve: {
    symlinks: false,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  entry: ['./src/index.dev.js', 'webpack-hot-middleware/client'],
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
};
