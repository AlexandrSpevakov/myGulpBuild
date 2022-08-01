const {src, dest} = require('gulp');

// Config
const path = require('../config/paths');
const app = require('../config/app');

// Plugins
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

// Task
const html = () => {
   return src(path.html.src)
   .pipe(fileInclude(app.htmlmin))
   .pipe(size({title: 'before'}))
   .pipe(htmlmin())
   .pipe(size({title: 'after'}))
   .pipe(dest(path.html.dest))
}

module.exports = html;