// Plugin
const del = require('del');

// Config
const path = require('../config/paths')

const clear = () => {
   return del(path.root);
}

module.exports = clear;