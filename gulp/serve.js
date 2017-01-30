import gulp from 'gulp'
import { start } from 'nunjucks-browsersync-server'

import { output } from '../gulpfile.babel'
import { templateData } from './html'

gulp.task('serve', () => {
  const watchFiles = [
    `${output()}/**/*.{css,svg,png,jpg,gif,ico,js,md,mp4,webm,woff,woff2,ttf,eot,pdf,html,json,php,webp}`,
    './source/html/**/*.{html,njk,nunjucks}'
  ]
  start({
    staticPath: output(),
    browserSync: {
      files: watchFiles
    },
    nunjucks: {
      root: './source/html',
      renderPath: 'pages',
      data: templateData,
      extension: '.njk'
    }
  })
})
