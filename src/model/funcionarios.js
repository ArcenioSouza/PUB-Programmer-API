const sqlite3 = require('sqlite3')
const { dirname } = require('path')
const { fileURLToPath } = require('url')
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/bdFuncionarios.db'

const bdFuncionarios = new sqlite3.Database(filePath);

module.exports = bdFuncionarios;