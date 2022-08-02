const {src, dest} = require('gulp');

// Config
const path = require('../config/paths')
const app = require('../config/app')

// Plugins
const autoPrefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
// const size = require('gulp-size');
const sass = require('gulp-sass')(require('sass'));

// Task
const scss = () => {
   return src(path.scss.src)
   .pipe(sass())
   .pipe(autoPrefixer())
   // .pipe(size({title: 'main.css'}))
   .pipe(dest(path.scss.dest))
   .pipe(rename(app.rename))
   .pipe(csso())
   // .pipe(size({title: 'main.min.css'}))
   .pipe(dest(path.scss.dest))
}

module.exports = scss;