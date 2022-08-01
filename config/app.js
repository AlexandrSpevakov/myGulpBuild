// Config
const path = require('./paths.js')

module.exports = {
   browserSync: {
      server: {
         baseDir: path.root
      },

      notify: false
   },

   htmlmin: {
      collapseWhitespace: true
   },

   rename: {
      suffix: '.min'
   }
}