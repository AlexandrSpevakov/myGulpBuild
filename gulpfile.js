const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Config
const path = require('./config/paths')
const app = require('./config/app')

// Tasks
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
// const css = require('./tasks/css.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');

const server = () => {
   browserSync.init(app.browserSync);
}

const watcher = () => {
   watch(path.html.watch, html).on('all', browserSync.reload);
   watch(path.scss.watch, scss).on('all', browserSync.reload);
   watch(path.js.watch, js).on('all', browserSync.reload);
   watch(path.img.watch, img).on('all', browserSync.reload);
}

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series(
   clear,
   parallel(html, scss, js, img),
   parallel(watcher, server)
);