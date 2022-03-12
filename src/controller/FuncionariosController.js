import { bdFuncionarios } from '../model/funcionarios.js';

class FuncionariosController{

   criarTabela(req, res){
      const tabela_funcionarios = `
         CREATE TABLE IF NOT EXISTS funcionarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome VARCHAR(50),
            cargo VARCHAR(50),
            salario FLOAT,
            cpf INTEGER
         )
      `;

      return new Promise((resolve, reject) => {
         return resolve(
            bdFuncionarios.run(tabela_funcionarios, (e) => {
               try{
                  if(!e){
                     res.status(201)
                     res.send("Tabela criada com sucesso")
                  }                 
               }
               catch {
                  res.status(401)
                  res.send("Erro ao criar tabela ", e.message)
               }              
            })
         )
      })

   }

   async salvarFuncionario(req, res) {
      try{
         const funcionario =  await new Promise((resolve, reject) => {
            return resolve({
               nome: req.body.nome,
               cargo: req.body.cargo,
               salario: parseFloat(req.body.salario),
               cpf: parseInt(req.body.cpf)
            })
         })
         
         const infoFuncionarios = `
         INSERT INTO funcionarios (nome, cargo, salario, cpf) VALUES 
            ('${funcionario.nome}', '${funcionario.cargo}', ${funcionario.salario}, ${funcionario.cpf})
         `;

         bdFuncionarios.run(infoFuncionarios, (e) => {
            if (!e) {
               res.send(
               `Dados do funcionario 
               nome: ${funcionario.nome} 
               cargo: ${funcionario.cargo}
               inseridos com sucesso`
               );
            }
         });
      } catch (error){
         res.send("Erro ao salvar dados", error)
      }
   }
}

export default FuncionariosController;