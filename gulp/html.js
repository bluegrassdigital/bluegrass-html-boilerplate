import gulp from 'gulp'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import nunjucks from 'gulp-nunjucks-html'
import prettify from 'gulp-prettify'
import data from 'gulp-data'
import htmlhint from 'gulp-htmlhint'

import { output, handleErrors } from '../gulpfile.babel'

export const templateData = () => {
  const dataSrc = './source/html/data/*.json'
  let data = {}

  glob.sync(dataSrc)
    .forEach(file => {
      const name = path.basename(file, path.extname(file))
      const filePath = './source/html/data/' + path.basename(file)
      data[name] = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    })

  return { templateData: data }
}

export const nunjucksConfig = {
  searchPaths: ['./source/html'],
  ext: '.html'
}

export const htmlPrettifyConfig = {
  indent_char: ' ',
  indent_size: 2,
  preserve_newlines: false,
  unformatted: [
    // https://www.w3.org/TR/html5/dom.html#phrasing-content
    'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
    'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
    'span', 'strong', 'sub', 'sup', 'svg', 'template', 'script', 'textarea', 'time', 'u', 'var',
    'video', 'wbr', 'text',
    // prexisting - not sure of full effect of removing, leaving in
    'acronym', 'address', 'big', 'dt', 'ins', 'small', 'strike', 'tt',
    'pre',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
  ]
}

const htmlHintConfig = JSON.parse(fs.readFileSync('.htmlhintrc', 'utf8'))

gulp.task('html', function () {
  const source = './source/html/pages/**/*.{njk,nunjucks}'
  const dest = `${output()}/pages`

  return gulp.src(source)
    .pipe(data(templateData()))
    .on('error', handleErrors)
    .pipe(nunjucks(nunjucksConfig))
    .on('error', handleErrors)
    .pipe(prettify(htmlPrettifyConfig))
    .on('error', handleErrors)
    .pipe(htmlhint(htmlHintConfig))
    .pipe(htmlhint.failReporter())
    .on('error', handleErrors)
    .pipe(gulp.dest(dest))
})
