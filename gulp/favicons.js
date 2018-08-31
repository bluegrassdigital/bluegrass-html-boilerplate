import fs from 'fs'
import gulp from 'gulp'
import favicons from 'gulp-favicons'
import wait from 'gulp-wait'

import { handleErrors } from '../gulpfile.babel'

gulp.task('favicons', cb => {
  const source = './source/favicon.png'
  const dest = `./source/static/assets/favicons`

  const faviconConfig = {
    html: './source/html/components/favicons.njk',
    path: '/assets/favicons/',
    background: '#fff', // Background colour for flattened icons. `string`
    icons: {
      android: true, // Create Android homescreen icon. `boolean`
      appleIcon: true, // Create Apple touch icons. `boolean`
      appleStartup: false, // Create Apple startup images. `boolean`
      coast: false, // Create Opera Coast icon. `boolean`
      favicons: true, // Create regular favicons. `boolean`
      firefox: true, // Create Firefox OS icons. `boolean`
      twitter: true, // Create Twitter Summary Card image. `boolean`
      windows: true, // Create Windows 8 tile icons. `boolean`
      yandex: false
    }
  }

  fs.writeFile(faviconConfig.html, '', err => {
    if (err) {
      return console.log(err)
    }
    return gulp.src(source)
      .pipe(favicons(faviconConfig))
      .pipe(wait(5000))
      .on('error', handleErrors)
      .pipe(gulp.dest(dest))
      .on('end', cb)
  })
})
