const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Config
const path = require('./config/paths')
const app = require('./config/app')

// Tasks
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');

const server = () => {
   browserSync.init(app.browserSync);
}

const watcher = () => {
   watch(path.html.watch, html).on('all', browserSync.reload);
}

exports.html = html;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series(
   clear,
   html,
   parallel(watcher, server)
);