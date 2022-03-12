const funcionarios = require('./funcionariosRoute.js')

module.exports = (app) => {
   app.use(funcionarios)
}