const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('pocahontas/scss/**/*.scss')
    .pipe(sass())/* 
    .pipe(purgecss({ content: ['*.html'] })) */
    .pipe(dest('pocahontas/dist/css'))
}

function watchTask() {
  watch(['pocahontas/scss/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)