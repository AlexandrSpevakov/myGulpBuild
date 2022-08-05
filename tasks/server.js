// Plugin
const browserSync = require('browser-sync').create();

// Config
const app = require('../config/app')

const server = () => {
   browserSync.init(app.browserSync);
}

module.exports = server;