var webpack = require('webpack')
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
      test: /\.js$/,
      exclude: /(node_modules|bower_components|docs)/,
      loader: 'babel-loader',
      query: {
        'presets': [
          ['es2015', {
            'loose': true,
            'modules': false
          }], 'stage-3'
        ],
        'plugins': ['lodash']
      }
    }]
  }
}
