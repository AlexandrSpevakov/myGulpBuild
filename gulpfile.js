const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Config
const path = require('./config/paths')
const app = require('./config/app')

// Tasks
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
const css = require('./tasks/css.js');

const server = () => {
   browserSync.init(app.browserSync);
}

const watcher = () => {
   watch(path.html.watch, html).on('all', browserSync.reload);
   watch(path.css.watch, css).on('all', browserSync.reload);
}

exports.html = html;
exports.css = css;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series(
   clear,
   parallel(html, css),
   parallel(watcher, server)
);