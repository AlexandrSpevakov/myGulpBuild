import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import concat from 'gulp-concat';
import cssImport from 'gulp-cssimport';
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
// import size from 'gulp-size';

// Task
export default () => {
   return gulp.src(path.css.src)
   .pipe(concat('main.css'))
   .pipe(cssImport())
   .pipe(autoPrefixer())
   // .pipe(size({title: 'main.css'}))
   .pipe(gulp.dest(path.css.dest))
   .pipe(rename(app.rename))
   .pipe(csso())
   // .pipe(size({title: 'main.min.css'}))
   .pipe(gulp.dest(path.css.dest))
}