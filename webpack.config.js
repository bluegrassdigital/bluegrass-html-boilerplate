var webpack = require('webpack')

module.exports = {
  entry: {
    app: './source/scripts/app.js'
  },
  mode: 'production',
  output: {
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components|docs)/,
      loader: 'babel-loader'
    }]
  }
}
