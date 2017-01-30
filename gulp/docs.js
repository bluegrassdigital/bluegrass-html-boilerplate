import gulp from 'gulp'
import changed from 'gulp-changed'
import nunjucks from 'gulp-nunjucks-html'
import data from 'gulp-data'
import { output, handleErrors } from '../gulpfile.babel'

import { templateData, nunjucksConfig } from './html'


gulp.task('docs:copy', () => {
  const source = ['./docs/**/*', '!./docs/**/*.{md,markdown}']
  const dest = `${output()}/docs/`

  return gulp.src(source)
    .pipe(changed(dest))
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})

gulp.task('docs:nunjucks', () => {
  const source = ['./docs/**/*.{md,markdown}', './*.{md,markdown}']
  const dest = `${output()}/docs/`

  return gulp.src(source)
    .pipe(data(templateData()))
    .on('error', handleErrors)
    .pipe(nunjucks({
      searchPaths: ['./source'],
      ext: '.md'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})

gulp.task('docs', ['docs:copy', 'docs:nunjucks'])
