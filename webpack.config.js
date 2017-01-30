var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

module.exports = {
  entry: {
    app: './source/scripts/app.js'
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    root: [path.resolve('node_modules')]
  },
  resolveLoader: {
    root: [path.resolve('node_modules')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    preLoaders: [{
      // set up standard-loader as a preloader
      test: /\.jsx?$/,
      loader: 'standard',
      exclude: /(node_modules|bower_components|docs|third-party)/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: JSON.parse(fs.readFileSync('.babelrc', 'utf8'))
    }, {
      test: /modernizr$/,
      loader: 'imports?this=>window,document=>window.document!exports?window.Modernizr'
    }, {
      test: /\.dot$/,
      loader: 'dot-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=25000'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
