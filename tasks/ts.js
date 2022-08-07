import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import ts from 'gulp-typescript';
// import size from 'gulp-size';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';

// Task
export default () => {
   return gulp.src(path.ts.src)
   .pipe(gulpIf(app.isDev, sourcemaps.init()))
   .pipe(ts())
   .pipe(babel())
   .pipe(gulpIf(app.isDev, sourcemaps.write('.')))
   .pipe(gulp.dest(path.ts.dest))
}