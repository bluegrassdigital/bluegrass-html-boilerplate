import gulp from 'gulp'
import requireDir from 'require-dir'
import notify from 'gulp-notify'

export const STAGE = 'STAGE'
export const RELEASE = 'RELEASE'
export const DEV = 'DEV'

export let env = DEV

export function output () {
  return (env === DEV || env === STAGE) ? './www' : './dist'
}

export function handleErrors () {
  const args = Array.from(arguments)

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args)

  // Keep gulp from hanging on this task
  this.emit('end')
}

requireDir('./gulp')

gulp.task('_build', gulp.parallel('styles', 'static', 'scripts', 'docs'))

gulp.task('default', gulp.series(cb => {
  env = DEV
  cb()
}, 'clean', '_build', 'serve', 'watch'))

gulp.task('release', gulp.series(cb => {
  env = RELEASE
  cb()
}, 'clean', '_build', 'html'))

gulp.task('stage', gulp.series(cb => {
  env = STAGE
  cb()
}, 'clean', '_build', 'serve', 'watch'))
