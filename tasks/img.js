const {src, dest} = require('gulp');

// Config
const path = require('../config/paths')
const app = require('../config/app')

// Plugins
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

// Task
const img = () => {
   return src(path.img.src)
   .pipe(newer(path.img.dest))
   .pipe(imagemin(app.imagemin))
   .pipe(dest(path.img.dest))
}

module.exports = img;