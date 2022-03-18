import MetodosFuncionarios from '../DAO/metodosFuncionarios.js';
import * as validacoes from '../services/validacoes.js'

const metodos = new MetodosFuncionarios();

class FuncionariosController{

   //Método Create --------------------
   createTable(req, res){
      metodos.postTable()
      .then(response => res.sendStatus(201).send(response))
      .catch(response => res.sendStatus(400).send(response))
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
            .then(response => res.status(200).send(response))
            .catch(response => res.status(400).send(response))
         }         

      } catch(e){
         res.status(400).send(e.message)
      }
   }

   //Método Read ----------------------
   getFuncionarios(req, res){
      metodos.getAllFuncionarios()
      .then(response => res.status(200).send(response))
      .catch(response => res.status(400).send(response))
   }

   //Método Read --------------------
   getFuncionarioId(req, res){
      const id = req.params.id
      metodos.getFuncionarioId(id)
      .then(response => res.status(200).send(response))
      .catch(response => res.status(400).send(response))
   }

   //Método Delete --------------------
   deleteFuncionario(req, res){
      const id = req.params.id
      metodos.deleteFuncionario(id)
      .then(response => res.status(200).send(response))
      .catch(response => res.status(400).send(response))
   }

   //Método Update --------------------
   async updateFuncionario(req, res){
      try{
         const novoFuncionario = await new Promise((resolve, reject) => {         
            resolve([
               req.params.id,
               req.body.nome,
               req.body.cargo,
               parseFloat(req.body.salario),
               parseInt(req.body.cpf)
            ])
         })

         //validações
         const validaNome = validacoes.validaNome(novoFuncionario[1])
         const validaCargo = validacoes.validaCargo(novoFuncionario[2])
         const validaCpf = validacoes.validaCPF(String(novoFuncionario[4]))

         if(!validaNome){
            throw new Error("Problemas com a validação do nome")
         } else if(!validaCargo){
            throw new Error("Cargo inexistente")
         } else if(!validaCpf){
            throw new Error("CPF inválido")
         } else {
            metodos.updateFuncionario(...novoFuncionario)
            .then(response => res.status(200).send(response))
            .catch(response => res.status(400).send(response)) 
         } 
         
      } catch(e){
         res.status(400).send(e.message)
      }      
   }
}

export default FuncionariosController;