import gulp from 'gulp';

// Config
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
// import size from 'gulp-size';

// Task
export default () => {
   return gulp.src(path.scss.src)
   .pipe(gulpIf(app.isDev, sourcemaps.init()))
   .pipe(sass())
   .pipe(autoPrefixer())
   .pipe(gulp.dest(path.scss.dest))
   // .pipe(size({title: 'main.css'}))
   .pipe(rename(app.rename))
   .pipe(csso())
   // .pipe(size({title: 'main.min.css'}))
   .pipe(gulpIf(app.isDev, sourcemaps.write('.')))
   .pipe(gulp.dest(path.scss.dest))
}