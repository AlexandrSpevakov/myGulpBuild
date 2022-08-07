import gulp from 'gulp';
import browserSync from 'browser-sync';

// Config
import path from './config/path.js'
import app from './config/app.js'

// Imported Tasks
import clear from './tasks/clear.js';
import html from './tasks/html.js';
// import css from './tasks/css.js';
import scss from './tasks/scss.js';
// import js from './tasks/js.js';
import ts from './tasks/ts.js';
import img from './tasks/img.js';

// Server
const server = () => {
   browserSync.init(app.browserSync);
}

// Watching
const watcher = () => {
   gulp.watch(path.html.watch, html).on('all', browserSync.reload);
   gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
   gulp.watch(path.ts.watch, ts).on('all', browserSync.reload);
   gulp.watch(path.img.watch, img).on('all', browserSync.reload);
}

// Main Tasks
const build = gulp.series(
   clear,
   gulp.parallel(html, scss, ts, img)
);

const dev = gulp.series(
   build,
   gulp.parallel(watcher, server)
);

// Public Tasks
export {clear, html, scss, ts, img};

export default app.isProd ? build : dev;