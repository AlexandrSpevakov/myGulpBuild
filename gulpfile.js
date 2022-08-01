const {src, dest, watch, series, parallel} = require('gulp');

const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

const html = () => {
   return src('./src/html/*.html')
   .pipe(fileInclude())
   .pipe(size({title: 'before'}))
   .pipe(htmlmin({
      collapseWhitespace: true
   }))
   .pipe(size({title: 'after'}))
   .pipe(dest('./public'));
}

const watcher = () => {
   watch('./src/html/**/*.html', html);
}

exports.html = html;
exports.watch = watcher;

exports.dev = series(
   html,
   watcher
);