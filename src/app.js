import express from 'express';
import EmployeesController from './controller/EmployeesController.js';
import routes from './routes/index.js';
import dotenv from '.dotenv'

dotenv.config({
   path: `.env.${process.env.NODE_ENV}`,
 });

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))

const postTable = new EmployeesController()
postTable.createTable()

routes(app)