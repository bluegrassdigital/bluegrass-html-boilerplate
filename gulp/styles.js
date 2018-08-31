import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import { importer } from 'npm-sass'

import { handleErrors, output, env, DEV } from '../gulpfile.babel'

gulp.task('styles', () => {
  const source = './source/styles/*.scss'
  const dest = `${output()}/assets/css`

  const sassOpts = {
    errLogToConsole: true,
    outputStyle: env === DEV ? 'expanded' : 'compressed',
    importer
  }

  const apConfig = {
    cascade: true
  }

  return gulp.src(source)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpts).on('error', handleErrors))
    .on('error warn', handleErrors)
    .pipe(postcss([
      autoprefixer(apConfig)
    ]))
    .on('error warn', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest))
})
