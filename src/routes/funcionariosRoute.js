const { Router } = require('express')
const FuncionariosController = require('../controller/FuncionariosController.js')

const router = Router();

router.post("/criaTabela", FuncionariosController.criarTabela)

router.get("/funcionarios", (req, res) => {
   try{
      res.status(200)
      res.send("Get funcionando")
   } catch(error){
      res.status(500)
      res.send("Erro no servidor", error)
   }
})

router.post("/funcionarios", (req, res) => {
   res.send("Post funcionando")
})

module.exports = router;