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
      //...
   }

   //Método Read --------------------
   getEmployeeId(req, res) {
      const id = req.params.id;
      //...
   }

   //Método Delete --------------------
   deleteEmployee(req, res) {
      const id = req.params.id;
      //...
   }

   //Método Update --------------------
   async updateEmployee(req, res) {
      try {
         const Employees = await new Promise((resolve, reject) => {
            resolve([
               req.params.id,
               req.body.name,
               req.body.office,
               parseFloat(req.body.wage),
               parseInt(req.body.cpf),
            ]);

            reject({
               "message error": "Problems Accessing Employee Information",
            });
         });

         //validações
         const validationsName = validations.validationsName(Employees[1]);
         const validationsOffice = validations.validationsOffice(Employees[2]);
         const validationsCPF = validations.validationsCPF(
            String(Employees[4])
         );

         if (!validationsName) {
            throw new Error("Problems validating name");
         } else if (!validationsOffice) {
            throw new Error("Position non-existent");
         } else if (!validationsCPF) {
            throw new Error("CPF invalid");
         } else {
            //...
         }
      } catch (e) {
         res.status(400).json({ "message error": e.message });
      }
   }
}

export default EmployeesController;
