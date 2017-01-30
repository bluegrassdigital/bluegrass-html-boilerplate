import gulp from 'gulp'
import changed from 'gulp-changed'
import { output, handleErrors } from '../gulpfile.babel'

gulp.task('static', () => {
  const source = './source/static/**/*.{css,svg,png,jpg,gif,ico,js,md,mp4,webm,woff,woff2,ttf,eot,pdf,html,json,php,webp}'
  const dest = `${output()}/`

  return gulp.src(source)
    .pipe(changed(dest))
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})
