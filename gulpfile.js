const {src, dest} =require('gulp');

const html = () => {
   return src('./src/html/*.html')
   .pipe(dest('./public'));
};

exports.html = html;