const {src, dest} = require('gulp');

// Config
const path = require('../config/paths')
const app = require('../config/app')

// Plugins
// const size = require('gulp-size');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// Task
const js = () => {
   return src(path.js.src)
   .pipe(babel())
   .pipe(webpack(app.webpack))
   .pipe(dest(path.js.dest))
}

module.exports = js;