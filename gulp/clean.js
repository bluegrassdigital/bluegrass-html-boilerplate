import gulp from 'gulp'
import del from 'del'
import { output } from '../gulpfile.babel'

gulp.task('clean', cb => {
  del.sync([output()])
  setTimeout(cb, 1000)
})
