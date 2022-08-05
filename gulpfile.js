const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Config
const path = require('./config/paths')
const app = require('./config/app')

// Imported Tasks
const server = require('./tasks/server.js');
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
// const css = require('./tasks/css.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');

// Watching
const watcher = () => {
   watch(path.html.watch, html).on('all', browserSync.reload);
   watch(path.scss.watch, scss).on('all', browserSync.reload);
   watch(path.js.watch, js).on('all', browserSync.reload);
   watch(path.img.watch, img).on('all', browserSync.reload);
}

// Main Tasks
const build = series(
   clear,
   parallel(html, scss, js, img)
);

const dev = series(
   build,
   parallel(watcher, server)
);

// Exports
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.watch = watcher;
exports.clear = clear;

exports.default = app.isProd ? build : dev;