import gulp from 'gulp'
import changed from 'gulp-changed'
import nunjucks from 'gulp-nunjucks-html'
import data from 'gulp-data'
import { output, handleErrors } from '../gulpfile.babel'

import { templateData, nunjucksConfig } from './html'

gulp.task('docs', ['docs:nunjucks:html', 'docs:nunjucks:md'], () => {
  const source = ['./docs/**/*', '!./docs/**/*.{md,markdown}']
  const dest = `${output()}/docs/`

  return gulp.src(source)
    .pipe(changed(dest))
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})

gulp.task('docs:nunjucks:md', () => {
  const source = ['./docs/**/*.{md,markdown}', './*.{md,markdown}']
  const dest = `${output()}/docs/`

  return gulp.src(source)
    .pipe(data(templateData()))
    .on('error', handleErrors)
    .pipe(nunjucks({
      searchPaths: ['./source/html', './source'],
      ext: '.md'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})

gulp.task('docs:nunjucks:html', () => {
  const source = ['./docs/**/*.html']
  const dest = `${output()}/docs/`

  return gulp.src(source)
    .pipe(data(templateData()))
    .on('error', handleErrors)
    .pipe(nunjucks({
      searchPaths: ['./source/html'],
      ext: '.html'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})
