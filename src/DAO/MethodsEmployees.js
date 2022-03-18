import { bdEmployees } from '../model/employees.js';

class MethodsEmployees{

   //Método Create --------------------
   postTable(){
      try{
         return new Promise((resolve, reject) => {
            const scriptCreateTable = `
               CREATE TABLE IF NOT EXISTS employees (
                  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                  name VARCHAR(50),
                  office VARCHAR(50),
                  wage REAL,
                  cpf INTEGER
               )
            `;

            bdEmployees.run(scriptCreateTable, (e) =>{
               if(!e){
                  resolve("Table created successfully")
               } else {
                  reject("Error creating table")
               }
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }

   //Método Create --------------------
   postEmployees(name, office, wage, cpf) {
      try{ 
         return new Promise((resolve, reject) => {
            const scriptInsertEmployees = `
               INSERT INTO employees (name, office, wage, cpf) VALUES 
               ('${name}', '${office}', ${wage}, ${cpf})
            `;
            bdEmployees.run(scriptInsertEmployees, (e) => {
               if (!e) {
                  resolve(
                  `Data employees 
                  name: ${name} 
                  office: ${office}
                  successfully inserted`
                  );
               } else {
                  reject("Error saving data from employees")
               }
            });
         });
      } catch (e){
         console.error(e.message)
      }
   }

   //Método Read ----------------------
   async getAllEmployees(){
      try{
         return new Promise((resolve, reject) => {   
            const scriptSelectemployees = `SELECT * FROM employees`;            
            bdemployees.all(scriptSelectemployees, (e, rows) => {
               if(!e){
                  resolve(rows)
               } else {
                  reject("Problem getting data")
               }
            })         
         })
      } catch(e) {
         console.error(e.message)
      }
   }

   //Método Read --------------------
   getEmployeeId(id){
      try{
         return new Promise((resolve, reject) => {  
            const scriptSelectEmployeeId = `SELECT * FROM employees WHERE id = ${id}`;
            bdEmployees.get(scriptSelectEmployeeId, (e, row) => {
               if(!e){
                  if(row != undefined){
                     resolve(row)
                  } else {
                     reject("No record found")
                  }
               } else {
                  reject("Unable to access the database")
               }            
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }

   //Método Delete --------------------
   deleteEmployee(id){
      try{
         return new Promise((resolve, reject) => { 
            const scriptDelete = `DELETE FROM employees WHERE id = ${id}`
            bdEmployees.run(scriptDelete, (e) => {
               if(!e){
                  resolve("Successfully deleted record")
               } else {
                  reject("Unable to delete record")
               }
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }

   //Método Update --------------------
   async updateEmployee(id, newName, newOffice, newWage, newCpf){
      try{
         return new Promise((resolve, reject) => {         
            const scriptUpdate = `UPDATE employees SET name='${newName}', office='${newOffice}', wage=${newWage}, cpf=${newCpf} WHERE id = ${id}`;
            bdEmployees.run(scriptUpdate, (e) => {
               if(!e){
                  resolve("Registration successfully updated")
               } else {
                  reject("Unable to update record")
               }
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }
}
export default MethodsEmployees;