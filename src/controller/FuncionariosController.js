import { bdFuncionarios } from '../model/funcionarios.js';
import { verificaDadosFuncionarios } from '../services/verificaDadosValidos.js';

class FuncionariosController{

   //Método Create --------------------
   criarTabela(req, res){
      const tabela_funcionarios = `
         CREATE TABLE IF NOT EXISTS funcionarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome VARCHAR(50),
            cargo VARCHAR(50),
            salario REAL,
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

   //Método Create --------------------
   async salvarFuncionario(req, res) {
      try{
         const funcionario = await new Promise((resolve, reject) => {
         
            const result = {
               nome: req.body.nome,
               cargo: req.body.cargo,
               salario: parseFloat(req.body.salario),
               cpf: parseInt(req.body.cpf)
            }
            
            const verificacaoDosDados = verificaDadosFuncionarios(result)

            if(verificacaoDosDados === true){
               resolve(result)
            } else (
               reject()
            )
         })
         
         const infoFuncionarios = `
         INSERT INTO funcionarios (nome, cargo, salario, cpf) VALUES 
            ('${funcionario.nome}', '${funcionario.cargo}', ${funcionario.salario}, ${funcionario.cpf})
         `;

         bdFuncionarios.run(infoFuncionarios, (e) => {
            if (!e) {
               res.status(201)
               res.send(
               `Dados do funcionario 
               nome: ${funcionario.nome} 
               cargo: ${funcionario.cargo}
               inseridos com sucesso`
               );
            }
         });
      } catch (error){
         res.status(500)
         res.send("Erro ao salvar dados do Funcionário")
      }
   }

   //Método Read ----------------------
   async buscarTodosFuncionarios(req, res){
      const scriptSelect = `SELECT * FROM funcionarios`
      try{
         const results = await new Promise((resolve, reject) => {         
            return (
               bdFuncionarios.all(scriptSelect, (e, rows) => {
                  if(!e){
                     resolve(rows)
                  } else {
                     reject("Problema ao obter dados")
                  }
               })
            )         
         })

         res.status(200).json(results)

      } catch(error) {
         res.status(500).json(error)
      }
   }
}

export default FuncionariosController;