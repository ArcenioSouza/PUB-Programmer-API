import { Router } from 'express';
import FuncionariosController from '../controller/FuncionariosController.js';

const router = Router();
const funcionarios = new FuncionariosController()

router.post("/criarTabela", funcionarios.criarTabela)

router.get("/funcionarios", funcionarios.buscarTodosFuncionarios)

router.post("/funcionarios", funcionarios.salvarFuncionario)

router.get("/funcionarios/:id", funcionarios.buscarFuncionarioId)

router.delete("/funcionarios/:id", funcionarios.excluirFuncionario)

export default router;