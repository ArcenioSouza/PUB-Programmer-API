import MetodosFuncionarios from '../DAO/metodosFuncionarios.js';
import * as validacoes from '../services/validacoes.js'

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
      try{
         const dataFuncionario = await new Promise((resolve, reject) => {
            resolve([
               req.body.nome,
               req.body.cargo,
               parseFloat(req.body.salario),
               parseInt(req.body.cpf)
            ]);
   
            reject("Não foi possivel pegar as informações do funcionário")         
         })

         //validações
         const validaNome = validacoes.validaNome(dataFuncionario[0])
         const validaCargo = validacoes.validaCargo(dataFuncionario[1])
         const validaCpf = validacoes.validaCPF(String(dataFuncionario[3]))

         if(!validaNome){
            throw new Error("Problemas com a validação do nome")
         } else if(!validaCargo){
            throw new Error("Cargo inexistente")
         } else if(!validaCpf){
            throw new Error("CPF inválido")
         } else {
            metodos.postFuncionario(...dataFuncionario)
            .then(response => res.send(response))
            .catch(response => res.send(response))
         }         

      } catch(e){
         res.send(e.message)
      }
   }

   //Método Read ----------------------
   getFuncionarios(req, res){
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