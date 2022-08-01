const {src, dest} =require('gulp');

const html = () => {
   return src('./src/html/index.html')
   .pipe(dest('./public'));
};

exports.html = html;