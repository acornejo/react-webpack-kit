const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const host = 'localhost';
const port = 8080;

new DevServer(webpack(config), {
  quiet: false,
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(port, host, (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${host}:${port}`);
});
