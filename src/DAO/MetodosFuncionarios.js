import { bdFuncionarios } from '../model/funcionarios.js';

class MetodosFuncionarios{

   //Método Create --------------------
   postTable(){
      try{
         return new Promise((resolve, reject) => {
            const scriptCreateTable = `
               CREATE TABLE IF NOT EXISTS funcionarios (
                  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                  nome VARCHAR(50),
                  cargo VARCHAR(50),
                  salario REAL,
                  cpf INTEGER
               )
            `;

            bdFuncionarios.run(scriptCreateTable, (e) =>{
               if(!e){
                  resolve("Tabela criada com sucesso")
               } else {
                  reject("Erro ao criar tabela")
               }
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }

   //Método Create --------------------
   postFuncionario(nome, cargo, salario, cpf) {
      try{ 
         return new Promise((resolve, reject) => {
            const scriptInsertFuncionario = `
               INSERT INTO funcionarios (nome, cargo, salario, cpf) VALUES 
               ('${nome}', '${cargo}', ${salario}, ${cpf})
            `;
            bdFuncionarios.run(scriptInsertFuncionario, (e) => {
               if (!e) {
                  resolve(
                  `Dados do funcionario 
                  nome: ${nome} 
                  cargo: ${cargo}
                  inseridos com sucesso`
                  );
               } else {
                  reject("Erro ao salvar dados do Funcionario")
               }
            });
         });
      } catch (e){
         console.log(e.message)
      }
   }

   //Método Read ----------------------
   async getAllFuncionarios(){
      try{
         return new Promise((resolve, reject) => {   
            const scriptSelectFuncionarios = `SELECT * FROM funcionarios`;            
            bdFuncionarios.all(scriptSelectFuncionarios, (e, rows) => {
               if(!e){
                  resolve(rows)
               } else {
                  reject("Problema ao obter dados")
               }
            })         
         })
      } catch(e) {
         console.error(e.message)
      }
   }

   //Método Read --------------------
   getFuncionarioId(id){
      try{
         return new Promise((resolve, reject) => {  
            const scriptSelectFuncionarioId = `SELECT * FROM funcionarios WHERE id = ${id}`;
            bdFuncionarios.get(scriptSelectFuncionarioId, (e, row) => {
               if(!e){
                  if(row != undefined){
                     resolve(row)
                  } else {
                     reject("Nenhum registro encontrado")
                  }
               } else {
                  reject("Não foi possivel acessar o banco de dados")
               }            
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }

   //Método Delete --------------------
   deleteFuncionario(id){
      try{
         return new Promise((resolve, reject) => { 
            const scriptDelete = `DELETE FROM funcionarios WHERE id = ${id}`
            bdFuncionarios.run(scriptDelete, (e) => {
               if(!e){
                  resolve("Registro deletado com sucesso")
               } else {
                  reject("Não foi possivel deletar o registro")
               }
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }

   //Método Update --------------------
   async updateFuncionario(id, novoNome, novoCargo, novoSalario, novoCpf){
      try{
         return new Promise((resolve, reject) => {         
            const scriptUpdate = `UPDATE funcionarios SET nome='${novoNome}', cargo='${novoCargo}', salario=${novoSalario}, cpf=${novoCpf} WHERE id = ${id}`;
            bdFuncionarios.run(scriptUpdate, (e) => {
               if(!e){
                  resolve("Registro atualizado com sucesso")
               } else {
                  reject("Não foi possivel atualizar o registro")
               }
            })
         })
      } catch(e){
         console.error(e.message)
      }
   }
}
export default MetodosFuncionarios;