const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            'transform-class-properties',
            require.resolve('react-refresh/babel'),
          ],
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  resolve: {
    symlinks: false,
  },
  devtool: 'inline-source-map',
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
    pathinfo: false,
  },
  mode: 'development',
};
