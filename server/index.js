const express = require('express');

const app = express();

/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.dev.js');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler, { heartbeat: 1000 }));
}
/* eslint-enable global-require, import/no-extraneous-dependencies */

app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, () => console.log('> Server is running!'));
