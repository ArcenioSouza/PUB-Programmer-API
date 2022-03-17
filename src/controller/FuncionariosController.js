import { bdFuncionarios } from '../model/funcionarios.js';
import MetodosFuncionarios from '../DAO/metodosFuncionarios.js';
import { verificaDadosFuncionarios } from '../services/verificaDadosValidos.js';

const metodos = new MetodosFuncionarios();

class FuncionariosController{

   //Método Create --------------------
   createTable(req, res){
      metodos.postTable()
      .then(response => res.send(response))
      .catch(response => res.send(response))
   }

   //Método Create --------------------
   async saveFuncionario(req, res) {
      const dataFuncionario = await new Promise((resolve, reject) => {
         resolve([
            req.body.nome,
            req.body.cargo,
            req.body.salario,
            req.body.cpf
         ]);

         reject("Não foi possivel pegar as informações do funcionário")         
      })

      metodos.postFuncionario(...dataFuncionario)
      .then(response => res.send(response))
      .catch(response => res.send(response))
   }

   //Método Read ----------------------
   async getFuncionarios(req, res){
      metodos.getAllFuncionarios()
      .then(response => res.send(response))
      .catch(response => res.send(response))
   }

   //Método Read --------------------
   getFuncionarioId(req, res){
      const id = req.params.id
      metodos.getFuncionarioId(id)
      .then(response => res.send(response))
      .catch(response => res.send(response))  
   }

   //Método Delete --------------------
   deleteFuncionario(req, res){
      const id = req.params.id
      metodos.deleteFuncionario(id)
      .then(response => res.send(response))
      .catch(response => res.send(response)) 
   }

   //Método Update --------------------
   async updateFuncionario(req, res){
      const novoFuncionario = await new Promise((resolve, reject) => {         
         resolve([
            req.params.id,
            req.body.nome,
            req.body.cargo,
            parseFloat(req.body.salario),
            parseInt(req.body.cpf)
         ])
      })
      metodos.updateFuncionario(...novoFuncionario)
      .then(response => res.send(response))
      .catch(response => res.send(response))       
   }





}

export default FuncionariosController;