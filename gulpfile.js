const {src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

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
   .pipe(dest('./public'))
   .pipe(browserSync.stream());
}

const server = () => {
   browserSync.init({
      server: {
         baseDir: './public'
      },

      notify: false
   });
}

const watcher = () => {
   watch('./src/html/**/*.html', html);
}

exports.html = html;
exports.watch = watcher;

exports.dev = series(
   html,
   parallel(watcher, server)
);