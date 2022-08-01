const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Tasks
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');

const server = () => {
   browserSync.init({
      server: {
         baseDir: './public'
      },

      notify: false
   });
}

const watcher = () => {
   watch('./src/html/**/*.html', html).on('all', browserSync.reload);
}

exports.html = html;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series(
   clear,
   html,
   parallel(watcher, server)
);