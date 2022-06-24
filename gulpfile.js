const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('tinkerbell/scss/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('tinkerbell/dist/css'))
}

function watchTask() {
  watch(['tinkerbell/scss/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)