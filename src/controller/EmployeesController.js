import MethodsEmployees from '../DAO/MethodsEmployees.js';
import * as validations from '../services/validations.js'

const methods = new MethodsEmployees();

class EmployeesController{

   //Método Create --------------------
   createTable(req, res){
      methods.postTable()
      .then(response => res.sendStatus(201).send(response))
      .catch(response => res.sendStatus(400).send(response))
   }

   //Método Create --------------------
   async saveEmployees(req, res) {
      try{
         const dataEmployees = await new Promise((resolve, reject) => {
            resolve([
               req.body.nome,
               req.body.cargo,
               parseFloat(req.body.salario),
               parseInt(req.body.cpf)
            ]);
   
            reject("Não foi possivel pegar as informações do funcionário")         
         })

         //validações
         const validationsName = validations.validationsName(dataEmployees[0])
         const validationsOffice = validations.validationsOffice(dataEmployees[1])
         const validationsCPF = validations.validationsCPF(String(dataEmployees[3]))

         if(!validationsName){
            throw new Error("Problemas com a validação do nome")
         } else if(!validationsOffice){
            throw new Error("Cargo inexistente")
         } else if(!validationsCPF){
            throw new Error("CPF inválido")
         } else {
            methods.postEmployees(...dataEmployees)
            .then(response => res.status(200).send(response))
            .catch(response => res.status(400).send(response))
         }         

      } catch(e){
         res.status(400).send(e.message)
      }
   }

   //Método Read ----------------------
   getEmployees(req, res){
      methods.getAllEmployees()
      .then(response => res.status(200).send(response))
      .catch(response => res.status(400).send(response))
   }

   //Método Read --------------------
   getEmployeesId(req, res){
      const id = req.params.id
      methods.getEmployeesId(id)
      .then(response => res.status(200).send(response))
      .catch(response => res.status(400).send(response))
   }

   //Método Delete --------------------
   deleteEmployees(req, res){
      const id = req.params.id
      methods.deleteEmployees(id)
      .then(response => res.status(200).send(response))
      .catch(response => res.status(400).send(response))
   }

   //Método Update --------------------
   async updateEmployees(req, res){
      try{
         const Employees = await new Promise((resolve, reject) => {         
            resolve([
               req.params.id,
               req.body.nome,
               req.body.cargo,
               parseFloat(req.body.salario),
               parseInt(req.body.cpf)
            ])

            reject("Não foi possivel pegar as informações do funcionário")   
         })

         //validações
         const validationsName = validations.validationsName(Employees[1])
         const validationsOffice = validations.validationsOffice(Employees[2])
         const validationsCPF = validations.validationsCPF(String(Employees[4]))

         if(!validationsName){
            throw new Error("Problemas com a validação do nome")
         } else if(!validationsOffice){
            throw new Error("Cargo inexistente")
         } else if(!validationsCPF){
            throw new Error("CPF inválido")
         } else {
            methods.updateEmployees(...Employees)
            .then(response => res.status(200).send(response))
            .catch(response => res.status(400).send(response)) 
         } 
         
      } catch(e){
         res.status(400).send(e.message)
      }      
   }
}

export default EmployeesController;