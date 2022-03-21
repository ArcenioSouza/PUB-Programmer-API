import { Router } from 'express';
import EmployeesController from '../controller/EmployeesController.js';

const router = Router();
const employees = new EmployeesController()

router.post("/createTable", employees.createTable)

router.get("/employees", employees.getEmployees)

router.post("/employee", employees.saveEmployee)

router.get("/employee/:id", employees.getEmployeeId)

router.delete("/employee/:id", employees.deleteEmployee)

router.put("/employee/:id", employees.updateEmployee)

export default router;