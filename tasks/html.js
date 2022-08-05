const {src, dest} = require('gulp');

// Config
const path = require('../config/paths');
const app = require('../config/app');

// Plugins
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
// const size = require('gulp-size');
const gulpIf = require('gulp-if');

// Task
const html = () => {
   return src(path.html.src)
   .pipe(fileInclude())
   // .pipe(size({title: 'before'}))
   .pipe(gulpIf(app.isProd, htmlmin(app.htmlmin)))
   // .pipe(size({title: 'after'}))
   .pipe(dest(path.html.dest))
}

module.exports = html;