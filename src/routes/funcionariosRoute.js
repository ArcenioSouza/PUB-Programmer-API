import { Router } from 'express';
import FuncionariosController from '../controller/FuncionariosController.js';

const router = Router();
const funcionarios = new FuncionariosController()

router.post("/criarTabela", funcionarios.criarTabela)

router.get("/funcionarios", (req, res) => {
   try{
      res.status(200)
      res.send("Get funcionando")
   } catch(error){
      res.status(500)
      res.send("Erro no servidor", error)
   }
})

router.post("/funcionarios", funcionarios.salvarFuncionario)

export default router;