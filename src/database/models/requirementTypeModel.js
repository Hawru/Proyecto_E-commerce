const path = require('path');
const base = require('./base');

base.setFilePath(path.join(__dirname, '/../data/tipos_de_requerimientos.json'));

module.exports = base;
