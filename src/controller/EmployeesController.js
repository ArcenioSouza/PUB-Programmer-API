import * as validations from "../services/validations.js";
import employees from "../model/employee.js";

class EmployeesController {
   //Método Create --------------------
   async saveEmployee(req, res) {
      try {
         let employee = new employees(req.body);
         //validações
         const validationsName = validations.validationsName(employee.name);
         const validationsJob = validations.validationsJob(employee.job);
         const validationsCPF = validations.validationsCPF(employee.cpf);

         if (!validationsName) {
            throw new Error("Problems validating name");
         } else if (!validationsJob) {
            throw new Error("Position non-existent");
         } else if (!validationsCPF) {
            throw new Error("CPF invalid");
         } else {
            employee.save((error) => {
               if (error) {
                  res.status(500).send({message: `Fail to save - ${error}`})
               } else {
                  res.status(201).json(employee)
               }
            });
         }
      } catch (e) {
         res.status(400).json(e.message);
      }
   }

   //Método Read ----------------------
   getEmployees(req, res) {
      employees.find((error, employee) => {
         if(error){
            res.status(500).send({message: `Failed to fetch information - ${error}`})
         } else {
            res.status(200).json(employee)            
         }
      })
   }

   //Método Read --------------------
   getEmployeeId(req, res) {
      const id = req.params.id;
      employees.findById(id, (error, employee) => {
         if(error){
            res.status(500).send({message: `Failed to fetch information - ${error}`})
         } else {
            res.status(200).json(employee)            
         }
         
      })
   }

   //Método Delete --------------------
   deleteEmployee(req, res) {
      const id = req.params.id;
      employees.findByIdAndDelete(id, (error) => {
         if(error){
            res.status(500).send({message: `Fail to delete - ${error}`})
         } else {
            res.status(201).send({message: `delete done successfully`})
         }
      })
   }

   //Método Update --------------------
   async updateEmployee(req, res) {
      try {
         let newEmployee = new employees(req.body)
         let id = req.params.id
         //validações
         const validationsName = validations.validationsName(newEmployee.name);
         const validationsJob = validations.validationsJob(newEmployee.job);
         const validationsCPF = validations.validationsCPF(newEmployee.cpf);

         if (!validationsName) {
            throw new Error("Problems validating name");
         } else if (!validationsJob) {
            throw new Error("Position non-existent");
         } else if (!validationsCPF) {
            throw new Error("CPF invalid");
         } else {
            employees.findByIdAndUpdate(id, {$set: req.body}, (error) => {
               if(error){
                  res.status(500).send({message: `Fail to update - ${error}`})
               } else {
                  res.status(201).send({message: `Update done successfully`})
               }
            })
         }
      } catch (e) {
         res.status(400).json({ "message error": e.message });
      }
   }
}

export default EmployeesController;
