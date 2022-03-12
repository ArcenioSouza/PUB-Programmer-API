export function verificaDadosFuncionarios(dados){

   if(dados.nome == undefined || dados.cargo == undefined || dados.salario == undefined || dados.cpf == undefined){
      return false
   }
   else if(typeof dados.nome != "string" || typeof dados.cargo != "string" || typeof dados.salario != "number" || typeof dados.cpf != "number" ){
      return false
   }
   else {
      return true
   }


}

/* const dados = {
   nome: "Arcenio",
   cargo: "Gerente",
   salario: "Não tenho",
   cpf: 333343
}

console.log(verificaDadosFuncionarios(dados)) */