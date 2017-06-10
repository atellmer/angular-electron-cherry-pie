'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clc = require('cli-color');
const config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

const output = `${config.root}/public/${config.distDir}/`;

const webpackConfig = {
  target: 'electron',
  devtool: 'eval',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.json', '.css', '.html'],
    alias: {
      '@': path.resolve(__dirname, 'client', 'src', 'renderer', 'app')
    }
  },
  entry: {
    'polyfills': path.resolve(__dirname, `${config.root}/src/renderer/polyfills.ts`),
    'vendor': path.resolve(__dirname, `${config.root}/src/renderer/vendor.ts`),
    'app': path.resolve(__dirname, `${config.root}/src/renderer/main.ts`),
    'electron': path.resolve(__dirname, `${config.root}/src/main/index.ts`)
  },
  output: {
    path: path.resolve(__dirname, output),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'awesome-typescript-loader' },
          { loader: 'angular2-template-loader' },
          { loader: 'angular-router-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'to-string-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ],
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'raw-loader' }
        ]
      },
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      },
      {
        test: /\.(gif|jpe?g|png|svg|ico)/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(config.mode)
    }),
    new CleanWebpackPlugin(
      [path.resolve(__dirname, output)], {
        root: '',
        verbose: true,
        dry: false,
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      __dirname
    ),
    new HtmlWebpackPlugin({
      inject: false,
      environment: config.mode,
      filename: path.resolve(__dirname, `${output}index.html`),
      template: path.resolve(__dirname, `${config.root}/src/renderer/index.ejs`)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          configFile: 'tslint.json',
          emitErrors: true
        },
        postcss: () => {
          return [
            require('stylelint')(),
            require('postcss-import')(),
            require('postcss-url')(),
            require('postcss-css-reset')(),
            require('postcss-cssnext')({
              warnForDuplicates: false,
              features: {
                customProperties: false
              }
            }),
            require('postcss-browser-reporter')(),
            require('postcss-reporter')(),
          ];
        }
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
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
  }
}

module.exports = webpackConfig;
