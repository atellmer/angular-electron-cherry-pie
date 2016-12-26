'use strict';

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var clc = require('cli-color');

var config = require('./config');


console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

var webpackConfig = {
  devtool: 'eval',
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    moduleDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },
  entry: {
    'polyfills': path.resolve(__dirname, config.root + '/app/renderer/polyfills.ts'),
    'vendor': path.resolve(__dirname, config.root + '/app/renderer/vendor.ts'),
    'app': path.resolve(__dirname, config.root + '/app/renderer/main.ts'),
    'electron': path.resolve(__dirname, config.root + '/app/main/index.ts')
  },
  output: {
    path: path.resolve(__dirname, config.root + '/public/' + config.distDir + '/'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts', 'angular2-template'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['to-string', 'css', 'postcss']
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(gif|jpe?g|png|svg|ico)/,
      loader: 'url?limit=8192'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file'
    }, ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(config.mode)
    }),
    new CleanWebpackPlugin(
      [path.resolve(__dirname, config.root + '/public/' + config.distDir + '/')], {
        root: '',
        verbose: true,
        dry: false,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      environment: config.mode,
      filename: path.resolve(__dirname, config.root + '/public/' + config.distDir + '/index.html'),
      template: path.resolve(__dirname, config.root + '/app/renderer/index.ejs')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  watchOptions: {
    aggregateTimeout: 100,
  },
  node: {
    __dirname: false,
    __filename: false
  },
  stats: {
		assets: true,
		colors: true,
		version: false,
		hash: false,
		timings: true,
		chunks: true,
		chunkModules: false
	},
  tslint: {
    configFile: 'tslint.json',
    emitErrors: true,
  },
  postcss: function (webpack) {
    return [
      require('stylelint')(),
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-url')(),
      require('postcss-css-reset')(),
      require('postcss-cssnext')({
        browsers: ['> 1%'],
        warnForDuplicates: true,
      }),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
    ];
  }
}
webpackConfig.target = webpackTargetElectronRenderer(webpackConfig);

module.exports = webpackConfig;
