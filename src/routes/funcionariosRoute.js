import { Router } from 'express';
import FuncionariosController from '../controller/FuncionariosController.js';

const router = Router();
const funcionarios = new FuncionariosController()

router.post("/criarTabela", funcionarios.createTable)

router.get("/funcionarios", funcionarios.getFuncionarios)

router.post("/funcionarios", funcionarios.saveFuncionario)

router.get("/funcionarios/:id", funcionarios.getFuncionarioId)

router.delete("/funcionarios/:id", funcionarios.deleteFuncionario)

router.put("/funcionarios/:id", funcionarios.updateFuncionario)

export default router;