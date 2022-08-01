const {src, dest} =require('gulp');

const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

const html = () => {
   return src('./src/html/*.html')
   .pipe(fileInclude())
   .pipe(size({title: 'before'}))
   .pipe(htmlmin({
      collapseWhitespace: true
   }))
   .pipe(size({title: 'after'}))
   .pipe(dest('./public'));
};

exports.html = html;