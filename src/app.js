const express = require('express')
const routes = require('./routes/index.js')

const app = express();

const port = 3000

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))

routes(app)