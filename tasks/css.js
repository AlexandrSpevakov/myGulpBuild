const {src, dest} = require('gulp');

// Config
const path = require('../config/paths')
const app = require('../config/app')

// Plugins
const concat = require('gulp-concat');
const cssImport = require('gulp-cssimport');
const autoPrefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');

// Task
const css = () => {
   return src(path.css.src, {sourcemaps: true})
   .pipe(concat('main.css'))
   .pipe(cssImport())
   .pipe(autoPrefixer())
   .pipe(size({title: 'main.css'}))
   .pipe(dest(path.css.dest, {sourcemaps: true}))
   .pipe(rename({suffix: '.min'}))
   .pipe(csso())
   .pipe(size({title: 'main.min.css'}))
   .pipe(dest(path.css.dest, {sourcemaps: true}))
}

module.exports = css;