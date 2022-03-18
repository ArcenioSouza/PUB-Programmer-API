import { Router } from 'express';
import EmployeesController from '../controller/EmployeesController.js';

const router = Router();
const employees = new EmployeesController()

router.post("/createTable", employees.createTable)

router.get("/employees", employees.getEmployees)

router.post("/employees", employees.saveEmployees)

router.get("/employees/:id", employees.getEmployeesId)

router.delete("/employees/:id", employees.deleteEmployees)

router.put("/employees/:id", employees.updateEmployees)

export default router;