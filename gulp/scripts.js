import gulp from 'gulp'
import webpack from 'webpack'
import gutil from 'gulp-util'

import { output, handleErrors, env, DEV, STAGE } from '../gulpfile.babel'
import wpConfig from '../webpack.config'

gulp.task('scripts', cb => {
  let config = { ...wpConfig }
  let firstRun = true
  if (env === DEV) {
    config.plugins = []
    config.devtool = 'eval-cheap-source-map'
  }
  if (env === DEV || env === STAGE) {
    config.watch = true
  }
  config.output.path = output() + '/assets/scripts/'
  webpack(config, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build', err)
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }))
    if (firstRun) cb()
    firstRun = false
  })
})
