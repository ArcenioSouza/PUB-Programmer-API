import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = 3000

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))

routes(app)