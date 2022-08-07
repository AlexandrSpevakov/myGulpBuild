import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
// import size from 'gulp-size';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

// Task
export default () => {
   return gulp.src(path.js.src)
   .pipe(babel())
   .pipe(webpack(app.webpack))
   .pipe(gulp.dest(path.js.dest))
}