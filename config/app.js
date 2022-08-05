const isProd = process.argv.includes('--production');
const isDev = !isProd

// Config
const path = require('./paths.js')

module.exports = {
   isProd: isProd,
   isDev: isDev,

   browserSync: {
      server: {
         baseDir: path.root
      },

      notify: false
   },

   htmlmin: {
      collapseWhitespace: isProd
   },

   rename: {
      suffix: '.min'
   },

   webpack: {
      mode: isProd ? 'production' : 'development'
   },

   imagemin: {
      verbose: true
   }
}