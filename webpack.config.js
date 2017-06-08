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
    modules: [path.resolve('node_modules')]
  },
  resolveLoader: {
    modules: [path.resolve('node_modules')]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [{
      // set up standard-loader as a preloader
      test: /\.jsx?$/,
      loader: 'standard-loader',
      exclude: /(docs|third-party)/,
      include: /(source)/,
      enforce: 'pre'
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components|docs|third-party)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: JSON.parse(fs.readFileSync('.babelrc', 'utf8'))
    }]
  }
}
