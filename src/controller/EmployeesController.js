import MethodsEmployees from '../DAO/MethodsEmployees.js';
import * as validations from '../services/validations.js'

const methods = new MethodsEmployees();

class EmployeesController{

   //Método Create --------------------
   createTable(req, res){
      methods.postTable()
      .then(response => console.log(response))
      .catch(response => console.error(response))
   }

   //Método Create --------------------
   async saveEmployee(req, res) {
      try{
         const dataEmployee = await new Promise((resolve, reject) => {
            resolve([
               req.body.name,
               req.body.office,
               parseFloat(req.body.wage),
               parseInt(req.body.cpf)
            ]);
   
            reject({"message error": "Problems Accessing Employee Information"})         
         })

         //validações
         const validationsName = validations.validationsName(dataEmployee[0])
         const validationsOffice = validations.validationsOffice(dataEmployee[1])
         const validationsCPF = validations.validationsCPF(String(dataEmployee[3]))

         if(!validationsName){
            throw new Error("Problems validating name")
         } else if(!validationsOffice){
            throw new Error("Position non-existent")
         } else if(!validationsCPF){
            throw new Error("CPF invalid")
         } else {
            methods.postEmployee(...dataEmployee)
            .then(response => res.status(200).json(response))
            .catch(response => res.status(400).json(response))
         }         

      } catch(e){
         res.status(400).json(e.message)
      }
   }

   //Método Read ----------------------
   getEmployees(req, res){
      methods.getAllEmployees()
      .then(response => res.status(200).json(response))
      .catch(response => res.status(400).json(response))
   }

   //Método Read --------------------
   getEmployeeId(req, res){
      const id = req.params.id
      methods.getEmployeeId(id)
      .then(response => res.status(200).json(response))
      .catch(response => res.status(400).json(response))
   }

   //Método Delete --------------------
   deleteEmployee(req, res){
      const id = req.params.id
      methods.deleteEmployee(id)
      .then(response => res.status(200).json(response))
      .catch(response => res.status(400).json(response))
   }

   //Método Update --------------------
   async updateEmployee(req, res){
      try{
         const Employees = await new Promise((resolve, reject) => {         
            resolve([
               req.params.id,
               req.body.name,
               req.body.office,
               parseFloat(req.body.wage),
               parseInt(req.body.cpf)
            ])

            reject({"message error": "Problems Accessing Employee Information"})   
         })

         //validações
         const validationsName = validations.validationsName(Employees[1])
         const validationsOffice = validations.validationsOffice(Employees[2])
         const validationsCPF = validations.validationsCPF(String(Employees[4]))

         if(!validationsName){
            throw new Error("Problems validating name")
         } else if(!validationsOffice){
            throw new Error("Position non-existent")
         } else if(!validationsCPF){
            throw new Error("CPF invalid")
         } else {
            methods.updateEmployee(...Employees)
            .then(response => res.status(200).json(response))
            .catch(response => res.status(400).json(response)) 
         } 
         
      } catch(e){
         res.status(400).json({"message error": e.message})
      }      
   }
}

export default EmployeesController;