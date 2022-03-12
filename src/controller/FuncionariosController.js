import { bdFuncionarios } from '../model/funcionarios.js';

class FuncionariosController{

   static criarTabela(req, res){
      const tabela_funcionarios = `
         CREATE TABLE IF NOT EXISTS funcionarios (
            id INTEGER PRIMARY KEY,
            nome VARCHAR(50),
            cargo VARCHAR(50),
            salario FLOAT,
            cpf INTEGER
         )
      `;

      bdFuncionarios.run(tabela_funcionarios, (e) => {
         if(e){
            res.send("Erro ao criar tabela ", e.message)
         } else {
            res.send("Tabela criada com sucesso")
         }
      })
   }
}

export default FuncionariosController;