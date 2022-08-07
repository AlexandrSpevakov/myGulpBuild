import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
// import size from 'gulp-size';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// Task
export default () => {
   return gulp.src(path.scss.src)
   .pipe(sass())
   .pipe(autoPrefixer())
   // .pipe(size({title: 'main.css'}))
   .pipe(gulp.dest(path.scss.dest))
   .pipe(rename(app.rename))
   .pipe(csso())
   // .pipe(size({title: 'main.min.css'}))
   .pipe(gulp.dest(path.scss.dest))
}