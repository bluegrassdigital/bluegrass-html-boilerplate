## Getting started

[![Build Status](https://travis-ci.org/bluegrassdigital/bluegrass-html-boilerplate.svg?branch=master)](https://travis-ci.org/bluegrassdigital/bluegrass-html-boilerplate) [![Greenkeeper badge](https://badges.greenkeeper.io/bluegrassdigital/bluegrass-html-boilerplate.svg)](https://greenkeeper.io/)

1. Ensure [NodeJS](https://nodejs.org/en/download/) is installed and `npm` is available on your PATH
2. If it isn't already, install the gulp cli globally `npm i gulp-cli -g`
3. Run `npm install` to install the project dependencies
4. Run `gulp` to launch the project in dev mode

## JavaScript

1. [semistandard](https://github.com/Flet/semistandard) as a way to conform to the same coding styles. This is enforced during compilation.
2. [webpack](https://webpack.github.io/) for commonjs (node style) front-end javascript dependency management
3. [blue-js](https://github.com/bluegrassdigital/blue-js) for a simple dom library alternative to jquery (optional)
4. [blue-widgets](https://github.com/bluegrassdigital/blue-widgets) for creating class based 'widgets' that attach functionality to the dom (optional)

## CSS

1. [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) as a scalable CSS architecture
2. [Sass](http://sass-lang.com/) (Scss syntax) for CSS preprocessing
3. [BEM](http://getbem.com/naming/) for selector naming
4. [Autoprefixer](https://github.com/postcss/autoprefixer) - a post-processing build task to avoid having to write vendor prefixes
5. Scss files are automatically linted with our style rules in the .scss-lint.yml config

## HTML

1. [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for simple layouts and partials to avoid repetitive code
2. Nunjucks pages and partials are automatically linted with our style rules in the .htmlhintrc config to catch some common errors

## Writing Documentation

All the docs for your project live in `./docs` - everything is in markdown and is rendered to the end user using [DocsHub](https://bluegrassdigital.github.io/docshub/), please have a read of those docs in order to understand how it works.

## Gulp tasks

### `gulp`

The default task runs the build in dev mode. Assets are copied or compiled to the `./www` folder and a browsersync+nunjucks dev server is launched which compiles the nunjucks templates on the fly and live reloads the pages when pages or assets change (far quicker than recompiling all templates every time)

### `gulp release`

Run a build in release mode. Instead of compiling all output to `./www` the assets are all compiled and minified to `./dist`. The nunjucks pages are compiled into html.

### `gulp stage`

Same as the default dev build task, but minifies/uglifies CSS and JS and is therefore much slower. Useful for speed testing in dev mode.

### `gulp favicons`

Regenerate favicons (and nunjucks partial) from `./src/favicon.png`

## Upgrading

See [release history](https://github.com/bluegrassdigital/bluegrass-html-boilerplate/releases) for changelogs in order to manually upgrade to a new version
