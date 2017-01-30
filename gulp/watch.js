import gulp from 'gulp'

gulp.task('watch', cb => {
  gulp.watch('./source/styles/**/*.scss', ['styles'])
  gulp.watch('./source/static/**/*.{css,svg,png,jpg,gif,ico,js,md,mp4,webm,woff,woff2,ttf,eot,pdf,html,json,php,webp}', ['static'])
  gulp.watch(['./docs/**/*', './*.md'], ['docs'])
})
