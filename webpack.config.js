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
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: 'javascript/esm',
        exclude: /node_modules/,
      }
    ]
  },
}
