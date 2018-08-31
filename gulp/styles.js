import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
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
    cascade: true,
    browsers: ['last 3 versions', 'ie 9', 'ie 10', 'ie 11', 'android >= 2.3']
  }

  return gulp.src(source)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpts).on('error', handleErrors))
    .on('error warn', handleErrors)
    .pipe(autoprefixer(apConfig))
    .on('error warn', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest))
})
