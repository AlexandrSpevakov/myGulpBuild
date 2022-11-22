import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import ts from "gulp-typescript";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";
import size from "gulp-size";

// Task
export default () => {
  return gulp
    .src(path.ts.src)
    .pipe(gulpIf(app.isDev, sourcemaps.init()))
    .pipe(ts())
    .pipe(babel())
    .pipe(gulp.dest(path.ts.dest))
    .pipe(size({ title: "main.min.js" }))
    .pipe(rename(app.rename))
    .pipe(uglify())
    .pipe(size({ title: "main.js" }))
    .pipe(gulpIf(app.isDev, sourcemaps.write(".")))
    .pipe(gulp.dest(path.ts.dest));
};
