const {src, dest} =require('gulp');

const html = cb => {
   src('./src/html/index.html');

   cb();
};

exports.html = html;