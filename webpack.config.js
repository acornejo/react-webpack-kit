const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const appSrc = path.resolve(__dirname, "src");
const appEntry = path.join(appSrc, "index.jsx");
const appHtml = path.join(appSrc, "index.html");

const plugins = {
  prod: [
    new HtmlWebpackPlugin({ inject: true, template: appHtml, minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextWebpackPlugin('bundle.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  dev: [
    new HtmlWebpackPlugin({ inject: true, template: appHtml }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};

const styleLoader = {
  prod: {
    test: /\.(scss|css)$/,
    loader: ExtractTextWebpackPlugin.extract('style',
      ['css', 'postcss', 'sass']),
  },
  dev: {
    test: /\.(scss|css)$/,
    loaders: ['style', 'css', 'postcss', 'sass'],
  },
};

const config = {
  devtool: production ? undefined : 'eval',
  entry: [
    // polyfill?
    appEntry,
  ],
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules'),
    ],
  },
  node: {
    fs: 'empty',
  },
  devServer: {
    quiet: false,
    historyApiFallback: true,
    contentBase: './build'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: appSrc,
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: appSrc,
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: appSrc,
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|svg|ttf|woff|woff2)$/,
        loader: 'file',
        include: appSrc,
        exclude: /\/favicon.ico$/,
        query: { name: 'media/[name].[hash:8].[ext]' }
      },
      production ? styleLoader.prod : styleLoader.dev,
    ],
  },
  postcss: [autoprefixer],
  plugins: production ? plugins.prod : plugins.dev,
};

module.exports = config;
