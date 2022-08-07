import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
// import size from 'gulp-size';
import gulpIf from 'gulp-if';

// Task
export default () => {
   return gulp.src(path.html.src)
   .pipe(fileInclude())
   // .pipe(size({title: 'before'}))
   .pipe(gulpIf(app.isProd, htmlmin(app.htmlmin)))
   // .pipe(size({title: 'after'}))
   .pipe(gulp.dest(path.html.dest))
}